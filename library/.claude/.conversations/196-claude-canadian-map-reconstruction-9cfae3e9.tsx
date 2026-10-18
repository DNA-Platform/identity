import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--canadian-map-reconstruction--9cfae3e9/.cover.tsx';
import TheSynopsis from './claude--canadian-map-reconstruction--9cfae3e9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[2 September 2025](2025-09-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Canadian Map Reconstruction ]]( claude--Canadian Map Reconstruction--9cfae3e9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Canadian Map Reconstruction ]]( claude--Canadian Map Reconstruction--9cfae3e9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
