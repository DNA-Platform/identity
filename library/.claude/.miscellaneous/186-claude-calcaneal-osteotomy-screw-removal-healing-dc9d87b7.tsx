import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[31 July 2026](2026-07-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calcaneal osteotomy screw removal healing ]]( claude--Calcaneal osteotomy screw removal healing--dc9d87b7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 July 2026: <Means>$[[ Calcaneal osteotomy screw removal healing ]]( claude--Calcaneal osteotomy screw removal healing--dc9d87b7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
