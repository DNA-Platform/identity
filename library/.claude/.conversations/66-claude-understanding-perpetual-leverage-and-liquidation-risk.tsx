import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-perpetual-leverage-and-liquidation-risks-on-to--e9f37566/.cover.tsx';
import TheSynopsis from './claude--understanding-perpetual-leverage-and-liquidation-risks-on-to--e9f37566/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding perpetual leverage and liquidation risks on TON ]]( claude--Understanding perpetual leverage and liquidation risks on TON--e9f37566 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 58 exchanges: <Means>$[[ Understanding perpetual leverage and liquidation risks on TON ]]( claude--Understanding perpetual leverage and liquidation risks on TON--e9f37566 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
