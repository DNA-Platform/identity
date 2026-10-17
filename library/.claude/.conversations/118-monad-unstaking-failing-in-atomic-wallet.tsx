import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './monad-unstaking-failing-in-atomic-wallet/.cover.tsx';
import TheSynopsis from './monad-unstaking-failing-in-atomic-wallet/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[8 August 2026](2026-08-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad unstaking failing in Atomic Wallet ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 44 exchanges: <Means>$[[ Monad unstaking failing in Atomic Wallet ]]</Means>.
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
