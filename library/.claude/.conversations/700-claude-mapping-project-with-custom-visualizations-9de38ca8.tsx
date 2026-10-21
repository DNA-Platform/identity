import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--mapping-project-with-custom-visualizations--9de38ca8/.cover.tsx';
import TheSynopsis from './claude--mapping-project-with-custom-visualizations--9de38ca8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2025</Part>
        <Dated>
            <Date>[1 April 2025](2025-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Mapping Project with Custom Visualizations ]]( claude--Mapping Project with Custom Visualizations--9de38ca8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 72 exchanges: <Means>$[[ Mapping Project with Custom Visualizations ]]( claude--Mapping Project with Custom Visualizations--9de38ca8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
