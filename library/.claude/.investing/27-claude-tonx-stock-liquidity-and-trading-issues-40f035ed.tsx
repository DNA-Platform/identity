import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX stock liquidity and trading issues ]]( claude--TONX stock liquidity and trading issues--40f035ed )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ TONX stock liquidity and trading issues ]]( claude--TONX stock liquidity and trading issues--40f035ed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
