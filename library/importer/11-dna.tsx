import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from '../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ DNA ]]</Title>
        <Paragraph>
            <Brief />
            The import of the account we use now, <Means>$[[ DNA ]]( Dougs Claude / DNA )</Means>: where its exports
            land and whose it is; what came in from it stands in <Means>$[[ the ledger ]]( ./The Ledger )</Means>,
            one for every account.
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
        <Append
            identifier="configuration"
            type=".json"
        >
            ![[ configuration.json ]]
        </Append>
    </Chapter>
);
