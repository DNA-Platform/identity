import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person works in Claude Code (the agentic CLI coding tool) and asked a detailed technical question about
            whether and how to integrate a vector or embedding database for a flat-file knowledge library. They wanted
            to understand the concrete integration paths available (MCP server, custom tool, indexing pipeline), which
            named projects and tools currently exist, and what semantic search actually provides over plain file reads
            and grep/ripgrep — enough substance to make a real build-or-skip decision.
        </Paragraph>
    </Chapter>
);
