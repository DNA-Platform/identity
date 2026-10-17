import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-foundations--97bc3024/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-foundations--97bc3024/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[23 September 2025](2025-09-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--97bc3024 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 132 exchanges: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--97bc3024 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
