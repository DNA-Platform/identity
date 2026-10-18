import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a technical question about Invoke-CommandInDesktopPackage, a PowerShell cmdlet in the Appx
            module, specifically how it preserves MSIX package identity when launching an Electron app with custom
            flags. Claude provided a detailed explanation covering the cmdlet's syntax (-PackageFamilyName, -AppId,
            -Command, -Args, -PreventBreakaway), the core identity problem it solves (launching an executable directly
            outside the package context strips its package token), and how the cmdlet resolves this by spawning the
            process inside the MSIX container so it receives a package token, virtualized file system and registry
            access, and declared capabilities.
        </Paragraph>
    </Chapter>
);
