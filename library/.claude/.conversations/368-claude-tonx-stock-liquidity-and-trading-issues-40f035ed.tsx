import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.cover.tsx';
import TheSynopsis from './claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX stock liquidity and trading issues ]]( claude--TONX stock liquidity and trading issues--40f035ed )</Title>
        <Paragraph>
            <Caption />
            A conversation, 37 exchanges: <Means>$[[ TONX stock liquidity and trading issues ]]( claude--TONX stock liquidity and trading issues--40f035ed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
