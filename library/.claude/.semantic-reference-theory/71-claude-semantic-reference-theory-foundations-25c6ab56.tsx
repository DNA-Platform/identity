import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations--25c6ab56/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations--25c6ab56/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[26 September 2025](2025-09-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--25c6ab56 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 September 2025: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--25c6ab56 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
