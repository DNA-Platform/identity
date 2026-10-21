import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
