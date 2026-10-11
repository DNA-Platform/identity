import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Layout ]]</Keyed>
        <Title>[[ The Gallery ]]</Title>
        <Paragraph>
            <Brief />
            The view of a chapter of concepts, each group a grid of cards and a card opened across the pages;
            and the strip, a paragraph of references to concepts drawn as their small photographs.
        </Paragraph>
        <Section>
            <Heading>The concepts as cards</Heading>
            <Paragraph>
                A gallery is said of a chapter whose sections are concepts, by the portfolio at bind. In it each
                group of concepts is a grid, and each concept is a card: its small photograph first, then the
                number with the fate's word before it, the name, the caption, and what it is drawn after, in a
                faint line. A card opens across the pages when its place is the one I am at, and then it shows
                the desk's and the phone's photographs at their own size, what I said, and the sketch's code,
                with the way back drawn beside its number. The gallery marks the one concept the book's bookmark
                names as open, as the paginated layout marks a page, so no card keeps a state of its own and
                nothing of the screen is written in a section.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The strip</Heading>
            <Paragraph>
                A paragraph that refers to concepts, as the deciding chapters of a design record do, says it is a
                strip, and its layer draws the concepts it refers to as small photographs in the order of the
                references, each a press to the concept's place, with the name and the number under it; the
                sentence itself is kept in the page and not shown. If the section holds a decision, the concepts
                the decision refers to are ringed, so a wall of concepts shows which were taken. A strip reads a
                concept's small photograph from the concept's own paragraph, so nothing is composed in code.
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
