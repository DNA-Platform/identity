import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './perpetual-swaps-and-the-unbounded-loss-problem/.cover.tsx';
import TheSynopsis from './perpetual-swaps-and-the-unbounded-loss-problem/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[6 April 2026](2026-04-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Perpetual swaps and the unbounded loss problem ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Perpetual swaps and the unbounded loss problem ]]</Means>.
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
