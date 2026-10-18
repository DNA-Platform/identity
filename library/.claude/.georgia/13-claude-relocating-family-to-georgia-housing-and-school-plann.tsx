import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.cover.tsx';
import TheSynopsis from '../.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Relocating family to Georgia: housing and school planning ]]( claude--Relocating family to Georgia: housing and school planning--8181cd09 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Relocating family to Georgia: housing and school planning ]]( claude--Relocating family to Georgia: housing and school planning--8181cd09 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
