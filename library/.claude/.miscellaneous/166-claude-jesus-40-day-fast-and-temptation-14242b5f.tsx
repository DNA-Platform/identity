import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[4 June 2026](2026-06-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Jesus' 40-day fast and temptation ]]( claude--Jesus' 40-day fast and temptation--14242b5f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 June 2026: <Means>$[[ Jesus' 40-day fast and temptation ]]( claude--Jesus' 40-day fast and temptation--14242b5f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
