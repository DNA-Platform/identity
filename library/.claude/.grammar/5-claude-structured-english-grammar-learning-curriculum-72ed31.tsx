import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Structured English grammar learning curriculum ]]( claude--Structured English grammar learning curriculum--72ed312f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Structured English grammar learning curriculum ]]( claude--Structured English grammar learning curriculum--72ed312f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
