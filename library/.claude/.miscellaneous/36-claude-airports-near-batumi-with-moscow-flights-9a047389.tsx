import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--airports-near-batumi-with-moscow-flights--9a047389/.cover.tsx';
import TheSynopsis from '../.conversations/claude--airports-near-batumi-with-moscow-flights--9a047389/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Airports near Batumi with Moscow flights ]]( claude--Airports near Batumi with Moscow flights--9a047389 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Airports near Batumi with Moscow flights ]]( claude--Airports near Batumi with Moscow flights--9a047389 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
