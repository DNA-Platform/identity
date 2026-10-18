import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-school-calendar-in-batumi-georgia--22e7e4b9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-school-calendar-in-batumi-georgia--22e7e4b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian school calendar in Batumi Georgia ]]( claude--Russian school calendar in Batumi Georgia--22e7e4b9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Russian school calendar in Batumi Georgia ]]( claude--Russian school calendar in Batumi Georgia--22e7e4b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
