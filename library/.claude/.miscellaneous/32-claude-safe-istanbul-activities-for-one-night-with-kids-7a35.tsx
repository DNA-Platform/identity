import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--safe-istanbul-activities-for-one-night-with-kids--7a350256/.cover.tsx';
import TheSynopsis from '../.conversations/claude--safe-istanbul-activities-for-one-night-with-kids--7a350256/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safe Istanbul activities for one night with kids ]]( claude--Safe Istanbul activities for one night with kids--7a350256 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Safe Istanbul activities for one night with kids ]]( claude--Safe Istanbul activities for one night with kids--7a350256 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
