// Format — renders export data as browsable markdown.
// See: library/export-format/

import type { ExportConversation, ExportMessage, ExportProject, ExportMemory } from './types.ts';
import type { ConversationMessage } from '../components/message.ts';
import type { Turn } from '../components/turn.ts';
import { datedFilename, safeFilename, toFilename, fileExtension } from './naming.ts';

function formatTimestamp(iso: string): string {
  const d = new Date(iso);
  return d.toISOString().replace('T', ' ').substring(0, 16);
}

function senderName(sender: string): string {
  return sender === 'human' ? 'User' : 'Agent';
}

function messageText(msg: ExportMessage): string {
  if (msg.content?.length > 0) {
    return msg.content.map(b => b.text).join('\n\n');
  }
  return msg.text || '';
}

// --- Conversations ---

export function conversationToMarkdown(conv: ExportConversation): string {
  const messages = conv.chat_messages || [];
  const firstDate = messages[0]?.created_at || conv.created_at;
  const title = conv.name || 'Untitled';

  const frontmatter = [
    '---',
    `uuid: ${conv.uuid}`,
    `title: "${title.replace(/"/g, '\\"')}"`,
    `created: ${conv.created_at}`,
    `updated: ${conv.updated_at}`,
    `messages: ${messages.length}`,
    '---',
  ].join('\n');

  const header = `# ${title}\n`;

  const body = messages.map(msg => {
    const text = messageText(msg);
    if (!text.trim()) return null;

    const name = senderName(msg.sender);
    const time = formatTimestamp(msg.created_at);
    const quoted = text.split('\n').map(line => `> ${line}`).join('\n');

    return `**${name}** · ${time}\n${quoted}`;
  }).filter(Boolean).join('\n\n---\n\n');

  return `${frontmatter}\n\n${header}\n${body}\n`;
}

// --- Live-captured conversations (from UIA tree) ---

export function turnsToMarkdown(title: string, turns: Turn[]): string {
  const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
  const messageCount = turns.length * 2 - (turns[turns.length - 1]?.response ? 0 : 1);

  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `captured: ${now}`,
    `messages: ${messageCount}`,
    '---',
  ].join('\n');

  const header = `# ${title}\n`;

  let lastDate: string | undefined;

  const body = turns.map(turn => {
    const sections: string[] = [];

    // Prompt
    const promptText = turn.prompt.content.toMarkdown();
    if (promptText.trim()) {
      let dateLine = '';
      if (turn.prompt.date && turn.prompt.date !== lastDate) {
        dateLine = `*${turn.prompt.date}*\n\n`;
        lastDate = turn.prompt.date;
      }
      const quoted = promptText.split('\n').map(line => `> ${line}`).join('\n');
      let block = `${dateLine}**User**\n${quoted}`;

      for (const att of turn.prompt.attachments) {
        block += `\n>\n> *[Attachment: ${att.label}]*`;
      }

      sections.push(block);
    }

    // Response
    if (turn.response) {
      const respText = turn.response.content.toMarkdown();
      if (respText.trim()) {
        let dateLine = '';
        if (turn.response.date && turn.response.date !== lastDate) {
          dateLine = `*${turn.response.date}*\n\n`;
          lastDate = turn.response.date;
        }
        const quoted = respText.split('\n').map(line => `> ${line}`).join('\n');
        let block = `${dateLine}**Agent**\n${quoted}`;

        if (turn.response.thinking) {
          block += `\n>\n> *[Thinking: ${turn.response.thinking.summary}]*`;
        }
        for (const art of turn.response.artifacts) {
          block += `\n>\n> *[Artifact: ${art.title}]* (${art.type})`;
        }

        sections.push(block);
      }
    }

    return sections.join('\n\n---\n\n');
  }).filter(s => s.length > 0).join('\n\n---\n\n');

  return `${frontmatter}\n\n${header}\n${body}\n`;
}

export function conversationFilename(conv: ExportConversation): string {
  const messages = conv.chat_messages || [];
  const firstDate = messages[0]?.created_at || conv.created_at;
  return `${datedFilename(firstDate, conv.name || 'untitled')}.md`;
}

// --- Projects ---

export function projectCoverToMarkdown(proj: ExportProject): string {
  const frontmatter = [
    '---',
    `uuid: ${proj.uuid}`,
    `title: "${proj.name.replace(/"/g, '\\"')}"`,
    `created: ${proj.created_at}`,
    `updated: ${proj.updated_at}`,
    `docs: ${proj.docs.length}`,
    '---',
  ].join('\n');

  let body = `# ${proj.name}\n\n`;
  if (proj.description) body += `${proj.description}\n\n`;

  if (proj.prompt_template) {
    body += `## Instructions\n\n${proj.prompt_template}\n\n`;
  }

  if (proj.docs.length > 0) {
    body += `## Project Files\n\nSee [Project Files](..files/.cover.md) — ${proj.docs.length} source files uploaded as project knowledge.\n\n`;
  }

  body += `## Conversations\n\n`;
  body += `*(Awaiting project-conversation mapping from the live app)*\n`;

  return `${frontmatter}\n\n${body}`;
}

export function filesCoverToMarkdown(proj: ExportProject): string {
  const frontmatter = [
    '---',
    `title: "${proj.name} — Project Files"`,
    `files: ${proj.docs.length}`,
    '---',
  ].join('\n');

  let body = `# Project Files\n\n`;
  body += `**Project:** [${proj.name}](../.cover.md)\n\n`;
  body += `Source code uploaded as project knowledge for ${proj.name}.\n\n`;
  body += `| # | Name | |\n`;
  body += `|---|------|-|\n`;

  proj.docs.forEach((doc, i) => {
    const num = String(i + 1).padStart(2, '0');
    const slug = toFilename(doc.filename);
    const ext = fileExtension(doc.filename);
    body += `| ${i + 1} | [${doc.filename}](${num}-file-${slug}.md) | [${ext}](${num}-file-${slug}${ext}) |\n`;
  });

  return `${frontmatter}\n\n${body}`;
}

export function fileChapterToMarkdown(doc: { filename: string }, index: number, total: number, allDocs: { filename: string }[]): string {
  const num = String(index + 1).padStart(2, '0');
  const slug = toFilename(doc.filename);
  const ext = fileExtension(doc.filename);

  const frontmatter = [
    '---',
    `title: "${doc.filename.replace(/"/g, '\\"')}"`,
    `type: project-file`,
    `position: ${index + 1}`,
    `filename: "${doc.filename.replace(/"/g, '\\"')}"`,
    '---',
  ].join('\n');

  let body = `# ${doc.filename}\n\n`;
  body += `**Files:** [Project Files](.cover.md)\n\n`;
  body += `[View file](${num}-file-${slug}${ext})\n\n`;

  const nav: string[] = [];
  if (index > 0) {
    const prevSlug = toFilename(allDocs[index - 1].filename);
    const prevNum = String(index).padStart(2, '0');
    nav.push(`[Previous](${prevNum}-file-${prevSlug}.md)`);
  }
  if (index < total - 1) {
    const nextSlug = toFilename(allDocs[index + 1].filename);
    const nextNum = String(index + 2).padStart(2, '0');
    nav.push(`[Next](${nextNum}-file-${nextSlug}.md)`);
  }
  if (nav.length) body += nav.join(' · ') + '\n';

  return `${frontmatter}\n\n${body}`;
}

// --- Memories ---

export function memoriesToMarkdown(memories: ExportMemory[]): string {
  const frontmatter = [
    '---',
    'title: Memories',
    `entries: ${memories.length}`,
    '---',
  ].join('\n');

  const body = memories.map(m => m.conversations_memory).join('\n\n---\n\n');

  return `${frontmatter}\n\n# Memories\n\nClaude's accumulated understanding of Doug and Ana.\n\n${body}\n`;
}
