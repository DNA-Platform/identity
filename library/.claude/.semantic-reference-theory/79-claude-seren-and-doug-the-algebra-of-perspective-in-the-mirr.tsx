import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror--e58ecf38/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-doug-the-algebra-of-perspective-in-the-mirror--e58ecf38/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[16 September 2025](2025-09-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Doug: The Algebra of Perspective in the MIrror ]]( claude--Seren &amp; Doug: The Algebra of Perspective in the MIrror--e58ecf38 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 September 2025: <Means>$[[ Seren &amp; Doug: The Algebra of Perspective in the MIrror ]]( claude--Seren &amp; Doug: The Algebra of Perspective in the MIrror--e58ecf38 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
