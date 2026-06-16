// Sprint 75 — Follow-up thought on the automation research.
// Claude's factorized question: given what Desktop found about automation tools,
// which specific tools would we use to rewrite our Claude Desktop integration?

import { Claude } from '../claude.ts';
import { thinkOnce, readState, minimizeOnFailure } from './think.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', 'debug');

const QUESTION = `We currently have a Windows desktop automation system for Claude Desktop built in TypeScript/Node.js. It uses:
- A persistent PowerShell subprocess that calls .NET's System.Windows.Automation (UIA) for element discovery by name/role
- Win32 P/Invoke through PowerShell for window management (FindWindow, SetForegroundWindow, ShowWindow)
- Clipboard-based text input (pasting into the composer)
- URL reading from the accessibility tree for navigation state detection
- A tapering-poll gateway pattern (50ms doubling to 1000ms) for all async operations

This works but has limitations: PowerShell subprocess adds latency per call (~12ms), UIA through PowerShell is indirect, and we're limited to what the accessibility tree exposes.

If we were rebuilding this from scratch today, what specific technology stack would you recommend? Consider:
1. Should we use FlaUI (.NET) directly instead of PowerShell-mediated UIA? What would the integration look like from Node.js?
2. Would UFO2's hybrid UIA+vision approach add value, or is pure UIA sufficient for an Electron app with good accessibility?
3. Is there a way to use Anthropic's computer-use API as a fallback for when UIA fails, while keeping UIA as the primary path?
4. For the persistent shell — is there a better IPC mechanism than spawning PowerShell? Named pipes, gRPC, direct .NET hosting in Node.js via edge-js?

Be specific about libraries, versions, and integration patterns. We're on Windows 11, Node.js, TypeScript.`;

async function main() {
  const app = new Claude();

  console.log('=== Think Follow-up: Rewriting the Integration ===\n');
  console.log('Question:', QUESTION.slice(0, 120) + '...\n');

  let result;
  try {
    result = await thinkOnce(app, QUESTION);
  } catch (e) {
    console.error('FAILED:', (e as Error).message);
    minimizeOnFailure(app);
    return;
  }

  console.log('Response received!');
  console.log('Response length:', result.response.length, 'chars');
  console.log('Conversation:', result.state.title);
  console.log('Preview:', result.response.slice(0, 400));

  const responsePath = resolve(OUTPUT_DIR, 'think-followup-response.txt');
  writeFileSync(responsePath, result.response, 'utf-8');
  console.log('\nResponse saved to', responsePath);

  // Don't conclude — leave the state file so Claude can follow up further
  console.log('State file preserved for potential follow-up.');
  console.log('Conversation ID:', result.state.conversationId);

  try { app.window.minimize(); } catch {}
  console.log('\n=== FOLLOW-UP COMPLETE ===');
}

main().catch(e => {
  console.error('\nFAILED:', (e as Error).message);
  try { new Claude().window.minimize(); } catch {}
});
