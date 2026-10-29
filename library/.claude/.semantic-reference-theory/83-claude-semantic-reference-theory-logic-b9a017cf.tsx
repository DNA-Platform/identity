import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-logic--b9a017cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-logic--b9a017cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
