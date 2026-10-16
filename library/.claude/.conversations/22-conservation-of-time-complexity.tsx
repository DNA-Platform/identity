import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './conservation-of-time-complexity/.cover.tsx';
import TheSynopsis from './conservation-of-time-complexity/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[22 March 2025](2025-03-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Conservation of Time Complexity ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 122 exchanges: <Means>$[[ Conservation of Time Complexity ]]</Means>.
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
