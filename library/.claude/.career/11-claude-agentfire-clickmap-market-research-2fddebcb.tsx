import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--agentfire-clickmap-market-research--2fddebcb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--agentfire-clickmap-market-research--2fddebcb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AgentFire ClickMap market research ]]( claude--AgentFire ClickMap market research--2fddebcb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ AgentFire ClickMap market research ]]( claude--AgentFire ClickMap market research--2fddebcb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
