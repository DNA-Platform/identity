import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.cover.tsx';
import TheSynopsis from './claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[1 October 2025](2025-10-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alku university campus locations in Turkey ]]( claude--Alku university campus locations in Turkey--4f9b6c7b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Alku university campus locations in Turkey ]]( claude--Alku university campus locations in Turkey--4f9b6c7b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
