import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--calcaneal-osteotomy-recovery-nerve-pain-or-overactivity--dc4dd3ab/.cover.tsx';
import TheSynopsis from '../.conversations/claude--calcaneal-osteotomy-recovery-nerve-pain-or-overactivity--dc4dd3ab/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calcaneal osteotomy recovery: nerve pain or overactivity ]]( claude--Calcaneal osteotomy recovery: nerve pain or overactivity--dc4dd3ab )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Calcaneal osteotomy recovery: nerve pain or overactivity ]]( claude--Calcaneal osteotomy recovery: nerve pain or overactivity--dc4dd3ab )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
