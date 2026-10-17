import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-bots-and-ai-use-cases--ced9ca31/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-bots-and-ai-use-cases--ced9ca31/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram bots and AI use cases ]]( claude--Telegram bots and AI use cases--ced9ca31 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Telegram bots and AI use cases ]]( claude--Telegram bots and AI use cases--ced9ca31 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
