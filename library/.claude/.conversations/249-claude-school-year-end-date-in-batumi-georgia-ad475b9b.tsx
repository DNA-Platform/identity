import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--school-year-end-date-in-batumi-georgia--ad475b9b/.cover.tsx';
import TheSynopsis from './claude--school-year-end-date-in-batumi-georgia--ad475b9b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ School year end date in Batumi Georgia ]]( claude--School year end date in Batumi Georgia--ad475b9b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ School year end date in Batumi Georgia ]]( claude--School year end date in Batumi Georgia--ad475b9b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
