import { Bold, Document, Heading, Italics, Paragraph, Section, Title } from '@dna-platform/public';
import { $Article, Comments, Resource } from './.book';

export default class $TheMovements extends $Article {
    print() {
        return (
            <Document>
                <Title>The Movements</Title>
                <Section>
                    <Heading>Where a conversation divides</Heading>
                    <Paragraph>
                        A long conversation is not one page and it is not one page per message. It moves — a run of
                        exchanges about one thing, then a turn, then another run. Those are the chapters. The first
                        conversation has eight of them, from a word I made up for fun to the whole numbers.
                    </Paragraph>
                    <Paragraph>
                        Nothing finds them. There is no rule in here that reads a conversation and says where it
                        turned; I read the openings and decided. That is the one judgement in this whole tool, and it
                        is written down where it can be argued with rather than buried in a threshold.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>A cut is a sentence, not a number</Heading>
                    <Paragraph>
                        Each movement is written as the <Bold>opening words</Bold> of the message that starts it. An
                        index would be wrong the moment the thread is read again — a branch changes and everything
                        after it slides by one — and a sentence does not move. If a cut stops matching, the importer
                        stops and says which one, instead of quietly putting a chapter break somewhere nobody chose.
                    </Paragraph>
                </Section>
                <Comments by="Libby">
                    <Paragraph>
                        Eight movements, <Italics>12 · 12 · 6 · 6 · 18 · 8 · 16 · 6</Italics>, which is 84 — the whole
                        thread and nothing dropped. A cut that loses a message is a cut that has gone wrong, so the
                        arithmetic is worth printing every time.
                    </Paragraph>
                </Comments>
                <Resource>.ts</Resource>
            </Document>
        );
    }
}
