import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-accessibility-anomaly-in-russia/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-accessibility-anomaly-in-russia/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram accessibility anomaly in Russia ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 April 2026: <Means>$[[ Telegram accessibility anomaly in Russia ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
