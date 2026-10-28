import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
