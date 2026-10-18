import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--why-wildberries-chose-its-name--6b3d86e9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--why-wildberries-chose-its-name--6b3d86e9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Why Wildberries chose its name ]]( claude--Why Wildberries chose its name--6b3d86e9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Why Wildberries chose its name ]]( claude--Why Wildberries chose its name--6b3d86e9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
