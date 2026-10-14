import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Importer ]]</Title>
        <Paragraph>
            <Brief />
            The run: the stages in order, from an export on disk to conversations filed in this library, and the
            report of what it did.
        </Paragraph>
        <Section>
            <Heading>Nine stages and nothing hidden between them</Heading>
            <Paragraph>
                A conversation gets into this library in stages, and each stage is a chapter of this book with
                its code beside it, so a change to the code is never a question about which page owes an edit.
                The importer finds <Means>$[[ the export ]]( ./The Export )</Means> where it lands, reads it
                into <Means>$[[ one record ]]( ./The Record )</Means>, pairs each conversation to its project
                by <Means>$[[ evidence ]]( ./The Pairing )</Means>, asks <Means>$[[ the ledger ]]( ./The Ledger )</Means> which
                conversations are new, walks <Means>$[[ the thread ]]( ./The Thread )</Means> that was on the
                screen, turns what was said into <Means>$[[ writing ]]( ./The Writing )</Means>,
                writes <Means>$[[ the books ]]( ./The Books )</Means>, and <Means>$[[ checks ]]( ./The Check )</Means> what
                it wrote against the archive the export was first read into.
            </Paragraph>
            <Paragraph>
                Run bare it says what it would write and stops. Run to write it writes, and reports: the
                conversations found, paired, unpaired, ambiguous and excluded; the messages on the screen and on
                other paths; the files written. It takes a project, a collection its configuration names, or
                particular conversations named by title or by id, never the whole export in one run, so the
                library grows at the pace the bind is measured to bear; and for each it says whether it is new,
                in, grown or edited, and when it was imported and from which export, which the record beside the
                conversation's entry holds. A run writes what is new and what has grown since its import, leaves
                what is in, and never touches what I edited unless told to re-import, when it keeps my edits
                beside the fresh chapter and says so, as <Means>$[[ the ledger ]]( ./The Ledger )</Means> tells.
                Run with nothing named it lists what the library holds already, newest import first. A book's
                title is the conversation's name made sensible, its spaces collapsed and a pictograph the
                application put first dropped, and its address is the title's letters in any script, a sign that
                reads as a word read as it. While the importer is being made it overwrites what it wrote, on a flag said at
                the run; once it is done it never does, since a conversation once imported is edited by hand.
            </Paragraph>
            <Paragraph>
                Its configuration stands beside this chapter: what is excluded as not mine, the scripts a title
                may not be in and the projects, and the collections, each a name over a list of conversations by
                title or id. A conversation with a Russian title is not mine, and the configuration says so.
            </Paragraph>
        </Section>
        <Append
            identifier="importer"
            type=".ts"
        >
            ![[ importer.ts ]]
        </Append>
        <Append
            identifier="configuration"
            type=".json"
        >
            ![[ configuration.json ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);
