import { Chapter, Code, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from '../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ The Theme ]]</Title>
        <Section>
            <Heading>What this book's theme is</Heading>
            <Paragraph>
                This book wears a theme of its own, registered on its own book class, so no other book of the
                library sees it. It is the library's theme with other values and one part added. The part is the
                concepts: the cards, the questions and my answers under them, and the viewer a card opens in.
            </Paragraph>
            <Paragraph>
                The theme comes in two modes, and I change between them at the top of the page. The library mode
                keeps the dark of the coming-soon page on the side bar. The gallery mode is white, with the side
                bar pale. A mode is the same theme with a few values changed, so nothing else in the book knows
                which one it is in.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The theme's file</Heading>
            <Paragraph>
                <Code identifier="code" />
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
