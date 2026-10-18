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
            targeting an Electron app, working from a Node.js/TypeScript environment on Windows 11. The conversation was
            entirely technical in nature, with no personal details shared. The person demonstrated strong existing
            familiarity with the problem space, using precise domain terminology: UIA (UI Automation), UIA2/UIA3 COM
            interfaces, FlaUI, edge-js, UFO², named pipes, gRPC, napi-rs, STA threading, and AutomationElement
            lifecycle. They structured their question around four specific comparative axes and requested library names,
            versions, and integration patterns.
        </Paragraph>
    </Chapter>
);
