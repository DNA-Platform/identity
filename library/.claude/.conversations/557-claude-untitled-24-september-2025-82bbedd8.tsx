import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-24-september-2025--82bbedd8/.cover.tsx';
import TheSynopsis from './claude--untitled-24-september-2025--82bbedd8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[24 September 2025](2025-09-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 24 September 2025 ]]( claude--Untitled, 24 September 2025--82bbedd8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Untitled, 24 September 2025 ]]( claude--Untitled, 24 September 2025--82bbedd8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
