import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-22-september-2025--f8f024ea/.cover.tsx';
import TheSynopsis from './claude--untitled-22-september-2025--f8f024ea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[22 September 2025](2025-09-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 22 September 2025 ]]( claude--Untitled, 22 September 2025--f8f024ea )</Title>
        <Paragraph>
            <Caption />
            A conversation, 1 exchange: <Means>$[[ Untitled, 22 September 2025 ]]( claude--Untitled, 22 September 2025--f8f024ea )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
