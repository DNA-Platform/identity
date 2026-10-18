import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-16-april-2026--d8bfb7de/.cover.tsx';
import TheSynopsis from './claude--untitled-16-april-2026--d8bfb7de/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 16 April 2026 ]]( claude--Untitled, 16 April 2026--d8bfb7de )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Untitled, 16 April 2026 ]]( claude--Untitled, 16 April 2026--d8bfb7de )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
