import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calcaneal osteotomy screw removal healing ]]( claude--Calcaneal osteotomy screw removal healing--dc9d87b7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 July 2026: <Means>$[[ Calcaneal osteotomy screw removal healing ]]( claude--Calcaneal osteotomy screw removal healing--dc9d87b7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
