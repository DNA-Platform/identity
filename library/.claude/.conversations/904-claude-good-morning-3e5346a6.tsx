import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--good-morning--3e5346a6/.cover.tsx';
import TheSynopsis from './claude--good-morning--3e5346a6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[18 September 2026](2026-09-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Good Morning! ]]( claude--Good Morning!--3e5346a6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 44 exchanges: <Means>$[[ Good Morning! ]]( claude--Good Morning!--3e5346a6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
