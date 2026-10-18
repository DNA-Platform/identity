import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about current best practices (as of 2026) for giving coding agents persistent memory across
            sessions, specifically requesting a web search and a concise breakdown of the top approaches — file-based
            notes, vector stores, structured knowledge graphs, or other methods — with guidance on when each is the
            right choice.
        </Paragraph>
    </Chapter>
);
