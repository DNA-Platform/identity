import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--why-wildberries-chose-its-name--6b3d86e9/.cover.tsx';
import TheSynopsis from './claude--why-wildberries-chose-its-name--6b3d86e9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Why Wildberries chose its name ]]( claude--Why Wildberries chose its name--6b3d86e9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Why Wildberries chose its name ]]( claude--Why Wildberries chose its name--6b3d86e9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
