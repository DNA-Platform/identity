import { Chapter, Code, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Appendix, Wide } from './.book';

export default () => (
    <Chapter>
        <Appendix />
        <Title>[[ The Concept ]]</Title>
        <Section>
            <Heading>What a concept is</Heading>
            <Paragraph>
                A concept is one page of HTML that shows the library in use, drawn after something real. It
                works at a desk's width and at a phone's, and it says what it is in its own head: its name, its
                idea, whether it is still only an idea, what I have said of it, and its number. The number is
                given once and is the concept's own for good, so I can say eleven and mean one thing after
                others have come and gone. A card is the concept in the book: its photograph at a desk, its
                photograph on a phone laid over the corner, its number, and what it says of itself, all read
                from the page's own head, so a chapter writes only the three files.
            </Paragraph>
            <Paragraph>
                Every concept stands once in one chapter, Every Concept, in a section for its kind of page. No
                list of them is kept anywhere else. A question I am asked is about numbered concepts and is
                drawn with their cards under it, in the chapter What I Am Asked, and my answer is written under
                the question in my own words. Two marks say which paragraph is the question and which the
                answer.
            </Paragraph>
            <Paragraph>
                Pressing a card opens the viewer, which takes the whole screen and runs the concept live, at a
                desk and on a phone side by side. The arrow keys move among the cards that stand together, the
                concepts of one kind or the ones a question is about, the keys one, two and three choose both,
                the desk or the phone, and escape comes back. The viewer is one paragraph the book draws once;
                a card hands it the page to show.
            </Paragraph>
            <Paragraph>
                The desk is 1280 by 800 and the phone 390 by 844. Side by side they are run at those sizes when
                the screen holds them, and made smaller together when it does not, so the two are always seen
                at one scale. The desk alone takes the whole screen as it is. On a phone the viewer shows the
                phone alone, edge to edge.
            </Paragraph>
            <Paragraph>
                A kind of page is a folder of such pages. One command gives a new concept its number,
                photographs what is new at both widths, places each page and its photographs beside the
                chapter under its number, writes the two chapters and the index, and binds, so five more
                concepts are five more files. A folder may also hold one design and a list of its variants, and
                the command writes a page for each: that is how the same pages are shown in a dozen frames from
                a single drawing.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The concept's file</Heading>
            <Paragraph>
                <Wide />
                <Code language="tsx">![[ code.tsx ]]</Code>
            </Paragraph>
        </Section>
    </Chapter>
);
