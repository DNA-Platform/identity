import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from '../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ DNA Legacy ]]</Title>
        <Paragraph>
            <Brief />
            The import of my first account, <Means>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Means>: where its
            export lands and whose it is; what came in from it stands in <Means>$[[ the ledger ]]( ./The Ledger )</Means>,
            one for every account.
        </Paragraph>
        <Section>
            <Heading>What DNA Legacy reads</Heading>
            <Paragraph>
                Its export lands in the sister repository under claude-legacy, in the older form, one archive
                holding the account, its projects, its memories and its conversations. The newest is of 27 May 2026,
                and it is the last, since the account was lost with its domain; the capture of its projects taken
                then stands beside it. The account is held by an address of the dna.love domain, which the export
                must name to be read, and that address is the configuration's beside this chapter.
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
