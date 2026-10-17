import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './sunny-kings-innovations-in-ton-and-monad/.cover.tsx';
import TheSynopsis from './sunny-kings-innovations-in-ton-and-monad/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sunny King's innovations in TON and Monad ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Sunny King's innovations in TON and Monad ]]</Means>.
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
