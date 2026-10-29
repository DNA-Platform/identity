import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations--10a7c310/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations--10a7c310/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[20 September 2025](2025-09-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--10a7c310 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 September 2025: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--10a7c310 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
