import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--readonly-fields-in-javascript--b43be389/.cover.tsx';
import TheSynopsis from '../.conversations/claude--readonly-fields-in-javascript--b43be389/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Readonly fields in JavaScript ]]( claude--Readonly fields in JavaScript--b43be389 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 November 2025: <Means>$[[ Readonly fields in JavaScript ]]( claude--Readonly fields in JavaScript--b43be389 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
