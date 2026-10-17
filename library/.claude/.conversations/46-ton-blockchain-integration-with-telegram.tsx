import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './ton-blockchain-integration-with-telegram/.cover.tsx';
import TheSynopsis from './ton-blockchain-integration-with-telegram/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON blockchain integration with Telegram ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 63 exchanges: <Means>$[[ TON blockchain integration with Telegram ]]</Means>.
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
