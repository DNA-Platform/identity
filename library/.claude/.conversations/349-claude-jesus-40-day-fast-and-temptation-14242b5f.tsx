import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--jesus-40-day-fast-and-temptation--14242b5f/.cover.tsx';
import TheSynopsis from './claude--jesus-40-day-fast-and-temptation--14242b5f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[4 June 2026](2026-06-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Jesus' 40-day fast and temptation ]]( claude--Jesus' 40-day fast and temptation--14242b5f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Jesus' 40-day fast and temptation ]]( claude--Jesus' 40-day fast and temptation--14242b5f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
