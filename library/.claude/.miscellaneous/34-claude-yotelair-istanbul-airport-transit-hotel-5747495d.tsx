import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--yotelair-istanbul-airport-transit-hotel--5747495d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--yotelair-istanbul-airport-transit-hotel--5747495d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Yotelair Istanbul airport transit hotel ]]( claude--Yotelair Istanbul airport transit hotel--5747495d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Yotelair Istanbul airport transit hotel ]]( claude--Yotelair Istanbul airport transit hotel--5747495d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
