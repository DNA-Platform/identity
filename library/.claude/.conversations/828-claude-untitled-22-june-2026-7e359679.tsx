import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-22-june-2026--7e359679/.cover.tsx';
import TheSynopsis from './claude--untitled-22-june-2026--7e359679/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 22 June 2026 ]]( claude--Untitled, 22 June 2026--7e359679 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Untitled, 22 June 2026 ]]( claude--Untitled, 22 June 2026--7e359679 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
