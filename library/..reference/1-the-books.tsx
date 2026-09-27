import { $ } from '@dna-platform/chemistry';
import { Document, For, Heading, Paragraph, Section, Synopsis, Title, book as bookMention , Ref } from '@dna-platform/public';
import { $Article } from './.book';

const Book = $(bookMention);

export default class $TheBooks extends $Article {
    print() {
        return (
            <Document>
                <Title>The books</Title>
                <Section>
                    <Heading>Dougs Library</Heading>
                    <Synopsis print>
                        <For>Dougs Library</For>
                        <Paragraph>
                            <Book>Dougs Library</Book> is the one you are reading: the catalogue of everything I keep, and the
                            only book here filed under its own subject, which is what makes it the summit rather than
                            one more shelf.
                        </Paragraph>
                    </Synopsis>
                </Section>
                <Section>
                    <Heading>My Library Log</Heading>
                    <Synopsis print>
                        <For>My Library Log</For>
                        <Paragraph>
                            <Book>My Library Log</Book> is what building this library was like, kept the way a captain
                            keeps a log. Written by its subject, which is the only thing that distinguishes it from a
                            biography, and the book that makes me the author of everything else here.
                        </Paragraph>
                    </Synopsis>
                </Section>
                <Section>
                    <Heading>Claude &amp; Our Projects</Heading>
                    <Synopsis print>
                        <For>Claude &amp; Our Projects</For>
                        <Paragraph>
                            <Book>Claude &amp; Our Projects</Book> is who Claude is, told through the projects we have
                            worked on together, so an author tag anywhere in this library has someone to point at. It
                            catalogues those projects in turn, which is how <Book>Semantic Reference Theory</Book> and
                            the conversations underneath it are reached from here. The theory itself is
                            $[ the theory ]( Semantic Reference Theory ), and everything under it was talked into
                            existence rather than written down first.
                        </Paragraph>
                    </Synopsis>
                </Section>
            </Document>
        );
    }
}
