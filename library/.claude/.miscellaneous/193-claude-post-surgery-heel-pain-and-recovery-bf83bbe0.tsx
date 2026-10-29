import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[3 October 2026](2026-10-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Post-surgery heel pain and recovery ]]( claude--Post-surgery heel pain and recovery--bf83bbe0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 October 2026: <Means>$[[ Post-surgery heel pain and recovery ]]( claude--Post-surgery heel pain and recovery--bf83bbe0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
