// THE IMPORTER — one conversation out of the export and into the library.
// Documented by 1-the-importer.tsx, which is this file's chapter.
//
//   npx tsx 1-the-importer.ts            says what it would do and stops
//   npx tsx 1-the-importer.ts --write    writes the book
//
// FIVE STEPS AND NOTHING HIDDEN BETWEEN THEM: find the conversation in the export, walk the thread a
// reader actually sees, cut it into movements, turn each message into writing, and shelve the book.
// Each step is one file, each file has one chapter, and the chapter carries the same name — so it is
// never a question which documentation a change here owes an edit to.

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { find } from './2-the-source';
import { aside, thread } from './3-the-thread';
import { cut, movements } from './4-the-movements';
import { shelve } from './6-the-book';

const here = dirname(fileURLToPath(import.meta.url));
const library = dirname(dirname(here));

// WHERE THE EXPORT IS AND WHICH CONVERSATION THIS IS. One conversation this sprint, by Doug's word:
// "we will focus on the importer and importing this one conversation."
export const asked = {
    export: join(library, '..', '..', 'dna-library', 'library', 'claude-dna', '.exports', '2026-09-11', 'conversations-000.zip'),
    named: 'Semantics of Types & More',
    into: join(library, '.claude-and-our-projects', 'semantic-reference-theory', 'conversations', 'semantics-of-types'),
    apparatus: ['Semantics of Types & More', 'What Was Said', 'Table of Contents', 'Lead'],
};

export const run = async (write: boolean): Promise<void> => {
    const held = await find(asked.export, asked.named);
    const shown = thread(held);
    const cuts = cut(shown, movements);

    console.log(`${held.name}`);
    console.log(`  ${held.messages.length} messages in the export · ${shown.length} on the screen · ${aside(held, shown)} on other paths`);
    console.log(`  ${cuts.length} movements`);
    for (const one of cuts) console.log(`    ${String(one.messages.length).padStart(3)}  ${one.name}`);

    if (!write) return void console.log('\nnothing written — pass --write');

    const wrote = shelve({ into: asked.into, name: asked.named, apparatus: asked.apparatus }, cuts);
    console.log(`\n${wrote.length} files written`);
    for (const file of wrote) console.log(`  ${file}`);
};

// IT RUNS WHEN IT IS RUN, AND NOT WHEN IT IS READ. A book folder holds chapters and code together,
// and something reading the folder must never set the importer going — measured 2026-09-16, a build
// imported this file in a chapter place and the usage line it printed came back as a broken book.
const invoked = process.argv[1] !== undefined && process.argv[1].endsWith('1-the-importer.ts');
if (invoked) run(process.argv.includes('--write')).catch(said => { console.error(said); process.exit(1); });
