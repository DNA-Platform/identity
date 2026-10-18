import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--read-with-kamil--36ca3d83/.cover.tsx';
import TheSynopsis from '../.conversations/claude--read-with-kamil--36ca3d83/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Read with Kamil ]]( claude--Read with Kamil--36ca3d83 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Read with Kamil ]]( claude--Read with Kamil--36ca3d83 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
