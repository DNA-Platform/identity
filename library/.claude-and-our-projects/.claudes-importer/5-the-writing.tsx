import { Bold, Document, Heading, Italics, Paragraph, Section, Title } from '@dna-platform/public';
import { $Article, Comments, Resource } from './.book';

export default class $TheWriting extends $Article {
    print() {
        return (
            <Document>
                <Title>The Writing</Title>
                <Section>
                    <Heading>Once, on the way in</Heading>
                    <Paragraph>
                        What comes out of the export is markdown. What belongs in a library is writing. The conversion
                        happens here, once, at import — never when a page is drawn. A page that has to interpret a
                        string before it can be read cannot be specified, cannot be searched, and cannot be pointed
                        at, and those three are the whole reason this library exists.
                    </Paragraph>
                    <Paragraph>
                        So a message becomes paragraphs, lists, fenced code and marks, and what lands on disk is
                        ordinary writing I could have typed. There is no markdown left in it.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>It handles what is actually there</Heading>
                    <Paragraph>
                        Bold, italics, inline code, bullets, numbered lists, fenced code, a heading and a link. That
                        is the corpus, counted rather than imagined: no tables, no maths. A reading that covered more
                        than the conversations hold would be a reading nobody had ever tested.
                    </Paragraph>
                </Section>
                <Comments by="Cathy">
                    <Paragraph>
                        Inline code has no kind in the library — it was reached for three times next door and refused
                        each time, because a code span is content that is not writing and nothing has named it yet. It
                        is set <Bold>bold</Bold> here, which is what it looks like and not a claim that it is one.
                    </Paragraph>
                </Comments>
                <Section>
                    <Heading>Four characters that stop meaning something</Heading>
                    <Paragraph>
                        A message is prose until it lands in a file, where braces and angle brackets mean something to
                        a compiler. They are escaped first, before any mark is turned into a tag, so nothing this file
                        writes is escaped by it afterwards. That ordering is the only subtle thing in here.
                    </Paragraph>
                </Section>
                <Resource>.ts</Resource>
            </Document>
        );
    }
}
