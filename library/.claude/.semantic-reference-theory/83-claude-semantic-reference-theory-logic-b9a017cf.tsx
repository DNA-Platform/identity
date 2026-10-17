import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-logic--b9a017cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-logic--b9a017cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Logic ]]( claude--Semantic Reference Theory Logic--b9a017cf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 September 2025: <Means>$[[ Semantic Reference Theory Logic ]]( claude--Semantic Reference Theory Logic--b9a017cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
