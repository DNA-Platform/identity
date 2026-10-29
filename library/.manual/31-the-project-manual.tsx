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
                The page opens on the conversations held in the project, down the middle at the whole width as the
                application lists them, newest first: each a row with its title and its day, the whole row leading
                to the conversation, the count of exchanges shown only when the rows carry their synopsis, by the
                switch at the head. The head is the crumb to the subject the project is filed under, the title, and
                the search, the index's fourth way, over the entries' titles and synopses and the files' names, each
                hit leading into the conversation's own page. Nothing of what the project is for stands on the page:
                the brief and the instructions are the project chapter, reached from the side bar's first row, since
                a synopsis is what a row shows when it is pressed. The files stand in a column at the right as the
                application keeps them, and a file pressed turns the page to that file's chapter, shown beside its
                words as every manual shows one; the column goes with the list, and the project's name in the bar
                brings the list back. The side lists what the table lists by the index's ways, folded, counted, dated
                and searched, which the type sets when bound: the project's row first, listed in no section; Its
                conversations, a folder with its count, folded until pressed; Its files, a folder; the book's own
                section last. The importer writes the table in that form and says Its conversations as each entry's
                part, and the type sets the folder's rows by their day, newest first, when bound. No rule of the
                page's own dresses the side, since the layout places it and never dresses it and its specification
                refuses one that does; the side's column is the layout's, 220 wide, so the folder's name and its
                count stand on one line. The rows, the head and the switch are the list layout's, which the project's
                layout extends with its column and the rows' own grid, and <Means>$[[ the register ]]( ./The Register )</Means> wears as it is. The type knows its chapters by what they
                are: a file is a chapter that appends a file, the project is the one that appends none, an entry
                is a chapter holding a synopsis; nothing is placed by position. A type that extends this one may
                add to each row, as Claude's project manual adds the way on to the application and the trail a
                press writes, said in <Means>$[[ Claudes Reference Manual / The Project's Page ]]</Means>. The design
                was concept 4 of <Means>$[[ Claudes Design / The Project's Page ]]</Means>, its first layout, then
                concept 10 of <Means>$[[ Claudes Design / The Conversation and the Project ]]</Means>, built on
                2026-10-23, and is concept 11 of the same chapter, the page as it opens, built on 2026-10-29 in
                Sprint 118; the way back from a conversation is the trail of its concept 9.
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
