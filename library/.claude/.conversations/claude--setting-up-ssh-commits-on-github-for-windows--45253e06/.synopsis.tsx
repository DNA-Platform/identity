import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is setting up GitHub for Windows and wanted to configure SSH-based commits for their user
            account. Claude provided a complete step-by-step walkthrough covering the full SSH setup process: generating
            an ed25519 SSH key pair, adding the key to the SSH agent (with separate instructions for both Git Bash and
            PowerShell environments), adding the public key to GitHub via the account settings, testing the connection,
            switching an existing repository remote from HTTPS to SSH, and configuring global Git identity settings. The
            conversation was purely technical and task-focused, with no back-and-forth or corrections — Claude delivered
            a single comprehensive response covering all necessary steps.
        </Paragraph>
    </Chapter>
);
