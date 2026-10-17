import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-notation--975edeb9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-notation--975edeb9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Notation ]]( claude--Semantic Reference Theory Notation--975edeb9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 September 2025: <Means>$[[ Semantic Reference Theory Notation ]]( claude--Semantic Reference Theory Notation--975edeb9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
