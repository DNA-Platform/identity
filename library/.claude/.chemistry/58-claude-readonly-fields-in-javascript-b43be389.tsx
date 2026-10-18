import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--readonly-fields-in-javascript--b43be389/.cover.tsx';
import TheSynopsis from '../.conversations/claude--readonly-fields-in-javascript--b43be389/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[3 November 2025](2025-11-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Readonly fields in JavaScript ]]( claude--Readonly fields in JavaScript--b43be389 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 November 2025: <Means>$[[ Readonly fields in JavaScript ]]( claude--Readonly fields in JavaScript--b43be389 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
