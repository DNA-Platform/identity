import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Export ]]</Title>
        <Paragraph>
            <Brief />
            What is read, and where it is found: the export Claude gives of an account, and the mapping of
            conversations to projects read off the application, both left where they land.
        </Paragraph>
        <Section>
            <Heading>A manifest and four archives</Heading>
            <Paragraph>
                An export of my Claude account arrives as a small manifest naming four archives, which the browser
                must fetch since their links are single-use: the account's metadata, its projects with every
                knowledge file inline, its memories, and every conversation in one array, with every message as
                a tree of blocks, text, thinking, a tool used and what it returned, and the artifacts among them.
                The export says nothing about which project a conversation belongs to; that is read off the
                application by a capture that takes the screen, and written as a mapping beside the export.
            </Paragraph>
            <Paragraph>
                All of it lands in a sister repository on this machine, in dated folders, by that repository's
                own command; a fresh export is made there on my go-ahead, since the capture takes my screen. The
                importer reads the newest export and the latest mapping where they stand, and copies none of it
                into the library. It never reads the markdown that repository wrote from the export, which kept
                only the text and walked the tree as a list; the code there was the beginning of this, and the
                archive there is <Means>$[[ the check ]]( ./The Check )</Means>.
            </Paragraph>
        </Section>
        <Append
            identifier="export"
            type=".ts"
        >
            ![[ export.ts ]]
        </Append>
    </Chapter>
);
