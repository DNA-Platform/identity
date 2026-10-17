import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './ai-consumable-tech-stack-architecture/.cover.tsx';
import TheSynopsis from './ai-consumable-tech-stack-architecture/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI-consumable tech stack architecture ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 24 exchanges: <Means>$[[ AI-consumable tech stack architecture ]]</Means>.
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
