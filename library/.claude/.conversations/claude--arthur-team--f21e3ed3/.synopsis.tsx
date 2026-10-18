import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person works inside Claude Code (Anthropic's agentic CLI coding tool) and runs a team workflow called
            the PROSE convention: nine named teammates (including Arthur, Claude, Libby, and others) whose turns are
            written by a single "storyteller" substrate, with every paragraph prefixed by a nametag. Agent definition
            files live in .claude/agents/ and subagents can be invoked through the Agent/Task tool, but in ordinary
            conversation the teammates are nametagged prose only, with no native UI treatment. The person had observed
            Claude Code visibly highlighting agent names and rendering subagents distinctly, and wanted to understand
            whether their setup was emulating something Claude Code supports natively.
        </Paragraph>
    </Chapter>
);
