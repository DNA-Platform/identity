import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Pairing ]]</Title>
        <Paragraph>
            <Brief />
            Which project a conversation belongs to, by evidence the importer names and I dispose of, and which
            conversations are not mine and stay out.
        </Paragraph>
        <Section>
            <Heading>The machine proposes and I dispose</Heading>
            <Paragraph>
                The export pairs nothing: no record of a conversation names its project. So the importer
                decides it the way the sister repository does, rule for rule, and says how by name. The capture
                beside the export comes first, its titles resolved to conversations, a title it lists under two
                projects left to the evidence, since ten conversations share one name. Then what the export
                itself shows: a search of a project's files that returned a passage only that project holds; a
                read of a project's memory; and a search of my conversations, which only ever finds those held
                where it was run, placing a conversation one step from one already placed and never from a
                memory, since Claude reads any project's memory from anywhere. A claim the searches or the
                capture contradict is set aside and said so. What nothing places is left unpaired and reported,
                and it has its home in the book that catalogues all of them either way. The sister repository
                writes the membership it decides beside each export, and the run compares, conversation by
                conversation, and names every difference.
            </Paragraph>
            <Paragraph>
                My two accounts are read one after the other, the older first, and paired each against its own
                capture. A project of the same name in both is then one project, the newer on top of the older:
                its files from both, the newer copy where both hold one, the older's description where the newer
                has none, and its conversations from both.
            </Paragraph>
            <Paragraph>
                The pairing stands as a file beside this chapter, one line per conversation with its account, its
                project and the evidence, written by a run that writes and by no other, and I edit it: a line I
                write is read before any evidence. The same file holds
                the exclusions. A conversation that is not mine is proposed for exclusion and stays out unless I
                strike the line, and what is not mine <Means>$[[ the importer's configuration ]]( ./The Importer )</Means> names:
                a project that is not mine, Ana's, and a script a title may not be in, Cyrillic, since a
                conversation with a Russian title is not mine, whoever wrote it in my account.
            </Paragraph>
        </Section>
        <Append
            identifier="pairing"
            type=".ts"
        >
            ![[ pairing.ts ]]
        </Append>
        <Append
            identifier="pairings"
            type=".json"
        >
            ![[ pairings.json ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);
