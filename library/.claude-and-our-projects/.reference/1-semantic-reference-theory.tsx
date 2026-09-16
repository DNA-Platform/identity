import { $ } from '@dna-platform/chemistry';
import { Document, For, Heading, Paragraph, Section, Synopsis, Title, book as bookMention } from '@dna-platform/public';
import { $Article } from '../../..reference/.book';

const Book = $(bookMention);

export default class $TheProjects extends $Article {
    print() {
        return (
            <Document>
                <Title>The projects</Title>
                <Section>
                    <Heading>Semantic Reference Theory</Heading>
                    <Synopsis print>
                        <For>Semantic Reference Theory</For>
                        <Paragraph>
                            <Book>Semantic Reference Theory</Book> is the formalism this library is built on: a
                            first-order logic on the domain of referents that takes library semantics as its canonical
                            semantic form. It is also the project the library&rsquo;s own semantics were worked out in,
                            conversation by conversation, which is why it catalogues those conversations.
                        </Paragraph>
                    </Synopsis>
                </Section>
            </Document>
        );
    }
}
