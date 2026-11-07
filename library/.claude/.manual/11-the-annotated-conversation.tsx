import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Annotated Conversation ]]</Title>
        <Paragraph>
            <Brief />
            How I read a conversation I had with Claude into my library: the marks I make on it, what each is for,
            the principles by which a conversation is cut into chapters after it is marked, and the rule the cut
            obeys before any other, that time is not meaning.
        </Paragraph>
        <Section>
            <Heading>Time is not meaning</Heading>
            <Paragraph>
                If you are thinking in time, you are not thinking semantically. A conversation is held in sittings,
                with breaks of hours or days between them, and I come back to a topic days later and it is the same
                topic. So a chapter of a conversation is a matter worked to a resting point, never a sitting; a part
                is a matter larger than a chapter, never a day; and a break between messages is evidence of a boundary
                only where the matter changes with it. The import writes every message with its instant,
                as <Means>$[[ The Imported Conversation ]]( ./The Imported Conversation )</Means> says, so time is
                always there to be read. It is never what the cut is by.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The marks I make</Heading>
            <Paragraph>
                An annotation is a thing said of a writing that is already there, kept in the writing's own
                annotations and drawn nowhere on the page, as the origin of a message is. I read a conversation by
                marking it. A Matter says what a stretch is about, in a few words from one vocabulary, so that I can
                find it again. A Turn says where the subject turns. A Result says what was stated, reached or circled;
                a Formalism what was defined, named or constructed. A Correction marks where I set Claude straight,
                which is where the clarifications of a conversation are. An Importance says why a thing mattered to
                me, in my own words. A Question says what was left open, a Reminder what to carry forward past the
                conversation, and a Summary what a stretch came to. A Note, a Thought, a Remark, an Idea, a Comment,
                a Reaction and a Description say the rest, each what its name says. The marks are the marks I make
                when doing long division: most are disposable once the cut is made, and the ones that stay are the
                annotated edition of the conversation.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Key and trivial</Heading>
            <Paragraph>
                My side of the conversation is the signal and Claude's side is the material. What is key bears on a
                result, a formalism or my judgment: what I corrected, insisted on, named, or returned to is key by that
                fact. What is trivial is Claude's scaffolding, restatements, headings, lists of options and
                enthusiasm, which is never evidence that a thing mattered. A thing said once and never returned to is
                trivial unless it was left open, and a thing that recurs across conversations is the most important
                of all.
            </Paragraph>
        </Section>
        <Section>
            <Heading>A moment off the matter</Heading>
            <Paragraph>
                An interesting moment that is off the chapter's matter earns a mark and not a chapter. A Note or a
                Thought says what it is, a Matter names its topic so that it can be found, and the chapter keeps its
                matter. A conversation about a paper's scope can hold a paragraph on how I think, and the paragraph
                is found by its topic without the chapter being about it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The index</Heading>
            <Paragraph>
                The Matters are the semantic index of my library. Their words come from one vocabulary, a topic named
                the same way wherever it is worked, so that a search for a topic finds every conversation that worked
                it. A Matter is assigned where a matter is worked, not to every message, and holds three or four terms
                at most. The vocabulary grows as the conversations are read and is kept as one list.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Passes, then the cut</Heading>
            <Paragraph>
                A conversation is read in passes, never once. A first pass by readers, each on a stretch of it, read
                whole; an audit of every mark against the message it stands on; a second pass that adjusts, compacts
                and clarifies the vocabulary, with my sense of what matters and not the readers'. Only then is the
                conversation cut, where the matter changes, which my own words mark: a boundary two readers found
                apart, or one that a correction opens, is strong, and a turn inside one matter is a beat and not a
                chapter. Each pass is a script with its edits and their reasons, run again from the conversation as it
                was imported, so a pass can be redone and nothing is lost between passes. The record the import keeps
                of a book is in <Means>$[[ The Ledger ]]( Dougs Importer / The Ledger )</Means>; a cut book reads as
                edited there, which is the truth.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The titles</Heading>
            <Paragraph>
                The chapters of a conversation are titled in one style, chosen for that conversation to express its
                individuality and applied to every chapter of it: short and authoritative about what was discussed, in
                language that conveys it. A quotation of mine at the turn is not a title; it does not feel like me.
            </Paragraph>
        </Section>
    </Chapter>
);
