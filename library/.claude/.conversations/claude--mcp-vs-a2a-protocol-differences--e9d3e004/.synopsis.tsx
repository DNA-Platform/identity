import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a technical question about the three most important differences between MCP (Anthropic's
            Model Context Protocol) and A2A (Google's Agent2Agent protocol) for AI agent communication. Claude provided
            a detailed comparison covering three key distinctions: what each protocol connects (MCP links agents to
            tools and external resources vertically, while A2A enables horizontal peer-to-peer communication between
            agents), their architectural topology (MCP uses an asymmetric client-server model versus A2A's symmetric
            peer-to-peer model with Agent Card discovery), and their interaction patterns (MCP handles discrete
            stateless tool calls while A2A supports stateful, asynchronous task delegation with a defined state
            machine). Claude also noted that the protocols are complementary rather than competing, and flagged that MCP
            was donated to the Linux Foundation's Agentic AI Foundation in December 2025.
        </Paragraph>
    </Chapter>
);
