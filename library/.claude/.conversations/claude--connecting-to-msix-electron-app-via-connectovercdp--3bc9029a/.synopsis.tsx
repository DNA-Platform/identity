import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a highly technical question about Playwright's Electron automation support, specifically
            requesting exact Node.js code for connecting to an already-running MSIX-packaged Electron application using
            connectOverCDP. The question embedded several technical assumptions: that electron.launch requires an
            "inspect fuse" to be enabled, and that connectOverCDP is the appropriate Playwright mechanism for attaching
            to a pre-launched Electron app.
        </Paragraph>
    </Chapter>
);
