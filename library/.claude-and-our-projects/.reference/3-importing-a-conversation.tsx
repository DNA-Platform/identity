import { $Article } from '../../..reference/.book';
import { Bold, Document, Heading, Italics, Paragraph, Section, Title } from '@dna-platform/public';

export default class $ImportingAConversation extends $Article {
    print() {
        return (
            <Document>
                <Title>Importing a Conversation</Title>
                <Section>
                    <Heading>The projects are in the conversations</Heading>
                    <Paragraph>
                        Semantic Reference Theory did not get written and then discussed. It got discussed and is
                        still being written, and the same is true of nearly everything else I work on with Claude.
                        The projects live in the conversations. There are four hundred and sixty-five of them sitting
                        in an export, and every one I care about is a piece of a project this library is supposed to
                        be about.
                    </Paragraph>
                    <Paragraph>
                        So moving them in is not archiving. It is putting the work where the work already is. A
                        conversation that became a book should be shelved as a book, filed under the project it
                        belongs to, with its participants named and its movements given chapters — and then the
                        catalogue entry for that project stops being a summary of something kept elsewhere and starts
                        pointing at the thing itself.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>Which is why there has to be an importer</Heading>
                    <Paragraph>
                        An export is markdown. A library is writing. Nothing here parses markdown at the moment a page
                        is drawn and nothing should — a page that has to interpret a string before it can be read is a
                        page that cannot be specified, searched, or pointed at. So the conversion happens once, on the
                        way in, and what lands is ordinary writing I could have typed myself.
                    </Paragraph>
                    <Paragraph>
                        A long conversation is not one page, and it is not one page per message. It has
                        <Italics> movements</Italics> — runs of exchanges that are about one thing — and each becomes a
                        chapter. No rule finds them. The importer lists every message so I can cut them by reading
                        what was actually said, and the cuts it was given are written into it where I can move them.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>The importer is in the library, not beside it</Heading>
                    <Paragraph>
                        The code that does this is a <Bold>resource of this chapter</Bold>. It carries this chapter's
                        name and sits next to it, so the page that explains the import and the program that performs it
                        are one thing rather than a script somebody would have to go looking for. A library that holds
                        the means of filling itself is a different kind of library, and that is the point.
                    </Paragraph>
                    <Paragraph>
                        It will become part of the <Bold>binder</Bold> — the thing that already configures, inventories,
                        resolves, assembles, specifies, bundles, renders and records. Importing is one more of those,
                        and once it is, a conversation arrives the way a page does: by building.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>What the first one turned out to hold</Heading>
                    <Paragraph>
                        <Italics>Semantics of Types &amp; More</Italics> came back as <Bold>101 blocks</Bold>, of which
                        one was an exact repeat of the block before it, leaving <Bold>100 messages</Bold> in eight
                        movements. Its own frontmatter says <Bold>106</Bold>. I do not know where the other six went,
                        and the importer says so every time it runs rather than quietly rounding the number off.
                    </Paragraph>
                    <Paragraph>
                        Several messages start identically and then diverge. Those are not duplicates — they are me
                        sending the same thing again to get a different answer, which is the conversation happening. So
                        only a block identical to the one immediately before it is treated as the export repeating
                        itself.
                    </Paragraph>
                </Section>
            </Document>
        );
    }
}
