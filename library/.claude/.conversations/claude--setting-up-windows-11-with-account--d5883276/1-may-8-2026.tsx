import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Title>[[ 8 May 2026 ]]</Title>
        <Message
            at="2026-05-08T16:24:56.268530Z"
        >
            <Origin>019e0868-00bf-726b-8b22-51352fd268cc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hey I am setting up a new windows 11 computer. It starts with a root user without a password and I need to
                hook up a windows account. We have done this in another chat so can you find it and remind me how to do such
                things?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:25:15.422137Z"
        >
            <Origin>019e0868-00bf-7d47-bfd6-5ad739b8ae90</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “Windows 11 setup root user account password”</Action>
            <Paragraph>
                Found it. We covered this in a previous chat. There are two paths depending on what you actually want:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option A — Convert the current local account into a Microsoft account (most likely what you want):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Settings (<Word>
                        <Verbatim />
                        Win + I
                    </Word>) → <Word>
                        <Bold />
                        Accounts
                    </Word> → <Word>
                        <Bold />
                        Your info
                    </Word>
                </Line>
                <Line>
                    Click <Word>
                        <Bold />
                        Sign in with a Microsoft account instead
                    </Word>
                </Line>
                <Line>Enter your Microsoft account email and password</Line>
                <Line>
                    It'll ask for the <Word>
                        <Emphasis />
                        current
                    </Word> Windows password — since the local account has none, leave it blank and click Next
                </Line>
                <Line>Set up a PIN when prompted</Line>
            </Paragraph>
            <Paragraph>
                This keeps the same user profile, files, and admin status — it just links it to your Microsoft account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option B — Add a separate new user tied to a Microsoft account:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Settings → <Word>
                        <Bold />
                        Accounts
                    </Word> → <Word>
                        <Bold />
                        Other users
                    </Word> (or "Family &amp; other users")
                </Line>
                <Line>
                    Click <Word>
                        <Bold />
                        Add account
                    </Word> under "Other users"
                </Line>
                <Line>Enter the Microsoft account email → Next → Finish</Line>
                <Line>
                    To make them admin: click the account → <Word>
                        <Bold />
                        Change account type
                    </Word> → Administrator
                </Line>
            </Paragraph>
            <Paragraph>
                The new user has to sign in once at the lock screen (not via Switch User) for Windows to fully provision the
                profile.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    While you're at it — add a password to the current local account first
                </Word> if you're going with Option B and keeping the local account around:
            </Paragraph>
            <Paragraph>
                Settings → <Word>
                    <Bold />
                    Accounts
                </Word> → <Word>
                    <Bold />
                    Sign-in options
                </Word> → <Word>
                    <Bold />
                    Password
                </Word> → <Word>
                    <Bold />
                    Add
                </Word>
            </Paragraph>
            <Paragraph>
                A passwordless local admin is a security hole, especially with BitLocker considerations down the road.
            </Paragraph>
            <Paragraph>Which path are you going for?</Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:29:17.646422Z"
        >
            <Origin>019e086b-fee4-7c16-bdfe-be99204e62ba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                On a logitech wireless mouse with the dingle but with bluetooth capability how do I make it discoverable. It
                has three button on the side
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:29:38.662084Z"
        >
            <Origin>019e086b-fee4-76ac-ac53-1e833f399eed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Those three side buttons are almost certainly the <Word>
                    <Bold />
                    Easy-Switch channel buttons
                </Word> (1, 2, 3) — Logitech mice that support both the dongle and Bluetooth use them to swap between up to
                three paired devices.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To put it in Bluetooth pairing mode:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Make sure the mouse is <Word>
                        <Bold />
                        on
                    </Word> (power switch is usually on the bottom)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Press
                    </Word> one of the three channel buttons to select a channel — pick an empty one (the LED above that
                    number will be solid/dim if unpaired, or blink slowly if currently bonded)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Press and hold
                    </Word> that same channel button for ~3 seconds until the LED above it starts <Word>
                        <Bold />
                        blinking rapidly
                    </Word> (about 2x per second). That's pairing mode.
                </Line>
                <Line>
                    On Windows: Settings → <Word>
                        <Bold />
                        Bluetooth &amp; devices
                    </Word> → <Word>
                        <Bold />
                        Add device
                    </Word> → <Word>
                        <Bold />
                        Bluetooth
                    </Word> → pick the mouse from the list
                </Line>
            </Paragraph>
            <Paragraph>
                The rapid blink usually lasts ~3 minutes before timing out — if it stops blinking before you pair, just hold
                the button again.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Notes:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Channel 1 is often pre-paired to the included dongle out of the box, so use channel 2 or 3 for Bluetooth
                    to keep the dongle option available.
                </Line>
                <Line>
                    If holding the button doesn't trigger the rapid blink, try a quick triple-press of the channel button
                    instead — a few models use that gesture.
                </Line>
                <Line>
                    If you also want to use the dongle on this same machine: just plug it in, no pairing needed (it's
                    pre-bonded).
                </Line>
            </Paragraph>
            <Paragraph>
                Which model is it? If you tell me, I can confirm the exact button layout — the side-mounted three-button
                configuration narrows it down to a few specific models.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:31:00.313011Z"
        >
            <Origin>019e086d-8ee7-7d42-adc5-529e69cc2685</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is that a way to add a microsofy account.</Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:31:14.970029Z"
        >
            <Origin>019e086d-8ee7-7330-991a-831d2cc580f1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yeah — both options I gave you earlier are ways to add a Microsoft account. To recap:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Option A
                    </Word> (link the current local "root" account to a Microsoft account): Settings → Accounts → Your info
                    → "Sign in with a Microsoft account instead"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Option B
                    </Word> (add a separate new user tied to a Microsoft account): Settings → Accounts → Other users → Add
                    account
                </Line>
            </Paragraph>
            <Paragraph>Which one are you trying to do — convert the existing account, or add a second user?</Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:33:56.629539Z"
        >
            <Origin>019e0870-3da3-7d4a-9705-f0187c3208da</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The current main account is owner. Is there a wau to cjange the name? I don't see how to make admin on
                windows 11
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:34:21.513109Z"
        >
            <Origin>019e0870-3da3-701a-96d6-92fe1779fdbd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two answers, since renaming on Win 11 is more annoying than it should be.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Renaming "Owner":
                </Word>
            </Paragraph>
            <Paragraph>
                There are a few paths, but a critical caveat first: <Word>
                    <Bold />
                    renaming the account name does NOT rename the user profile folder
                </Word> (<Word>
                    <Verbatim />
                    C:\Users\Owner
                </Word>). That folder rename requires registry surgery and is risky. If a clean profile path matters to you,
                the cleanest fix is to create a <Word>
                    <Emphasis />
                    new
                </Word> properly-named account, sign into it, then delete "Owner."
            </Paragraph>
            <Paragraph>If you just want to change the display name:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Press <Word>
                        <Verbatim />
                        Win + R
                    </Word> → type <Word>
                        <Verbatim />
                        netplwiz
                    </Word> → Enter
                </Line>
                <Line>
                    Select "Owner" → <Word>
                        <Bold />
                        Properties
                    </Word>
                </Line>
                <Line>
                    Change the <Word>
                        <Bold />
                        User name
                    </Word> and <Word>
                        <Bold />
                        Full name
                    </Word> fields → OK
                </Line>
                <Line>Sign out and back in</Line>
            </Paragraph>
            <Paragraph>
                Or via Control Panel (more limited): <Word>
                    <Verbatim />
                    Control Panel → User Accounts → User Accounts → Change your account name
                </Word>.
            </Paragraph>
            <Paragraph>
                If you switch to a Microsoft account (Option A from earlier), the <Word>
                    <Emphasis />
                    displayed
                </Word> name becomes your Microsoft account name automatically — but <Word>
                    <Verbatim />
                    C:\Users\Owner
                </Word> stays as-is.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Making an account admin:
                </Word>
            </Paragraph>
            <Paragraph>
                The "Change account type" option is hidden when you're looking at <Word>
                    <Emphasis />
                    your own
                </Word> account in Settings — it only appears for other accounts. Two ways around it:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Via netplwiz
                    </Word> (works for any account including your own):
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            Win + R
                        </Word> → <Word>
                            <Verbatim />
                            netplwiz
                        </Word> → Enter
                    </Line>
                    <Line>
                        Select the user → <Word>
                            <Bold />
                            Properties
                        </Word> → <Word>
                            <Bold />
                            Group Membership
                        </Word> tab
                    </Line>
                    <Line>
                        Choose <Word>
                            <Bold />
                            Administrator
                        </Word> → OK
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Via Settings
                    </Word> (only for other users):
                </Line>
                <Paragraph>
                    <List />
                    <Line>Settings → Accounts → Other users → click the user → Change account type → Administrator</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Via command line
                    </Word> (admin PowerShell or CMD): ``<Word>
                        <Verbatim />
                         net localgroup Administrators "username" /add 
                    </Word>``
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My honest recommendation given you're at the start of setup:
                </Word> create a new admin account with the right name (either local or linked to your Microsoft account),
                sign into it, delete "Owner." It's 5 minutes now versus living with a wrong profile folder forever — and you
                avoid the registry-edit rabbit hole entirely. Want the steps for that?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:36:14.902720Z"
        >
            <Origin>019e0872-5cb4-7735-ba82-0e0f2d6e408f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I added as other user and made admin. Now I want to add a nickname and then delete the other account
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:36:31.502788Z"
        >
            <Origin>019e0872-5cb4-73f1-a6b7-6f2d466a4d69</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nice. Here's the order of operations:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Sign into the new admin account
                </Word>
            </Paragraph>
            <Paragraph>
                Sign out of "Owner" → sign into the new account at the lock screen. Windows needs to fully provision the new
                profile (this takes 1–2 minutes the first time). You can't delete an account you're currently signed into,
                and you need to be on the new one to delete Owner cleanly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Set the nickname / display name
                </Word>
            </Paragraph>
            <Paragraph>Depends on what kind of account it is:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        If it's a Microsoft account:
                    </Word> the display name comes from your Microsoft account profile, not Windows. Go to <Word>
                        <Reference>https://account.microsoft.com</Reference>
                        account.microsoft.com
                    </Word> → <Word>
                        <Bold />
                        Your info
                    </Word> → <Word>
                        <Bold />
                        Edit name
                    </Word>. Changes sync to Windows within a few minutes (sometimes needs a sign-out/sign-in to refresh).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If it's a local account:
                    </Word> <Word>
                        <Verbatim />
                        Win + R
                    </Word> → <Word>
                        <Verbatim />
                        netplwiz
                    </Word> → select the user → <Word>
                        <Bold />
                        Properties
                    </Word> → change the <Word>
                        <Bold />
                        Full name
                    </Word> field (this is the friendly display name; "User name" is the login/folder name).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Delete the Owner account
                </Word>
            </Paragraph>
            <Paragraph>From the new admin account:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Settings → <Word>
                        <Bold />
                        Accounts
                    </Word> → <Word>
                        <Bold />
                        Other users
                    </Word>
                </Line>
                <Line>
                    Click <Word>
                        <Bold />
                        Owner
                    </Word> → <Word>
                        <Bold />
                        Remove
                    </Word>
                </Line>
                <Line>
                    Confirm <Word>
                        <Bold />
                        Delete account and data
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                That nukes <Word>
                    <Verbatim />
                    C:\Users\Owner
                </Word> and everything in it. Since it was a fresh setup with nothing on it, no real loss — but worth a
                5-second mental check that there's nothing in Desktop / Downloads / Documents on that profile you want
                first.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Optional cleanup
                </Word>
            </Paragraph>
            <Paragraph>
                After deletion, check <Word>
                    <Verbatim />
                    C:\Users\
                </Word> in Explorer — sometimes a leftover Owner folder lingers if any process had files open. Safe to
                delete manually if so (you'll need admin elevation prompt).
            </Paragraph>
            <Paragraph>
                One thing worth noting: if you also have a "DefaultAccount" or "WDAGUtilityAccount" showing in netplwiz,
                leave those alone — those are system accounts, not real users.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:40:02.671018Z"
        >
            <Origin>019e0875-d530-7152-ab2d-7f88cff76cf9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Your info just has edit name with first name and last name. And I see her email as the login. Are you sure
                its not on the computer?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:40:29.532220Z"
        >
            <Origin>019e0875-d530-7878-9c63-b4d8ea33ce8b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that the Microsoft account profile only has First/Last fields — and yes, for a
                Microsoft-account-linked user, Windows pulls the display name from there. There isn't a clean, officially
                supported way to override it locally.
            </Paragraph>
            <Paragraph>That said, three options, in increasing order of jankiness:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Just set the first name to the nickname (cleanest)
                </Word>
            </Paragraph>
            <Paragraph>
                If she's "Anastasia" but should display as "Ana," edit the Microsoft account profile to <Word>
                    <Bold />
                    First name: Ana
                </Word>, leave Last name blank or use a short surname. The lock screen shows "First Last" so this gives you
                full control over what displays. Changes sync within a few minutes.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Try netplwiz (sometimes works, sometimes doesn't)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    Win + R
                </Word> → <Word>
                    <Verbatim />
                    netplwiz
                </Word> → select her account → <Word>
                    <Bold />
                    Properties
                </Word> → change the <Word>
                    <Bold />
                    Full name
                </Word> field. For Microsoft accounts this is hit-or-miss — it may revert after the next sync with
                Microsoft's servers, or it may stick. Worth trying since it's free and reversible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Local Users and Groups (Pro only)
                </Word>
            </Paragraph>
            <Paragraph>
                If this machine is Windows 11 <Word>
                    <Bold />
                    Pro
                </Word>, you can use <Word>
                    <Verbatim />
                    lusrmgr.msc
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        Win + R
                    </Word> → <Word>
                        <Verbatim />
                        lusrmgr.msc
                    </Word> → Enter
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Users
                    </Word> → right-click the account → <Word>
                        <Bold />
                        Rename
                    </Word> or <Word>
                        <Bold />
                        Properties
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Win 11 <Word>
                    <Bold />
                    Home
                </Word> doesn't include this tool, so skip if she's on Home. (You can check edition: Settings → System →
                About → "Windows specifications.")
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Honest take:
                </Word> option 1 is what most people end up doing because it's the only one that doesn't fight Windows. The
                Microsoft account name is the display name, full stop — anything else is a workaround that may or may not
                survive the next sync. If you want "Ana" displayed, the path of least resistance is making her Microsoft
                account first name "Ana."
            </Paragraph>
            <Paragraph>Is this for Ana's machine, or someone else's?</Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:43:19.617902Z"
        >
            <Origin>019e0878-d72c-7236-9db3-d0c3830b5762</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I CAN change her username in netplwiz. Whats the danger of making it ana&gt;</Paragraph>
        </Message>
        <Message
            at="2026-05-08T16:43:49.357820Z"
        >
            <Origin>019e0878-d72c-79b7-8c9c-36d5bc372ee4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Important distinction to confirm first: in netplwiz Properties there are two fields — <Word>
                    <Bold />
                    User name
                </Word> and <Word>
                    <Bold />
                    Full name
                </Word>. Make sure which one you're editing, because the risks are very different:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Full name
                </Word> = display name only. Safe to change to "Ana." This is what shows on the lock screen and Start menu.
                No downside.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    User name
                </Word> = the actual SAM account identifier Windows uses internally. Changing this for a
                Microsoft-account-linked user is where things get risky.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you change User name on a Microsoft-linked account, potential issues:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Link to the Microsoft account may break or behave weirdly.
                    </Word> Windows internally references the account via this identifier for OneDrive sync, Microsoft Store
                    license bindings, app authorizations, and (importantly) <Word>
                        <Bold />
                        BitLocker recovery key escrow
                    </Word>. The mapping can desync.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The profile folder doesn't change.
                    </Word> <Word>
                        <Verbatim />
                        C:\Users\&lt;whatever-it-is-now&gt;
                    </Word> stays as-is. You'd just have a username/folder mismatch.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Login behavior is unchanged.
                    </Word> She'd still sign in with her email — the email is what authenticates against Microsoft's
                    servers. The local username is just a label.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It may silently revert.
                    </Word> Microsoft account sync can overwrite local changes on next handshake. People report this both
                    happening and not happening; it's inconsistent.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Edge cases:
                    </Word> some apps that registered themselves against the old username (rare but it happens — VPN
                    clients, certain license systems) may need re-auth.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest call:
                </Word> if all you want is "Ana" to display on the lock screen and in Start menu, <Word>
                    <Bold />
                    change Full name, not User name.
                </Word> That's what Full name is for, and it's risk-free. User name is the kind of field you change when you
                have a specific reason and accept the chance of something downstream breaking.
            </Paragraph>
            <Paragraph>
                If netplwiz is letting you change User name freely, that's because Windows doesn't gate it — but "Windows
                lets you do it" and "Windows handles it gracefully" aren't the same thing here.
            </Paragraph>
            <Paragraph>
                Want to do Full name only, or do you have a reason you specifically want the internal identifier changed
                too?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T17:38:09.647001Z"
        >
            <Origin>019e08ab-0ac6-7f9e-962a-06f0f560dd2b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Installing things. I have a version of github on my windows that gioves me the fill github UI. I tried to
                install on a new machine and it isn't the same. Very limited. What app do I have and what app did I likeley
                download
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T17:38:34.784811Z"
        >
            <Origin>019e08ab-0ac6-7622-9f88-280de752cfff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Almost certainly:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you have on the working machine:
                </Word> <Word>
                    <Bold />
                    GitHub Desktop
                </Word> — the official full-featured GUI client from GitHub. Repository management, commits, branches, pull
                requests, history, merge tools, the works.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you likely downloaded on the new machine:
                </Word> the <Word>
                    <Bold />
                    "GitHub" app from the Microsoft Store
                </Word> — a much more limited app that's basically a GitHub.com viewer/browser, not a real git client.
                Microsoft Store search for "github" surfaces it prominently and it's easy to grab by mistake.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To confirm what you have on the working machine:
                </Word>
            </Paragraph>
            <Paragraph>
                Settings → <Word>
                    <Bold />
                    Apps
                </Word> → <Word>
                    <Bold />
                    Installed apps
                </Word> → search "github" — you'll see it listed as either "GitHub Desktop" (the good one) or just "GitHub"
                (the limited one).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To get the right one on the new machine:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Uninstall whatever you grabbed: Settings → Apps → Installed apps → find it → Uninstall</Line>
                <Line>
                    Download GitHub Desktop directly: <Word>
                        <Bold />
                         0 
                    </Word>
                </Line>
                <Line>Install, sign in with your GitHub account, and it'll pick up your repos</Line>
            </Paragraph>
            <Paragraph>
                Don't go through the Microsoft Store for this — go to the official site to be sure you get the real one. The
                installer is small and self-contained.
            </Paragraph>
            <Paragraph>
                Note: GitHub Desktop and the SSH setup you did earlier are independent. If you cloned via SSH (<Word>
                    <Verbatim />
                    git@github.com:...
                </Word>), Desktop will use those keys automatically. If you sign in via the Desktop app's GitHub login, it
                can also handle auth via HTTPS+OAuth — either works.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T17:41:17.526036Z"
        >
            <Origin>019e08ad-e8a7-7d80-8f09-07ffa20c251c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Oh but they both seem good. One is like the website on your desktop, the other is more of a local experience
                right? Or is the windows store one silly because it doesn't do anything the web doesn't?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T17:41:39.977374Z"
        >
            <Origin>019e08ad-e8a7-7918-9cde-1feeffb0ffde</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You've got it exactly right.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Microsoft Store "GitHub" app
                </Word> = essentially github.com wrapped as a desktop app. It gives you:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A taskbar/Start menu icon instead of a browser tab</Line>
                <Line>Native Windows notifications for issues/PRs/mentions</Line>
                <Line>Slightly tighter OS integration</Line>
            </Paragraph>
            <Paragraph>
                But it's a viewer/browser. It doesn't do any local git operations — no commits, no branches, no working with
                files on disk.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    GitHub Desktop
                </Word> = actual local git client. Works with repos on your filesystem. Stages files, commits, pushes/pulls,
                manages branches, resolves merge conflicts. The "website" parts of it (PRs, issues) link out to github.com —
                it's not trying to replace the browser, it's trying to replace the command line for everyday git work.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Is the Store one silly?
                </Word> Mostly, yeah. You can get 95% of what it offers for free by pinning github.com as a PWA from
                Chrome/Edge (in Edge: <Word>
                    <Verbatim />
                    ...
                </Word> menu → Apps → Install this site as an app; in Chrome: <Word>
                    <Verbatim />
                    ⋮
                </Word> → Cast/save/share → Install page as app). You get the same dedicated-window feel and OS
                notifications without installing anything from the Store.
            </Paragraph>
            <Paragraph>
                The one place Store install has a marginal edge is <Word>
                    <Bold />
                    system-level notification integration
                </Word> — it's slightly more reliable than browser notifications and shows up in Windows' notification
                center natively. If you live in GitHub notifications and want them treated as "real" Windows notifications,
                it's not zero-value. Otherwise, redundant.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For your actual workflow:
                </Word> you almost certainly want GitHub Desktop. Browsing GitHub itself is fine in any browser — that's not
                where the real friction is. The friction is local git operations, and that's what Desktop solves.
            </Paragraph>
        </Message>
    </Chapter>
);
