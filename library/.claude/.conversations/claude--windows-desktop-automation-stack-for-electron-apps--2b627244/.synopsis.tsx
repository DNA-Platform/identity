import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked for a detailed technical recommendation on rebuilding a Windows desktop automation system
            targeting an Electron application, specifically on Windows 11, using Node.js/TypeScript. They requested
            comparisons across several specific dimensions: FlaUI via edge-js versus PowerShell-mediated UI Automation
            (UIA), whether UFO2's hybrid UIA-plus-vision approach adds value for Electron targets, using Anthropic's
            computer-use API as a UIA fallback, and better IPC mechanisms than PowerShell subprocess communication. They
            explicitly requested specifics on libraries, versions, and integration patterns throughout.
        </Paragraph>
    </Chapter>
);
