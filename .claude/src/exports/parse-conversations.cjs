// Streams conversations.json (top-level JSON array) to an output file as JSON lines.
// Uses a simple bracket-counting approach — no dependencies needed.

const { createReadStream, createWriteStream } = require('fs');

const filePath = process.argv[2];
const outputPath = process.argv[3];
if (!filePath || !outputPath) { process.stderr.write('Usage: node parse-conversations.cjs <input> <output>\n'); process.exit(1); }

const out = createWriteStream(outputPath);

let depth = 0;
let inString = false;
let escaped = false;
let buffer = '';
let count = 0;
let started = false;

const stream = createReadStream(filePath, { encoding: 'utf-8', highWaterMark: 64 * 1024 });

stream.on('data', (chunk) => {
  for (let i = 0; i < chunk.length; i++) {
    const ch = chunk[i];

    if (escaped) { escaped = false; buffer += ch; continue; }
    if (ch === '\\' && inString) { escaped = true; buffer += ch; continue; }
    if (ch === '"') { inString = !inString; buffer += ch; continue; }
    if (inString) { buffer += ch; continue; }

    if (ch === '[' && !started) { started = true; continue; }
    if (ch === ']' && depth === 0 && started) { break; }

    if (ch === '{') {
      if (depth === 0) buffer = '';
      depth++;
      buffer += ch;
    } else if (ch === '}') {
      depth--;
      buffer += ch;
      if (depth === 0) {
        out.write(buffer + '\n');
        count++;
        if (count % 100 === 0) process.stderr.write(`\r[conversations] ${count}...`);
        buffer = '';
      }
    } else if (depth > 0) {
      buffer += ch;
    }
  }
});

stream.on('end', () => {
  out.end(() => {
    process.stderr.write(`\r[conversations] ${count} total\n`);
  });
});

stream.on('error', (err) => {
  process.stderr.write(`Error: ${err.message}\n`);
  process.exit(1);
});
