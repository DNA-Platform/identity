// Artifacts — extracts artifacts from conversation content blocks.
// Artifacts are embedded as tool_use blocks with name "artifacts".

import type { ExportConversation, ExportContentBlock } from './types.ts';
import { datedFilename } from './naming.ts';

export interface ExtractedArtifact {
  id: string;
  title: string;
  type: string;
  content: string;
  command: 'create' | 'update';
  conversationUuid: string;
  conversationTitle: string;
  messageTimestamp: string;
}

const TYPE_TO_EXTENSION: Record<string, string> = {
  'text/markdown': '.md',
  'text/plain': '.txt',
  'text/html': '.html',
  'text/css': '.css',
  'text/csv': '.csv',
  'application/javascript': '.js',
  'application/json': '.json',
  'application/vnd.ant.code': '', // infer from title
  'application/vnd.ant.react': '.tsx',
};

function extensionForType(type: string, title: string): string {
  const mapped = TYPE_TO_EXTENSION[type];
  if (mapped !== undefined && mapped !== '') return mapped;

  // For vnd.ant.code, infer from title
  const lower = title.toLowerCase();
  if (lower.endsWith('.ts') || lower.endsWith('.tsx')) return '.tsx';
  if (lower.endsWith('.js') || lower.endsWith('.jsx')) return '.js';
  if (lower.endsWith('.py')) return '.py';
  if (lower.endsWith('.html')) return '.html';
  if (lower.endsWith('.css')) return '.css';
  if (lower.endsWith('.json')) return '.json';
  if (lower.endsWith('.md')) return '.md';
  if (lower.includes('python') || lower.includes('.py')) return '.py';
  if (lower.includes('typescript') || lower.includes('.ts')) return '.ts';
  if (lower.includes('javascript')) return '.js';
  if (lower.includes('html') || lower.includes('widget')) return '.html';

  // Default to .txt for unknown code types
  return type.includes('code') ? '.txt' : '.md';
}

export function extractArtifacts(conversations: ExportConversation[]): ExtractedArtifact[] {
  const artifacts: ExtractedArtifact[] = [];

  for (const conv of conversations) {
    for (const msg of conv.chat_messages ?? []) {
      for (const block of msg.content ?? []) {
        if (block.type === 'tool_use' && (block as any).name === 'artifacts') {
          const input = (block as any).input;
          if (input?.content) {
            artifacts.push({
              id: input.id ?? 'unknown',
              title: input.title ?? 'Untitled Artifact',
              type: input.type ?? 'text/plain',
              content: input.content,
              command: input.command ?? 'create',
              conversationUuid: conv.uuid,
              conversationTitle: conv.name || 'Untitled',
              messageTimestamp: msg.created_at,
            });
          }
        }
      }
    }
  }

  return artifacts;
}

export function artifactFilename(artifact: ExtractedArtifact): string {
  const ext = extensionForType(artifact.type, artifact.title);
  const base = datedFilename(artifact.messageTimestamp, artifact.title);
  return base.endsWith(ext) ? base : `${base}${ext}`;
}

export function artifactIndexMarkdown(artifacts: ExtractedArtifact[]): string {
  const lines = [
    '---',
    'title: Artifacts',
    `count: ${artifacts.length}`,
    '---',
    '',
    '# Artifacts',
    '',
    'Everything Claude created during conversations — documents, code, widgets.',
    '',
    '| Date | Title | Type | Conversation |',
    '|------|-------|------|-------------|',
  ];

  for (const a of artifacts) {
    const date = a.messageTimestamp.substring(0, 10);
    const filename = artifactFilename(a);
    const convFilename = datedFilename(
      a.messageTimestamp, a.conversationTitle,
    );
    lines.push(
      `| ${date} | [${a.title}](${filename}) | ${a.type} | [${a.conversationTitle}](../conversations/${convFilename}.md) |`
    );
  }

  return lines.join('\n') + '\n';
}
