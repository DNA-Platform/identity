// Writer — writes parsed export data to the browsable folder structure.
// Produces: memories.md, projects/*/, conversations/*.md, artifacts/

import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { ExportConversation, ExportProject, ExportMemory } from './types.ts';
import type { ExtractedArtifact } from './artifacts.ts';
import { toFilename, datedFilename, safeFilename, fileExtension } from './naming.ts';
import { artifactFilename, artifactIndexMarkdown } from './artifacts.ts';
import {
  conversationToMarkdown,
  conversationFilename,
  projectCoverToMarkdown,
  filesCoverToMarkdown,
  fileChapterToMarkdown,
  memoriesToMarkdown,
} from './format.ts';

export class ExportWriter {
  constructor(private readonly outputDir: string) {}

  writeMemories(memories: ExportMemory[]): void {
    writeFileSync(join(this.outputDir, 'memories.md'), memoriesToMarkdown(memories), 'utf-8');
    console.log('[writer] Wrote memories.md');
  }

  writeProject(project: ExportProject): void {
    const projectDir = join(this.outputDir, 'projects', toFilename(project.name));
    mkdirSync(projectDir, { recursive: true });

    writeFileSync(join(projectDir, '.cover.md'), projectCoverToMarkdown(project), 'utf-8');

    if (project.docs.length > 0) {
      const filesDir = join(projectDir, '..files');
      mkdirSync(filesDir, { recursive: true });

      writeFileSync(join(filesDir, '.cover.md'), filesCoverToMarkdown(project), 'utf-8');

      project.docs.forEach((doc, i) => {
        const num = String(i + 1).padStart(2, '0');
        const slug = toFilename(doc.filename);
        const ext = fileExtension(doc.filename);

        writeFileSync(join(filesDir, `${num}-file-${slug}.md`), fileChapterToMarkdown(doc, i, project.docs.length, project.docs), 'utf-8');
        writeFileSync(join(filesDir, `${num}-file-${slug}${ext}`), doc.content, 'utf-8');
      });
    }

    console.log(`[writer] Wrote project: ${project.name} (${project.docs.length} docs)`);
  }

  writeConversation(conv: ExportConversation, subdir = 'conversations'): void {
    const dir = join(this.outputDir, subdir);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, conversationFilename(conv)), conversationToMarkdown(conv), 'utf-8');
  }

  writeArtifacts(artifacts: ExtractedArtifact[]): void {
    const dir = join(this.outputDir, 'artifacts');
    mkdirSync(dir, { recursive: true });

    // Write index
    writeFileSync(join(dir, '.index.md'), artifactIndexMarkdown(artifacts), 'utf-8');

    // Write each artifact in its native format
    let written = 0;
    for (const artifact of artifacts) {
      // Only write 'create' artifacts (updates modify existing ones)
      if (artifact.command !== 'create') continue;
      const filename = artifactFilename(artifact);
      writeFileSync(join(dir, filename), artifact.content, 'utf-8');
      written++;
    }

    console.log(`[writer] Wrote ${written} artifacts to artifacts/ (.index.md + ${written} files)`);
  }

  writeStatistics(stats: ExportStatistics): void {
    const lines = [
      '---',
      'title: Export Statistics',
      '---',
      '',
      '# Export Statistics',
      '',
      `- **Conversations:** ${stats.totalConversations}`,
      `- **Messages:** ${stats.totalMessages}`,
      `- **Projects:** ${stats.totalProjects}`,
      `- **Project documents:** ${stats.totalDocs}`,
      `- **Artifacts:** ${stats.totalArtifacts}`,
      `- **Date range:** ${stats.earliestDate} to ${stats.latestDate}`,
      `- **Conversations with content:** ${stats.nonEmptyConversations}`,
      '',
      '## Largest conversations',
      '',
      '| Title | Messages | Date |',
      '|-------|----------|------|',
      ...stats.largestConversations.map(c =>
        `| ${c.title || 'Untitled'} | ${c.messages} | ${c.date} |`
      ),
    ];

    writeFileSync(join(this.outputDir, '.statistics.md'), lines.join('\n'), 'utf-8');
    console.log('[writer] Wrote .statistics.md');
  }
}

export interface ExportStatistics {
  totalConversations: number;
  totalMessages: number;
  nonEmptyConversations: number;
  totalProjects: number;
  totalDocs: number;
  totalArtifacts: number;
  earliestDate: string;
  latestDate: string;
  largestConversations: { title: string; messages: number; date: string }[];
}
