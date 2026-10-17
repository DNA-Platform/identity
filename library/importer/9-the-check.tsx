import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Check ]]</Title>
        <Paragraph>
            <Brief />
            What the importer wrote, checked against the archive the export was first read into, and then
            against the bind.
        </Paragraph>
        <Section>
            <Heading>Two readings of one export</Heading>
            <Paragraph>
                The sister repository holds an older reading of the same export, as markdown: a transcript per
                conversation with its count of messages, a book per project with the conversations its scaffold
                filed there, and the statistics of the whole. The importer never reads that archive as a source,
                but it is a check: every count of ours against its statistics, our pairing of a project against
                its scaffold's, our count of messages in each conversation against its transcript's, every
                difference listed by name in the report. Then the bind, which holds every book to its type and
                every reference to its place; and the run reads every conversation it has written back through
                its record, the instants of its messages in order, and finds them equal
                to <Means>$[[ the thread ]]( ./The Thread )</Means> or says from which message they stray.
            </Paragraph>
            <Paragraph>
                The run reports the check whether it writes or not, after the project's conversations: the
                counts of the whole export against the statistics, the project's conversations we paired against
                the ones the scaffold filed, each conversation's messages against its transcript's count, and
                what stands written against the export. A difference is not a fault; the archive's reading is
                older and its own, and the report is where the two are read side by side.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What the binder takes</Heading>
            <Paragraph>
                A run that writes ends with the binder's own check over my library, in seconds, and fails on any
                fault. It reads the library as the binder does, holds every book and reference to its place,
                and asks of every address whether one thing stands there, a cover by the words it shows. Then it
                puts every file the run wrote through the binder's transform and parses what comes out, so a
                title the transform would write into something the page cannot be built from is refused here
                and not at the end of a bind. Beside it, a promise writes a conversation under every title of
                both accounts that holds something the notation or the page reads into a copy of my library,
                and expects the same check to find nothing.
            </Paragraph>
        </Section>
        <Append
            identifier="check"
            type=".ts"
        >
            ![[ check.ts ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
        <Append
            identifier="bind.test"
            type=".ts"
        >
            ![[ bind.test.ts ]]
        </Append>
    </Chapter>
);
