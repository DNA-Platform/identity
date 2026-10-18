import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-custody-case-with-travel-ban-and-safety-risks--3c3ba314/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-custody-case-with-travel-ban-and-safety-risks--3c3ba314/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[23 January 2026](2026-01-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian custody case with travel ban and safety risks ]]( claude--Russian custody case with travel ban and safety risks--3c3ba314 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 January 2026: <Means>$[[ Russian custody case with travel ban and safety risks ]]( claude--Russian custody case with travel ban and safety risks--3c3ba314 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
