import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/.cover.tsx';
import TheSynopsis from './claude--formal-mathematics-and-conversational-assistance--7c2ed8e9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[24 March 2025](2025-03-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formal Mathematics and Conversational Assistance ]]( claude--Formal Mathematics and Conversational Assistance--7c2ed8e9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 154 exchanges: <Means>$[[ Formal Mathematics and Conversational Assistance ]]( claude--Formal Mathematics and Conversational Assistance--7c2ed8e9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
