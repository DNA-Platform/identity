var x=Object.defineProperty;var t=(u,w)=>x(u,"name",{value:w,configurable:!0});import{j as e,C as d,b,T as p,P as f,c as o,H as s,a as n,d as a,W as l,M as r,A as i,$}from"./index-u7EcVasr.js";import{j,I as v,S as c,B as h}from"./.cover-DqLC6B-w.js";import"./3-the-project~code-CB62kg2D.js";import{C as y,S as k}from"./.synopsis-DEf2Ew0y.js";import"./.cover-Dkb_VgvG.js";const g=class g extends j{};t(g,"$ClaudesReferenceManual");let m=g;const C=t(()=>e.jsxs(d,{children:[e.jsx(b,{}),e.jsx(v,{}),e.jsxs(p,{children:[e.jsx(f,{}),"[Table of Contents](/claudes-reference-manual/#table-of-contents)"]}),e.jsxs(o,{children:[e.jsx(s,{children:"What a message of Claude's holds"}),e.jsx(n,{children:e.jsx(a,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"})}),e.jsx(n,{children:e.jsx(a,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"})}),e.jsx(n,{children:e.jsx(a,{children:"[The Project](/claudes-reference-manual/#the-project)"})}),e.jsx(n,{children:e.jsx(a,{children:"[The Page](/claudes-reference-manual/#the-page)"})}),e.jsxs(n,{children:[e.jsx(f,{}),e.jsx(l,{children:e.jsx(a,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"})}),e.jsx(l,{children:e.jsx(a,{children:"[Synopsis](/claudes-reference-manual/#synopsis)"})}),e.jsx(l,{children:e.jsx(a,{children:"[Table of Contents](/claudes-reference-manual/#table-of-contents)"})})]})]})]}),"Table"),T=t(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"}),e.jsxs(n,{children:[e.jsx(h,{}),"What Claude does in a message that is not said, a search, a fetch, a run of code, a read of a file, as a writing of its own; and the result, what came back, a writing the import counts and leaves out."]}),e.jsxs(o,{children:[e.jsx(s,{children:"Done, and what came back"}),e.jsxs(n,{children:["A message of Claude's holds more than prose. Where he searched the web, fetched a page, ran code or read a file, the message holds an action, one line saying what was done in plain words. What came back is a result, and the import does not write it: a fetched page or a run's output is the machine's and not the conversation's, it was what filled a page when it was kept, and the export still holds it, so the import counts the results it leaves out and a result that matters is kept by hand. Neither is a paragraph of what was said, so neither is a paragraph wearing a mark: each is a writing of its own, a paragraph in shape and not in meaning, which the page can fold, show as the application does, or count. They are Claude's, so they stand in this manual and not in ",e.jsx(r,{children:"[the library's](/dougs-reference-manual/#the-conversation)"}),", where a message is said to be a speaker, a time and what was said."]})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';

export class $Action extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-action');
    }
}

export class $Result extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-result');
    }
}

export const Action = $($Action);
export const Result = $($Result);
`})]}),"TheActionAndTheResult1"),A=t(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),e.jsxs(n,{children:[e.jsx(h,{}),"A file Claude made in a message and a file given to him in one, each a figure where it entered the conversation, showing the file that stands beside the chapter."]}),e.jsxs(o,{children:[e.jsx(s,{children:"Made, and given"}),e.jsxs(n,{children:["An artifact is a file Claude made as he answered, a document, a page, a program, and went on changing as the conversation went on. The conversation's chapter holds an artifact where each version was made: a figure, as a code listing is, that names the version's file beside the chapter and shows it under one line saying what was done; every version stands beside the chapter and the last under its own name, each listed at the chapter's foot as ",e.jsx(r,{children:"[the listing](/dougs-reference-manual/#the-listing)"})," shows files. An attachment is a file given to Claude in a message, pasted or uploaded: a figure the same way, naming the file when the export carried its text, which it does for what was pasted and not for what was uploaded, and then the line alone. Both are writings of their own and not paragraphs of what was said, as ",e.jsx(r,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"})," is; each is a figure, since what it shows is the file."]})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Code } from '@dna-platform/public';

export class $Artifact extends $Code {
    $Artifact(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        return (
            <>
                <figcaption>
                    {words}
                </figcaption>
                <pre>
                    {super.write()}
                </pre>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-artifact');
    }
}

export class $Attachment extends $Code {
    $Attachment(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        if (!this.names) {
            return (
                <figcaption>
                    {words}
                </figcaption>
            );
        }
        return (
            <>
                <figcaption>
                    {words}
                </figcaption>
                <pre>
                    {super.write()}
                </pre>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-attachment');
    }
}

export const Artifact = $($Artifact);
export const Attachment = $($Attachment);
`})]}),"TheArtifactAndTheAttachment2"),P=t(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Project](/claudes-reference-manual/#the-project)"}),e.jsxs(n,{children:[e.jsx(h,{}),"The project a conversation with Claude was held in, said on the conversation's cover as a fact of Claude's, and the conversation with Claude that draws it."]}),e.jsxs(o,{children:[e.jsx(s,{children:"Held in a project"}),e.jsx(n,{children:"In the application a conversation is held in a project, or in none, and the project holds the files Claude reads while it goes. That is a fact about Claude's conversations and not about conversations in general, so it is said here and not in the library's manual: a project is an annotation of a conversation's cover, as the author and the subject are, holding the project book's name and standing a reference to it, and the cover writes it with the form that says the project catalogues the conversation besides, so the project book's table answers it. It is not a topic. A topic is what a conversation, or a part of one, is about, and the same conversation may turn to several; the project is where it was held, one at most, whatever it turned to."}),e.jsxs(n,{children:["A conversation with Claude is the library's conversation specialized here: it answers its project, and draws a project line beside its byline, a word said to be a label and the project's name leading to its book, the way back from a conversation to its project. The project book itself is ",e.jsx(r,{children:"[a project manual](/dougs-reference-manual/#the-project-manual)"}),", the files as spreads and the conversations as entries."]})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Theme } from '@dna-platform/public';
import { $Conversation, Label as label, Light as light, Tone as tone } from '../../.manual/.book';
import { ApplicationForm } from './4-the-page~theme.tsx';

export class $Project extends $Annotation {
    specification = new ProjectSpecification();
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get means(): $Reference | undefined { return this.annotations.expressed($Reference); }

    protected override $Define(): void {
        super.$Define();
        const link = binder.reference(html.copy(this.text));
        if (link === undefined) return;
        const Reference = $(reference);
        this.annotations.add(this,
            <Reference>{link.identifier}</Reference>
        );
    }

    override write(): ReactNode { return this.name; }
}

export class ProjectSpecification extends AnnotationSpecification {
    @specify('a project is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'a project is said of a cover, and this is not one');
    }
}

export class $ProjectLine extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }

    override write(): ReactNode {
        const project = this.project!;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    project
                </Word>
                <Word>
                    <Reference>{project.means!.identifier}</Reference>
                    {project.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-project-line');
    }
}

export const Project = $($Project);
export const ProjectLine = $($ProjectLine);
const projectLine = ProjectLine;

export class $ClaudeConversation extends $Conversation {
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }

    override me(): ReactNode {
        const ProjectLine = $(projectLine);
        return (
            <>
                {super.me()}
                {this.project === undefined ? undefined : (
                    <ProjectLine cover={this.cover} />
                )}
            </>
        );
    }
}

export const ClaudeConversation = $($ClaudeConversation);
$(ClaudeConversation, Theme)(ApplicationForm);
$(ClaudeConversation, tone)(light);
`})]}),"TheProject3"),R=t(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Page](/claudes-reference-manual/#the-page)"}),e.jsxs(n,{children:[e.jsx(h,{}),"How a conversation with Claude is shown on its page: the form the application itself gives a conversation, read off the application, and the browser this library keeps open to read it."]}),e.jsxs(o,{children:[e.jsx(s,{children:"The form the application gives"}),e.jsxs(n,{children:["A conversation is shown as the application shows it, since that is the form its reader knows, and annotations and flourishes come on that base. The form is read off the application's own page in a browser, element by element and style by style, and written as the theme of ",e.jsx(r,{children:"[a conversation with Claude](/claudes-reference-manual/#the-project)"}),", so that the message, the speaker, the time, the action, the artifact and the attachment are dressed as the application dresses them."]})]}),e.jsxs(o,{children:[e.jsx(s,{children:"The browser this library keeps open"}),e.jsx(n,{children:"The application's pages need my sign-in, so the library opens a browser of its own, with a profile that keeps the sign-in once I have logged in there, and leaves it open with a port a later command attaches to: one command opens it on the application and keeps it open, and the others list its tabs, open a page, say what an element says, print its tree or its computed styles, photograph it, scroll to an element, hover or press one and say what changed, or name what runs past the right edge at a width. The file beside this chapter is that tool, run from the repository's root."})]}),e.jsx(i,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Typeset } from '../../.manual/.book';

export class $ApplicationForm extends $Typeset {
    sans = "'Inter', system-ui, sans-serif";
    mono = "ui-monospace, 'Cascadia Code', Consolas, monospace";
    me = '#e8590c';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.cameTo(), this.exchanges(), this.said(), this.done(), this.phone()];
    }

    protected cameTo(): RuleSet {
        return css\`
            .pd-book .pd-pages .pa-synopsis .pd-paragraph { padding: 14px 18px; border-radius: 12px; background: \${({ theme }) => theme.side}; font-family: \${({ theme }) => theme.sans}; font-size: 14px; line-height: 1.6; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pa-synopsis .pd-paragraph::before { content: 'What it came to'; display: block; margin-block-end: 4px; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: 0.12em; text-transform: uppercase; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-pages .pd-turn { display: none; }
            .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        \`;
    }

    protected exchanges(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr); column-gap: 10px; row-gap: 10px; align-items: baseline; margin: 0 0 26px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference { grid-column: 1; text-decoration: none; }
            .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { margin: 0; padding: 0; border: 0; font-family: \${({ theme }) => theme.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: 0.12em; text-transform: uppercase; color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { grid-column: 2; justify-self: start; position: static; display: block; width: auto; margin: 0; font-family: \${({ theme }) => theme.sans}; font-size: 11.5px; font-weight: 500; line-height: 1; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message > .pd-said { grid-column: 1 / -1; display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine { grid-template-columns: minmax(0, 1fr) auto; }
            .pd-book .pd-pages .pd-message.pa-mine > .pa-self-reference { grid-column: 2; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-heading.pd-speaker { color: \${({ theme }) => theme.me}; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { grid-column: 1; justify-self: end; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { justify-self: end; max-width: 78%; padding: 12px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in oklab, \${({ theme }) => theme.me} 12%, white); gap: 8px; }
        \`;
    }

    protected said(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: \${({ theme }) => theme.prose}; font-size: 16.5px; line-height: 1.6; color: \${({ theme }) => theme.ink}; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: \${({ theme }) => theme.sans}; font-size: 15px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 6px 0 0; padding: 0; border: 0; font-family: \${({ theme }) => theme.prose}; font-size: 17px; font-weight: 600; line-height: 1.3; color: \${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 1.3em; }
            .pd-book .pd-pages .pd-message .pa-list .pa-item { display: list-item; list-style: disc outside; }
            .pd-book .pd-pages .pd-message .pa-list .pa-item + .pa-item { margin-block-start: 4px; }
            .pd-book .pd-pages .pd-message .pa-verbatim { font-family: \${({ theme }) => theme.mono}; font-size: 0.86em; padding: 1px 4px; border-radius: 5px; background: \${({ theme }) => theme.side}; color: \${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-message .pa-quoted { padding-inline-start: 12px; border-inline-start: 3px solid \${({ theme }) => theme.line}; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pa-table .pd-paragraph { font-family: \${({ theme }) => theme.sans}; font-size: 14px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pd-code { margin: 0; padding: 12px 14px; border-radius: 10px; border: 1px solid \${({ theme }) => theme.line}; background: \${({ theme }) => theme.side}; font-family: \${({ theme }) => theme.mono}; font-size: 13px; line-height: 1.55; max-width: 100%; overflow: auto; }
            .pd-book .pd-pages .pd-message .pd-equation { display: block; max-width: 100%; overflow-x: auto; font-size: 16px; }
        \`;
    }

    protected done(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message .pd-action { display: flex; align-items: center; gap: 8px; width: fit-content; max-width: 100%; margin: 0; padding: 7px 12px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 10px; font-family: \${({ theme }) => theme.sans}; font-size: 13px; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-action::before { content: '⌕'; flex: none; font-size: 15px; color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message .pd-artifact, .pd-book .pd-pages .pd-message .pd-attachment { margin: 0; border: 1px solid \${({ theme }) => theme.line}; border-radius: 12px; overflow: hidden; background: \${({ theme }) => theme.paper}; }
            .pd-book .pd-pages .pd-message .pd-artifact figcaption, .pd-book .pd-pages .pd-message .pd-attachment figcaption { padding: 10px 14px; border-block-end: 1px solid \${({ theme }) => theme.line}; font-family: \${({ theme }) => theme.sans}; font-size: 13px; font-weight: 600; line-height: 1.4; color: \${({ theme }) => theme.ink}; }
            .pd-book .pd-pages .pd-message .pd-artifact pre, .pd-book .pd-pages .pd-message .pd-attachment pre { margin: 0; padding: 12px 14px; max-height: 24rem; overflow: auto; font-family: \${({ theme }) => theme.mono}; font-size: 12.5px; line-height: 1.5; }
        \`;
    }

    protected phone(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
            }
        \`;
    }
}

export const ApplicationForm = $($ApplicationForm);
`}),e.jsx(i,{identifier:"browser",type:".mjs",children:`import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const puppeteer = createRequire(join(process.cwd(), 'package.json'))('puppeteer');
const port = 9333;
const profile = join(homedir(), '.cache', 'dna-platform', 'claude-browser');
const browserUrl = \`http://127.0.0.1:\${port}\`;
const [command, ...words] = process.argv.slice(2);

const usage = [
    'node 4-the-page~browser.mjs open                       open the browser on claude.ai and keep it open',
    'node 4-the-page~browser.mjs tabs                       list the open tabs',
    'node 4-the-page~browser.mjs go <url>                   open a url in a tab of its own, kept',
    'node 4-the-page~browser.mjs text <url> [selector]      print what the page, or one element, says',
    'node 4-the-page~browser.mjs html <url> <selector>      print an element\\'s outer HTML',
    'node 4-the-page~browser.mjs tree <url> <selector> [n]  print an element\\'s tree, tag and classes, n deep',
    'node 4-the-page~browser.mjs style <url> <selector> <properties,comma,separated>',
    'node 4-the-page~browser.mjs shot <url> <file.png>      photograph the page',
    'node 4-the-page~browser.mjs scroll <url> <selector>    scroll an element into view, at the top',
    'node 4-the-page~browser.mjs hover <url> <selector> [watch]   hover an element; print the watched element\\'s classes before and after',
    'node 4-the-page~browser.mjs press <url> <selector> [watch]   press an element; print the watched element\\'s classes before and after',
    'node 4-the-page~browser.mjs over <url> [width]         name the elements past the right edge at a width',
].join('\\n');

const attached = async () => {
    try {
        return await puppeteer.connect({ browserURL: browserUrl, defaultViewport: null });
    } catch {
        throw new Error(\`no browser answers at \${browserUrl}; open one first with: node 4-the-page~browser.mjs open\`);
    }
};

const pageAt = async (browser, url) => {
    const pages = await browser.pages();
    const open = pages.find(page => page.url().split('#')[0] === url.split('#')[0]);
    if (open !== undefined) return open;
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    return page;
};

const open = async () => {
    mkdirSync(profile, { recursive: true });
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: profile,
        defaultViewport: null,
        args: [\`--remote-debugging-port=\${port}\`, '--window-size=1400,1000', '--no-first-run', '--no-default-browser-check'],
        ignoreDefaultArgs: ['--enable-automation'],
    });
    const [page] = await browser.pages();
    await page.goto('https://claude.ai/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    console.log(\`the browser is open at \${browserUrl}, on claude.ai, with its own profile under \${profile}\`);
    console.log('log in there once; it stays signed in. The browser stays open until this process ends.');
    browser.on('disconnected', () => process.exit(0));
    await new Promise(() => undefined);
};

const run = async () => {
    if (command === 'open') return open();
    if (command === undefined) { console.log(usage); return; }
    const browser = await attached();
    try {
        if (command === 'tabs') {
            for (const page of await browser.pages()) console.log(\`\${page.url()}  ·  \${await page.title()}\`);
            return;
        }
        const [url, selector, third] = words;
        if (url === undefined) throw new Error(\`\${command} needs a url\\n\${usage}\`);
        const page = await pageAt(browser, url);
        if (command === 'go') { console.log(\`\${page.url()}  ·  \${await page.title()}\`); return; }
        if (command === 'text') {
            const said = selector === undefined
                ? await page.evaluate(() => document.body.innerText)
                : await page.$$eval(selector, nodes => nodes.map(node => node.innerText).join('\\n---\\n'));
            console.log(said);
            return;
        }
        if (command === 'html') {
            console.log(await page.$$eval(selector, nodes => nodes.map(node => node.outerHTML).join('\\n---\\n')));
            return;
        }
        if (command === 'tree') {
            const depth = Number(third ?? 4);
            console.log(await page.$eval(selector, (root, depth) => {
                const lines = [];
                const walk = (node, level) => {
                    if (level > depth || node.nodeType !== 1) return;
                    const classes = [...node.classList].slice(0, 12).join('.');
                    const text = node.children.length === 0 ? \` "\${(node.textContent ?? '').trim().slice(0, 60)}"\` : '';
                    lines.push(\`\${'  '.repeat(level)}\${node.tagName.toLowerCase()}\${classes === '' ? '' : \`.\${classes}\`}\${text}\`);
                    for (const child of node.children) walk(child, level + 1);
                };
                walk(root, 0);
                return lines.join('\\n');
            }, depth));
            return;
        }
        if (command === 'style') {
            const properties = (third ?? 'font-family,font-size,line-height,color,background-color,padding,margin,border-radius,max-width').split(',');
            console.log(await page.$$eval(selector, (nodes, properties) => nodes.slice(0, 4).map(node => {
                const computed = getComputedStyle(node);
                const box = node.getBoundingClientRect();
                const values = properties.map(property => \`\${property}: \${computed.getPropertyValue(property)}\`).join('; ');
                return \`\${node.tagName.toLowerCase()} \${Math.round(box.width)}x\${Math.round(box.height)} at \${Math.round(box.left)},\${Math.round(box.top)} · \${values}\`;
            }).join('\\n'), properties));
            return;
        }
        if (command === 'shot') {
            const file = selector ?? 'page.png';
            await page.screenshot({ path: file, fullPage: third === 'full' });
            console.log(\`photograph: \${file}\`);
            return;
        }
        if (command === 'scroll') {
            await page.$eval(selector, node => node.scrollIntoView({ block: 'start' }));
            await new Promise(resolve => setTimeout(resolve, 800));
            console.log(\`scrolled to \${selector}\`);
            return;
        }
        if (command === 'hover' || command === 'press') {
            const watched = third ?? selector;
            const classesOf = () => page.$eval(watched, node => \`\${node.tagName.toLowerCase()}.\${[...node.classList].join('.')}\`).catch(() => 'nothing matches');
            const before = await classesOf();
            if (command === 'hover') await page.hover(selector);
            else await page.click(selector);
            await new Promise(resolve => setTimeout(resolve, 600));
            console.log(\`before: \${before}\\nafter:  \${await classesOf()}\`);
            return;
        }
        if (command === 'over') {
            const width = Number(selector ?? 390);
            await page.setViewport({ width, height: 844 });
            await new Promise(resolve => setTimeout(resolve, 800));
            console.log(await page.evaluate(() => \`the page is \${document.documentElement.scrollWidth} wide on a screen \${window.innerWidth} wide\`));
            console.log(await page.evaluate(() => [...document.querySelectorAll('body *')]
                .filter(node => node.getBoundingClientRect().right > window.innerWidth + 1)
                .slice(0, 20)
                .map(node => {
                    const box = node.getBoundingClientRect();
                    const classes = [...node.classList].slice(0, 6).join('.');
                    return \`\${node.tagName.toLowerCase()}\${classes === '' ? '' : \`.\${classes}\`} right \${Math.round(box.right)} of \${window.innerWidth} · "\${(node.textContent ?? '').trim().slice(0, 50)}"\`;
                }).join('\\n')));
            await page.setViewport({ width: 1400, height: 1000 });
            return;
        }
        throw new Error(\`no command \${command}\\n\${usage}\`);
    } finally {
        browser.disconnect();
    }
};

run().catch(error => {
    console.error(String(error.message ?? error));
    process.exit(1);
});
`})]}),"ThePage4"),S=$(m),B=t(()=>e.jsxs(S,{children:[y(),k(),C(),T(),A(),P(),R()]}),"book");export{B as book};
