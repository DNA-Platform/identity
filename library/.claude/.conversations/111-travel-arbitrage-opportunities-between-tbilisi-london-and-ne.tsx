import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './travel-arbitrage-opportunities-between-tbilisi-london-and-ne/.cover.tsx';
import TheSynopsis from './travel-arbitrage-opportunities-between-tbilisi-london-and-ne/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[27 August 2026](2026-08-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Travel arbitrage opportunities between Tbilisi, London, and New York ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Travel arbitrage opportunities between Tbilisi, London, and New York ]]</Means>.
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
