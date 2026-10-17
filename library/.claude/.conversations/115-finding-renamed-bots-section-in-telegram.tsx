import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './finding-renamed-bots-section-in-telegram/.cover.tsx';
import TheSynopsis from './finding-renamed-bots-section-in-telegram/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding renamed bots section in Telegram ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Finding renamed bots section in Telegram ]]</Means>.
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
