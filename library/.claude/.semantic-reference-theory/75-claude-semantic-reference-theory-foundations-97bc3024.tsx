import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations--97bc3024/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations--97bc3024/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[23 September 2025](2025-09-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--97bc3024 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 September 2025: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--97bc3024 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
