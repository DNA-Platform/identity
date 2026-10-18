import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.cover.tsx';
import TheSynopsis from '../.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[5 November 2025](2025-11-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Creating array of objects with conditional properties ]]( claude--Creating array of objects with conditional properties--fd65b7af )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 November 2025: <Means>$[[ Creating array of objects with conditional properties ]]( claude--Creating array of objects with conditional properties--fd65b7af )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
