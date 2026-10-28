import { readFileSync } from 'node:fs';
import { dirname, posix, relative, resolve } from 'node:path';

// WHERE A NAME LIVES IN A MANUAL, read off the manual's own export declarations and never written by
// hand: the barrel's `export * from` lines name the files, and each file's `export` lines name what it
// exports. An import the importer writes names that file, not the barrel, so a book's digest reaches the
// code it uses and nothing else; a name exported by two files is an error raised, never a guess.
// Sprint 117, D3.
export type Imports = { folder: string; barrel: string };

const exportedBy = (file: string): Set<string> => {
    const text = readFileSync(file, 'utf8');
    const names = new Set<string>();
    for (const match of text.matchAll(/^export\s+(?:abstract\s+)?(?:class|const|let|var|function|type|interface|enum)\s+([A-Za-z_$][\w$]*)/gmu)) names.add(match[1]);
    for (const match of text.matchAll(/^export\s+\{([^}]*)\}\s*;?\s*$/gmu))
        for (const piece of match[1].split(',')) {
            const name = piece.trim().split(/\s+as\s+/u).at(-1);
            if (name !== undefined && name !== '') names.add(name);
        }
    return names;
};

const homesOf = new Map<string, Map<string, string>>();
export const homes = (barrel: string): Map<string, string> => {
    const known = homesOf.get(barrel);
    if (known !== undefined) return known;
    const found = new Map<string, string>();
    const text = readFileSync(barrel, 'utf8');
    for (const match of text.matchAll(/^export \* from '([^']+)';/gmu)) {
        const file = resolve(dirname(barrel), match[1]);
        for (const name of exportedBy(file)) {
            const other = found.get(name);
            if (other !== undefined && other !== file) throw new Error(`${name} is exported by ${other} and ${file}`);
            found.set(name, file);
        }
    }
    homesOf.set(barrel, found);
    return found;
};

const relativeImport = (folder: string, file: string): string => {
    const path = posix.normalize(relative(folder, file).split('\\').join('/'));
    return path.startsWith('.') ? path : `./${path}`;
};

// THE IMPORT LINES FOR SOME NAMES, one line per file they live in, in the order the names were given.
export const importLines = (words: string[], imports: Imports): string[] => {
    const byHome = new Map<string, string[]>();
    const known = homes(imports.barrel);
    for (const word of words) {
        const name = word.split(/\s+as\s+/u)[0];
        const home = known.get(name);
        if (home === undefined) throw new Error(`${name} has no home in ${imports.barrel}`);
        const words = byHome.get(home) ?? [];
        words.push(word);
        byHome.set(home, words);
    }
    return [...byHome.entries()].map(([home, names]) => `import { ${names.join(', ')} } from '${relativeImport(imports.folder, home)}';`);
};
