import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-analysis--0eaf30c0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-analysis--0eaf30c0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[6 October 2025](2025-10-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory analysis ]]( claude--Semantic reference theory analysis--0eaf30c0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 October 2025: <Means>$[[ Semantic reference theory analysis ]]( claude--Semantic reference theory analysis--0eaf30c0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
