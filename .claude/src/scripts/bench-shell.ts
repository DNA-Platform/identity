import { Shell } from '../shell.ts';

const s = new Shell();

const t0 = Date.now();
const r1 = await s.run('Write-Output hello');
console.log('call 1:', r1, Date.now() - t0, 'ms (includes session startup)');

const t1 = Date.now();
const r2 = await s.run('Write-Output world');
console.log('call 2:', r2, Date.now() - t1, 'ms');

const t2 = Date.now();
const r3 = await s.run('1+1');
console.log('call 3:', r3, Date.now() - t2, 'ms');

const t3 = Date.now();
for (let i = 0; i < 10; i++) await s.run('Write-Output ok');
console.log('10 calls:', Date.now() - t3, 'ms');

const t4 = Date.now();
await s.run('Add-Type -AssemblyName UIAutomationClient');
console.log('Add-Type UIAutomation:', Date.now() - t4, 'ms');

const t5 = Date.now();
await s.run('Add-Type -AssemblyName UIAutomationClient');
console.log('Add-Type again (cached):', Date.now() - t5, 'ms');

s.close();
console.log('done');
