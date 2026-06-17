///: Codebase introspection tool — reads .ts files and outputs their public API
///: alongside their library annotations (///: lines at the top of files).
///: Annotations are free-form: explain the file's connections to the Reference Desk,
///: which patterns it instantiates, what to read to understand the code.
///: The ///: prefix is distinct from TypeScript's /// <reference> directives.
///:
///: Usage: npx tsx 09-codebase-index--introspect.ts <file-or-directory>
///:   Single file: outputs the annotation + API of that file
///:   Directory: recursively outputs every .ts file's annotation + API
///:
///: See Reference Desk: Codebase Index (09) for the browsing workflow.
///: See Reference Desk: Code-Library Linkage (11) for the annotation convention.

import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join, basename, extname, relative } from 'path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: npx tsx 09-codebase-index--introspect.ts <file-or-directory>');
  process.exit(1);
}

// --- Library annotation parsing ---
// Library annotations use the ///: prefix — three slashes and a colon.
// Distinct from TypeScript's /// <reference> directives.
// The tool reads ///: lines from the top of the file and strips the prefix.
// Authors write as much or as little as the file needs.

function readAnnotation(content: string): string[] {
  const lines = content.split('\n');
  const annotation: string[] = [];
  let started = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('///:')) {
      started = true;
      const comment = trimmed.slice(4).trimStart();
      annotation.push(comment);
    } else if (started) {
      break;
    }
  }

  while (annotation.length > 0 && annotation[annotation.length - 1] === '') {
    annotation.pop();
  }

  return annotation;
}

// --- API introspection ---

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

// --- Output ---

function printFile(filePath: string, rootDir?: string): void {
  const content = readFileSync(filePath, 'utf-8');
  const annotation = readAnnotation(content);
  const members = introspect(filePath);

  const displayName = rootDir ? relative(rootDir, filePath).replace(/\\/g, '/') : basename(filePath);

  console.log(`\n## ${displayName}`);

  if (annotation.length > 0) {
    for (const line of annotation) {
      console.log(`> ${line}`);
    }
  }

  if (members.length === 0) {
    console.log('\n(no public API)');
    return;
  }

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

function walkDir(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory() && !entry.startsWith('.') && entry !== 'node_modules' && entry !== 'debug' && entry !== 'shortcut') {
      files.push(...walkDir(full));
    } else if (stat.isFile() && extname(entry) === '.ts' && !entry.endsWith('.d.ts')) {
      files.push(full);
    }
  }
  return files.sort();
}

// Main
const fullPath = resolve(target);
const stat = statSync(fullPath);

if (stat.isFile()) {
  printFile(fullPath);
} else if (stat.isDirectory()) {
  console.log(`# ${basename(fullPath)}/`);
  const files = walkDir(fullPath);
  for (const f of files) {
    printFile(f, fullPath);
  }
} else {
  console.error('Not a file or directory:', fullPath);
  process.exit(1);
}
