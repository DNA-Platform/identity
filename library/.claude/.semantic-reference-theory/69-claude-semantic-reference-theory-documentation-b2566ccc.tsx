import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-documentation--b2566ccc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-documentation--b2566ccc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory documentation ]]( claude--Semantic reference theory documentation--b2566ccc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 September 2025: <Means>$[[ Semantic reference theory documentation ]]( claude--Semantic reference theory documentation--b2566ccc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
