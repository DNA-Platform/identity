import { Append, Chapter, Heading, Line, List, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Kind>$[[ ./A Tool ]]</Kind>
        <Title>[[ Developing a Library ]]</Title>
        <Paragraph>
            <Brief />
            How a page of this library is worked on with the page open, and bound once.
        </Paragraph>
        <Section>
            <Heading>The page stays open</Heading>
            <Paragraph>
                I develop this library with its pages open. The binder serves the library live, straight from
                the files I am writing, and when I save one the open page changes in place: a sentence in a
                chapter in a quarter of a second, a rule in a theme in about half of one. Nothing is bound and
                the page is not loaded again. If what I saved breaks the library, the page says so in the
                compiler's own sentence, and the sentence goes when I mend the file.
            </Paragraph>
            <Paragraph>
                This is the only way I look at the library while I am working on it. Work on how a page looks
                needs its answer at once, and a way of working that cannot give one has failed at what it is
                for.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The workbench</Heading>
            <Paragraph>
                The workbench is the tool I do this with. Opened once, it starts the live site and keeps a
                browser open on it. After that I ask it for a look at any book. It waits for my last save to
                reach the page, photographs the page at a desk's width or a phone's, and tells me:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>what the page says, or any part of it;</Line>
                <Line>what a rule computes to on an element, and where the element is;</Line>
                <Line>how many things run past the right edge of the screen;</Line>
                <Line>anything that went wrong on the page, and what the compiler says is wrong if it stopped.</Line>
            </Paragraph>
            <Paragraph>
                A look takes under a second, because the browser is already open and the page is already
                drawn. It can press something first, load the page again as a reader arriving would, and say
                which of the rules that name a thing wins. What the workbench does for a book is
                what <Means>$[[ the camera ]]( Dougs Design / The Camera )</Means> does for a concept, and it is kept
                here for the same reason the camera is kept there, which is told
                in <Means>$[[ Closure ]]( Dougs Story / Closure )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>When I bind</Heading>
            <Paragraph>
                The bind is how the library is published, and it is not how I look at it. What it does is said
                in <Means>$[[ ./Initializing a Library ]]</Means>. It takes seconds where a save takes none, so I
                bind when a piece of work is done.
            </Paragraph>
            <Paragraph>
                The bind checks three things the live site does not: each book against its own rules, each
                page as it is printed for a reader who arrives before the code does, and every link against
                the page it leads to. So my last look at finished work is at the site the bind built, loaded
                afresh, and the workbench takes that look too.
            </Paragraph>
        </Section>
        <Append
            identifier="workbench"
            type=".mjs"
        >
            ![[ workbench.mjs ]]
        </Append>
    </Chapter>
);
