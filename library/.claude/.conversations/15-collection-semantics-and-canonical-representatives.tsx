import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './collection-semantics-and-canonical-representatives/.cover.tsx';
import TheSynopsis from './collection-semantics-and-canonical-representatives/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[24 August 2026](2026-08-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collection semantics and canonical representatives ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ Collection semantics and canonical representatives ]]</Means>.
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
