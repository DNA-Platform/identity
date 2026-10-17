import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './bitcoins-decline-despite-institutional-adoption/.cover.tsx';
import TheSynopsis from './bitcoins-decline-despite-institutional-adoption/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin's decline despite institutional adoption ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Bitcoin's decline despite institutional adoption ]]</Means>.
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
