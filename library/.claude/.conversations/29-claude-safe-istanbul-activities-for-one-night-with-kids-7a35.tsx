import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--safe-istanbul-activities-for-one-night-with-kids--7a350256/.cover.tsx';
import TheSynopsis from './claude--safe-istanbul-activities-for-one-night-with-kids--7a350256/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safe Istanbul activities for one night with kids ]]( claude--Safe Istanbul activities for one night with kids--7a350256 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Safe Istanbul activities for one night with kids ]]( claude--Safe Istanbul activities for one night with kids--7a350256 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
