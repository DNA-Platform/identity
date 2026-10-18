import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--day-trips-from-kvariati-within-an-hour--081249a9/.cover.tsx';
import TheSynopsis from './claude--day-trips-from-kvariati-within-an-hour--081249a9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[10 June 2026](2026-06-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Day trips from Kvariati within an hour ]]( claude--Day trips from Kvariati within an hour--081249a9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 24 exchanges: <Means>$[[ Day trips from Kvariati within an hour ]]( claude--Day trips from Kvariati within an hour--081249a9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
