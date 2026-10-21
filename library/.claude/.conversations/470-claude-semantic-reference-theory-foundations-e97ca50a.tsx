import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-foundations--e97ca50a/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-foundations--e97ca50a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[24 September 2025](2025-09-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--e97ca50a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 98 exchanges: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--e97ca50a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
