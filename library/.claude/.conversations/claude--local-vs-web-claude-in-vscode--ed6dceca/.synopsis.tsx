import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about Claude Code in VS Code, specifically the difference between "Local" and "Web" options
            they were seeing in the interface. Claude explained that Local runs the agent directly on the user's machine
            with access to local files, terminal, and environment, while Web runs Claude Code on Anthropic's cloud
            infrastructure in a remote sandbox — better suited for asynchronous, longer-running tasks that persist
            independently of the user's machine.
        </Paragraph>
    </Chapter>
);
