import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--indexing-and-mapping-natural-earth-datasets--32d72eac/.cover.tsx';
import TheSynopsis from './claude--indexing-and-mapping-natural-earth-datasets--32d72eac/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2025</Part>
        <Dated>
            <Date>[2 April 2025](2025-04-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Indexing and Mapping Natural Earth Datasets ]]( claude--Indexing and Mapping Natural Earth Datasets--32d72eac )</Title>
        <Paragraph>
            <Caption />
            A conversation, 70 exchanges: <Means>$[[ Indexing and Mapping Natural Earth Datasets ]]( claude--Indexing and Mapping Natural Earth Datasets--32d72eac )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
