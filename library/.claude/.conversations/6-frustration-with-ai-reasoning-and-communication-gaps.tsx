import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './frustration-with-ai-reasoning-and-communication-gaps/.cover.tsx';
import TheSynopsis from './frustration-with-ai-reasoning-and-communication-gaps/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Frustration with AI reasoning and communication gaps ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 48 exchanges: <Means>$[[ Frustration with AI reasoning and communication gaps ]]</Means>.
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
