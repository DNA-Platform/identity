import { Chapter, Heading, Line, List, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Tool ]]</Keyed>
        <Title>[[ Initializing a Library ]]</Title>
        <Paragraph>
            <Brief />
            How this library was first set up, step by step.
        </Paragraph>
        <Section>
            <Heading>What a library needs to begin</Heading>
            <Paragraph>
                A library is books and nothing else, and it begins with three. The library's own catalogue, which
                is the top: every other book is filed under it, and it is filed under what it is about, which is
                itself. The librarian's autobiography, the one book that is by its own subject, which grounds who
                may author anything here. And a reference manual, this book, where the reusable parts of the
                library are kept beside the chapters that say what they are. Each is a folder, and the folders here
                are <Means>$[[ Dougs Library ]]</Means> in a folder named as a library catalogue, <Means>$[[ Dougs Story ]]</Means> in
                one named as a subject, and this manual in one named as a subject too. A fourth is beside
                them, <Means>$[[ Dougs Design ]]</Means>, where the design of the library is kept. The compiler reads
                no folder name; the dots are a convention kept for the person reading the tree.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What a book is made of</Heading>
            <Paragraph>
                A folder is a book when it holds a book file, and a book holds four files before any chapter:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>a book file, which exports the class the book is, taken from this manual's book file;</Line>
                <Line>a cover, which says the book's title, who wrote it, where it is filed and what it is about;</Line>
                <Line>a synopsis, which says what the book is in a paragraph, and is what a catalogue's row refers to;</Line>
                <Line>a table of contents, which answers for the chapters the book holds and for the books it catalogues.</Line>
            </Paragraph>
            <Paragraph>
                The compiler holds the table to its word: it must link to every chapter of its book, itself among
                them, and to every book filed under it, or the bind refuses.
            </Paragraph>
            <Paragraph>
                Then numbered chapters, each a file whose first words are its title. A file beside a chapter, named
                for it with an identifier and a type, is the chapter's to print or to import, and the compiler
                refuses one the chapter does not use.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What a cover says</Heading>
            <Paragraph>
                Everything a cover says is said in the notation, whatever element holds it. Two brackets around a
                name is a title. A second title form on a cover is what the book is about, the name of the subject
                it represents, which need not be the book's name: this library is called Dougs Library and is about
                The Library, and the autobiography is about The Librarian, so an author is written as The
                Librarian and a book is filed under The Library. One star before the brackets says who wrote the
                book; two say which catalogue it is filed under. The top says it is filed under itself, and the
                compiler requires that one book here does so, or there is no library.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The face, and the bind</Heading>
            <Paragraph>
                The library publishes to a face, a folder beside the books that holds the binding and the site it
                builds. The face is made once, by running the master binding's copy script pointed at the library's
                folder; it names the face with as many dots as put it above every book, and writes a configuration
                naming where the copy came from, so that syncing brings the master in before every build. The
                configuration also names the root book, the title of the site, and the stylesheets and fonts a page
                loads. Then the bind: it reads every book, checks the library is well-formed, and writes one page
                per book. Every fault it raises is a sentence a librarian could say about the library without knowing
                the compiler exists, no title, not listed, may not author, and the library is initialized when it
                raises none.
            </Paragraph>
            <Paragraph>
                The bind is run in the face's binding folder, as npm run bind, and the site it builds is served
                from that folder with npx vite preview. The face keeps the pictures that stood beside a chapter
                after they are taken out of the book, until that book's folder in the face is cleared by hand.
            </Paragraph>
            <Paragraph>
                The bind publishes the library. It is not how I look at the library while I am writing it, and
                that is said in <Means>$[[ ./Developing a Library ]]</Means>.
            </Paragraph>
        </Section>
    </Chapter>
);
