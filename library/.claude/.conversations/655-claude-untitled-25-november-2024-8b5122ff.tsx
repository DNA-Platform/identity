import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-25-november-2024--8b5122ff/.cover.tsx';
import TheSynopsis from './claude--untitled-25-november-2024--8b5122ff/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[25 November 2024](2024-11-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 25 November 2024 ]]( claude--Untitled, 25 November 2024--8b5122ff )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Untitled, 25 November 2024 ]]( claude--Untitled, 25 November 2024--8b5122ff )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
