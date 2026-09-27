// THE WRITING — markdown into our kinds, once, at import.
// Documented by 5-the-writing.tsx, which is this file's chapter.

// NOTHING PARSES MARKDOWN WHEN A PAGE IS DRAWN. There is no $Markdown kind in the package — the
// markdown folder holds a theme and nothing that reads — and that is right: a page that has to
// interpret a string before it can be read cannot be specified, searched or pointed at. So the
// conversion happens HERE, once, on the way in, and what lands on disk is ordinary writing.
//
// AND IT HANDLES ONLY WHAT IS ACTUALLY THERE. Measured on the first conversation: bold, italics,
// inline code, bullets, numbered lists, fenced code, one heading, one link, no tables, no maths.
// A reading that covered more than the corpus holds would be a reading nobody had tested.

// JSX TEXT IS NOT PROSE. Four characters mean something to the compiler and have to stop meaning it
// before a message becomes a chapter.
export const escaped = (text: string): string => text
    .replace(/&/gu, '&amp;').replace(/</gu, '&lt;').replace(/>/gu, '&gt;')
    .replace(/\{/gu, '&#123;').replace(/\}/gu, '&#125;');

// THE MARKS INSIDE A LINE. Escaping runs FIRST, so a tag written here is never escaped by it.
// Inline code has no kind in the library — it was reached for three times next door and refused each
// time — so it is set bold, which is what it looks like and not a claim that it is one.
export const inline = (text: string): string => escaped(text)
    .replace(/\*\*(.+?)\*\*/gsu, (_, said) => `<Bold>${said}</Bold>`)
    .replace(/(^|[^*])\*([^*]+?)\*(?!\*)/gsu, (_, before, said) => `${before}<Italics>${said}</Italics>`)
    .replace(/`([^`]+?)`/gsu, (_, said) => `<Bold>${said}</Bold>`)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gu, (_, text, at) => `<Ref>[${text}](${at})</Ref>`);

// THE BLOCKS. A message is a run of blocks separated by blank lines, and each becomes one writing.
// The walk is deliberately flat: it reads a line, decides what block it opens, and takes the lines
// that belong to it. Anything it does not recognise is prose, which is the right default for a
// conversation — most of what is said is just said.
export const written = (body: string, indent = '                    '): string[] => {
    const drawn: string[] = [];
    const lines = body.split('\n');
    const bullet = /^\s*[-*]\s+/u;
    const number = /^\s*\d+\.\s+/u;
    let at = 0;

    while (at < lines.length) {
        const line = lines[at];
        if (line.trim() === '') { at++; continue; }

        if (line.trimStart().startsWith('```')) {
            const language = line.trim().replace(/^```/u, '').trim();
            const held: string[] = [];
            at++;
            while (at < lines.length && !lines[at].trimStart().startsWith('```')) held.push(lines[at++]);
            at++;
            drawn.push(`${indent}<Code${language === '' ? '' : ` language="${language}"`}>{${JSON.stringify(held.join('\n'))}}</Code>`);
            continue;
        }

        const mark = bullet.test(line) ? bullet : number.test(line) ? number : undefined;
        if (mark !== undefined) {
            const held: string[] = [];
            while (at < lines.length && mark.test(lines[at])) held.push(lines[at++]);
            const items = held.map(one => `${indent}    <Item>${inline(one.replace(/^\s*(?:[-*]|\d+\.)\s+/u, ''))}</Item>`);
            drawn.push(`${indent}<List${mark === number ? ' ordered' : ''}>\n${items.join('\n')}\n${indent}</List>`);
            continue;
        }

        if (line.trimStart().startsWith('#')) {
            drawn.push(`${indent}<Heading>${inline(line.replace(/^\s*#+\s*/u, ''))}</Heading>`);
            at++;
            continue;
        }

        const held: string[] = [];
        while (at < lines.length && lines[at].trim() !== '' && !lines[at].trimStart().startsWith('```')
            && !bullet.test(lines[at]) && !number.test(lines[at])) held.push(lines[at++].trim());
        drawn.push(`${indent}<Paragraph>${inline(held.join(' '))}</Paragraph>`);
    }

    return drawn;
};
