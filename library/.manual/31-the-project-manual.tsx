import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Type of Book ]]</Keyed>
        <Title>[[ The Project Manual ]]</Title>
        <Paragraph>
            <Brief />
            A reference manual that catalogues besides: the knowledge files of a project as spreads, and the
            conversations held in the project as entries, each holding a conversation's synopsis.
        </Paragraph>
        <Section>
            <Heading>A manual that catalogues</Heading>
            <Paragraph>
                A project manual is <Means>$[[ a manual ]]( ./The Manual )</Means> of the files a project held,
                each file a chapter shown beside it, and a catalogue of the conversations held in that project,
                each an entry that holds the conversation's synopsis and its cover as a volume, the
                way <Means>$[[ a register ]]( ./The Register )</Means> holds its entries. A manual lays out its
                spreads and nothing else, so the type places its entries too, on pages of their own after the
                files and listed in the table under the conversations; the conversation itself stays filed under
                the book that holds them all, and the project manual only points to it. The project a
                conversation was held in is said on the conversation's cover as Claude's own annotation,
                in <Means>$[[ Claudes Reference Manual ]]</Means>, which is why this type is called a manual and
                not a project.
            </Paragraph>
            <Paragraph>
                It is the project book the importer writes for now, until a shelf is designed for projects. The
                importer writes the file chapters and the entries; the type reads them.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The project's page</Heading>
            <Paragraph>
                The page opens on the conversations held in the project, down the main column as the
                application lists them, newest first under their months: each a row with its title, its count of
                exchanges and its day, the whole row leading to the conversation. What the project is and what
                it holds stand at the head, with where it is filed. The knowledge of the project stands in a
                column at the right where the application keeps it, the chapter about the project and then its
                files, and a file pressed turns the page to that file's chapter, shown beside its words as every
                manual shows one; the column goes with the list, and the project's name in the bar brings the
                list back. The side lists what the table lists, every section a folder, folded until pressed,
                each month with its count and each row with its day. The type knows its chapters by what they
                are: a file is a chapter that appends a file, the project is the one that appends none, an entry
                is a chapter holding a synopsis; nothing is placed by position. The importer dates each entry and
                lists it under its month, as the register's, so the months are the entries' own. The design is
                concept 4 of <Means>$[[ Claudes Design / The Project's Page ]]</Means>, its first layout, until I
                decide by number; and the way back from a conversation is that chapter's concept 5.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
