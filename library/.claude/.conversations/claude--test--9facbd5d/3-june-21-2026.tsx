import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
        <Message
            at="2026-06-21T11:21:40.609202Z"
        >
            <Origin>019ee9ea-2a0e-7f70-83c6-6adec81ea066</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Our team automates Claude Desktop through its Windows UIA accessibility tree, and our main fragility is that
                app updates rename or restructure the elements our selectors depend on. What are your top 2-3 strategies for
                making UIA-based desktop automation resilient to UI changes? Keep it brief — concrete approaches, not an
                exhaustive survey.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T11:21:54.830269Z"
        >
            <Origin>019ee9ea-2a0e-7396-801f-6242b44edac2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Three approaches, in rough priority order:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Anchor on stable identity properties, not structure or display text.
                </Word> The most durable selector targets <Word>
                    <Verbatim />
                    AutomationId
                </Word> (set deliberately by developers and far less likely to churn than labels or tree position). Where
                that's absent, fall back to <Word>
                    <Verbatim />
                    ControlType
                </Word> + a stable <Word>
                    <Verbatim />
                    Name
                </Word>, and treat XPath-like positional paths (<Word>
                    <Verbatim />
                    child&#91;3&#93;/child&#91;1&#93;
                </Word>) as a last resort — those break the instant anyone reorders or wraps elements. Maintain a priority
                cascade per element: try the strongest identifier, degrade gracefully to weaker ones.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Search relative to stable landmarks rather than absolute paths.
                </Word> Find a coarse, rarely-changing container first (a named pane, a window region, a toolbar with a
                fixed AutomationId), then scope your search <Word>
                    <Emphasis />
                    within
                </Word> it. Updates that restructure a subtree usually leave the parent landmark intact, so a relative find
                ("the button whose Name matches X anywhere under the Composer pane") survives reshuffling that an absolute
                path wouldn't. Combine multiple weak signals (control type + partial name + proximity to a known sibling)
                into a scoring match instead of demanding one exact locator.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Centralize selectors and add a self-check layer.
                </Word> Pull every selector into a single page-object/repository module so an update means editing one file,
                not hunting through scripts. Pair it with a lightweight startup probe that resolves all critical selectors
                against the live tree and reports which ones failed <Word>
                    <Emphasis />
                    before
                </Word> a full run — this turns "selector broke silently mid-task" into "fast, localized signal about
                exactly what the update renamed." A snapshot of the tree (dumped via something like the
                Inspect/Accessibility Insights tooling) on each app version also gives you a fast diff to see what moved.
            </Paragraph>
            <Paragraph>
                If I had to pick one lever: invest in the relative-landmark + scoring approach. AutomationId discipline is
                ideal but you don't control whether Anthropic sets them, whereas resilient <Word>
                    <Emphasis />
                    matching logic
                </Word> is entirely yours and absorbs the most common breakage — renames and reparenting — without
                per-update intervention.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T11:40:10.390025Z"
        >
            <Origin>019ee9fb-19ad-726c-8705-c3d9f0672cf2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I automate a desktop LLM chat app from the outside with no API — only its accessibility tree. I need to
                reliably tell when the model has actually STARTED generating text, versus just showing a 'thinking'
                indicator that can hang with no output. My current heuristic: diff the visible text length and treat growth
                as real streaming. What are the most reliable client-side signals that generation has started, and what are
                the failure modes of the text-growth heuristic? Keep it brief — concrete signals, not a survey.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T11:40:27.449738Z"
        >
            <Origin>019ee9fb-19ad-7ad2-b393-6d85d5087800</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    More reliable signals than raw text-length growth:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        A new message node appearing in the tree.
                    </Word> Watch for the <Word>
                        <Emphasis />
                        creation
                    </Word> of the assistant-turn container (a new child under the conversation list with the assistant
                    role/control type), not text inside it. The node usually materializes at generation start, before or
                    independent of token content, and is a cleaner edge than character count.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        UIA event subscriptions instead of polling.
                    </Word> Subscribe to <Word>
                        <Verbatim />
                        StructureChangedEvent
                    </Word> (child added to the message list) and <Word>
                        <Verbatim />
                        TextChanged
                    </Word>/<Word>
                        <Verbatim />
                        AutomationPropertyChanged
                    </Word> on the assistant node's value. Event-driven detection catches the first token without the
                    sampling lag and aliasing that polling introduces, and distinguishes "node exists but empty" from "node
                    now has text."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A state transition on the input affordance.
                    </Word> Most chat UIs flip the Send button to a Stop/cancel control the moment generation begins. That
                    control-type/Name change is often a more reliable "generation started" latch than text, because it fires
                    even for a slow first token, and it also gives you a clean "generation ended" signal when it reverts.
                </Line>
            </Paragraph>
            <Paragraph>
                The strongest setup combines them: treat <Word>
                    <Emphasis />
                    first appearance of a non-empty text node under a newly-created assistant container
                </Word> as the start latch, corroborated by the Send→Stop transition.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Failure modes of the text-growth heuristic:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Thinking/status text counts as growth.
                    </Word> A "Thinking…", reasoning summary, or animated-ellipsis indicator rendered as real UIA text
                    inflates length before any answer tokens exist — you fire "started" on a hang.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reflow and re-rendering.
                    </Word> Markdown re-parsing, code-block formatting, or a streamed chunk replacing a placeholder can make
                    length jump, dip, or oscillate rather than grow monotonically. Length isn't reliably increasing even
                    during genuine streaming.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Late tree commit.
                    </Word> Some apps render tokens to a canvas/virtualized view and commit to the accessibility tree in
                    batches, so visible text grows while UIA length stays flat — you miss the start entirely or detect it
                    seconds late.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Stale node / wrong target.
                    </Word> If you diff the conversation's total text or a node that's about to be replaced, edits elsewhere
                    (a re-rendered prior message, a collapsing spinner) register as growth on the wrong element.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No first-token guarantee.
                    </Word> A long thinking phase with zero output is invisible to a length diff — exactly the hang you're
                    trying to catch produces no signal, so absence of growth can't disambiguate "still working" from
                    "stalled."
                </Line>
            </Paragraph>
            <Paragraph>
                Net: use the assistant-node-creation + Send/Stop transition as the start latch, and demote text-length to a
                <Word>
                    <Emphasis />
                    corroborating
                </Word> signal for "tokens are actually flowing," with a monotonic-growth-over-N-samples check rather than
                any single diff.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T11:49:44.135551Z"
        >
            <Origin>019eea03-da21-70d6-9818-d37b766c283d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What are the most exciting trends in Claude Code development right now (2026)? Please search the web for
                current activity. I want to know: what tools, repos, and workflows are people actually using and talking
                about, and WHY each one matters. Keep it to the top handful with a sentence or two of reasoning each — not
                an exhaustive list.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T11:50:12.399669Z"
        >
            <Origin>019eea03-da21-786f-b902-14d6462d8a3d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll search for current activity around Claude Code in 2026.</Paragraph>
            <Action>Searched the web for “Claude Code 2026 popular tools workflows”</Action>
            <Paragraph>Let me check install numbers and a couple of the headline repos to ground the "why."</Paragraph>
            <Action>Searched the web for “Karpathy CLAUDE.md viral repo 2026 Forrest Chang behavioral principles”</Action>
            <Paragraph>
                I have enough to give you the grounded picture. Here are the trends people are actually using and talking
                about in mid-2026, with the "why" for each.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Karpathy-inspired CLAUDE.md ( 0 ).
                </Word> A single ~65-line behavioral file that contains four behavioral principles — Think Before Coding,
                Simplicity First, Surgical Changes, Goal-Driven Execution — that you add to your project root to improve how
                Claude Code writes code. It was created January 27, 2026, the day after Karpathy posted about agent coding
                failures, and has accumulated more than 220,000 combined stars across the personal repo and an org mirror.
                Why it matters: it crystallized the realization that coding agents do not only need better models — they
                need better operating constraints. The smart way to use it isn't to copy it verbatim but as a menu, not a
                template — steal the shape, then rewrite each rule with concrete commands, file paths, test gates, and
                design constraints specific to your codebase.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Skills (the SKILL.md ecosystem).
                </Word> Since Anthropic officially launched skills in October 2025, there are now thousands across official
                repositories, community collections, and niche toolkits. Why they matter: they make Claude reusable —
                instead of re-explaining preferences and workflows every session, you define them once in a skill file and
                Claude picks them up automatically, activating when the task matches and staying out of the way when it
                doesn't. The emerging best practice is a clean split: CLAUDE.md holds global rules every session needs;
                skills hold procedures that only matter for specific tasks — a blog-writing skill, migration skill, review
                skill, browser-QA skill — keeping the main context small while giving each task type the exact workflow it
                needs. Caveat worth knowing: a Snyk audit published in February 2026 found that 13 percent of agent skills
                packages contained critical security flaws, so vetting matters.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Plugins + MCP connectors for real-world context.
                </Word> As of the public directory on June 1, 2026, Frontend Design had 829,316 installs, Superpowers had
                752,120, and Context7 had 348,660. Why they matter: MCP integration plugins connect Claude Code to external
                services — useful when the relevant context is outside the repository: issues in Linear, incidents in Slack,
                deploys in Vercel, errors in Sentry, design specs in Figma, or database state in Supabase. The real lever
                for most people is code intelligence first: install one LSP plugin for your main language before adding more
                complex integrations — it gives Claude a better map of the codebase, making every subsequent workflow safer.
                The standard warning: stacking many MCP servers chokes the context window as they load all available tools,
                which is why dynamic/just-in-time tool loading is now a selling point.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Plan mode + structured planning as the core discipline.
                </Word> This is less a tool than a workflow everyone converged on. The reasoning is a probability argument:
                assume Claude makes the right call 80% of the time and a feature involves 20 decision points — the odds of
                getting all right is 0.8²⁰, roughly 1%; planning collapses those ambiguous decisions into a reviewed spec
                where each lands near 100%. Why it matters: the difference between high-output engineers and everyone else
                is not prompt quality — it's the structure they build around Claude before execution begins.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The harness doing the coordination work (Compaction, subagents, /resume).
                </Word> A meta-trend: the 2026 tooling absorbs context-management that used to be manual. Compaction manages
                context window limits automatically, Plan mode scopes exploration for large tasks, the Agent tool enables
                parallel exploration without context pollution, and Memory retains project-specific details across
                conversations. Why it matters: the interaction feels less like prompt choreography and more like supervised
                execution. The practical guidance for anyone migrating from 2025 habits: remove custom research, planning,
                and validation commands, use /plan for substantial work, and stop monitoring context usage manually.
            </Paragraph>
            <Paragraph>
                One honest caveat on the headline numbers: several of the most striking stats (error rates dropping "from
                41% to 3%," accuracy "65→94%") come from individual blog tests and the repos' own marketing, not controlled
                studies — directionally believable, but I'd treat the specific figures as soft. The star counts and install
                counts are the firmer data points.
            </Paragraph>
            <Paragraph>
                Want me to go deeper on any one of these — say, a concrete CLAUDE.md skeleton adapted to your stack, or how
                to structure the skill/plugin split for a specific kind of project?
            </Paragraph>
        </Message>
    </Chapter>
);
