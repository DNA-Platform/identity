import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './hedging-geopolitical-oil-disruption-with-us-supply-alternati/.cover.tsx';
import TheSynopsis from './hedging-geopolitical-oil-disruption-with-us-supply-alternati/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[7 April 2026](2026-04-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hedging geopolitical oil disruption with US supply alternatives ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 72 exchanges: <Means>$[[ Hedging geopolitical oil disruption with US supply alternatives ]]</Means>.
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
