// Codebase introspection tool — reads .ts files and outputs their public API.
// Like a cover for a source file: class names, method signatures, exports.
// Resource for Reference Desk chapter 09.
//
// Usage: npx tsx 09-codebase-index--introspect.ts <file-or-directory>
//   Single file: outputs the API of that file
//   Directory: outputs the API of every .ts file in it (non-recursive)

import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join, basename, extname } from 'path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: npx tsx 09-codebase-index--introspect.ts <file-or-directory>');
  process.exit(1);
}

interface Member {
  kind: 'method' | 'property' | 'function' | 'class' | 'interface' | 'type' | 'export';
  name: string;
  signature: string;
  line: number;
}

function introspect(filePath: string): Member[] {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const members: Member[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Exported class
    const classMatch = trimmed.match(/^export\s+class\s+(\w+)/);
    if (classMatch) {
      members.push({ kind: 'class', name: classMatch[1], signature: trimmed.split('{')[0].trim(), line: i + 1 });
      continue;
    }

    // Exported interface
    const ifaceMatch = trimmed.match(/^export\s+interface\s+(\w+)/);
    if (ifaceMatch) {
      members.push({ kind: 'interface', name: ifaceMatch[1], signature: trimmed.split('{')[0].trim(), line: i + 1 });
      continue;
    }

    // Exported type
    const typeMatch = trimmed.match(/^export\s+type\s+(\w+)/);
    if (typeMatch) {
      members.push({ kind: 'type', name: typeMatch[1], signature: trimmed.split(';')[0].trim(), line: i + 1 });
      continue;
    }

    // Exported function
    const funcMatch = trimmed.match(/^export\s+(?:async\s+)?function\s+(\w+)/);
    if (funcMatch) {
      members.push({ kind: 'function', name: funcMatch[1], signature: trimmed.split('{')[0].trim(), line: i + 1 });
      continue;
    }

    // Class method (public — no private/protected prefix, inside a class)
    const methodMatch = trimmed.match(/^(?:async\s+)?(\w+)\s*\(([^)]*)\)\s*(?::\s*([^{]+))?\s*\{/);
    if (methodMatch && !trimmed.startsWith('if') && !trimmed.startsWith('for') && !trimmed.startsWith('while') && !trimmed.startsWith('function') && !trimmed.startsWith('//')) {
      const name = methodMatch[1];
      if (name === 'constructor' || name === 'get' || name === 'set') continue;
      if (trimmed.startsWith('private ') || trimmed.startsWith('protected ')) continue;
      members.push({ kind: 'method', name, signature: trimmed.split('{')[0].trim(), line: i + 1 });
      continue;
    }

    // Getter
    const getterMatch = trimmed.match(/^get\s+(\w+)\s*\(\)\s*(?::\s*([^{]+))?\s*\{/);
    if (getterMatch) {
      members.push({ kind: 'property', name: getterMatch[1], signature: `get ${getterMatch[1]}(): ${getterMatch[2]?.trim() || 'unknown'}`, line: i + 1 });
    }
  }

  return members;
}

function printFile(filePath: string): void {
  const name = basename(filePath);
  const members = introspect(filePath);
  if (members.length === 0) return;

  console.log(`\n## ${name}`);
  console.log('');

  const classes = members.filter(m => m.kind === 'class');
  const interfaces = members.filter(m => m.kind === 'interface');
  const types = members.filter(m => m.kind === 'type');
  const functions = members.filter(m => m.kind === 'function');
  const methods = members.filter(m => m.kind === 'method');
  const properties = members.filter(m => m.kind === 'property');

  if (classes.length > 0) {
    for (const c of classes) console.log(`- **class** \`${c.name}\` (line ${c.line})`);
  }
  if (interfaces.length > 0) {
    for (const i of interfaces) console.log(`- **interface** \`${i.name}\` (line ${i.line})`);
  }
  if (types.length > 0) {
    for (const t of types) console.log(`- **type** \`${t.name}\` (line ${t.line})`);
  }
  if (functions.length > 0) {
    for (const f of functions) console.log(`- **export** \`${f.signature}\` (line ${f.line})`);
  }
  if (methods.length > 0) {
    console.log('');
    console.log('Methods:');
    for (const m of methods) console.log(`- \`${m.signature}\` (line ${m.line})`);
  }
  if (properties.length > 0) {
    for (const p of properties) console.log(`- \`${p.signature}\` (line ${p.line})`);
  }
}

// Main
const fullPath = resolve(target);
const stat = statSync(fullPath);

if (stat.isFile()) {
  printFile(fullPath);
} else if (stat.isDirectory()) {
  console.log(`# ${basename(fullPath)}/`);
  const files = readdirSync(fullPath)
    .filter(f => extname(f) === '.ts' && !f.endsWith('.d.ts'))
    .sort();
  for (const f of files) {
    printFile(join(fullPath, f));
  }
} else {
  console.error('Not a file or directory:', fullPath);
  process.exit(1);
}
