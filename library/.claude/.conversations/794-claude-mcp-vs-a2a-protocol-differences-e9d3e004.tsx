import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--mcp-vs-a2a-protocol-differences--e9d3e004/.cover.tsx';
import TheSynopsis from './claude--mcp-vs-a2a-protocol-differences--e9d3e004/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MCP vs A2A protocol differences ]]( claude--MCP vs A2A protocol differences--e9d3e004 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ MCP vs A2A protocol differences ]]( claude--MCP vs A2A protocol differences--e9d3e004 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
