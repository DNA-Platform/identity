import { Bold, Chapter, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-06-28T14:26:55.719844Z"
        >
            <Origin>e70bad03-3f8a-45cb-a784-245c40d78069</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How so I add github credentials to ssh locally on my windows machine, It involves runnig keygen aI think and
                a token
            </Paragraph>
        </Message>
        <Message
            at="2025-06-28T14:27:08.214119Z"
        >
            <Origin>b977e10f-b9ef-4211-bb43-62e0f52fcf53</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that it involves key generation! Here's how to set up SSH credentials for GitHub on your
                Windows machine:
            </Paragraph>
            <Heading>Step 1: Generate an SSH Key</Heading>
            <Paragraph>Open Command Prompt, PowerShell, or Git Bash and run:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`ssh-keygen -t ed25519 -C "your_email@example.com"`}
            </CodeBox>
            <Paragraph>
                Replace <Word>
                    <Verbatim />
                    your_email@example.com
                </Word> with your actual GitHub email address.
            </Paragraph>
            <Paragraph>When prompted:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        File location
                    </Word>: Press Enter to use the default location (<Word>
                        <Verbatim />
                        C:\Users\YourUsername\.ssh\id_ed25519
                    </Word>)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Passphrase
                    </Word>: You can add one for extra security or press Enter to skip
                </Line>
            </Paragraph>
            <Heading>Step 2: Start the SSH Agent</Heading>
            <CodeBox
                language="bash"
            >
                {`# Start the ssh-agent in the background
eval "$(ssh-agent -s)"

# Add your SSH private key to the ssh-agent
ssh-add ~/.ssh/id_ed25519`}
            </CodeBox>
            <Heading>Step 3: Copy Your Public Key</Heading>
            <Paragraph>Display and copy your public key:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`cat ~/.ssh/id_ed25519.pub`}
            </CodeBox>
            <Paragraph>Or on Windows:</Paragraph>
            <CodeBox
                language="cmd"
            >
                {`type %USERPROFILE%\\.ssh\\id_ed25519.pub`}
            </CodeBox>
            <Paragraph>
                Copy the entire output (starts with <Word>
                    <Verbatim />
                    ssh-ed25519
                </Word> and ends with your email).
            </Paragraph>
            <Heading>Step 4: Add the Key to GitHub</Heading>
            <Paragraph>
                <List ordered />
                <Line>Go to GitHub.com → Settings → SSH and GPG keys</Line>
                <Line>Click "New SSH key"</Line>
                <Line>Give it a title (like "My Windows PC")</Line>
                <Line>Paste your public key into the "Key" field</Line>
                <Line>Click "Add SSH key"</Line>
            </Paragraph>
            <Heading>Step 5: Test the Connection</Heading>
            <CodeBox
                language="bash"
            >
                {`ssh -T git@github.com`}
            </CodeBox>
            <Paragraph>You should see a message like: "Hi username! You've successfully authenticated..."</Paragraph>
            <Heading>About Personal Access Tokens</Heading>
            <Paragraph>
                You mentioned tokens - Personal Access Tokens (PATs) are used for HTTPS authentication, not SSH. If you
                prefer using HTTPS instead of SSH:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)</Line>
                <Line>Generate a new token with appropriate scopes</Line>
                <Line>Use this token as your password when Git prompts for credentials</Line>
            </Paragraph>
            <Heading>Which Method to Choose?</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        SSH
                    </Word>: More convenient once set up (no password prompts)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        HTTPS + PAT
                    </Word>: Simpler setup, works better with some corporate firewalls
                </Line>
            </Paragraph>
            <Paragraph>
                Most developers prefer SSH for its convenience. Once configured, you can clone repos using SSH URLs (like
                <Word>
                    <Verbatim />
                    git@github.com:username/repo.git
                </Word>) and won't need to enter credentials repeatedly.
            </Paragraph>
        </Message>
        <Message
            at="2025-06-28T14:31:05.934540Z"
        >
            <Origin>308c9787-ee4a-4f13-b907-6c54bd7d3c92</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm in a weird state with git. Can I undo all of my current changes that have been commiteed locally but not
                synced?
            </Paragraph>
        </Message>
        <Message
            at="2025-06-28T14:31:15.844921Z"
        >
            <Origin>3cb8f01a-43bb-48d8-89ba-3bfe39de3ea5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes! You have several options depending on exactly what you want to do. Here are the most common scenarios:
            </Paragraph>
            <Heading>Option 1: Keep your files but undo the commits (Soft Reset)</Heading>
            <Paragraph>This keeps your changes as unstaged modifications:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Go back 1 commit but keep your changes
git reset HEAD~1

# Go back multiple commits (replace N with number)
git reset HEAD~N

# Go back to a specific commit (find hash with git log)
git reset <commit-hash>`}
            </CodeBox>
            <Heading>Option 2: Completely remove commits and changes (Hard Reset)</Heading>
            <Paragraph>
                ⚠️ <Word>
                    <Bold />
                    Warning
                </Word>: This permanently deletes your changes!
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Go back 1 commit and delete all changes
git reset --hard HEAD~1

# Go back to match the remote exactly
git reset --hard origin/main
# (replace 'main' with your branch name if different)`}
            </CodeBox>
            <Heading>Option 3: See what commits you have locally</Heading>
            <Paragraph>First, check what commits haven't been pushed:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# See commits that haven't been pushed
git log origin/main..HEAD

# Or see a simple list
git log --oneline origin/main..HEAD`}
            </CodeBox>
            <Heading>Option 4: Reset to match remote exactly</Heading>
            <Paragraph>This is often what people want - to make your local branch identical to what's on GitHub:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Make sure you have the latest remote info
git fetch origin

# Reset your branch to match remote exactly
git reset --hard origin/main`}
            </CodeBox>
            <Heading>Quick Check Before You Decide</Heading>
            <Paragraph>Run these commands to see your current state:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# See your recent commits
git log --oneline -5

# See what's different from remote
git status

# See exactly what commits haven't been pushed
git log origin/main..HEAD --oneline`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Which option sounds like what you want?
                </Word> If you just want to get back to a clean state matching what's on GitHub, Option 4 is usually the
                safest bet.
            </Paragraph>
        </Message>
        <Message
            at="2025-06-28T14:31:42.772850Z"
        >
            <Origin>1ebfd39b-86c4-4fa6-8f04-e3371f682bf7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It's telling me this on pull:</Paragraph>
            <Paragraph>
                <Quoted />
                git pull --tags origin main
            </Paragraph>
            <Paragraph>From github.com:DNA-Platform/dna-patternity</Paragraph>
            <Paragraph>
                <List />
                <Line>branch            main       -&gt; FETCH_HEAD</Line>
            </Paragraph>
            <Paragraph>
                error: invalid path 'pattern-spec/chapter-1: tile-spec.md' error: invalid path 'pattern-spec/chapter-2:
                palette-spec.md' error: invalid path 'pattern-spec/chapter-3: seamless-pattern-design-course.md' error:
                invalid path 'pattern-spec/chapter-4: the-economics-of-luxury-patterns.md'
            </Paragraph>
        </Message>
        <Message
            at="2025-06-28T14:31:52.906923Z"
        >
            <Origin>96ba1779-f966-409f-973a-b1a8e87c09ea</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This error occurs because those filenames contain colons (<Word>
                    <Verbatim />
                    :
                </Word>) which are invalid characters for file paths on Windows. The files were probably created on a
                Mac/Linux system where colons are allowed.
            </Paragraph>
            <Paragraph>Here are your options to fix this:</Paragraph>
            <Heading>Option 1: Configure Git to handle this automatically</Heading>
            <CodeBox
                language="bash"
            >
                {`# Tell Git to replace invalid characters
git config core.protectNTFS false
git config core.longpaths true

# Then try pulling again
git pull --tags origin main`}
            </CodeBox>
            <Heading>Option 2: Use Git Bash or WSL</Heading>
            <Paragraph>
                If you have Git Bash or Windows Subsystem for Linux (WSL), try pulling from there instead of Command
                Prompt/PowerShell:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`# In Git Bash or WSL
git pull --tags origin main`}
            </CodeBox>
            <Heading>Option 3: Clone fresh in a different location</Heading>
            <Paragraph>Sometimes it's easier to just start fresh:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Navigate somewhere else
cd C:\\temp

# Clone the repo fresh
git clone https://github.com/DNA-Platform/dna-patternity.git

# Then copy any local work you want to keep`}
            </CodeBox>
            <Heading>Option 4: Ask someone to rename the files</Heading>
            <Paragraph>
                The cleanest long-term solution is to have someone with Mac/Linux rename those files to remove the colons,
                then push the changes. Something like:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        chapter-1: tile-spec.md
                    </Word> → <Word>
                        <Verbatim />
                        chapter-1-tile-spec.md
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        chapter-2: palette-spec.md
                    </Word> → <Word>
                        <Verbatim />
                        chapter-2-palette-spec.md
                    </Word>
                </Line>
                <Line>etc.</Line>
            </Paragraph>
            <Heading>Quick Fix to Try First</Heading>
            <Paragraph>Try Option 1 first - it's the quickest and often resolves the issue:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`git config core.protectNTFS false
git pull --tags origin main`}
            </CodeBox>
            <Paragraph>Let me know if that works or if you get a different error!</Paragraph>
        </Message>
    </Chapter>
);
