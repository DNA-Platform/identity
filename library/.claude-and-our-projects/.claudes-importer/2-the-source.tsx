import { Bold, Document, Heading, Italics, Paragraph, Section, Title } from '@dna-platform/public';
import { $Article, Comments, Resource } from './.book';

export default class $TheSource extends $Article {
    print() {
        return (
            <Document>
                <Title>The Source</Title>
                <Section>
                    <Heading>Two hundred and eight megabytes</Heading>
                    <Paragraph>
                        The export is one JSON array holding every conversation I have ever had, and uncompressed it
                        is <Bold>208 MB</Bold>. That number is not a detail, it is the design. Nothing here parses the
                        file. It reads it as a stream, counts braces outside strings, cuts each conversation loose as
                        it closes, and throws the read part away — so what is in memory at any moment is one
                        conversation rather than the archive.
                    </Paragraph>
                    <Paragraph>
                        Finding <Italics>Semantics of Types &amp; More</Italics> takes <Bold>17 seconds</Bold> and
                        peaks at <Bold>37 MB</Bold>, and the read stops the moment it has what it came for.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>A zip of one entry is a header and a deflate stream</Heading>
                    <Paragraph>
                        The export arrives zipped, and there is no zip reader in Node. There did not need to be one:
                        the archive holds a single entry, so the local header says where the bytes start and whether
                        they were stored or deflated, and the rest is a stream. No dependency, no temporary file, and
                        nothing unpacked onto a disk to go stale.
                    </Paragraph>
                </Section>
                <Comments by="Adam">
                    <Paragraph>
                        The first version of the scan restarted at zero on every chunk, which is quadratic, and it
                        never finished — killed at ten minutes with nothing to show. The scan resumes now, and the
                        comment in the file says why so nobody writes it the easy way again.
                    </Paragraph>
                </Comments>
                <Section>
                    <Heading>The export's words are renamed once, here</Heading>
                    <Paragraph>
                        The export says <Bold>chat_messages</Bold>, <Bold>created_at</Bold> and
                        <Bold> parent_message_uuid</Bold>. This file is the only place those words appear. Everything
                        downstream reads a message that says who sent it, what it says, when it was said and what it
                        was said after — which is the vocabulary a library has, not the vocabulary an export has.
                    </Paragraph>
                </Section>
                <Resource>.ts</Resource>
            </Document>
        );
    }
}
