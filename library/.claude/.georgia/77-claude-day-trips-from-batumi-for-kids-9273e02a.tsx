import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Day trips from Batumi for kids ]]( claude--Day trips from Batumi for kids--9273e02a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 July 2026: <Means>$[[ Day trips from Batumi for kids ]]( claude--Day trips from Batumi for kids--9273e02a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
