import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Post-surgery heel pain and recovery ]]( claude--Post-surgery heel pain and recovery--bf83bbe0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 October 2026: <Means>$[[ Post-surgery heel pain and recovery ]]( claude--Post-surgery heel pain and recovery--bf83bbe0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
