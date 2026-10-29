import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations--e97ca50a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations--e97ca50a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[24 September 2025](2025-09-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--e97ca50a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 September 2025: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--e97ca50a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
