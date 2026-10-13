import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Type of Book ]]</Keyed>
        <Title>[[ The Project ]]</Title>
        <Paragraph>
            <Brief />
            A reference manual that catalogues besides: the knowledge files of a project as spreads, and the
            conversations held in the project as entries, each holding a conversation's synopsis.
        </Paragraph>
        <Section>
            <Heading>A manual that catalogues</Heading>
            <Paragraph>
                A project book is <Means>$[[ a manual ]]( ./The Manual )</Means> of the files a project held, each
                file a chapter shown beside it, and a catalogue of the conversations held in that project, each
                an entry that holds the conversation's synopsis and its cover as a volume, the
                way <Means>$[[ a register ]]( ./The Register )</Means> holds its entries. A manual lays out its
                spreads and nothing else, so the type places its entries too, on pages of their own after the
                files and listed in the table under the conversations; the conversation itself stays filed under
                the book that holds them all, and the project book only points to it.
            </Paragraph>
            <Paragraph>
                It is the project book the importer writes for now, until a shelf is designed for projects. The
                importer writes the file chapters and the entries; the type reads them.
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
