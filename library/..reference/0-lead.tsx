import { Bold, Fold, Heading, Paragraph, Section, Document, Title, book as bookMention , Ref } from '@dna-platform/public';
import { $ } from '@dna-platform/chemistry';
import { $Article, Infobox, Line, Tiles } from './.book';

const Book = $(bookMention);

export default class $TheLibrary extends $Article {
    print() {
        return (
            <Document>
                <Title print={false}>Lead</Title>
                <Infobox>
                    <Heading>Dougs Library</Heading>
                    <Paragraph>A personal library</Paragraph>
                    <Tiles seed={7} tone="mine" width="250" height="250">[[[ Everything I Keep ]]]</Tiles>
                    <Line label="Kept by">Doug, in Tbilisi</Line>
                    <Line label="Subject">Doug</Line>
                    <Line label="Books">Five, and one of them is this one</Line>
                    <Line label="Begun">15 September 2026</Line>
                </Infobox>
                <Paragraph>
                    <Bold>Dougs Library</Bold> is the catalogue of everything I keep, and the one book in this library filed
                    under its own subject. Every other book here is about something that is somewhere else; this one
                    is about the person keeping it, which is the whole reason the library has a top rather than going
                    on forever. A library is not a pile of books. It is a set of books that have agreed on who is
                    talking about whom.
                </Paragraph>
                <Paragraph>
                    <Book>My Library Log</Book> is where I write down what building this was like.{' '}
                    <Book>Claude &amp; Our Projects</Book> is the biography of the team I built it with, and it
                    catalogues the work we have done together — which so far
                    means <Book>Semantic Reference Theory</Book> and the conversations underneath it.
                </Paragraph>
                <Section>
                    <Heading>How it is put together</Heading>
                    <Paragraph>
                        Every book has a cover, and a cover carries a title, an author and a subject. A subject exists
                        as a catalogue of the same name, and there is only ever one catalogue per subject. Every book is
                        catalogued by another book or by itself, and exactly one book catalogues itself. That last rule
                        is what makes this page the summit, and $[ ./The books ] is where I list what stands under it.
                    </Paragraph>
                    <Paragraph>
                        Authorship closes the same way, and it closes by self-reference rather than by kind. Exactly one
                        book here is its own author, and it is $[ My Library Log ]. Everything else is authored by that
                        book or by something it has vouched for, because a book may write only where the catalogue it
                        stands in is itself an author and names it as one. So authorship begins once, in a single book
                        saying that it wrote itself, and everything after that is delegation. I am the author of
                        everything here, which is what a personal library means.
                    </Paragraph>
                </Section>
            </Document>
        );
    }
}
