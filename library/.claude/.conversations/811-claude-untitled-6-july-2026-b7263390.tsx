import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-6-july-2026--b7263390/.cover.tsx';
import TheSynopsis from './claude--untitled-6-july-2026--b7263390/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 6 July 2026 ]]( claude--Untitled, 6 July 2026--b7263390 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Untitled, 6 July 2026 ]]( claude--Untitled, 6 July 2026--b7263390 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
