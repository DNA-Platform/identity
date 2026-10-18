import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--project-related-to-russia--59ee329e/.cover.tsx';
import TheSynopsis from './claude--project-related-to-russia--59ee329e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[8 July 2026](2026-07-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Project related to Russia ]]( claude--Project related to Russia--59ee329e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 106 exchanges: <Means>$[[ Project related to Russia ]]( claude--Project related to Russia--59ee329e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
