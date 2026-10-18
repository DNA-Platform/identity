import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-19-may-2026--4cd68ad1/.cover.tsx';
import TheSynopsis from './claude--untitled-19-may-2026--4cd68ad1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[22 May 2026](2026-05-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 19 May 2026 ]]( claude--Untitled, 19 May 2026--4cd68ad1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Untitled, 19 May 2026 ]]( claude--Untitled, 19 May 2026--4cd68ad1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
