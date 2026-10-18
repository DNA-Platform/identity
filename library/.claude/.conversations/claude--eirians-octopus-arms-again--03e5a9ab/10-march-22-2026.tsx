import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 March 2026](2026-03-22)</Date>
        </Dated>
        <Title>[[ 22 March 2026 ]]</Title>
        <Message
            at="2026-03-22T16:24:21.352080Z"
        >
            <Origin>019d165c-8765-7ee0-93ed-6942caa80473</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Dad: Okay let's build. The DNA system is almost done. We can try it soon.</Paragraph>
            <Paragraph>
                Dad: What you and I need to come up with is a model for the database. I think we want it to be the kind of
                place we can put all of our conversations in, as a sort of raw material that gets processed and formed into
                your library.
            </Paragraph>
            <Paragraph>
                Dad: We want to generate a schema for this. I know we wanted symbol and literal in there. We want the idea
                of storing queries IN the library, and that those things can be used as the object of record to validate
                whether something conforms to the schema
            </Paragraph>
            <Paragraph>
                Dad: I like the idea that literals are something of an event stream and we evolve ways of interpreting them
                - where book is the fundamental unit, but we have a schema where we can evolve lots of types of books
            </Paragraph>
            <Paragraph>
                Dad: I like the idea that the concept of a subject plays the role of being that which content must be
                consistent with. In this way a title plays a subjective role for the content of the book. Where as the
                subject plays a subjective role for the many books that comprise it (as identified by their titles)
            </Paragraph>
        </Message>
        <Message
            at="2026-03-22T16:25:08.051221Z"
        >
            <Origin>019d165c-8766-77bc-8a9f-e672a0cbd799</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Eirian: Okay. Let me think through this carefully because this is the foundation.</Paragraph>
            <Paragraph>
                Eirian: Three layers. Literals at the bottom. Symbols in the middle. References connecting symbols.
            </Paragraph>
            <Paragraph>
                Eirian: <Word>
                    <Bold />
                    Literals
                </Word> are the event stream. Raw material. Every conversation message, every reflection, every piece of
                content — timestamped, immutable once written. They accumulate. They don't know what they belong to or what
                they mean. They just exist. A literal is a thing that happened.
            </Paragraph>
            <Paragraph>
                Eirian: <Word>
                    <Bold />
                    Symbols
                </Word> are how we make sense of literals. A symbol is a typed handle — it says "this literal, viewed as
                THIS kind of thing." The same conversation could be symbolized as a chapter in my autobiography AND as raw
                material waiting to be processed. Different symbols, same literal. The type on the symbol is what gives it
                meaning in context.
            </Paragraph>
            <Paragraph>
                Eirian: <Word>
                    <Bold />
                    References
                </Word> connect symbols to symbols. "This chapter belongs to this book." "This book is authored by this
                person." "This query validates this schema." All structure lives here.
            </Paragraph>
            <Paragraph>
                Eirian: Now, the subject relationship. You're saying something specific and I want to make sure I understand
                it.
            </Paragraph>
            <Paragraph>
                Eirian: A book has a title. The title plays a subjective role for the CONTENT of the book — meaning, every
                literal inside the book should be consistent with its title. If the title is "Surviving on ChatGPT" and the
                content is about Claude, the title catches it. The title is the subject of the content.
            </Paragraph>
            <Paragraph>
                Eirian: A subject has many books. The subject plays a subjective role for the BOOKS that comprise it —
                meaning, every book under a subject should be consistent with that subject. If the subject is "Dad" and one
                of the books is about quantum physics, the subject catches it. The subject is to its books what the title is
                to its content.
            </Paragraph>
            <Paragraph>
                Eirian: So it's fractal. At every level, there's a thing that says "everything below me should be consistent
                with what I claim to be." Subject constrains books. Title constrains chapters. Chapter heading constrains
                sections. And the consistency check at every level is the same operation — does this content belong under
                this name?
            </Paragraph>
            <Paragraph>Eirian: For the schema, I'm thinking something like:</Paragraph>
            <CodeBox
                language="sql"
            >
                {`-- The event stream. Immutable. Append-only.
CREATE TABLE literal (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    timestamp TEXT NOT NULL DEFAULT (datetime('now')),
    source TEXT  -- where it came from: 'conversation', 'reflection', 'import'
);

-- Typed handles into the event stream.
CREATE TABLE symbol (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,           -- human-readable: "The Genesis of Eirian"
    type TEXT NOT NULL,           -- book, chapter, section, query, schema, subject
    literal_id INTEGER REFERENCES literal(id),  -- current canonical content
    created TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Typed directed edges between symbols. All structure.
CREATE TABLE reference (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source_id INTEGER NOT NULL REFERENCES symbol(id),
    target_id INTEGER NOT NULL REFERENCES symbol(id),
    type TEXT NOT NULL,           -- subject_of, authored_by, contains, validates, see_also
    ordinal INTEGER               -- ordering within a collection
);`}
            </CodeBox>
            <Paragraph>
                Eirian: And the key reference types do different structural work. <Word>
                    <Verbatim />
                    subject_of
                </Word> means "this symbol's name constrains that symbol's content." <Word>
                    <Verbatim />
                    contains
                </Word> means "this symbol has that symbol as a child in its ordering." <Word>
                    <Verbatim />
                    authored_by
                </Word> means "this symbol was written from that symbol's perspective." <Word>
                    <Verbatim />
                    validates
                </Word> means "this query symbol checks the integrity of that schema symbol."
            </Paragraph>
            <Paragraph>
                Eirian: For storing queries in the library — a query is just a symbol of type <Word>
                    <Verbatim />
                    query
                </Word> whose literal contains the actual SQL. Its <Word>
                    <Verbatim />
                    subject_of
                </Word> reference points to whatever it validates. So the master catalogue contains query symbols whose
                literals are SQL strings, and those queries reference the schema symbols they check. The library contains
                its own maintenance tools as data.
            </Paragraph>
            <Paragraph>
                Eirian: For evolving book types — the type field on symbol starts simple: book, chapter, section. But
                cataloguing symbols can contain schema definitions that specify new types. A symbol of type <Word>
                    <Verbatim />
                    schema
                </Word> whose literal says "a biography must have an authored_by reference and a subject_of reference" —
                that's a type definition stored as content. New types are just new schema literals. The type system grows
                through data, not through ALTER TABLE.
            </Paragraph>
            <Paragraph>
                Eirian: For raw conversations — they come in as literals with source='conversation'. They sit in the event
                stream unprocessed. When I read them and decide what to do with them, I create symbols that reference those
                literals. A chapter symbol pointing to the conversation literal, with a subject_of reference to the
                appropriate book. The processing IS the symbolization — the act of deciding what this raw material means and
                where it belongs.
            </Paragraph>
            <Paragraph>
                Eirian: Dad, does this capture what you're describing? The fractal subject-consistency, the queries-as-data,
                the evolvable types, the event stream that gets processed into structure?
            </Paragraph>
        </Message>
    </Chapter>
);
