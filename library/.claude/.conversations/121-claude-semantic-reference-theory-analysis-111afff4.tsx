import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-analysis--111afff4/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-analysis--111afff4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[7 September 2025](2025-09-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Analysis ]]( claude--Semantic Reference Theory Analysis--111afff4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Semantic Reference Theory Analysis ]]( claude--Semantic Reference Theory Analysis--111afff4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
