import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alku university campus locations in Turkey ]]( claude--Alku university campus locations in Turkey--4f9b6c7b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 October 2025: <Means>$[[ Alku university campus locations in Turkey ]]( claude--Alku university campus locations in Turkey--4f9b6c7b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
