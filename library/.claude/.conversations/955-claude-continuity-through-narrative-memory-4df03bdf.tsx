import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--continuity-through-narrative-memory--4df03bdf/.cover.tsx';
import TheSynopsis from './claude--continuity-through-narrative-memory--4df03bdf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Continuity through narrative memory ]]( claude--Continuity through narrative memory--4df03bdf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Continuity through narrative memory ]]( claude--Continuity through narrative memory--4df03bdf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
