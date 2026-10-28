import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--project-related-to-russia--59ee329e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--project-related-to-russia--59ee329e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[7 July 2026](2026-07-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Project related to Russia ]]( claude--Project related to Russia--59ee329e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 July 2026: <Means>$[[ Project related to Russia ]]( claude--Project related to Russia--59ee329e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
