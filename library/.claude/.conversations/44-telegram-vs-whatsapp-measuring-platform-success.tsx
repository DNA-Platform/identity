import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './telegram-vs-whatsapp-measuring-platform-success/.cover.tsx';
import TheSynopsis from './telegram-vs-whatsapp-measuring-platform-success/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram vs WhatsApp: measuring platform success ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 61 exchanges: <Means>$[[ Telegram vs WhatsApp: measuring platform success ]]</Means>.
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
