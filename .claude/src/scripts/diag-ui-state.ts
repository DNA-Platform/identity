import { Claude } from '../claude.ts';

const app = new Claude();
app.window.find();
console.log('Found:', app.window.isRunning, 'PID:', app.window.pid);
app.window.focus();
app.window.maximize();

await new Promise(r => setTimeout(r, 500));

const url = await app.auto.uia.readUrl();
console.log('URL:', url);

const buttons = await app.auto.uia.findAllNames('Button');
console.log('\n=== Buttons ===');
for (const b of buttons.slice(0, 30)) console.log('  ', b);

const text = await app.auto.uia.readText();
const lines = text?.split('\n').slice(0, 30) ?? [];
console.log('\n=== First 30 lines of readText() ===');
for (const l of lines) console.log('  |', l);

app.window.minimize();
