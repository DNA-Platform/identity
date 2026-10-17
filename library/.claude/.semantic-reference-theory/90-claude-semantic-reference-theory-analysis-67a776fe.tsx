import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-analysis--67a776fe/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-analysis--67a776fe/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory analysis ]]( claude--Semantic reference theory analysis--67a776fe )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 October 2025: <Means>$[[ Semantic reference theory analysis ]]( claude--Semantic reference theory analysis--67a776fe )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
