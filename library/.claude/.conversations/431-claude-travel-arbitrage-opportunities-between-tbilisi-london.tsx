import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/.cover.tsx';
import TheSynopsis from './claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[27 August 2026](2026-08-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Travel arbitrage opportunities between Tbilisi, London, and New York ]]( claude--Travel arbitrage opportunities between Tbilisi, London, and New York--979027d4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Travel arbitrage opportunities between Tbilisi, London, and New York ]]( claude--Travel arbitrage opportunities between Tbilisi, London, and New York--979027d4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
