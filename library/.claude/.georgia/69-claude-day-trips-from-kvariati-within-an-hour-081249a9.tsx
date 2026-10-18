import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--day-trips-from-kvariati-within-an-hour--081249a9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--day-trips-from-kvariati-within-an-hour--081249a9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[9 June 2026](2026-06-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Day trips from Kvariati within an hour ]]( claude--Day trips from Kvariati within an hour--081249a9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 June 2026: <Means>$[[ Day trips from Kvariati within an hour ]]( claude--Day trips from Kvariati within an hour--081249a9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
