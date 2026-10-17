import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './elon-musks-x-messenger-competing-with-telegram/.cover.tsx';
import TheSynopsis from './elon-musks-x-messenger-competing-with-telegram/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[13 April 2026](2026-04-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Elon Musk's X messenger competing with Telegram ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Elon Musk's X messenger competing with Telegram ]]</Means>.
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
