import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/.cover.tsx';
import TheSynopsis from '../.conversations/claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Opening a GEL account at Ziraat Bank Tbilisi ]]( claude--Opening a GEL account at Ziraat Bank Tbilisi--51384291 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Opening a GEL account at Ziraat Bank Tbilisi ]]( claude--Opening a GEL account at Ziraat Bank Tbilisi--51384291 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
