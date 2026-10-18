import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Jesus' 40-day fast and temptation ]]( claude--Jesus' 40-day fast and temptation--14242b5f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 June 2026: <Means>$[[ Jesus' 40-day fast and temptation ]]( claude--Jesus' 40-day fast and temptation--14242b5f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
