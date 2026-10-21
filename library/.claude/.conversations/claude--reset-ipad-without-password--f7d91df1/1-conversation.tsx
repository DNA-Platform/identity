import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[20 May 2026](2026-05-20)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-20T12:46:49.880922Z"
        >
            <Origin>019e456c-a352-7c03-8067-8962c823e8c0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is there a way to reset an iPad without the password?</Paragraph>
        </Message>
        <Message
            at="2026-05-20T12:47:10.381753Z"
        >
            <Origin>019e456c-a352-78a8-a1a3-b591171c1a23</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “reset iPad without password 2026”</Action>
            <Paragraph>Yes, a few official Apple methods work:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Erase from the lock screen (easiest, no computer)
                </Word> — On iPadOS 15.2+, after entering the wrong passcode 7+ times, you'll see "Erase iPad" in the bottom
                corner. Tap it, sign in with the Apple ID that's on the device, and it wipes itself. Requires internet and
                knowing the Apple ID password.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Recovery mode via computer
                </Word> — Connect to a Mac or PC with the cable, put the iPad in recovery mode (Face ID iPad: quick press
                Volume Up, quick press Volume Down, hold the Top button until the recovery screen appears; Home-button iPad:
                hold Home + Top together). Finder/iTunes will offer "Restore." This erases everything.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. iCloud.com/find
                </Word> — From any browser, sign in with the Apple ID linked to the iPad, pick the device, choose "Erase
                This Device."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Important catch — Activation Lock:
                </Word> All three methods wipe the iPad, but if "Find My" was on, setup will demand the original Apple ID
                and password before the iPad is usable again. There's no Apple-supported way around this; it's the
                anti-theft system. Third-party "bypass" tools advertise around this but most don't work reliably on modern
                iPadOS, and some are scams.
            </Paragraph>
            <Paragraph>
                If you don't have the Apple ID for it, the only legitimate path is an Apple Store visit with proof of
                purchase.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T12:51:31.583569Z"
        >
            <Origin>019e4570-f1e7-7af0-839b-a5e31c1a47f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>The ipad says this. Is that number of attempts?</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-20T12:51:41.530094Z"
        >
            <Origin>019e4570-f1e9-7ec9-8770-0a1cd12db73f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No — that's a 5-minute lockout timer, not an attempt count. The screen says "iPad Unavailable — try again in
                5 minutes."
            </Paragraph>
            <Paragraph>
                This happens after several wrong passcode entries. The lockout escalates with each additional failed
                attempt:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>5 failed → 1 minute</Line>
                <Line>7 failed → 5 minutes (you're here)</Line>
                <Line>8 failed → 15 minutes</Line>
                <Line>9 failed → 60 minutes</Line>
                <Line>10 failed → "Erase iPad" option appears in the corner (if signed into Apple ID + internet)</Line>
            </Paragraph>
            <Paragraph>
                So if you keep trying and failing, eventually you'll get the built-in erase option on the lock screen itself
                — no computer needed. But again, after wiping, Activation Lock will ask for the Apple ID that was signed
                into this iPad.
            </Paragraph>
            <Paragraph>Whose iPad is this and do you know the Apple ID on it?</Paragraph>
        </Message>
        <Message
            at="2026-05-20T12:52:31.189257Z"
        >
            <Origin>019e4571-dac8-71ad-b071-c50ce2e591f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Crap its in airplane mode</Paragraph>
        </Message>
        <Message
            at="2026-05-20T12:52:43.039062Z"
        >
            <Origin>019e4571-dac9-721b-9f9a-03af78ef838e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — the on-screen "Erase iPad" option needs internet, so airplane mode kills that route. You can't
                toggle airplane mode off from the lock screen on a locked iPad either (Control Center is disabled on the
                lock screen by default, and even if it weren't, it'd require the passcode after this many failures).
            </Paragraph>
            <Paragraph>
                Your remaining path is <Word>
                    <Bold />
                    recovery mode with a computer
                </Word>:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Power the iPad fully off.</Line>
                <Line>Plug it into a Mac (Finder) or PC (Apple Devices app / iTunes) with a cable.</Line>
                <Line>Force it into recovery mode:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Bold />
                            Face ID iPad
                        </Word>: quick press Volume Up → quick press Volume Down → hold the Top button until you see the
                        recovery screen (cable + computer icon), <Word>
                            <Emphasis />
                            not
                        </Word> the Apple logo.
                    </Line>
                    <Line>
                        <Word>
                            <Bold />
                            Home button iPad
                        </Word>: hold Home + Top together until the recovery screen appears.
                    </Line>
                </Paragraph>
                <Line>The computer will pop up a dialog with "Restore" — click it. Takes ~15 min.</Line>
            </Paragraph>
            <Paragraph>
                Recovery mode bypasses airplane mode because it boots into a low-level state that talks to the computer over
                USB, not over Wi-Fi/cellular.
            </Paragraph>
            <Paragraph>
                After the restore, the iPad will boot to setup. <Word>
                    <Bold />
                    That's where Activation Lock kicks in
                </Word> — it'll need internet then (Wi-Fi during setup) and the Apple ID that was on it. Do you have that
                Apple ID?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T12:54:03.494296Z"
        >
            <Origin>019e4573-431a-7294-8734-45a40389a2ae</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What do I need to install on my computer to do this?</Paragraph>
        </Message>
        <Message
            at="2026-05-20T12:54:08.796948Z"
        >
            <Origin>019e4573-431a-7f76-ba21-334ac03e0e3d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-20T12:54:18.840684Z"
        >
            <Origin>019e4573-7d5e-7674-b21f-caa920e0f7c1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I do have access to the account password</Paragraph>
        </Message>
        <Message
            at="2026-05-20T12:54:28.882500Z"
        >
            <Origin>019e4573-7d5f-78dd-8804-eb33c7fe2b54</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good — that solves the Activation Lock problem after the wipe.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On Windows
                </Word> (which you're on): install the <Word>
                    <Bold />
                    Apple Devices
                </Word> app from the Microsoft Store. It's Apple's official replacement for iTunes on Windows 11. Free, from
                Apple. Once installed, plug the iPad in (already in recovery mode) and it'll detect the device and offer
                Restore.
            </Paragraph>
            <Paragraph>
                If you're on an older Windows version that doesn't have the Microsoft Store route, the legacy iTunes for
                Windows installer from apple.com/itunes/download also works.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On Mac
                </Word>: nothing to install — Finder handles it natively on macOS Catalina and later.
            </Paragraph>
            <Paragraph>
                One tip: use a known-good cable. Recovery mode restores fail in confusing ways with flaky cables, and you
                don't want to be debugging that mid-process.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T13:01:14.812672Z"
        >
            <Origin>019e4579-d770-7b0a-b02c-b49d35881b5a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I plug the device into my computer with apple devices on. It says connect a device. Nothing happened when I
                connected the device.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T13:01:31.564212Z"
        >
            <Origin>019e4579-d770-78eb-9ace-f51bf781e73e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Most likely the iPad isn't in recovery mode yet — just being plugged in and locked isn't enough. You need
                the special recovery state (the screen shows a cable pointing up at a computer icon).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To force recovery mode:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Face ID iPad (no Home button):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Keep the cable plugged into the computer (but you can unplug from the iPad for now).</Line>
                <Line>
                    Press and quickly release <Word>
                        <Bold />
                        Volume Up
                    </Word>.
                </Line>
                <Line>
                    Press and quickly release <Word>
                        <Bold />
                        Volume Down
                    </Word>.
                </Line>
                <Line>
                    Press and hold the <Word>
                        <Bold />
                        Top (power) button
                    </Word>. Keep holding.
                </Line>
                <Line>While still holding, plug the cable into the iPad.</Line>
                <Line>
                    Don't let go when you see the Apple logo — keep holding until you see the <Word>
                        <Bold />
                        recovery mode screen
                    </Word> (cable + laptop icon). Then release.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Home-button iPad:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Power off fully.</Line>
                <Line>
                    Hold the <Word>
                        <Bold />
                        Home button
                    </Word> while plugging the cable into the iPad.
                </Line>
                <Line>Keep holding Home past the Apple logo until the recovery screen appears.</Line>
            </Paragraph>
            <Paragraph>
                Once you see the recovery screen on the iPad, Apple Devices should immediately pop up a dialog offering to
                Update or Restore. <Word>
                    <Bold />
                    Pick Restore.
                </Word>
            </Paragraph>
            <Paragraph>If still nothing after you're definitely in recovery mode:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Try a different USB cable (many USB-C cables are charge-only — use the one that came with the iPad or a
                    known data cable).
                </Line>
                <Line>Try a different USB port (avoid hubs, plug directly into the computer).</Line>
            </Paragraph>
            <Paragraph>Which iPad is it — does it have a Home button?</Paragraph>
        </Message>
        <Message
            at="2026-05-20T13:03:54.519304Z"
        >
            <Origin>019e457c-4674-726e-9b82-996cfc810e7f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay its being restored. Good job. Thank you</Paragraph>
        </Message>
        <Message
            at="2026-05-20T13:03:57.479080Z"
        >
            <Origin>019e457c-4675-7298-bdbb-f36c7ae2476c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Nice — glad it's going. Restore takes ~15 minutes; don't unplug. After it reboots into setup, you'll hit the
                Activation Lock screen where the Apple ID password gets you through. 🎉
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T13:59:41.202592Z"
        >
            <Origin>019e45af-58ae-7894-a22b-b41baf603e0a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I got this</Paragraph>
            <Attachment>Uploaded “IMG_3259.JPG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-20T14:00:07.148444Z"
        >
            <Origin>019e45af-58b2-73a2-9de5-48a871f78df9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “iTunes error 1109 iPad restore”</Action>
            <Paragraph>
                Error 1109 is a network communication error — your PC couldn't maintain the connection to Apple's update
                servers during the restore. The iPad isn't bricked; it should still be in recovery mode and ready to retry.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    First, easy things to check on the PC:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Any VPN running?
                    </Word> Disable Proton VPN if it's on — VPN traffic frequently breaks Apple's restore handshake.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Windows Defender / antivirus
                    </Word> — temporarily disable real-time protection for the restore.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Apple Devices app version
                    </Word> — open Microsoft Store, check for updates.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Use a wired/stable connection
                    </Word> if possible; the firmware is ~6 GB and any blip kills it.
                </Line>
            </Paragraph>
            <Paragraph>
                Then click OK, leave the iPad plugged in (still in recovery mode), and the Apple Devices app should
                re-detect it. Try Restore again.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If it fails again, the more reliable workaround is offline restore:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Download the IPSW firmware file directly for your exact iPad model from <Word>
                        <Bold />
                        ipsw.me
                    </Word> (links go to Apple's CDN, not third-party files).
                </Line>
                <Line>
                    In Apple Devices, hold <Word>
                        <Bold />
                        Shift
                    </Word> and click the <Word>
                        <Bold />
                        Restore
                    </Word> button.
                </Line>
                <Line>Browse to the .ipsw file you downloaded.</Line>
            </Paragraph>
            <Paragraph>
                This skips Apple's live download and just flashes the firmware locally. Bypasses most network-related 1109
                failures.
            </Paragraph>
            <Paragraph>
                Which iPad model is it? I can point you to the exact firmware if it comes to that. (Settings → General →
                About won't work obviously, but the model number is engraved on the back, starts with "A" — e.g. A2197.)
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:02:44.333750Z"
        >
            <Origin>019e45b2-2466-7d66-a30c-8f32d4e331ab</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I plugged it back in but it isn’t found. Its in the middle of restore</Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:02:53.549599Z"
        >
            <Origin>019e45b2-2468-7853-b9fb-b6fd20f9689d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It dropped out of recovery mode. You need to force it back in. The iPad won't be detected for restore unless
                it's in recovery (or DFU) mode — a mid-restore limbo state isn't recognized.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Force recovery mode again:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Face ID iPad (no Home button):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Keep cable plugged into the computer.</Line>
                <Line>
                    Press and quickly release <Word>
                        <Bold />
                        Volume Up
                    </Word>.
                </Line>
                <Line>
                    Press and quickly release <Word>
                        <Bold />
                        Volume Down
                    </Word>.
                </Line>
                <Line>
                    Press and hold the <Word>
                        <Bold />
                        Top button
                    </Word> — keep holding even when the Apple logo appears.
                </Line>
                <Line>
                    Release only when you see the <Word>
                        <Bold />
                        recovery mode screen
                    </Word> (cable + computer icon).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Home-button iPad:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Hold <Word>
                        <Bold />
                        Home + Top button
                    </Word> together.
                </Line>
                <Line>Keep holding past the Apple logo until the recovery screen appears.</Line>
            </Paragraph>
            <Paragraph>Once the recovery screen shows, Apple Devices should re-detect it and re-offer Restore.</Paragraph>
            <Paragraph>
                Before clicking Restore again — kill any VPN, pause antivirus. The 1109 means last attempt got interrupted
                mid-download; you want a clean network this time.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:16:20.217710Z"
        >
            <Origin>019e45be-95cd-73e6-ab86-26045d2400f5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I keep getting this error. I wasn’t using the computer. Nothing changed</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-20T14:16:35.861999Z"
        >
            <Origin>019e45be-95ce-7d8e-a817-fefd76c41650</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                1109 means the firmware download keeps getting interrupted partway. In Tbilisi, Apple's CDN routing is often
                the problem — not your computer. The fix is to skip Apple's live download and use an offline IPSW.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Offline restore workflow:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Find your iPad's model number — engraved on the back, starts with "A" (e.g. A2197, A2588).</Line>
                <Line>
                    Go to <Word>
                        <Bold />
                        ipsw.me
                    </Word> in your browser, pick iPad → your model.
                </Line>
                <Line>
                    Download the latest <Word>
                        <Bold />
                        signed
                    </Word> IPSW (green checkmark). ~6 GB file. Use Proton VPN if the direct download from Apple's CDN is
                    slow/failing — sometimes a US East Coast exit gets a cleaner route to Apple's servers.
                </Line>
                <Line>
                    Once the file is fully downloaded, force the iPad back into recovery mode (it dropped out again — same
                    Volume Up / Volume Down / hold Top button steps as before).
                </Line>
                <Line>
                    In Apple Devices, hold <Word>
                        <Bold />
                        Shift
                    </Word> and click <Word>
                        <Bold />
                        Restore iPad
                    </Word> (not the regular Restore — Shift gives you a file picker).
                </Line>
                <Line>Select the .ipsw file.</Line>
            </Paragraph>
            <Paragraph>
                This bypasses the streaming download entirely. The whole restore runs from your local file, so a network
                hiccup mid-restore can't kill it.
            </Paragraph>
            <Paragraph>What's the model number on the back of the iPad?</Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:52:13.140397Z"
        >
            <Origin>019e45df-714d-7ae8-9e85-48c091dac719</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay got to the end but the device says that without tge passcode, I can’t set it up. Now tge account is a
                child account on my device. I have access to the email that is the apple id. I started a password reset
                which apparently takes days. Other options?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:52:44.504565Z"
        >
            <Origin>019e45df-714f-798e-a6c8-49cfad382f21</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “family organizer reset child Apple ID password”</Action>
            <Paragraph>
                Yes — much faster option. As the Family Sharing organizer, you can reset a child account's password directly
                from your own iPhone, instantly. No "days-long" recovery needed. That slow process is the fallback for
                non-family accounts.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On your iPhone:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Settings → tap your name at the top → <Word>
                        <Bold />
                        Family
                    </Word>.
                </Line>
                <Line>Tap the child's name.</Line>
                <Line>
                    Look for <Word>
                        <Bold />
                        Apple Account &amp; Password
                    </Word> (or "Apple ID Password" — wording shifts by iOS version). Tap it.
                </Line>
                <Line>
                    It'll ask you to authenticate with your iPhone passcode (the organizer's device PIN, not your Apple ID
                    password).
                </Line>
                <Line>Set a new password for the child account.</Line>
            </Paragraph>
            <Paragraph>Requires 2FA on your own Apple ID, which you have.</Paragraph>
            <Paragraph>
                Then on the iPad's Activation Lock screen, enter the child's Apple ID email + the new password you just set.
            </Paragraph>
            <Paragraph>
                One thing worth doing: <Word>
                    <Bold />
                    cancel the account recovery you started
                </Word>. Go to iforgot.apple.com, sign in, and cancel the pending recovery — an active recovery request can
                sometimes interfere with the organizer-side reset. If you can't find a cancel option, just proceed with the
                organizer reset above; it usually takes precedence.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:00:10.932812Z"
        >
            <Origin>019e45e6-bbef-71f1-b817-5e890e2ae4ca</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I alnost got in but it keeps asking me for the passcode</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:00:33.295417Z"
        >
            <Origin>019e45e6-bbef-71f9-8a69-5f092e4d437e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                What does the prompt say exactly? "The passcode" is ambiguous and the right move depends on which one it's
                asking for:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        "Enter the passcode used to unlock another of your devices"
                    </Word> → it wants the <Word>
                        <Emphasis />
                        device passcode
                    </Word> (PIN) of another iPhone/iPad signed into the same child Apple ID. Likely your iPhone's passcode,
                    since you're the parent and your phone is probably a trusted device for the child account's 2FA.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Enter the previous passcode for this iPad"
                    </Word> → it wants the <Word>
                        <Emphasis />
                        old forgotten passcode
                    </Word> of the iPad itself. This one's a problem.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Screen Time passcode"
                    </Word> → 4-digit Screen Time PIN you (or Ana) set when configuring parental controls.
                </Line>
            </Paragraph>
            <Paragraph>Snap a photo of the screen if easier — exact wording determines the fix.</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:02:05.722101Z"
        >
            <Origin>019e45e8-7b3b-7c0f-9146-fe3bba06f2b8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I said I didn’t know it. It said I can’t access icloud. I’m restoring from backup. Once I’m in, I assume I
                can factory reset it right?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:02:34.163018Z"
        >
            <Origin>019e45e8-7b3c-78c1-ab38-d4faf700f4d6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, once you're in you can factory reset it from Settings → General → Transfer or Reset iPad → Erase All
                Content and Settings.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Critical thing to watch:
                </Word> since you couldn't complete the 2FA verification, the child Apple ID probably <Word>
                    <Emphasis />
                    isn't
                </Word> signed into iCloud on this iPad right now — which is actually good. It means Find My / Activation
                Lock isn't currently armed on this device. The reset will go cleanly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    After the reset, do NOT sign back into the child Apple ID.
                </Word> If you do, Find My re-arms and you'll be right back in Activation Lock hell next time. Either:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Set up as new device with no Apple ID at all, or</Line>
                <Line>
                    Sign in with a different Apple ID you fully control (your own, or create a fresh one for Katya).
                </Line>
            </Paragraph>
            <Paragraph>
                If Settings shows the child Apple ID is somehow still partially signed in, sign out of iCloud first <Word>
                    <Emphasis />
                    before
                </Word> doing the reset — otherwise the reset will demand the Apple ID password again.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:04:37.380463Z"
        >
            <Origin>019e45ea-cc10-702a-9f13-76ab6c3caef5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It won’t ask me for a passcode again?</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:04:50.193485Z"
        >
            <Origin>019e45ea-cc10-70a9-a719-28316faf3d4b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two different "passcodes" to keep straight:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Activation Lock (Apple ID password at setup)
                </Word> — won't ask again <Word>
                    <Emphasis />
                    if
                </Word> no Apple ID is signed into iCloud on the device right now. Check before resetting: Settings → top of
                the list. If you see a name/Apple ID there, tap it → scroll down → <Word>
                    <Bold />
                    Sign Out
                </Word>. Then reset. If the top of Settings just says "Sign in to your iPad," you're clear — reset will go
                straight through.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Device passcode (lock screen PIN)
                </Word> — this is the one you originally forgot that started this whole thing. After the reset, setup will
                offer to create a new lock screen passcode. You can skip it entirely (Passcode Options → Don't Use Passcode)
                or set one you'll actually remember. That's on you, not Apple.
            </Paragraph>
            <Paragraph>
                So: sign out of any Apple ID first → reset → skip or set a memorable PIN → don't sign back into the child
                account.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:05:37.586564Z"
        >
            <Origin>019e45eb-b6d8-7082-900b-29dcf6f9083f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nope still takes me to a screen with passcode…</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:05:58.509937Z"
        >
            <Origin>019e45eb-b6d9-7c12-b8fd-57778f08f426</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Read me the exact wording on the screen — every word matters here. Is it:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        "iPad Locked to Owner"
                    </Word> with an Apple ID hint (e.g., <Word>
                        <Verbatim />
                        k•••@icloud.com
                    </Word>)? → Activation Lock again. Enter the child Apple ID + the new password you set.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Enter the passcode used to unlock another of your devices"
                    </Word> (or similar)? → This is the 2FA wall again. Try <Word>
                        <Bold />
                        your own iPhone's lock screen passcode
                    </Word> — for child accounts, the family organizer's devices are typically trusted, so it's <Word>
                        <Emphasis />
                        your
                    </Word> iPhone PIN it wants, not the iPad's old one. This is probably what tripped you up before.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Setup Assistant asking for a passcode to create a new one
                    </Word>? → Just skip via Passcode Options → Don't Use Passcode.
                </Line>
            </Paragraph>
            <Paragraph>Which screen is it, or what's the exact text?</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:15:16.219309Z"
        >
            <Origin>019e45f4-8c1f-79be-87c4-7e38f37169f0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I don’t know. I am resetting again. This should be easier for me as the parent</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:15:39.011452Z"
        >
            <Origin>019e45f4-8c1f-7c65-b930-27f063626238</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, it should be. Apple's flow for family organizers managing child accounts is genuinely badly
                designed — you're not missing something obvious.
            </Paragraph>
            <Paragraph>
                When you hit the passcode screen this time, <Word>
                    <Bold />
                    before tapping anything
                </Word>, snap a photo and send it. The exact wording determines whether to enter your iPhone's PIN, the
                child Apple ID password, or skip. We'll figure it out from the screen rather than guessing.
            </Paragraph>
            <Paragraph>
                The most likely answer: it's the 2FA "another device" prompt, and it wants <Word>
                    <Bold />
                    your own iPhone's unlock PIN
                </Word> (because your iPhone is the trusted device for the child's 2FA). You probably just hadn't tried
                that.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:31:50.025510Z"
        >
            <Origin>019e4603-b5be-7542-809f-13c8ae2ed388</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right now I’m here. The device was restored, and is in that state. Apple devices shows this. Not sure what I
                am in store for when the device turns on
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-20T15:32:26.466694Z"
        >
            <Origin>019e4603-b5bf-7d01-b761-979b3bb9b5e4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good — clean restore, no backup will be restored (Last backup: Never), so it's coming up as a fresh iPad.
                What you'll see when it finishes booting:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Hello / language / country / WiFi
                    </Word> — straightforward.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Quick Start
                    </Word> — skip ("Set Up Manually").
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Activate iPad / "Locked to Owner"
                    </Word> — <Word>
                        <Emphasis />
                        this is the wall
                    </Word>. It'll show a hint of the child Apple ID (e.g., <Word>
                        <Verbatim />
                        k•••@icloud.com
                    </Word>). Enter the child Apple ID + the new password you set as organizer.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        2FA verification
                    </Word> — iOS will likely send a "Sign In Requested" notification to <Word>
                        <Bold />
                        your iPhone
                    </Word>. Approve it. Then iOS will ask for a passcode.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    This is the moment where you got stuck before.
                </Word> When that passcode field appears, enter <Word>
                    <Bold />
                    your iPhone's lock screen PIN
                </Word> — the 6-digit (or 4-digit) code you use to unlock your own iPhone every day. Not the iPad's
                anything. Not the Apple ID password. Your iPhone's unlock PIN.
            </Paragraph>
            <Paragraph>
                That's because your iPhone is the trusted device for the child account's 2FA, and iOS verifies trust by
                asking for the trusted device's passcode.
            </Paragraph>
            <Paragraph>
                If that works, you're through. The rest of setup is just preferences — you can skip Face ID, skip creating a
                new iPad passcode, decline analytics, etc.
            </Paragraph>
            <Paragraph>
                If it fails or never sends to your iPhone, take a photo of whatever screen you're on and we'll pivot from
                there.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:34:47.997377Z"
        >
            <Origin>019e4606-6d5c-7baa-a090-f901a80c69b6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay it was my phone pin when I did start from another device (my phone) but then it said the device was
                partially set up for some readon and I elected to have it start over, so its doing that. But it looks like I
                can set up from my phone
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:34:55.780852Z"
        >
            <Origin>019e4606-6d5d-74f5-85e9-e4f5b2d22f58</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Excellent — you found the right path. Quick Start from your iPhone is the cleanest route: it ports your
                Apple ID, WiFi, and 2FA trust over directly via the proximity handshake, no manual entry needed.
            </Paragraph>
            <Paragraph>
                The "partially set up" warning is fine — it just means the earlier attempt left state on the iPad. Starting
                over is the right call; you want a clean Setup Assistant run.
            </Paragraph>
            <Paragraph>
                When Quick Start completes, the iPad will be signed into <Word>
                    <Bold />
                    your
                </Word> Apple ID, not the child's. That's actually what you want: no more child-account Activation Lock
                entanglement going forward. You can then either keep using it under your account or, once you're past the
                Activation Lock barrier and into a working iPad, sign out and set it up fresh for Katya with a properly
                configured child account where you have the password written down.
            </Paragraph>
            <Paragraph>Let me know how it lands.</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:36:06.047177Z"
        >
            <Origin>019e4607-9cbe-7fcc-8551-cf6b195085da</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is that activation lock? Did Katie enable that? I saw that she changed passwords everywhere geez
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:36:24.348568Z"
        >
            <Origin>019e4607-9cbe-7c98-a0e2-868a54447180</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Activation Lock is Apple's anti-theft system. It's automatically armed the moment "Find My" is turned on —
                and Find My is on by default when you sign into iCloud. Nobody has to explicitly enable it. It ties the
                device's serial number to that Apple ID on Apple's servers, so after any wipe the iPad demands that Apple
                ID's password before it can be used again. Designed to make stolen iPads worthless.
            </Paragraph>
            <Paragraph>
                So Katya didn't have to "enable" anything — just signing into iCloud on the iPad set it up automatically.
            </Paragraph>
            <Paragraph>
                What she <Word>
                    <Emphasis />
                    did
                </Word> do that mattered: she changed the Apple ID password and didn't share the new one. That's what turned
                a normal "forgot the passcode, just reset it" situation into the multi-hour ordeal you just went through. If
                you'd had the current Apple ID password, the very first attempt (recovery mode restore → enter Apple ID at
                setup) would have taken 20 minutes.
            </Paragraph>
            <Paragraph>
                Going forward, since you're the family organizer and she's on a child account, you can reset her Apple ID
                password from your iPhone at any time (Settings → your name → Family → her name). She can change it, but you
                always have the override. Worth knowing.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:37:39.511142Z"
        >
            <Origin>019e4609-0b15-75bc-8959-419aa4aea969</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I was able to change her password easily. But there’s no reset passcode seemingly</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:38:03.534171Z"
        >
            <Origin>019e4609-0b15-7dbc-b2bf-412d7e1b1fc2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right — there isn't one. This is a real gap in Apple's parental controls.</Paragraph>
            <Paragraph>
                The device passcode (lock screen PIN) is intentionally not resettable remotely, even by Apple themselves.
                It's the encryption key for everything stored locally on the device, baked into the secure enclave hardware.
                The only way to "reset" it is to wipe the device — which is exactly what you just spent the day doing. No
                surgical override exists from the parent side.
            </Paragraph>
            <Paragraph>
                Apple does this on purpose. If the parent could remotely change the PIN, so could anyone who compromised the
                parent's Apple ID, and the whole device encryption model breaks. So they don't expose that lever at all.
            </Paragraph>
            <Paragraph>Practical options going forward:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Set the passcode yourself
                    </Word> during initial setup and share it with her, or pick something together you both know.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Disable changing the passcode
                    </Word> via Screen Time → Content &amp; Privacy Restrictions → Passcode Changes → Don't Allow. You'll
                    need a Screen Time passcode (separate from the device PIN) that <Word>
                        <Emphasis />
                        you
                    </Word> set and she doesn't know. That blocks her from changing the device PIN later without your Screen
                    Time PIN.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Don't use a passcode at all
                    </Word> if the threat model is just "forgetful kid" rather than "device theft." Less secure but no
                    lockout risk.
                </Line>
            </Paragraph>
            <Paragraph>
                The Screen Time passcode lock on Passcode Changes is the actual answer to "how do I prevent this from
                happening again."
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:41:45.859714Z"
        >
            <Origin>019e460c-cd1d-7ea2-92b6-b2db65856897</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay I setup face id and set my pin code. Restoreinf from icloude. Seems good</Paragraph>
        </Message>
        <Message
            at="2026-05-20T15:41:50.036129Z"
        >
            <Origin>019e460c-cd1e-7719-a10a-c32d715b295d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Nice — sounds like you're through the worst of it. iCloud restore can take a while (hours sometimes,
                depending on how much was in there); the iPad will keep downloading apps and photos in the background after
                the initial setup completes, so don't be alarmed if it looks "done" but things are still trickling in.
            </Paragraph>
            <Paragraph>Glad we got there. 🎉</Paragraph>
        </Message>
    </Chapter>
);
