import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Imported Conversation ]]</Title>
        <Paragraph>
            <Brief />
            The form an import writes a conversation in, file by file, which every importer writes and the
            reference manuals' types read; held stable, so the manuals change how a conversation looks and
            behaves without a conversation being imported again.
        </Paragraph>
        <Section>
            <Heading>Why the form is written down</Heading>
            <Paragraph>
                A conversation with Claude is imported from the application's export into my library as a book,
                and from then on it is a book: I edit it, cut it into chapters by what they are about, annotate
                it, and bind it with everything else. The importer that writes it and the types that draw it are
                built by different hands, and the export of my second account, the older one, is read by a
                different parser again. So the form they meet at is said once, here, and it is the one thing
                about an imported conversation that does not move: a change to the look or the behaviour of a
                conversation is a change to the reference manuals and reaches every conversation at the next
                bind, and a change to this form is a change to the import, made with care and run again. The
                three figures at the end of this chapter are excerpts of imported chapters as they stand, cut
                after their first messages, not written for the purpose.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The book</Heading>
            <Paragraph>
                A conversation is a book in a folder of its own under the conversations book, named claude, two
                dashes, the slug of the conversation's title cut at sixty characters, two dashes and the first
                eight characters of the application's id. Its book file extends the Claude conversation
                of <Means>$[[ The Project ]]( ./The Project )</Means> and declares nothing else. Its cover is the
                bookshelf cover of my manual with two volumes, the conversations book's cover and my story's,
                a scheme of six colours, a window, the participants, each a reference to a person's book, the
                period from the first instant to the last, the messages shown and the messages in all, the title
                in the reference form with its key in the paren, the author as my librarian, the subject as the conversations book, the
                project as Claude's own annotation, the account right after it as its twin, leading to the
                account's mention in Dougs Claude, the origin after the account, the application's own id of
                the conversation, drawn nowhere, and an illustration inserted from the file beside the cover.
                Its synopsis is the application's own summary as one paragraph, kept for the catalogue and never
                shown on the page. Its table lists the days under headings by month, each a reference to the
                day's chapter, then every artifact version in an appendix section headed Artifacts, each entry
                parenthetical, and last the parenthetical row naming the book, the synopsis and the table.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The title</Heading>
            <Paragraph>
                A book is keyed apart from its title, on my ruling that the library must have no chance
                collisions with a conversation's name: the key is claude, two dashes, the title, two dashes and
                the first eight characters of the application's id, and the title is what the page shows, so the
                cover's title form carries the title as its words and the key in its paren, every reference to
                the book carries the key in its paren and the title as its words, the entry chapter in the
                conversations book and in a project book is titled the same way, the book's address is the slug
                of the key, and the ledger names the book by its key. Two conversations whose ids share those
                eight characters stop the run, which has not happened, so nothing is numbered, and two books may
                show one title and differ by key alone. A book's title is the conversation's name made sensible,
                and a name the application gave can hold anything, so the import writes it to the catalogue's
                grammar before it writes anything else, through the binder's own sanitizing, one function in its
                language, promised there and written nowhere twice, on my ruling that text is normalized for ids
                exactly the same everywhere. The grammar reads a title through the notation, so what holds for
                the words of a reference holds for a title, and the sanitizing makes a title hold: it is put in
                its normal form, what cannot be seen is removed, every run of space is one space, and a pictograph
                the application put first is dropped; a slash is the separator between a book and its chapter,
                and the grammar's escape for it, a dot before the slash, does not carry through a title today, so
                a slash becomes the sign that looks like one, the division slash, "TON∕Cocoon", and a backslash
                its lookalike, on my ruling, since neither reaches a file name, the folder being the slug; a
                parenthesis closes the name slot a reference may carry and a bracket of either kind opens or
                ends a form, so a parenthesis becomes ❨ or ❩ and a square bracket ⁅ or ⁆, the lookalikes that
                read closest in the three faces; a brace stays and is written as its entity, as an ampersand, a
                less-than and a greater-than are, by the binder's own writer; a newline ends a form and is never
                written. The words shown before a key's paren are never dot-escaped, since the language reads
                only the paren as the name; the key is, a dot in it written doubled, and neither begins with a
                dot and a slash, which means within here. The title's slug is the book's address, and the slug
                keeps every alphabet, puts the text in its normal form, drops what cannot be seen and keeps a
                combining mark, reads an ampersand, a plus, an at-sign, a percent sign, an equals and a
                not-equals as words and a sharp after a letter as the word sharp, treats every apostrophe alike,
                and makes a dash of any other sign, so a title must slug to something, and two keys that slug
                alike are one address, which the catalogue refuses. A title, a mention and a heading wear as
                their id the fragment of their address, which the catalogue makes from the key, so an entry
                titled with a key wears the key's slug, and a cover's or a synopsis's title wears the slug of
                its words. The same spelling of the title and the key is written wherever either stands: the
                cover's title form, the entry's title and its reference, and every table that lists it.
            </Paragraph>
            <Paragraph>
                A conversation the application gave no name takes its title from its first message, the
                first sentence of it cut to a handful of words and made sensible as any title is, which is
                how the application names a chat itself; a first message with no words in it, a picture
                alone, leaves the conversation titled by the day it began, Untitled followed by the date; and
                the id in the key tells either apart from its like. The ledger keeps the application's own name, empty or
                not, beside the key the import gave, so a given name and a made one are told apart.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The notation in the text</Heading>
            <Paragraph>
                The catalogue reads a chapter's file for the library's notation, and it reads exactly two kinds
                of run: the text between tags, and a string, which is a quoted literal or a template with
                nothing substituted; a comment, a tag's name and an import's path are never read. A
                conversation's words may carry the notation's own brackets, two in a row around a term as a
                logic does, and read raw they form a title, a mention or a reference, refused when the form is
                malformed and resolved silently when it is not. So in prose, headings, items, words and
                captions a bracket of either kind is written as its numeric entity, which the page shows as the
                bracket and the scanner never matches, since only a matched form is read for entities, and the
                writing of it is the binder's own, the inverse of its reader, which the reference transform uses
                to write a form's words back into prose and the importer uses as it is, never an escape of its
                own; and a
                listing in a code box, which cannot carry an entity, is written as a template with a
                substitution in it whenever it holds a bracket, since a template with a substitution is not
                read, and its text on the page is the listing exactly.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The day</Heading>
            <Paragraph>
                Each day of the conversation is a chapter, numbered in order and named by the day, with the date
                said by Dated as a date and the day as the title. The chapter holds one Message per message,
                said at its instant, which is the message's whole address, opening with its Origin, the
                application's own id of the message, drawn nowhere, and then its Speaker as a reference to the
                person's book, mine or Claude's. What was said is the library's own writing,
                paragraphs, headings, lists and lines nested as written, tables, bold, emphasis, verbatim and
                quoted words, inline math and displayed equations, a link as a word carrying a reference; a
                heading is written without the bold marks the application put around its words, since a heading
                is set bold already and the library reads a heading apart at its colon, which left a bare colon
                standing as a heading with no words and no id, while emphasis and code inside a heading are kept.
                A block
                of code is <Means>$[[ a code box ]]( Dougs Reference Manual / The Code Box )</Means> with its
                listing as a template literal of its lines, named for its language, srt where the notation's
                operators stand and nothing where the application named none. A tool Claude used
                is <Means>$[[ an action ]]( ./The Action and the Result )</Means>, its result left out. A file
                Claude made is <Means>$[[ an artifact ]]( ./The Artifact and the Attachment )</Means>, its
                sentence as the caption, its file beside the chapter, the export's id of the artifact and the
                place of the version chapter it opens, the uncut slug of the version's title; a file given to him is an attachment with its file
                beside the chapter, or the sentence alone when the export carries no content. A file beside a
                chapter is named for the chapter and the file, chapter, tilde, name and type, the type the
                application gave the file and never one chosen for it, with one exception: a document the export
                holds only as the text extracted from it, a pdf or a spreadsheet, is written as a text file, since
                a document's type on a file of text would misstate it. A file stands beside a chapter only because
                the chapter inserts it. The message says of itself that its headings are opaque,
                by <Means>$[[ The Address ]]( Dougs Reference Manual / The Address )</Means>, so a heading inside
                an answer is not a place.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The version</Heading>
            <Paragraph>
                Every version of every artifact is a chapter of the book's appendix, numbered with the appendix
                mark and named for the artifact and its version, marked Version and titled with the artifact's
                name and its version number. A document's version is one section said to be opaque, headed
                with the name and the number so thirteen versions wear thirteen ids, holding the document as
                writing; a program's version is a code box. The side hides these chapters and the card opens
                them in <Means>$[[ the pane ]]( ./The Pane )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The entry and the ledger</Heading>
            <Paragraph>
                Beside the folder, in <Means>$[[ Our Conversations ]]</Means>, the import writes one entry chapter
                per conversation, numbered in the order imported and named by the slug of the key: its part the
                month, its date the conversation's last day, the conversation's cover as a volume, the title
                with the key in its paren, a caption counting the exchanges and leading to the book, and the
                synopsis inserted from the book's own. The conversations book's table lists every entry under
                its month with an arrow leading into the book. The import's memory stands nowhere beside the
                entry: it is the origins on the writing, <Means>$[[ The Origin ]]( ./The Origin )</Means>, the
                conversation's on its cover and each message's on the message, and one ledger per import
                configuration, a dataset regardless of the date it was exported, one file for each account
                beside its chapter of <Means>$[[ Dougs Importer ]]</Means>, updated in place by every run, keyed
                by the conversation's id and holding neither name nor folder, which is how a later run knows a conversation is
                already in, has grown, or was edited by hand, and finds a book by the origin on its cover however
                it was renamed, moved or cut, as <Means>$[[ The Ledger ]]( Dougs Importer / The Ledger )</Means> says.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What is held stable, and what may move</Heading>
            <Paragraph>
                Held stable: the folder and its five files, the file names of days, versions and resources, the
                tags and their attributes as the figures show them, the reference forms for a person, a day and
                a version, the origins, the entry and the ledger. The binder holds some of it itself and refuses a bind that
                breaks it: every chapter listed in its table, every link landing, every id worn once, no file
                beside a chapter that nothing inserts, a title with no parenthesis or bracket in it, a file stem
                ending in no dash. The rest is the importer's promise,
                in <Means>$[[ The Writing ]]( Dougs Importer / The Writing )</Means>. Free to move without an
                import: everything a reader sees, which is the manuals', the message's bubble and its hour, the
                code box's bar, the card and the chip, the pane and its column, the tally, the day count, the
                head that scrolls, every colour and every measure.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What the export holds that the form does not carry</Heading>
            <Paragraph>
                The export carries things the form leaves out, each counted by the import and written nowhere:
                Claude's thinking and a tool's result, left out on my ruling; a prompt the application injected;
                a memory Claude read or wrote; a place card on a map; the link from a conversation to an artifact
                published on the web, whose published copy the export keeps in a category of its own; and a
                conversation captured live from the application, which holds an artifact's content as the
                export does not, counts its turns in its own way, and is compared with the export by when each
                last changed and never by count. Each is
                a form owed if it is ever wanted, said here first and then written, never written around.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The older account</Heading>
            <Paragraph>
                My older account's export is in the application's earlier shape, one archive with its own
                schema, and its import is being generalized by the other team to read it. It writes this same
                form and nothing else: a conversation from either account is one kind of book, told apart by
                the account its cover says, <Means>$[[ The Account ]]( ./The Account )</Means>, the line its
                page draws for it, and its line in the ledger.
            </Paragraph>
        </Section>
        <Append
            identifier="day"
            type=".tsx"
        >
            ![[ day.tsx ]]
        </Append>
        <Append
            identifier="notation"
            type=".tsx"
        >
            ![[ notation.tsx ]]
        </Append>
        <Append
            identifier="version"
            type=".tsx"
        >
            ![[ version.tsx ]]
        </Append>
    </Chapter>
);
