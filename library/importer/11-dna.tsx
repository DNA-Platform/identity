import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ DNA ]]</Title>
        <Paragraph>
            <Brief />
            The import of the account we use now, <Means>$[[ DNA ]]( Dougs Claude / DNA )</Means>: where its exports
            land, whose it is, and the ledger of every conversation brought in from it.
        </Paragraph>
        <Section>
            <Heading>What DNA reads</Heading>
            <Paragraph>
                Its exports land in the sister repository under claude-dna, each in a folder of its own day, a
                manifest naming the archives beside it. The importer reads the newest, by the date in its name, and
                the capture of the projects taken with it, in the same folder. The account is held by my own
                address, which the export must name to be read, and that address is the configuration's beside this
                chapter.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The ledger of DNA</Heading>
            <Paragraph>
                Beside this chapter stands the ledger of this import, one file however often it runs and whichever
                export it reads: a line for each conversation brought in, keyed by the application's own id and
                holding no name, with the export it came from, the application's last change and its count of
                messages when it came in, when it came in and when it was taken again, and the digest of what was
                written. A newer export finds each line by its id, and says what has grown since, as <Means>$[[ the ledger ]]( ./The Ledger )</Means> tells.
            </Paragraph>
        </Section>
        <Append
            identifier="configuration"
            type=".json"
        >
            ![[ configuration.json ]]
        </Append>
        <Append
            identifier="ledger"
            type=".json"
        >
            ![[ ledger.json ]]
        </Append>
    </Chapter>
);
