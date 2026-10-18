import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ai-automation-frameworks-for-windows-beyond-mcp--a0bc19de/.cover.tsx';
import TheSynopsis from './claude--ai-automation-frameworks-for-windows-beyond-mcp--a0bc19de/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI automation frameworks for Windows beyond MCP ]]( claude--AI automation frameworks for Windows beyond MCP--a0bc19de )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ AI automation frameworks for Windows beyond MCP ]]( claude--AI automation frameworks for Windows beyond MCP--a0bc19de )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
