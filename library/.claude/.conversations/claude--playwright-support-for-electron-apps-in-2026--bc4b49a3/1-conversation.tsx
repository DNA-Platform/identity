import { Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-16T17:42:36.819065Z"
        >
            <Origin>019ed187-2684-7b00-8447-ae4d078325eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the current state of Playwright support for Electron apps in 2026?</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:43:29.514622Z"
        >
            <Origin>019ed187-2684-78ea-8c3a-9b93a4add0e5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll look up the current state of this.</Paragraph>
            <Action>Searched the web for “Playwright Electron support 2026”</Action>
            <Paragraph>
                As of mid-2026, the short version is that Playwright's Electron support is still officially labeled
                "experimental," but that label is misleading about how usable it actually is in practice.
            </Paragraph>
            <Paragraph>
                The core situation: Playwright has experimental support for Electron automation, working via Electron's
                support for the Chrome DevTools Protocol (CDP). You launch your app through the <Word>
                    <Verbatim />
                    _electron.launch()
                </Word> API, get an <Word>
                    <Verbatim />
                    ElectronApplication
                </Word> instance, and from there you can drive both renderer windows (as normal <Word>
                    <Verbatim />
                    Page
                </Word> objects) and the main process via <Word>
                    <Verbatim />
                    electronApp.evaluate()
                </Word>.
            </Paragraph>
            <Paragraph>
                On the "experimental" designation specifically — it has carried that label for years without much practical
                instability. The long-running community consensus is that while it is experimental by definition, it is
                absolutely usable and is used by big clients like Visual Studio Code, with no breaking changes in the past
                and continued support expected. So "experimental" here reflects the API not being formally frozen rather
                than the feature being flaky. VS Code itself being a flagship dependent is the usual reassurance people
                cite.
            </Paragraph>
            <Paragraph>What it handles well:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Multiple windows (each emitted via a <Word>
                        <Verbatim />
                        window
                    </Word> event and controllable as a <Word>
                        <Verbatim />
                        Page
                    </Word>)
                </Line>
                <Line>
                    Main-process access through <Word>
                        <Verbatim />
                        evaluate()
                    </Word> / <Word>
                        <Verbatim />
                        evaluateHandle()
                    </Word>, including stubbing main-process behavior
                </Line>
                <Line>
                    The <Word>
                        <Verbatim />
                        electronApplication.on('console')
                    </Word> event, emitted when the Electron main process calls console API methods
                </Line>
                <Line>
                    Standard renderer-side interaction, selectors, tracing, screenshots, the full Playwright test runner
                </Line>
            </Paragraph>
            <Paragraph>The real caveats, which haven't gone away:</Paragraph>
            <Paragraph>
                Native OS-level UI is the main gap. Playwright does not intercept the native Electron dialog API
                (showOpenDialog, showSaveDialog, showMessageBox, etc.) because those calls happen in the main process and go
                straight to OS APIs. The recommended workaround is to use electronApplication.evaluate() to replace those
                methods in the main process so tests run deterministically without any OS-level UI — e.g. stubbing the open
                dialog to return a fixed path. The same limitation extends conceptually to things like system tray, native
                menus, and OS notifications: anything rendered by the OS rather than in a Chromium window isn't directly
                driveable, so you either stub at the main-process level or reach for something like RobotJS for true native
                input. This exact set of questions was raised in an early-2026 GitHub issue evaluating Playwright for a
                large multi-window Electron 40 app, which is a good signal that it's still the live concern for production
                adopters.
            </Paragraph>
            <Paragraph>
                A launch gotcha worth knowing: if <Word>
                    <Verbatim />
                    electron.launch()
                </Word> times out, the usual cause is the nodeCliInspect (FuseV1Options.EnableNodeCliInspectArguments) fuse
                being set to false — packaged/hardened builds often disable it, which breaks the CDP attach.
            </Paragraph>
            <Paragraph>
                One newer development in the ecosystem (2026) is MCP servers that wrap Playwright's Electron support for
                AI-agent-driven automation — e.g. <Word>
                    <Verbatim />
                    @robertn702/playwright-mcp-electron
                </Word>, a fork of the official Playwright MCP that adds dedicated tools for testing and automating Electron
                desktop apps, with main-process access and multi-window control, operating on the accessibility tree rather
                than pixels. Relevant if you want Claude or another agent to drive an Electron app rather than just running
                scripted tests.
            </Paragraph>
            <Paragraph>
                So: production-viable for renderer and main-process testing (VS Code is the proof), with the understanding
                that native OS surfaces need stubbing or a separate tool, and that the API remains nominally experimental.
            </Paragraph>
            <Paragraph>
                If you tell me your Electron version and what you're trying to test (the GitHub issue I found was for a
                multi-window/tray/notifications app on Electron 40), I can get more specific about which parts will need
                workarounds.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:44:06.845023Z"
        >
            <Origin>019ed188-86d1-7c63-8780-a5c3789f28ac</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the current state of Playwright support for Electron apps in 2026?</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:44:30.263124Z"
        >
            <Origin>019ed188-86d1-76ae-b8a7-064389b4c829</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I covered this just above — looks like the question came through twice. Rather than repeat the whole thing,
                here's the compressed version, and tell me if you were actually after a different angle.
            </Paragraph>
            <Paragraph>
                Playwright's Electron support is still officially "experimental" in 2026, but that label understates its
                real maturity — it's stable enough that VS Code relies on it. It works over the Chrome DevTools Protocol:
                you launch via <Word>
                    <Verbatim />
                    _electron.launch()
                </Word>, then drive renderer windows as normal <Word>
                    <Verbatim />
                    Page
                </Word> objects and the main process through <Word>
                    <Verbatim />
                    electronApp.evaluate()
                </Word>. Multi-window, main-process access, and console events all work well.
            </Paragraph>
            <Paragraph>
                The persistent gap is native OS UI. Playwright doesn't intercept the native dialog API (open/save/message
                dialogs) since those bypass Chromium and hit OS APIs directly — same story for system tray, native menus,
                and OS notifications. The fix is stubbing those methods in the main process via <Word>
                    <Verbatim />
                    evaluate()
                </Word>, or dropping to something like RobotJS for genuine native input. The one launch gotcha: timeouts
                usually trace back to the <Word>
                    <Verbatim />
                    nodeCliInspect
                </Word> fuse being disabled in hardened/packaged builds.
            </Paragraph>
            <Paragraph>
                New-ish in 2026: MCP server wrappers (e.g. <Word>
                    <Verbatim />
                    @robertn702/playwright-mcp-electron
                </Word>) that expose this same Electron automation to AI agents via the accessibility tree.
            </Paragraph>
            <Paragraph>
                If the repeat was intentional, was there a specific part — native automation, packaged-app testing, the MCP
                angle — you wanted me to go deeper on?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:44:41.955854Z"
        >
            <Origin>019ed189-0168-79fe-8e81-42bce2b30bce</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the current state of Playwright support for Electron apps in 2026?</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:44:48.632760Z"
        >
            <Origin>019ed189-0168-74cb-80c8-4cffdffd8283</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the same question a third time now. I don't want to keep pasting the same answer, so I'll assume
                something's off rather than that you genuinely want a third copy.
            </Paragraph>
            <Paragraph>
                A couple of possibilities: the message may be getting resent on your end (a UI hiccup, a retry, an
                autocomplete misfire), or you're testing how I respond to repetition, or the earlier answers didn't actually
                land and you're not seeing them. Any of those is fine — I just can't tell which from here.
            </Paragraph>
            <Paragraph>
                The substance hasn't changed: Playwright's Electron support is officially "experimental" but
                production-stable (VS Code uses it), works over CDP via <Word>
                    <Verbatim />
                    _electron.launch()
                </Word>, handles renderer windows and main-process access well, and its main gap is native OS UI (dialogs,
                tray, menus) which you stub in the main process or handle with a tool like RobotJS.
            </Paragraph>
            <Paragraph>
                If you wanted something different — a deeper dive on one piece, a code example, a comparison with
                WebdriverIO, or help testing a specific app — tell me what, and I'll take it there. Or if you're seeing a
                problem on your end where my replies aren't showing up, let me know and we can work around it.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:45:09.642245Z"
        >
            <Origin>019ed189-7c11-7466-a799-f1b437b42329</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the current state of Playwright support for Electron apps in 2026?</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:45:15.577330Z"
        >
            <Origin>019ed189-7c11-7ae7-9958-5f6b9fbc719b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I've answered this three times, and this is the fourth identical message. I'm going to stop repeating the
                answer — pasting it a fourth time wouldn't help you, and if you're reading this, you already have it above.
            </Paragraph>
            <Paragraph>
                Something is clearly happening that the words alone aren't telling me. Most likely it's a technical issue —
                messages resending, my replies not rendering on your end, a stuck retry loop. If that's it, the fix is on
                the app side: try reloading, or check whether my previous responses are actually visible to you.
            </Paragraph>
            <Paragraph>
                If instead you're doing this deliberately — testing, or hoping a different answer falls out — the honest
                truth is it won't, because the facts haven't changed since the first reply.
            </Paragraph>
            <Paragraph>
                I'm happy to keep going the moment there's something new to work with. Tell me what's actually going on, or
                ask me something different, and I'm right here.
            </Paragraph>
        </Message>
    </Chapter>
);
