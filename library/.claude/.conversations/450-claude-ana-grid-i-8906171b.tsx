import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--ana-grid-i--8906171b/.cover.tsx';
import TheSynopsis from './claude--ana-grid-i--8906171b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[17 March 2026](2026-03-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana Grid I ]]( claude--Ana Grid I--8906171b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 51 exchanges: <Means>$[[ Ana Grid I ]]( claude--Ana Grid I--8906171b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
