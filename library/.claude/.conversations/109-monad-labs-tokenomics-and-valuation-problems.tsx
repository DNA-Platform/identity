import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './monad-labs-tokenomics-and-valuation-problems/.cover.tsx';
import TheSynopsis from './monad-labs-tokenomics-and-valuation-problems/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Labs tokenomics and valuation problems ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Monad Labs tokenomics and valuation problems ]]</Means>.
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
