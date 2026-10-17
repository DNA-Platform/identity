import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-reading-journey--3ab06e4e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-reading-journey--3ab06e4e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory reading journey ]]( claude--Semantic reference theory reading journey--3ab06e4e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 October 2025: <Means>$[[ Semantic reference theory reading journey ]]( claude--Semantic reference theory reading journey--3ab06e4e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
