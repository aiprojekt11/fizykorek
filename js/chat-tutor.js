/**
 * FizyKorek 2.0 – Contextual AI Chatbot Tutor Module
 * Obsługuje inteligentny czat powiązany z aktywnym zadaniem, smart buttons oraz strumieniowanie KaTeX.
 */

class FizyKorekChatTutor {
    constructor() {
        this.currentTask = null;
        this.currentCourseId = null;
        this.isLoading = false;
        this.messages = [];
        this.abortController = null;

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.dom = {
            chatContainer: document.getElementById('chatMessagesArea'),
            chatInput: document.getElementById('chatInput'),
            sendBtn: document.getElementById('chatSendBtn'),
            smartButtons: document.querySelectorAll('.smart-btn'),
            typingIndicator: document.getElementById('chatTypingIndicator'),
            emptyState: document.getElementById('chatEmptyState'),
            clearChatBtn: document.getElementById('clearChatBtn'),
            currentTaskLabel: document.getElementById('chatCurrentTaskLabel'),
        };
    }

    bindEvents() {
        if (this.dom.sendBtn) {
            this.dom.sendBtn.addEventListener('click', () => this.handleSendMessage());
        }

        if (this.dom.chatInput) {
            this.dom.chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.handleSendMessage();
                }
            });

            this.dom.chatInput.addEventListener('input', () => {
                this.autoResizeTextarea();
            });
        }

        if (this.dom.smartButtons) {
            this.dom.smartButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const prompt = btn.getAttribute('data-prompt');
                    if (prompt) {
                        this.handleSendMessage(prompt);
                    }
                });
            });
        }

        if (this.dom.clearChatBtn) {
            this.dom.clearChatBtn.addEventListener('click', () => {
                this.clearCurrentTaskChat();
            });
        }
    }

    autoResizeTextarea() {
        const textarea = this.dom.chatInput;
        if (!textarea) return;
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }

    setTaskContext(courseId, task) {
        this.currentCourseId = courseId;
        this.currentTask = task;

        if (this.dom.currentTaskLabel) {
            this.dom.currentTaskLabel.textContent = task ? task.title : 'Wybierz zadanie';
        }

        // Load saved chat for this task
        const storageKey = `fizykorek_chat_${task ? task.id : 'global'}`;
        try {
            const saved = localStorage.getItem(storageKey);
            this.messages = saved ? JSON.parse(saved) : [];
        } catch {
            this.messages = [];
        }

        this.renderMessages();
    }

    saveChat() {
        if (!this.currentTask) return;
        const storageKey = `fizykorek_chat_${this.currentTask.id}`;
        try {
            localStorage.setItem(storageKey, JSON.stringify(this.messages));
        } catch (e) {
            console.warn('Nie udało się zapisać czatu w localStorage:', e);
        }
    }

    clearCurrentTaskChat() {
        if (!this.currentTask) return;
        this.messages = [];
        const storageKey = `fizykorek_chat_${this.currentTask.id}`;
        localStorage.removeItem(storageKey);
        this.renderMessages();
    }

    renderMessages() {
        if (!this.dom.chatContainer) return;

        if (this.messages.length === 0) {
            if (this.dom.emptyState) this.dom.emptyState.classList.remove('hidden');
            this.dom.chatContainer.innerHTML = '';
            return;
        }

        if (this.dom.emptyState) this.dom.emptyState.classList.add('hidden');
        this.dom.chatContainer.innerHTML = '';

        this.messages.forEach(msg => {
            this.appendMessageElement(msg.role, msg.content, false);
        });

        this.scrollToBottom();
        this.triggerKaTeX(this.dom.chatContainer);
    }

    appendMessageElement(role, rawContent, isStreaming = false) {
        if (this.dom.emptyState) this.dom.emptyState.classList.add('hidden');

        const messageEl = document.createElement('div');
        messageEl.className = `chat-bubble chat-bubble-${role}`;

        const roleBadge = document.createElement('div');
        roleBadge.className = 'chat-bubble-badge';
        roleBadge.innerHTML = role === 'user' 
            ? '<span>🧑‍🎓 Ty</span>' 
            : '<span class="ai-badge-label">⚛️ FizyKorek AI</span>';

        const contentEl = document.createElement('div');
        contentEl.className = 'chat-bubble-content';
        contentEl.innerHTML = this.formatMarkdown(rawContent);

        messageEl.appendChild(roleBadge);
        messageEl.appendChild(contentEl);

        this.dom.chatContainer.appendChild(messageEl);
        this.scrollToBottom();

        if (!isStreaming) {
            this.triggerKaTeX(messageEl);
        }

        return contentEl;
    }

    async handleSendMessage(customPrompt = null) {
        if (this.isLoading) return;

        const text = customPrompt || (this.dom.chatInput ? this.dom.chatInput.value.trim() : '');
        if (!text) return;

        if (this.dom.chatInput && !customPrompt) {
            this.dom.chatInput.value = '';
            this.autoResizeTextarea();
        }

        // Add user message
        this.messages.push({ role: 'user', content: text });
        this.appendMessageElement('user', text);
        this.saveChat();

        // Show typing indicator
        this.isLoading = true;
        this.setLoadingState(true);

        // Prepare contents for Gemini API (format: { role: 'user'|'model', parts: [{ text }] })
        const apiContents = this.messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
        }));

        // Stream response container
        const responseContentEl = this.appendMessageElement('model', '', true);
        let fullAiText = '';

        try {
            this.abortController = new AbortController();
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: apiContents,
                    courseId: this.currentCourseId,
                    taskContext: this.currentTask ? {
                        id: this.currentTask.id,
                        title: this.currentTask.title,
                        source: this.currentTask.source,
                        problem: this.currentTask.problem,
                        solution: this.currentTask.solution
                    } : null
                }),
                signal: this.abortController.signal
            });

            if (!response.ok) {
                const errJson = await response.json().catch(() => ({}));
                throw new Error(errJson.error || `Błąd serwera (${response.status})`);
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop(); // keep partial line

                for (const line of lines) {
                    const trimmed = line.trim();
                    if (!trimmed || !trimmed.startsWith('data:')) continue;

                    const jsonStr = trimmed.replace(/^data:\s*/, '');
                    if (jsonStr === '[DONE]') break;

                    try {
                        const parsed = JSON.parse(jsonStr);
                        const chunk = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                        if (chunk) {
                            fullAiText += chunk;
                            responseContentEl.innerHTML = this.formatMarkdown(fullAiText);
                            this.scrollToBottom();
                        }
                    } catch (e) {
                        // ignore malformed SSE chunks
                    }
                }
            }

            // Finished streaming
            this.messages.push({ role: 'model', content: fullAiText });
            this.saveChat();
            this.triggerKaTeX(responseContentEl.parentElement);

        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Chat error:', err);
                const errorMsg = `⚠️ **Błąd asystenta:** ${err.message || 'Nie udało się uzyskać odpowiedzi.'}\n\n*Upewnij się, że w pliku .env skonfigurowano poprawny klucz GEMINI_API_KEY.*`;
                responseContentEl.innerHTML = this.formatMarkdown(errorMsg);
                this.messages.push({ role: 'model', content: errorMsg });
                this.saveChat();
            }
        } finally {
            this.isLoading = false;
            this.setLoadingState(false);
            this.scrollToBottom();
        }
    }

    setLoadingState(loading) {
        if (this.dom.typingIndicator) {
            this.dom.typingIndicator.classList.toggle('hidden', !loading);
        }
        if (this.dom.sendBtn) {
            this.dom.sendBtn.disabled = loading;
        }
    }

    scrollToBottom() {
        const area = document.getElementById('chatMessagesScrollArea');
        if (area) {
            setTimeout(() => {
                area.scrollTop = area.scrollHeight;
            }, 50);
        }
    }

    triggerKaTeX(container) {
        if (window.renderMathInElement && container) {
            try {
                window.renderMathInElement(container, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false },
                        { left: '\\[', right: '\\]', display: true },
                        { left: '\\(', right: '\\)', display: false }
                    ],
                    throwOnError: false
                });
            } catch (e) {
                console.warn('KaTeX render error:', e);
            }
        }
    }

    formatMarkdown(text) {
        if (!text) return '';

        // Simple and safe markdown parsing (headers, bold, lists, code)
        let html = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Headers
        html = html.replace(/^### (.*$)/gim, '<h4 class="chat-h4">$1</h4>');
        html = html.replace(/^## (.*$)/gim, '<h3 class="chat-h3">$1</h3>');
        html = html.replace(/^# (.*$)/gim, '<h2 class="chat-h2">$1</h2>');

        // Bold & Italic
        html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

        // Bullet lists
        html = html.replace(/^\s*[-•*]\s+(.*$)/gim, '<li class="chat-li">$1</li>');
        html = html.replace(/(<li.*<\/li>)/s, '<ul class="chat-ul">$1</ul>');

        // Line breaks
        html = html.replace(/\n\n/g, '<p class="chat-p"></p>');
        html = html.replace(/\n/g, '<br>');

        return html;
    }
}

window.FizyKorekChatTutor = FizyKorekChatTutor;
