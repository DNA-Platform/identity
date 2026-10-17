import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/monads-technical-progress-and-telegram-integration/.cover.tsx';
import TheSynopsis from '../.conversations/monads-technical-progress-and-telegram-integration/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad's technical progress and Telegram integration ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 March 2026: <Means>$[[ Monad's technical progress and Telegram integration ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
