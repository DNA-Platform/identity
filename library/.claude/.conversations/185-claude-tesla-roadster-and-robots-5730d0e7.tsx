import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tesla-roadster-and-robots--5730d0e7/.cover.tsx';
import TheSynopsis from './claude--tesla-roadster-and-robots--5730d0e7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[16 October 2026](2026-10-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tesla roadster and robots ]]( claude--Tesla roadster and robots--5730d0e7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Tesla roadster and robots ]]( claude--Tesla roadster and robots--5730d0e7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
