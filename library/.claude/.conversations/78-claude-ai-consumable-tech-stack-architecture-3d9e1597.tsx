import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ai-consumable-tech-stack-architecture--3d9e1597/.cover.tsx';
import TheSynopsis from './claude--ai-consumable-tech-stack-architecture--3d9e1597/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI-consumable tech stack architecture ]]( claude--AI-consumable tech stack architecture--3d9e1597 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 24 exchanges: <Means>$[[ AI-consumable tech stack architecture ]]( claude--AI-consumable tech stack architecture--3d9e1597 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
