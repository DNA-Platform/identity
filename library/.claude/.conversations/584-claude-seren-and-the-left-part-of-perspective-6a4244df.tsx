import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-the-left-part-of-perspective--6a4244df/.cover.tsx';
import TheSynopsis from './claude--seren-and-the-left-part-of-perspective--6a4244df/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[24 May 2026](2026-05-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; The Left Part of Perspective ]]( claude--Seren &amp; The Left Part of Perspective--6a4244df )</Title>
        <Paragraph>
            <Caption />
            A conversation, 312 exchanges: <Means>$[[ Seren &amp; The Left Part of Perspective ]]( claude--Seren &amp; The Left Part of Perspective--6a4244df )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
