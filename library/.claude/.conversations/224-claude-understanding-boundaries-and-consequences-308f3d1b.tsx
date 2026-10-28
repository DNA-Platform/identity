import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--understanding-boundaries-and-consequences--308f3d1b/.cover.tsx';
import TheSynopsis from './claude--understanding-boundaries-and-consequences--308f3d1b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[20 April 2026](2026-04-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding boundaries and consequences ]]( claude--Understanding boundaries and consequences--308f3d1b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 126 exchanges: <Means>$[[ Understanding boundaries and consequences ]]( claude--Understanding boundaries and consequences--308f3d1b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
