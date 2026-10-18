import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--valium-prescription-status-in-georgian-pharmacies--2d3e7434/.cover.tsx';
import TheSynopsis from '../.conversations/claude--valium-prescription-status-in-georgian-pharmacies--2d3e7434/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Valium prescription status in Georgian pharmacies ]]( claude--Valium prescription status in Georgian pharmacies--2d3e7434 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Valium prescription status in Georgian pharmacies ]]( claude--Valium prescription status in Georgian pharmacies--2d3e7434 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
