import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
        <Title>[[ The Part ]]</Title>
        <Paragraph>
            <Brief />
            How a book of mine is divided into parts, and how a part is read: the manual said of its chapters, in
            a context of its own.
        </Paragraph>
        <Section>
            <Heading>What a part is</Heading>
            <Paragraph>
                A part is a grouping of chapters, and the framework gives it. A chapter says which part it is in at
                its head, with the part's name as its words, and the table of contents answers the grouping as
                objects: the parts of the book, the part a chapter is in, and a part its chapters. That is all a part
                confers. It
                requires no place, no anchor and no form in the table, and the table is written however I write it.
                A chapter need not be in a part: it answers its part or none, and the framework assumes nothing
                about which chapters are in one, so whatever reads parts filters by checking, as this library's
                book does.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a part fits the library's patterns</Heading>
            <Paragraph>
                In this library a part's chapters are listed under a section of the table headed with the part's
                name. That is my convention, not the framework's, and the book reads it: at bind it says a folder
                of that section, so the part folds in the side bar, and the folder's mark leads to the part's first
                chapter, which is where a part is reached, as a book is reached through its cover. Whoever wants
                a part introduced writes that first chapter as the part's synopsis, as <Means>$[[ the key ]]( ./The Key )</Means> opens
                its own. A part is reached by its first chapter, and a heading in the table wears an id as every
                heading does, so a part is named so that its heading and no chapter's title wear one id.
            </Paragraph>
            <Paragraph>
                How a part's chapters are read is a format said of each of them, and this library has
                one, <Means>$[[ the manual ]]( ./The Manual )</Means>, which shows a chapter beside its files. The
                format is the glue between the part and the page; the part itself says nothing of how anything is
                drawn. A part read as a manual is a context of its own. While one of its chapters is open the book
                wears the manual's class, the table shows the part's folder alone, open as a tree, with the book's
                own name at its head leading back out, and the other sections step aside. While none is, the part's
                section reads as any section of the table, a heading and its rows, and a press on a row is the way
                in. So an appendix reads as its own reference manual inside the book it is in.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a part is used</Heading>
            <Paragraph>
                A chapter in a part says its part and that it is a manual at its head, two lines, and nothing else
                changes in it. The table lists it under the section headed with the part's name, word for word, and
                the bind refuses a part read as a manual that no section is headed
                for. <Means>$[[ The catalogue ]]( Dougs Library / The Catalogue )</Means>, the design book's six
                chapters on how it is built and my story's one each do this, under the appendix of their tables. A
                second way of reading a part, when one is wanted, is a format of its own beside the manual's, and
                the two would share a base named for both then; there is one today, and it stands in the manual's
                code.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where a part bites</Heading>
            <Paragraph>
                A part's name is the whole of its identity: the folder knows it is open by comparing the open
                chapter's part with its own, so two parts with one name are one part, and a heading that does not
                say the part's words is a part no section is headed for. A format's layer is drawn after the
                chapter's own draw, so it reads only what the bind settled; what a press changes is read in the
                defines of the annotations on the page, each in its own draw, which is how the folder opens. And a
                format's rules stand earlier in the sheet than a theme's, so every one of them says the book first
                and the folder open, or it loses a tie to the theme and the tone.
            </Paragraph>
        </Section>
    </Chapter>
);
