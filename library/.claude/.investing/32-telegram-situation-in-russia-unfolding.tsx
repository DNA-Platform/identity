import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-situation-in-russia-unfolding/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-situation-in-russia-unfolding/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram situation in Russia unfolding ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Telegram situation in Russia unfolding ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
