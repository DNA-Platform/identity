import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
        <Title>[[ The Paragraphs ]]</Title>
        <Paragraph>
            <Brief />
            The five things a paragraph of a design record may be said to be: a question I am asked, an
            answer in my own words, a decision, a pain met in what was built, and what solves it.
        </Paragraph>
        <Section>
            <Heading>What a paragraph may be</Heading>
            <Paragraph>
                Most of a portfolio is ordinary paragraphs. Five sorts are not, and each says which it is at its
                head, read as English: this paragraph is a question, an answer, a decision, a pain, a solution.
                They are the vocabulary a design process is recorded in, and they are general: any book of this
                library that records one writes them, and the theme of the book shows them apart. A question
                stands in the soft ink under its label; an answer is set in the serif with a hairline at its
                side in the book's foot colour, since it is what the author said; a decision stands in a tinted
                block; a pain reads in italic and a solution follows it.
            </Paragraph>
            <Paragraph>
                Each annotation adds its class and says in a sentence what it may be said of, a paragraph. They
                were written for <Means>$[[ the design book ]]( Dougs Design )</Means> and stand here so a second
                portfolio writes the same words; where they are read is
                in <Means>$[[ The Portfolio ]]( ./The Portfolio )</Means>.
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
