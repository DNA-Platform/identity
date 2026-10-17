import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './telegram-ton-foundation-and-ftx-connections/.cover.tsx';
import TheSynopsis from './telegram-ton-foundation-and-ftx-connections/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram, TON Foundation, and FTX connections ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Telegram, TON Foundation, and FTX connections ]]</Means>.
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
