// Resource for The Public Skillset chapter 03: public-audit-parse.
// Installs counters into BOTH source trees, and takes them out again.
// Everything it writes, it can revert — run install, build, drive, revert, all
// in ONE command, and confirm with `git status` in that same command.
//
// Usage:
//   node 03-public-audit-parse--probe.cjs install <backup-dir>
//   node 03-public-audit-parse--probe.cjs revert  <backup-dir>
//
// What it counts, all under globalThis.__parse:
//   made      — every chemical construction, by class name
//   before    — how many of those happened before ANYTHING rendered
//   parts     — $Composition.parts() calls, by class name   <- THE HARD ASSERTION
//   specs     — Specification.check() runs, by specification class
//   rules     — rule executions by rule name, and which of them threw
//
// REMEMBER: a probe in .public/package/src does nothing until `npm run build`
// has run in that package — the wiki reads dist, not src. Chemistry is aliased
// to source and takes effect immediately. That asymmetry is the trap.

const fs = require('fs');
const path = require('path');

const LF = String.fromCharCode(10);
const CR = String.fromCharCode(13);
const [mode, backupDir] = process.argv.slice(2);
if (mode !== 'install' && mode !== 'revert') {
    console.error('Usage: node 03-public-audit-parse--probe.cjs install|revert <backup-dir>');
    process.exit(1);
}
if (!backupDir) { console.error('a backup directory is required — the revert reads from it'); process.exit(1); }

const here = __dirname;
const repo = path.resolve(here, '..', '..', '..', '..');
const targets = {
    particle: path.join(repo, 'library/chemistry/package/src/abstraction/particle.ts'),
    composition: path.join(repo, 'library/.public/package/src/writing/Composition.tsx'),
    specification: path.join(repo, 'library/.public/package/src/utilities/Specification.ts'),
};

if (mode === 'revert') {
    let restored = 0;
    for (const [name, file] of Object.entries(targets)) {
        const backup = path.join(backupDir, name + path.extname(file));
        if (!fs.existsSync(backup)) { console.error('NO BACKUP for ' + name + ' — refusing to guess'); process.exit(1); }
        fs.copyFileSync(backup, file);
        restored++;
    }
    console.log('reverted ' + restored + ' files from ' + backupDir);
    process.exit(0);
}

fs.mkdirSync(backupDir, { recursive: true });

// A collector that is safe to install in either tree and never throws into user code.
const collector =
    "try{const w=globalThis;const S=(w.__parse||(w.__parse={made:{},before:0,total:0,rendering:false,parts:{},specs:{},rules:{},threw:{}}));";

function edit(file, name, edits) {
    let source = fs.readFileSync(file, 'utf8');
    const crlf = source.indexOf(CR + LF) >= 0;
    if (crlf) source = source.split(CR + LF).join(LF);
    fs.writeFileSync(path.join(backupDir, name + path.extname(file)),
        crlf ? source.split(LF).join(CR + LF) : source, 'utf8');
    for (const [anchor, insert] of edits) {
        const at = source.indexOf(anchor);
        if (at < 0) throw new Error('MISSING ANCHOR in ' + name + ': ' + anchor.slice(0, 70));
        if (source.indexOf(anchor, at + 1) >= 0) throw new Error('AMBIGUOUS ANCHOR in ' + name + ': ' + anchor.slice(0, 70));
        source = source.slice(0, at + anchor.length) + LF + insert + source.slice(at + anchor.length);
    }
    fs.writeFileSync(file, crlf ? source.split(LF).join(CR + LF) : source, 'utf8');
    console.log('  patched ' + name);
}

try {
    // 1. The census, at the type stamp — every chemical construction, by class.
    //    And the render boundary, at $lift's first hook, so import-time cost is
    //    separable from render-time cost.
    edit(targets.particle, 'particle', [
        ["        this[$type$] = this.constructor as any;",
         "        " + collector + "S.total++;if(!S.rendering)S.before++;" +
         "const k=(this.constructor&&this.constructor.name)||'?';S.made[k]=(S.made[k]||0)+1;}catch(e){}"],
        ["        const [cid, setCid] = useState(-1);",
         "        try{const w=globalThis;if(w.__parse)w.__parse.rendering=true;}catch(e){}"],
    ]);

    // 2. THE HARD ASSERTION — parts() must never be called below a section.
    edit(targets.composition, 'composition', [
        ["    parts(): $Writing[] {",
         "        " + collector + "const k=(this as any).constructor.name;S.parts[k]=(S.parts[k]||0)+1;}catch(e){}"],
    ]);

    // 3. The cross-check — a specification running is independent evidence that
    //    its level was built, and catches a path the census misses.
    edit(targets.specification, 'specification', [
        ["    check(writing: T): string[] {",
         "        " + collector + "const k=(this as any).constructor.name;S.specs[k]=(S.specs[k]||0)+1;}catch(e){}"],
        ["                if (rule.call(this, writing) !== false)",
         "                try{const w:any=globalThis as any;const S=w.__parse;if(S)S.rules[name]=(S.rules[name]||0)+1;}catch(e){}"],
        ["            } catch (error) {",
         "                try{const w:any=globalThis as any;const S=w.__parse;if(S)S.threw[name]=(S.threw[name]||0)+1;}catch(e){}"],
    ]);
    console.log('counters installed; backups in ' + backupDir);
} catch (error) {
    console.error(String(error.message));
    console.error('nothing was left half-patched — reverting from the backups just written');
    for (const [name, file] of Object.entries(targets)) {
        const backup = path.join(backupDir, name + path.extname(file));
        if (fs.existsSync(backup)) fs.copyFileSync(backup, file);
    }
    process.exit(1);
}
