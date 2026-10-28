import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[27 August 2026](2026-08-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Travel arbitrage opportunities between Tbilisi, London, and New York ]]( claude--Travel arbitrage opportunities between Tbilisi, London, and New York--979027d4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 August 2026: <Means>$[[ Travel arbitrage opportunities between Tbilisi, London, and New York ]]( claude--Travel arbitrage opportunities between Tbilisi, London, and New York--979027d4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
