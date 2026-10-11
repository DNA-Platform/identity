import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
        <Title>[[ The Concept ]]</Title>
        <Paragraph>
            <Brief />
            A concept is one sketch of one idea, a section with a number it keeps, three photographs, its
            caption and what it is drawn after, and its fate.
        </Paragraph>
        <Section>
            <Heading>What a concept is</Heading>
            <Paragraph>
                A concept is a section of a chapter that says it is one and gives its number, which it keeps for
                good; I answer by that number. Under its heading stand what it is drawn after, said to be its
                precedent; the idea in a sentence, said to be its caption, the one line a card shows; its three
                photographs; what I said of it, an answer; where it is built when it is, said to be its where, a
                line that refers to the place and shows only in the concept opened; and last the sketch's own
                code, said to be its source, which a concept opened across the screen shows under a close, a
                word written in the section as a link back. The number is drawn where the section says it is a concept, as the note of that
                saying, so it stands on the card before the name.
            </Paragraph>
            <Paragraph>
                A photograph is a paragraph that holds one image and says which device it was taken at: a desk,
                a phone, or small, which is the desk at a third of its pixels for a card. A phone's is drawn at a
                phone's width whatever the density it was taken at, and every photograph is taken at one pixel
                per pixel, so its own size is its device's. A concept is photographed all three ways, which its
                rule asks for; the card shows the small one and the concept opened shows the other two. A design
                chapter's photographs say their device the same way.
            </Paragraph>
            <Paragraph>
                A concept's fate is a sentence of its author's: a concept that a design was made from says it is
                designed, and one that was decided on and not yet designed from its print says it is decided.
                The card marks the word before the number; nothing derives a fate by reading other chapters.
                The sketch itself is a file kept beside the chapter, there to document the concept, so its section
                prints it as code and nothing in this library opens it or draws it. Another chapter points to a
                concept by its number, as a link to its place, and does not show it a second time; a paragraph of
                such links is drawn as a strip of small photographs by <Means>$[[ The Gallery ]]( ./The Gallery )</Means>.
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
