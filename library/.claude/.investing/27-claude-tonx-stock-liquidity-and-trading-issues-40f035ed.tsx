import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX stock liquidity and trading issues ]]( claude--TONX stock liquidity and trading issues--40f035ed )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ TONX stock liquidity and trading issues ]]( claude--TONX stock liquidity and trading issues--40f035ed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
