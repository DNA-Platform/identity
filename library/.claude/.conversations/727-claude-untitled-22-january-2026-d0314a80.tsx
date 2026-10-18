import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-22-january-2026--d0314a80/.cover.tsx';
import TheSynopsis from './claude--untitled-22-january-2026--d0314a80/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[16 May 2026](2026-05-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 22 January 2026 ]]( claude--Untitled, 22 January 2026--d0314a80 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 36 exchanges: <Means>$[[ Untitled, 22 January 2026 ]]( claude--Untitled, 22 January 2026--d0314a80 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
