import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-logic--b9a017cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-logic--b9a017cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[4 September 2025](2025-09-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Logic ]]( claude--Semantic Reference Theory Logic--b9a017cf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 September 2025: <Means>$[[ Semantic Reference Theory Logic ]]( claude--Semantic Reference Theory Logic--b9a017cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
