import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--structured-english-grammar-learning-curriculum--72ed312f/.cover.tsx';
import TheSynopsis from './claude--structured-english-grammar-learning-curriculum--72ed312f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Structured English grammar learning curriculum ]]( claude--Structured English grammar learning curriculum--72ed312f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Structured English grammar learning curriculum ]]( claude--Structured English grammar learning curriculum--72ed312f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
