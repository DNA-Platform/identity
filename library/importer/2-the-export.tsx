import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Export ]]</Title>
        <Paragraph>
            <Brief />
            What is read, and where it is found: the export Claude gives of each of my accounts, in either of
            the two packagings it has come in, and the capture of conversations to projects read off the
            application beside it, all left where they land.
        </Paragraph>
        <Section>
            <Heading>Two packagings of the same records</Heading>
            <Paragraph>
                An export of my Claude account arrives today as a small manifest naming seven archives, which
                the browser must fetch since their links are single-use: the account's metadata, its projects
                with every knowledge file inline, its memories, every conversation in one array, with every
                message as a tree of blocks, text, thinking, a tool used and what it returned, and the artifacts
                among them; and since October the artifacts I published, their data, and the routines of Claude
                Code. The export of my older account came the earlier way, one archive holding the metadata, the
                projects, the memories and the conversations together. The records inside are the same in both;
                only the packaging differs, so the importer finds an export of either kind and maps both through
                the same functions, which is what keeps a conversation from either account in one form. The
                export says nothing about which project a conversation belongs to; that is read off the
                application by a capture that takes the screen, and filed beside the export it was taken with.
            </Paragraph>
            <Paragraph>
                All of it lands in a sister repository on this machine, an account to a folder, by that
                repository's own command; a fresh export is made there on my go-ahead, since the capture takes my
                screen. For each account the importer reads the newest export, by the date in its file's name
                under either naming the application has used, and the newest capture in the same folder as that
                export, and copies none of it into the library. It never reads the markdown that repository wrote
                from the export, which kept only the text and walked the tree as a list; the code there was the
                beginning of this, and the archive there is <Means>$[[ the check ]]( ./The Check )</Means>.
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
