import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ 16 June 2026 ]]</Title>
        <Message
            at="2026-06-16T15:48:57.019310Z"
        >
            <Origin>019ed11f-0fb5-7689-b08f-6f8d2ac98c12</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-16T15:51:11.513410Z"
        >
            <Origin>019ed11f-0fb5-7b89-9e9f-a5c021386cad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll research current state on a few of these — versions and maintenance status matter a lot here, and
                several of these tools move fast.
            </Paragraph>
            <Action>Searched the web for “edge-js Node.js .NET maintenance status 2025 2026”</Action>
            <Paragraph>
                Let me check edge-js's actual release cadence and the current state of UFO2 and Anthropic's computer-use
                API.
            </Paragraph>
            <Action>Searched the web for “UFO2 Microsoft UI agent Windows GitHub 2025 hybrid UIA vision”</Action>
            <Paragraph>Let me verify FlaUI's current state and the computer-use API's current model/version.</Paragraph>
            <Action>Searched the web for “Anthropic computer use tool API model 2026 claude latest version”</Action>
            <Paragraph>Let me verify FlaUI's current maintenance state and the computer-use tool version string.</Paragraph>
            <Action>Searched the web for “FlaUI .NET UI automation library latest version 2025 release”</Action>
            <Paragraph>
                Before the axis-by-axis comparison, one upfront question that changes everything: do you control the
                Electron app, or is it third-party? It determines the whole architecture, so I'll flag where it matters.
            </Paragraph>
            <Heading>Recommended stack (short version)</Heading>
            <Paragraph>
                Persistent <Word>
                    <Bold />
                    .NET 10 (LTS)
                </Word> worker process running <Word>
                    <Bold />
                    FlaUI 5.0
                </Word> (UIA3), talking to your Node/TS process over a <Word>
                    <Bold />
                    length-prefixed named-pipe protocol
                </Word> (MessagePack or JSON frames). Do <Word>
                    <Emphasis />
                    not
                </Word> embed .NET in-process via edge-js, and do <Word>
                    <Emphasis />
                    not
                </Word> spawn PowerShell per call. Keep UFO2's <Word>
                    <Emphasis />
                    hybrid-detection idea
                </Word> but not UFO2 itself. Reserve the Anthropic computer-use API for a rarely-fired Tier-3 fallback, if
                at all.
            </Paragraph>
            <Paragraph>Now the details.</Paragraph>
            <Heading>(1) FlaUI via edge-js vs PowerShell-mediated UIA</Heading>
            <Paragraph>
                Neither of the two framings you gave is the right target. Both PowerShell-subprocess and edge-js are flawed
                for opposite reasons, and the better answer is "FlaUI, but out-of-process over IPC."
            </Paragraph>
            <Paragraph>
                PowerShell-mediated UIA is the worst of the options you're currently on: every call pays process-spawn cost
                (100s of ms), you're marshaling through <Word>
                    <Verbatim />
                    System.Windows.Automation
                </Word> (the older UIA2 managed wrapper) or COM via reflection, and you have no persistent element handles —
                you re-resolve the tree every invocation. That's almost certainly your current latency and flakiness source.
            </Paragraph>
            <Paragraph>
                FlaUI is the right library. It's actively maintained — FlaUI.Core/FlaUI.UIA3 are at 5.0.0 (Feb 2025), with
                repo activity into 2026 — MIT-licensed, and it gives you a clean UIA2/UIA3 choice plus built-in
                retry/condition logic and pattern wrappers. Use <Word>
                    <Bold />
                    UIA3
                </Word> (the COM-based modern API); UIA2 is the legacy managed path and you only fall back to it for the
                rare control that misbehaves under UIA3.
            </Paragraph>
            <Paragraph>
                But edge-js is the wrong <Word>
                    <Emphasis />
                    transport
                </Word> for it. edge-js still works, but its focus shifted to .NET Core long ago and Mono is deprecated;
                more importantly it's a native node-gyp addon, which means ABI-fragile rebuilds on every Node major bump,
                and — the dealbreaker — it loads the CLR <Word>
                    <Emphasis />
                    in-process
                </Word> with your Node/Electron process. UIA calls block, hang, and occasionally deadlock COM apartments.
                When (not if) that happens in-process, it takes your main process with it. You want crash isolation. So:
                FlaUI yes, edge-js no, run it in a separate process.
            </Paragraph>
            <Heading>(2) Does UFO2's hybrid UIA+vision add value for a well-accessible Electron app?</Heading>
            <Paragraph>
                For a deterministic automation system against an Electron app with good accessibility: <Word>
                    <Bold />
                    no, not as a system, and the vision half adds little.
                </Word>
            </Paragraph>
            <Paragraph>Two separate points:</Paragraph>
            <Paragraph>
                UFO2 itself is the wrong abstraction layer. It's a Python 3.10+ multi-agent <Word>
                    <Emphasis />
                    AgentOS
                </Word> — HostAgent/AppAgent hierarchy, LLM-in-the-loop, OmniParser for vision, RAG knowledge substrate,
                MCP-coordinated actions. It fuses Windows UIA with vision-based parsing to support diverse interface styles,
                and that's genuinely good engineering, but it's an autonomous task-executor, not an embeddable automation
                primitive. Bolting it under a Node/TS system means running a Python agent stack and accepting nondeterminism
                where you presumably want repeatable scripted actions.
            </Paragraph>
            <Paragraph>
                The hybrid UIA+vision <Word>
                    <Emphasis />
                    value proposition
                </Word> specifically: vision (OmniParser-style) earns its keep when the UIA tree is incomplete —
                canvas/WebGL-rendered controls, image-only buttons, custom-drawn widgets with no accessible role/name. An
                Electron app with <Word>
                    <Emphasis />
                    good
                </Word> accessibility exposes the Chromium accessibility tree through UIA with proper roles, names, and
                values, so vision is mostly redundant cost, latency, and nondeterminism. Steal the <Word>
                    <Emphasis />
                    pattern
                </Word> — "try UIA, fall back to vision only when UIA returns nothing" — and implement a thin version
                yourself; don't adopt the framework.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real Electron gotcha
                </Word> that makes people wrongly reach for vision: Chromium's accessibility tree is lazy and opt-in. Until
                an AT/UIA client attaches (or you force it), the UIA tree under an Electron window can be empty or partial,
                and people conclude "UIA doesn't work on Electron" and switch to screenshots. Fix the root cause instead:
                launch with <Word>
                    <Verbatim />
                    --force-renderer-accessibility
                </Word>, and/or <Word>
                    <Verbatim />
                    app.setAccessibilitySupportEnabled(true)
                </Word> / the <Word>
                    <Verbatim />
                    ELECTRON_ENABLE_ACCESSIBILITY
                </Word> path. Do that and UIA becomes reliable and fast, and the vision question mostly evaporates.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you control the app
                </Word>, there's a much stronger move than UIA for the web content at all: drive the renderer over the
                Chrome DevTools Protocol (<Word>
                    <Verbatim />
                    --remote-debugging-port
                </Word>) with Playwright/CDP, and use UIA/FlaUI only for the native shell — OS file dialogs, system menus,
                tray, native modals. Splitting "web content → CDP, native chrome → UIA" is dramatically more robust and
                selector-stable than treating the whole window as a UIA surface. This is probably the highest-leverage
                architectural decision available to you.
            </Paragraph>
            <Heading>(3) Computer-use API as a UIA fallback</Heading>
            <Paragraph>
                Defensible as a <Word>
                    <Emphasis />
                    last-resort
                </Word> tier, not as load-bearing infrastructure.
            </Paragraph>
            <Paragraph>
                The current models behind the tool are Claude Opus 4.8, Sonnet 4.6, and Haiku 4.5; computer use was
                introduced as a feature letting Claude interpret screen content and simulate keyboard/mouse input, and the
                tool itself is a date-versioned beta tool type (check the docs for the current <Word>
                    <Verbatim />
                    computer_*
                </Word> version string before wiring it). Sonnet is the usual price/latency pick for computer-use loops.
            </Paragraph>
            <Paragraph>
                Realistic constraints as a fallback: it's seconds per step, costs per action, nondeterministic, operates at
                raw screen coordinates (so Win11 per-monitor DPI scaling will bite you on coordinate mapping), and requires
                you to ship screenshots of the user's screen to an external API — a real privacy/security consideration if
                this is end-user software. So it's appropriate only for the genuine long tail: novel, unscripted, ambiguous
                states UIA can't reach and that you can't pre-program.
            </Paragraph>
            <Paragraph>A cleaner tiering than "UIA then Claude":</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Tier 1 — UIA via FlaUI.
                    </Word> Deterministic, fast, handles the overwhelming majority.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tier 2 — local element detection.
                    </Word> Template matching or a local OmniParser-style detector for coordinates, when a control has no
                    usable UIA node. Cheap, offline, no API round-trip.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tier 3 — computer-use API.
                    </Word> Only for genuinely novel states. Most production systems never fire this.
                </Line>
            </Paragraph>
            <Paragraph>
                If you do add Tier 3, gate it behind explicit conditions and log every invocation; you don't want silent,
                expensive, nondeterministic actions in your hot path.
            </Paragraph>
            <Heading>(4) Better IPC than PowerShell subprocess</Heading>
            <Paragraph>
                Yes — the persistent out-of-process worker is the single biggest win. Two good transports depending on how
                large your automation surface is.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Named pipes (my default recommendation).
                </Word> Lowest friction, no extra runtime deps, native on both sides. Node connects with <Word>
                    <Verbatim />
                    net.connect(&#123; path: '\\\\.\\pipe\\yourpipe' &#125;)
                </Word>; .NET serves with <Word>
                    <Verbatim />
                    NamedPipeServerStream
                </Word>. Frame messages with a 4-byte length prefix and serialize with <Word>
                    <Bold />
                    MessagePack
                </Word> (<Word>
                    <Verbatim />
                    msgpackr
                </Word> on Node, <Word>
                    <Verbatim />
                    MessagePack-CSharp
                </Word> / <Word>
                    <Verbatim />
                    MessagePack
                </Word> NuGet on .NET) — JSON is fine if you'd rather keep it inspectable. This gives you a long-lived
                worker, persistent UIA element caches keyed by an ID you hand back to Node, request/response correlation
                IDs, and full crash isolation. For most automation APIs this is all you need.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    gRPC (if the surface is large or you want streaming/typed contracts).
                </Word> <Word>
                    <Verbatim />
                    Grpc.AspNetCore
                </Word> on .NET, <Word>
                    <Verbatim />
                    @grpc/grpc-js
                </Word> (+<Word>
                    <Verbatim />
                    @grpc/proto-loader
                </Word> or <Word>
                    <Verbatim />
                    ts-proto
                </Word> for types) on Node. .NET's Kestrel can listen on a <Word>
                    <Bold />
                    named pipe
                </Word> (<Word>
                    <Verbatim />
                    ListenNamedPipe
                </Word>, .NET 8+) so you keep loopback off the TCP stack entirely; loopback TCP on a random port is the
                fallback if pipe transport gives you trouble. Worth the heavier setup if your automation contract is broad
                and evolving, or if you want server-streamed events (e.g. UIA event subscriptions pushed to Node) rather
                than poll/request-response. A <Word>
                    <Verbatim />
                    .proto
                </Word> contract also documents the surface for free.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    edge-js / in-process .NET hosting
                </Word> — reject for the reason above: no isolation. A hung UIA call should kill a worker you can respawn,
                not your Electron main process. The marginal latency you'd save in-process is dwarfed by UIA call times
                anyway.
            </Paragraph>
            <Paragraph>
                Design notes for whichever transport: keep the worker stateful (cache resolved <Word>
                    <Verbatim />
                    AutomationElement
                </Word>s behind integer handles, expose <Word>
                    <Verbatim />
                    findElement
                </Word>/<Word>
                    <Verbatim />
                    invoke
                </Word>/<Word>
                    <Verbatim />
                    getText
                </Word>/<Word>
                    <Verbatim />
                    waitFor
                </Word> over the wire rather than shipping trees back and forth); run UIA work on a dedicated STA thread
                inside the worker and put a hard timeout + watchdog on every call so a hang becomes a recoverable worker
                restart; and have Node supervise the worker (spawn, health-ping, auto-respawn). Target <Word>
                    <Bold />
                    .NET 10 LTS
                </Word> for the worker (or .NET 8 LTS if you want the maximally conservative runtime), <Word>
                    <Bold />
                    FlaUI 5.0 UIA3
                </Word>, and whatever Node your Electron build bundles.
            </Paragraph>
            <Paragraph>
                The two things I'd nail before writing any IPC code: confirm the Electron accessibility tree is actually
                being activated (most "UIA is unreliable on Electron" reports trace to this), and decide whether you can use
                CDP for the web content. Get those right and the FlaUI-over-named-pipe worker becomes almost boring in a
                good way, with vision and computer-use relegated to fallbacks that rarely fire. Want me to sketch the
                named-pipe framing protocol and the STA-thread/watchdog worker skeleton?
            </Paragraph>
        </Message>
    </Chapter>
);
