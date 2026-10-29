import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--telegram-vs-whatsapp-measuring-platform-success--581aa9cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-vs-whatsapp-measuring-platform-success--581aa9cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram vs WhatsApp: measuring platform success ]]( claude--Telegram vs WhatsApp: measuring platform success--581aa9cf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 January 2026: <Means>$[[ Telegram vs WhatsApp: measuring platform success ]]( claude--Telegram vs WhatsApp: measuring platform success--581aa9cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
