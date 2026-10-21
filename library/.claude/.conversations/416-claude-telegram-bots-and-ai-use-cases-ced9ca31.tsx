import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-bots-and-ai-use-cases--ced9ca31/.cover.tsx';
import TheSynopsis from './claude--telegram-bots-and-ai-use-cases--ced9ca31/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram bots and AI use cases ]]( claude--Telegram bots and AI use cases--ced9ca31 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Telegram bots and AI use cases ]]( claude--Telegram bots and AI use cases--ced9ca31 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
