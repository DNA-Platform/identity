import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Bars ]]</Title>
        <Paragraph>
            <Brief />
            Where the library's bar goes: six arrangements, one said of a book at a time.
        </Paragraph>
        <Section>
            <Heading>What an arrangement is</Heading>
            <Paragraph>
                The frame's sketch is one page with an attribute for where the library's bar goes, and that
                attribute has six values: down the side, across the top, both, two bars across the top, a
                narrow rail of marks, and cards on a ground. Each is an arrangement said of a book, with a name
                in plain words — <Means>$[[ a black side bar ]]( Dougs Design / A Black Side Bar )</Means>, <Means>$[[ a black top bar and an opal side bar ]]( Dougs Design / A Black Top Bar and an Opal Side Bar )</Means> — and
                one stands at a time: the one said last steps the others down, as the framework's own theme
                does. Every book wears both bars unless it says otherwise, because I want a top bar on every
                screen and a side bar on most.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How an arrangement fits the library's patterns</Heading>
            <Paragraph>
                An arrangement adds a class to the book and nothing else. The grid each class means is written
                once in <Means>$[[ the layout ]]( ./The Layout )</Means>, which is always there, with the sketch's
                columns as values of <Means>$[[ the theme ]]( ./The Theme )</Means>: 240 pixels for both bars,
                256 for a side bar, 236 for two, 244 for cards, 68 for a rail. A reader presses from one to
                another with <Means>$[[ a tab ]]( ./The Switch )</Means> and the book redraws nothing; it was
                measured, and that is why these are annotations and not formats.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How an arrangement is used</Heading>
            <Paragraph>
                A book takes an arrangement by registering it on its class, in one line, the way the base takes
                both bars for every book. <Means>$[[ The design book ]]( Dougs Design / The Frame )</Means> offers
                all six as tabs at its head, which is how I look at them; the other books take one and offer
                none.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The six of them</Heading>
            <Paragraph>
                Both bars: the library across the top, what the book holds down the left under it, the head and
                the page beside. A side bar: the library down the left with what the book holds under it and me
                at its foot, the head and the page beside. A top bar: everything across the top, what the book
                holds as a row of pills. Two bars: the library's and then the head's, both across, the holds at
                the left under them. A rail: the library's marks down a narrow column, me at its foot. Cards:
                both bars, with each region a white card on a ground. The subjects beside the library's name are
                the catalogue's own, written once beside <Means>$[[ its chapter ]]( Dougs Library / The Bars )</Means> and
                drawn on every book.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where an arrangement bites</Heading>
            <Paragraph>
                The cover drawn in the head is the top bar and the table of contents drawn in the holds is the
                side bar; neither needs saying of itself any more, and the two things that once said it are
                gone. On a phone every arrangement is one column, and the library's bar stays at the top.
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
