// YAML-to-markdown frontmatter migration tool
// Converts YAML frontmatter blocks to markdown metadata bullets.
// One-time migration resource — see 06-the-yaml-migration.md.
//
// Usage: npx tsx yaml-to-markdown-migration.ts <library-path> [--write]
//   Without --write: preview mode, shows what would change
//   With --write: modifies files in place

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { resolve, join, relative } from 'path';

const target = process.argv[2];
const writeMode = process.argv.includes('--write');

if (!target) {
  console.error('Usage: npx tsx yaml-to-markdown-migration.ts <library-path> [--write]');
  process.exit(1);
}

const root = resolve(target);

// Counters
let filesProcessed = 0;
let filesChanged = 0;
let filesSkipped = 0;

// Known fields in canonical order. title is consumed as the heading.
// links and summary are dropped. Everything else becomes a bullet.
const canonicalOrder = ['catalogues', 'specification', 'author', 'coauthor', 'subject'];
const droppedFields = ['title', 'links', 'summary'];

interface ParsedYaml {
  fields: Map<string, string>;
  rawBlock: string; // the full --- ... --- block including markers
}

function parseYamlBlock(content: string): ParsedYaml | null {
  // Match the opening --- through the closing ---, handling both \n and \r\n
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const rawBlock = match[0];
  const yamlBody = match[1];
  const fields = new Map<string, string>();
  const lines = yamlBody.split(/\r?\n/);

  let currentKey = '';
  for (const line of lines) {
    // A new key-value pair
    const keyMatch = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      fields.set(currentKey, keyMatch[2].trim());
    } else if (currentKey && /^\s/.test(line)) {
      // Continuation line (multi-line value like links:)
      const existing = fields.get(currentKey) || '';
      const trimmed = line.trim();
      if (trimmed) {
        // For list items (- "value"), accumulate them
        fields.set(currentKey, existing ? existing + '\n' + trimmed : trimmed);
      }
    }
  }

  return { fields, rawBlock };
}

function stripYamlQuotes(value: string): string {
  // Remove outer quotes that YAML required: "value" -> value, 'value' -> value
  // Preserve internal content exactly (especially markdown links)
  if ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function formatFieldValue(value: string): string {
  return stripYamlQuotes(value);
}

function migrateFile(filePath: string): void {
  filesProcessed++;

  const content = readFileSync(filePath, 'utf-8');

  // Check for YAML frontmatter
  if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) {
    filesSkipped++;
    return;
  }

  const parsed = parseYamlBlock(content);
  if (!parsed) {
    filesSkipped++;
    return;
  }

  const { fields, rawBlock } = parsed;

  // Determine the title — YAML title is authoritative
  const title = stripYamlQuotes(fields.get('title') || '');

  // Find what comes after the YAML block
  let afterYaml = content.slice(rawBlock.length);

  // Detect line ending style
  const lineEnding = content.includes('\r\n') ? '\r\n' : '\n';

  // Strip leading whitespace/newlines after YAML block
  afterYaml = afterYaml.replace(/^(\r?\n)+/, '');

  // Check if the first line after YAML is a # heading that matches the title
  const headingMatch = afterYaml.match(/^# (.+?)(\r?\n)/);
  let restOfContent: string;

  if (headingMatch) {
    // Remove the existing heading — we'll use the YAML title instead
    restOfContent = afterYaml.slice(headingMatch[0].length);
    // Strip leading blank lines after the removed heading
    restOfContent = restOfContent.replace(/^(\r?\n)+/, '');
  } else {
    restOfContent = afterYaml;
  }

  // Build the metadata bullets in canonical order
  const bullets: string[] = [];

  // First: canonical fields in order
  for (const field of canonicalOrder) {
    if (fields.has(field)) {
      bullets.push(`- **${field}:** ${formatFieldValue(fields.get(field)!)}`);
    }
  }

  // Then: unknown fields (not canonical, not dropped, not title)
  for (const [key, value] of fields) {
    if (!canonicalOrder.includes(key) && !droppedFields.includes(key)) {
      bullets.push(`- **${key}:** ${formatFieldValue(value)}`);
    }
  }

  // Build the new content
  const parts: string[] = [];

  // Heading
  parts.push(`# ${title}`);
  parts.push('');

  // Metadata bullets (if any)
  if (bullets.length > 0) {
    for (const bullet of bullets) {
      parts.push(bullet);
    }
    parts.push('');
    parts.push('---');
    parts.push('');
  }

  // Rest of content
  parts.push(restOfContent);

  const newContent = parts.join(lineEnding);

  // Check if anything actually changed
  if (newContent === content) {
    filesSkipped++;
    return;
  }

  filesChanged++;

  const relPath = relative(root, filePath).replace(/\\/g, '/');

  if (writeMode) {
    writeFileSync(filePath, newContent, 'utf-8');
    console.log(`WRITE   ${relPath}`);
  } else {
    console.log(`CHANGE  ${relPath}`);

    // Show a compact preview: the new header block
    const previewLines = newContent.split(/\r?\n/).slice(0, Math.min(10, 2 + bullets.length + 3));
    for (const line of previewLines) {
      console.log(`        ${line}`);
    }
    console.log('');
  }
}

function walkDir(dir: string): void {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }

  for (const entry of entries) {
    const full = join(dir, entry);

    // Skip .tooling/ and .archive/ directories
    if (entry === '.tooling' || entry === '.archive') continue;

    let stat;
    try {
      stat = statSync(full);
    } catch {
      continue;
    }

    if (stat.isDirectory()) {
      walkDir(full);
    } else if (entry.endsWith('.md')) {
      migrateFile(full);
    }
  }
}

console.log(`${writeMode ? 'MIGRATING' : 'PREVIEWING'}: ${root}\n`);

walkDir(root);

console.log(`\n--- Migration Summary ---`);
console.log(`Files processed: ${filesProcessed}`);
console.log(`Files changed:   ${filesChanged}`);
console.log(`Files skipped:   ${filesSkipped} (no YAML frontmatter)`);

if (!writeMode && filesChanged > 0) {
  console.log(`\nRun with --write to apply changes.`);
}
