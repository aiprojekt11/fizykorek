-- FizyKorek: schema kont, przypisan kursow i postepu.
-- Plik mozna uruchamiac wielokrotnie. Wklej go w Supabase SQL Editor
-- albo wykonaj przez psql jako wlasciciel bazy.

begin;

create extension if not exists citext with schema extensions;

do $$
begin
  if not exists (
    select 1
    from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'public' and t.typname = 'app_role'
  ) then
    create type public.app_role as enum ('owner', 'teacher', 'student');
  end if;

  if not exists (
    select 1
    from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'public' and t.typname = 'profile_status'
  ) then
    create type public.profile_status as enum ('invited', 'active', 'suspended');
  end if;

  if not exists (
    select 1
    from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'public' and t.typname = 'enrollment_status'
  ) then
    create type public.enrollment_status as enum ('active', 'revoked');
  end if;
end
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email extensions.citext not null unique,
  role public.app_role not null default 'student',
  status public.profile_status not null default 'invited',
  ai_daily_limit integer not null default 20 check (ai_daily_limit between 0 and 10000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.teacher_students (
  teacher_id uuid not null references public.profiles (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  created_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  primary key (teacher_id, student_id),
  check (teacher_id <> student_id)
);

create table if not exists public.courses (
  id text primary key check (length(btrim(id)) > 0),
  title text not null check (length(btrim(title)) > 0),
  content jsonb not null default '{}'::jsonb check (jsonb_typeof(content) = 'object'),
  is_active boolean not null default false,
  created_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.enrollments (
  student_id uuid not null references public.profiles (id) on delete cascade,
  course_id text not null references public.courses (id) on delete cascade,
  status public.enrollment_status not null default 'active',
  assigned_by uuid references public.profiles (id) on delete set null,
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (student_id, course_id),
  check (ends_at is null or ends_at > starts_at)
);

create table if not exists public.student_section_access (
  student_id uuid not null,
  course_id text not null,
  section_id text not null check (length(btrim(section_id)) > 0),
  is_unlocked boolean not null default false,
  granted_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (student_id, course_id, section_id),
  foreign key (student_id, course_id)
    references public.enrollments (student_id, course_id)
    on delete cascade
);

create table if not exists public.task_progress (
  student_id uuid not null,
  course_id text not null,
  task_id text not null check (length(btrim(task_id)) > 0),
  section_id text,
  completed boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (student_id, course_id, task_id),
  foreign key (student_id, course_id)
    references public.enrollments (student_id, course_id)
    on delete cascade
);

create table if not exists public.ai_usage_daily (
  student_id uuid not null references public.profiles (id) on delete cascade,
  usage_date date not null,
  request_count integer not null default 0 check (request_count >= 0),
  input_tokens bigint not null default 0 check (input_tokens >= 0),
  output_tokens bigint not null default 0 check (output_tokens >= 0),
  updated_at timestamptz not null default now(),
  primary key (student_id, usage_date)
);

create table if not exists public.audit_log (
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users (id) on delete set null,
  actor_role public.app_role,
  action text not null check (length(btrim(action)) > 0),
  entity_type text not null check (length(btrim(entity_type)) > 0),
  entity_id text,
  subject_id uuid references auth.users (id) on delete set null,
  details jsonb not null default '{}'::jsonb check (jsonb_typeof(details) = 'object'),
  created_at timestamptz not null default now()
);

create index if not exists teacher_students_student_idx
  on public.teacher_students (student_id);
create index if not exists enrollments_course_status_idx
  on public.enrollments (course_id, status);
create index if not exists enrollments_student_status_idx
  on public.enrollments (student_id, status);
create index if not exists section_access_course_idx
  on public.student_section_access (course_id, section_id);
create index if not exists task_progress_student_completed_idx
  on public.task_progress (student_id, completed);
create index if not exists task_progress_course_idx
  on public.task_progress (course_id, task_id);
create index if not exists audit_log_created_idx
  on public.audit_log (created_at desc);
create index if not exists audit_log_subject_idx
  on public.audit_log (subject_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create or replace function public.sync_task_completed_at()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if new.completed and (tg_op = 'INSERT' or not old.completed) then
    new.completed_at := now();
  elsif not new.completed then
    new.completed_at := null;
  end if;
  return new;
end;
$$;

-- Konto utworzone przez zaproszenie zawsze zaczyna jako student. Celowo nie
-- czytamy roli z raw_user_meta_data ani raw_app_meta_data: uzytkownik nie moze
-- podniesc sobie uprawnien przez metadane Auth.
create or replace function public.sync_auth_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.email is null then
    return new;
  end if;

  insert into public.profiles (id, email, role, status)
  values (
    new.id,
    new.email,
    'student',
    case when new.email_confirmed_at is null then 'invited' else 'active' end
  )
  on conflict (id) do update
  set email = excluded.email,
      status = case
        when public.profiles.status = 'invited'
          and new.email_confirmed_at is not null then 'active'
        else public.profiles.status
      end,
      updated_at = now();

  return new;
end;
$$;

create or replace function public.assert_teacher_student_roles()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  teacher_role public.app_role;
  student_role public.app_role;
begin
  select role into teacher_role from public.profiles where id = new.teacher_id;
  select role into student_role from public.profiles where id = new.student_id;

  if teacher_role <> 'teacher' or student_role <> 'student' then
    raise exception 'teacher_students requires a teacher and a student';
  end if;
  return new;
end;
$$;

create or replace function public.assert_enrollment_student_role()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  selected_role public.app_role;
begin
  select role into selected_role from public.profiles where id = new.student_id;
  if selected_role <> 'student' then
    raise exception 'enrollments.student_id must reference a student profile';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists courses_set_updated_at on public.courses;
create trigger courses_set_updated_at
before update on public.courses
for each row execute function public.set_updated_at();

drop trigger if exists enrollments_set_updated_at on public.enrollments;
create trigger enrollments_set_updated_at
before update on public.enrollments
for each row execute function public.set_updated_at();

drop trigger if exists section_access_set_updated_at on public.student_section_access;
create trigger section_access_set_updated_at
before update on public.student_section_access
for each row execute function public.set_updated_at();

drop trigger if exists task_progress_set_updated_at on public.task_progress;
create trigger task_progress_set_updated_at
before update on public.task_progress
for each row execute function public.set_updated_at();

drop trigger if exists task_progress_sync_completed_at on public.task_progress;
create trigger task_progress_sync_completed_at
before insert or update of completed on public.task_progress
for each row execute function public.sync_task_completed_at();

drop trigger if exists ai_usage_set_updated_at on public.ai_usage_daily;
create trigger ai_usage_set_updated_at
before update on public.ai_usage_daily
for each row execute function public.set_updated_at();

drop trigger if exists teacher_students_validate_roles on public.teacher_students;
create trigger teacher_students_validate_roles
before insert or update on public.teacher_students
for each row execute function public.assert_teacher_student_roles();

drop trigger if exists enrollments_validate_student_role on public.enrollments;
create trigger enrollments_validate_student_role
before insert or update of student_id on public.enrollments
for each row execute function public.assert_enrollment_student_role();

drop trigger if exists on_auth_user_profile_sync on auth.users;
create trigger on_auth_user_profile_sync
after insert or update of email, email_confirmed_at on auth.users
for each row execute function public.sync_auth_user_profile();

-- Funkcje pomocnicze sa SECURITY DEFINER, aby polityki nie zapetlaly sie przez
-- RLS. Kazda ma staly search_path i zwraca wylacznie wartosc logiczna/role.
create or replace function public.current_app_role()
returns public.app_role
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select p.role
  from public.profiles p
  where p.id = auth.uid() and p.status = 'active'
$$;

create or replace function public.current_profile_is_active()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.status = 'active'
  )
$$;

create or replace function public.is_owner()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select coalesce(public.current_app_role() = 'owner', false)
$$;

create or replace function public.is_teacher_of(target_student_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.profiles teacher
    join public.teacher_students ts on ts.teacher_id = teacher.id
    where teacher.id = auth.uid()
      and teacher.role = 'teacher'
      and teacher.status = 'active'
      and ts.student_id = target_student_id
  )
$$;

create or replace function public.has_active_enrollment(
  target_student_id uuid,
  target_course_id text
)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.enrollments e
    join public.profiles p on p.id = e.student_id
    join public.courses c on c.id = e.course_id
    where e.student_id = target_student_id
      and e.course_id = target_course_id
      and e.status = 'active'
      and e.starts_at <= now()
      and (e.ends_at is null or e.ends_at > now())
      and p.role = 'student'
      and p.status = 'active'
      and c.is_active
  )
$$;

create or replace function public.teacher_has_course(target_course_id text)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.profiles teacher
    join public.teacher_students ts on ts.teacher_id = teacher.id
    join public.enrollments e on e.student_id = ts.student_id
    where teacher.id = auth.uid()
      and teacher.role = 'teacher'
      and teacher.status = 'active'
      and e.course_id = target_course_id
  )
$$;

create or replace function public.has_unlocked_section(
  target_student_id uuid,
  target_course_id text,
  target_section_id text
)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select public.has_active_enrollment(target_student_id, target_course_id)
    and exists (
      select 1
      from public.student_section_access s
      where s.student_id = target_student_id
        and s.course_id = target_course_id
        and s.section_id = target_section_id
        and s.is_unlocked
    )
$$;

-- Sprawdza, czy task_id rzeczywiscie lezy w deklarowanym (lub wyliczonym)
-- dziale JSON kursu. Zapobiega ominieciu blokady przez podanie innego section_id.
create or replace function public.can_access_course_task(
  target_student_id uuid,
  target_course_id text,
  target_task_id text,
  declared_section_id text default null
)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.courses c
    cross join lateral jsonb_array_elements(coalesce(c.content -> 'sections', '[]'::jsonb)) section
    where c.id = target_course_id
      and (declared_section_id is null or section ->> 'id' = declared_section_id)
      and public.has_unlocked_section(
        target_student_id,
        target_course_id,
        section ->> 'id'
      )
      and (
        exists (
          select 1
          from jsonb_array_elements(coalesce(section -> 'tasks', '[]'::jsonb)) task
          where task ->> 'id' = target_task_id
        )
        or exists (
          select 1
          from jsonb_array_elements(coalesce(section -> 'subchapters', '[]'::jsonb)) subchapter
          cross join lateral jsonb_array_elements(coalesce(subchapter -> 'tasks', '[]'::jsonb)) task
          where task ->> 'id' = target_task_id
        )
      )
  )
$$;

-- Atomowe zuzycie jednego zapytania AI. p_limit jest opcjonalnym, nizszym
-- limitem dla konkretnego endpointu; nigdy nie podnosi limitu profilu.
create or replace function public.consume_ai_quota(
  p_user_id uuid,
  p_limit integer default null
)
returns table (allowed boolean, used integer, "limit" integer)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  profile_limit integer;
  effective_limit integer;
  current_usage integer;
  today_warsaw date := (now() at time zone 'Europe/Warsaw')::date;
begin
  select p.ai_daily_limit
  into profile_limit
  from public.profiles p
  where p.id = p_user_id
    and p.role = 'student'
    and p.status = 'active';

  if not found then
    return query select false, 0, 0;
    return;
  end if;

  effective_limit := greatest(
    0,
    least(profile_limit, coalesce(p_limit, profile_limit))
  );

  if effective_limit = 0 then
    select coalesce(u.request_count, 0)
    into current_usage
    from (select 1) seed
    left join public.ai_usage_daily u
      on u.student_id = p_user_id and u.usage_date = today_warsaw;
    return query select false, coalesce(current_usage, 0), effective_limit;
    return;
  end if;

  insert into public.ai_usage_daily (student_id, usage_date, request_count)
  values (p_user_id, today_warsaw, 1)
  on conflict (student_id, usage_date) do update
  set request_count = public.ai_usage_daily.request_count + 1
  where public.ai_usage_daily.request_count < effective_limit
  returning request_count into current_usage;

  if found then
    return query select true, current_usage, effective_limit;
  else
    select coalesce(u.request_count, 0)
    into current_usage
    from (select 1) seed
    left join public.ai_usage_daily u
      on u.student_id = p_user_id and u.usage_date = today_warsaw;
    return query select false, coalesce(current_usage, 0), effective_limit;
  end if;
end;
$$;

alter table public.profiles enable row level security;
alter table public.teacher_students enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;
alter table public.student_section_access enable row level security;
alter table public.task_progress enable row level security;
alter table public.ai_usage_daily enable row level security;
alter table public.audit_log enable row level security;

drop policy if exists profiles_select_scoped on public.profiles;
create policy profiles_select_scoped
on public.profiles for select to authenticated
using (
  id = auth.uid()
  or public.is_owner()
  or public.is_teacher_of(id)
);

drop policy if exists teacher_students_select_scoped on public.teacher_students;
create policy teacher_students_select_scoped
on public.teacher_students for select to authenticated
using (
  public.is_owner()
  or (
    teacher_id = auth.uid()
    and public.current_app_role() = 'teacher'
  )
);

drop policy if exists courses_select_scoped on public.courses;
create policy courses_select_scoped
on public.courses for select to authenticated
using (
  public.is_owner()
  or public.teacher_has_course(id)
  or (
    is_active
    and public.has_active_enrollment(auth.uid(), id)
  )
);

drop policy if exists enrollments_select_scoped on public.enrollments;
create policy enrollments_select_scoped
on public.enrollments for select to authenticated
using (
  public.is_owner()
  or public.is_teacher_of(student_id)
  or (
    student_id = auth.uid()
    and public.has_active_enrollment(student_id, course_id)
  )
);

drop policy if exists section_access_select_scoped on public.student_section_access;
create policy section_access_select_scoped
on public.student_section_access for select to authenticated
using (
  public.is_owner()
  or public.is_teacher_of(student_id)
  or (
    student_id = auth.uid()
    and public.has_active_enrollment(student_id, course_id)
  )
);

drop policy if exists task_progress_select_scoped on public.task_progress;
create policy task_progress_select_scoped
on public.task_progress for select to authenticated
using (
  public.is_owner()
  or public.is_teacher_of(student_id)
  or (
    student_id = auth.uid()
    and public.current_profile_is_active()
  )
);

drop policy if exists task_progress_insert_own on public.task_progress;
create policy task_progress_insert_own
on public.task_progress for insert to authenticated
with check (
  student_id = auth.uid()
  and public.current_app_role() = 'student'
  and public.can_access_course_task(student_id, course_id, task_id, section_id)
);

drop policy if exists task_progress_update_own on public.task_progress;
create policy task_progress_update_own
on public.task_progress for update to authenticated
using (
  student_id = auth.uid()
  and public.current_app_role() = 'student'
  and public.can_access_course_task(student_id, course_id, task_id, section_id)
)
with check (
  student_id = auth.uid()
  and public.current_app_role() = 'student'
  and public.can_access_course_task(student_id, course_id, task_id, section_id)
);

drop policy if exists ai_usage_select_scoped on public.ai_usage_daily;
create policy ai_usage_select_scoped
on public.ai_usage_daily for select to authenticated
using (
  public.is_owner()
  or public.is_teacher_of(student_id)
  or (
    student_id = auth.uid()
    and public.current_profile_is_active()
  )
);

drop policy if exists audit_log_select_scoped on public.audit_log;
create policy audit_log_select_scoped
on public.audit_log for select to authenticated
using (
  public.is_owner()
  or (
    actor_id = auth.uid()
    and public.current_app_role() = 'teacher'
  )
  or public.is_teacher_of(subject_id)
);

-- Tabele administracyjne sa tylko do odczytu dla zalogowanego klienta.
-- Mutacje wykonuja endpointy serwerowe kluczem service_role. Jedynym wyjatkiem
-- jest wlasny postep ucznia, dodatkowo chroniony politykami powyzej.
revoke all on table public.profiles from anon, authenticated;
revoke all on table public.teacher_students from anon, authenticated;
revoke all on table public.courses from anon, authenticated;
revoke all on table public.enrollments from anon, authenticated;
revoke all on table public.student_section_access from anon, authenticated;
revoke all on table public.task_progress from anon, authenticated;
revoke all on table public.ai_usage_daily from anon, authenticated;
revoke all on table public.audit_log from anon, authenticated;

grant select on table public.profiles to authenticated;
grant select on table public.teacher_students to authenticated;
grant select on table public.courses to authenticated;
grant select on table public.enrollments to authenticated;
grant select on table public.student_section_access to authenticated;
grant select, insert, update on table public.task_progress to authenticated;
grant select on table public.ai_usage_daily to authenticated;
grant select on table public.audit_log to authenticated;

grant all on table public.profiles to service_role;
grant all on table public.teacher_students to service_role;
grant all on table public.courses to service_role;
grant all on table public.enrollments to service_role;
grant all on table public.student_section_access to service_role;
grant all on table public.task_progress to service_role;
grant all on table public.ai_usage_daily to service_role;
grant all on table public.audit_log to service_role;
grant usage, select on sequence public.audit_log_id_seq to service_role;

revoke all on function public.set_updated_at() from public;
revoke all on function public.sync_task_completed_at() from public;
revoke all on function public.sync_auth_user_profile() from public;
revoke all on function public.assert_teacher_student_roles() from public;
revoke all on function public.assert_enrollment_student_role() from public;
revoke all on function public.current_app_role() from public;
revoke all on function public.current_profile_is_active() from public;
revoke all on function public.is_owner() from public;
revoke all on function public.is_teacher_of(uuid) from public;
revoke all on function public.has_active_enrollment(uuid, text) from public;
revoke all on function public.teacher_has_course(text) from public;
revoke all on function public.has_unlocked_section(uuid, text, text) from public;
revoke all on function public.can_access_course_task(uuid, text, text, text) from public;
revoke all on function public.consume_ai_quota(uuid, integer) from public;

grant execute on function public.current_app_role() to authenticated;
grant execute on function public.current_profile_is_active() to authenticated;
grant execute on function public.is_owner() to authenticated;
grant execute on function public.is_teacher_of(uuid) to authenticated;
grant execute on function public.has_active_enrollment(uuid, text) to authenticated;
grant execute on function public.has_active_enrollment(uuid, text) to service_role;
grant execute on function public.teacher_has_course(text) to authenticated;
grant execute on function public.has_unlocked_section(uuid, text, text) to authenticated;
grant execute on function public.can_access_course_task(uuid, text, text, text) to authenticated;
grant execute on function public.consume_ai_quota(uuid, integer) to service_role;

commit;
