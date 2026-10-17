import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations--7bc663dd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations--7bc663dd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--7bc663dd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 September 2025: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--7bc663dd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
