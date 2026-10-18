import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a detailed technical question about whether Chrome DevTools Protocol can be enabled on an
            already-running Electron MSIX application without modifying its source code. Specifically, they wanted to
            know if Windows debugger attachment, process injection, or environment variables could enable CDP
            post-launch, and whether Electron's --inspect flag for the Node main process survives MSIX activation. The
            conversation was entirely technical in nature with no personal details shared.
        </Paragraph>
    </Chapter>
);
