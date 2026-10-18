import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russian-school-calendar-in-batumi-georgia--22e7e4b9/.cover.tsx';
import TheSynopsis from './claude--russian-school-calendar-in-batumi-georgia--22e7e4b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian school calendar in Batumi Georgia ]]( claude--Russian school calendar in Batumi Georgia--22e7e4b9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Russian school calendar in Batumi Georgia ]]( claude--Russian school calendar in Batumi Georgia--22e7e4b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
