import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Books ]]</Title>
        <Paragraph>
            <Brief />
            What is left on disk: a conversation as a book, every conversation filed under one book that
            catalogues them all, and a book per project that catalogues its own besides.
        </Paragraph>
        <Section>
            <Heading>One home, and as many catalogues as I like</Heading>
            <Paragraph>
                A conversation is a book: its book file one line, its cover saying when it was held, how many
                messages it holds and which of <Means>$[[ my accounts ]]( Dougs Claude / The Accounts )</Means> it
                came from, its synopsis what it came to, its table, and a chapter for each day it was held, in
                the form <Means>$[[ the imported conversation ]]( Claudes Reference Manual / The Imported Conversation )</Means> sets
                down. It is filed under the book that catalogues all of my conversations, which
                is its one home whatever the mapping says. Each project that catalogues it is a book of its
                own, <Means>$[[ a project book ]]( Dougs Reference Manual / The Project Manual )</Means>, a reference
                manual of the project's knowledge files and a catalogue of its conversations by
                topic, which is the way back from a conversation to its project; and a project's book is a
                subject, so what I later write about a project can be filed under it. A project book is written
                once and left, and written whole again only when a run takes its project whole and says to
                overwrite, from the project as both accounts hold it, every conversation standing in the library
                entered in it again. Both kinds of catalogue are
                filed under Dougs Claude, the book that catalogues the conversations book and the project
                books together. The catalogue of all of them is a very
                simple book for now; the shelves and the tables that catalogue them more effectively come with
                their pages.
            </Paragraph>
            <Paragraph>
                A conversation's book shows its title and is named apart from every other book of mine: its key
                is claude, two dashes, the title, two dashes and the first eight characters of the application's
                own id for it, and its folder is the same with the title's slug. So no conversation can collide
                with a book of another kind, two conversations of one title are told apart by their ids and
                never by a number, and a conversation keeps its key on every run. The page shows only the title,
                written as the application gave it, and only the key is spelled for the notation. A title is
                the application's own, sanitized by the binder's rule for any name nobody chose: a slash, a
                backslash, a parenthesis or a bracket written as the one that looks like it, what cannot be seen
                taken out, and every space one space. A chat the application left untitled takes the first
                sentence of my first message, and failing that the day it began. The ledger is keyed by the
                conversation's id and the book carries the same id on its cover, so whatever the title, the book
                is found again and never imported twice. A file of a project takes its own name, numbered
                against every title its book holds. A folder that exists
                is never entered unless the run says to
                overwrite and <Means>$[[ the ledger ]]( ./The Ledger )</Means> says the book is still the
                importer's; a catalogue's chapter and row are added where its table lacks the reference.
            </Paragraph>
            <Paragraph>
                Every book the importer writes wears a cover as my other books do: the face its kind wears, a
                bookshelf cover for a conversation and for Dougs Claude, a journal cover for Our Conversations, a
                manual's for a project, each with a scheme, a window and a drawing, so that the mark in the header
                draws and a shelf can hold the book; and each with its subject's cover and my story's as volumes,
                which is how the header leads from any book to the one it is filed under and to me. The three
                drawings stand beside this chapter. Every conversation wears the one drawing of Our Conversations,
                so a conversation is told at a glance wherever its mark is drawn. And Dougs Claude is a bookshelf,
                so the books it catalogues stand on it as jackets.
            </Paragraph>
        </Section>
        <Append
            identifier="books"
            type=".ts"
        >
            ![[ books.ts ]]
        </Append>
        <Append
            identifier="dougs-claude"
            type=".svg"
        >
            ![[ dougs-claude.svg ]]
        </Append>
        <Append
            identifier="our-conversations"
            type=".svg"
        >
            ![[ our-conversations.svg ]]
        </Append>
        <Append
            identifier="project"
            type=".svg"
        >
            ![[ project.svg ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);
