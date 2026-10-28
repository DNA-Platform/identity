import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.cover.tsx';
import TheSynopsis from './claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[12 August 2026](2026-08-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calcaneal osteotomy screw removal healing ]]( claude--Calcaneal osteotomy screw removal healing--dc9d87b7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Calcaneal osteotomy screw removal healing ]]( claude--Calcaneal osteotomy screw removal healing--dc9d87b7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
