import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './russias-telegram-throttling-via-tspu-infrastructure/.cover.tsx';
import TheSynopsis from './russias-telegram-throttling-via-tspu-infrastructure/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram throttling via TSPU infrastructure ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 61 exchanges: <Means>$[[ Russia's Telegram throttling via TSPU infrastructure ]]</Means>.
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
