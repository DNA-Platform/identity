// Validator resource for Environmentalism chapter 07: On Compiled Links
// Checks that every markdown link in compiled files resolves to an existing file
// Usage: npx tsx ..environmentalism/07-on-compiled-links--validator.ts <claude-dir>
// Where <claude-dir> is the .claude/ directory (e.g., .claude/)

import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, join, dirname } from 'path';

const claudeDir = process.argv[2];
if (!claudeDir) {
  console.error('Usage: npx tsx 07-on-compiled-links--validator.ts <claude-dir>');
  process.exit(1);
}

const root = resolve(claudeDir);
const projectRoot = resolve(root, '..');
let errors = 0;
let warnings = 0;
let checked = 0;

function checkLinks(filePath: string, resolveFrom: string): void {
  const content = readFileSync(filePath, 'utf-8');
  const linkPattern = /\]\(([^)#\s]+?)(?:#[^)]*)?\)/g;
  let match;

  while ((match = linkPattern.exec(content)) !== null) {
    const target = match[1];
    if (target.startsWith('http') || target.startsWith('mailto') || target.startsWith('`')) continue;
    checked++;

    const resolved = resolve(resolveFrom, target);
    if (!existsSync(resolved)) {
      const rel = filePath.replace(root, '').replace(/\\/g, '/');
      console.log(`BROKEN  ${rel}  ->  ${target}`);
      errors++;
    }
  }
}

console.log(`Validating compiled links from: ${root}\n`);

// Check CLAUDE.md (resolves from project root where it lives)
const claudeMd = join(root, 'CLAUDE.md');
const claudeMdAtRoot = join(projectRoot, 'CLAUDE.md');
const claudeMdPath = existsSync(claudeMdAtRoot) ? claudeMdAtRoot : claudeMd;
if (existsSync(claudeMdPath)) {
  console.log('Checking CLAUDE.md (resolves from project root)...');
  checkLinks(claudeMdPath, projectRoot);
}

// Check agent files (resolve from .claude/agents/)
const agentsDir = join(root, 'agents');
if (existsSync(agentsDir)) {
  console.log('Checking agents/ ...');
  for (const f of readdirSync(agentsDir)) {
    if (f.endsWith('.md')) {
      checkLinks(join(agentsDir, f), agentsDir);
    }
  }
}

// Check rule files (resolve from .claude/rules/)
const rulesDir = join(root, 'rules');
if (existsSync(rulesDir)) {
  console.log('Checking rules/ ...');
  for (const f of readdirSync(rulesDir)) {
    if (f.endsWith('.md')) {
      checkLinks(join(rulesDir, f), rulesDir);
    }
  }
}

console.log(`\n--- Compiled Links Summary ---`);
console.log(`Links checked: ${checked}`);
console.log(`Broken: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) process.exit(1);
