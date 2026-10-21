import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-4-april-2025--2ea23691/.cover.tsx';
import TheSynopsis from './claude--untitled-4-april-2025--2ea23691/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[16 May 2026](2026-05-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 4 April 2025 ]]( claude--Untitled, 4 April 2025--2ea23691 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 43 exchanges: <Means>$[[ Untitled, 4 April 2025 ]]( claude--Untitled, 4 April 2025--2ea23691 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
