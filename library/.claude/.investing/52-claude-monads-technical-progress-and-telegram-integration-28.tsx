import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--monads-technical-progress-and-telegram-integration--282239f1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monads-technical-progress-and-telegram-integration--282239f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad's technical progress and Telegram integration ]]( claude--Monad's technical progress and Telegram integration--282239f1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 March 2026: <Means>$[[ Monad's technical progress and Telegram integration ]]( claude--Monad's technical progress and Telegram integration--282239f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
