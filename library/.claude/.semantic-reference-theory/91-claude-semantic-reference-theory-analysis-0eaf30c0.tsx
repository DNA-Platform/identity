import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-analysis--0eaf30c0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-analysis--0eaf30c0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory analysis ]]( claude--Semantic reference theory analysis--0eaf30c0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 October 2025: <Means>$[[ Semantic reference theory analysis ]]( claude--Semantic reference theory analysis--0eaf30c0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
