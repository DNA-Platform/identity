import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a detailed technical question about AI-based automation frameworks for Windows,
            specifically seeking tools beyond MCP (Model Context Protocol) that could make an AI coding assistant more
            effective. Their query was structured around four areas: desktop application control beyond CLI tools,
            structured tool-use frameworks beyond MCP, Windows-specific automation APIs, and emerging AI-to-application
            communication standards. They explicitly wanted information about what is working today, with specific
            project names, URLs, and maturity assessments rather than theoretical options.
        </Paragraph>
    </Chapter>
);
