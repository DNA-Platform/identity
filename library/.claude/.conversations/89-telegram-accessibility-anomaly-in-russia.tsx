import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './telegram-accessibility-anomaly-in-russia/.cover.tsx';
import TheSynopsis from './telegram-accessibility-anomaly-in-russia/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[17 April 2026](2026-04-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram accessibility anomaly in Russia ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Telegram accessibility anomaly in Russia ]]</Means>.
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
