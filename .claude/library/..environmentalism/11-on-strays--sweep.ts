import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

// THE SWEEP. Finds the processes our work leaves behind and ends them, sparing what is not ours.
//
//   npx tsx .claude/library/..environmentalism/11-on-strays--sweep.ts          list, then kill
//   npx tsx .claude/library/..environmentalism/11-on-strays--sweep.ts --look   list only
//
// WHAT COUNTS AS A STRAY: a node process running out of this repository — a dev server, a tsx
// probe, a driver script, a render child — an esbuild service pinging for a parent that has gone,
// or a HEADLESS Chrome, which only a driver launches. Measured 2026-09-19: twenty-seven node
// processes, nine esbuild services and a rollup from four days earlier with 2,461 CPU-seconds, and
// a dev server that took 408 seconds to start while they ran.
//
// WHAT IS SPARED, and why each: anything listening on 4242 and its whole tree, because that is the
// preview Doug keeps a tab on; any Chrome that is not headless, because that is a person's browser;
// any node process that does not run out of this repository, because it is not ours to end.
//
// AND THE STAGES: a test that crashed before its afterAll leaves its library under .test/.staged,
// inside vite's root, where every later suite and scan would walk it. Swept here too.
const repository = resolve(process.cwd());
const looking = process.argv.includes('--look');
const preview = 4242;

type Process = { id: number; parent: number; name: string; command: string };

const powershell = (script: string): string =>
    execFileSync('powershell', ['-NoProfile', '-Command', script], { encoding: 'utf8' });

const processes = (): Process[] => JSON.parse(powershell(
    `Get-CimInstance Win32_Process -Filter "Name='node.exe' or Name='esbuild.exe' or Name='chrome.exe'" | Select-Object ProcessId,ParentProcessId,Name,CommandLine | ConvertTo-Json -Compress`,
) || '[]').map((one: { ProcessId: number; ParentProcessId: number; Name: string; CommandLine: string | null }) =>
    ({ id: one.ProcessId, parent: one.ParentProcessId, name: one.Name, command: one.CommandLine ?? '' }));

const listening = (port: number): Set<number> => new Set(
    powershell(`Get-NetTCPConnection -State Listen -LocalPort ${port} -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess`)
        .split(/\r?\n/u).map(one => Number(one.trim())).filter(one => Number.isFinite(one) && one > 0),
);

const forward = (path: string): string => path.split('\\').join('/').toLowerCase();
const ours = (one: Process): boolean => forward(one.command).includes(forward(repository));

const all = processes();
const spared = new Set<number>();
// THE PREVIEW AND EVERYTHING UNDER IT — AND THIS SWEEP AND EVERYTHING AROUND IT, because a tsx
// process running out of this repository is exactly what a stray looks like, and the first run
// of this listed its own tree.
const roots = listening(preview);
roots.add(process.pid);
for (let at = all.find(one => one.id === process.pid), hop = 0; at !== undefined && hop < 12; hop++) {
    roots.add(at.id);
    at = all.find(one => one.id === at!.parent);
}
for (const one of all) {
    let at: Process | undefined = one;
    for (let hop = 0; at !== undefined && hop < 12; hop++) {
        if (roots.has(at.id)) { spared.add(one.id); break; }
        at = all.find(held => held.id === at!.parent);
    }
}

const strays = all.filter(one => !spared.has(one.id) && (
    (one.name === 'node.exe' && ours(one))
    || (one.name === 'esbuild.exe' && ours(one))
    || (one.name === 'chrome.exe' && one.command.includes('--headless'))
));

for (const one of strays) console.log(`   ${String(one.id).padStart(6)}  ${one.name.padEnd(12)} ${one.command.slice(0, 110)}`);
console.log(`${strays.length} stray${strays.length === 1 ? '' : 's'} · ${spared.size} spared under the preview on ${preview}`);

if (!looking) {
    for (const one of strays) {
        try { execFileSync('taskkill', ['/PID', String(one.id), '/F', '/T'], { stdio: 'ignore' }); } catch { /* already gone */ }
    }
    for (const binding of ['library/.public/package/.binding', '.me/..public/.binding']) {
        const stages = join(repository, binding, '.test', '.staged');
        if (!existsSync(stages)) continue;
        const left = readdirSync(stages);
        rmSync(stages, { recursive: true, force: true });
        if (left.length > 0) console.log(`   swept ${left.length} stage${left.length === 1 ? '' : 's'} from ${binding}/.test/.staged`);
    }
    console.log(strays.length > 0 ? 'ended.' : 'nothing to end.');
}
