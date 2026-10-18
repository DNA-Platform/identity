import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ School year end date in Batumi Georgia ]]( claude--School year end date in Batumi Georgia--ad475b9b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ School year end date in Batumi Georgia ]]( claude--School year end date in Batumi Georgia--ad475b9b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
