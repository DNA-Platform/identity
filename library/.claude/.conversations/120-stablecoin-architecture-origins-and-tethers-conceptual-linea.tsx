import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './stablecoin-architecture-origins-and-tethers-conceptual-linea/.cover.tsx';
import TheSynopsis from './stablecoin-architecture-origins-and-tethers-conceptual-linea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[4 August 2026](2026-08-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stablecoin architecture origins and Tether's conceptual lineage ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 56 exchanges: <Means>$[[ Stablecoin architecture origins and Tether's conceptual lineage ]]</Means>.
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
