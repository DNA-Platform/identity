import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tesla-roadster-and-robots--5730d0e7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tesla-roadster-and-robots--5730d0e7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tesla roadster and robots ]]( claude--Tesla roadster and robots--5730d0e7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 October 2026: <Means>$[[ Tesla roadster and robots ]]( claude--Tesla roadster and robots--5730d0e7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
