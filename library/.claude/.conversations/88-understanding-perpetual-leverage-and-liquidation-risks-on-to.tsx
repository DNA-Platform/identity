import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './understanding-perpetual-leverage-and-liquidation-risks-on-to/.cover.tsx';
import TheSynopsis from './understanding-perpetual-leverage-and-liquidation-risks-on-to/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding perpetual leverage and liquidation risks on TON ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 58 exchanges: <Means>$[[ Understanding perpetual leverage and liquidation risks on TON ]]</Means>.
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
