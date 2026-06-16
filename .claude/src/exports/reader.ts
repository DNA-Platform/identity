// Reader — opens the export ZIP and reads entries using adm-zip.
// Conversations use a CJS child process for stream parsing (avoids 512MB string limit).
// Output goes to a JSONL file, then read line-by-line to stay under memory limits.

import AdmZip from 'adm-zip';
import { createReadStream, mkdtempSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { tmpdir } from 'os';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import { createInterface } from 'readline';
import type { ExportConversation, ExportProject, ExportUser, ExportMemory } from './types.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ExportReader {
  private zip: AdmZip;

  constructor(zipPath: string) {
    console.log(`[reader] Opening ${zipPath}...`);
    this.zip = new AdmZip(zipPath);
  }

  readUsers(): ExportUser[] {
    return this.readJson('users.json');
  }

  readMemories(): ExportMemory[] {
    return this.readJson('memories.json');
  }

  readProject(entryName: string): ExportProject {
    return this.readJson(entryName);
  }

  listProjectEntries(): string[] {
    return this.zip.getEntries()
      .map(e => e.entryName)
      .filter(name => name.startsWith('projects/') && name.endsWith('.json'));
  }

  readAllProjects(): ExportProject[] {
    return this.listProjectEntries().map(name => this.readProject(name));
  }

  async readConversations(): Promise<ExportConversation[]> {
    console.log('[reader] Extracting conversations.json to disk...');
    const tmp = mkdtempSync(resolve(tmpdir(), 'dna-export-'));
    const extractPath = resolve(tmp, 'conversations.json');
    const jsonlPath = resolve(tmp, 'conversations.jsonl');

    try {
      this.zip.extractEntryTo('conversations.json', tmp, false, true);
      console.log('[reader] Stream-parsing via child process...');

      const script = resolve(__dirname, 'parse-conversations.cjs');
      execFileSync('node', [script, extractPath, jsonlPath], {
        stdio: ['pipe', 'pipe', 'inherit'],
        timeout: 300000,
      });

      console.log('[reader] Reading JSONL output...');
      const conversations: ExportConversation[] = [];
      const rl = createInterface({ input: createReadStream(jsonlPath, 'utf-8') });

      for await (const line of rl) {
        if (line.trim()) conversations.push(JSON.parse(line));
      }

      console.log(`[reader] ${conversations.length} conversations`);
      return conversations;
    } finally {
      rmSync(tmp, { recursive: true, force: true });
    }
  }

  private readText(entryName: string): string {
    const entry = this.zip.getEntry(entryName);
    if (!entry) throw new Error(`Entry not found in ZIP: ${entryName}`);
    return entry.getData().toString('utf-8');
  }

  private readJson<T>(entryName: string): T {
    return JSON.parse(this.readText(entryName));
  }
}
