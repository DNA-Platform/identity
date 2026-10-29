import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--calcaneal-osteotomy-recovery-nerve-pain-or-overactivity--dc4dd3ab/.cover.tsx';
import TheSynopsis from '../.conversations/claude--calcaneal-osteotomy-recovery-nerve-pain-or-overactivity--dc4dd3ab/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
