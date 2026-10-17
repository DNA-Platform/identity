import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-foundations--7bc663dd/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-foundations--7bc663dd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[22 September 2025](2025-09-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--7bc663dd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 74 exchanges: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--7bc663dd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
