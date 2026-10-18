import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is working on a Windows desktop automation system targeting Claude Desktop, built in
            TypeScript/Node.js. They described their existing architecture in detail: a persistent PowerShell subprocess
            calling .NET's System.Windows.Automation (UIA) for element discovery, Win32 P/Invoke through PowerShell for
            window management, clipboard-based text input, URL reading from the accessibility tree for navigation state
            detection, and a tapering-poll gateway pattern (50ms doubling to 1000ms) for async operations. They
            identified specific limitations including per-call PowerShell latency (~12ms), indirect UIA access, and
            constraints from accessibility tree exposure.
        </Paragraph>
    </Chapter>
);
