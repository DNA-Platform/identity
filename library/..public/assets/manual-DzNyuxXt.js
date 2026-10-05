var g=Object.defineProperty;var s=(f,u)=>g(f,"name",{value:u,configurable:!0});import{j as e,C as i,a as y,T as o,A as x,S as k,c as j,P as c,d as t,e as w,f as n,H as r,g as a,W as l,M as d,w as p,L as T,y as h,$}from"./index-BG-LiBlq.js";import{$ as v}from"./1-the-book~code-DmwhARbQ.js";const b=class b extends v{};s(b,"$TheManual");let m=b;const D=s(()=>e.jsxs(i,{children:[e.jsx(y,{}),e.jsx(o,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),e.jsx(x,{children:"[The Librarian](/dougs-story/)"}),e.jsx(k,{children:"[The Library](/dougs-library/)"})]}),"Cover"),L=s(()=>e.jsxs(i,{children:[e.jsx(j,{}),e.jsxs(o,{children:[e.jsx(c,{}),"[Synopsis](/dougs-reference-manual/)"]}),e.jsx(t,{children:"The reusable parts of this library, each standing beside the chapter that says what it is: the book class every book here extends, the theme every book wears, and how the library was initialized. The book file of this manual is the door the other books import their tools from."})]}),"Synopsis"),z=s(()=>e.jsxs(i,{children:[e.jsx(w,{}),e.jsxs(o,{children:[e.jsx(c,{}),"[Table of Contents](/dougs-reference-manual/#table-of-contents)"]}),e.jsxs(n,{children:[e.jsx(r,{children:"Contents"}),e.jsx(t,{children:e.jsx(a,{children:"[The Book](/dougs-reference-manual/#the-book)"})}),e.jsx(t,{children:e.jsx(a,{children:"[The Theme](/dougs-reference-manual/#the-theme)"})}),e.jsx(t,{children:e.jsx(a,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"})}),e.jsxs(t,{children:[e.jsx(c,{}),e.jsx(l,{children:e.jsx(a,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})}),e.jsx(l,{children:e.jsx(a,{children:"[Synopsis](/dougs-reference-manual/#synopsis)"})}),e.jsx(l,{children:e.jsx(a,{children:"[Table of Contents](/dougs-reference-manual/#table-of-contents)"})})]})]})]}),"Table"),S=s(()=>e.jsxs(i,{children:[e.jsx(o,{children:"[The Book](/dougs-reference-manual/#the-book)"}),e.jsxs(n,{children:[e.jsx(r,{children:"What a book is here"}),e.jsxs(t,{children:["Every book in this library extends the library's own book class, so what a book is here is decided once. The class is the framework's Book with nothing added yet, and its file is where the theme is registered for the framework's on the library's book class: every book of the library is a subclass and inherits the registration, so the Theme the framework stands on every book is ",e.jsx(d,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),"."]})]}),e.jsxs(n,{children:[e.jsx(r,{children:"The book's file"}),e.jsx(t,{children:"The file stands beside this chapter and is printed as it is on disk. The manual's book file is the door: it takes the class from here, and every other book of the library imports it from there."}),e.jsx(t,{children:e.jsx(p,{children:`import { $ } from '@dna-platform/chemistry';
import { $Book, Theme } from '@dna-platform/public';
import { DougsTheme } from './2-the-theme~code.tsx';

export class $DougsLibrary extends $Book { }

export const DougsLibrary = $($DougsLibrary);
$(DougsLibrary, Theme)(DougsTheme);
`})})]})]}),"TheBook1"),C=s(()=>e.jsxs(i,{children:[e.jsx(o,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),e.jsxs(n,{children:[e.jsx(r,{children:"What the theme is"}),e.jsx(t,{children:"A place for the library's properties, and the one styled component that dresses the framework's marks with them. The framework's Theme is bare, so the properties are this library's own: the font, the size, the leading, the measure, the space, the ink, the paper and the link, declared as fields and read by every rule beneath through the theme's own provision. The values stand in for a design not yet made: a light paper and a dark ink, in the light serif of the page that has stood at the library's address while it was built. That page's own dark is a cover, and is kept for an accent."}),e.jsx(t,{children:"The component is composed of parts, each a method returning a fragment of rules, so that a book changes one part and keeps the rest: the page, the levels and the links. Every rule names a mark the framework puts on the writing."})]}),e.jsxs(n,{children:[e.jsx(r,{children:"The theme's file"}),e.jsx(t,{children:e.jsx(p,{children:`import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Theme } from '@dna-platform/public';

declare module 'styled-components' {
    export interface DefaultTheme extends $DougsTheme {}
}

export class $DougsTheme extends $Theme {
    font = "'Cormorant Garamond', Georgia, serif";
    size = '1.25rem';
    leading = '1.6';
    measure = '40rem';
    space = '1.5rem';
    ink = '#14262b';
    paper = '#f5f1e8';
    link = '#1c6a71';
    style: ElementType = selection.div\`\${this.parts()}\`;

    protected parts(): RuleSet[] {
        return [this.page(), this.levels(), this.links()];
    }

    protected page(): RuleSet {
        return css\`
            font-family: \${({ theme }) => theme.font};
            font-size: \${({ theme }) => theme.size};
            font-weight: 500;
            line-height: \${({ theme }) => theme.leading};
            color: \${({ theme }) => theme.ink};
            background: \${({ theme }) => theme.paper};
            min-height: 100vh;
            box-sizing: border-box;
            padding: \${({ theme }) => theme.space};
            .pd-book { max-width: \${({ theme }) => theme.measure}; margin-inline: auto; }
        \`;
    }

    protected levels(): RuleSet {
        return css\`
            .pd-chapter { margin-block: calc(2 * \${({ theme }) => theme.space}); }
            .pd-section { margin-block: \${({ theme }) => theme.space}; }
            .pd-paragraph { margin-block: \${({ theme }) => theme.space}; }
            .pd-title { font-size: calc(2 * \${({ theme }) => theme.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: \${({ theme }) => theme.space}; }
            .pd-heading { font-weight: 600; margin-block: \${({ theme }) => theme.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ui-monospace, monospace; font-size: calc(0.75 * \${({ theme }) => theme.size}); line-height: 1.5; white-space: pre; overflow-x: auto; padding: \${({ theme }) => theme.space}; background: color-mix(in srgb, \${({ theme }) => theme.ink} 6%, \${({ theme }) => theme.paper}); }
        \`;
    }

    protected links(): RuleSet {
        return css\`
            .pa-reference { color: \${({ theme }) => theme.link}; text-decoration-color: \${({ theme }) => theme.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: \${({ theme }) => theme.link}; }
        \`;
    }
}

export const DougsTheme = $($DougsTheme);
`})})]})]}),"TheTheme2"),A=s(()=>e.jsxs(i,{children:[e.jsx(o,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),e.jsxs(n,{children:[e.jsx(r,{children:"What a library needs to begin"}),e.jsxs(t,{children:["A library is books and nothing else, and it begins with three. The library's own catalogue, which is the top: every other book is filed under it, and it is filed under what it is about, which is itself. The librarian's autobiography, the one book that is by its own subject, which grounds who may author anything here. And a reference manual, this book, where the reusable parts of the library stand beside the chapters that say what they are. Each is a folder, and the folders here are ",e.jsx(d,{children:"[Dougs Library](/dougs-library/)"})," in a folder named as a library catalogue, ",e.jsx(d,{children:"[Dougs Story](/dougs-story/)"})," in one named as a subject, and this manual in one named as a subject too. A fourth stands beside them, ",e.jsx(d,{children:"[Dougs Design](/dougs-design/)"}),", where the design of the library is kept. The compiler reads no folder name; the dots are a convention kept for the person reading the tree."]})]}),e.jsxs(n,{children:[e.jsx(r,{children:"What a book is made of"}),e.jsx(t,{children:"A folder is a book when it holds a book file, and a book holds four files before any chapter:"}),e.jsxs(t,{children:[e.jsx(T,{}),e.jsx(h,{children:"a book file, which exports the class the book is, taken from this manual's door;"}),e.jsx(h,{children:"a cover, which says the book's title, who wrote it, where it is filed and what it is about;"}),e.jsx(h,{children:"a synopsis, which says what the book is in a paragraph, and is what a catalogue's row refers to;"}),e.jsx(h,{children:"a table of contents, which answers for the chapters the book holds and for the books it catalogues."})]}),e.jsx(t,{children:"Then numbered chapters, each a file whose first words are its title. A file beside a chapter, named for it with an identifier and a type, is the chapter's to print or to import, and the compiler refuses one the chapter does not use."})]}),e.jsxs(n,{children:[e.jsx(r,{children:"What a cover says"}),e.jsx(t,{children:"Everything a cover says is said in the notation, whatever element holds it. Two brackets around a name is a title. A second title form on a cover is what the book is about, the name of the subject it represents, which need not be the book's name: this library is called Dougs Library and is about The Library, and the autobiography is about The Librarian, so an author is written as The Librarian and a book is filed under The Library. One star before the brackets says who wrote the book; two say which catalogue it is filed under. The top says it is filed under itself, and the compiler requires that one book here does so, or there is no library."})]}),e.jsxs(n,{children:[e.jsx(r,{children:"The face, and the bind"}),e.jsx(t,{children:"The library publishes to a face, a folder beside the books that holds the binding and the site it builds. The face is made once, by running the master binding's copy script pointed at the library's folder; it names the face with as many dots as put it above every book, and writes a configuration naming where the copy came from, so that syncing brings the master in before every build. The configuration also names the root book, the title of the site, and the stylesheets and fonts a page loads. Then the bind: it reads every book, checks the library is well-formed, and writes one page per book. Every fault it raises is a sentence a librarian could say about the library without knowing the compiler exists, no title, not listed, may not author, and the library is initialized when it raises none."}),e.jsx(t,{children:"The bind is run in the face's binding folder, as npm run bind, and the site it builds is served from that folder with npx vite preview. The face keeps the pictures that stood beside a chapter after they are taken out of the book, until that book's folder in the face is cleared by hand."})]})]}),"InitializingALibrary3"),E=$(m),I=s(()=>e.jsxs(E,{children:[D(),L(),z(),S(),C(),A()]}),"book");export{I as book};
