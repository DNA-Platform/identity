import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-24-august-2026--5c5077be/.cover.tsx';
import TheSynopsis from './claude--untitled-24-august-2026--5c5077be/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[2 September 2026](2026-09-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 24 August 2026 ]]( claude--Untitled, 24 August 2026--5c5077be )</Title>
        <Paragraph>
            <Caption />
            A conversation, 15 exchanges: <Means>$[[ Untitled, 24 August 2026 ]]( claude--Untitled, 24 August 2026--5c5077be )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
