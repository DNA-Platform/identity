import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-bots-and-ai-use-cases/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-bots-and-ai-use-cases/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram bots and AI use cases ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Telegram bots and AI use cases ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
