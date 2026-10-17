import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-wallet/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-wallet/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram Wallet ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 January 2026: <Means>$[[ Telegram Wallet ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
