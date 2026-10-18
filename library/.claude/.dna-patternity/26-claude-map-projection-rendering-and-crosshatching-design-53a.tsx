import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Map projection rendering and crosshatching design ]]( claude--Map projection rendering and crosshatching design--53a8a0f0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 March 2026: <Means>$[[ Map projection rendering and crosshatching design ]]( claude--Map projection rendering and crosshatching design--53a8a0f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
