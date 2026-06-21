// Offline test: run assembleParts() against the saved UIA trees. No live app.
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { assembleParts, responseComplete } from '../components/part.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TREES = resolve(__dirname, '..', 'trees');

function namedElements(file: string): string[] {
  const content = readFileSync(resolve(TREES, file), 'utf8');
  const docStart = content.indexOf('## DOCUMENT TEXT');
  const body = docStart === -1 ? content : content.slice(0, docStart);
  return body.split('\n').map(l => l.trim()).filter(l => l.startsWith('ControlType.'));
}

for (const file of ['conversation-complete.txt', 'conversation-code.txt', 'conversation-artifact.txt']) {
  console.log(`\n===== ${file} =====`);
  const els = namedElements(file);
  console.log(`elements: ${els.length}, complete: ${responseComplete(els)}`);
  const parts = assembleParts(els);
  console.log(`parts: ${parts.length}`);
  for (const p of parts) {
    const preview = p.toMarkdown().replace(/\s+/g, ' ').slice(0, 140);
    console.log(`  [${p.type}] ${preview}`);
  }
}
