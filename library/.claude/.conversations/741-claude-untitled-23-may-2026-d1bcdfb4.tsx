import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-23-may-2026--d1bcdfb4/.cover.tsx';
import TheSynopsis from './claude--untitled-23-may-2026--d1bcdfb4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[23 May 2026](2026-05-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 23 May 2026 ]]( claude--Untitled, 23 May 2026--d1bcdfb4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Untitled, 23 May 2026 ]]( claude--Untitled, 23 May 2026--d1bcdfb4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
