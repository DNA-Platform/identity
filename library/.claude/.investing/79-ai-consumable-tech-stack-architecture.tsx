import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ai-consumable-tech-stack-architecture/.cover.tsx';
import TheSynopsis from '../.conversations/ai-consumable-tech-stack-architecture/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI-consumable tech stack architecture ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ AI-consumable tech stack architecture ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
