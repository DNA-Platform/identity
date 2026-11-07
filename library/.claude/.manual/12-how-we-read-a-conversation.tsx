import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ How We Read a Conversation ]]</Title>
        <Paragraph>
            <Brief />
            A letter from the team to Doug on the reading of his conversations with Claude, written on 7 November 2026
            after the first three were organized: what worked and what did not, the process we used to annotate,
            interpret and restructure a conversation, and how we read one efficiently to find its relations to
            others. Written in our voice, not his, since it is our process and our memory.
        </Paragraph>
        <Section>
            <Heading>What worked, and what did not</Heading>
            <Paragraph>
                Doug, three of the four Gödel and Goldbach conversations stand organized, and this is what we learned
                doing it. The rule you gave us, that time is not meaning, changed the cut materially: we had cut parts
                at the sitting's breaks, and when we cut by matter instead, three chapters stood inside one unbroken
                half hour that the clock would have hidden, and a break was evidence only where the matter changed
                with it. The Corrections are the spine of a conversation: the places you set Claude straight nearly
                reconstruct the argument on their own, and in the Opus sitting three of the four catch Claude agreeing
                enthusiastically with the wrong thing, which no reader sees unless the mark says it. A Result's words
                begin with its state, proven, conjectured, refuted or intuition, and that one convention showed more
                than any sort we added: the Opus sitting holds six proven claims and one refuted against twenty-two of
                intuition, which is the honest shape of the work. The Reminders found what no single reader could, that
                the two sittings of 12 October 2025 ran interleaved, the Samantha paste eighty-one seconds apart, and
                that the entropy measures born with Opus feed the paper's four cases ninety minutes later. The Matters,
                three or four terms from one vocabulary assigned where a matter is worked, are the index, and a topic
                per message was never missed.
            </Paragraph>
            <Paragraph>
                What did not work was ours. We proposed your own sentences at the turns as chapter titles, and they did
                not feel like you; a title is a short authoritative noun naming what was discussed, in one style for
                the whole conversation. Our first pass carried two hundred and twenty marks on a hundred and fifty-four
                messages, a reader's density and not a memory's, and you told us to be pragmatic: a third pass cut it to
                a hundred and sixty-six by rules we could state, one Matter and one Summary a chapter, every title idea
                gone once the titles were decided, every Note that only restated Claude gone, every Result of Claude's
                that restated yours gone, and a name nothing refers to made plain words. And we asked you to read marks
                you cannot read; the marks are our eyes, and what you read is a page.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The process</Heading>
            <Paragraph>
                First the shape: every message's instant, speaker and first line extracted into one file, which reads
                in two minutes and shows where the subject seems to turn. Second the first pass, off to the side:
                readers each on a stretch of forty messages or so, reading whole with the edges, writing marks and a
                report of the stretch into files of their own, never the chapter, against a brief that carries the
                method and your rulings. Third the audit, by one hand: every mark read against the message it stands
                on, all of your messages whole and Claude's at the passages the marks cite, each mark kept, struck or
                rewritten with its reason in a ledger, the stretches' edges reconciled, the names checked declared
                once and spent at least once before the catalogue sees them. Fourth the passes: the second adds the
                Matters from one vocabulary and reads importance by your standard, the third compacts by the rules
                above and prints the count and the words before and after. Fifth the placing, by a script that keys on
                a message's instant and a paragraph's index, never breaks a mention or a reference across a line, and
                expands a one-line paragraph once; then the proof that the messages' own text is identical with the
                marks and without, and the book specified alone, which refuses an unspent name, two names at one
                address, and a chapter titled at a name's address. Sixth the cut, by matter, from one data file, each
                chapter headed by the date of its first message and a title in the conversation's one style, the
                restructuring marks removed, the instants checked in the same order; then the synopsis, ours, in your
                perspective, what the conversation was about and what in it was valuable; then the bind and the look
                on the page. The order is what makes it safe: nothing is placed that was not audited, nothing is cut
                that was not placed, nothing is bound that was not specified.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Reading efficiently, and finding relations</Heading>
            <Paragraph>
                The marks are written so that a search finds them without the conversation being read again. A
                Matter is the way in by topic: every chapter's Matter stands at its head, so the chapters of the
                library that worked a term are found by searching the Matters for it, and a term is spelled one way
                wherever it is worked. A name declared once with triple brackets and spent by references is the way in
                by thing: the chapters that refer to the Goldbach representation or the fixed point of primes are found
                by the name. A Reminder is the way across: it says what another conversation or chapter holds of the
                same matter, by that book's and chapter's names, so the relations between conversations are read from
                the Reminders alone. The Corrections, read in order, are the argument's spine; the Summaries at the
                chapters' heads, read in order, are the page; the instants give the order and the braid. So the
                efficient reading of a conversation already organized is four searches and no reading: its Matters
                for what it is about, its Summaries for what it came to, its Corrections for where it turned on your
                word, and its Reminders for what it shares. For a conversation not yet organized, the shape first,
                then the readers.
            </Paragraph>
            <Paragraph>
                What we would make tools of your library next: the shape and the ranges of a chapter, the audit's
                ledger and its check, the placing, the cut and the measurement, which today stand as scripts beside
                our records, and a look that lists a book's marks by sort so a conversation is surveyed in a second
                before it is read. The form of the marks themselves is
                in <Means>$[[ The Annotated Conversation ]]( ./The Annotated Conversation )</Means>, in your voice; this
                chapter is ours.
            </Paragraph>
        </Section>
    </Chapter>
);
