import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--maintaining-bidirectional-documentation-code-links-at-scale--02835ba9/.cover.tsx';
import TheSynopsis from './claude--maintaining-bidirectional-documentation-code-links-at-scale--02835ba9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Maintaining bidirectional documentation-code links at scale ]]( claude--Maintaining bidirectional documentation-code links at scale--02835ba9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Maintaining bidirectional documentation-code links at scale ]]( claude--Maintaining bidirectional documentation-code links at scale--02835ba9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
