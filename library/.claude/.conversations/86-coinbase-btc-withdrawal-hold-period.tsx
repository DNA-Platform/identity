import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './coinbase-btc-withdrawal-hold-period/.cover.tsx';
import TheSynopsis from './coinbase-btc-withdrawal-hold-period/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[15 April 2026](2026-04-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Coinbase BTC withdrawal hold period ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Coinbase BTC withdrawal hold period ]]</Means>.
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
