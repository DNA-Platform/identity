import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './monad-valuation/.cover.tsx';
import TheSynopsis from './monad-valuation/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[10 January 2026](2026-01-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Valuation ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Monad Valuation ]]</Means>.
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
