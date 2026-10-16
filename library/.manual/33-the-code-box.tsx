import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Noun ]]</Keyed>
        <Title>[[ The Code Box ]]</Title>
        <Paragraph>
            <Brief />
            A block of code in a box that names its language at the head and offers a copy.
        </Paragraph>
        <Section>
            <Heading>What a code box is</Heading>
            <Paragraph>
                The framework's code is a figure: a listing, highlighted when its language is known. A code box is
                that figure with a bar at its head, as the application the conversations come from sets one: the
                language's name at the left, a copy at the right that puts the listing on the clipboard, and the
                listing under it in the box. A block whose language was not named says text. A block of SRT
                notation, which no highlighter knows, says srt, and the box colours its operators itself, the
                arrows and the double arrows, and its notes after a double colon, with the same four colours every
                listing of this library is coloured in.
            </Paragraph>
            <Paragraph>
                It was made for <Means>$[[ The Conversation ]]( ./The Conversation )</Means>, where every block
                of code Claude or I wrote wears it, and any chapter of mine may write one in place of a plain
                block of code.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a code box fits the library's patterns</Heading>
            <Paragraph>
                A code box is a code figure, so everything said of code is true of it: it is a figure, it names
                its language, it highlights its listing through the highlighter the figure carries as a field,
                which is where the notation's own colouring is given. The bar is content of its own, which is why
                this is a writing and not an annotation. Its look is the library's base theme's, beside the
                listing's rules, so every book draws the box alike.
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
