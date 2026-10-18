import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-notation--975edeb9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-notation--975edeb9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[1 September 2025](2025-09-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Notation ]]( claude--Semantic Reference Theory Notation--975edeb9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 September 2025: <Means>$[[ Semantic Reference Theory Notation ]]( claude--Semantic Reference Theory Notation--975edeb9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
