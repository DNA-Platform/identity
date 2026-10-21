import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-3-april-2025--f8acdaaa/.cover.tsx';
import TheSynopsis from './claude--untitled-3-april-2025--f8acdaaa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[16 May 2026](2026-05-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 3 April 2025 ]]( claude--Untitled, 3 April 2025--f8acdaaa )</Title>
        <Paragraph>
            <Caption />
            A conversation, 60 exchanges: <Means>$[[ Untitled, 3 April 2025 ]]( claude--Untitled, 3 April 2025--f8acdaaa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
