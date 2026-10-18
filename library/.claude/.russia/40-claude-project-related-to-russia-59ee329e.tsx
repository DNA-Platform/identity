import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--project-related-to-russia--59ee329e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--project-related-to-russia--59ee329e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Project related to Russia ]]( claude--Project related to Russia--59ee329e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 July 2026: <Means>$[[ Project related to Russia ]]( claude--Project related to Russia--59ee329e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
