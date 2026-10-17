import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './russias-telegram-blocking-and-packet-sniffing-capabilities/.cover.tsx';
import TheSynopsis from './russias-telegram-blocking-and-packet-sniffing-capabilities/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[18 March 2026](2026-03-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram blocking and packet sniffing capabilities ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Russia's Telegram blocking and packet sniffing capabilities ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
        <Append
            identifier="import"
            type=".json"
        >
            ![[ import.json ]]
        </Append>
    </Chapter>
);
