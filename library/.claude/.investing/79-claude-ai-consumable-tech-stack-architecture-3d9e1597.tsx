import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI-consumable tech stack architecture ]]( claude--AI-consumable tech stack architecture--3d9e1597 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ AI-consumable tech stack architecture ]]( claude--AI-consumable tech stack architecture--3d9e1597 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
