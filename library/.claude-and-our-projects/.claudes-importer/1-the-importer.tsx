import { Bold, Document, Heading, Italics, Paragraph, Section, Title } from '@dna-platform/public';
import { $Article, Comments, Resource } from './.book';

export default class $TheImporter extends $Article {
    print() {
        return (
            <Document>
                <Title>The Importer</Title>
                <Section>
                    <Heading>Five steps and nothing hidden between them</Heading>
                    <Paragraph>
                        This is the whole of it. Find the conversation in the export, walk the thread a reader
                        actually sees, cut it into movements, turn each message into writing, and shelve the book.
                        Every step is one file, every file has one chapter, and the chapter carries the same name — so
                        it is never a question which page a change to the code owes an edit to.
                    </Paragraph>
                    <Paragraph>
                        Run without arguments it says what it would do and stops. Run with <Bold>--write</Bold> it
                        writes the book. I want to be able to see the cuts before anything lands on disk, because the
                        cuts are the one part of this that is a judgement rather than a rule.
                    </Paragraph>
                </Section>
                <Comments by="Adam">
                    <Paragraph>
                        The order of the chapters is the order Doug reads code in: the thing that does the work first,
                        then the things it leans on, each one able to be skipped by somebody who trusts its name.
                    </Paragraph>
                </Comments>
                <Section>
                    <Heading>What it says when it runs</Heading>
                    <Paragraph>
                        It reports three numbers before anything else: how many messages are in the export, how many
                        are on the screen, and how many are on paths nobody is looking at. For the first conversation
                        those are <Bold>106</Bold>, <Bold>84</Bold> and <Bold>22</Bold>. A conversation of 106 that
                        shows 84 has not lost anything — it has 22 on branches, and I would rather read that sentence
                        than wonder about a missing number.
                    </Paragraph>
                </Section>
                <Resource>.ts</Resource>
            </Document>
        );
    }
}
