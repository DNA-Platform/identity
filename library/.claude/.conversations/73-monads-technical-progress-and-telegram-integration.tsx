import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './monads-technical-progress-and-telegram-integration/.cover.tsx';
import TheSynopsis from './monads-technical-progress-and-telegram-integration/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[7 March 2026](2026-03-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad's technical progress and Telegram integration ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Monad's technical progress and Telegram integration ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
        <Append
            identifier="import"
            type=".json"
        >
            ![[ import.json ]]
        </Append>
    </Chapter>
);
