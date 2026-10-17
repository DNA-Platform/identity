import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-vs-whatsapp-measuring-platform-success/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-vs-whatsapp-measuring-platform-success/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram vs WhatsApp: measuring platform success ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 January 2026: <Means>$[[ Telegram vs WhatsApp: measuring platform success ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
