import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-28-september-2024--f3a2a24f/.cover.tsx';
import TheSynopsis from './claude--untitled-28-september-2024--f3a2a24f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2024</Part>
        <Dated>
            <Date>[11 October 2024](2024-10-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 28 September 2024 ]]( claude--Untitled, 28 September 2024--f3a2a24f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Untitled, 28 September 2024 ]]( claude--Untitled, 28 September 2024--f3a2a24f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
