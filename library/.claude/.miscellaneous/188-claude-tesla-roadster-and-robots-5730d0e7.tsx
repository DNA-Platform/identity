import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--tesla-roadster-and-robots--5730d0e7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tesla-roadster-and-robots--5730d0e7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[16 October 2026](2026-10-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tesla roadster and robots ]]( claude--Tesla roadster and robots--5730d0e7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 October 2026: <Means>$[[ Tesla roadster and robots ]]( claude--Tesla roadster and robots--5730d0e7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
