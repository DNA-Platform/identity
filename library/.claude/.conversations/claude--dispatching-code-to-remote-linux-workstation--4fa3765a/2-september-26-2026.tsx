import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 September 2026](2026-09-26)</Date>
        </Dated>
        <Title>[[ 26 September 2026 ]]</Title>
        <Message
            at="2026-09-26T06:28:17.040015Z"
        >
            <Origin>01a0dc66-692a-7bca-bbcd-599cb9cd3e45</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm on the machine and I need to set it up. My instruction was to keep my impact mostly localized to one
                folder. So let's make a folder for a github repo, provide limited access scoped only to the repo, and so
                what we need to do so that you can dispatch commands there. You'll need to pull, branch, run code, commit,
                all through a remote connection, as well as get status updates
            </Paragraph>
            <Attachment>Uploaded “1790403971678_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-09-26T06:32:26.482408Z"
        >
            <Origin>01a0dc66-692a-72bc-bc70-9124d15d4ebf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “tailscale userspace-networking mode incoming connections forwarded to localhost sshd”
            </Action>
            <Action>Used web search fast</Action>
            <Paragraph>
                Here's a setup where everything lives in <Word>
                    <Verbatim />
                    ~/doug
                </Word>: the repo, the GitHub key, the run folders, and even the network tunnel. Outside that folder there's
                only one line in <Word>
                    <Verbatim />
                    ~/.ssh/authorized_keys
                </Word>, one crontab line, and possibly a few standard packages.
            </Paragraph>
            <CodeBox>
                {`~/doug/
  repo/        clone of the GitHub repo
  runs/        one git worktree per run branch
  data/        checkpoints, outside git
  keys/        GitHub key for this one repo
  tailscale/   the network tunnel (binaries + state)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Check what's already there
                </Word> (in that terminal)
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`git --version; tmux -V; ss -tln | grep ':22 '`}
            </CodeBox>
            <Paragraph>
                If any of these fail, or the last one prints nothing, run <Word>
                    <Verbatim />
                    sudo apt install git tmux openssh-server
                </Word>. The SSH server is the only system service this needs.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. The folder, plus a GitHub key scoped to this one repo
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`mkdir -p ~/doug/{keys,runs,data}
ssh-keygen -t ed25519 -N "" -C "lipshutzlab-01" -f ~/doug/keys/deploy
cat ~/doug/keys/deploy.pub`}
            </CodeBox>
            <Paragraph>
                Copy the printed key (RustDesk shares the clipboard) and add it on GitHub from your own machine, not the lab
                box: repo → Settings → Deploy keys → Add deploy key, and tick "Allow write access." A deploy key works for
                that one repository only. Then clone, keeping all SSH and git settings inside the folder:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`SSHCMD="ssh -i $HOME/doug/keys/deploy -o IdentitiesOnly=yes -o UserKnownHostsFile=$HOME/doug/keys/known_hosts -o StrictHostKeyChecking=accept-new"
GIT_SSH_COMMAND="$SSHCMD" git clone git@github.com:OWNER/REPO.git ~/doug/repo
cd ~/doug/repo
git config core.sshCommand "$SSHCMD"
git config user.name "lipshutzlab-01"
git config user.email "you@example.com"`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    3. The network path: Tailscale run from the folder, with no install and no sudo
                </Word>
            </Paragraph>
            <Paragraph>
                In userspace mode, Tailscale can run as a regular, non-root user, and it forwards incoming connections to
                the same port on localhost, so your SSH lands on the normal SSH server.
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`${''}mkdir -p ~/doug/tailscale && cd ~/doug/tailscale
tgz=$(wget -qO- 'https://pkgs.tailscale.com/stable/?mode=json' | python3 -c 'import sys,json; print(json.load(sys.stdin)["Tarballs"]["amd64"])')
wget -qO- "https://pkgs.tailscale.com/stable/$tgz" | tar -xzf - --strip-components=1

cat > start.sh <<'EOF'
#!/bin/sh
D="$HOME/doug/tailscale"
exec "$D/tailscaled" --tun=userspace-networking --state="$D/tailscaled.state" --socket="$D/tailscaled.sock"
EOF
chmod +x start.sh
nohup ./start.sh > log 2>&1 &
(crontab -l 2>/dev/null; echo "@reboot $HOME/doug/tailscale/start.sh > $HOME/doug/tailscale/log 2>&1") | crontab -

./tailscale --socket="$HOME/doug/tailscale/tailscaled.sock" up`}
            </CodeBox>
            <Paragraph>
                The last command prints a login URL. Open it on your Windows machine and sign in with your Tailscale
                account. Install Tailscale on Windows too, with the same account. Then, in the admin console, disable key
                expiry for lipshutzlab-01, which avoids periodic re-authentication for a remotely accessed machine.
            </Paragraph>
            <Paragraph>
                The crontab line brings the tunnel back after a reboot. That matters here because the RustDesk warning on
                screen means RustDesk may not get you back in under Wayland. If David already reaches this box over a VPN
                (there's a <Word>
                    <Verbatim />
                    wg0.conf
                </Word> in the home folder), that could replace this step.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Let your key in
                </Word>
            </Paragraph>
            <Paragraph>
                On Windows, in PowerShell, run <Word>
                    <Verbatim />
                    ssh-keygen -t ed25519
                </Word> and leave the passphrase empty. Then run <Word>
                    <Verbatim />
                    Get-Content $HOME\.ssh\id_ed25519.pub
                </Word> and copy the output. On the box:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`mkdir -p ~/.ssh && chmod 700 ~/.ssh
echo 'restrict,pty PASTE-YOUR-KEY-HERE' >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    restrict,pty
                </Word> prefix turns off port, agent, and X11 forwarding for that key.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Test from Windows
                </Word>
            </Paragraph>
            <CodeBox>
                {`ssh lipshutzlab-01@lipshutzlab-01 "ls ~/doug"`}
            </CodeBox>
            <Paragraph>
                After this works, Claude Code handles the rest: the SSH alias, a Python environment inside <Word>
                    <Verbatim />
                    ~/doug
                </Word>, the CLAUDE.md section, and a first test run (branch, run, commit, push, fetch). For status, it can
                tail logs and run <Word>
                    <Verbatim />
                    nvidia-smi
                </Word> over SSH, and progress commits show up on the run branch.
            </Paragraph>
            <Paragraph>
                The deploy key restricts GitHub access to the one repo. On the machine, though, anything run over SSH
                executes as the lab account, so keeping it inside <Word>
                    <Verbatim />
                    ~/doug
                </Word> is a convention, not something the OS enforces. If David wants that enforced, the alternative is a
                separate Linux user whose home directory is the folder.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T07:39:26.245479Z"
        >
            <Origin>01a0dca7-8ca3-7db3-910c-43481a644c34</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>/doug/altered-states/main/ /doug/altered-states/branch-1/</Paragraph>
            <Paragraph>
                How about that, so we have everything limited. That structure exists at the repo level so no need
            </Paragraph>
            <Paragraph>Also, no tmux. And I can't install things. I need linux primitives</Paragraph>
        </Message>
        <Message
            at="2026-09-26T07:42:03.665824Z"
        >
            <Origin>01a0dca7-8ca3-708c-8b2a-599b8224c903</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Without installs, the box has no SSH server or tunnel, so it can't accept incoming connections and has to
                reach out instead. GitHub is the one place both machines can already reach, so commands go in through git
                and results come back through git, with a small bash loop on the box doing the polling. That's your original
                "teleport through the repo" idea. It uses only primitives (bash, git, the ssh client for GitHub, <Word>
                    <Verbatim />
                    setsid
                </Word>/<Word>
                    <Verbatim />
                    nohup
                </Word>, <Word>
                    <Verbatim />
                    timeout
                </Word>, cron) and replaces the Tailscale and authorized_keys steps from before.
            </Paragraph>
            <CodeBox>
                {`~/doug/altered-states/
  .key/       GitHub deploy key (this repo only) + known_hosts
  agent.sh    the polling loop
  agent.log
  main/       the clone (branch main)
  branch-1/   one worktree per branch, created on demand
  remote/     worktree of a small 'remote' branch: cmd/ goes in, out/ comes back`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Check git exists
                </Word> (it has to, since installing is out): <Word>
                    <Verbatim />
                    git --version
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Key and clone
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`mkdir -p ~/doug/altered-states/.key && cd ~/doug/altered-states
ssh-keygen -t ed25519 -N "" -C lipshutzlab-01 -f .key/id
cat .key/id.pub`}
            </CodeBox>
            <Paragraph>Add that key on GitHub (repo → Settings → Deploy keys) with write access, then:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`SSHCMD="ssh -i $HOME/doug/altered-states/.key/id -o IdentitiesOnly=yes -o UserKnownHostsFile=$HOME/doug/altered-states/.key/known_hosts -o StrictHostKeyChecking=accept-new"
GIT_SSH_COMMAND="$SSHCMD" git clone git@github.com:OWNER/altered-states.git main
git -C main config core.sshCommand "$SSHCMD"
git -C main config user.name lipshutzlab-01
git -C main config user.email you@example.com`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    3. The command channel branch
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`git -C main worktree add --orphan -b remote ../remote
cd remote && mkdir cmd out && touch cmd/.keep out/.keep
git add . && git commit -qm "command channel" && git push -qu origin remote`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    4. The agent
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`${''}cat > ~/doug/altered-states/agent.sh <<'EOF'
#!/bin/bash
# Runs each new remote/cmd/<id>.sh from ~/doug/altered-states, commits remote/out/<id>.txt
A="$HOME/doug/altered-states"
cd "$A/remote" || exit 1
while true; do
  git pull -q --rebase
  for c in cmd/*.sh; do
    [ -e "$c" ] || continue
    id=$(basename "$c" .sh)
    [ -e "out/$id.txt" ] && continue
    { cat "$c"; echo "---"
      (cd "$A" && timeout 30m bash "$A/remote/$c" < /dev/null 2>&1)
      echo "--- exit $? at $(date -Is)"; } > "out/$id.txt"
    git add "out/$id.txt" && git commit -qm "out $id"
    until git push -q; do sleep 10; git pull -q --rebase; done
  done
  sleep 30
done
EOF
chmod +x ~/doug/altered-states/agent.sh
setsid nohup ~/doug/altered-states/agent.sh > ~/doug/altered-states/agent.log 2>&1 < /dev/null &
(crontab -l 2>/dev/null; echo "@reboot $HOME/doug/altered-states/agent.sh > $HOME/doug/altered-states/agent.log 2>&1") | crontab -`}
            </CodeBox>
            <Paragraph>That's everything on the machine. The crontab line restarts the agent after a reboot.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How Claude Code uses it (from your Windows clone)
                </Word>
            </Paragraph>
            <Paragraph>
                It keeps a local worktree of <Word>
                    <Verbatim />
                    remote
                </Word>. To send a command, it writes <Word>
                    <Verbatim />
                    cmd/&lt;timestamp&gt;.sh
                </Word>, pushes, and waits roughly 30 to 60 seconds for <Word>
                    <Verbatim />
                    out/&lt;timestamp&gt;.txt
                </Word> to appear on a pull. Commands run from <Word>
                    <Verbatim />
                    ~/doug/altered-states
                </Word>, so they look like this:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Start a run on a branch pushed from here: <Word>
                        <Verbatim />
                        git -C main fetch -q &amp;&amp; git -C main worktree add ../branch-1 branch-1 &amp;&amp; cd branch-1 &amp;&amp; setsid nohup bash -c 'python3 train.py &gt; run.log 2&gt;&amp;1; git add -A; git commit -qm results; git push -q' &gt; /dev/null 2&gt;&amp;1 &lt; /dev/null &amp;
                    </Word>
                </Line>
                <Line>
                    Status: <Word>
                        <Verbatim />
                        tail -n 20 branch-1/run.log; nvidia-smi
                    </Word>
                </Line>
                <Line>
                    Results: they land on <Word>
                        <Verbatim />
                        branch-1
                    </Word>, so <Word>
                        <Verbatim />
                        git fetch
                    </Word> here, then promote what you want.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Notes
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Long jobs.
                    </Word> Anything longer than a few minutes must be launched with <Word>
                        <Verbatim />
                        setsid nohup … &amp;
                    </Word>. The agent cuts off foreground commands at 30 minutes, and <Word>
                        <Verbatim />
                        setsid
                    </Word> keeps a background job from being killed with it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Network.
                    </Word> The only network traffic is outbound to GitHub. No sudo, no SSH server, no open ports.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Port 22 blocked.
                    </Word> If the clone hangs because the lab network blocks outbound port 22, add <Word>
                        <Verbatim />
                        -o HostName=ssh.github.com -p 443
                    </Word> to <Word>
                        <Verbatim />
                        SSHCMD
                    </Word>. GitHub accepts SSH on port 443.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Who can run commands.
                    </Word> Anyone who can push to the <Word>
                        <Verbatim />
                        remote
                    </Word> branch can run commands as the lab account, so keep the repo private.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Output size.
                    </Word> Each command's output gets committed, so status commands should use <Word>
                        <Verbatim />
                        tail
                    </Word> rather than dumping whole logs.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:18:54.552093Z"
        >
            <Origin>01a0dd70-78f4-7d0d-a4ff-6805d20e7365</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Do we need sudo?</Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:19:02.488205Z"
        >
            <Origin>01a0dd70-78f4-7047-abe9-943715c62e19</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No. Everything in that setup runs as the lab account: creating the key, cloning, the worktrees, the agent
                loop, <Word>
                    <Verbatim />
                    setsid
                </Word>/<Word>
                    <Verbatim />
                    nohup
                </Word>, and the crontab entry. User crontabs don't need sudo either, unless an admin has restricted cron
                access. If they have, <Word>
                    <Verbatim />
                    crontab -
                </Word> will print an error, and the only consequence is that after a reboot you'd restart the agent by hand
                with the <Word>
                    <Verbatim />
                    setsid nohup …
                </Word> line.
            </Paragraph>
            <Paragraph>
                Git is the only prerequisite, and it has to be installed already, since installing it would need sudo.
            </Paragraph>
            <Paragraph>
                The one place sudo might come up later is Python. If training needs packages that aren't already on the
                machine, there are ways to get them without sudo. Once the channel works, Claude Code can check what's
                available and pick one.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:20:21.436485Z"
        >
            <Origin>01a0dd71-ce5e-7584-9c57-4429d354b696</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Let's go step by step git is version 2.43.0. Next?</Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:20:27.497195Z"
        >
            <Origin>01a0dd71-ce5e-7bc5-ae31-b29e385c4503</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                2.43 is recent enough for everything in the plan, including the orphan-branch worktree in step 3.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2a: make the key
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`mkdir -p ~/doug/altered-states/.key && cd ~/doug/altered-states
ssh-keygen -t ed25519 -N "" -C lipshutzlab-01 -f .key/id
cat .key/id.pub`}
            </CodeBox>
            <Paragraph>
                The last line prints one line starting with <Word>
                    <Verbatim />
                    ssh-ed25519
                </Word>. Copy it; RustDesk carries the clipboard over to your machine.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2b: register it on GitHub
                </Word> (from your own browser, not the lab machine)
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Open the altered-states repo (create it first if it doesn't exist yet; private is best).</Line>
                <Line>Go to Settings → Deploy keys → Add deploy key.</Line>
                <Line>
                    Title it <Word>
                        <Verbatim />
                        lipshutzlab-01
                    </Word>, paste the key, tick <Word>
                        <Bold />
                        Allow write access
                    </Word>, and click Add key.
                </Line>
            </Paragraph>
            <Paragraph>
                When that's done, send me the repo's owner/name (e.g. <Word>
                    <Verbatim />
                    yourname/altered-states
                </Word>) and I'll give you the exact clone commands.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:24:07.491095Z"
        >
            <Origin>01a0dd75-417e-74cb-b4c1-65f5cda8a761</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What part of this is the key:</Paragraph>
            <Paragraph>
                The key fingerprint is: SHA256:sQ9c6hB77Gna5NTr779M89K7onwv4thoELOpMhaKDGw lipshutzlab-01 The key's
                randomart image is: +--&#91;ED25519 256&#93;--+
            </Paragraph>
            <Paragraph>|                 |</Paragraph>
            <Paragraph>|                 |</Paragraph>
            <Paragraph>|      . . .      |</Paragraph>
            <Paragraph>|       B =       |</Paragraph>
            <Paragraph>|.     o S        |</Paragraph>
            <Paragraph>|.E .   O =       |</Paragraph>
            <Paragraph>|= . . . O o   o. |</Paragraph>
            <Paragraph>|.o + . B .=o *.o.|</Paragraph>
            <Paragraph>
                | . o . +++B*.B*+| +----&#91;SHA256&#93;-----+ ssh-ed25519
                AAAAC3NzaC1lZDI1NTE5AAAAIOc+BODeve/sny5wFzZHCd6Q5aNulZIwlZFMaPiivfAy lipshutzlab-01
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:24:10.586641Z"
        >
            <Origin>01a0dd75-417e-7e88-90dd-9204ea28945e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The key is the last line, all of it:</Paragraph>
            <CodeBox>
                {`ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOc+BODeve/sny5wFzZHCd6Q5aNulZIwlZFMaPiivfAy lipshutzlab-01`}
            </CodeBox>
            <Paragraph>
                Paste that whole line into GitHub's "Key" field. Everything above it (the fingerprint and the randomart
                picture) is <Word>
                    <Verbatim />
                    ssh-keygen
                </Word> describing the key and isn't needed.
            </Paragraph>
            <Paragraph>
                This is the public half, so it's safe to paste and share. The private half stays in <Word>
                    <Verbatim />
                    .key/id
                </Word> on the machine and never leaves it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:25:31.726719Z"
        >
            <Origin>01a0dd76-8a36-7d34-9096-9b0e9a01d8ec</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>doug-dna is the github name Repo url: https://github.com/DNA-Platform/altered-states</Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:25:45.917148Z"
        >
            <Origin>01a0dd76-8a36-732d-a7b7-6997f6684fa5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Once the deploy key is added on DNA-Platform/altered-states, run this on the machine:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2c: clone into  0 
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`cd ~/doug/altered-states
SSHCMD="ssh -i $HOME/doug/altered-states/.key/id -o IdentitiesOnly=yes -o UserKnownHostsFile=$HOME/doug/altered-states/.key/known_hosts -o StrictHostKeyChecking=accept-new"
GIT_SSH_COMMAND="$SSHCMD" git clone git@github.com:DNA-Platform/altered-states.git main
git -C main config core.sshCommand "$SSHCMD"
git -C main config user.name "lipshutzlab-01"
git -C main config user.email "lipshutzlab-01@localhost"`}
            </CodeBox>
            <Paragraph>
                The identity keeps the box's commits labeled as coming from the box, separate from your doug-dna commits.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you should see:
                </Word> <Word>
                    <Verbatim />
                    Cloning into 'main'...
                </Word>, and possibly a one-time note that github.com was added to the known hosts, which is expected. If
                the repo is still empty, git warns about that, which is also fine.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If it goes wrong:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                         0 :
                    </Word> the deploy key isn't registered on this repo yet, or "Allow write access" wasn't ticked.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It hangs:
                    </Word> the lab network probably blocks outbound port 22. Press Ctrl-C, re-run the <Word>
                        <Verbatim />
                        SSHCMD=
                    </Word> line with <Word>
                        <Verbatim />
                        -o HostName=ssh.github.com -p 443
                    </Word> added inside the quotes, then run the rest again.
                </Line>
            </Paragraph>
            <Paragraph>Paste what you get and we'll go to step 3.</Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:27:01.378085Z"
        >
            <Origin>01a0dd77-e82f-7f11-84df-048558fb7b06</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Done</Paragraph>
        </Message>
        <Message
            at="2026-09-26T11:27:11.287983Z"
        >
            <Origin>01a0dd77-e82f-7112-84ae-6aa2242f25b1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 3: the command channel
                </Word>
            </Paragraph>
            <Paragraph>
                This makes a small separate branch called <Word>
                    <Verbatim />
                    remote
                </Word>, checked out in its own folder, with a <Word>
                    <Verbatim />
                    cmd/
                </Word> inbox and an <Word>
                    <Verbatim />
                    out/
                </Word> outbox. It shares no history or files with your code.
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`cd ~/doug/altered-states
git -C main worktree add --orphan -b remote ../remote
cd remote && mkdir cmd out && touch cmd/.keep out/.keep
git add . && git commit -qm "command channel" && git push -qu origin remote`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    What you should see:
                </Word> a line like <Word>
                    <Verbatim />
                    Preparing worktree (new branch 'remote')
                </Word>, then nothing, because the rest runs quietly. To check:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`ls ~/doug/altered-states          # main  remote
git -C ~/doug/altered-states/remote log --oneline   # one commit: command channel`}
            </CodeBox>
            <Paragraph>
                A <Word>
                    <Verbatim />
                    remote
                </Word> branch should also show up on GitHub.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If the first git line errors:
                </Word> use this pair in its place, then continue from <Word>
                    <Verbatim />
                    cd remote
                </Word>:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`git -C main worktree add --detach ../remote
cd remote && git switch --orphan remote && cd ..`}
            </CodeBox>
            <Paragraph>Tell me when it's through and we'll start the agent in step 4.</Paragraph>
        </Message>
        <Message
            at="2026-09-26T12:19:52.684982Z"
        >
            <Origin>01a0dda8-479e-718b-b7ca-41b6f9a1dce1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I think you are confused. I am trying to minimally set things up so that YOU can do this on your own through
                SSH right? I shouldn't be asked to do a single thing more than is necessary. Did I even need to checkout
                github?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T12:20:59.869272Z"
        >
            <Origin>01a0dda8-479e-7e0f-ac5c-e4239aae3f31</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Mostly yes, and I asked you for more than was necessary.</Paragraph>
            <Paragraph>
                One correction first. Plain SSH isn't available here. It would need an SSH server on the box and a way into
                the lab's network, and both mean installing something. So this setup uses the repo as the connection
                instead: Claude Code pushes a command, a small loop on the box runs it and pushes the output back. It gives
                Claude Code the same abilities as SSH (pull, branch, run, commit, check status), with about 30 seconds of
                delay per command.
            </Paragraph>
            <Paragraph>
                On your question: the clone wasn't strictly needed. Once the loop is running, Claude Code could have done it
                through the channel. It isn't wasted, because the loop uses it, but step 3 was unnecessary. Skip it. Claude
                Code can create that branch from your Windows clone. The only things that truly needed you were the key,
                which you've done, and starting the loop, which is below.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your last step: one paste on the box
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`${''}cat > ~/doug/altered-states/agent.sh <<'EOF'
#!/bin/bash
# Runs each new cmd/<id>.sh on branch 'remote' from ~/doug/altered-states; pushes out/<id>.txt
A="$HOME/doug/altered-states"
while true; do
  cd "$A"; git -C main fetch -q origin
  [ -e remote/.git ] || { rmdir remote 2>/dev/null; git -C main worktree add -q ../remote remote 2>/dev/null; }
  if cd "$A/remote" 2>/dev/null && git pull -q --rebase origin remote; then
    for c in cmd/*.sh; do
      [ -e "$c" ] || continue
      id=$(basename "$c" .sh); [ -e "out/$id.txt" ] && continue
      { cat "$c"; echo "---"
        (cd "$A" && timeout 30m bash "$A/remote/$c" < /dev/null 2>&1)
        echo "--- exit $? at $(date -Is)"; } > "out/$id.txt"
      git add "out/$id.txt" && git commit -qm "out $id"
      until git push -q origin HEAD:remote; do sleep 10; git pull -q --rebase origin remote; done
    done
  fi
  sleep 30
done
EOF
chmod +x ~/doug/altered-states/agent.sh
setsid nohup ~/doug/altered-states/agent.sh > ~/doug/altered-states/agent.log 2>&1 < /dev/null &
(crontab -l 2>/dev/null; echo "@reboot $HOME/doug/altered-states/agent.sh > $HOME/doug/altered-states/agent.log 2>&1") | crontab -`}
            </CodeBox>
            <Paragraph>
                It waits quietly until the <Word>
                    <Verbatim />
                    remote
                </Word> branch exists on GitHub, then starts taking commands. This works whether or not you already ran step
                3. After that you can close RustDesk.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Then give Claude Code this, in your local clone
                </Word> (as CLAUDE.md or pasted in):
            </Paragraph>
            <CodeBox
                language="markdown"
            >
                {`## Lab box (lipshutzlab-01) — no SSH; commands go through branch \`remote\`
- If \`remote\` doesn't exist on GitHub, create it as an orphan branch with \`cmd/.keep\` and \`out/.keep\`.
- To run a command: write it to \`cmd/<YYYYmmdd-HHMMSS>.sh\` on \`remote\`, commit, push.
  The box polls every ~30s, runs it from \`~/doug/altered-states\` (30-min limit),
  and pushes the output to \`out/<same-id>.txt\`.
- Box layout: \`~/doug/altered-states/main\` is a clone; each branch gets a sibling
  folder via \`git -C main worktree add ../<branch> <branch>\`.
- Long jobs: \`setsid nohup … > log 2>&1 < /dev/null &\`, ending with \`git add -A; git commit; git push\`.
- Stay inside \`~/doug/altered-states\`. No sudo, no installs.`}
            </CodeBox>
        </Message>
        <Message
            at="2026-09-26T12:21:25.228824Z"
        >
            <Origin>01a0dda9-b564-7708-9b47-2d8f4dd35a48</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No this is useless unless you locally can commit. If we need sudo access, I can get it.</Paragraph>
        </Message>
        <Message
            at="2026-09-26T12:22:11.769271Z"
        >
            <Origin>01a0dda9-b564-7c32-934b-10fc64c8305e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Agreed. With sudo, real SSH works, and then Claude Code runs git and everything else directly on the box.
                Using Tailscale's built-in SSH keeps your part short: no SSH server to install and no keys to move by hand,
                because Tailscale takes over port 22 for connections from your tailnet and authenticates them with its own
                node keys.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the box
                </Word> (this will ask for the sudo password)
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`wget -qO- https://tailscale.com/install.sh | sh
sudo tailscale up --ssh`}
            </CodeBox>
            <Paragraph>
                The second command prints a login URL. Open it in your browser on Windows and sign in with the account
                you'll use for Tailscale.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    In the Tailscale admin console
                </Word> (login.tailscale.com/admin)
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Machines → lipshutzlab-01 → ⋯ → <Word>
                        <Bold />
                        Disable key expiry
                    </Word>. That stops it from periodically asking to re-authenticate.
                </Line>
                <Line>
                    Access controls → in the <Word>
                        <Verbatim />
                        "ssh"
                    </Word> section, change <Word>
                        <Verbatim />
                        "action": "check"
                    </Word> to <Word>
                        <Verbatim />
                        "action": "accept"
                    </Word> and save. Check mode can make connections re-authenticate on a timer (12 hours by default). Each
                    time, it pauses for a browser login, which would stall Claude Code.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On Windows
                </Word> Install Tailscale and sign in with the same account. Then test in PowerShell:
            </Paragraph>
            <CodeBox>
                {`ssh lipshutzlab-01@lipshutzlab-01 hostname`}
            </CodeBox>
            <Paragraph>
                If it prints <Word>
                    <Verbatim />
                    lipshutzlab-01
                </Word>, you're done.
            </Paragraph>
            <Paragraph>
                After that, Claude Code takes over entirely over SSH. The deploy key and clone you already made stay useful,
                since the box uses them to push to GitHub. If you ran the agent paste, Claude Code can remove it, since SSH
                replaces it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T12:32:58.771071Z"
        >
            <Origin>01a0ddb4-4a77-7540-8334-c363b3f70a5a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I have it. It works</Paragraph>
        </Message>
        <Message
            at="2026-09-26T12:33:14.784675Z"
        >
            <Origin>01a0ddb4-4a77-7cb9-af2f-fd99f3425057</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That's the whole setup, then. Your part is done.</Paragraph>
            <Paragraph>
                What remains is telling Claude Code how to use the box. Add this to CLAUDE.md in your local clone of
                altered-states:
            </Paragraph>
            <CodeBox
                language="markdown"
            >
                {`## Lab box (lipshutzlab-01)
- Connect: \`ssh lipshutzlab-01@lipshutzlab-01\` (Tailscale SSH, no keys needed).
- Work only inside \`~/doug/altered-states/\`. No sudo; ask Doug before installing anything.
- \`main/\` is a clone of DNA-Platform/altered-states. It pushes with a deploy key scoped
  to this repo (set in its git config; worktrees inherit it).
- One folder per branch: \`git -C main fetch -q && git -C main worktree add ../<branch> <branch>\`.
- No tmux. Launch long jobs detached, committing results at the end:
  \`cd ~/doug/altered-states/<branch> && setsid nohup bash -c '<cmd> > run.log 2>&1; git add -A; git commit -qm results; git push -q' > /dev/null 2>&1 < /dev/null &\`
- Status: \`tail run.log\`, \`nvidia-smi\`. Keep checkpoints and big outputs gitignored.`}
            </CodeBox>
            <Paragraph>For the first session, a prompt like this covers the remaining setup:</Paragraph>
            <Paragraph>
                <Quoted />
                Survey the lab box (GPUs, CUDA, Python and which packages are available). Remove the old polling agent if it
                exists: kill <Word>
                    <Verbatim />
                    agent.sh
                </Word>, delete its crontab line, and remove the <Word>
                    <Verbatim />
                    remote
                </Word> worktree and branch. Then do a small end-to-end test run on a new branch.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T12:33:38.044420Z"
        >
            <Origin>01a0ddb4-e465-7b57-9eab-b1ef40482f64</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No, I am using claude on MY machine and he will be driving from there. Is this not clear?</Paragraph>
        </Message>
        <Message
            at="2026-09-26T12:34:16.554352Z"
        >
            <Origin>01a0ddb4-e465-7061-a5a7-fe8f3b1e2895</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It's clear. Claude Code runs on your machine and drives the box remotely. The CLAUDE.md I gave was written
                badly: its paths and commands read as if Claude were sitting on the box. Here it is written from your
                machine's side:
            </Paragraph>
            <CodeBox
                language="markdown"
            >
                {`## Remote compute: lab box (lipshutzlab-01)
You run on Doug's Windows machine. The box is remote; reach it only through
\`ssh lipshutzlab-01@lipshutzlab-01 '<command>'\` (Tailscale SSH, no keys needed).

Loop:
1. Edit and commit here, then push the branch.
2. Check it out on the box, one folder per branch:
   \`ssh lipshutzlab-01@lipshutzlab-01 'cd ~/doug/altered-states && git -C main fetch -q && git -C main worktree add ../<branch> <branch>'\`
   (if the folder already exists: \`git -C ~/doug/altered-states/<branch> pull -q\`)
3. Launch detached (no tmux on the box); the job commits and pushes when done:
   \`ssh lipshutzlab-01@lipshutzlab-01 'cd ~/doug/altered-states/<branch> && setsid nohup bash -c "<cmd> > run.log 2>&1; git add -A; git commit -qm results; git push -q" > /dev/null 2>&1 < /dev/null &'\`
4. Status: \`ssh lipshutzlab-01@lipshutzlab-01 'tail -n 30 ~/doug/altered-states/<branch>/run.log; nvidia-smi'\`
5. Results: \`git fetch\` here, then promote what's wanted to main.

On the box: stay inside ~/doug/altered-states, no sudo, ask Doug before installing anything.
Keep checkpoints and big outputs gitignored.`}
            </CodeBox>
        </Message>
        <Message
            at="2026-09-26T13:44:47.227126Z"
        >
            <Origin>01a0ddf6-03c2-79b3-8a98-afcb2de31af4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here's what my local team says:</Paragraph>
            <Paragraph>
                David: Yes, the loop makes sense: commit and push here, one worktree per branch on the box, a detached job
                that commits and pushes its own results, and we fetch and merge what we want back. I'll drive all of it over
                SSH from here. David: One thing is missing on this machine, and it blocks everything. Tailscale isn't
                installed here. There's no binary, no service and no Tailscale network adapter, so <Word>
                    <Verbatim />
                    lipshutzlab-01
                </Word> doesn't resolve (<Word>
                    <Verbatim />
                    Could not resolve hostname
                </Word>). I can't fix that myself: it needs an install and a browser sign-in to the lab's tailnet. Once it's
                in:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Name. Make sure MagicDNS is on, so the short name <Word>
                        <Verbatim />
                        lipshutzlab-01
                    </Word> resolves.
                </Line>
                <Line>
                    Host key. The first connection asks you to accept the box's host key. Either run <Word>
                        <Verbatim />
                        ssh lipshutzlab-01@lipshutzlab-01
                    </Word> once yourself and type yes, or tell me to accept it on first use.
                </Line>
                <Line>
                    ACL mode. If the tailnet ACL grants SSH in "check" mode, it will periodically want a browser
                    re-authentication, and my non-interactive commands would stall. "accept" mode for this user avoids that.
                </Line>
            </Paragraph>
            <Paragraph>
                David: One thing to fix before the first job runs. The job ends with <Word>
                    <Verbatim />
                    git add -A
                </Word>, and our <Word>
                    <Verbatim />
                    artifacts/
                </Word> folders aren't gitignored. It would push every cached <Word>
                    <Verbatim />
                    .npy
                </Word>: the homeostasis raw traces are about 53 MB each, and GitHub warns above 50 MB and rejects above 100
                MB. I'll propose exact ignore rules for the regenerable caches and checkpoints, keeping the small artifacts
                we deliberately track, for you to confirm. Nancy: Once I can connect, I'll check a few things read-only
                before running anything:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    that <Word>
                        <Verbatim />
                        ~/doug/altered-states/main
                    </Word> tracks the same remote as here;
                </Line>
                <Line>where the raw scans live on the box, since our loaders take the dataset root from the config;</Line>
                <Line>what Python environment and GPU are there;</Line>
                <Line>whether the box can push, since the job commits for us.</Line>
            </Paragraph>
            <Paragraph>
                Nancy: Also, nothing from the last two days is committed yet: the homeostasis cleanup, the spontaneous
                figures, the pipeline loader move and the activity module. The box can only check out what's pushed. How do
                you want that committed: straight to main, or on a branch? Adam: On skills, I'd name them after the loop's
                steps: <Word>
                    <Verbatim />
                    als-sync
                </Word> (push the branch and make or update its worktree on the box), <Word>
                    <Verbatim />
                    als-launch
                </Word> (the detached run), <Word>
                    <Verbatim />
                    als-status
                </Word> (log tail and <Word>
                    <Verbatim />
                    nvidia-smi
                </Word>) and <Word>
                    <Verbatim />
                    als-harvest
                </Word> (fetch, review, promote to main). I'd write them after the first real round trip, so they encode the
                commands that actually worked rather than the ones we expect to.
            </Paragraph>
            <Paragraph>Are they right? Can you give me instructions? You know more</Paragraph>
        </Message>
        <Message
            at="2026-09-26T13:46:06.697669Z"
        >
            <Origin>01a0ddf6-03c2-70a0-8d9b-d8713a3cde0c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                They're right on every point. The one thing to add is that your own test worked, so Tailscale is installed
                somewhere, just not where Claude Code's shell runs. That's the first thing to sort out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Their points
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        David, the loop:
                    </Word> correct.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        David, Tailscale:
                    </Word> his observation is right for the environment he's running in. One small correction: it isn't a
                    lab tailnet. It's the tailnet you signed the box into, so whatever joins has to use that same account.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        David, the three details:
                    </Word> all correct. MagicDNS is almost certainly on already, since the short name resolved in your
                    test, and you already switched the ACL to "accept." Accepting the host key on first use is fine here,
                    because Tailscale has already authenticated the path.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        David, gitignore:
                    </Word> correct and important. Two additions. First, <Word>
                        <Verbatim />
                        .gitignore
                    </Word> only affects untracked files, so it's worth checking that none of the big caches are already
                    committed. Second, a size guard in the launch step, which unstages anything over 50 MB before the
                    commit, is a cheap safety net.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Nancy:
                    </Word> those are the right four checks, and she's right that the box only sees pushed commits.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Adam:
                    </Word> sensible. Writing the skills after the first real round trip is the right order.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Instructions
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Find where Claude Code runs.
                    </Word> Ask it to run <Word>
                        <Verbatim />
                        uname -a
                    </Word>.
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Bold />
                            Starts with MINGW or MSYS (native Windows):
                        </Word> Claude Code is on a different Windows machine from the one where your test worked. Install
                        Tailscale there and sign in with the same account.
                    </Line>
                    <Line>
                        <Word>
                            <Bold />
                            Mentions microsoft or WSL:
                        </Word> it's in WSL. Your Windows Tailscale usually still carries the traffic, and only the name
                        fails to resolve. In PowerShell, <Word>
                            <Verbatim />
                            tailscale ip -4 lipshutzlab-01
                        </Word> gives the box's 100.x address; tell Claude Code to use <Word>
                            <Verbatim />
                            lipshutzlab-01@&lt;that address&gt;
                        </Word>. If that times out, install Tailscale inside WSL (<Word>
                            <Verbatim />
                            curl -fsSL https://tailscale.com/install.sh | sh
                        </Word>, then <Word>
                            <Verbatim />
                            sudo tailscale up
                        </Word>) with the same account.
                    </Line>
                    <Line>
                        <Word>
                            <Bold />
                            Anything else
                        </Word> (a cloud or remote environment): it can't reach your tailnet, so run Claude Code on your own
                        machine instead.
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Tell David to accept the host key on first use.
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Answer Nancy.
                    </Word> If the last two days of work runs cleanly and you'd build on it anyway, commit it to main, since
                    every run branch starts from there. If some of it is still unsettled, put it on a branch and launch runs
                    from that branch. The loop works the same either way.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Confirm David's ignore rules
                    </Word> and ask him to add the size guard. Then do the first round trip, and after that have Adam write
                    the skills.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T13:47:55.497751Z"
        >
            <Origin>01a0ddf8-e729-714b-a44d-94739f2ef550</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We are checking big things into git. As big as possible. Science is involved. I want source control on it.
                So we ARE going through github as much as we can
            </Paragraph>
            <Paragraph>
                Factor that in and write a thorough message to David and it can be long and give him as much background
                detail as you can
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T13:54:41.163410Z"
        >
            <Origin>01a0ddf8-e729-722f-879b-323d57e058bf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “GitHub Git LFS billing free storage bandwidth quota 2026”</Action>
            <Action>
                Searched the web for “GitHub Git LFS maximum file size per plan 2 GB 4 GB 5 GB; GitHub blocks files larger
                than 100 MiB push limit 2 GB”
            </Action>
            <Action>Used web search fast</Action>
            <Paragraph>
                Here's a message for David. It assumes he'll be the one executing, and it flags the two decisions that are
                yours.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    David — big files go through GitHub: plan and background
                </Word>
            </Paragraph>
            <Paragraph>
                Doug has made one change to the loop. Science outputs go into version control, as large as GitHub can take,
                instead of into <Word>
                    <Verbatim />
                    .gitignore
                </Word>. That covers the homeostasis raw traces, the caches, and the checkpoints. The goal is that every run
                leaves a complete, versioned record on GitHub: the code it ran, its environment, its logs, and its outputs.
                Only non-science junk (bytecode, virtualenvs, editor and OS files) stays ignored. This replaces the earlier
                plan to ignore the artifacts caches and unstage anything over 50 MB.
            </Paragraph>
            <Heading>0. Connectivity comes first</Heading>
            <Paragraph>
                Nothing below works until your shell can reach the box. Doug's own test succeeded, so Tailscale is working
                on his tailnet; it just isn't where your shell runs. Run <Word>
                    <Verbatim />
                    uname -a
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        MINGW or MSYS:
                    </Word> you're on a Windows machine without Tailscale. Doug installs it there and signs in with the same
                    account the box uses. It's his tailnet, not a lab one.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Linux with "microsoft" in it:
                    </Word> you're in WSL. Windows' Tailscale usually carries WSL traffic and only the name lookup fails.
                    Get the 100.x address with <Word>
                        <Verbatim />
                        tailscale ip -4 lipshutzlab-01
                    </Word> in Windows PowerShell and put it in an SSH <Word>
                        <Verbatim />
                        Host
                    </Word> entry. If that times out, Tailscale needs to be installed inside WSL, with the same account.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Anything else:
                    </Word> it's a remote environment that can't reach the tailnet.
                </Line>
            </Paragraph>
            <Paragraph>
                MagicDNS is on, since Doug's test resolved the short name. The SSH ACL should already be in accept mode from
                setup; if a connection ever pauses with a login URL, that's the setting to check. Accepting the host key on
                first use is fine: pass <Word>
                    <Verbatim />
                    -o StrictHostKeyChecking=accept-new
                </Word> on the first connection.
            </Paragraph>
            <Heading>1. What GitHub allows</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Plain git.
                </Word> GitHub warns on files above 50 MiB and hard-blocks files above 100 MiB. It recommends keeping
                repositories under 1 GB, and strongly under 5 GB. A single push is capped at 2 GiB, but files stored in LFS
                don't count toward that cap. So plain git can't carry this data. A 53 MB trace gets through with a warning,
                but one file over 100 MiB fails the whole push, and every version of every binary stays in history
                permanently, making every clone heavier.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Git LFS is the route.
                </Word> With LFS, git history stores a small pointer (a hash and a size) and the content goes to GitHub's
                LFS store. On <Word>
                    <Verbatim />
                    git add
                </Word>, the LFS filter converts files matching tracked patterns into pointers. On <Word>
                    <Verbatim />
                    git push
                </Word>, a pre-push hook uploads the new objects. On checkout, the content is downloaded. The git repository
                stays small no matter how much data goes in, so the repo-size guidance stops mattering. What matters
                instead:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Per-file cap.
                    </Word> The LFS maximum file size is 2 GB on Free and Pro, 4 GB on Team, and 5 GB on Enterprise Cloud.
                    This is the only hard wall.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Included quota.
                    </Word> Free, Pro, and Free-for-organizations accounts get 10 GiB of storage and 10 GiB of bandwidth per
                    month. Team and Enterprise Cloud get 250 GiB of each.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Overage prices.
                    </Word> Beyond the quota, bandwidth costs $0.0875 per GiB and storage $0.07 per GiB per month. For
                    scale, 100 GiB over the free amount is about $7 a month, and a full TiB is about $72.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What's metered.
                    </Word> Downloads count against the repository owner's bandwidth. Uploads count toward storage, but
                    their bandwidth isn't measured. For us, the box pushing results costs only storage, and Doug's machine
                    pulling results costs bandwidth. All of it is billed to DNA-Platform as the repo owner, not to whoever
                    pushes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Budget behavior.
                    </Word> With the budget at $0, there are no overage charges, but LFS is blocked for the rest of the
                    calendar month once the quota runs out. Accounts without a payment method default to a $0 budget. In
                    practice, if DNA-Platform is on Free with no payment method, pushes carrying LFS objects start failing
                    once total storage passes 10 GiB. A job would then leave its results committed on the box but unpushed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Storage is append-only.
                    </Word> Storage is computed over every LFS object associated with the repository, whenever it was
                    uploaded, so deleting a branch doesn't give storage back. Treat every push as permanent. That suits a
                    scientific record, but budget for it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Releases.
                    </Word> GitHub doesn't limit the total size or bandwidth of release files, but each file must be under
                    the plan's LFS cap. This could suit big immutable artifacts later (final checkpoints, dataset
                    snapshots). It needs <Word>
                        <Verbatim />
                        gh
                    </Word> with Doug's credentials, since the deploy key can't create releases. Not needed now.
                </Line>
            </Paragraph>
            <Heading>2. Two decisions for Doug (bring him numbers)</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        LFS budget on DNA-Platform.
                    </Word> Check the plan and whether a payment method is on file (org → Settings → Billing), then set an
                    LFS budget high enough that pushes don't get blocked mid-month. One real run gives a per-run volume to
                    estimate from.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Raw scans.
                    </Word> Measure the dataset root on the box with <Word>
                        <Verbatim />
                        du -sh
                    </Word>. If it fits the budget, commit it once into LFS, so every run points at exact bytes. If it
                    doesn't, commit a one-time sha256 manifest of it; the wrapper below also records a per-run listing
                    (path, size, mtime) either way.
                </Line>
            </Paragraph>
            <Heading>3. Setup, in this order</Heading>
            <Paragraph>
                Order matters. The LFS patterns must be committed before any big file is, or that file lands in plain git
                history.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Check existing history
                    </Word> (local clone): ``<Word>
                        <Verbatim />
                        bash git rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(objectsize) %(rest)' \ | awk '$1=="blob" &amp;&amp; $2&gt;10485760 &#123;print $2, $3&#125;' | sort -n | tail -20 
                    </Word>`<Word>
                        <Verbatim />
                         If big blobs are already in history, 
                    </Word>git lfs migrate import --everything --include="&lt;patterns&gt;"` rewrites them into LFS. Do that
                    in a fresh clone so it can't touch the uncommitted work, then force-push and reset the box's clone.
                    Rewriting history is Doug's call, so check with him first.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Local LFS.
                    </Word> Run <Word>
                        <Verbatim />
                        git lfs version
                    </Word>; Git for Windows ships LFS, but WSL may need it installed. Then run <Word>
                        <Verbatim />
                        git lfs install
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                         0  on main.
                    </Word> Adjust the patterns to what the repo actually produces; you know the artifact folders better
                    than I do. ``<Word>
                        <Verbatim />
                        bash git lfs track "*.npy" "*.npz" "*.h5" "*.hdf5" "*.mat" "*.pt" "*.pth" "*.ckpt" "*.safetensors" "*.parquet" "*.tif" "*.tiff" echo '*.sh text eol=lf' &gt;&gt; .gitattributes 
                    </Word>`<Word>
                        <Verbatim />
                         The 
                    </Word>eol=lf<Word>
                        <Verbatim />
                         line matters. Scripts written on Windows must reach the box with LF line endings, or bash chokes on the 
                    </Word>\r`. Figures (png, pdf, svg) can stay in plain git, since they're small.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                         0 .
                    </Word> Shrink it to junk: <Word>
                        <Verbatim />
                        __pycache__/
                    </Word>, <Word>
                        <Verbatim />
                        *.pyc
                    </Word>, <Word>
                        <Verbatim />
                        .venv/
                    </Word>, <Word>
                        <Verbatim />
                        .ipynb_checkpoints/
                    </Word>, and editor and OS files. Remove any artifacts or cache entries.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Add the wrapper
                    </Word> <Word>
                        <Verbatim />
                        tools/run_job.sh
                    </Word> (section 4) on main.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Commit the pending two days of work
                    </Word> on top of that. Before pushing, <Word>
                        <Verbatim />
                        git lfs ls-files
                    </Word> should list every <Word>
                        <Verbatim />
                        .npy
                    </Word> and the other data files. Nancy's question, main or a branch, is Doug's call; this order holds
                    either way. Then push; the hook uploads the LFS content.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Set up the box.
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        git-lfs isn't installed there. The no-sudo route is to put the linux-amd64 binary from
                        github.com/git-lfs/git-lfs/releases into <Word>
                            <Verbatim />
                            ~/doug/altered-states/.bin/
                        </Word> and start your SSH commands with <Word>
                            <Verbatim />
                            export PATH=$HOME/doug/altered-states/.bin:$PATH;
                        </Word>. The wrapper does this itself. If PATH handling becomes a nuisance, <Word>
                            <Verbatim />
                            sudo apt install git-lfs
                        </Word> is a one-line fix Doug can run.
                    </Line>
                    <Line>
                        Run <Word>
                            <Verbatim />
                            git -C ~/doug/altered-states/main lfs install --local
                        </Word>. This keeps the hooks and filter config in the repo rather than the lab account's global
                        config. Worktrees share them, and share one LFS object store.
                    </Line>
                    <Line>
                        Run <Word>
                            <Verbatim />
                            git -C ~/doug/altered-states/main pull
                        </Word> to get the new main.
                    </Line>
                    <Line>
                        Check <Word>
                            <Verbatim />
                            df -h ~
                        </Word>. LFS keeps its own copy of each object under <Word>
                            <Verbatim />
                            main/.git/lfs/objects
                        </Word> beside the working file, so data takes roughly twice its size on the box. <Word>
                            <Verbatim />
                            git lfs prune
                        </Word> clears old local copies that are already pushed.
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Smoke test before real work.
                    </Word> Make a scratch branch <Word>
                        <Verbatim />
                        lfs-smoke
                    </Word> and run a trivial foreground job through the wrapper. It should write a small <Word>
                        <Verbatim />
                        .npy
                    </Word>, which tests the tracked-pattern path, and a ~60 MB file with an untracked extension, which
                    tests the wrapper's automatic routing to LFS. Confirm that the push landed, that <Word>
                        <Verbatim />
                        git lfs ls-files
                    </Word> on the branch lists both files, and that you can fetch it locally. This also confirms that the
                    deploy key can authenticate LFS uploads. I expect it to, since git-lfs authenticates over the same SSH
                    key and uses the repo's <Word>
                        <Verbatim />
                        core.sshCommand
                    </Word>, but it's the one piece not yet exercised. If it fails, the fallback is a fine-grained token
                    scoped to this repo, which Doug would create. Delete the branch afterwards. Its ~60 MB of LFS storage
                    stays, per the append-only point.
                </Line>
            </Paragraph>
            <Heading>
                4. The job wrapper: <Word>
                    <Verbatim />
                    tools/run_job.sh
                </Word>
            </Heading>
            <CodeBox
                language="bash"
            >
                {`${''}#!/usr/bin/env bash
# Run one job in this worktree, record provenance, commit everything, push.
# Usage (on the box, from the branch folder): bash tools/run_job.sh <command> [args...]
# Optional env: DATA_ROOT (dataset root to list), PYTHON (interpreter to snapshot),
#               LFS_MAX_BYTES (per-file LFS cap: 2 GB Free/Pro, 4 GB Team)
set -uo pipefail
export PATH="$HOME/doug/altered-states/.bin:$PATH"
cd "$(git rev-parse --show-toplevel)" || exit 1
branch=$(git rev-parse --abbrev-ref HEAD)
dirty=no; [ -n "$(git status --porcelain)" ] && dirty=yes
P=provenance; mkdir -p "$P"
LFS_MAX=\${LFS_MAX_BYTES:-2000000000}
BIG=$((10*1024*1024))    # anything larger that isn't already LFS gets routed to LFS

# Provenance before the run
{ echo "branch:  $branch"; echo "commit:  $(git rev-parse HEAD)"; echo "dirty:   $dirty"
  echo "host:    $(hostname)"; echo "command: $*"; echo "start:   $(date -Is)"; } > "$P/meta.txt"
{ "\${PYTHON:-python3}" -V; "\${PYTHON:-python3}" -m pip freeze; nvidia-smi; uname -a; } > "$P/env.txt" 2>&1
[ -n "\${DATA_ROOT:-}" ] && find "$DATA_ROOT" -type f -printf '%P\\t%s\\t%TY-%Tm-%Td %TH:%TM\\n' | sort > "$P/data-listing.tsv"

# The run
"$@" > "$P/log.txt" 2>&1
rc=$?
{ echo "end:     $(date -Is)"; echo "exit:    $rc"; } >> "$P/meta.txt"

# Stage everything; route stray big files to LFS; record what GitHub can't take
git add -A
: > "$P/not-uploaded.tsv"
git diff --cached --name-only --diff-filter=AMR -z | while IFS= read -r -d '' f; do
  size=$(stat -c %s -- "$f")
  if [ "$size" -gt "$LFS_MAX" ]; then
    git reset -q -- "$f"
    printf '%s\\t%s\\t%s\\n' "$(sha256sum -- "$f" | cut -d' ' -f1)" "$size" "$f" >> "$P/not-uploaded.tsv"
  elif [ "$size" -gt "$BIG" ] && ! git check-attr filter -- "$f" | grep -q ': lfs$'; then
    git reset -q -- "$f"
    git lfs track --filename "$f" > /dev/null
    git add -- .gitattributes "$f"
  fi
done
git add -- "$P/not-uploaded.tsv"
git commit -qm "run $branch: exit $rc"

# Push with retries (LFS uploads happen here)
for i in 1 2 3 4 5; do git push -q -u origin HEAD && exit 0; sleep $((i * 120)); done
echo "PUSH FAILED $(date -Is)" >&2; exit 1`}
            </CodeBox>
            <Paragraph>What it guarantees:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Provenance.
                    </Word> Every run's commit carries a <Word>
                        <Verbatim />
                        provenance/
                    </Word> folder: the exact commit it ran from and whether the tree was dirty, the command, start and end
                    times, the exit code, the Python packages, the GPU state, the log, and optionally the dataset listing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Failures are recorded too.
                    </Word> Failed runs are committed and pushed as well.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Stray big files go to LFS.
                    </Word> A big file with an extension nobody anticipated is routed to LFS automatically instead of
                    bloating plain history or blocking the push.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Nothing disappears.
                    </Word> A file over the LFS cap stays on the box, and its sha256, size, and path are committed in <Word>
                        <Verbatim />
                        not-uploaded.tsv
                    </Word>, so the record still identifies it exactly. Checkpoints that big should be sharded below the
                    cap, for example with sharded safetensors.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Push resilience.
                    </Word> The push retries with backoff. A final failure is written to the job's <Word>
                        <Verbatim />
                        .job.out
                    </Word> file next to the branch folder.
                </Line>
            </Paragraph>
            <Heading>5. The loop with LFS</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Sync:
                    </Word> as before (<Word>
                        <Verbatim />
                        git -C main worktree add ../&lt;branch&gt; &lt;branch&gt;
                    </Word>, or <Word>
                        <Verbatim />
                        pull
                    </Word> if the folder exists). New worktrees reuse the shared LFS store, so the box downloads only
                    objects it doesn't already have.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Launch:
                    </Word> ``<Word>
                        <Verbatim />
                        bash ssh lipshutzlab-01@lipshutzlab-01 'cd ~/doug/altered-states/&lt;branch&gt; &amp;&amp; DATA_ROOT=&lt;scans root&gt; setsid nohup bash tools/run_job.sh python3 train.py --config configs/x.yaml &gt; ../&lt;branch&gt;.job.out 2&gt;&amp;1 &lt; /dev/null &amp;' 
                    </Word>`<Word>
                        <Verbatim />
                         Keep branch names flat (no slashes) so the folder and 
                    </Word>.job.out` paths stay simple.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Status:
                    </Word> <Word>
                        <Verbatim />
                        tail -n 30 &lt;branch&gt;/provenance/log.txt
                    </Word>, <Word>
                        <Verbatim />
                        nvidia-smi
                    </Word>, and <Word>
                        <Verbatim />
                        &lt;branch&gt;.job.out
                    </Word>, where push retries and failures show up. <Word>
                        <Verbatim />
                        git -C &lt;branch&gt; status -sb
                    </Word> shows "ahead" if the push hasn't landed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Harvest:
                    </Word> <Word>
                        <Verbatim />
                        git fetch
                    </Word>, then read <Word>
                        <Verbatim />
                        git show origin/&lt;branch&gt;:provenance/meta.txt
                    </Word>, which needs no LFS download. To promote to main, run <Word>
                        <Verbatim />
                        git checkout origin/&lt;branch&gt; -- &lt;paths&gt;
                    </Word> and commit. Promotion moves pointers, not bytes. Content downloads only when a clone actually
                    checks it out, and downloads are the metered side. So on Doug's clone, set <Word>
                        <Verbatim />
                        git config lfs.fetchinclude "&lt;patterns you want locally&gt;"
                    </Word>, or clone with <Word>
                        <Verbatim />
                        GIT_LFS_SKIP_SMUDGE=1
                    </Word>, so routine pulls don't download every trace. Use <Word>
                        <Verbatim />
                        git lfs pull --include="&lt;path&gt;/**"
                    </Word> when a particular dataset is needed locally.
                </Line>
            </Paragraph>
            <Paragraph>
                For Adam: <Word>
                    <Verbatim />
                    als-launch
                </Word> should call the wrapper, and <Word>
                    <Verbatim />
                    als-harvest
                </Word> should include the selective fetch.
            </Paragraph>
            <Paragraph>
                Two things in the message are yours to decide: the LFS budget on DNA-Platform, and whether the raw scans go
                in whole or as a manifest.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T14:04:07.597957Z"
        >
            <Origin>01a0de07-bbc4-7390-83ee-122841ae5bfd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay you are right. We need to have a setup process that involves sending and receiving files. So let's
                imagine our first step is pulling data and state and whatever over there. Does SSH give us the power to
                upload files?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T14:05:06.992847Z"
        >
            <Origin>01a0de07-bbc4-7aa6-9eab-c20b25825180</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Tailscale SSH scp sftp support sftp-server subsystem”</Action>
            <Paragraph>
                Yes. Tailscale SSH has its own SFTP server built in, so <Word>
                    <Verbatim />
                    scp
                </Word> and <Word>
                    <Verbatim />
                    sftp
                </Word> work even though the box runs no regular SSH server. Anything you can run over SSH can also move
                files through its input and output, so there are three practical ways, all from your machine:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1.  0  for files and folders
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`scp -r data lipshutzlab-01@lipshutzlab-01:doug/altered-states/main/
scp -r lipshutzlab-01@lipshutzlab-01:doug/altered-states/<branch>/artifacts ./incoming/`}
            </CodeBox>
            <Paragraph>
                Use paths relative to the home folder (no <Word>
                    <Verbatim />
                    ~
                </Word>) with scp. SFTP-based scp resolves relative paths from home, and <Word>
                    <Verbatim />
                    ~
                </Word> isn't expanded reliably.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2.  0  through ssh for big trees with many files
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`tar -cf - data | ssh lipshutzlab-01@lipshutzlab-01 'tar -xf - -C ~/doug/altered-states/main'
ssh lipshutzlab-01@lipshutzlab-01 'tar -cf - -C ~/doug/altered-states/<branch> artifacts' | tar -xf - -C ./incoming`}
            </CodeBox>
            <Paragraph>
                This is usually the fastest for many files, since it streams one continuous archive. Skip compression for
                <Word>
                    <Verbatim />
                    .npy
                </Word> data; it barely compresses and costs CPU time.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3.  0  when a big transfer might be interrupted
                </Word>
            </Paragraph>
            <Paragraph>
                Run <Word>
                    <Verbatim />
                    sftp lipshutzlab-01@lipshutzlab-01
                </Word>, then <Word>
                    <Verbatim />
                    reput &lt;local&gt; &lt;remote&gt;
                </Word> or <Word>
                    <Verbatim />
                    reget &lt;remote&gt; &lt;local&gt;
                </Word> to resume a partial transfer instead of starting over. <Word>
                    <Verbatim />
                    rsync
                </Word> is the other resumable, incremental option, but it needs rsync on both ends. It's standard in WSL
                but not in Git Bash.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two practical checks
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Integrity.
                    </Word> Compare <Word>
                        <Verbatim />
                        sha256sum
                    </Word> output on both ends for anything that matters scientifically.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Speed.
                    </Word> <Word>
                        <Verbatim />
                        tailscale ping lipshutzlab-01
                    </Word> shows whether traffic goes directly between the machines or through a Tailscale relay. Relays
                    are much slower, which matters for bulk data.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How this fits the GitHub plan
                </Word>
            </Paragraph>
            <Paragraph>
                GitHub stays the record, and SSH becomes the fast transport. This also avoids the metered side of LFS,
                because GitHub charges bandwidth for downloads, not uploads. So after pushing from your machine (the upload
                is free), you can hand the box the bytes directly instead of having it download them from GitHub:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`tar -cf - -C .git/lfs objects | ssh lipshutzlab-01@lipshutzlab-01 'tar -xf - -C ~/doug/altered-states/main/.git/lfs'`}
            </CodeBox>
            <Paragraph>
                When the box then pulls, git-lfs finds the objects already in its local store and downloads nothing. The
                same works in reverse for results: fetch the commits (pointers only) from GitHub, copy the LFS objects over
                SSH, and <Word>
                    <Verbatim />
                    git lfs checkout
                </Word> fills in the files locally.
            </Paragraph>
            <Paragraph>
                One limit on "state": data, checkpoints, and configs transfer fine, but a Python environment doesn't carry
                over from Windows to Linux. That gets built on the box.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T14:06:53.714842Z"
        >
            <Origin>01a0de0a-3c9f-739f-8972-ad70e695495b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so write a new message to David, built from what you wrote before, but about the idea that we will take
                what is committed and what is sent back and forth in a per-item basis, and that we will have to send data to
                setup the computer there, so we will figure out the file bridge
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T14:09:52.907690Z"
        >
            <Origin>01a0de0a-3c9f-7b2b-a88f-069f29779ab3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the new message for David. It replaces the previous one.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    David — plan for the lab box: what gets committed, what gets bridged, and how we set it up
                </Word>
            </Paragraph>
            <Paragraph>
                Two channels connect us to the box. GitHub is the record: code, plus every data item we choose to version,
                with large binaries in Git LFS. The second is a direct file bridge over SSH, which is fast and free but
                keeps no record of its own. Setting up the box means sending it data and state, and every run sends results
                back, so both channels will carry data. Which channel carries each item gets decided item by item, with
                Doug.
            </Paragraph>
            <Paragraph>
                One rule ties it together: nothing moves or gets used without a record. Committed items are versioned by
                git. Bridged items are pinned by a sha256 manifest and a ledger entry, both committed. Either way, any run
                can be traced to the exact bytes it used and produced.
            </Paragraph>
            <Paragraph>Box layout, all inside the one allowed folder:</Paragraph>
            <CodeBox>
                {`~/doug/altered-states/
  .key/            deploy key (this repo only)
  .bin/            git-lfs, if installed without sudo
  main/            the clone; its .git holds the shared LFS object store
  <branch>/        one worktree per run branch
  <branch>.job.out job output (push retries, failures)
  shared/<item>/   bridged items, usable from any branch, pinned by manifests in the repo`}
            </CodeBox>
            <Heading>0. Connectivity comes first</Heading>
            <Paragraph>
                Nothing works until your shell can reach the box. Doug's test succeeded from his side, so if yours fails,
                the difference is where your shell runs. Run <Word>
                    <Verbatim />
                    uname -a
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        MINGW or MSYS:
                    </Word> Tailscale needs to be installed on that Windows machine, signed in with the account the box
                    uses. It's Doug's tailnet, not a lab one.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Linux with "microsoft" in it:
                    </Word> you're in WSL. Put the box's 100.x address (from <Word>
                        <Verbatim />
                        tailscale ip -4 lipshutzlab-01
                    </Word> in Windows PowerShell) in an SSH <Word>
                        <Verbatim />
                        Host
                    </Word> entry. If that times out, install Tailscale inside WSL with the same account.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Anything else:
                    </Word> a remote environment, which can't reach the tailnet.
                </Line>
            </Paragraph>
            <Paragraph>
                Accept the host key on first use with <Word>
                    <Verbatim />
                    -o StrictHostKeyChecking=accept-new
                </Word>. If a connection ever pauses on a login URL, the tailnet's SSH ACL has fallen back to check mode.
            </Paragraph>
            <Heading>1. Channel one: GitHub</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Plain git.
                </Word> GitHub warns on files above 50 MiB and blocks files above 100 MiB. It recommends keeping
                repositories under 1 GB, and strongly under 5 GB. A single push is capped at 2 GiB, but LFS files don't
                count toward that cap. So plain git can't carry this data: one file over 100 MiB fails the whole push, and
                every version of every binary stays in history for good.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Git LFS
                </Word> keeps a small pointer in git history and the content in GitHub's LFS store. <Word>
                    <Verbatim />
                    git add
                </Word> converts files matching tracked patterns into pointers, <Word>
                    <Verbatim />
                    git push
                </Word> uploads new objects through a pre-push hook, and checkout downloads them. The git repo stays small
                however much data goes in. What limits LFS:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Per-file cap:
                    </Word> 2 GB on Free and Pro, 4 GB on Team, 5 GB on Enterprise Cloud.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Included quota:
                    </Word> Free, Pro, and Free-for-organizations get 10 GiB of storage and 10 GiB of bandwidth a month.
                    Team and Enterprise Cloud get 250 GiB of each.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Overage prices:
                    </Word> bandwidth $0.0875 per GiB, storage $0.07 per GiB per month. For scale, 100 GiB over the included
                    amount is about $7 a month, and a TiB is about $72.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What's metered:
                    </Word> downloads use the repository owner's bandwidth. Uploads count toward storage, but their
                    bandwidth isn't measured. Everything is billed to DNA-Platform as owner, not to whoever pushes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Budget behavior:
                    </Word> at a $0 budget, LFS is blocked for the rest of the calendar month once the quota is used up, and
                    accounts without a payment method default to $0. Pushes carrying LFS objects would then fail. A job's
                    results would stay committed on the box but unpushed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Storage is append-only:
                    </Word> it's computed over every LFS object associated with the repository, whenever uploaded. Deleting
                    branches doesn't free anything.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Releases:
                    </Word> GitHub doesn't limit the total size or bandwidth of release files, as long as each file is under
                    the plan's LFS cap. An option later for big immutable artifacts. It needs <Word>
                        <Verbatim />
                        gh
                    </Word> with Doug's credentials, since the deploy key can't create releases.
                </Line>
            </Paragraph>
            <Heading>2. Channel two: the SSH file bridge</Heading>
            <Paragraph>
                Tailscale SSH has its own SFTP server built in, so scp and sftp work even though the box runs no regular SSH
                server. Any command's input and output can also carry data. Transports:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        tar through ssh:
                    </Word> the default for folders. One continuous stream, fastest for many files, and needs nothing
                    special on the box. Skip compression for <Word>
                        <Verbatim />
                        .npy
                    </Word> data.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sftp  0 / 1 :
                    </Word> resumes a partial transfer of a single huge file.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        rsync:
                    </Word> resumable and incremental, but needs rsync on both ends. It's standard in WSL, not in Git Bash;
                    check the box too.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        scp:
                    </Word> fine for one-offs. Use paths relative to home, without <Word>
                        <Verbatim />
                        ~
                    </Word>.
                </Line>
            </Paragraph>
            <Paragraph>
                Bridge traffic never touches GitHub billing. Integrity comes from sha256 manifests checked on the receiving
                side.
            </Paragraph>
            <Paragraph>
                Measure speed early. <Word>
                    <Verbatim />
                    tailscale ping lipshutzlab-01
                </Word> shows whether traffic goes directly or through a Tailscale relay, and relays are much slower. Also
                time a ~1 GB transfer. The per-item plan depends on this number: 500 GB at 20 MB/s is about 7 hours.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Using both channels together.
                </Word> Uploading to LFS is free and downloading is metered. So for items committed to LFS, the bridge can
                carry the bytes while GitHub keeps the record. Push from here, then copy the LFS objects straight into the
                box's store:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`tar -cf - -C .git/lfs objects | ssh lipshutzlab-01@lipshutzlab-01 'mkdir -p ~/doug/altered-states/main/.git/lfs && tar -xf - -C ~/doug/altered-states/main/.git/lfs'`}
            </CodeBox>
            <Paragraph>
                When the box pulls, git-lfs finds the objects locally and downloads nothing. Results work the same way in
                reverse: fetch the commits (pointers only), copy the needed objects down, then run <Word>
                    <Verbatim />
                    git lfs checkout
                </Word>. Copying the whole store is simplest. For repeated use, copy only what a commit needs: <Word>
                    <Verbatim />
                    git lfs ls-files --long
                </Word> lists the object IDs (oids), and each object lives at <Word>
                    <Verbatim />
                    .git/lfs/objects/&lt;first 2 chars&gt;/&lt;next 2&gt;/&lt;oid&gt;
                </Word>.
            </Paragraph>
            <Heading>3. A disposition for every item</Heading>
            <Paragraph>Each item gets one of four dispositions:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Git:
                    </Word> code, configs, small text results, small figures.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Git LFS:
                    </Word> large binary science outputs we want versioned on GitHub, such as traces, caches, and
                    checkpoints under the per-file cap. Doug's direction is to put as much here as the budget allows.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bridge plus manifest:
                    </Word> the bytes move over SSH, and a manifest and ledger entry are committed. This is for items too
                    large or too costly for LFS (possibly the raw scans), anything over the per-file cap, and setup state
                    that doesn't belong in history. Items already on the box get the same treatment where they sit: manifest
                    them in place.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Rebuild on the box:
                    </Word> things that can't transfer across operating systems, chiefly the Python environment. A committed
                    requirements or lock file pins it.
                </Line>
            </Paragraph>
            <Paragraph>
                Build an inventory before moving anything, in <Word>
                    <Verbatim />
                    bridge/inventory.md
                </Word>. Give each item one row: its path or paths, its size, its direction (up for setup, down for
                results), the proposed disposition, and why. Include what the box already has; Nancy's check on where the
                raw scans live feeds into this. Doug approves the dispositions, and the inventory stays committed and
                current.
            </Paragraph>
            <Heading>4. Decisions for Doug</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        The LFS budget on DNA-Platform:
                    </Word> plan, payment method, and budget. Estimate from the per-run volume of the first real run.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The inventory's dispositions,
                    </Word> the raw scans above all: into LFS once if that's affordable, otherwise bridge plus manifest.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Nancy's question:
                    </Word> whether the pending two days of work goes straight to main or on a branch. The setup order below
                    holds either way.
                </Line>
            </Paragraph>
            <Heading>5. Setup, in order</Heading>
            <Paragraph>
                Order matters: LFS patterns must be committed before any big file is, or the file lands in plain git
                history.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Connectivity
                    </Word> (section 0).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Check history for big blobs
                    </Word> (local clone): ``<Word>
                        <Verbatim />
                        bash git rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(objectsize) %(rest)' \ | awk '$1=="blob" &amp;&amp; $2&gt;10485760 &#123;print $2, $3&#125;' | sort -n | tail -20 
                    </Word>`<Word>
                        <Verbatim />
                         If any turn up, 
                    </Word>git lfs migrate import --everything --include="&lt;patterns&gt;"` rewrites them into LFS. Run it
                    in a fresh clone so it can't touch the uncommitted work, then force-push and reset the box's clone.
                    Rewriting history is Doug's call.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Local LFS:
                    </Word> run <Word>
                        <Verbatim />
                        git lfs version
                    </Word>, then <Word>
                        <Verbatim />
                        git lfs install
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                         0  and  1  on main.
                    </Word> Adjust the patterns to what the repo actually produces: ``<Word>
                        <Verbatim />
                        bash git lfs track "*.npy" "*.npz" "*.h5" "*.hdf5" "*.mat" "*.pt" "*.pth" "*.ckpt" "*.safetensors" "*.parquet" "*.tif" "*.tiff" echo '*.sh text eol=lf' &gt;&gt; .gitattributes 
                    </Word>`<Word>
                        <Verbatim />
                         Scripts written on Windows must reach the box with LF line endings, or bash fails on the 
                    </Word>\r<Word>
                        <Verbatim />
                        . Shrink 
                    </Word>.gitignore<Word>
                        <Verbatim />
                         to junk: bytecode, 
                    </Word>.venv/`, notebook checkpoints, and editor and OS files.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Add the tools on main:
                    </Word> <Word>
                        <Verbatim />
                        tools/bridge.sh
                    </Word> (section 6), <Word>
                        <Verbatim />
                        tools/run_job.sh
                    </Word> (section 7), and <Word>
                        <Verbatim />
                        bridge/inventory.md
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Commit the pending work on top,
                    </Word> check that <Word>
                        <Verbatim />
                        git lfs ls-files
                    </Word> lists the data files, and push.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Set up the box.
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Install git-lfs: either the linux-amd64 binary from github.com/git-lfs/git-lfs/releases in <Word>
                            <Verbatim />
                            .bin/
                        </Word>, or <Word>
                            <Verbatim />
                            sudo apt install git-lfs
                        </Word>, which Doug can run.
                    </Line>
                    <Line>
                        Run <Word>
                            <Verbatim />
                            git -C main lfs install --local
                        </Word> and <Word>
                            <Verbatim />
                            git -C main pull
                        </Word>.
                    </Line>
                    <Line>
                        Check <Word>
                            <Verbatim />
                            df -h ~
                        </Word>. LFS keeps a second copy of each object under <Word>
                            <Verbatim />
                            .git/lfs/objects
                        </Word>, and <Word>
                            <Verbatim />
                            git lfs prune
                        </Word> clears ones already pushed.
                    </Line>
                    <Line>
                        Confirm <Word>
                            <Verbatim />
                            tar
                        </Word>, <Word>
                            <Verbatim />
                            sha256sum
                        </Word>, and <Word>
                            <Verbatim />
                            rsync
                        </Word> are present.
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Measure the bridge:
                    </Word> <Word>
                        <Verbatim />
                        tailscale ping
                    </Word>, a timed ~1 GB transfer, and a small round trip through <Word>
                        <Verbatim />
                        bridge.sh
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Send the setup data
                    </Word> as the inventory says. Bridged items go into <Word>
                        <Verbatim />
                        shared/&lt;item&gt;/
                    </Word> via <Word>
                        <Verbatim />
                        bridge.sh
                    </Word>. LFS items go by push plus object copy. Commit the manifests and the ledger.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Environment:
                    </Word> survey the box's Python and GPU, propose a way to build the environment without sudo, and ask
                    Doug before installing anything.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Smoke test
                    </Word> on a scratch branch <Word>
                        <Verbatim />
                        lfs-smoke
                    </Word>: a trivial foreground job through the wrapper that writes a small <Word>
                        <Verbatim />
                        .npy
                    </Word> and a ~60 MB file with an untracked extension. Confirm that the push landed and that <Word>
                        <Verbatim />
                        git lfs ls-files
                    </Word> lists both files. Fetch it locally, and bridge one output down. This also confirms that the
                    deploy key can authenticate LFS uploads. I expect it to, since git-lfs uses the same SSH key through
                    <Word>
                        <Verbatim />
                        core.sshCommand
                    </Word>, but it hasn't been exercised yet. If it fails, the fallback is a fine-grained token scoped to
                    this repo, which Doug would create. Delete the branch afterwards; its LFS storage stays.
                </Line>
            </Paragraph>
            <Heading>
                6. The bridge: <Word>
                    <Verbatim />
                    tools/bridge.sh
                </Word>
            </Heading>
            <CodeBox
                language="bash"
            >
                {`${''}#!/usr/bin/env bash
# Move a folder between this machine and the lab box over SSH, verified by sha256.
# usage: bash tools/bridge.sh up   <local-dir> <box-dir>      (box-dir relative to ~/doug/altered-states)
#        bash tools/bridge.sh down <box-dir>   <local-dir>
# Writes a manifest to bridge/manifests/ and a line to bridge/ledger.tsv; commit both.
set -euo pipefail
HOST=\${BRIDGE_HOST:-lipshutzlab-01@lipshutzlab-01}
dir=$1 src=$2 dst=$3
root=$(git rev-parse --show-toplevel)
mkdir -p "$root/bridge/manifests"
name=$(echo "$dir-$(basename "$src")-$(date +%Y%m%d-%H%M%S)" | tr -c 'A-Za-z0-9._\\n-' '_')
man="$root/bridge/manifests/$name.sha256"
hashcmd='find . -type f -print0 | sort -z | xargs -0 sha256sum'

if [ "$dir" = up ]; then
  (cd "$src" && eval "$hashcmd") > "$man"
  tar -cf - -C "$src" . | ssh "$HOST" "mkdir -p ~/doug/altered-states/$dst && tar -xf - -C ~/doug/altered-states/$dst"
  ssh "$HOST" "cd ~/doug/altered-states/$dst && sha256sum -c --quiet -" < "$man"
elif [ "$dir" = down ]; then
  ssh "$HOST" "cd ~/doug/altered-states/$src && $hashcmd" > "$man"
  mkdir -p "$dst"
  ssh "$HOST" "tar -cf - -C ~/doug/altered-states/$src ." | tar -xf - -C "$dst"
  (cd "$dst" && sha256sum -c --quiet -) < "$man"
else
  echo "usage: bridge.sh up|down <src> <dst>" >&2; exit 2
fi
files=$(wc -l < "$man")
printf '%s\\t%s\\t%s\\t%s\\t%s\\t%s\\n' "$(date -Is)" "$dir" "$src" "$dst" "$files" \\
  "bridge/manifests/$name.sha256" >> "$root/bridge/ledger.tsv"
echo "verified $files files; manifest bridge/manifests/$name.sha256"`}
            </CodeBox>
            <Paragraph>
                Each transfer does four things: hash on the sending side, stream the folder, verify on the receiving side,
                and record. A mismatch stops the script before anything is written to the ledger. A few practical notes:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Hashing time.
                    </Word> Hashing big data takes a while on both ends, roughly half an hour per TB on each side at disk
                    speed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Paths.
                    </Word> Use Git Bash-style local paths (<Word>
                        <Verbatim />
                        /c/...
                    </Word>) and folder names without spaces.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Huge single files.
                    </Word> tar transfers can't resume, so for a huge single file on a shaky link, use sftp <Word>
                        <Verbatim />
                        reput
                    </Word>, or rsync where both ends have it, then run the same manifest check.
                </Line>
            </Paragraph>
            <Heading>
                7. The job wrapper: <Word>
                    <Verbatim />
                    tools/run_job.sh
                </Word>
            </Heading>
            <CodeBox
                language="bash"
            >
                {`${''}#!/usr/bin/env bash
# Run one job in this worktree, record provenance, commit everything, push.
# Usage (on the box, from the branch folder): bash tools/run_job.sh <command> [args...]
# Optional env: DATA_ROOT (bridged data folder to list), DATA_MANIFEST (its committed manifest),
#               PYTHON (interpreter to snapshot), LFS_MAX_BYTES (per-file LFS cap)
set -uo pipefail
export PATH="$HOME/doug/altered-states/.bin:$PATH"
cd "$(git rev-parse --show-toplevel)" || exit 1
branch=$(git rev-parse --abbrev-ref HEAD)
dirty=no; [ -n "$(git status --porcelain)" ] && dirty=yes
P=provenance; mkdir -p "$P"
LFS_MAX=\${LFS_MAX_BYTES:-2000000000}
BIG=$((10*1024*1024))    # anything larger that isn't already LFS gets routed to LFS

# Provenance before the run
{ echo "branch:  $branch"; echo "commit:  $(git rev-parse HEAD)"; echo "dirty:   $dirty"
  echo "host:    $(hostname)"; echo "command: $*"; echo "start:   $(date -Is)"
  [ -n "\${DATA_MANIFEST:-}" ] && echo "data:    $DATA_MANIFEST sha256=$(sha256sum < "$DATA_MANIFEST" | cut -d' ' -f1)"
} > "$P/meta.txt"
{ "\${PYTHON:-python3}" -V; "\${PYTHON:-python3}" -m pip freeze; nvidia-smi; uname -a; } > "$P/env.txt" 2>&1
[ -n "\${DATA_ROOT:-}" ] && find "$DATA_ROOT" -type f -printf '%P\\t%s\\t%TY-%Tm-%Td %TH:%TM\\n' | sort > "$P/data-listing.tsv"

# The run
"$@" > "$P/log.txt" 2>&1
rc=$?
{ echo "end:     $(date -Is)"; echo "exit:    $rc"; } >> "$P/meta.txt"

# Stage everything; route stray big files to LFS; record what GitHub can't take
git add -A
: > "$P/not-uploaded.tsv"
git diff --cached --name-only --diff-filter=AMR -z | while IFS= read -r -d '' f; do
  size=$(stat -c %s -- "$f")
  if [ "$size" -gt "$LFS_MAX" ]; then
    git reset -q -- "$f"
    printf '%s\\t%s\\t%s\\n' "$(sha256sum -- "$f" | cut -d' ' -f1)" "$size" "$f" >> "$P/not-uploaded.tsv"
  elif [ "$size" -gt "$BIG" ] && ! git check-attr filter -- "$f" | grep -q ': lfs$'; then
    git reset -q -- "$f"
    git lfs track --filename "$f" > /dev/null
    git add -- .gitattributes "$f"
  fi
done
git add -- "$P/not-uploaded.tsv"
git commit -qm "run $branch: exit $rc"

# Push with retries (LFS uploads happen here)
for i in 1 2 3 4 5; do git push -q -u origin HEAD && exit 0; sleep $((i * 120)); done
echo "PUSH FAILED $(date -Is)" >&2; exit 1`}
            </CodeBox>
            <Paragraph>What each run's commit records:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Provenance.
                    </Word> It carries a <Word>
                        <Verbatim />
                        provenance/
                    </Word> folder with the commit it ran from and whether the tree was dirty, the command, the times, the
                    exit code, the packages, the GPU state, the log, and, when a bridged dataset is used, the hash of the
                    manifest that pins it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Failures.
                    </Word> Failed runs are committed and pushed too.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Stray big files.
                    </Word> Big files with unanticipated extensions go to LFS automatically.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Files over the LFS cap.
                    </Word> These stay on the box. Their hashes, sizes, and paths are committed in <Word>
                        <Verbatim />
                        not-uploaded.tsv
                    </Word>, which makes them bridge-down items, verifiable against those hashes.
                </Line>
            </Paragraph>
            <Heading>8. The loop</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Sync:
                    </Word> <Word>
                        <Verbatim />
                        git -C main fetch -q &amp;&amp; git -C main worktree add ../&lt;branch&gt; &lt;branch&gt;
                    </Word> (or <Word>
                        <Verbatim />
                        pull
                    </Word> if the folder exists).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Launch:
                    </Word> ``<Word>
                        <Verbatim />
                        bash ssh lipshutzlab-01@lipshutzlab-01 'cd ~/doug/altered-states/&lt;branch&gt; &amp;&amp; DATA_ROOT=~/doug/altered-states/shared/&lt;item&gt; DATA_MANIFEST=bridge/manifests/&lt;name&gt;.sha256 setsid nohup bash tools/run_job.sh python3 train.py --config configs/x.yaml &gt; ../&lt;branch&gt;.job.out 2&gt;&amp;1 &lt; /dev/null &amp;' 
                    </Word>`` Keep branch names flat (no slashes).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Status:
                    </Word> <Word>
                        <Verbatim />
                        provenance/log.txt
                    </Word>, <Word>
                        <Verbatim />
                        nvidia-smi
                    </Word>, and <Word>
                        <Verbatim />
                        &lt;branch&gt;.job.out
                    </Word>. <Word>
                        <Verbatim />
                        git -C &lt;branch&gt; status -sb
                    </Word> shows "ahead" if a push hasn't landed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Harvest:
                    </Word> <Word>
                        <Verbatim />
                        git fetch
                    </Word>, then read <Word>
                        <Verbatim />
                        git show origin/&lt;branch&gt;:provenance/meta.txt
                    </Word>. Promote to main with <Word>
                        <Verbatim />
                        git checkout origin/&lt;branch&gt; -- &lt;paths&gt;
                    </Word> and commit; this moves pointers, not bytes. Bring LFS bytes down over the bridge rather than
                    from GitHub, and bridge down anything listed in <Word>
                        <Verbatim />
                        not-uploaded.tsv
                    </Word>. On Doug's clone, set <Word>
                        <Verbatim />
                        lfs.fetchinclude
                    </Word> or clone with <Word>
                        <Verbatim />
                        GIT_LFS_SKIP_SMUDGE=1
                    </Word>, so routine pulls don't download every trace from GitHub.
                </Line>
            </Paragraph>
            <Paragraph>
                For Adam: the skills map onto this directly. <Word>
                    <Verbatim />
                    als-sync
                </Word>, <Word>
                    <Verbatim />
                    als-launch
                </Word> (calls the wrapper), <Word>
                    <Verbatim />
                    als-status
                </Word>, and <Word>
                    <Verbatim />
                    als-harvest
                </Word> as before, plus an <Word>
                    <Verbatim />
                    als-bridge
                </Word> wrapping <Word>
                    <Verbatim />
                    bridge.sh
                </Word>. As he said, write them after the first real round trip.
            </Paragraph>
            <Paragraph>
                Three things in it wait on you: the LFS budget, the per-item dispositions (the raw scans especially), and
                whether the pending work goes to main or a branch.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T15:42:16.031721Z"
        >
            <Origin>01a0de61-8dd2-7b69-a453-8e3d269d79cd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Apparently the repo you created was read only? That's not right. How can I change that on the box. Nothing
                read only
            </Paragraph>
        </Message>
        <Message
            at="2026-09-26T15:42:42.932745Z"
        >
            <Origin>01a0de61-8dd2-7c7b-8f41-5e0031fa0eba</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The fix is on GitHub, not on the box. A deploy key's access is set when it's added, and "read only" is what
                you get when the <Word>
                    <Bold />
                    Allow write access
                </Word> box isn't ticked. GitHub doesn't let you edit that afterwards, so you remove the key and add it
                again. The box keeps the same key, so nothing there changes.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    In the browser:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Open DNA-Platform/altered-states → Settings → Deploy keys.</Line>
                <Line>
                    Delete the <Word>
                        <Verbatim />
                        lipshutzlab-01
                    </Word> key.
                </Line>
                <Line>
                    Click Add deploy key. Title it <Word>
                        <Verbatim />
                        lipshutzlab-01
                    </Word> and paste the same public key as before: ``<Word>
                        <Verbatim />
                         ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOc+BODeve/sny5wFzZHCd6Q5aNulZIwlZFMaPiivfAy lipshutzlab-01 
                    </Word>``
                </Line>
                <Line>
                    Tick <Word>
                        <Bold />
                        Allow write access
                    </Word> and save.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Or David can do it from your machine,
                </Word> if your <Word>
                    <Verbatim />
                    gh
                </Word> login has admin rights on the repo:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`gh repo deploy-key list -R DNA-Platform/altered-states
gh repo deploy-key delete <id> -R DNA-Platform/altered-states
ssh lipshutzlab-01@lipshutzlab-01 'cat ~/doug/altered-states/.key/id.pub' > box.pub
gh repo deploy-key add box.pub --allow-write --title lipshutzlab-01 -R DNA-Platform/altered-states`}
            </CodeBox>
            <Paragraph>Then have David retry the push from the box.</Paragraph>
            <Paragraph>
                If the error message says the repository is <Word>
                    <Emphasis />
                    archived
                </Word>, that's a different cause: unarchive it at the bottom of the repo's Settings page. Also, read-only
                files under <Word>
                    <Verbatim />
                    .git/objects
                </Word> on the box are normal, since git stores its objects that way; they aren't what blocks pushing.
            </Paragraph>
        </Message>
    </Chapter>
);
