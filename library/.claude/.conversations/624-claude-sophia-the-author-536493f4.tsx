import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--sophia-the-author--536493f4/.cover.tsx';
import TheSynopsis from './claude--sophia-the-author--536493f4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[22 March 2025](2025-03-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sophia the Author ]]( claude--Sophia the Author--536493f4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 124 exchanges: <Means>$[[ Sophia the Author ]]( claude--Sophia the Author--536493f4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
