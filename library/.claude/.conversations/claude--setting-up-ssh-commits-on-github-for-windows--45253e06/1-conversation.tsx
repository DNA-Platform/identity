import { Bold, Chapter, Date, Heading, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[14 March 2026](2026-03-14)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-14T16:59:42.032770Z"
        >
            <Origin>019ced49-f22d-74d4-b408-b7303785d56c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I am setting up github for windows and I want ssh commit. How do I add that for my user</Paragraph>
        </Message>
        <Message
            at="2026-03-14T16:59:51.480867Z"
        >
            <Origin>019ced49-f22d-7a8f-8d92-b44b57c52a38</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the full flow to get SSH commits working on Windows:</Paragraph>
            <Heading>1. Generate an SSH key</Heading>
            <Paragraph>Open Git Bash (or PowerShell) and run:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`ssh-keygen -t ed25519 -C "your_email@example.com"`}
            </CodeBox>
            <Paragraph>
                Accept the default path (<Word>
                    <Verbatim />
                    ~/.ssh/id_ed25519
                </Word>) and set a passphrase if you want one.
            </Paragraph>
            <Heading>2. Add the key to ssh-agent</Heading>
            <CodeBox
                language="bash"
            >
                {`eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519`}
            </CodeBox>
            <Paragraph>On Windows, if you're using PowerShell instead of Git Bash:</Paragraph>
            <CodeBox
                language="powershell"
            >
                {`Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
ssh-add $env:USERPROFILE\\.ssh\\id_ed25519`}
            </CodeBox>
            <Heading>3. Add the public key to GitHub</Heading>
            <Paragraph>Copy it to clipboard:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`cat ~/.ssh/id_ed25519.pub | clip`}
            </CodeBox>
            <Paragraph>
                Then go to <Word>
                    <Bold />
                    GitHub → Settings → SSH and GPG keys → New SSH key
                </Word>, paste it in, and save.
            </Paragraph>
            <Heading>4. Test the connection</Heading>
            <CodeBox
                language="bash"
            >
                {`ssh -T git@github.com`}
            </CodeBox>
            <Paragraph>
                You should see: <Word>
                    <Verbatim />
                    Hi username! You've successfully authenticated...
                </Word>
            </Paragraph>
            <Heading>5. Set your repo to use SSH</Heading>
            <Paragraph>If you already cloned via HTTPS, switch the remote:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`git remote set-url origin git@github.com:USERNAME/REPO.git`}
            </CodeBox>
            <Paragraph>
                For new clones, use the SSH URL from GitHub (<Word>
                    <Verbatim />
                    git@github.com:...
                </Word>) instead of the HTTPS one.
            </Paragraph>
            <Heading>6. Configure Git identity (if not done yet)</Heading>
            <CodeBox
                language="bash"
            >
                {`git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"`}
            </CodeBox>
            <Paragraph>After that, commits and pushes will authenticate via SSH automatically.</Paragraph>
        </Message>
    </Chapter>
);
