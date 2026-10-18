import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--yotelair-istanbul-airport-transit-hotel--5747495d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--yotelair-istanbul-airport-transit-hotel--5747495d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Yotelair Istanbul airport transit hotel ]]( claude--Yotelair Istanbul airport transit hotel--5747495d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Yotelair Istanbul airport transit hotel ]]( claude--Yotelair Istanbul airport transit hotel--5747495d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
