import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-perpetual-leverage-and-liquidation-risks-on-to--e9f37566/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-perpetual-leverage-and-liquidation-risks-on-to--e9f37566/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding perpetual leverage and liquidation risks on TON ]]( claude--Understanding perpetual leverage and liquidation risks on TON--e9f37566 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 April 2026: <Means>$[[ Understanding perpetual leverage and liquidation risks on TON ]]( claude--Understanding perpetual leverage and liquidation risks on TON--e9f37566 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
