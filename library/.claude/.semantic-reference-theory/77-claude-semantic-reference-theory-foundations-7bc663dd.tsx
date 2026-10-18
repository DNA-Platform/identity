import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations--7bc663dd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations--7bc663dd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[22 September 2025](2025-09-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--7bc663dd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 September 2025: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--7bc663dd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
