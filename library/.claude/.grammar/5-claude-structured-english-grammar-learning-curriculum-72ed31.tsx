import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Structured English grammar learning curriculum ]]( claude--Structured English grammar learning curriculum--72ed312f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Structured English grammar learning curriculum ]]( claude--Structured English grammar learning curriculum--72ed312f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
