import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-access-in-russia-amid-roskomnadzor-blocking/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-access-in-russia-amid-roskomnadzor-blocking/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram access in Russia amid Roskomnadzor blocking ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 February 2026: <Means>$[[ Telegram access in Russia amid Roskomnadzor blocking ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
