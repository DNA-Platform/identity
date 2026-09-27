import { Bold, Document, Heading, Italics, Paragraph, Resource, Section, Title } from '@dna-platform/public';
import { $Article, Comments } from './.book';

export default class $TheLedger extends $Article {
    print() {
        return (
            <Document>
                <Title>The Ledger</Title>
                <Section>
                    <Heading>What it specifies</Heading>
                    <Paragraph>
                        Two readings of one book. A cover of nine evenly spaced squares, three by three, showing the
                        most recent nine entries of the log with the newest at the top left and reading across; and an
                        index listing every dated chapter, newest first, with the day it was kept.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>What a book gets</Heading>
                    <Paragraph>
                        A cover that is the log drawn rather than a picture of one. Each square is one entry, drawn as
                        a small figure taken from the prime factorisation of that entry&rsquo;s number &mdash; the
                        number it has always had and will always have, so an entry&rsquo;s figure is its own for good.
                        The count of distinct primes chooses its posture, the largest prime chooses how much of it is
                        light, and its seat among entries sharing both picks the figure. A perfect square is balanced,
                        a prime stands upright, a repeated factor lies flat, and a number built of two different primes
                        leans right when it is even and left when it is odd.
                    </Paragraph>
                    <Paragraph>
                        <Bold>Pressing a square opens that entry.</Bold> Every square is a link to its own chapter, so
                        the cover is a way into the book rather than an image of it. It is the one plate in this
                        library that holds no state at all: a log is a record, and the way a reader interacts with a
                        record is by going and reading it.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>The order comes from the dates</Heading>
                    <Paragraph>
                        Each entry carries a date in its writing, parenthetical, so the day is a fact about the chapter
                        rather than something parsed out of a heading. The reading puts the entries oldest to newest to
                        number them, then shows the last nine newest first. That is what a date is <Italics>for</Italics>{' '}
                        in a library, and it is why a date is a kind rather than some text that looks like one.
                    </Paragraph>
                    <Paragraph>
                        It persists through the book and not through a browser. Nothing is written to storage and
                        nothing needs to be: write another entry and there is another figure on the cover, for
                        everybody, permanently. The summit&rsquo;s plate keeps what a <Italics>reader</Italics> makes;
                        this one keeps what its author wrote.
                    </Paragraph>
                    <Paragraph>
                        The palette says the same thing. The figure is the lighter tone and the ground behind it the
                        darker, and the light steps along a warm ramp by recency &mdash; the newest entry in straw,
                        older ones walking toward rose &mdash; because a log is the one book here whose parts are
                        ordered. Nothing is dark; the deepest tone on the plate is a tint.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>How it is used</Heading>
                    <Paragraph>
                        A log writes the cover on its cover and the index in place of a lead. Both call one reading of
                        the book, so a chapter added to the log appears in both without either being informed.
                    </Paragraph>
                    <Paragraph>
                        <Bold>The index is the whole of what a log&rsquo;s lead is for.</Bold> The chapter carries the
                        infobox, because the infobox has to stand somewhere, and the index beneath it. It carried two
                        paragraphs of prose before that — a position on what a log is, written into a book where every
                        word is its subject&rsquo;s. A log does not need introducing. It needs a way in.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>Cautions</Heading>
                    <Paragraph>
                        <Bold>A chapter&rsquo;s content is what it prints, not what stands between its tags.</Bold> The
                        first version read a chapter&rsquo;s date by searching the writing&rsquo;s block, which holds
                        only what an author typed; a chapter&rsquo;s document is built in print. The search ran against
                        an empty room.
                    </Paragraph>
                    <Paragraph>
                        Observed: book found, five chapters found, none dated. The cover drew nine empty seats carrying
                        no links, and had been doing so since it was written. Anything walking chapters requires the
                        printed form first.
                    </Paragraph>
                </Section>
                <Comments by="Gabby">
                    <Paragraph>
                        Nine squares, one per entry, and pressing one arrives at that entry. I wanted a cover that was
                        the log rather than a picture of a log, which meant reading the book it sits on &mdash; and
                        reading a book turned out to be the part that was wrong for weeks without showing.
                    </Paragraph>
                </Comments>
                <Resource>.tsx</Resource>
            </Document>
        );
    }
}
