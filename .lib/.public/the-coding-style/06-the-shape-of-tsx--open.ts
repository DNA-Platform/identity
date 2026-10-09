// THE SHAPE OF TSX, GIVEN. Opens markup out, from the innermost fault outward, into the shape the chapter beside
// this file describes: an element that holds another element opens with its children stacked one level in and its
// closing tag on its own line; a tag with two attributes or more stacks them with its > on its own; an element whose
// opening tag spans lines stands its text on a line of its own. An inline element in a running sentence stays in the
// sentence: the element opens, and the sentence is laid inside it whole, its lines trimmed and re-indented, never
// stacked, since JSX drops the whitespace at the head of a line and a stacked sentence loses its spaces. The text of
// every child and every attribute is kept exactly; a file's line ending is kept. Run the checker beside this file
// after it, since this opens out and never judges, and prove the sweep with the transpile of each file before and
// after, which must be the same.
//
//   npx tsx library/.public/.lib/the-coding-style/06-the-shape-of-tsx--open.ts <files or folders>
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import type TS from 'typescript';

const here = dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/u, '$1'));
const project = resolve(here, '..', '..', '..', '..');
const ts: typeof TS = createRequire(join(project, 'package.json'))('typescript');
const roots = process.argv.slice(2);
if (roots.length === 0) throw new Error('give the files or folders to open out');

const files: string[] = [];
const walk = (at: string): void => {
    if (statSync(at).isDirectory()) { for (const name of readdirSync(at)) if (name !== 'node_modules' && name !== 'dist' && name !== '.galleys' && !name.startsWith('..public')) walk(join(at, name)); }
    else if (at.endsWith('.tsx')) files.push(at.replace(/\\/g, '/'));
};
for (const root of roots) walk(resolve(root));

type Candidate = { node: TS.JsxElement | TS.JsxOpeningElement | TS.JsxSelfClosingElement; kind: 'attributes' | 'children' | 'prose'; start: number; end: number };

const holdsJsx = (node: TS.Node): boolean => {
    let found = false;
    const look = (n: TS.Node): void => { if (found) return; if (ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n) || ts.isJsxFragment(n)) { found = true; return; } ts.forEachChild(n, look); };
    ts.forEachChild(node, look);
    return found;
};
// A CHILD THAT COUNTS, as the checker counts them: text with words, or a space between two things on one line, which
// JSX keeps; an element; an expression that draws markup. Whitespace with a line break in it is what JSX drops.
const counted = (child: TS.JsxChild): boolean => !(ts.isJsxText(child) && child.text.trim() === '' && child.text.includes('\n'));
const inline = (child: TS.JsxChild): boolean => ts.isJsxElement(child) || ts.isJsxSelfClosingElement(child) || ts.isJsxFragment(child) || (ts.isJsxExpression(child) && holdsJsx(child));

// ONE FAULT OPENED OUT, THE INNERMOST FIRST, so that what a child becomes is settled before its parent is laid.
const opened = (text: string, file: string): string | null => {
    const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const at = (pos: number): number => source.getLineAndCharacterOfPosition(pos).line;
    const line = (node: TS.Node): number => at(node.getStart(source));
    const endLine = (node: TS.Node): number => at(ts.isJsxText(node) ? node.getStart(source) + node.getText(source).trimEnd().length : node.getEnd());
    const indentOf = (pos: number): string => { const start = text.lastIndexOf('\n', pos - 1) + 1; return (text.slice(start).match(/^[ \t]*/u) ?? [''])[0]; };
    const candidates: Candidate[] = [];
    const visit = (node: TS.Node): void => {
        if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node)) {
            const tag = ts.isJsxElement(node) ? node.openingElement : node;
            const attributes = tag.attributes.properties;
            const stacked = new Set(attributes.map(line)).size === attributes.length && !attributes.some(a => line(a) === line(tag)) && endLine(tag) !== endLine(attributes[attributes.length - 1] ?? tag);
            if (attributes.length >= 2 && !stacked) candidates.push({ node: tag, kind: 'attributes', start: tag.getStart(source), end: tag.getEnd() });
        }
        if (ts.isJsxElement(node)) {
            const children = node.children.filter(counted);
            const inner = children.filter(inline);
            const prose = children.some(child => ts.isJsxText(child)) && inner.some(child => !ts.isJsxSelfClosingElement(child));
            const spans = endLine(node.openingElement) > line(node.openingElement);
            if (inner.length > 0 || (spans && children.length > 0)) {
                const first = children[0];
                const last = children[children.length - 1];
                const shared = children.some((child, index) => index > 0 && line(child) === endLine(children[index - 1]));
                if (line(first) === endLine(node.openingElement) || endLine(last) === line(node.closingElement) || (!prose && shared))
                    candidates.push({ node, kind: prose ? 'prose' : 'children', start: node.getStart(source), end: node.getEnd() });
            }
        }
        ts.forEachChild(node, visit);
    };
    visit(source);
    if (candidates.length === 0) return null;
    const innermost = candidates.find(c => !candidates.some(o => o !== c && o.start >= c.start && o.end <= c.end))!;
    const { node, kind, start, end } = innermost;
    const indent = indentOf(start);
    const shifted = (child: TS.Node, to: string): string => {
        const from = indentOf(child.getStart(source)).length;
        const lines = text.slice(child.getStart(source), child.getEnd()).split('\n');
        return [lines[0], ...lines.slice(1).map(l => `${to}${' '.repeat(Math.max(0, (l.match(/^[ \t]*/u) ?? [''])[0].length - from))}${l.trimStart()}`)].join('\n');
    };
    let replacement: string;
    if (kind === 'attributes') {
        const tag = node as TS.JsxOpeningElement | TS.JsxSelfClosingElement;
        const name = text.slice(tag.getStart(source), tag.tagName.getEnd());
        const attributes = tag.attributes.properties.map(a => text.slice(a.getStart(source), a.getEnd()));
        replacement = [name, ...attributes.map(a => `${indent}    ${a}`), `${indent}${ts.isJsxSelfClosingElement(tag) ? '/>' : '>'}`].join('\n');
    } else {
        const element = node as TS.JsxElement;
        const opening = text.slice(element.openingElement.getStart(source), element.openingElement.getEnd());
        const closing = text.slice(element.closingElement.getStart(source), element.closingElement.getEnd());
        const level = `${indent}    `;
        const children = element.children.filter(counted);
        // A SENTENCE IS LAID WHOLE: each text child's lines as JSX reads them, the whitespace that touches a neighbour
        // on the same line kept, and each inline element shifted as a whole, so a Word that opened keeps its shape.
        const sentence = children.map((child, index) => {
            if (!ts.isJsxText(child)) return shifted(child, level);
            const lines = child.text.split('\n');
            return lines.map((l, i) => {
                const first = i === 0 && index > 0;
                const last = i === lines.length - 1 && index < children.length - 1;
                return (first ? l : l.trimStart()).replace(/[ \t]+$/u, last ? '$&' : '');
            }).filter(l => l !== '').join(`\n${level}`);
        }).join('');
        const inside = kind === 'prose'
            ? [`${level}${sentence}`]
            : children.map(child => ts.isJsxText(child) ? child.text.trim().split('\n').map(l => `${level}${l.trim()}`).join('\n') : `${level}${shifted(child, level)}`);
        replacement = [opening, ...inside, `${indent}${closing}`].join('\n');
    }
    return text.slice(0, start) + replacement + text.slice(end);
};

let count = 0;
for (const file of files) {
    const original = readFileSync(file, 'utf8');
    const ending = original.includes('\r\n') ? '\r\n' : '\n';
    const before = original.replace(/\r\n/gu, '\n');
    let text = before;
    for (let pass = 0; pass < 400; pass++) {
        const next = opened(text, file);
        if (next === null) break;
        text = next;
        count++;
    }
    if (text !== before) writeFileSync(file, text.replace(/\n/gu, ending));
}
console.log(`${count} elements opened out across ${files.length} files`);
