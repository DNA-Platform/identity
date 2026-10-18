import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[11 May 2026](2026-05-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI-consumable tech stack architecture ]]( claude--AI-consumable tech stack architecture--3d9e1597 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ AI-consumable tech stack architecture ]]( claude--AI-consumable tech stack architecture--3d9e1597 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
