import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Kind>$[[ ./An Annotation ]]</Kind>
        <Title>[[ The Part ]]</Title>
        <Paragraph>
            <Brief />
            How a book of mine is divided into parts, and how a part is read: a view said of its chapters.
        </Paragraph>
        <Section>
            <Heading>What a part is</Heading>
            <Paragraph>
                A part is a grouping of chapters, and the framework gives it. A chapter says which part it is in at
                its head, with the part's name as its words, and the table of contents answers the grouping as
                objects: the parts of the book, the part a chapter is in, and a part its chapters. That is all a part
                confers. It
                requires no place, no anchor and no form in the table, and the table is written however I write it.
                A chapter need not be in a part; a book in which one chapter is has every chapter in one.
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
                How a part's chapters are shown is a view: a format said of each chapter of the part, whose base
                is the file beside this chapter. A view's layer shows the chapter however the view likes, it may
                add to the row of the tree that leads to one of its chapters, and it may put a class on the book
                while one of its chapters is open, which is how the table shows that part first and lets the rest
                step aside. The manual, <Means>$[[ the one view this library has ]]( ./The Manual )</Means>, shows a
                chapter beside its files. The view is the glue between the part and the page; the part itself says
                nothing of how anything is drawn.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a part is used</Heading>
            <Paragraph>
                A chapter in a part says its part and its view at its head, two lines, and nothing else changes in
                it. The table lists it under the section headed with the part's name. <Means>$[[ The catalogue ]]( Dougs Library / The Catalogue )</Means>,
                the design book's six chapters on how it is built and my story's one each do this, under the
                appendix of their tables. A new view is a class under the one beside this chapter: a layer if its
                chapters are shown some way, a row if the tree shows more under its chapters, a context if the table
                should adapt.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where a part bites</Heading>
            <Paragraph>
                A view's layer is drawn after the chapter's own draw, so it reads only what the bind settled, never
                what a press changes; what a press changes is read by the words the layer draws, each in its own
                draw. And a view's rules stand earlier in the sheet than a theme's, so every one of them says the
                book first and its own class, or it loses a tie to the theme and the tone.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
