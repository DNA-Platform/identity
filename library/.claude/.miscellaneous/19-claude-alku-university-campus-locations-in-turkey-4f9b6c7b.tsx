import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[1 October 2025](2025-10-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alku university campus locations in Turkey ]]( claude--Alku university campus locations in Turkey--4f9b6c7b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 October 2025: <Means>$[[ Alku university campus locations in Turkey ]]( claude--Alku university campus locations in Turkey--4f9b6c7b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
