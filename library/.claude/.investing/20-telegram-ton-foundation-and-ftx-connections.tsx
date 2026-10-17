import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-ton-foundation-and-ftx-connections/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-ton-foundation-and-ftx-connections/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram, TON Foundation, and FTX connections ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 January 2026: <Means>$[[ Telegram, TON Foundation, and FTX connections ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
