import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--monads-technical-progress-and-telegram-integration--282239f1/.cover.tsx';
import TheSynopsis from './claude--monads-technical-progress-and-telegram-integration--282239f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[7 March 2026](2026-03-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad's technical progress and Telegram integration ]]( claude--Monad's technical progress and Telegram integration--282239f1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Monad's technical progress and Telegram integration ]]( claude--Monad's technical progress and Telegram integration--282239f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
