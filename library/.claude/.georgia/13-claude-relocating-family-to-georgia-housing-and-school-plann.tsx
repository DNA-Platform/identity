import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.cover.tsx';
import TheSynopsis from '../.conversations/claude--relocating-family-to-georgia-housing-and-school-planning--8181cd09/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Relocating family to Georgia: housing and school planning ]]( claude--Relocating family to Georgia: housing and school planning--8181cd09 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Relocating family to Georgia: housing and school planning ]]( claude--Relocating family to Georgia: housing and school planning--8181cd09 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
