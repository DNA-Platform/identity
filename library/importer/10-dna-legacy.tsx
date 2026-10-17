import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ DNA Legacy ]]</Title>
        <Paragraph>
            <Brief />
            The import of my first account, <Means>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Means>: where its
            export lands, whose it is, and the ledger of every conversation brought in from it.
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
        <Section>
            <Heading>The ledger of DNA Legacy</Heading>
            <Paragraph>
                Beside this chapter stands the ledger of this import, one file however often it runs: a line for
                each conversation brought in, keyed by the application's own id and holding no name, with the
                export it came from, the application's last change and its count of messages when it came in, when
                it came in and when it was taken again, and the digest of what was written. The same id is said on
                the conversation's cover and on each of its messages, so its book is found wherever it stands and
                whatever I have called it, as <Means>$[[ the ledger ]]( ./The Ledger )</Means> tells.
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
