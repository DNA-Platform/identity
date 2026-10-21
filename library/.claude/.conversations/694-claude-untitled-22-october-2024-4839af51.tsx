import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-22-october-2024--4839af51/.cover.tsx';
import TheSynopsis from './claude--untitled-22-october-2024--4839af51/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2025</Part>
        <Dated>
            <Date>[4 April 2025](2025-04-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 22 October 2024 ]]( claude--Untitled, 22 October 2024--4839af51 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Untitled, 22 October 2024 ]]( claude--Untitled, 22 October 2024--4839af51 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
