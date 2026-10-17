import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './fiverrs-connection-to-telegrams-mira-ai/.cover.tsx';
import TheSynopsis from './fiverrs-connection-to-telegrams-mira-ai/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[28 July 2026](2026-07-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fiverr's connection to Telegram's Mira AI ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Fiverr's connection to Telegram's Mira AI ]]</Means>.
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
