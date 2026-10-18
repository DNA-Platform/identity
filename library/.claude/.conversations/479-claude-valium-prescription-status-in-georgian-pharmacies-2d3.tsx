import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--valium-prescription-status-in-georgian-pharmacies--2d3e7434/.cover.tsx';
import TheSynopsis from './claude--valium-prescription-status-in-georgian-pharmacies--2d3e7434/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Valium prescription status in Georgian pharmacies ]]( claude--Valium prescription status in Georgian pharmacies--2d3e7434 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Valium prescription status in Georgian pharmacies ]]( claude--Valium prescription status in Georgian pharmacies--2d3e7434 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
