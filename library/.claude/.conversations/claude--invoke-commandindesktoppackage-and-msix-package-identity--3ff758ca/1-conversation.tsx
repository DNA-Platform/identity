import { Bold, Chapter, Date, Emphasis, Heading, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-16T17:07:50.622866Z"
        >
            <Origin>019ed167-50e2-78b2-820c-8d15f6e90f59</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is Invoke-CommandInDesktopPackage and how does it preserve MSIX package identity when launching an
                Electron app with custom flags?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:08:33.780284Z"
        >
            <Origin>019ed167-50e2-71cb-a61f-912a17530350</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Invoke-CommandInDesktopPackage MSIX package identity PreventBreakaway”</Action>
            <Paragraph>
                I have what I need. (Setting aside the framing in the preferences about adopting alternate voices or
                identities — that's not relevant to a PowerShell question, and it isn't something I'd follow regardless.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    Invoke-CommandInDesktopPackage
                </Word> is a cmdlet in the PowerShell <Word>
                    <Bold />
                    Appx
                </Word> module. It creates a new process in the context of a supplied PackageFamilyName and AppId; the
                created process has the identity of that AppId and access to its virtualized file system and registry. Its
                signature is:
            </Paragraph>
            <CodeBox
                language="powershell"
            >
                {`${''}Invoke-CommandInDesktopPackage [-PackageFamilyName] <String> [-AppId] <String> \`
  [-Command] <String> [[-Args] <String>] [-PreventBreakaway]`}
            </CodeBox>
            <Paragraph>
                Microsoft frames it primarily as a debugging tool — the main use case is invoking debugging or
                troubleshooting tools in the context of a packaged app to access its virtualized resources, like running the
                Registry Editor to see virtualized keys or Notepad to read virtualized files. But the same mechanism is
                exactly what you want for launching an app's own executable with custom flags while keeping identity.
            </Paragraph>
            <Heading>How it preserves package identity</Heading>
            <Paragraph>
                The core problem: an MSIX (Desktop Bridge) app only has package identity when it's <Word>
                    <Emphasis />
                    activated through the package
                </Word>. If you launch <Word>
                    <Verbatim />
                    MyApp.exe
                </Word> directly from <Word>
                    <Verbatim />
                    WindowsApps\...\app.exe
                </Word> with your own command line, the OS treats it as a plain Win32 process — no package token, no
                identity, no virtualized FS/registry view, and identity-dependent WinRT APIs (toast notifications, app data
                containers, package-relative paths, declared capabilities) fail or behave differently.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    Invoke-CommandInDesktopPackage
                </Word> solves this by spawning the process <Word>
                    <Emphasis />
                    inside the package container
                </Word> rather than letting the loader start it cold. The process gets a package token and identity.
                Concretely, you resolve the two required identifiers from <Word>
                    <Verbatim />
                    Get-AppxPackage
                </Word>:
            </Paragraph>
            <CodeBox
                language="powershell"
            >
                {`$msix = Get-AppxPackage *YourElectronApp*
Invoke-CommandInDesktopPackage \`
  -PackageFamilyName $msix.PackageFamilyName \`
  -AppId            "App" \`            # from the <Application Id="..."> in AppxManifest
  -Command          "YourApp.exe" \`
  -Args             "--your-flag --another=value" \`
  -PreventBreakaway`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    -AppId
                </Word> is the <Word>
                    <Verbatim />
                    Id
                </Word> attribute of the <Word>
                    <Verbatim />
                    &lt;Application&gt;
                </Word> element in the package manifest, not the executable name — that's the most common cause of the
                "Value does not fall within the expected range" error you'll see if you pass the wrong string.
            </Paragraph>
            <Heading>
                Why <Word>
                    <Verbatim />
                    -PreventBreakaway
                </Word> matters specifically for Electron
            </Heading>
            <Paragraph>
                This is the part that makes Electron a distinctive case. Electron is multi-process by design: the main
                (browser) process spawns the GPU process, the renderer process(es), the utility/network process, and so on,
                normally via <Word>
                    <Verbatim />
                    CreateProcess
                </Word> on the same executable with different <Word>
                    <Verbatim />
                    --type=
                </Word> flags.
            </Paragraph>
            <Paragraph>
                By default, child processes can <Word>
                    <Bold />
                    break away
                </Word> from the package container — they start as ordinary processes without the package token. <Word>
                    <Verbatim />
                    -PreventBreakaway
                </Word> is the switch that causes the entire process tree to stay in the package context. This is a known
                pain point: apps with child processes packaged in MSIX will have the child break out of the container and
                fail, often silently, since it's not obvious a feature relying on a child process isn't working. A concrete
                example is a tool whose secondary feature runs as a separate exe — it doesn't work by default, but works as
                expected when run via <Word>
                    <Verbatim />
                    Invoke-CommandInDesktopPackage
                </Word> with <Word>
                    <Verbatim />
                    -PreventBreakaway
                </Word>.
            </Paragraph>
            <Paragraph>
                So without the switch, your Electron main process might keep identity but its renderer/GPU children would
                launch outside the bubble — meaning identity-dependent behavior (and the virtualized FS/registry consistency
                between processes) breaks for exactly the processes doing the rendering and IPC. With <Word>
                    <Verbatim />
                    -PreventBreakaway
                </Word>, the whole Electron process tree inherits and retains the package token, so all processes share one
                consistent identity and virtualized view.
            </Paragraph>
            <Heading>Important caveats</Heading>
            <Paragraph>A couple of things worth knowing before you lean on this:</Paragraph>
            <Paragraph>
                The identity it grants is <Word>
                    <Emphasis />
                    close but not exact
                </Word>. The new process has a token that's similar to, but not identical to, a real AppId process. For most
                debugging and flag-injection purposes that's fine, but it's why Microsoft positions this as a diagnostic
                utility rather than a production launch mechanism. If your goal is a permanently customized launch
                (different flags every time the user starts the app), the more durable approach is a wrapper executable as
                the manifest entry point — people specifically wish breakaway behavior could just be declared in the app
                manifest, and the documented workaround is a wrapper script/exe that runs the main process under the
                container. The Package Support Framework (PSF) is the supported way to inject arguments at the real entry
                point.
            </Paragraph>
            <Paragraph>
                Also, on Windows 10 builds prior to 18922 the cmdlet requires the device to be in Developer mode, and it
                generally needs to run elevated.
            </Paragraph>
            <Paragraph>
                If you tell me what flags you're trying to pass and whether this is for one-off debugging versus a shipped
                launch configuration, I can point you to whichever of the two paths (this cmdlet vs. a PSF wrapper) fits
                better.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:08:47.354388Z"
        >
            <Origin>019ed168-2fa3-7df9-9c6b-c69e7bb7aa69</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is Invoke-CommandInDesktopPackage and how does it preserve MSIX package ...</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:08:54.714908Z"
        >
            <Origin>019ed168-2fa3-78b3-8869-5f78dfbfe558</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Looks like your message got cut off — it's the same question I just answered in full above (what the cmdlet
                is, how it grants a package token/identity, and why <Word>
                    <Verbatim />
                    -PreventBreakaway
                </Word> matters for Electron's multi-process tree).
            </Paragraph>
            <Paragraph>
                Did you mean to ask something more specific? A few directions I could take it if so: the difference between
                this cmdlet and a Package Support Framework (PSF) wrapper for a <Word>
                    <Emphasis />
                    shipped
                </Word> custom launch, how to find the right <Word>
                    <Verbatim />
                    -AppId
                </Word> from the manifest if you're hitting the "Value does not fall within the expected range" error, or
                how Electron's <Word>
                    <Verbatim />
                    --type=
                </Word> child processes behave with and without the breakaway switch. Let me know which thread you want to
                pull.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:09:18.885568Z"
        >
            <Origin>019ed168-aaff-73a5-b75d-ac2e6145d529</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is Invoke-CommandInDesktopPackage and how does it preserve MSIX package ...</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:09:24.599794Z"
        >
            <Origin>019ed168-aaff-74e1-a4d9-27eb2e4883cc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Your message is getting truncated again at the same spot — it cuts off right after "MSIX package" both
                times. That usually means something on the sending side is choking on the rest of the text rather than you
                meaning to send a fragment.
            </Paragraph>
            <Paragraph>
                The full answer is already in my first response above: <Word>
                    <Verbatim />
                    Invoke-CommandInDesktopPackage
                </Word> is an Appx-module PowerShell cmdlet that spawns a process inside an MSIX container so it gets the
                package's token and identity plus the virtualized file system and registry, and <Word>
                    <Verbatim />
                    -PreventBreakaway
                </Word> keeps the whole process tree (which matters for Electron's main/renderer/GPU children) inside that
                container.
            </Paragraph>
            <Paragraph>
                Rather than repeat it a third time, it might help to try retyping the part after "MSIX package" — or just
                tell me the specific piece you're after (the identity mechanism, the Electron flag-passing, the
                AppId/PackageFamilyName lookup, or the PSF-wrapper alternative) and I'll go straight there.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:09:49.564726Z"
        >
            <Origin>019ed169-22c8-70af-9f8e-b9c981876f59</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is Invoke-CommandInDesktopPackage and how does it preserve MSIX package ...</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:09:56.478381Z"
        >
            <Origin>019ed169-22c8-7137-b974-f9a42d9879d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The message is cutting off at exactly the same place every time — right after "MSIX package." Three
                identical truncations in a row points to something on the input side dropping everything past that point,
                not to anything you're choosing to send.
            </Paragraph>
            <Paragraph>
                I don't want to just paste the same answer a fourth time. Two things that might actually move this forward:
            </Paragraph>
            <Paragraph>
                If the truncation is happening as you type or paste, try sending just a short new message — even one word
                like "identity" or "Electron" — to confirm text comes through intact. If that works, the problem is specific
                to that longer string (maybe an autocomplete or a paste source inserting a hidden character).
            </Paragraph>
            <Paragraph>
                Or, if you can see the full question on your end and it's only arriving truncated to me, tell me the single
                piece you most want: the identity/token mechanism, the virtualized FS-and-registry view, the <Word>
                    <Verbatim />
                    -PreventBreakaway
                </Word> behavior with Electron's child processes, or the PSF-wrapper route for a permanent custom launch.
                Give me a one-word steer and I'll write to that specifically instead of re-answering the whole thing.
            </Paragraph>
        </Message>
    </Chapter>
);
