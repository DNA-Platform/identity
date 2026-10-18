import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--frustration-with-ai-reasoning-and-communication-gaps--7c357b9a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--frustration-with-ai-reasoning-and-communication-gaps--7c357b9a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Frustration with AI reasoning and communication gaps ]]( claude--Frustration with AI reasoning and communication gaps--7c357b9a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 June 2026: <Means>$[[ Frustration with AI reasoning and communication gaps ]]( claude--Frustration with AI reasoning and communication gaps--7c357b9a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
