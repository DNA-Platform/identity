import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-12-june-2026--7bd1f6ee/.cover.tsx';
import TheSynopsis from './claude--untitled-12-june-2026--7bd1f6ee/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 12 June 2026 ]]( claude--Untitled, 12 June 2026--7bd1f6ee )</Title>
        <Paragraph>
            <Caption />
            A conversation, 177 exchanges: <Means>$[[ Untitled, 12 June 2026 ]]( claude--Untitled, 12 June 2026--7bd1f6ee )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
