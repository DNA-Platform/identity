import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--yotelair-istanbul-airport-transit-hotel--5747495d/.cover.tsx';
import TheSynopsis from './claude--yotelair-istanbul-airport-transit-hotel--5747495d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Yotelair Istanbul airport transit hotel ]]( claude--Yotelair Istanbul airport transit hotel--5747495d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Yotelair Istanbul airport transit hotel ]]( claude--Yotelair Istanbul airport transit hotel--5747495d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
