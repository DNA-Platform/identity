import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--airports-near-batumi-with-moscow-flights--9a047389/.cover.tsx';
import TheSynopsis from './claude--airports-near-batumi-with-moscow-flights--9a047389/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Airports near Batumi with Moscow flights ]]( claude--Airports near Batumi with Moscow flights--9a047389 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Airports near Batumi with Moscow flights ]]( claude--Airports near Batumi with Moscow flights--9a047389 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
