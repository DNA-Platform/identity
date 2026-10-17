import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-analysis--111afff4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-analysis--111afff4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Analysis ]]( claude--Semantic Reference Theory Analysis--111afff4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 September 2025: <Means>$[[ Semantic Reference Theory Analysis ]]( claude--Semantic Reference Theory Analysis--111afff4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
