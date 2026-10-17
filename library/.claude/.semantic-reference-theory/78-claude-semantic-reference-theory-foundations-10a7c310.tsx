import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations--10a7c310/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations--10a7c310/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--10a7c310 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 September 2025: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--10a7c310 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
