import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--agentfire-clickmap-market-research--2fddebcb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--agentfire-clickmap-market-research--2fddebcb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AgentFire ClickMap market research ]]( claude--AgentFire ClickMap market research--2fddebcb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ AgentFire ClickMap market research ]]( claude--AgentFire ClickMap market research--2fddebcb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
