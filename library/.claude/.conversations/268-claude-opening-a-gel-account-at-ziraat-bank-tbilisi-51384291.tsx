import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/.cover.tsx';
import TheSynopsis from './claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Opening a GEL account at Ziraat Bank Tbilisi ]]( claude--Opening a GEL account at Ziraat Bank Tbilisi--51384291 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Opening a GEL account at Ziraat Bank Tbilisi ]]( claude--Opening a GEL account at Ziraat Bank Tbilisi--51384291 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
