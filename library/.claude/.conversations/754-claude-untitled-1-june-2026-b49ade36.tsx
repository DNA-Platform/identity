import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-1-june-2026--b49ade36/.cover.tsx';
import TheSynopsis from './claude--untitled-1-june-2026--b49ade36/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 1 June 2026 ]]( claude--Untitled, 1 June 2026--b49ade36 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ Untitled, 1 June 2026 ]]( claude--Untitled, 1 June 2026--b49ade36 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
