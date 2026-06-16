// Sprint 75 — Test the /think workflow.
// Sends a real question, reads the response, verifies state file management.
// Question: AI automation frameworks and tools for Claude Code on Windows.

import { Claude } from '../claude.ts';
import { thinkOnce, readState, deleteState, hasActiveThought, conclude, minimizeOnFailure } from './think.ts';
import type { ThinkResult } from './think.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', 'debug');

const QUESTION = `What AI-based automation frameworks exist beyond MCP (Model Context Protocol) that could help an AI coding assistant be more effective on Windows? I'm looking for:
1. Tools or protocols that let an AI agent control desktop applications (beyond just CLI tools)
2. Frameworks for structured tool use or function calling that go beyond what MCP provides
3. Windows-specific automation tools that work well with AI assistants (UIA, Win32, accessibility APIs, or newer approaches)
4. Any emerging standards or protocols for AI-to-application communication

Focus on what's actually available and working today, not theoretical. Include specific project names, URLs where possible, and brief assessments of maturity.`;

async function main() {
  const app = new Claude();

  console.log('=== Think Workflow Test ===\n');
  console.log('Question:', QUESTION.slice(0, 100) + '...\n');

  // Step 1: Check for existing thought
  console.log('Step 1: Check active thought');
  if (hasActiveThought()) {
    console.log('  Active thought exists — clearing for fresh test');
    deleteState();
  }
  console.log('  Clean slate');

  // Step 2: Think
  console.log('\nStep 2: Think');
  let result: ThinkResult;
  try {
    result = await thinkOnce(app, QUESTION);
  } catch (e) {
    console.error('  FAILED:', (e as Error).message);
    console.error((e as Error).stack?.split('\n').slice(0, 3).join('\n'));
    minimizeOnFailure(app);
    return;
  }

  console.log('  Response received!');
  console.log('  Response length:', result.response.length, 'chars');
  console.log('  Is resume:', result.isResume);
  console.log('  Conversation:', result.state.title);
  console.log('  Exchanges:', result.state.exchanges.length);
  console.log('  Preview:', result.response.slice(0, 300));

  // Step 3: Verify state file
  console.log('\nStep 3: Verify state');
  const state = readState();
  if (state) {
    console.log('  State file exists: YES');
    console.log('  Title:', state.title);
    console.log('  Conversation ID:', state.conversationId);
    console.log('  Exchanges:', state.exchanges.length);
    console.log('  URL:', state.url);
  } else {
    console.log('  State file exists: NO — ERROR');
  }

  // Step 4: Save response to debug
  const responsePath = resolve(OUTPUT_DIR, 'think-test-response.txt');
  writeFileSync(responsePath, result.response, 'utf-8');
  console.log('\nStep 4: Response saved to', responsePath);

  // Step 5: Conclude the thought (write perspective entry, delete state)
  console.log('\nStep 5: Conclude');
  const entryPath = conclude({
    questionSummary: 'AI automation frameworks for Claude Code on Windows',
    date: new Date().toISOString().split('T')[0],
    conversationTitle: result.state.title,
    verdict: 'sufficient',
    question: QUESTION,
    responseSummary: result.response.slice(0, 2000),
    evaluation: 'Test run — evaluating the think workflow mechanics, not the content.',
    followUp: 'None — this is a test of the automation.',
  });
  console.log('  Perspective entry written:', entryPath);

  // Step 6: Verify state cleaned up
  console.log('\nStep 6: Verify cleanup');
  console.log('  Active thought:', hasActiveThought() ? 'YES — ERROR' : 'NO — correct');

  // Minimize
  try { app.window.minimize(); } catch {}

  console.log('\n=== THINK TEST COMPLETE ===');
}

main().catch(e => {
  console.error('\nFAILED:', (e as Error).message);
  try { new Claude().window.minimize(); } catch {}
});
