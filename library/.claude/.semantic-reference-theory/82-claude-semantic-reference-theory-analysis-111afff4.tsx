import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-analysis--111afff4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-analysis--111afff4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[7 September 2025](2025-09-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Analysis ]]( claude--Semantic Reference Theory Analysis--111afff4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 September 2025: <Means>$[[ Semantic Reference Theory Analysis ]]( claude--Semantic Reference Theory Analysis--111afff4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
