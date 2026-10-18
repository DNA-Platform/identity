import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--day-trips-from-batumi-for-kids--9273e02a/.cover.tsx';
import TheSynopsis from './claude--day-trips-from-batumi-for-kids--9273e02a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[11 July 2026](2026-07-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Day trips from Batumi for kids ]]( claude--Day trips from Batumi for kids--9273e02a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Day trips from Batumi for kids ]]( claude--Day trips from Batumi for kids--9273e02a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
