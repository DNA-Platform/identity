import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--fiverr-chat-pdf-conversion--7ea7a502/.cover.tsx';
import TheSynopsis from './claude--fiverr-chat-pdf-conversion--7ea7a502/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[27 August 2025](2025-08-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fiverr Chat PDF Conversion ]]( claude--Fiverr Chat PDF Conversion--7ea7a502 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Fiverr Chat PDF Conversion ]]( claude--Fiverr Chat PDF Conversion--7ea7a502 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
