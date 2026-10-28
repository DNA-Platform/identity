import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/.cover.tsx';
import TheSynopsis from './claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[15 March 2026](2026-03-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Map projection rendering and crosshatching design ]]( claude--Map projection rendering and crosshatching design--53a8a0f0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 305 exchanges: <Means>$[[ Map projection rendering and crosshatching design ]]( claude--Map projection rendering and crosshatching design--53a8a0f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
