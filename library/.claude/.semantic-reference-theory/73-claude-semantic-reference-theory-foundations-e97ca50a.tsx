import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations--e97ca50a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations--e97ca50a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--e97ca50a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 September 2025: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--e97ca50a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
