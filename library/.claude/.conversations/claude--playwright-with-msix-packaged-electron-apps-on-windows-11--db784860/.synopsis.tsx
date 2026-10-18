import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a detailed technical question about integrating Playwright's electron API with
            MSIX-packaged Electron applications on Windows 11, covering four specific areas: whether the electron API
            works with MSIX-packaged Electron apps, whether Playwright can attach to an already-running MSIX Electron
            process via Chrome DevTools Protocol (CDP), what MSIX sandboxing constraints affect remote debugging ports,
            and a comparison of connectOverCDP versus electron.launch for this scenario.
        </Paragraph>
    </Chapter>
);
