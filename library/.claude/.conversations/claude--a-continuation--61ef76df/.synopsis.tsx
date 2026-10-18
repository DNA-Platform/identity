import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a returning user who migrated from a lost account and recreated his projects in a new environment.
            He works primarily with Claude as a technical collaborator and deep-discussion partner on a sophisticated
            frontend framework called $Chemistry, which is paired with a formal theory he developed called Semantic
            Reference Theory (SRT). His wife Ana is also involved in some projects, and she and Claude communicate in
            Russian. Doug has moved his primary day-to-day development work to Claude Code (an agentic coding
            environment), reserving this conversational interface for architectural discussions and deep dives when
            needed.
        </Paragraph>
    </Chapter>
);
