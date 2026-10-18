import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.cover.tsx';
import TheSynopsis from '../.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Creating array of objects with conditional properties ]]( claude--Creating array of objects with conditional properties--fd65b7af )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 November 2025: <Means>$[[ Creating array of objects with conditional properties ]]( claude--Creating array of objects with conditional properties--fd65b7af )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
