import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--cathy-libraries--b5de0287/.cover.tsx';
import TheSynopsis from './claude--cathy-libraries--b5de0287/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[17 September 2026](2026-09-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cathy &gt; Libraries ]]( claude--Cathy &gt; Libraries--b5de0287 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 56 exchanges: <Means>$[[ Cathy &gt; Libraries ]]( claude--Cathy &gt; Libraries--b5de0287 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
