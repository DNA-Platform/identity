import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-documentation--b2566ccc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-documentation--b2566ccc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[29 September 2025](2025-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory documentation ]]( claude--Semantic reference theory documentation--b2566ccc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 September 2025: <Means>$[[ Semantic reference theory documentation ]]( claude--Semantic reference theory documentation--b2566ccc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
