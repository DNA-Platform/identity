import { Bold, Document, Heading, Italics, Paragraph, Section, Title } from '@dna-platform/public';
import { $Article, Comments, Resource } from './.book';

export default class $TheThread extends $Article {
    print() {
        return (
            <Document>
                <Title>The Thread</Title>
                <Section>
                    <Heading>A conversation is a tree and a reader sees a path</Heading>
                    <Paragraph>
                        Every time I edit a message or ask for another answer, the conversation branches. What the app
                        shows me is never the tree — it is one path through it, from the first thing said down to
                        whichever end I was last standing on. That path is the conversation as far as anybody reading
                        it is concerned, and it is the only thing I want in the library.
                    </Paragraph>
                    <Paragraph>
                        Each message carries the one it was said after, so the path is a walk: take the last thing
                        nothing answers, follow the parents up to the root, and turn it around.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>What this settled</Heading>
                    <Paragraph>
                        <Italics>Semantics of Types &amp; More</Italics> holds <Bold>106</Bold> messages, one root and
                        <Bold> ten</Bold> parents with more than one child. On the screen it is <Bold>84</Bold>, and
                        the other <Bold>22</Bold> are on branches. Read as a thread it alternates perfectly:
                        <Bold> zero</Bold> messages follow the same speaker.
                    </Paragraph>
                    <Paragraph>
                        That last number is the proof. A first attempt read the markdown export instead and found 101
                        blocks with near-identical messages sitting beside each other — which looked like me saying
                        the same thing twice and was nothing of the kind. The markdown had flattened ten branches into
                        the run. Reading the source, none of that has to be guessed at.
                    </Paragraph>
                </Section>
                <Comments by="Cathy">
                    <Paragraph>
                        The importer reports what it left behind rather than rounding it off. A conversation of 106
                        that shows 84 has 22 on paths nobody is reading, and saying so is the difference between a
                        record and a summary.
                    </Paragraph>
                </Comments>
                <Resource>.ts</Resource>
            </Document>
        );
    }
}
