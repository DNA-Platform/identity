import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--monads-technical-progress-and-telegram-integration--282239f1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monads-technical-progress-and-telegram-integration--282239f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[7 March 2026](2026-03-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad's technical progress and Telegram integration ]]( claude--Monad's technical progress and Telegram integration--282239f1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 March 2026: <Means>$[[ Monad's technical progress and Telegram integration ]]( claude--Monad's technical progress and Telegram integration--282239f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
