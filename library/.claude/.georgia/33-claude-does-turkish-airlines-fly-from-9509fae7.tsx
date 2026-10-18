import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--does-turkish-airlines-fly-from--9509fae7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--does-turkish-airlines-fly-from--9509fae7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Does Turkish Airlines fly from... ]]( claude--Does Turkish Airlines fly from......--9509fae7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Does Turkish Airlines fly from... ]]( claude--Does Turkish Airlines fly from......--9509fae7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
