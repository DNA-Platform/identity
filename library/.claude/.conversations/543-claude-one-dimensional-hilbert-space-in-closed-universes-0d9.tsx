import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--one-dimensional-hilbert-space-in-closed-universes--0d92dc7c/.cover.tsx';
import TheSynopsis from './claude--one-dimensional-hilbert-space-in-closed-universes--0d92dc7c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[4 April 2026](2026-04-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ One-dimensional Hilbert space in closed universes ]]( claude--One-dimensional Hilbert space in closed universes--0d92dc7c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ One-dimensional Hilbert space in closed universes ]]( claude--One-dimensional Hilbert space in closed universes--0d92dc7c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
