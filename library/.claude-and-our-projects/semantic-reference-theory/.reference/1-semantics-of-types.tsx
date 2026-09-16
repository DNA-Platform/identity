import { $ } from '@dna-platform/chemistry';
import { Document, For, Heading, Paragraph, Section, Synopsis, Title, book as bookMention } from '@dna-platform/public';
import { $Article } from '../../../..reference/.book';

const Book = $(bookMention);

export default class $TheConversations extends $Article {
    print() {
        return (
            <Document>
                <Title>The conversations</Title>
                <Section>
                    <Heading>Semantics of Types &amp; More</Heading>
                    <Synopsis print>
                        <For>Semantics of Types &amp; More</For>
                        <Paragraph>
                            <Book>Semantics of Types &amp; More</Book> is two days in September spent on what a type is
                            and what a name resolves to. It began as a conversation and became a book without anyone
                            deciding it should, which is the reason the rest of them are being ported in too.
                        </Paragraph>
                    </Synopsis>
                </Section>
            </Document>
        );
    }
}
