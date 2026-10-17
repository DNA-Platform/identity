import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-logic--b9a017cf/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-logic--b9a017cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[6 September 2025](2025-09-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Logic ]]( claude--Semantic Reference Theory Logic--b9a017cf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 156 exchanges: <Means>$[[ Semantic Reference Theory Logic ]]( claude--Semantic Reference Theory Logic--b9a017cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
