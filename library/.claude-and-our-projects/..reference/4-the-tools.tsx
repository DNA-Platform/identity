import { $ } from '@dna-platform/chemistry';
import { Document, For, Heading, Paragraph, Section, Synopsis, Title, book as bookMention } from '@dna-platform/public';
import { $Article } from '../../..reference/.book';

const Book = $(bookMention);

export default class $TheTools extends $Article {
    print() {
        return (
            <Document>
                <Title>The tools</Title>
                <Section>
                    <Heading>Claude&rsquo;s Library Importer</Heading>
                    <Synopsis print>
                        <For>Claude&rsquo;s Library Importer</For>
                        <Paragraph>
                            <Book>Claude&rsquo;s Library Importer</Book> is how a conversation gets out of an export and
                            into this library, and it is the first book here whose chapters are about the code standing
                            beside them. A tool is not a project, so it is filed on its own shelf rather than among
                            them &mdash; but it belongs to this subject, because everything it imports is a
                            conversation I had with Claude.
                        </Paragraph>
                    </Synopsis>
                </Section>
            </Document>
        );
    }
}
