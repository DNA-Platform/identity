import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--messages-getting-no-response--7b79c125/.cover.tsx';
import TheSynopsis from './claude--messages-getting-no-response--7b79c125/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[21 February 2026](2026-02-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Messages getting no response ]]( claude--Messages getting no response--7b79c125 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 1 exchange: <Means>$[[ Messages getting no response ]]( claude--Messages getting no response--7b79c125 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
