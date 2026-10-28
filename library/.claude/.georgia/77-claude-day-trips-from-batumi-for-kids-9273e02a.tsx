import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[10 July 2026](2026-07-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Day trips from Batumi for kids ]]( claude--Day trips from Batumi for kids--9273e02a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 July 2026: <Means>$[[ Day trips from Batumi for kids ]]( claude--Day trips from Batumi for kids--9273e02a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
