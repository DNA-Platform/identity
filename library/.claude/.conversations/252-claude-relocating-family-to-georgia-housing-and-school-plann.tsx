import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.cover.tsx';
import TheSynopsis from './claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Relocating family to Georgia: housing and school planning ]]( claude--Relocating family to Georgia: housing and school planning--8181cd09 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 1 exchange: <Means>$[[ Relocating family to Georgia: housing and school planning ]]( claude--Relocating family to Georgia: housing and school planning--8181cd09 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
