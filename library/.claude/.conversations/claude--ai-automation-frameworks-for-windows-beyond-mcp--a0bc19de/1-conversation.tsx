import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-16T15:16:43.259890Z"
        >
            <Origin>019ed101-8e29-71fd-84c5-dbffb3d0c0de</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What AI-based automation frameworks exist beyond MCP (Model Context Protocol) that could help an AI coding
                assistant be more effective on Windows? I'm looking for:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Tools or protocols that let an AI agent control desktop applications (beyond just CLI tools)</Line>
                <Line>Frameworks for structured tool use or function calling that go beyond what MCP provides</Line>
                <Line>
                    Windows-specific automation tools that work well with AI assistants (UIA, Win32, accessibility APIs, or
                    newer approaches)
                </Line>
                <Line>Any emerging standards or protocols for AI-to-application communication</Line>
            </Paragraph>
            <Paragraph>
                Focus on what's actually available and working today, not theoretical. Include specific project names, URLs
                where possible, and brief assessments of maturity.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T15:18:29.493743Z"
        >
            <Origin>019ed101-8e2a-7ecb-8d65-269c0a4b9dec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a fast-moving space, so let me research the current state rather than rely on potentially stale
                knowledge.
            </Paragraph>
            <Action>Searched the web for “Microsoft UFO Windows UI agent”</Action>
            <Paragraph>Let me check the newer UFO² and Microsoft's broader desktop agent work.</Paragraph>
            <Action>Searched the web for “UFO2 desktop agentos Windows 2025 Microsoft”</Action>
            <Paragraph>Now let me look at computer-use agents and protocols beyond MCP, including Google's A2A.</Paragraph>
            <Action>Searched the web for “Google A2A Agent2Agent protocol vs MCP 2025”</Action>
            <Paragraph>Now let me look at computer-use agents and Windows-specific automation libraries.</Paragraph>
            <Action>Searched the web for “pywinauto FlaUI WinAppDriver Windows UI Automation AI agent 2025”</Action>
            <Paragraph>Let me check computer-use APIs and Windows 11's native agentic/MCP integration.</Paragraph>
            <Action>Searched the web for “Windows 11 native MCP support App Actions agentic 2025 Microsoft Build”</Action>
            <Paragraph>Let me check computer-use model APIs and agent orchestration frameworks.</Paragraph>
            <Action>
                Searched the web for “Anthropic computer use OpenAI computer-use-preview Operator desktop control API 2025”
            </Action>
            <Paragraph>Last search — the function-calling and orchestration frameworks for structured tool use.</Paragraph>
            <Action>
                Searched the web for “Microsoft Semantic Kernel AutoGen LangGraph OpenAI Agents SDK function calling 2025
                comparison”
            </Action>
            <Paragraph>
                Here's the current landscape, organized around your four questions. Short version up front: beyond MCP the
                action is in three places — vision-based "computer use" model APIs, Windows-native accessibility automation
                (which is more useful than people expect), and a thin layer of agent-orchestration protocols/SDKs sitting
                above MCP. For a <Word>
                    <Emphasis />
                    coding assistant
                </Word> specifically, the highest-leverage move is usually not a new protocol but wrapping deterministic
                UIA-based tooling as MCP servers or function-call tools.
            </Paragraph>
            <Heading>1. Letting an AI agent control desktop applications</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Computer-use model APIs
                </Word> are the most general approach and are genuinely available today. Anthropic introduced computer use
                in October 2024 as an API capability you run yourself, typically in a sandboxed VM, and it supports full
                desktop control including terminal commands, native applications, and file system operations — not just a
                browser. OpenAI shipped Operator in January 2025 (the CUA model) and folded it into ChatGPT Agent in July
                2025; Google has a Gemini-based equivalent. The mechanism is the same across all of them: screenshot the
                screen, identify fields and buttons from pixels, calculate coordinates, move a virtual mouse and type.
            </Paragraph>
            <Paragraph>
                The honest maturity assessment: this works on <Word>
                    <Emphasis />
                    anything
                </Word> a human can see, including legacy and Citrix apps with no API, but it's computationally expensive,
                slower due to the screenshot loop, and prone to hallucinating UI elements on cluttered interfaces.
                Production deployments are still mostly supervised. For Anthropic, the current path uses the <Word>
                    <Verbatim />
                    computer-use-2025-11-24
                </Word> beta header with Claude 4.x models — check <Word>
                    <Verbatim />
                    docs.claude.com
                </Word> for the exact current models and tool spec rather than trusting a blog.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    UFO / UFO² (Microsoft Research)
                </Word> is the most mature <Word>
                    <Emphasis />
                    Windows-specific
                </Word> desktop agent and is open source: https://github.com/microsoft/UFO. The original UFO was the first
                UI agent specifically tailored for task completion on Windows OS (arXiv 2402.07939). The 2025 rewrite, UFO²
                ("The Desktop AgentOS," arXiv 2504.14603), is the interesting one — it explicitly rejects pure screenshot
                interaction. A hybrid control detection pipeline fuses Windows UI Automation (UIA) with vision-based
                parsing, with speculative multi-action planning to reduce per-step LLM overhead. Architecturally it's a
                HostAgent that parses the goal and launches apps, plus one AppAgent per application running a ReAct loop
                with hybrid control detection and a Puppeteer executor that chooses between GUI actions and native APIs.
                Still research-grade (Microsoft labels it "not an official Windows feature"), but it's the best blueprint
                available for how a Windows agent <Word>
                    <Emphasis />
                    should
                </Word> be built, and you can run it.
            </Paragraph>
            <Heading>2. Windows-specific automation (UIA, Win32, accessibility)</Heading>
            <Paragraph>
                This is the part most people underweight, and for a coding assistant it's probably the most practical. These
                are deterministic, object-based libraries your assistant can drive by <Word>
                    <Emphasis />
                    writing code
                </Word> — far more reliable than pixel-clicking:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        pywinauto
                    </Word> (Python) — drives native Windows apps via UIA and Win32 backends; object-level, not image
                    recognition. The most-used option in the Python ecosystem and actively maintained.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        FlaUI
                    </Word> (.NET/C#) — wraps Microsoft UI Automation (UIA2/UIA3); the recommended modern starting point
                    alongside pywinauto, both actively maintained with solid object-based locators for Win32/WinForms/WPF.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Python-UIAutomation-for-Windows
                    </Word> — direct UIA bindings if you want lower-level control in Python.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        WinAppDriver
                    </Word> — WebDriver/Appium-style. Worth a maturity warning: Appium's Windows Driver docs now point to
                    NovaWindows Driver as the modern replacement; if WinAppDriver works keep it, but don't start new
                    projects on it. Winium is effectively abandoned.
                </Line>
            </Paragraph>
            <Paragraph>
                For visual/Citrix/game cases where object access isn't available, the fallback is CV-based tools — SikuliX,
                Airtest, or AskUI's vision agent.
            </Paragraph>
            <Paragraph>
                The synthesis worth internalizing: UFO²'s whole design thesis is that UIA gives you reliable, inspectable
                structure and vision fills the gaps. So the strongest setup for an AI coding assistant is to expose
                FlaUI/pywinauto operations as callable tools and reserve computer-use vision for when the accessibility tree
                comes up empty.
            </Paragraph>
            <Heading>3 &amp; 4. Protocols beyond MCP, and AI-to-application standards</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Windows 11 native MCP + App Actions
                </Word> is the most directly relevant emerging standard for you. Announced at Build 2025, it's now actually
                shipping in preview: native MCP support went to Windows Insiders in build 26220.7344, with two built-in
                connectors (File Explorer and Windows Settings) and an on-device registry (ODR) that sandboxes connectors
                with identity and audit trails. App Actions lets developers expose specific app features that agents can
                invoke, available in private developer preview with select partners. Maturity: real but early/preview, and
                Microsoft is leading heavily with security framing (cross-prompt injection, tool poisoning, agent identity
                via Entra). Developer hub: https://developer.microsoft.com/en-us/windows/agentic.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A2A (Agent2Agent)
                </Word> solves a different axis than MCP — agent-to-agent rather than agent-to-tool. Google announced it
                April 2025; it uses HTTP, Server-Sent Events, and JSON-RPC 2.0, with Agent Cards at
                /.well-known/agent-card.json for capability discovery, and sits alongside MCP rather than replacing it. It's
                now governed by the Linux Foundation under Apache-2.0. Maturity: still relatively new with limited
                production evidence as of early 2026, but broad enterprise backing (150+ orgs). Site:
                https://a2a-protocol.org. Probably overkill unless you're orchestrating multiple independent agents; for a
                single coding assistant it adds little over MCP.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Orchestration / structured-tool-use SDKs
                </Word> (the layer above raw function calling):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Microsoft Agent Framework
                    </Word> — the consolidation play. Version 1.0 merges Semantic Kernel and AutoGen into one SDK (Python +
                    .NET) with built-in MCP client support and A2A, plus graph-based workflows. Most natural fit if you're
                    on Windows/.NET/Azure.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        LangGraph
                    </Word> — best for complex stateful workflows, multi-step tool sequencing, and full step-level
                    observability; leads in adoption.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        OpenAI Agents SDK
                    </Word> (March 2025) and <Word>
                        <Bold />
                        Claude Agent SDK
                    </Word> — leaner, model-family-optimized. The Claude Agent SDK is the simplest path if you're building
                    on Claude.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Google ADK
                    </Word>, <Word>
                        <Bold />
                        CrewAI
                    </Word>, <Word>
                        <Bold />
                        Pydantic AI
                    </Word>, <Word>
                        <Bold />
                        smolagents
                    </Word> round out the field for various role-based or lightweight needs.
                </Line>
            </Paragraph>
            <Paragraph>
                These all now treat MCP as the tool-connection substrate, so they're complements to MCP, not alternatives.
            </Paragraph>
            <Paragraph>
                One emerging standard to keep on your radar: <Word>
                    <Bold />
                    NLWeb
                </Word>, the open web protocol Microsoft introduced at Build 2025 to connect agents across sites —
                earlier-stage than the above, but worth watching if your assistant ever reaches out to web services.
            </Paragraph>
            <Paragraph>
                If you tell me more about what your coding assistant actually needs to <Word>
                    <Emphasis />
                    drive
                </Word> — IDE and terminal only, or arbitrary GUI apps; Python vs .NET; supervised vs autonomous — I can
                narrow this to a concrete stack recommendation rather than a survey.
            </Paragraph>
        </Message>
    </Chapter>
);
