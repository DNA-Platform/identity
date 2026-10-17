import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-vs-whatsapp-measuring-platform-success--581aa9cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-vs-whatsapp-measuring-platform-success--581aa9cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram vs WhatsApp: measuring platform success ]]( claude--Telegram vs WhatsApp: measuring platform success--581aa9cf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 January 2026: <Means>$[[ Telegram vs WhatsApp: measuring platform success ]]( claude--Telegram vs WhatsApp: measuring platform success--581aa9cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
