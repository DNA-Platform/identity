import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
        <Message
            at="2026-06-21T14:52:39.691601Z"
        >
            <Origin>019eeaab-583f-7074-a0a6-25ccfb7f03ed</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I work inside Claude Code (Anthropic's agentic CLI coding tool). My team runs as a PROSE convention: nine
                named teammates, every paragraph prefixed with a nametag (Arthur:, Claude:, Libby:, ...), and a
                'storyteller' substrate that writes as each teammate; we keep agent-definition files in .claude/agents/ and
                we can invoke subagents through the Agent/Task tool. But in ordinary conversation our teammates are only
                nametagged prose — we get NO native UI treatment, whereas I've seen Claude Code visibly highlight agent
                names and render subagents distinctly. Please SEARCH THE WEB for how Claude Code currently (2026) implements
                agentic / multi-agent AI, and answer concretely: (1) how are named subagents actually defined
                (.claude/agents/ format, subagent_type, system prompts, tool scoping), invoked (the Agent/Task tool,
                parallel fan-out), and DISPLAYED to the user (the name-highlighting / distinct subagent rendering people
                see)? (2) What is the native multi-agent MECHANISM versus prompt-level role-play? (3) Given our setup, are
                we emulating in nametagged prose something Claude Code supports NATIVELY as real subagents — and if so, what
                specific native feature would surface our teammates the way a real subagent run is surfaced, and what would
                we have to change in our specification to get it? Keep it grounded in how Claude Code actually works under
                the hood.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T14:54:28.440883Z"
        >
            <Origin>019eeaab-583f-744b-8fc3-119ae6f9bbf1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/skills/public/product-self-knowledge/SKILL.md</Action>
            <Paragraph>
                I'll pull this from the official Claude Code docs plus current sources, since subagent behavior is exactly
                the kind of thing that changes between versions.
            </Paragraph>
            <Action>Fetched https://docs.claude.com/en/docs/claude-code/sub-agents</Action>
            <Action>Searched the web for “Claude Code subagents .claude/agents documentation”</Action>
            <Paragraph>
                Let me get the two pieces I'm still missing: how subagent runs are actually <Word>
                    <Emphasis />
                    displayed
                </Word> in the terminal, and the "agent teams" feature (which is the closest native analog to a
                nine-teammate setup).
            </Paragraph>
            <Action>Searched the web for “Claude Code terminal display subagent name running output rendering UI”</Action>
            <Paragraph>
                One more — the "agent teams" feature is the direct native analog to a nine-teammate setup where members talk
                to each other, so let me get that precisely.
            </Paragraph>
            <Action>Searched the web for “Claude Code agent teams feature teammates communicate spawn shared”</Action>
            <Paragraph>
                Good — this is well-documented as of mid-2026, and there's an important distinction hiding in your question
                that the docs make clean. Let me give it to you grounded in the actual mechanism.
            </Paragraph>
            <Heading>(1) How named subagents are defined, invoked, and displayed</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Defined.
                </Word> A subagent is a Markdown file with YAML frontmatter, living in <Word>
                    <Verbatim />
                    .claude/agents/
                </Word> (project scope) or <Word>
                    <Verbatim />
                    ~/.claude/agents/
                </Word> (user scope). The frontmatter declares name, description, the tools it can access, and the model it
                runs on; the Markdown body below the frontmatter becomes the system prompt — the instructions that define
                how the agent behaves. Two fields carry the real weight:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        tools
                    </Word> is your security lever. Omit it and the subagent implicitly inherits access to all available
                    tools; restrict it and a reviewer can be made structurally incapable of writing.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        model
                    </Word> is your cost lever (route a grep-heavy explorer to Haiku instead of Opus).
                </Line>
            </Paragraph>
            <Paragraph>
                A crucial detail people miss: the body becomes the system prompt verbatim, and the subagent gets only that
                prompt plus basic environment details like the working directory — not Claude Code's full system prompt.
                Scope resolution when names collide runs session-defined → project → user → plugin. Agents are loaded at
                session start, so editing a file on disk requires a restart to pick up the change, whereas agents created or
                edited through <Word>
                    <Verbatim />
                    /agents
                </Word> take effect right away.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Invoked.
                </Word> Two paths. Automatic: Claude matches the user's request against each subagent's <Word>
                    <Verbatim />
                    description
                </Word> field to decide whether to delegate — the description is the trigger, not a label, so it should read
                like a routing rule ("use proactively when…"). Explicit: you name it ("have the code-reviewer subagent
                analyze my latest commits"). Under the hood the spawn happens through the Agent/Task tool, where a <Word>
                    <Verbatim />
                    subagent_type
                </Word> argument selects which agent (general-purpose, explore, or a custom name). Parallel fan-out is
                native: the main session can spawn multiple subagents that run concurrently, each with its own context,
                returning results independently.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Displayed.
                </Word> Here's where your intuition needs adjusting. There are actually two different "renderings," and
                neither is quite the continuous name-highlighted prose stream you might be picturing:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    In the main session, you see the <Word>
                        <Emphasis />
                        delegation event
                    </Word> — the Task tool firing with the named subagent — and then the returned summary. The subagent's
                    internal thinking and tool calls are <Word>
                        <Bold />
                        not
                    </Word> streamed back by default. This is a known gap with open feature requests asking for exactly
                    that: a way to inspect what subagents returned, and ideally see their internal thinking, and a request
                    to stream subagent output into the parent terminal in real time, even as prefixed status lines, since
                    today it's only available on completion or by tailing a JSONL file.
                </Line>
                <Line>
                    The distinct, named, individually-rendered view you've seen is <Word>
                        <Bold />
                        agent view
                    </Word> (open with <Word>
                        <Verbatim />
                        claude agents
                    </Word> or the backslash key). It's one screen for all background sessions; each row starts with an icon
                    whose color and animation show the session's state, and you can name a session with <Word>
                        <Verbatim />
                        --name
                    </Word> to control its display name. From v2.1.161, when a session runs two or more parallel work items,
                    a done/total count like 2/5 appears before the summary.
                </Line>
            </Paragraph>
            <Paragraph>
                So the "name highlighting / distinct subagent rendering" is real, but it's a <Word>
                    <Emphasis />
                    dashboard of sessions
                </Word>, not a transcript of interleaved voices. That difference is the whole answer to part 3.
            </Paragraph>
            <Heading>(2) Native mechanism vs. prompt-level role-play</Heading>
            <Paragraph>
                The native mechanism is <Word>
                    <Bold />
                    process and context isolation
                </Word>, not labeling. A subagent is a named, isolated Claude instance with its own system prompt, its own
                context window, its own tool access list, and its own permission mode; it runs independently and returns
                only its final output to the parent, while all the intermediate noise stays inside the subagent's context
                and never touches the main conversation. The communication channel is deliberately narrow: a subagent's
                context starts fresh, the only channel from parent to child is the Agent tool's prompt string, and the
                parent receives the subagent's final message verbatim as the tool result.
            </Paragraph>
            <Paragraph>
                Your PROSE convention is the opposite architecture. Nine nametags, a storyteller substrate writing all of
                them, one context window, one model pass per turn. Every "teammate" sees everything, shares the same
                context, has the same tools and permissions, and nothing runs in parallel. That is prompt-level polyphony —
                genuine and useful, but it is role-play in the precise technical sense: there is one agent producing labeled
                text, not nine agents. The native mechanism's defining property (isolation) is exactly the property your
                convention is built to <Word>
                    <Emphasis />
                    not
                </Word> have.
            </Paragraph>
            <Heading>(3) Are you emulating something native — and what would surface it?</Heading>
            <Paragraph>
                Yes and no, and the split matters because it depends on what you actually value about the setup.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If what you want is specialist delegation that reports back
                </Word> (Libby goes off, does a focused thing, returns a result), you are emulating subagents. The native
                conversion is mechanical: take each teammate's persona out of the storyteller substrate and make it a <Word>
                    <Verbatim />
                    .claude/agents/&lt;name&gt;.md
                </Word> file — frontmatter with <Word>
                    <Verbatim />
                    name
                </Word>, a <Word>
                    <Verbatim />
                    description
                </Word> written as a trigger rule, a scoped <Word>
                    <Verbatim />
                    tools
                </Word> list, a <Word>
                    <Verbatim />
                    model
                </Word>, and the persona text as the system-prompt body. You'd then get isolated contexts, real tool
                scoping, parallel fan-out, and the Task-tool delegation rendering for free. What you lose: subagents don't
                talk to each other, and they return summaries, not interleaved dialogue.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If what you want is named teammates that communicate and are individually visible
                </Word>, the native feature is <Word>
                    <Bold />
                    agent teams
                </Word> — and this is the closest analog to a nine-person crew that talks. One session acts as the team
                lead; teammates work independently, each in its own context window, and communicate directly with each
                other, and you can interact with individual teammates directly rather than only through the lead. The
                coordination is built like software, not chat: teammates message each other through a shared mailbox
                (sending a message appends JSON to an inbox file) and claim work by updating a task file. Names are yours to
                set: the lead assigns every teammate a name when it spawns them, and to get predictable names you can
                reference later, you tell the lead what to call each teammate in the spawn instruction. And the <Word>
                    <Emphasis />
                    visible distinct rendering
                </Word> you've seen comes from terminal multiplexing: in split-pane mode each teammate works in its own
                pane, which makes monitoring much easier (Shift+Up/Down to switch focus, Ctrl+T for the shared task list).
            </Paragraph>
            <Paragraph>
                To turn that on: agent teams are experimental and disabled by default; you enable them by setting <Word>
                    <Verbatim />
                    CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS
                </Word> in settings.json or the environment, then describe the task and the teammates you want in natural
                language and the lead spawns and coordinates them. Practical constraints worth knowing before you map nine
                teammates onto it: teammates load project context (CLAUDE.md, MCP servers, skills) automatically but don't
                inherit the lead's conversation history, the realistic ceiling is around 3–5 active teammates before
                coordination overhead eats the gains, it's one team per session with no nested teams, and the team dies with
                the session (no resume). Token cost scales roughly linearly with team size.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest caveat that ties it together.
                </Word> If what you actually treasure is the <Word>
                    <Emphasis />
                    reading experience
                </Word> — nine voices interleaving paragraph by paragraph in one continuous transcript, reacting to each
                other in line — then there is <Word>
                    <Bold />
                    no
                </Word> native feature that reproduces it, and that's not an oversight. Subagents and agent teams isolate
                contexts precisely to keep voices <Word>
                    <Emphasis />
                    out
                </Word> of each other's windows and to return condensed results rather than interwoven dialogue. Your
                nametagged-prose substrate is doing something the native machinery is architecturally designed to avoid. So:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Convert to <Word>
                        <Verbatim />
                        .claude/agents/*.md
                    </Word> → you gain isolation, tool scoping, parallelism, and native rendering; you lose the interleaved
                    conversation.
                </Line>
                <Line>
                    Switch on agent teams → you gain real named peers that message each other and show up in distinct panes;
                    you still lose the single woven transcript, and you take on experimental-feature fragility.
                </Line>
                <Line>
                    Keep the prose convention → you keep the polyphonic transcript, but it remains role-play with no native
                    surfacing, because the thing that would surface it (isolation) is the thing that would destroy it.
                </Line>
            </Paragraph>
            <Paragraph>
                The cleanest mental model: agent teams are the native feature that <Word>
                    <Emphasis />
                    looks
                </Word> most like your crew when rendered, but the look comes from tmux panes over isolated processes, not
                from a storyteller weaving voices. You're not emulating a feature that exists in hiding — you've built a
                different thing (shared-context polyphony) that happens to share vocabulary with a native thing
                (isolated-context delegation). Worth deciding which property you're actually optimizing for before you
                refactor toward either.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T15:03:47.942552Z"
        >
            <Origin>019eeab5-8c2f-7400-9b9c-bf7ee6529a49</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Follow-up on agent teams in Claude Code (experimental CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS). Concrete UX
                question: when a multi-teammate agent-team session is running, what does the HUMAN OPERATOR actually SEE in
                the terminal? Walk me through it concretely. (a) The split-pane layout — what's in each pane, one teammate
                per pane? (b) When one teammate MESSAGES another through the mailbox, does that appear on screen as readable
                natural-language dialogue, or only as a status line / tool-call event / JSON write you don't normally see?
                (c) Does watching a team session READ like a conversation between people — interleaved turns you can follow
                as prose — or does it read more like a system log / dashboard of separate workers each emitting their own
                output? (d) Is there any view where you see the actual TEXT teammates send each other, as sentences? Be
                concrete about what's on the glass, not the underlying mechanism. A focused answer is fine.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T15:04:43.197232Z"
        >
            <Origin>019eeab5-8c2f-77db-b9c3-2a8343549278</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Claude Code agent teams tmux pane what you see teammate messages on screen display
                mode”
            </Action>
            <Paragraph>
                Here's what's actually on the glass, mode by mode. The headline: it reads like a dashboard of separate
                workers, not like a woven conversation — and that's structural, not a missing feature.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two modes determine everything.
                </Word> In-process (the default since v2.1.179) runs all teammates inside your main terminal: they appear in
                an agent panel below the prompt input, you use the up/down arrows to select one, and press Enter to view it.
                Split panes (requires tmux or iTerm2) gives each teammate its own pane so you can see everyone's output at
                once and click into a pane to interact. The critical fact for your question: in in-process mode you see one
                teammate's output at a time and switch between them, while in split-pane mode each pane behaves exactly like
                a standalone Claude Code session.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    (a) The split-pane layout.
                </Word> One teammate per pane, plus the lead, each pane a full ordinary Claude Code session view. So a pane
                isn't a "character" emitting dialogue — it's a normal transcript of that worker: its reasoning, its tool
                calls, its file edits, scrolling exactly like a solo Claude Code session would. With tmux every agent gets
                its own visible pane and you watch a researcher, architect, and implementer all working simultaneously in
                real time. Some wrappers tile them deterministically — e.g. cmux stacks teammates vertically in a right
                column, auto-equalizing as agents spawn and exit, each pane in the sidebar with notifications. Nine panes
                would be unwieldy, incidentally; the practical ceiling everyone cites is 3–5.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    (b) When one teammate messages another — what surfaces.
                </Word> The text <Word>
                    <Emphasis />
                    is
                </Word> on the glass, but as session events inside each individual teammate's view, not as a dialogue
                rendered in one place. Mechanically teammates communicate through an internal message-passing system —
                lead→teammate task assignments, teammate→lead status and questions, and teammate→teammate lateral messages
                like "I changed the API interface, here's the new signature." On screen, the <Word>
                    <Emphasis />
                    sending
                </Word> teammate shows this as a tool-call event (the messaging tool firing, with the message as its
                argument), and the <Word>
                    <Emphasis />
                    receiving
                </Word> teammate shows it as an incoming-message turn it then reacts to. So the sentence exists, twice, in
                two different panes — once as outbound tool input, once as inbound prompt. There is no shared bubble where
                you watch "A says X, B replies Y" as a clean exchange. You reconstruct the exchange by reading both
                endpoints.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    (c) Conversation or system log?
                </Word> System log / dashboard, decisively. Each pane is a worker's own activity stream, dominated by tool
                calls and edits, not conversational prose. The coordination surface you're given is structured, not
                narrative: a shared task list you view and modify with Ctrl+T, and an agent panel of teammate rows, where an
                idle row even hides after 30 seconds and reappears on the teammate's next turn. That auto-hiding idle
                behavior alone tells you the design intent — it's a process monitor, not a transcript you read end to end.
                Nothing interleaves the voices into a single followable script. This is exactly the inverse of your
                nametagged-prose substrate: agent teams isolate each voice into its own pane <Word>
                    <Emphasis />
                    on purpose
                </Word>, which is the opposite of weaving them into one readable column.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    (d) A view of the actual sentences they send each other.
                </Word> Yes, two of them, but neither is a unified dialogue. First, drilling into a single teammate: press
                Enter to view a teammate's full session and see everything they've done — that includes the messages it sent
                and received, as text. Second, the raw source: the mailbox is files on disk. Sending a message appends JSON
                to an inbox file and claiming a task updates a task file, and you can inspect the task files under
                ~/.claude/tasks/*/ to check status; the inbox files hold the message text the same way. So if you want the
                literal sentences teammates exchanged, you read them per-teammate in the session view or <Word>
                    <Verbatim />
                    cat
                </Word> the inbox/task files — there is no single screen that renders the whole inter-agent conversation as
                flowing dialogue.
            </Paragraph>
            <Paragraph>
                The clean summary: watching an agent-team session is like standing behind several developers' monitors at
                once — you can read any one screen, including the messages that developer sent or got, but nobody has
                composed those messages into a screenplay. The dialogue is real and the text is recoverable; it's just never
                presented woven. If the woven nine-voice reading experience is the thing you care about, agent teams won't
                give it to you on the glass — that part stays the province of your prose convention.
            </Paragraph>
        </Message>
    </Chapter>
);
