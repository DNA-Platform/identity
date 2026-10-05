import { Chapter, Code, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Appendix, Wide } from './.book';

export default () => (
    <Chapter>
        <Appendix />
        <Title>[[ The Concept ]]</Title>
        <Section>
            <Heading>What a concept is</Heading>
            <Paragraph>
                A concept is one page of HTML that shows the library in use. It works at a desk's width and at a
                phone's, and it says what it is in its own head: its name, its idea, whether it is still only an
                idea, what I have said of it, and its number. The number is given once and is the concept's own
                for good, so I can say eleven and mean one thing after others have come and gone.
            </Paragraph>
            <Paragraph>
                Every concept stands once, in this book, beside the chapter Every Concept: the page under its
                number, and its two photographs under the same number. That is the only place it is kept. A
                card is the concept as the book draws it: its photograph at a desk, its photograph on a phone
                laid over the corner, its number, and what it says of itself, read from the page's own head.
            </Paragraph>
            <Paragraph>
                Any other chapter shows a concept by its number. It writes the number and nothing else, and the
                card is drawn from the one place the concept stands, so there is no second copy to fall behind.
                The designs I am going with are written that way, each with the concepts it comes from, how it
                came to be, and the book it is for. So are the questions I am asked, each with the concepts it is
                about and my answer under it. Marks say which paragraph is the choice, the story, the question
                and the answer.
            </Paragraph>
            <Paragraph>
                Pressing a card opens the viewer, which takes the whole screen and runs the concept live, at a
                desk and on a phone side by side. The arrow keys move among the cards that stand together, the
                keys one, two and three choose both, the desk or the phone, and escape comes back. The viewer is
                one paragraph the book draws once; a card hands it the page to show.
            </Paragraph>
            <Paragraph>
                The desk is 1280 by 800 and the phone 390 by 844. Side by side they are run at those sizes when
                the screen holds them, and made smaller together when it does not, so the two are always seen
                at one scale. The desk alone takes the whole screen as it is. On a phone the viewer shows the
                phone alone, edge to edge.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a concept is added</Heading>
            <Paragraph>
                A new concept is a page set beside Every Concept under the next number, with that number in its
                head, and one more line in that chapter. The camera, which has a chapter of its own in this
                appendix, takes its photographs. Then the book is bound. Nothing outside this book is needed to
                make it, and every chapter of it is written by hand.
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
