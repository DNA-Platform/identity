import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-formalism--d562cb1c/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-formalism--d562cb1c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[8 October 2025](2025-10-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--d562cb1c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 58 exchanges: <Means>$[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--d562cb1c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
