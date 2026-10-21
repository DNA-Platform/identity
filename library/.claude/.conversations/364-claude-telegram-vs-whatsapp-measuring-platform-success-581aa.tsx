import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-vs-whatsapp-measuring-platform-success--581aa9cf/.cover.tsx';
import TheSynopsis from './claude--telegram-vs-whatsapp-measuring-platform-success--581aa9cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram vs WhatsApp: measuring platform success ]]( claude--Telegram vs WhatsApp: measuring platform success--581aa9cf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 61 exchanges: <Means>$[[ Telegram vs WhatsApp: measuring platform success ]]( claude--Telegram vs WhatsApp: measuring platform success--581aa9cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
