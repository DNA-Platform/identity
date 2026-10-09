import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Type of Book ]]</Keyed>
        <Title>[[ The Book ]]</Title>
        <Paragraph>
            <Brief />
            The class every book of this library stands on: it draws the frame once and collects its chapters.
        </Paragraph>
        <Section>
            <Heading>What the book is</Heading>
            <Paragraph>
                Every book in this library extends one class, so what a book is here is said once. A book of mine
                holds chapters and nothing else, it has a place for every chapter it holds, and only an ordinary
                chapter appends a file. The class says all three in its specification, and the bind holds every
                book to it.
            </Paragraph>
            <Paragraph>
                The class draws the frame that is on every screen, in five regions named as the frame's sketch
                names them: the library's bar, with what the book is filed under and the library's own subjects;
                me, who the book is by; what the book holds, its table of contents; the head, its cover and its
                switches; and the pages, the synopsis it opens on and then each chapter, one open at a time. The
                chapter is the page: the framework's own Paginated marks the open one on the chapter's element
                and hides the rest, so the book draws no box around a chapter, and whatever a chapter is shown
                inside, the manual's spread or the catalogue's desk, is a Format said of that chapter. A region is
                a method, and a type of book overrides the method whose region it fills differently, and nothing
                else; above the pages and below them a type may draw something of its own, the story its top and
                the catalogue its shelf.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the book fits the library's patterns</Heading>
            <Paragraph>
                The purpose of a book is layout: the book's own class places its parts, each in an element of its
                own with a class, and it finds its chapters by what they carry, never by position. Where the
                regions go is not the book's to say; that is <Means>$[[ the layout ]]( ./The Layout )</Means>,
                said of the book once, whose one grid is the frame: the library's bar across the top, what the
                book holds down the side. What colours the regions is <Means>$[[ a tone ]]( ./The Tone )</Means>,
                said of the book too. The class gives every book its layout and its tone when it is defined, and
                a type of book that wants another tone registers it on its class in one line, the way the
                framework's own theme is registered.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the book is used</Heading>
            <Paragraph>
                A type of book is a class under this one. <Means>$[[ The catalogue ]]( Dougs Library / The Catalogue )</Means> overrides
                its head, which it leaves to its switches, and what stands below the pages, its shelf, names its
                entries as pages, and says a desk of its own synopsis and of each book's at bind; <Means>$[[ the manual ]]( ./The Manual )</Means> overrides
                its switches and gives itself the spread that sets a chapter beside its file; <Means>$[[ my story ]]( Dougs Story / The Sheet )</Means> overrides
                its head and what stands above the pages, and <Means>$[[ the design book ]]( Dougs Design / The Frame )</Means> says
                which chapter opens when none is named. Each is a few lines, because the frame is this class's.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What the book gives a type</Heading>
            <Paragraph>
                What a type reads: its chapters, the ordinary ones; its pages, which are the synopsis and every
                chapter, and its body, the chapters in reading order with the appendix left out, which the turn
                walks and the numbered entry counts; what it places, which its specification counts; which
                chapter is open, the one the address names, whether the address names the chapter or a heading
                inside it; the three tones it may offer as switches. What a type overrides: the library's bar,
                the subjects, what the book holds, the head, what stands above the pages and below them, what the
                book opens on, the switches. And what the book does for every type: it draws each page as the
                chapter it is and lets the Format the chapter says, <Means>$[[ a manual's ]]( ./The Manual )</Means> spread
                or a catalogue's desk, stand around it; it says a folder of
                each <Means>$[[ part's ]]( ./The Part )</Means> section at bind, and the root, the row at the head of
                the tree that leads back out of a part, which a type may say it has none of; it refuses a part
                read as a manual that no section is headed for; and its layout reads whether the open chapter is
                a manual to put the class on the book that is the context.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where the book bites</Heading>
            <Paragraph>
                A type overrides a region and never redraws the frame; a type that wrote its own bars was the
                wrong turn this class ended. A thing said of a book of this library takes the one rule in the
                second file below, so it is said of a book of this library and of nothing else. And the class
                imports the library's subjects from the catalogue through a file beside that book's chapter which
                imports only the framework, because the catalogue's table imports this manual's book file, and a cycle
                through that file loads half a module.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="said"
            type=".tsx"
        >
            ![[ said.tsx ]]
        </Append>
    </Chapter>
);
