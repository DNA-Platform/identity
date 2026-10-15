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
                A conversation is a book: its book file one line, its cover saying when it was held and how many
                messages it holds, its synopsis what it came to, its table, and in the first version one chapter
                holding every exchange. It is filed under the book that catalogues all of my conversations, which
                is its one home whatever the mapping says. Each project that catalogues it is a book of its
                own, <Means>$[[ a project book ]]( Dougs Reference Manual / The Project Manual )</Means>, a reference
                manual of the project's knowledge files and a catalogue of its conversations by
                topic, which is the way back from a conversation to its project; and a project's book is a
                subject, so what I later write about a project can be filed under it. Both kinds of catalogue are
                filed under Dougs Claude, the book that catalogues the conversations book and the project
                books together. The catalogue of all of them is a very
                simple book for now; the shelves and the tables that catalogue them more effectively come with
                their pages.
            </Paragraph>
            <Paragraph>
                A book's name is its title, an untitled conversation numbered Untitled 1 and on by a count the
                importer keeps, a repeated title the same, and never a date, since a conversation happens across
                time. A folder that exists is never entered unless the run says to
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
