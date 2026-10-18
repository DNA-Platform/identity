import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--canadian-map-reconstruction--9cfae3e9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--canadian-map-reconstruction--9cfae3e9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Canadian Map Reconstruction ]]( claude--Canadian Map Reconstruction--9cfae3e9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 September 2025: <Means>$[[ Canadian Map Reconstruction ]]( claude--Canadian Map Reconstruction--9cfae3e9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
