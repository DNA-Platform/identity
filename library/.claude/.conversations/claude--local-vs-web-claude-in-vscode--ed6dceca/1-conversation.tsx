import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 June 2026](2026-06-22)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-22T20:54:08.245396Z"
        >
            <Origin>019ef11c-a3f6-7a1c-afe1-16e142bb6580</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>On Claude code in vscode, I have the option between local and web. What's the difference?</Paragraph>
            <Attachment>Uploaded “1782161640983_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-22T20:54:20.248200Z"
        >
            <Origin>019ef11c-a3f6-749c-982a-691bca68fbc0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Local runs Claude Code on your own machine — the agent executes in your VS Code environment, reads and
                writes files on your local disk, runs commands in your local terminal, and uses your local Git checkout.
                Everything happens on your computer, so it has direct access to whatever project you've got open.
            </Paragraph>
            <Paragraph>
                Web (the "web sessions" you're seeing) runs Claude Code on Anthropic's cloud infrastructure instead. You
                kick off a session that operates on a remote sandbox — typically working against a repo it clones there
                rather than your local files. These are the same sessions you can start and monitor from claude.ai/code or
                the mobile app, which is the main appeal: you can launch a task, close your laptop, and check on it later
                from your phone. The work runs remotely and persists independently of your machine.
            </Paragraph>
            <Paragraph>The practical split:</Paragraph>
            <Paragraph>
                Local is for hands-on work where you want the agent touching the actual files in front of you, using your
                local environment, dependencies, and tooling. Lower latency, full access to your working directory, but it
                only runs while your machine is on and the session is active.
            </Paragraph>
            <Paragraph>
                Web is for delegating longer or asynchronous tasks — fire it off, let it run in the cloud, pick it up from
                any device. It needs the repo accessible remotely (e.g. on GitHub), and it won't see uncommitted local
                changes or your local environment quirks.
            </Paragraph>
            <Paragraph>
                Your screenshot shows "No web sessions yet" because you haven't started a cloud-based one — the link just
                points you to claude.ai/code to spin one up.
            </Paragraph>
            <Paragraph>
                One caveat: cloud-based agent features change fairly often. If you want the precise current details on what
                web sessions can access and how they're configured, I can check Anthropic's docs — want me to?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-22T20:55:28.588904Z"
        >
            <Origin>019ef11d-dcd3-72cb-909e-0483106bed67</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can I give Claude relatively long tasks on the web? It's not always clear how to kick off long running tasks
            </Paragraph>
        </Message>
        <Message
            at="2026-06-22T20:55:54.671792Z"
        >
            <Origin>019ef11d-dcd3-7169-af8f-e1d6e9c9954c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/skills/public/product-self-knowledge/SKILL.md</Action>
            <Action>Fetched https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md</Action>
            <Action>Searched the web for “Claude Code web sessions cloud long-running tasks docs”</Action>
            <Paragraph>
                Yes — long tasks are exactly what web sessions are built for. That async, hand-it-off-and-walk-away model is
                the whole point of running in the cloud rather than locally.
            </Paragraph>
            <Paragraph>Here's the practical picture for kicking one off:</Paragraph>
            <Paragraph>
                The web session runs on Anthropic's cloud, gets an isolated VM with your repo cloned into it, and sessions
                persist even if you close your browser, and you can monitor them from the Claude mobile app. So you can
                start something substantial, shut your laptop, and check progress from your phone later. Web sessions are a
                good fit for drafting a PR to fix a bug while you focus on something else, running a codebase-wide refactor
                across many files, or generating documentation without interrupting your local environment.
            </Paragraph>
            <Paragraph>
                The one thing that trips people up — and is probably why "how to kick one off" isn't obvious — is that
                <Word>
                    <Bold />
                    web sessions clone from GitHub, not from your local disk.
                </Word> The session clones your current directory's GitHub remote at your current branch, so you have to
                push first if you have local commits, since the VM clones from GitHub rather than your machine. If your repo
                isn't on GitHub or your latest work is only local, the cloud session won't see it.
            </Paragraph>
            <Paragraph>Two ways to start one:</Paragraph>
            <Paragraph>
                From the browser — go to claude.ai/code, connect your GitHub account, pick the repo, and describe the task.
                It clones, works, tests, and prepares a PR for you to review.
            </Paragraph>
            <Paragraph>
                From the terminal — if you're already in a project, <Word>
                    <Verbatim />
                    claude --remote "your task description"
                </Word> spins up a cloud session for you. Each --remote command creates its own independent cloud session,
                so you can fire off several that run simultaneously, and monitor them all with /tasks in the CLI. When one
                finishes you can create a PR from the web interface, or teleport the session to your terminal to continue
                working on it locally.
            </Paragraph>
            <Paragraph>
                For genuinely complex long tasks, the recommended pattern is to plan locally and execute remotely: start
                Claude in plan mode to collaborate on the approach, then send the work to the cloud once you're happy with
                the plan. That gives you control over strategy while letting it grind through execution autonomously.
            </Paragraph>
            <Paragraph>A couple of caveats worth knowing:</Paragraph>
            <Paragraph>
                The cloud VM has limited network access by default, so if your task needs to hit external APIs or fetch
                packages from unusual sources, you may need to configure the environment's network access first.
            </Paragraph>
            <Paragraph>
                There's a related-but-different feature called <Word>
                    <Bold />
                    Routines
                </Word> (the old <Word>
                    <Verbatim />
                    /schedule
                </Word>) for <Word>
                    <Emphasis />
                    recurring
                </Word> cloud tasks on a cron schedule — daily code reviews, dependency audits, etc. Each run is a fresh
                session that clones the repo from the default branch. That's a separate thing from a one-off long task, but
                worth knowing it exists if "long-running" for you ever means "runs every night" rather than "runs for two
                hours once."
            </Paragraph>
            <Paragraph>
                If you tell me roughly what kind of task you're trying to hand off, I can suggest whether the browser flow,
                <Word>
                    <Verbatim />
                    --remote
                </Word>, or plan-then-execute fits best.
            </Paragraph>
        </Message>
    </Chapter>
);
