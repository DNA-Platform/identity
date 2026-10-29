import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-documentation--b2566ccc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-documentation--b2566ccc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
