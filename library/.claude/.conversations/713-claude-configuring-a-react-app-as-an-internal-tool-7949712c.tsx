import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--configuring-a-react-app-as-an-internal-tool--7949712c/.cover.tsx';
import TheSynopsis from './claude--configuring-a-react-app-as-an-internal-tool--7949712c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2025</Part>
        <Dated>
            <Date>[1 April 2025](2025-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Configuring a React App as an Internal Tool ]]( claude--Configuring a React App as an Internal Tool--7949712c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 78 exchanges: <Means>$[[ Configuring a React App as an Internal Tool ]]( claude--Configuring a React App as an Internal Tool--7949712c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
