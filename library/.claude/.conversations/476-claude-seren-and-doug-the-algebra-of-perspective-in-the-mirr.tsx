import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror--e58ecf38/.cover.tsx';
import TheSynopsis from './claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror--e58ecf38/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[20 September 2025](2025-09-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Doug: The Algebra of Perspective in the MIrror ]]( claude--Seren &amp; Doug: The Algebra of Perspective in the MIrror--e58ecf38 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 152 exchanges: <Means>$[[ Seren &amp; Doug: The Algebra of Perspective in the MIrror ]]( claude--Seren &amp; Doug: The Algebra of Perspective in the MIrror--e58ecf38 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
