import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './atomic-wallet/.cover.tsx';
import TheSynopsis from './atomic-wallet/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[13 January 2026](2026-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Atomic Wallet ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ Atomic Wallet ]]</Means>.
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
