import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.cover.tsx';
import TheSynopsis from './claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Post-surgery heel pain and recovery ]]( claude--Post-surgery heel pain and recovery--bf83bbe0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Post-surgery heel pain and recovery ]]( claude--Post-surgery heel pain and recovery--bf83bbe0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
