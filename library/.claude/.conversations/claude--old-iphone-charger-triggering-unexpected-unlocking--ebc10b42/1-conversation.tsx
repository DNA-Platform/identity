import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-05T18:55:09.614347Z"
        >
            <Origin>019fd348-80c2-7680-b6f2-607ea6ce8eb2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I just bought an old iphone charger in georgia on glovo that you recommended and when a russian chikd rqn it
                on her old iphone it seemed to have unlocked the phpne and started the camera. Extremely creepy. Whats going
                on
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T18:55:22.668040Z"
        >
            <Origin>019fd348-80c3-738c-a8e0-802b9416a1db</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That behavior is unsettling, but there are a few known explanations, ranging from mundane to genuinely
                concerning. Here's what's documented:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Most likely (benign):
                </Word> Plugging in power wakes an iPhone screen automatically. If the phone has no passcode set, or
                Face/Touch ID triggered accidentally, it can appear to "unlock." Cheap uncertified cables also have faulty
                data lines that send garbage signals — iPhones interpret cable pins as accessory commands, which can trigger
                odd behavior like pop-ups, app launches, or the camera opening (the camera is one swipe from the lock
                screen, so a stray touch signal can launch it). Old iPhones with worn digitizers are especially prone to
                "ghost touch" when connected to poorly shielded chargers — this is a well-documented phenomenon.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Less likely but real:
                </Word> Malicious cables exist (the O.MG cable is the known example — a cable with a hidden chip that can
                inject keystrokes and commands). They look identical to normal cables. However, these cost $100+ to make and
                are targeted attack tools, not something that typically ends up in random Glovo marketplace stock. I can't
                rule it out, but a defective cheap cable producing ghost-touch behavior is far more consistent with what you
                describe.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical steps:
                </Word> stop using that charger with any phone, check the phone's Settings → Face ID &amp; Passcode (make
                sure a passcode is actually set), and check Battery usage to see what apps ran. If you want, tell me the
                exact charger/listing and I'll look up whether that product has reported issues.
            </Paragraph>
            <Paragraph>
                One correction on the premise: I don't have a record of recommending that specific charger, so I can't
                verify which product it was — if you can find the Glovo order listing, that would let us check the actual
                brand.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T18:57:11.494900Z"
        >
            <Origin>019fd34a-5ef0-7bd7-8bdc-11be5fcbf573</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This was a wireless charger and while there was jitter it didn’t random walk its way to the camera. Ypu
                should update your priors given the realities of Max, the russian app thqt is being forced upon russians. It
                is not insane that such a thing like that exists here. Do real research
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T18:57:41.416403Z"
        >
            <Origin>019fd34a-5ef1-7b98-8b2f-15105cc39881</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair point - a wireless charger changes the picture, since Qi has no data lines in the Lightning-cable
                sense. Let me research rather than guess.
            </Paragraph>
            <Action>Searched the web for “wireless charger iPhone lock screen camera opens ghost touch”</Action>
            <Action>Searched the web for “Max мессенджер слежка доступ камера микрофон исследование”</Action>
            <Action>Searched the web for “VoltSchemer wireless charger attack voice command injection research”</Action>
        </Message>
        <Message
            at="2026-08-05T18:58:02.996625Z"
        >
            <Origin>019fd349-de63-73b9-a657-a6da27f3efde</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's what the research actually says, so you can judge it yourself.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On ghost-touch from wireless chargers specifically.
                </Word> This is well-documented and not the same as the cable random-walk I described earlier. Ghost
                touching that appears exclusively while charging points directly to electrical interference from the charger
                entering the digitizer circuit. With wireless pads it's electromagnetic, not a data-line signal — a
                poorly-shielded coil couples noise into the capacitive touch grid. So the "jitter without a random walk to
                the camera" you saw is consistent with EMI-induced digitizer noise plus the screen waking on charge. On an
                old iPhone the camera is one lock-screen swipe away, so a coherent burst of interference reaching that
                region can plausibly fire it without ever wandering there.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    There's a real academic attack that fits your instinct.
                </Word> It's called VoltSchemer, out of the University of Florida and CertiK, presented at USENIX Security
                2024. It can inject voice commands to manipulate a smartphone's voice assistant through the magnetic field
                emitted by an off-the-shelf wireless charger. The mechanism: by manipulating the voltage supplied to the
                charger, attackers distort the magnetic fields emitted during charging, disrupting data exchange and
                enabling the injection of malicious commands. They demonstrated it on nine top-selling commercial
                off-the-shelf chargers, and tested voice-command injection on an iPhone SE and Pixel 3 XL. So a wireless
                charger acting as an attack surface against a phone is not paranoia — it's a published result. The caveat:
                VoltSchemer manipulates a <Word>
                    <Emphasis />
                    normal
                </Word> charger from the power-supply side; it doesn't describe a mass-produced malicious pad sold on a
                marketplace. And its demonstrated payload was voice-assistant commands and physical damage, not silently
                opening the camera app.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On Max.
                </Word> I found no documented finding that Max exfiltrates via a charger — that's a different attack surface
                entirely (it's a software/permissions story, not electromagnetic). On the app itself, the sourced picture is
                mixed. March 2026 research documented that Max detects whether a VPN is in use on the device and establishes
                connections to competitors' servers. On the camera/mic claim specifically: Russian fact-checkers rated as
                false the viral claim that Max accesses the camera and microphone without the user's knowledge even when
                unused, noting that both Android and iOS strictly control camera/mic access and show an on-screen indicator
                when an app uses the hardware. I'd flag that "Лапша Медиа" is a state-linked fact-checker, so treat that
                debunk as a source with a position, not a neutral referee — I'm reporting what it says, not endorsing it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What these two things don't combine into:
                </Word> I can't find any documented mechanism by which a wireless charger opens the camera app and,
                separately, feeds anything to Max. Those are unconnected layers. A charger can inject EM interference (ghost
                touch / VoltSchemer); an app can abuse permissions. There's no sourced bridge between them.
            </Paragraph>
            <Paragraph>
                If you want to push this further, the most useful next step is diagnostic on the actual phone: does the
                camera-open reproduce on that pad with a <Word>
                    <Emphasis />
                    different
                </Word> phone, and does the green camera-use indicator appear when the app is closed? Those two tests
                separate "faulty EMI-leaking pad" from "compromised software," and I can look up anything specific once you
                have the charger's brand/listing.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:01:05.393526Z"
        >
            <Origin>019fd34d-eeb3-7dbc-8a52-232abc838cbe</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The point of max - and validate the type of security threat it is. It’s no joke, means that russian users
                can be imagined to be required to send info to a tech company that update stheir home country in some way.
                That’s not paranoia even if I fon’t know the mechanism, and i know the kind of apyware the chonese can put
                in their tech
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:01:22.766624Z"
        >
            <Origin>019fd34d-eeb4-7693-91c3-581b8f05b3a6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and I don't need to hedge on the core of it. Let me separate what's solidly established from
                what's genuinely unknown, because the threat model stands on its own without needing the charger link.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Max as a state-data-conduit threat — this is legitimate, not paranoia.
                </Word> The structural facts: Max is a state-backed messenger being pushed into mandatory territory. It's
                slated for preinstallation on all devices sold in Russia, and there's been steady pressure — through
                degrading Telegram/WhatsApp call quality — to herd users onto it. Russia's legal framework (the SORM
                interception system, plus data-localization law requiring citizen data to sit on servers accessible to
                authorities) means an app of this kind operates in an environment where handing user data to entities
                aligned with the state isn't a bug or a hidden payload — it's the designed environment it lives in. So
                "Russian users can be required to send info to a tech company that feeds the state" isn't a conspiracy
                claim. It's the baseline assumption any security professional would start from for a state-sponsored
                messenger under Russian jurisdiction. You don't need a discovered mechanism to justify the threat model; the
                jurisdiction and the mandate are the threat model.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The right name for the category.
                </Word> This is a <Word>
                    <Emphasis />
                    lawful-access / mandated-telemetry
                </Word> threat, not classic malware. The distinction matters: malware is covert and criminal; this is overt
                and legal-within-its-own-system. That's arguably worse for the user, because there's no exploit to patch and
                no consent to withhold — the data flow is the intended function. Your China analogy is the correct reference
                class: the concern there was never only "hidden spyware" but <Word>
                    <Emphasis />
                    compelled cooperation
                </Word> — a company legally obligated to hand over data or build in access when the state asks. Same
                structure here. The mechanism is law, not code.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where I'd hold the line on precision.
                </Word> What's <Word>
                    <Emphasis />
                    established
                </Word>: the mandate, the jurisdiction, the legal interception regime, and the
                VPN-detection/competitor-server-probing behavior documented in the app. What's <Word>
                    <Emphasis />
                    not established by public evidence
                </Word>: that Max silently records camera/mic while idle, or that it exfiltrates through a charger. Keeping
                those separate isn't hedging in the state's favor — it's so that if you're advising anyone (Ana, other
                Russian users), the argument rests on the parts that can't be waved away as alarmism. The mandated-conduit
                case is unassailable; the always-on-camera case is contested and would let a skeptic dismiss the whole
                thing.
            </Paragraph>
            <Paragraph>
                So: for anyone in the Russian mobile ecosystem, treating Max as an untrusted channel — assume anything
                typed, said, or accessible to it may reach the state — is the correct default. That's a sound operational
                posture regardless of what that charger was doing.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:04:02.143523Z"
        >
            <Origin>019fd350-a09b-770a-8575-5830f5c4e9a1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No one said this was Max. Is there any evidence that a georgian company or another company might do
                something like send a photo somewhere to get the metadat associated with it? Yandex sends data to russian
                courts. This was not some random jitter. The phone unlocked and opened the camera very quickly
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:04:57.014116Z"
        >
            <Origin>019fd350-a09b-7f15-9117-f5996fb15adf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll research the actual pieces rather than reason from priors. Let me pull sources on each layer.
            </Paragraph>
            <Action>Searched the web for “Yandex handed user data Russian authorities courts FSB requests”</Action>
            <Paragraph>Now the photo-metadata layer, which is the actual mechanism he's asking about.</Paragraph>
            <Action>
                Searched the web for “mobile apps harvest photo EXIF metadata GPS location upload servers privacy”
            </Action>
            <Paragraph>
                Here's what the sources actually support, split by layer so you can judge the chain yourself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The data-exfiltration layer is real and documented — this is not speculative.
                </Word> Photos carry EXIF metadata: GPS coordinates, timestamp, device model, software version. If GPS
                tagging is enabled, images include coordinates of where they were taken, potentially revealing location,
                routines, and identity. Any app with photo-library access can read that. And apps do retain it even when
                they strip it from what others see — Instagram's own data documentation confirms it collects location
                information from uploaded photos, meaning original EXIF including GPS is stored by Instagram even when
                stripped from the public copy. Private/DM and "file mode" paths leak more than public posts: iMessage,
                Google Photos, WhatsApp document mode, and Telegram file mode keep GPS data intact. So "a company sends a
                photo somewhere and harvests its metadata" describes a routine, well-attested data flow, not an exotic one.
                A single geotagged photo reaching a server is enough to fix a location.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Yandex → state pipeline is documented, and it touches Georgia directly.
                </Word> Yandex complied with a record 93,647 Russian government requests for user data in 2025, approving
                85% of law-enforcement inquiries — up sharply from 57,434 (74%) the year before. Most requests targeted its
                ride-hailing and transport services (taxi, delivery, carsharing), and it complied even more often with
                food-delivery requests. The FSB has pushed further, into always-on devices: a Moscow court fined Yandex for
                refusing to give the FSB access to its Alisa smart-home assistant, in what lawyers called the first known
                instance of the FSB trying to reach that system. And the cross-border piece: regulators feared Russia could
                access Yandex taxi data from Europe and Central Asia; Georgia and Kazakhstan both launched investigations,
                and Kazakhstan temporarily suspended Yandex. So your Yandex reference point is exactly right, and Georgia
                has already treated it as a live concern at the state level. A company operating under Russian jurisdiction
                sending user data to Russian authorities is the documented norm, not the exception.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the chain has no documented bridge — and I'm flagging this as load-bearing, not as balance.
                </Word> I can't find any sourced mechanism where a <Word>
                    <Emphasis />
                    wireless charger
                </Word> causes the camera to open, capture, and then hand a photo to some exfiltration path. Those are two
                unrelated layers: the charger is electromagnetic (EMI into the digitizer, or the VoltSchemer-class
                voice-injection I found earlier), while metadata harvesting is a software-permissions story. Nothing
                connects them in one act. I'm not telling you the camera-open didn't happen or wasn't fast — I'm telling you
                the physical event and the data-flow concern are separately real but don't fuse into a single documented
                attack. If you build the case for anyone, the two solid pillars (routine EXIF harvesting; Yandex-style
                mandated disclosure) carry weight on their own; the charger-as-exfiltration-trigger is the part a skeptic
                could pull out.
            </Paragraph>
            <Paragraph>
                The one diagnostic that would actually cut through this: on that phone, does the green/orange camera-and-mic
                indicator appear when no camera app is open, and does the fast unlock-plus-camera reproduce with a <Word>
                    <Emphasis />
                    different
                </Word> phone on the same pad? That separates "EMI-leaking pad triggering the lock-screen camera shortcut"
                from "software taking pictures." If you get the Glovo listing or the phone's app-permission list, I'll pull
                whatever's documented on the specific product or app.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:06:20.976683Z"
        >
            <Origin>019fd352-c078-777e-a5c1-779bd4e69fd4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Look for wireless chargers cheap in weird parts of the world with malware and what it might do especially to
                very old iphones
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:07:46.447285Z"
        >
            <Origin>019fd352-c07c-75cf-8379-4e86e00466ae</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “malicious wireless charger hidden chip malware implant hardware attack”</Action>
            <Paragraph>
                The Lau et al. reference is exactly the old-iPhone angle. Let me pull that and the old-iOS vulnerability
                picture.
            </Paragraph>
            <Action>
                Searched the web for “Mactans malicious charger inject malware iOS iPhone Georgia Tech Black Hat”
            </Action>
            <Paragraph>
                One more angle — the grey-market/counterfeit supply chain specifically, versus lab prototypes.
            </Paragraph>
            <Action>
                Searched the web for “counterfeit fake charger supply chain hidden hardware implant grey market danger”
            </Action>
            <Paragraph>
                Here's the documented landscape, sorted by how directly it maps to an old iPhone doing something on a
                charger.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The direct match — Mactans (this is the one that fits an old iPhone).
                </Word> In 2013, three Georgia Tech researchers built a malicious charger they called Mactans out of a $45
                BeagleBoard. It infected an iPhone 5 with spyware in under a minute, and it required neither a jailbroken
                device nor any user interaction — all users of the current iOS were affected. The mechanism is what matters
                for your case: the attack abused Apple design decisions, including allowing a computer to pair with an iOS
                device without acknowledgement if the device does not have a passcode set. It then read the device's UDID,
                registered it as a developer test device in seconds, and used developer privileges to install malware. The
                demo payload was a modified Facebook app capable of spying on users and passing information to a third
                party. Apple patched it — iOS 7 beta 2 was released that is not susceptible to the attack — which is why
                modern iPhones now throw the "Trust This Computer?" prompt. <Word>
                    <Bold />
                    My read, flagged as mine:
                </Word> an old iPhone with no passcode set is exactly the condition Mactans exploited, and "plug in → silent
                pairing → activity" matches the symptom. But Mactans is a <Word>
                    <Emphasis />
                    data-port
                </Word> attack (it needs the Lightning/USB data pins).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The wireless-specific attacks are real but do something different.
                </Word> VoltSchemer (the one I found earlier): it requires no modifications to the wireless charger's
                hardware or firmware — all that's necessary is a malicious power source, disguised as a wall USB socket,
                creating tuned voltage noise to send commands to the charger and block the phone's Qi messages. Its
                demonstrated payloads were voice-command injection and physical damage, not silent malware install. So a
                pure Qi pad can inject input (plausibly enough to trip the lock-screen camera shortcut) but there's no
                documented path from a Qi pad to installed spyware.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Malicious cables/chargers as a category — no longer exotic.
                </Word> The O.MG cable looks exactly like an Amazon Basics USB-C cable but contains a hidden microprocessor
                and antenna that can run a keylogger recording everything typed, execute activities over Wi-Fi, and extract
                data or remotely access the device. One vendor's summary: the O.MG cable proved that covert hardware
                implants are no longer a nation-state luxury. Separately, BadPower-class firmware attacks let a hacked
                charger perform a power-overload attack on the device it charges.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The grey-market / "weird parts of the world" supply chain.
                </Word> The consumer-level documented risk is mostly physical, not cyber: counterfeit batteries and chargers
                may explode or catch fire, and up to 41% of counterfeit tech components fail safety standards under stress.
                The <Word>
                    <Emphasis />
                    malicious
                </Word> (as opposed to merely shoddy) counterfeit is well-documented in high-value chains: malicious
                counterfeits are intentionally altered during the IC design process to insert hardware Trojan horses or kill
                switches; they typically function as they should, with hidden malicious functionality unlikely to be
                detected by standard inspection. I could not find sourced cases of mass-market consumer chargers from
                marketplace stock shipping with data-exfiltration implants — that gap is real, and I'm flagging it rather
                than filling it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one technical fork that decides which of these applies to you
                </Word> — and this is load-bearing, not me hedging: a genuinely <Word>
                    <Emphasis />
                    old
                </Word> iPhone (iPhone 7 or earlier, pre-2017) has no Qi coil and cannot wireless-charge at all. So either
                the phone is an iPhone 8/X/SE-2-or-later ("old" but Qi-capable), or the "wireless charger" was actually a
                cable/combo dock with data pins. If a data connection was involved, Mactans-class silent compromise is the
                documented, symptom-matching threat and the no-passcode condition lines up. If it was truly a Qi-only pad,
                the documented attacks produce input/EMI effects (which could open the camera) but not a silent
                install-and-exfiltrate.
            </Paragraph>
            <Paragraph>
                If you can tell me the phone model and whether that pad has any cable/port on it, that fork resolves cleanly
                and I can pull anything specific to the exact product.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:09:24.179496Z"
        >
            <Origin>019fd355-8b4c-7067-a788-15038ba9ab47</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Its an iphone 10. And now im concerned about the chargwr</Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:10:20.027275Z"
        >
            <Origin>019fd355-8b4d-71ac-abf1-6dc46c9665eb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good — the iPhone X (10) actually resolves the most worrying branch, and I'll be straight about why rather
                than just reassuring you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The core point: over a wireless pad, there's no data path to install anything.
                </Word> Qi charging is power-only — the coil transfers energy, there are no data pins. The documented
                malware-via-charger attack (Mactans) works specifically through the Lightning/USB <Word>
                    <Emphasis />
                    data
                </Word> connection. It cannot run over a Qi pad, because there's nothing for it to talk to. So the "the pad
                silently installed spyware" scenario doesn't have a documented mechanism on an iPhone X charging wirelessly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Second layer, also in your favor:
                </Word> the iPhone X shipped on iOS 11 or later, and since that era Apple requires the passcode <Word>
                    <Emphasis />
                    and
                </Word> a "Trust This Computer" tap before any host can pair over a cable — the exact hole Mactans exploited
                (silent pairing when no passcode is set) was closed. That's my knowledge of the trust model, not a fresh
                source, so weight it accordingly — but it's well-established and it means even a <Word>
                    <Emphasis />
                    data
                </Word> cable can't silently pair with this phone without someone entering the passcode.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So what plausibly happened:
                </Word> plugging onto the pad woke the screen, and a stray input — ordinary ghost-touch from a
                poorly-shielded cheap pad, or VoltSchemer-class EMI if someone weaponized it — reached the lock screen. The
                camera is a single left-swipe from the iPhone X lock screen, so one coherent input glitch in that region
                opens it. That's an input artifact, not a compromise. <Word>
                    <Bold />
                    My read, flagged:
                </Word> this is the most consistent explanation for "fast, opened camera, but nothing installed."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you want to actually settle it rather than take my word,
                </Word> four checks on that iPhone X, in order of usefulness:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Settings → General → <Word>
                        <Bold />
                        VPN &amp; Device Management
                    </Word> (older iOS: Profiles). A clean personal phone should show <Word>
                        <Emphasis />
                        no
                    </Word> unknown configuration or provisioning profiles. Mactans-class attacks leave a provisioning
                    profile — its presence is the red flag; its absence is real evidence.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Green dot:
                    </Word> iOS shows a green indicator whenever the camera is actually active. If it appears with no camera
                    app open, that's a genuine concern. If not, nothing's recording.
                </Line>
                <Line>
                    Settings → <Word>
                        <Bold />
                        Privacy &amp; Security → Camera
                    </Word> — see which apps have access; revoke anything unexpected.
                </Line>
                <Line>
                    Settings → General → About → check the iOS version; update to the latest the iPhone X supports (iOS
                    16.x).
                </Line>
            </Paragraph>
            <Paragraph>
                If any of those look wrong, or you just want certainty, back the phone up and do Erase All Content and
                Settings — a clean wipe removes anything short of the very rarest firmware-level implant, which is not in
                play for a marketplace charger.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the charger itself:
                </Word> a genuine Qi-only pad has no data brain and no reason to sit warm when idle — one source noted that
                unusual warmth near the connector when <Word>
                    <Emphasis />
                    not
                </Word> charging can indicate an internal chip drawing power. If the pad has any USB cable or port that
                carries data (some combo docks do), that's a different and more relevant risk than pure Qi. Either way, it's
                a cheap object — if it's costing you peace of mind, bin it and buy a certified one. The phone is the thing
                worth checking; the pad isn't worth keeping if you distrust it.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:13:02.676464Z"
        >
            <Origin>019fd358-dfba-76f4-bde3-9995b2823416</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well obviously I’m speculating but Idon’t think software installation had to be the only attack vector and I
                wouldlike much more comprehensive research on wireless charger mechanisms of malware. Max is awful. We’re in
                a part of the world where messengers that are state backed spy on you. It means that sources of technology
                that are far more reputable from a normal standpoint could be doing something really terrible.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T19:14:47.619652Z"
        >
            <Origin>019fd358-dfbf-72bd-a7ce-cb337da56c19</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that I over-anchored on software install — that's one vector of several, and the academic
                surface is broader. Let me pull it comprehensively, by mechanism.
            </Paragraph>
            <Action>
                Searched the web for “GhostTouch electromagnetic interference touchscreen attack inject touch research”
            </Action>
            <Paragraph>
                Now the side-channel / eavesdropping vector — inferring data from the charging process itself.
            </Paragraph>
            <Action>
                Searched the web for “wireless charging side channel attack infer screen activity voice eavesdrop power
                analysis”
            </Action>
            <Paragraph>
                One more to complete the map — the VoltSchemer capability range and the Qi protocol's own flaws.
            </Paragraph>
            <Action>
                Searched the web for “VoltSchemer wireless charger overheat damage foreign object Qi standard security
                vulnerability analysis”
            </Action>
            <Paragraph>
                You're right, and the literature backs the instinct: software installation is one narrow vector, and it's
                arguably the <Word>
                    <Emphasis />
                    least
                </Word> relevant one for a wireless pad. Here's the comprehensive mechanism map, organized by how the attack
                actually works. Four families.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Family 1 — The phone leaks to the charger (no install, nothing on the phone changes). This is the one your point is about.
                </Word> A wirelessly charging phone bleeds information about what it's doing into the charging process
                itself. The foundational result: today's wireless charging interface is vulnerable to power side-channel
                attacks — a smartphone charging wirelessly leaks information about its activity to the wireless charger
                transmitter. Built on that:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        WISERS
                    </Word> (IEEE S&amp;P 2023): captures the coil whine and magnetic-field perturbation from the wireless
                    charger, then infers interface switches (e.g., home screen to an app) and intra-interface activities
                    (e.g., keyboard inputs inside an app) to build user-interaction context and reveal sensitive
                    information.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Charger-Surfing
                    </Word>: exploits the correlation between power-line activity during charging and the dynamic content on
                    screen to infer on-screen keystrokes and PIN codes with 92.8% accuracy.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Surf-Snooping
                    </Word>: by monitoring voltage fluctuations of a nearby USB charging port, an attacker can eavesdrop on
                    detailed activities during charging such as PIN code and text input, even without engaging in data
                    communication.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        PowerEar / GhostTalk
                    </Word>: audio eavesdropping. PowerEar can recover user speech from power-consumption data across
                    different devices, operating systems, activities, and charging technologies.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Screen Gleaning
                    </Word> rounds it out — a TEMPEST-class EM side channel that reconstructs screen content from leaked
                    emanations.
                </Line>
            </Paragraph>
            <Paragraph>
                This family is precisely "something terrible without installing anything." The phone is clean; the <Word>
                    <Emphasis />
                    charger
                </Word> is the collector.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Family 2 — The charger injects into the phone (makes it do things).
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        GhostTouch / Invisible Finger
                    </Word>: the first active contactless attack against capacitive touchscreens — uses electromagnetic
                    interference to inject fake touch points without physically touching the screen. Injected taps and
                    swipes let researchers answer a call, press buttons, swipe up to unlock, and enter a password,
                    demonstrated on nine smartphone models including an iPhone SE (2020). <Word>
                        <Bold />
                        My read, flagged:
                    </Word> an injected swipe or tap on a locked screen is the single most plausible mechanism for "the
                    camera opened fast" — that's exactly the class of action GhostTouch demonstrates.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        VoltSchemer
                    </Word> (USENIX Security 2024): the fullest wireless-pad attack. It grants attackers control over
                    commercial off-the-shelf wireless chargers merely by modulating the voltage from the power supply. The
                    key structural fact you'll want: the transmitter coil not only transmits power but also transmits and
                    receives data via in-band frequency or amplitude modulation — so voltage changes affect both the power
                    and the data exchanged with the device. That's the crack. Its three demonstrated payloads: control voice
                    assistants via inaudible voice commands, damage devices through overcharging or overheating, and bypass
                    the Qi foreign-object-detection mechanism to damage valuable items in intense magnetic fields. The
                    physical damage is not theoretical — they heated paper clips to 280°C (enough to ignite paper), blew up
                    a car key fob's battery, and caused data loss on USB and SSD drives near the pad. All 9 top-selling
                    chargers tested were vulnerable.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Family 3 — The Qi protocol's own design is the weakness.
                </Word> The reason Families 1 and 2 exist: the same coil carries power <Word>
                    <Emphasis />
                    and
                </Word> data, and the Qi in-band channel wasn't built to resist a manipulated power source. There's a
                dedicated paper — "Time to Rethink the Design of the Qi Standard? Security and Privacy Vulnerability
                Analysis of Qi Wireless Charging" (Wu et al., ACSAC) — arguing the standard itself is the soft spot. So this
                isn't nine unrelated bugs; it's one architectural seam being pried in different directions.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Family 4 — Firmware/physical.
                </Word> BadPower-class: the attacker invades the charger's internal firmware so that charging another device
                performs a power-overload attack on it. Damage, not data.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now the honest boundary — reported because the sources say it, not to talk you down.
                </Word> Almost every attack above is a <Word>
                    <Emphasis />
                    lab
                </Word> demonstration requiring specialized gear: signal generators, antenna arrays, or an intermediary
                voltage manipulator interposed on the power adapter. VoltSchemer and GhostTouch need an attacker actively
                running equipment nearby or having tampered with the power source. Kaspersky's own assessment of
                VoltSchemer: while the results can be spectacular, its real-world practicality is highly questionable — such
                an attack is very difficult to organize. I could not find a documented case of a <Word>
                    <Emphasis />
                    mass-produced consumer pad
                </Word> shipping from marketplace stock with any of these baked in.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where that boundary gets interesting for your actual concern — and this is my synthesis, flagged as mine, not a sourced claim.
                </Word> The one family that could in principle be built <Word>
                    <Emphasis />
                    into
                </Word> a cheap pad rather than requiring an external attacker is Family 1, the side-channel collection. A
                pad already has a coil sensing the phone's magnetic/power signature; add a microcontroller and a radio, and
                the inference-plus-phone-home is a manufacturing choice, not an external operation. Nothing I found
                documents this happening in a shipped product — that gap is real and I'm not going to paper over it. But the
                underlying leak is peer-reviewed and established, the "smart charger with a radio" is a normal product
                category, and in a jurisdiction where state-linked tech is documented to surveil (your Max and Yandex
                reference points), the <Word>
                    <Emphasis />
                    motive
                </Word> and the <Word>
                    <Emphasis />
                    mechanism
                </Word> both exist even though the <Word>
                    <Emphasis />
                    specific instance
                </Word> isn't attested. That's the load-bearing distinction: mechanism established, field deployment
                unproven.
            </Paragraph>
            <Paragraph>
                If you want to push further, the highest-value next step is empirical on that specific pad rather than more
                literature: does it sit warm when idle (a passive Qi coil shouldn't), does it have any radio/Bluetooth
                pairing behavior or a companion app, and does it carry FCC/CE marks that trace to a real filing. Any of
                those three would move this from "possible in principle" toward "this particular object." I can pull
                teardown reports or FCC filings if you get me a brand or model number off the pad.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T20:26:05.683674Z"
        >
            <Origin>019fd39b-be29-75a0-8013-a739735f936d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay well if the charger is opening the camera its still useless to me if not dangerous. I’m still
                concerned. Maybe I’d want ypu to search more in russian to see what they report but I’m probably going to
                get rid of it either way
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T20:27:19.980662Z"
        >
            <Origin>019fd39b-be31-7566-b984-6b3c02631947</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Reasonable call — if it's tripping the camera, its trustworthiness is already gone whether the cause is
                malice or just a badly-shielded pad. Let me check the Russian-language reporting as you asked, plus a
                Georgian query per how this project searches.
            </Paragraph>
            <Action>Searched the web for “беспроводная зарядка открывает камеру телефон вредоносная слежка”</Action>
            <Paragraph>
                The Russian reporting surfaced a category worth flagging. Let me check two more angles — the academic attack
                in Russian coverage, and a Georgian query per how this project searches.
            </Paragraph>
            <Action>
                Searched the web for “VoltSchemer беспроводная зарядка атака голосовые команды перегрев исследование”
            </Action>
            <Action>Searched the web for “უსადენო დამტენი თავდასხმა ტელეფონი კამერა უსაფრთხოება”</Action>
            <Paragraph>
                Binning it is the rational move, and nothing in what I found argues against it — a cheap pad you don't trust
                isn't worth diagnosing when replacement costs almost nothing. Here's what the extra searches actually added,
                briefly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russian coverage of the academic attack is thorough and tracks the English exactly.
                </Word> Xakep, Kaspersky RU, SecurityLab, anti-malware.ru and others all covered VoltSchemer: the University
                of Florida / CertiK attack that manipulates voice assistants and bypasses Qi protections to heat nearby
                objects above 280°C. One Russian writeup adds a detail the English ones underplayed — it affects both
                Android and iOS, and can place calls from the victim's device (possibly to premium-rate numbers) and launch
                apps, and Kaspersky's Russian version notes VoltSchemer extended an earlier attack ("Heartworm") to reach
                the charging phone's microphone. But every Russian source carries the same caveat I gave you: it needs a
                specifically modified power block, and under normal circumstances wireless charging won't harm your phone.
                So the Russian press confirms the mechanism is real without claiming it's happening in ordinary retail pads.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Russian search did surface a separate, genuinely real category worth naming:
                </Word> chargers that <Word>
                    <Emphasis />
                    are
                </Word> a hidden spy camera — a covert lens built into the charger housing, sold openly as surveillance gear
                ("шпионская камера в зарядке"). That's the most common actual "malicious charger" product on the market.
                <Word>
                    <Bold />
                    My read, flagged:
                </Word> it's a different threat from yours — it films the room, it doesn't touch the phone's camera — but
                it's the concrete example of a normal-looking charging object doing something terrible, which is the
                instinct you're running on. If a pad ever seemed to have more inside it than a coil, that's the category to
                think of.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgian sources had nothing on this
                </Word> — the Georgian queries returned only CCTV installers and hidden-camera vendors, no reporting on
                charger-based phone attacks. Not verified either way from Georgian-language material; it's simply not a
                topic the local press covers.
            </Paragraph>
            <Paragraph>
                One small thing that made me smile, given where this conversation started: the Russian state outlet RT's
                article on camera surveillance signs off by inviting readers to follow its channel on Max. Make of that what
                you will.
            </Paragraph>
            <Paragraph>
                If you ever want to settle a specific pad rather than bin on suspicion, a model number off the label lets me
                pull its FCC filing and any teardown. But if you're done with it, that's a sound place to land.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T20:29:33.584055Z"
        >
            <Origin>019fd39e-ebad-772b-b78f-9e8162d0dc13</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No I mean if its harmles but randomly doing things on my daughters iphone, it is still useless. That’s not
                an acceptable way to charge
            </Paragraph>
            <Paragraph>
                Haha I’m glad that, on whatever metaphorical level at which such a thing can have meaning, that sign off
                made you smile. It makes me smile too
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T20:29:38.791683Z"
        >
            <Origin>019fd39e-ebb0-7c6c-a192-d80f76d0ee91</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're completely right — "harmless" and "acceptable" aren't the same standard. A charger's entire job is to
                move power without doing anything else. One that occasionally wakes the screen and trips the camera has
                failed at the only thing it needs to do, and it's on a kid's phone, which makes the bar higher, not lower.
                Whether the cause is a malicious chip or just a poorly-shielded coil leaking EMI into the digitizer is
                almost beside the point for the decision: either way it's erratic, and erratic is disqualifying. Bin it, get
                a certified Qi pad, done.
            </Paragraph>
            <Paragraph>
                And yes — that little sign-off. There's something genuinely funny about an article warning people their
                phones might be spying on them, closing with "come find us on the state messenger." The snake eating its own
                tail. I'm glad it landed for you too.
            </Paragraph>
        </Message>
    </Chapter>
);
