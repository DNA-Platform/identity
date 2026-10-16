import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './metalogical-subjectivity/.cover.tsx';
import TheSynopsis from './metalogical-subjectivity/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[23 March 2025](2025-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metalogical Subjectivity ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 192 exchanges: <Means>$[[ Metalogical Subjectivity ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
        <Append
            identifier="import"
            type=".json"
        >
            ![[ import.json ]]
        </Append>
    </Chapter>
);
