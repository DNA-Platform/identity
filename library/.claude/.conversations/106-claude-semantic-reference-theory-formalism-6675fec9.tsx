import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-formalism--6675fec9/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-formalism--6675fec9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[1 October 2025](2025-10-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--6675fec9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 162 exchanges: <Means>$[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--6675fec9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
