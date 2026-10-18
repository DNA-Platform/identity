import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--taxes-2025--0702f19d/.cover.tsx';
import TheSynopsis from './claude--taxes-2025--0702f19d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[20 May 2026](2026-05-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Taxes 2025 ]]( claude--Taxes 2025--0702f19d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 461 exchanges: <Means>$[[ Taxes 2025 ]]( claude--Taxes 2025--0702f19d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
