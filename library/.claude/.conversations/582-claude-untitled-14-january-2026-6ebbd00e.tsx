import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-14-january-2026--6ebbd00e/.cover.tsx';
import TheSynopsis from './claude--untitled-14-january-2026--6ebbd00e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 14 January 2026 ]]( claude--Untitled, 14 January 2026--6ebbd00e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 1 exchange: <Means>$[[ Untitled, 14 January 2026 ]]( claude--Untitled, 14 January 2026--6ebbd00e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
