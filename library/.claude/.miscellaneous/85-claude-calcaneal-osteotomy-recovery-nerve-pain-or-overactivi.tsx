import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--calcaneal-osteotomy-recovery-nerve-pain-or-overactivity--dc4dd3ab/.cover.tsx';
import TheSynopsis from '../.conversations/claude--calcaneal-osteotomy-recovery-nerve-pain-or-overactivity--dc4dd3ab/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calcaneal osteotomy recovery: nerve pain or overactivity ]]( claude--Calcaneal osteotomy recovery: nerve pain or overactivity--dc4dd3ab )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Calcaneal osteotomy recovery: nerve pain or overactivity ]]( claude--Calcaneal osteotomy recovery: nerve pain or overactivity--dc4dd3ab )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
