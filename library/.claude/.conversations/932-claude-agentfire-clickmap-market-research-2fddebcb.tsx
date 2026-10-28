import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--agentfire-clickmap-market-research--2fddebcb/.cover.tsx';
import TheSynopsis from './claude--agentfire-clickmap-market-research--2fddebcb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AgentFire ClickMap market research ]]( claude--AgentFire ClickMap market research--2fddebcb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 31 exchanges: <Means>$[[ AgentFire ClickMap market research ]]( claude--AgentFire ClickMap market research--2fddebcb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
