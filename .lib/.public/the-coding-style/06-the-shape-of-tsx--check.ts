// THE SHAPE OF TSX, CHECKED. Markup is written fully expanded: an element that holds another element opens out, its
// children stacked one to a line beneath it and its closing tag on its own line; two attributes or more stand one
// to a line with the > on its own; a string is written as a string; no blank line stands between children. An inline
// element in a running sentence stays in the sentence: a Means among a paragraph's words is prose, and prose wraps
// as prose inside the opened element, never stacked, since JSX drops the whitespace at the head of a line and a
// stacked sentence loses its spaces. Read off every .tsx file under the roots given, with the TypeScript parser, so a
// rule is checked against the tree and never a regular expression. Sprint 104, on Doug's word: "We don't use
// compressed formatting for TSX just as we don't for classes… Elevate these rules and figure out how to broadly
// apply them. We need readable TSX."
//
//   npx tsx library/.public/.lib/the-coding-style/06-the-shape-of-tsx--check.ts .me library/.public/package/src
//   SHOW=the-table npx tsx …--check.ts <roots>     prints each fault in files whose path holds the word
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, relative, resolve } from 'node:path';
import type TS from 'typescript';

const here = dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/u, '$1'));
const project = resolve(here, '..', '..', '..', '..');
const ts: typeof TS = createRequire(join(project, 'package.json'))('typescript');
const roots = process.argv.slice(2);
if (roots.length === 0) throw new Error('give the roots to read');

const files: string[] = [];
const walk = (at: string): void => {
    if (statSync(at).isDirectory()) { for (const name of readdirSync(at)) if (name !== 'node_modules' && name !== 'dist' && name !== '.galleys' && !name.startsWith('..public')) walk(join(at, name)); }
    else if (at.endsWith('.tsx')) files.push(at.replace(/\\/g, '/'));
};
for (const root of roots) walk(resolve(root));

type Fault = { file: string; line: number; rule: string };
const faults: Fault[] = [];
let elements = 0;

const holdsJsx = (node: TS.Node): boolean => {
    let found = false;
    const look = (n: TS.Node): void => { if (found) return; if (ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n) || ts.isJsxFragment(n)) { found = true; return; } ts.forEachChild(n, look); };
    ts.forEachChild(node, look);
    return found;
};
// A CHILD THAT COUNTS: text with words, or a space between two things on one line, which JSX keeps; an element; an
// expression that draws markup. A text that is only whitespace with a line break in it is what JSX drops, and so do we.
const counted = (child: TS.JsxChild): boolean => !(ts.isJsxText(child) && child.text.trim() === '' && child.text.includes('\n'));
const inline = (child: TS.JsxChild): boolean => ts.isJsxElement(child) || ts.isJsxSelfClosingElement(child) || ts.isJsxFragment(child) || (ts.isJsxExpression(child) && holdsJsx(child));

for (const file of files) {
    const text = readFileSync(file, 'utf8');
    const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const at = (pos: number): number => source.getLineAndCharacterOfPosition(pos).line + 1;
    const line = (node: TS.Node): number => at(node.getStart(source));
    const endLine = (node: TS.Node): number => at(ts.isJsxText(node) ? node.getStart(source) + node.getText(source).trimEnd().length : node.getEnd());
    const say = (node: TS.Node, rule: string): void => { faults.push({ file: relative(project, file).replace(/\\/g, '/'), line: line(node), rule }); };
    const tag = (node: TS.JsxOpeningElement | TS.JsxSelfClosingElement): void => {
        elements++;
        const attributes = node.attributes.properties;
        if (attributes.length >= 2) {
            const lines = new Set(attributes.map(line));
            if (lines.size < attributes.length || lines.has(line(node))) say(node, 'attributes not stacked one to a line');
            else if (endLine(node) === endLine(attributes[attributes.length - 1])) say(node, "the closing > shares the last attribute's line");
        }
        for (const attribute of attributes)
            if (ts.isJsxAttribute(attribute) && attribute.initializer !== undefined && ts.isJsxExpression(attribute.initializer) && attribute.initializer.expression !== undefined && ts.isStringLiteral(attribute.initializer.expression))
                say(attribute, 'a string written as ={"…"}');
    };
    const visit = (node: TS.Node): void => {
        if (ts.isJsxSelfClosingElement(node)) tag(node);
        if (ts.isJsxElement(node)) {
            tag(node.openingElement);
            const children = node.children.filter(counted);
            const inner = children.filter(inline);
            const prose = children.some(child => ts.isJsxText(child)) && inner.some(child => !ts.isJsxSelfClosingElement(child));
            const spans = endLine(node.openingElement) > line(node.openingElement);
            if (inner.length > 0 || (spans && children.length > 0)) {
                const first = children[0];
                const last = children[children.length - 1];
                if (line(first) === endLine(node.openingElement)) say(first, "a child on the opening tag's line");
                if (endLine(last) === line(node.closingElement)) say(node.closingElement, "the closing tag shares the last child's line");
                for (let index = 1; index < children.length; index++) {
                    if (!prose && line(children[index]) === endLine(children[index - 1])) { say(children[index], 'two children on a line'); break; }
                    if (/\n[ \t]*\n/u.test(text.slice(children[index - 1].getEnd(), children[index].getStart(source)))) { say(children[index], 'a blank line between children'); break; }
                }
            }
        }
        ts.forEachChild(node, visit);
    };
    visit(source);
}

const byRule = new Map<string, number>();
const byFile = new Map<string, number>();
for (const fault of faults) {
    byRule.set(fault.rule, (byRule.get(fault.rule) ?? 0) + 1);
    byFile.set(fault.file, (byFile.get(fault.file) ?? 0) + 1);
}
console.log(`${files.length} files, ${elements} elements, ${faults.length} faults`);
for (const [rule, count] of [...byRule].sort((a, b) => b[1] - a[1])) console.log(String(count).padStart(5), rule);
if (byFile.size > 0) console.log('--- by file, worst first');
for (const [file, count] of [...byFile].sort((a, b) => b[1] - a[1]).slice(0, 25)) console.log(String(count).padStart(5), file);
const show = process.env.SHOW;
if (show !== undefined) for (const fault of faults.filter(f => f.file.includes(show)).slice(0, 60)) console.log(`${fault.file}:${fault.line}  ${fault.rule}`);
process.exitCode = faults.length === 0 ? 0 : 1;
