import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Ledger ]]</Title>
        <Paragraph>
            <Brief />
            What the importer wrote, kept as a record beside each conversation's entry in the book that holds them
            all, so that it knows which conversations are already in, which have grown since, which are new, and
            which I have edited by hand and it must never touch.
        </Paragraph>
        <Section>
            <Heading>A record beside every entry</Heading>
            <Paragraph>
                Many conversations are short, and after a few runs it is hard to know which are in. So the
                importer keeps its ledger in the conversations book itself: beside each entry of the register of
                all my conversations stands a file named for the entry, the record of that conversation's
                import, with the conversation's id, the name and folder of its book, the account and the export
                it was read from, the export's time of last change and its count of messages at the import, and
                the digest of the files written; a record written before I read two accounts names none, and its
                conversation is one of DNA's. The entry lists the file, so the binder accounts for it, and
                reads nothing of it, since a resource is shown and never interpreted. The importer reads the
                newest export it finds, by the date in its manifest, so a newer export dropped where the last
                one lay is the one read, and the record says which export each conversation came from. A
                conversation with no record is new, and a run writes it. One whose export now shows a later time
                or more messages has grown since, and a run writes it again, since nothing of mine is in it. One
                equal to its record is in, and a run leaves it. And one whose files no longer match their digest
                has been edited by hand, and a run never touches it unless told to re-import; when such a one
                has grown since as well, the run says so beside it.
            </Paragraph>
            <Paragraph>
                Told to re-import, the run writes an edited book again from the export and keeps every file of
                it as I had it, where the import overwrote it or no longer writes it, as a plain-text file beside
                the fresh chapter, named for the chapter and for the file it was, and printed by the chapter in
                a closing section, each file as I had it, so the bind accounts for it and my edits stand on the
                page beside the fresh import until I apply them again and strike the file. The record keeps when
                the book was re-imported and which files were kept, and every listing says beside the
                conversation, while any kept file still stands, how many files of my edits wait to be applied; so
                I always know which conversations were re-imported and what changes I have yet to make, as I
                asked on 2026-10-14. When I strike a kept file, the next run that writes takes its printing out
                of the chapter, the section with the last of them, and takes the book as it then stands, my
                edits applied, as the state its record knows; a bare run says meanwhile that a kept copy was
                struck. The re-import writes one fresh chapter, as the import does, so a book I have cut into
                chapters comes back as one chapter with my chapters kept beside it as text, nothing lost and
                not the shape I cut; the re-import of a cut book is the next thing to design, since many of
                these will be cut.
            </Paragraph>
            <Paragraph>
                The record stands with the entry, so what I do to a conversation by hand, cutting it, renaming
                it, striking it from the register, carries its record along or removes it, and the state of the
                import is never a file apart that can disagree with the books. While the importer is being made
                it overwrites what it wrote, on a flag said at the run, and removes what it wrote before and no longer
                writes, my kept edits excepted, since the shape of a book is still being
                decided on <Means>$[[ its page ]]( Claudes Design / The Conversation's Page )</Means>. Once it is
                done the flag goes, and a conversation once imported is mine: cut into days or sittings,
                summarized, annotated, by hand.
            </Paragraph>
        </Section>
        <Append
            identifier="ledger"
            type=".ts"
        >
            ![[ ledger.ts ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);
