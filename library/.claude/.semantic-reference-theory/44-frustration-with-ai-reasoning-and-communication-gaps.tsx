import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/frustration-with-ai-reasoning-and-communication-gaps/.cover.tsx';
import TheSynopsis from '../.conversations/frustration-with-ai-reasoning-and-communication-gaps/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Frustration with AI reasoning and communication gaps ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 June 2026: <Means>$[[ Frustration with AI reasoning and communication gaps ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
