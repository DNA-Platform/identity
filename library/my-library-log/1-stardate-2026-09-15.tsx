import { $ } from '@dna-platform/chemistry';
import { $Article } from '../..reference/.book';
import { Bookmark, Document, Italics, Paragraph, Ref, Section, Heading, Title, book as bookMention } from '@dna-platform/public';

const BookMention = $(bookMention);

export default class $Stardate extends $Article {
    print() {
        return (
            <Document>
                <Title>Librarian's Log: Stardate 2026-09-15</Title>
                <Section>
                    <Heading>Current location: Tbilisi</Heading>
                    <Paragraph>
                        I seem to have become obsessed with libraries. Capturing the library metaphor was the initial
                        inspiration for <BookMention><Bookmark>srt</Bookmark>Semantic Reference Theory</BookMention>.
                        The library metaphor brought the theory into existence. Yet formalisms are incredibly hard to create.
                    </Paragraph>
                    <Paragraph>
                        So while working on <BookMention>Semantic Reference Theory</BookMention>, which is the subject of the
                        library in the <Ref>[Inexplicable Phenomena repository](https://github.com/DNA-Platform/inexplicable-phenomena)</Ref>,
                        I have represented my Claude team as a library, I have dedicated my programming efforts to formalizing
                        a library, and finally I have made it to the point where I am ready to be a librarian myself — and to
                        chronicle my library-making journey in my own library, as I bootstrap the Inexplicable Phenomena library
                        to host <Ref>[the theory this entry began with](srt)</Ref>: the first-order logic on the domain of
                        referents that takes <Italics>library semantics</Italics> as its canonical semantic form.
                    </Paragraph>
                    <Paragraph>
                        For the time being, I will be working on porting all of my Claude conversations and projects into my
                        library. We librarians take reference very seriously, and my conversations with AI provide the substrate
                        for so much of my progress in this domain. May actual human beings join me on this voyage in the
                        not-so-distant future.
                    </Paragraph>
                    <Paragraph>Sincerely, Me</Paragraph>
                </Section>
            </Document>
        );
    }
}
