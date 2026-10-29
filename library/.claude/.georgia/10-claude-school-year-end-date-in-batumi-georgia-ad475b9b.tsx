import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ School year end date in Batumi Georgia ]]( claude--School year end date in Batumi Georgia--ad475b9b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ School year end date in Batumi Georgia ]]( claude--School year end date in Batumi Georgia--ad475b9b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
