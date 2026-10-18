import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-formalism--6675fec9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-formalism--6675fec9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[30 September 2025](2025-09-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--6675fec9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 September 2025: <Means>$[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--6675fec9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
