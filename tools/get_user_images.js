const fs = require('fs');

const lines = fs.readFileSync('C:/Users/barto/.gemini/antigravity-ide/brain/efe18023-2a14-4770-8956-aa96b22443a4/.system_generated/logs/transcript.jsonl', 'utf8').trim().split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  const obj = JSON.parse(lines[i]);
  if (obj.type === 'USER_INPUT') {
    console.log('Step index:', obj.step_index);
    console.log('Content:', JSON.stringify(obj.content));
    console.log('Attachments/Media:');
    if (obj.media_paths) console.log('media_paths:', obj.media_paths);
    if (obj.files) console.log('files:', obj.files);
    // Print all keys
    console.log('Keys:', Object.keys(obj));
    break;
  }
}
