import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding boundaries and consequences ]]( claude--Understanding boundaries and consequences--308f3d1b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 April 2026: <Means>$[[ Understanding boundaries and consequences ]]( claude--Understanding boundaries and consequences--308f3d1b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
