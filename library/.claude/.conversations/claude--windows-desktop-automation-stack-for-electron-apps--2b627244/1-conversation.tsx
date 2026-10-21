import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-16T15:58:10.702206Z"
        >
            <Origin>019ed127-8a7e-71c3-b68d-b9ad2fa85685</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                If rebuilding a Windows desktop automation system for an Electron app from Node.js/TypeScript today, what
                specific technology stack would you recommend? Compare FlaUI via edge-js vs PowerShell-mediated UIA, whether
                UFO2 hybrid UIA+vision adds value for Electron, using Anthropic computer-use API as UIA fallback, and better
                IPC than PowerShell subprocess. Be specific about libraries, versions, integration patterns. Windows 11.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T16:01:13.356853Z"
        >
            <Origin>019ed127-8a7e-7e59-bad9-acdf8e2a5414</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “edge-js maintenance status Node.js .NET in-process 2025”</Action>
            <Action>Searched the web for “agracio edge-js latest version .NET Core Node 22 support”</Action>
            <Action>Searched the web for “FlaUI latest version NuGet UIA3 2026”</Action>
            <Action>Searched the web for “Microsoft UFO2 desktop AgentOS UIA vision GitHub”</Action>
            <Action>Searched the web for “Anthropic computer use tool version latest model docs 2026”</Action>
            <Action>Fetched https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool</Action>
            <Action>Fetched https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool</Action>
            <Paragraph>
                A few findings up front change the shape of the recommendation, so let me lead with those, then go axis by
                axis.
            </Paragraph>
            <Heading>The reframing that matters most: do you control the Electron app?</Heading>
            <Paragraph>
                This is the single biggest fork in the road, and UIA is often the wrong default for Electron either way.
            </Paragraph>
            <Paragraph>
                Electron is Chromium, and Chromium exposes its UI to UIA only as a <Word>
                    <Emphasis />
                    document
                </Word> tree derived from ARIA roles and the DOM, not as native Win32 control types. Worse, Chromium enables
                its full accessibility tree lazily — it spins it up when it detects an assistive-technology client
                attaching, or when launched with <Word>
                    <Verbatim />
                    --force-renderer-accessibility
                </Word>. So with FlaUI/UIA against an Electron target you get: a race on first attach, a tree whose quality
                is entirely a function of how semantic the app's HTML is, and total blindness to anything canvas-rendered or
                built from role-less <Word>
                    <Verbatim />
                    &lt;div&gt;
                </Word>s.
            </Paragraph>
            <Paragraph>That leads to two different stacks:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        If it's your own Electron app (or you can add a hook):
                    </Word> UIA should not be your spine at all. Drive it through the Chrome DevTools Protocol via <Word>
                        <Bold />
                        Playwright's Electron support
                    </Word> (<Word>
                        <Verbatim />
                        playwright._electron
                    </Word>, current Playwright is 1.5x). You get real DOM selectors, auto-waiting, and <Word>
                        <Verbatim />
                        evaluate()
                    </Word> into the renderer/main process — an order of magnitude more robust than poking the UIA tree. UIA
                    (or computer-use vision) then becomes the <Word>
                        <Emphasis />
                        fallback
                    </Word> only for things that live outside Chromium: native file pickers, OS dialogs, the taskbar, UAC
                    prompts, installer windows.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If it's a third-party Electron app you can't modify:
                    </Word> then yes, UIA + vision is the realistic path, and the rest of this applies directly.
                </Line>
            </Paragraph>
            <Paragraph>
                I'll assume you have at least some third-party / OS-chrome surface that genuinely needs UIA, since otherwise
                the question mostly dissolves into "use Playwright."
            </Paragraph>
            <Heading>Recommended stack</Heading>
            <Paragraph>
                The biggest structural win has nothing to do with which UIA wrapper you pick — it's killing the per-action
                PowerShell subprocess and replacing it with a <Word>
                    <Bold />
                    persistent .NET sidecar
                </Word> that holds the UIA session and speaks a long-lived RPC to your Node/TS process.
            </Paragraph>
            <Paragraph>Concretely:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        UIA engine:
                    </Word> FlaUI, current release <Word>
                        <Bold />
                        FlaUI.Core 5.0.0 + FlaUI.UIA3 5.0.0
                    </Word> (published Feb 2025). Use the <Word>
                        <Bold />
                        UIA3
                    </Word> package, not UIA2 — UIA3 is the COM-based modern stack that handles
                    Store/modern/Chromium-exposed apps and touch; UIA2 is managed-only and weak on exactly the app types you
                    care about.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sidecar host:
                    </Word> a long-running .NET console app (target <Word>
                        <Bold />
                        .NET 8 LTS
                    </Word>, or .NET 10 if you want the newest LTS) that wraps FlaUI and exposes an action API. It owns the
                    UIA COM apartment, which sidesteps a real problem with the in-process approach (below).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        IPC:
                    </Word> <Word>
                        <Bold />
                        JSON-RPC 2.0 over a named pipe
                    </Word>, using <Word>
                        <Bold />
                        StreamJsonRpc
                    </Word> (the library Microsoft's own VS/C# tooling uses) on the .NET side and a thin <Word>
                        <Verbatim />
                        net.connect('\\\\.\\pipe\\...')
                    </Word> client on Node with <Word>
                        <Verbatim />
                        vscode-jsonrpc
                    </Word> or hand-rolled framing. This gives you a typed, bidirectional, streaming contract with no port
                    exposed and no process-spawn cost per call.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Vision fallback:
                    </Word> Anthropic computer-use as the escape hatch when UIA returns nothing useful, executed through the
                    <Word>
                        <Emphasis />
                        same
                    </Word> sidecar's input synthesis.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        TS layer:
                    </Word> your Node/TS code becomes a typed RPC client plus an orchestration layer that decides UIA-first
                    vs vision-fallback.
                </Line>
            </Paragraph>
            <Paragraph>Now the specific comparisons you asked for.</Paragraph>
            <Heading>FlaUI via edge-js vs PowerShell-mediated UIA</Heading>
            <Paragraph>
                First, an important correction on edge-js itself: the original <Word>
                    <Verbatim />
                    tjanczuk/edge
                </Word> is effectively abandoned (no npm release in years). The live project is the <Word>
                    <Bold />
                     1  fork
                </Word>, currently at <Word>
                    <Bold />
                    v26.0.0
                </Word> on npm with .NET Core support and Node 20/22/24/26 prebuilds. Critically, if your automation code
                runs <Word>
                    <Emphasis />
                    inside
                </Word> an Electron process rather than a standalone Node process, you don't use <Word>
                    <Verbatim />
                    edge-js
                </Word> at all — you need <Word>
                    <Bold />
                     3 
                </Word>, the separate Electron-targeted build, because of the V8/Node ABI mismatch with Electron's runtime.
            </Paragraph>
            <Paragraph>That caveat aside, the comparison:</Paragraph>
            <Paragraph>
                PowerShell-mediated UIA (spawning <Word>
                    <Verbatim />
                    powershell.exe
                </Word> per action and parsing stdout) is the weakest of the three by a wide margin. You pay 100–700ms of
                process startup per call, you're marshaling through brittle text parsing, error handling is stringly-typed,
                and you can't hold a stable element reference across calls — every action re-walks the tree. It's fine for a
                five-line script; it's a poor foundation for a system.
            </Paragraph>
            <Paragraph>
                edge-js (or electron-edge-js) gives you genuine <Word>
                    <Bold />
                    in-process
                </Word> calls into FlaUI with <Word>
                    <Verbatim />
                    Func&lt;object,Task&lt;object&gt;&gt;
                </Word> marshaling — lowest latency, no serialization boundary. But for UIA specifically it has two real
                liabilities: (1) UIA/COM has apartment-threading expectations that fight V8's single-threaded model, so you
                end up carefully managing STA threads inside the addin; and (2) a crash or hang in native UIA code takes
                down your Node/Electron process with it. UIA <Word>
                    <Emphasis />
                    does
                </Word> hang — on unresponsive target windows, this is common.
            </Paragraph>
            <Paragraph>
                The sidecar approach beats both: near-edge-js latency (a warm named pipe is microseconds of framing, not
                milliseconds of process spawn), clean COM apartment ownership in a process built for it, and crash isolation
                — if FlaUI deadlocks on a frozen window, you kill and respawn the sidecar without losing your Node state.
                Use edge-js only if you have a hard requirement to avoid a second process and you're willing to own the
                threading and accept shared-fate crashes.
            </Paragraph>
            <Heading>Does UFO2's hybrid UIA+vision add value for Electron?</Heading>
            <Paragraph>
                The <Word>
                    <Emphasis />
                    idea
                </Word> is exactly right for Electron; the <Word>
                    <Emphasis />
                    framework
                </Word> is a mismatch for your use case.
            </Paragraph>
            <Paragraph>
                UFO2 (Microsoft, v2.0.0, April 2025) is a Python multi-agent "AgentOS" — a HostAgent decomposing tasks,
                per-app AppAgents running ReAct loops, a RAG knowledge substrate, MCP-coordinated execution, and OmniParser
                for vision grounding. Its hybrid control-detection pipeline queries the UIA tree first and fills the gaps
                with vision-based parsing, which is precisely the technique that rescues you on Electron's thin/incomplete
                UIA tree and canvas regions.
            </Paragraph>
            <Paragraph>
                But adopting UFO2 wholesale means putting an LLM in the loop for <Word>
                    <Emphasis />
                    every step
                </Word> of automating one known app, in Python, with heavy infra — when what you actually want is
                deterministic selectors that resolve in milliseconds, with vision only as a rare fallback. So: <Word>
                    <Bold />
                    steal the pattern, not the dependency.
                </Word> Implement "UIA-first, vision-fill for unresolved controls" yourself. If you want the cheap
                local-vision grounding step UFO2 uses, you can pull in <Word>
                    <Bold />
                    OmniParser
                </Word> as a standalone screen-parsing model to locate controls before escalating to a full LLM — but for a
                single Electron target that's likely over-engineered. UFO2-the-framework only becomes the right answer if
                your real goal is open-ended natural-language automation across arbitrary desktop apps, which is a different
                product than what you described.
            </Paragraph>
            <Heading>Anthropic computer-use as the UIA fallback</Heading>
            <Paragraph>
                This is a sound architecture as a <Word>
                    <Emphasis />
                    fallback
                </Word>, not a hot path. Computer-use is a "you own the loop" tool: Claude returns an action (click at x,y /
                type / screenshot), your code executes it and returns the next screenshot, repeat. It's been the
                computer-use contract since the October 2024 launch, and the recent Opus models (4.5/4.8) are specifically
                tuned for long-horizon computer use.
            </Paragraph>
            <Paragraph>Integration pattern that works well here:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Deterministic resolution first (CDP/Playwright if you own the app, else FlaUI/UIA). Only on resolution
                    failure do you escalate.
                </Line>
                <Line>
                    On escalation, capture a screenshot <Word>
                        <Bold />
                        scoped to the target window
                    </Word>, downscale to the model's expected resolution, and send it with the computer-use tool. Use tool
                    type <Word>
                        <Verbatim />
                        computer_20250124
                    </Word> with the <Word>
                        <Verbatim />
                        computer-use-2025-01-24
                    </Word> beta header — but verify the current dated version in the docs, since these get bumped and older
                    versions stay pinned for compatibility.
                </Line>
                <Line>
                    Map returned coordinates <Word>
                        <Bold />
                        back to physical pixels
                    </Word>, accounting for Windows per-monitor DPI scaling — Electron windows are per-monitor DPI-aware, so
                    a naïve coordinate will miss on any non-100% display. Execute the click via your sidecar's input
                    synthesis (FlaUI <Word>
                        <Verbatim />
                        Mouse
                    </Word>/<Word>
                        <Verbatim />
                        Keyboard
                    </Word>, or raw <Word>
                        <Verbatim />
                        SendInput
                    </Word>).
                </Line>
                <Line>
                    Treat it as expensive: each step is an LLM round-trip plus image tokens (the tool definition alone is
                    several hundred tokens before screenshots). Cache resolved locations, scope screenshots tightly, and
                    never use it where a selector would do.
                </Line>
            </Paragraph>
            <Paragraph>
                One honest limitation: vision fallback is non-deterministic and slow, so design your system so the
                fallback's <Word>
                    <Emphasis />
                    result
                </Word> (the located control) gets cached/promoted into a reusable selector when possible, rather than
                re-invoking vision every run.
            </Paragraph>
            <Heading>Better IPC than PowerShell subprocess</Heading>
            <Paragraph>Ranked for this use case:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        JSON-RPC 2.0 over a named pipe (StreamJsonRpc ⟷ vscode-jsonrpc)
                    </Word> — my recommendation. Typed, bidirectional, supports server-initiated notifications (handy for
                    UIA event callbacks pushed to Node), no TCP port, Windows-native, and battle-tested as VS Code's C#
                    transport.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        gRPC
                    </Word> over localhost or named-pipe transport (<Word>
                        <Verbatim />
                        Grpc.Net
                    </Word> ⟷ <Word>
                        <Verbatim />
                        @grpc/grpc-js
                    </Word>) — best if you want a strict <Word>
                        <Verbatim />
                        .proto
                    </Word> contract and streaming RPCs and don't mind the schema/codegen overhead. Slight ceremony tax.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        WebSocket on localhost
                    </Word> — easiest to stand up in Node, perfectly adequate, but exposes a port and gives weaker typing
                    than the above.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        edge-js in-process
                    </Word> — lowest latency, no IPC at all, but the threading and shared-fate-crash issues above make it a
                    worse fit for UIA specifically.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        PowerShell subprocess per action
                    </Word> — the baseline you're replacing. Avoid.
                </Line>
            </Paragraph>
            <Paragraph>
                If you keep a sidecar, also have it expose a small health/heartbeat method so your Node orchestrator can
                detect a hung UIA call and recycle the process.
            </Paragraph>
            <Paragraph>
                If you can tell me whether the Electron app is one you control and roughly how much of the surface is real
                OS chrome (file dialogs, other native windows) versus in-app, I can tighten this into a concrete module
                layout — sidecar action API surface, the TS client interface, and the UIA-first / vision-fallback decision
                logic.
            </Paragraph>
        </Message>
    </Chapter>
);
