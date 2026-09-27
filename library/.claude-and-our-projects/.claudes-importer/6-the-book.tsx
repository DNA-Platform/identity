import { Bold, Document, Heading, Italics, Paragraph, Section, Title } from '@dna-platform/public';
import { $Article, Comments, Resource } from './.book';

export default class $TheBook extends $Article {
    print() {
        return (
            <Document>
                <Title>The Book</Title>
                <Section>
                    <Heading>What is left on disk</Heading>
                    <Paragraph>
                        A conversation arrives as a <Bold>book</Bold>: the book itself, its table of contents, and one
                        chapter per movement. Ten files for the first one. Each chapter prints a dialogue, each
                        dialogue holds its exchanges, and each exchange names who spoke it.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>Generated and authored do not mix</Heading>
                    <Paragraph>
                        The book, the table and the movement chapters are written on every import and say so on their
                        first line. The cover, the synopsis and the lead are somebody&rsquo;s writing and are never
                        touched. That line has to be obvious from inside the folder, because the whole thing is
                        re-runnable and I should never have to remember which of my own words are safe.
                    </Paragraph>
                    <Paragraph>
                        The table is generated for a reason: a table names every chapter of its book, and a hand-kept
                        one drifts the moment a movement moves.
                    </Paragraph>
                </Section>
                <Comments by="Arthur">
                    <Paragraph>
                        The times are in the file as comments and nowhere else yet. Doug wants the dates — things said
                        at a date, at a time — and there is no home in the model for one. <Italics>That is the next
                        thing this file owes,</Italics> and it is written at the top of it so it cannot be missed.
                    </Paragraph>
                </Comments>
                <Resource>.ts</Resource>
            </Document>
        );
    }
}
