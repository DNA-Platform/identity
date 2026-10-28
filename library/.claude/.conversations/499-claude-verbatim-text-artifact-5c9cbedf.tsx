import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--verbatim-text-artifact--5c9cbedf/.cover.tsx';
import TheSynopsis from './claude--verbatim-text-artifact--5c9cbedf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[27 October 2025](2025-10-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Verbatim text artifact ]]( claude--Verbatim text artifact--5c9cbedf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 15 exchanges: <Means>$[[ Verbatim text artifact ]]( claude--Verbatim text artifact--5c9cbedf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
