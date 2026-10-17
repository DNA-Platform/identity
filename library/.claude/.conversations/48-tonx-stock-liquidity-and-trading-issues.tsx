import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './tonx-stock-liquidity-and-trading-issues/.cover.tsx';
import TheSynopsis from './tonx-stock-liquidity-and-trading-issues/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX stock liquidity and trading issues ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 37 exchanges: <Means>$[[ TONX stock liquidity and trading issues ]]</Means>.
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
