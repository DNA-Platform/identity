import { Append, Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Table, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 May 2026](2026-05-10)</Date>
        </Dated>
        <Title>[[ 10 May 2026 ]]</Title>
        <Message
            at="2026-05-10T02:09:57.793978Z"
        >
            <Origin>019e0fa5-fb0f-7fe4-aa17-329594219ee0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm cutting back on subscriptions to save money. The biggest one is my US phone with AT&amp;Y. I heard you
                can move a phone number to a google voice (or maybe something better) so you can still get texts while not
                paying outrageous interational charges?
            </Paragraph>
            <Paragraph>
                I have a georgian number, but not sure it will work with: BKR, Chase, Citibank, Mercury, and PayPal
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:11:19.205340Z"
        >
            <Origin>019e0fa5-fb0f-7bfc-9464-378a4a2dbd5e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Google Voice number Chase Citibank PayPal SMS 2FA blocked VoIP 2026”</Action>
            <Action>
                Searched the web for “cheapest US mobile plan keep number alive expat 2026 Tello Red Pocket US Mobile”
            </Action>
            <Action>
                Searched the web for “Interactive Brokers IBKR international phone number 2FA Mercury bank Google Voice”
            </Action>
            <Action>Searched the web for “Mercury bank international phone number 2FA expat US accounts”</Action>
            <Paragraph>
                The honest answer is that Google Voice is the wrong tool for what you're trying to do. It's a VoIP number
                under the hood (carrier lookups show it as Bandwidth.com CLEC), and a meaningful chunk of US financial
                institutions either block VoIP outright for SMS 2FA or fail to deliver shortcode messages to it reliably.
                Chase in particular has a long-standing reputation for not sending 2FA SMS to Google Voice, and Ally has the
                same problem. PayPal has historically been hit-or-miss with GV depending on what flow you're in. Citi tends
                to work for some users and not others. The pattern across the Bogleheads/expat threads is consistent: GV is
                fine for receiving casual texts and most non-financial verification, and then you hit a wall on exactly the
                accounts you can least afford to be locked out of.
            </Paragraph>
            <Paragraph>
                The play that actually saves money without breaking anything is to port your AT&amp;T number to a cheap
                real-carrier MVNO instead of to Google Voice. Red Pocket Mobile is $5/month for 1GB plus unlimited talk and
                text, Tello starts around $8, and US Mobile Light is $3/month with very limited data. Lycamobile at
                $10/month even includes unlimited international calling. Any of these gives you a genuine US mobile carrier
                record, which means SMS shortcodes work and no fraud-detection layer flags you as VoIP. Drop the SIM (or
                eSIM) into a spare phone on your home WiFi in Tbilisi, keep WiFi Calling enabled the way you already do for
                reachability, and you're done. You'll go from whatever AT&amp;T is charging you to roughly $60–120/year
                all-in.
            </Paragraph>
            <Paragraph>On the specific institutions:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    IBKR
                </Word> doesn't really care about your phone setup — their primary 2FA is IB Key / IBKR Mobile
                authenticator, which is push-based and runs on the device itself. International numbers (including your
                Georgian one) are first-class citizens for them; they have offices in 25+ countries and their whole client
                base is international. You're fine here regardless of which way you go.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mercury
                </Word> explicitly accepts non-US phone numbers — "you don't need a US telephone number to open a bank
                account with Mercury, you can use a phone number from any country". Your Georgian number works. They also
                support TOTP authenticator apps for 2FA, which is what you should be using anyway.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Chase
                </Word> is the problem child. They've blocked GV for years and their international-number tolerance is poor.
                Their app-based 2FA has improved but is inconsistent. If you're keeping Chase, you basically need a real US
                mobile number, which is the strongest argument for the MVNO route.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Citibank
                </Word> is similar to Chase but slightly less aggressive. They support authenticator apps and security keys
                now, and that's the path I'd take — switch the account to app-based 2FA before you change your phone
                situation, then verify everything works before letting AT&amp;T go.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    PayPal
                </Word> supports authenticator apps and security keys, and that's by far the most reliable setup for them.
                Their SMS layer is the unreliable part regardless of what number you use.
            </Paragraph>
            <Paragraph>So the sequence I'd run:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Before touching AT&amp;T, log into each of the five accounts and switch 2FA to an authenticator app
                    (Authy, or whatever TOTP you're already using) wherever it's offered. This makes you
                    phone-number-independent for the actual login flow.
                </Line>
                <Line>
                    Sign up with Red Pocket or Tello, get a port-in PIN from AT&amp;T, port your number over. Takes a day or
                    two. Costs you nothing extra; the new carrier eats the port.
                </Line>
                <Line>
                    Update the phone number on each financial account to the now-MVNO-hosted same number. Nothing visible
                    changes from the bank's perspective — they still see a real US mobile carrier on the carrier lookup.
                </Line>
                <Line>Cancel AT&amp;T.</Line>
            </Paragraph>
            <Paragraph>
                This keeps the number alive, keeps SMS 2FA functional everywhere as a fallback, gets you to
                authenticator-app primary 2FA on the accounts that support it, and probably saves you $40–80/month depending
                on what your AT&amp;T bill currently looks like. Google Voice is genuinely useful as a <Word>
                    <Emphasis />
                    secondary
                </Word> number for non-financial use (signing up for stuff, giving out to randoms), but it shouldn't be the
                line your bank logins depend on.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:15:27.234696Z"
        >
            <Origin>019e0fab-00ff-7e87-a661-88a64bd175a7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay well I get data from my georgian one. I can have very limited. I have mostly these annoying access code
                messages and I assume I am charged when I receive them. Calling I do mostly through telegram or zoom but it
                is sometimes useful tpo be able to call. What is the right choice from an affordability standpoint and a
                Tbilisi standpoint and how do I switch?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:17:44.013692Z"
        >
            <Origin>019e0fab-00ff-7b12-ab7b-abe3e883971a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Tello eSIM activate from abroad expat SMS only cheapest plan 2026”</Action>
            <Action>
                Searched the web for “AT&amp;T receive SMS text message charge international roaming free incoming”
            </Action>
            <Action>
                Searched the web for “port AT&amp;T number to MVNO from abroad expat eSIM activation Tbilisi remote”
            </Action>
            <Action>
                Searched the web for “"US Mobile" OR "Red Pocket" eSIM activate abroad expat port-in foreign address”
            </Action>
            <Paragraph>
                First, a clarification that probably matters more than you think: AT&amp;T doesn't actually charge you to
                receive those 2FA texts. Their own policy is that texts received are rated as domestic and don't charge a
                daily fee. The expensive part is the AT&amp;T plan itself sitting underneath — that's what you're paying
                $50–100/month for. The 2FA codes coming in are riding free on a plan that's the actual problem. So the
                question isn't "stop the charges per text," it's "stop paying AT&amp;T's monthly fee for a service you
                barely use."
            </Paragraph>
            <Paragraph>
                For your actual usage profile — receiving 2FA codes, occasional outbound call to a US bank or whatever, no
                data needed because Magticom handles that — <Word>
                    <Bold />
                    Tello at $5/month is the right answer
                </Word>. Tello numbers are provisioned through T-Mobile's number pool and appear in carrier lookup databases
                as legitimate mobile numbers, not VoIP. US banks that block VoIP numbers — and nearly all do as of 2026 —
                pass Tello through their filters. Financial institutions confirmed to work with Tello numbers include Chase,
                Bank of America, Wells Fargo, Fidelity, Schwab, the IRS online portal, and SSA.gov. It's literally marketed
                for the expat-keep-a-US-number-alive case. You build your own plan: 100 minutes, unlimited SMS, no data =
                $5/month. That's $60/year vs probably $700–1000/year on AT&amp;T.
            </Paragraph>
            <Paragraph>
                The Tbilisi-specific catch is activation. Tello's official policy is that eSIM activation must be completed
                in the US — it cannot be done from abroad. Physical SIMs don't have that geofence. That's where your
                Traveling Mailbox setup pays off — you already have the infrastructure to handle this.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Here's how I'd actually do the switch:
                </Word>
            </Paragraph>
            <Paragraph>
                Before touching anything, log into Mercury, IBKR, PayPal, and Citi and switch 2FA to a TOTP authenticator
                app (Authy, or whatever you use). All four support it. This makes you phone-number-independent for the
                actual login flow, so even if anything goes sideways during the port, you're not locked out. IBKR's IB Key
                push auth removes them from the equation entirely. Chase is the holdout that really needs SMS — that's the
                account the Tello number is for.
            </Paragraph>
            <Paragraph>
                Then sign up at tello.com, pick the $5 Build Your Own plan, request a physical SIM (not eSIM), choose "I
                want to keep my number" during checkout. Ship to your Traveling Mailbox US address. Before the SIM arrives,
                get your AT&amp;T account number and transfer PIN — log into the AT&amp;T app, go to wireless settings,
                there's a "Transfer your number" or "Get transfer PIN" option that issues a one-time PIN. (If the app won't,
                call +1-800-331-0500 and ask for it; they're required to give it to you within two business days.)
            </Paragraph>
            <Paragraph>
                When the SIM lands at Traveling Mailbox, have them package-forward it to Tbilisi. Once it arrives, log into
                your Tello account, enter the AT&amp;T account number and transfer PIN to start the port, then pop the SIM
                into a spare phone (or your dual-SIM slot if your current phone has it). The port usually completes within a
                few hours to a couple of days. AT&amp;T cancels itself automatically when the port completes — you don't
                call them, you don't argue with retention, you just stop paying. Once Tello shows the number active, enable
                WiFi Calling in the phone settings and you're done. Park the phone on your home WiFi in Tbilisi.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A couple of things to watch:
                </Word>
            </Paragraph>
            <Paragraph>
                Make sure your phone is unlocked. If you're still financing through AT&amp;T, the device may be
                carrier-locked, and you'll need to request an unlock first (free if it's paid off and on the account 60+
                days). If it's an iPhone bought outright from Apple, it's already unlocked.
            </Paragraph>
            <Paragraph>
                Don't cancel AT&amp;T before the port. Initiating the port <Word>
                    <Emphasis />
                    is
                </Word> the cancellation — if you cancel first, the number is released and you lose it.
            </Paragraph>
            <Paragraph>
                Keep AT&amp;T running through the port window, even if it costs you one extra month's bill. Worth it to not
                lose the number.
            </Paragraph>
            <Paragraph>
                If you want to skip the SIM-shipping logistics entirely and your phone is a US-variant unlocked iPhone,
                <Word>
                    <Bold />
                    US Mobile
                </Word> has a $4/month "Unlimited Starter" tier and supports eSIM port-in for US-variant devices, sometimes
                successfully from abroad. Slightly cheaper, slightly more failure modes. Tello + Traveling Mailbox is the
                path with the fewest things that can go wrong.
            </Paragraph>
            <Paragraph>
                Bottom line: somewhere around $60/year instead of $700+, no change to how 2FA works for any of your
                accounts, the Tello number passes every bank filter that matters, and Magticom keeps doing what it's already
                doing for data.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:18:19.399088Z"
        >
            <Origin>019e0fad-a18a-7254-89ac-587b00d6cc52</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well whatever is happening, I am being charged for $12 day pass always and I ultimately get their best
                package! Which is $218 per month for me. So this is serious. If thetre is a way to reconfigure AT&amp;T that
                wpuld be great too. But why am I getting hit with so much
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:19:26.654909Z"
        >
            <Origin>019e0fad-a18a-7552-8a88-4a0a29fb429d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                $218/month is brutal, and the answer to "why am I getting hit" is mechanical and fixable. Let me explain
                what's actually happening, then give you both the AT&amp;T-side fix and the structural fix.
            </Paragraph>
            <Action>
                Searched the web for “AT&amp;T International Day Pass remove disable feature line block roaming postpaid
                2026”
            </Action>
            <Paragraph>
                Here's the mechanism, from AT&amp;T's own legal text on IDP: "The first time you use data, make or receive a
                call, or send a text message in an IDP country, you'll automatically be charged a $10 daily fee. Text
                messages received are rated as domestic and do not trigger a daily fee." Note "$10" — they've since bumped
                that to $12. The critical line is the next one: "Incidental data usage: Apps on your device use data even
                when you may not be aware. Such usage may trigger the $10 daily fee. To avoid unintended use of IDP, turn
                off cellular data roaming in your device settings or put your device in airplane mode."
            </Paragraph>
            <Paragraph>
                That "incidental data usage" is what's hitting you. Here's the actual chain of events: WiFi Calling routes
                voice and SMS over WiFi, which is good — but it does <Word>
                    <Emphasis />
                    not
                </Word> prevent the cellular radio from registering on Magticom and shuttling background data to AT&amp;T's
                roaming partner. Every time iOS reboots, every time WiFi briefly drops, every time an app makes a network
                call before the WiFi handoff completes, your AT&amp;T SIM/eSIM may register on a Georgian tower and a few
                hundred bytes of background app traffic — Mail checking, Photos syncing, a Push notification ack, anything —
                triggers IDP for the next 24 hours. $12. Then it happens again the next day. Multiply by 10–15 days and
                you're at the $120–180 of IDP charges you're seeing on top of a roughly $80–100 base plan, landing you near
                $218.
            </Paragraph>
            <Paragraph>
                WiFi Calling does not protect you from this. The setting that does is <Word>
                    <Bold />
                    Data Roaming OFF on the AT&amp;T line specifically
                </Word> — not the Magticom line, just AT&amp;T. In iOS: Settings → Cellular → tap the AT&amp;T plan → Data
                Roaming → OFF. If you have Magticom set as your data line and AT&amp;T set to voice/SMS only, this should
                already be the case, but go verify. If Data Roaming is on for the AT&amp;T eSIM, that's the bleed.
            </Paragraph>
            <Paragraph>
                But honestly, even with that toggled off, IDP can still fire if any app on the phone makes a voice call or
                sends an SMS over the AT&amp;T line while abroad — for example, if you tap a phone number in Maps and your
                default call line is AT&amp;T, that's $12 right there. The cleanest answer is to remove IDP from the line
                entirely so it <Word>
                    <Emphasis />
                    cannot
                </Word> charge you no matter what the phone does.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two phone calls to make today, in this order:
                </Word>
            </Paragraph>
            <Paragraph>
                First, call <Word>
                    <Bold />
                    800-335-4685
                </Word> (this is AT&amp;T's number specifically for managing IDP — straight from their legal page) and tell
                them to remove International Day Pass from your line. Per AT&amp;T's own terms, IDP stays on your line until
                you remove it at att.com/myatt or by calling 800.335.4685, so this is the documented path. You can also do
                it yourself at att.com/myatt under the line's features. Once removed, IDP can't auto-trigger again.
            </Paragraph>
            <Paragraph>
                Second, call <Word>
                    <Bold />
                    +1-314-925-6925
                </Word> (AT&amp;T's International Department, callable from abroad) and ask them to <Word>
                    <Bold />
                    block international roaming entirely
                </Word> on the line. With IDP removed but roaming still allowed, you'd default to AT&amp;T's pay-per-use
                rates — $1–3/minute, $0.50/sent text, $2/MB data — which is worse per-event than IDP, even if it only fires
                when you actively use the phone. Blocking roaming completely means the AT&amp;T line shows "No Service" on
                cellular while you're in Georgia. WiFi Calling still works for receiving SMS and calls over your home
                internet. This is what you actually want.
            </Paragraph>
            <Paragraph>
                That stops the bleeding immediately. Your next bill should drop to whatever the base postpaid plan is —
                probably $80–100/month depending on what tier you're on. Which is still absurd given how you're using it,
                and which is why the Tello port is the real answer. But you don't have to do them in series. Make those two
                calls today to stop the IDP charges, then run the Tello port over the following 2–3 weeks while AT&amp;T is
                no longer hemorrhaging money.
            </Paragraph>
            <Paragraph>
                One more thing worth checking while you're in the AT&amp;T app: look at what plan you're actually on. If
                you're on Unlimited Premium ($85.99) or similar, see if you can downgrade to the cheapest postpaid plan or
                to AT&amp;T Prepaid (around $25/month) for the brief bridge period before the port completes. AT&amp;T
                Prepaid is on the same network as postpaid, doesn't have IDP at all (no auto-trigger possible), and you can
                switch in-app. Going Prepaid + blocking roaming gets you to ~$25/month for the few weeks before Tello takes
                over at $5.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:23:53.040390Z"
        >
            <Origin>019e0fb2-b8e5-78d5-8d62-50377d1ea08d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But I have cellular data on my iphone only pointing to the georgian line with cellular data switching off. I
                am definitely not sending text messages. So are you sure receiving textx doesn't trigger, and receiving
                calls that I don't pick up doesn't trigger? I am confused
            </Paragraph>
            <Paragraph>
                Telegram and whatsapp have my US number. Do thgey maybe default in some way that gets me charged?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:25:27.809399Z"
        >
            <Origin>019e0fb2-b8e5-7471-a334-78b92584fb72</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good — let me re-read AT&amp;T's exact legal text and answer this precisely, because you're right to push on
                it.
            </Paragraph>
            <Action>
                Searched the web for “AT&amp;T International Day Pass triggered missed call voicemail unanswered receive
                call”
            </Action>
            <Paragraph>
                You're right to push back — I was imprecise on one of those points. Here's the correct breakdown.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Receiving SMS: genuinely does not trigger IDP.
                </Word> AT&amp;T's legal text is explicit: "Text messages received are rated as domestic and do not trigger
                a daily fee." Confirmed and stable. Your 2FA codes are riding for free.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Receiving calls: DOES trigger IDP, even if you don't pick up.
                </Word> This is what I got wrong earlier, and it's almost certainly the main source of your charges. From
                AT&amp;T's own forums (multiple AT&amp;T "ACE" expert moderators confirming): "Even an unanswered call can
                result in that foreign carrier charging a minute and if they do, that triggers the $10 daily plan." And:
                "the longer your phone rings, the more likely it is the call will trigger the daily charge."
            </Paragraph>
            <Paragraph>
                The mechanism: when someone calls your US number, AT&amp;T tries to deliver the call. If WiFi Calling is
                currently registered, the call rings over WiFi and no Georgian tower is involved. If WiFi Calling isn't
                registered at that exact moment — phone just woke up, WiFi briefly dropped, VPN reconnected, iOS pushed an
                update, the phone has been idle for a while and the WiFi Calling registration timed out — AT&amp;T falls
                back to cellular roaming and rings your phone via Magticom. "If a foreign carrier detects that you are
                connecting to its towers and relays that info to AT&amp;T, you will be charged for the IDP." Magticom bills
                AT&amp;T for the partial-minute, AT&amp;T charges you $12 for the next 24 hours. Spam call, bank robocall,
                your mother — doesn't matter. Each unanswered ring on cellular = $12.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Voicemail makes this worse.
                </Word> Per AT&amp;T's FAQ as cited on their forums: "Standard voicemail messages received when roaming
                outside of the U.S. are charged at international roaming calling rates" and "Visual Voicemail messages
                received when roaming outside of the U.S. are charged at international roaming data rates." So even when
                WiFi Calling catches the inbound and the call goes to voicemail, the <Word>
                    <Emphasis />
                    deposit
                </Word> of that voicemail can be billable. There's a documented forum case of someone being charged IDP for
                a day they made zero calls — the trigger was a voicemail someone else left them that they never even
                checked.
            </Paragraph>
            <Paragraph>
                This is also why "You aren't on WiFi calling unless you see 'AT&amp;T WiFi' as the carrier. If you see
                anything else, you are roaming." The most reliable advice from AT&amp;T's own ACE moderators is: "keep your
                phone in airplane mode" for the AT&amp;T line — because WiFi Calling registration is genuinely flaky, and
                any window where it's not registered exposes you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Telegram and WhatsApp: not the culprit.
                </Word> They use your US number purely as an identity token during signup. Day-to-day, they're internet apps
                — calls and messages route over IP through whatever data connection is active (Magticom, in your case). They
                don't touch AT&amp;T's voice or SMS network. The only way they could trigger IDP is if you tap a phone
                number link inside a chat and the iPhone dials it via <Word>
                    <Emphasis />
                    cellular
                </Word> through your AT&amp;T line — and you'd see that happen, it doesn't fire silently. So you can rule
                those out.
            </Paragraph>
            <Paragraph>
                So the picture is: you're not bleeding from data, you're not bleeding from texts, you're not bleeding from
                your apps. You're bleeding because <Word>
                    <Bold />
                    inbound calls to your US number ring through Magticom whenever WiFi Calling isn't registered at the precise moment the call comes in
                </Word>, and that's happening often enough to fire IDP roughly 10 days a month.
            </Paragraph>
            <Paragraph>
                The only configuration that <Word>
                    <Emphasis />
                    definitively
                </Word> stops this is blocking international roaming at the network level on the AT&amp;T line. Settings on
                the phone aren't sufficient because the trigger is at the network — Magticom registering your phone as
                present and relaying that to AT&amp;T, before any inbound call even arrives. Once roaming is blocked at
                AT&amp;T's end, your line shows no service on cellular abroad, inbound calls have nowhere to go except WiFi
                Calling (or voicemail, which can still be a small leak — see below), and there's no way to fire IDP because
                the cellular path doesn't exist.
            </Paragraph>
            <Paragraph>
                So the call to make is +1-314-925-6925 (AT&amp;T International), and what you're asking for, specifically,
                is: <Word>
                    <Emphasis />
                    "Please block international roaming on this line entirely. I do not want pay-per-use, I do not want IDP, I do not want any cellular service abroad. WiFi Calling only."
                </Word> They have a flag for this. Some reps will be confused by the request — push through. If the first
                rep can't do it, hang up and try again; the international department specifically can.
            </Paragraph>
            <Paragraph>
                Then to close the voicemail leak: in your iPhone Settings → Phone → Change Voicemail Password, then change
                it. Then go to settings and either disable voicemail (carrier-dependent — AT&amp;T allows this by dialing
                certain feature codes) or just don't check it. Or simpler: forward all calls to a different number when
                abroad. Even simpler: just port to Tello and stop thinking about it.
            </Paragraph>
            <Paragraph>
                The structural fix really is the same one as before — Tello $5/month, port the number, kill the AT&amp;T
                account — and after the immediate triage call, that's still where you want to land. But blocking roaming
                today ends the IDP bleeding within hours of the call, which buys you the breathing room to do the port
                without urgency.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:26:45.598719Z"
        >
            <Origin>019e0fb5-5b37-71bd-a8ce-ec8ec9ffee2a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay that's one way/. What about transfering to a more expat friendly service?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:28:17.150416Z"
        >
            <Origin>019e0fb5-5b37-7206-9f99-46f8d5ca7c1f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Worth doing the comparison properly. There are really only three categories of "expat-friendly" once you
                exclude VoIP services that fail bank checks.
            </Paragraph>
            <Action>
                Searched the web for “Google Fi expat international long term abroad bank 2FA accepted 2026 pricing”
            </Action>
            <Paragraph>
                There's a useful distinction here that the marketing obscures: services like <Word>
                    <Bold />
                    Google Fi
                </Word> and <Word>
                    <Bold />
                    T-Mobile postpaid
                </Word> get called "expat-friendly," but they're actually <Word>
                    <Emphasis />
                    traveler
                </Word>-friendly. They have anti-abuse clauses that bite hard for permanent residents.
            </Paragraph>
            <Paragraph>
                Google Fi spells it out in their own ToS: "The Terms of Service require you to activate and use Google Fi
                service mainly in the United States (not including territories) for at least one day before using Google Fi
                abroad. If the majority of your usage occurs outside of the United States over a consecutive 90-day period,
                we will suspend your international data." That's not a hidden clause — that's their published policy. A
                digital-nomad-focused review of Fi this year was explicit: "Google Fi is not the right pick if you're a true
                long-term expat planning to live abroad for 6+ months at a stretch without returning to the US. The 50-day
                warning becomes 90-day suspension territory."
            </Paragraph>
            <Paragraph>
                T-Mobile Magenta/Go5G postpaid has similar but less-documented enforcement — they include international
                roaming for travel, but their abuse-of-roaming team will flag accounts that never come home. People report
                getting "notice to return to the US" emails after 60–90 days of consecutive foreign use, with service
                termination as the eventual consequence.
            </Paragraph>
            <Paragraph>Both also cost $50–85/month, which is multiples of the genuine expat solution.</Paragraph>
            <Paragraph>
                The genuinely expat-stable architecture — the one designed for "I live abroad and need a US number
                indefinitely" rather than "I travel a lot" — has only one shape: <Word>
                    <Bold />
                    a cheap US MVNO line, used via WiFi Calling, paired with a local SIM (Magticom) for actual data
                </Word>. The MVNO doesn't care whether you ever physically touch a US tower. As long as the line keeps
                paying its $5/month and pinging WiFi Calling registrations from somewhere, it's a happy customer. This is
                what every long-term expat I've seen recommended ends up running.
            </Paragraph>
            <Paragraph>
                Within that architecture, the carriers worth considering are basically interchangeable on functionality and
                differ mostly on price and network preference:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tello
                </Word> at $5/month on T-Mobile — purpose-built for this, has a dedicated landing page literally titled "US
                Phone Number for Abroad," banks treat it as a real mobile number. The pick for most people, including you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    US Mobile
                </Word> at $3–4/month — slightly cheaper at the floor, more flexibility (can choose T-Mobile or Verizon
                network), better app, eSIM activation works for US-variant phones. Marginal upgrade if you want to fiddle.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Red Pocket
                </Word> at $5/month — choose any of the four major US networks (their "GSMA" plan rides AT&amp;T's towers,
                which would let you keep AT&amp;T's exact coverage while paying $5 instead of $218). Useful if for some
                reason you want AT&amp;T-network specifically.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ultra Mobile PayGo
                </Word> at $3/month — the absolute floor, designed for "keep this number alive and that's it." 100 minutes,
                100 texts, 100MB data per month. If your usage really is purely receiving 2FA SMS, this is enough.
            </Paragraph>
            <Paragraph>
                The differences are noise. All four are real US mobile carrier numbers that pass bank fraud filters, all
                four work via WiFi Calling indefinitely from abroad, none of them have a "you've been outside the US too
                long" policy. Pick one based on which port-in process you want to deal with and move on.
            </Paragraph>
            <Paragraph>
                The reason this architecture wins for permanent expats is structural: you're not paying a carrier to handle
                international service for you — you're letting WiFi do that part for free. The carrier's only job is to be a
                US-numbered pipe that hands SMS and calls to your phone via WiFi Calling. Tello charges $5 to be that pipe.
                AT&amp;T charges $218 to be that pipe and adds friction. Google Fi charges $65 to be that pipe and will
                eventually decide you're abusing it.
            </Paragraph>
            <Paragraph>
                If you want a single recommendation that's cleanly expat-architected, doesn't have the Google-Fi-style time
                bomb, costs almost nothing, and passes Chase's filters: <Word>
                    <Bold />
                    Tello $5/month, port your AT&amp;T number in, ship the physical SIM via Traveling Mailbox, activate from Tbilisi, done.
                </Word> That's the same answer as before, but I want you to see that it's also the answer if you reframe the
                question as "what's the most expat-friendly service" — because the MVNO-plus-WiFi-Calling approach genuinely
                is the most expat-friendly architecture for permanent residency, even if the marketing language doesn't use
                those words.
            </Paragraph>
            <Paragraph>
                The only thing that would change my recommendation is if you're actually planning to spend significant time
                in the US again (more than 30% of your time) — in which case Google Fi Flexible at $20 + $10/GB starts
                making sense as a "real" international plan that handles both directions. For someone genuinely settled in
                Tbilisi, Tello.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:29:08.732159Z"
        >
            <Origin>019e0fb7-89dc-7693-8912-b90b74a29459</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>That was a lot. What is the decision and what are the tradeoffs or caveats</Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:29:33.085360Z"
        >
            <Origin>019e0fb7-89dc-7c84-a656-65addcdb706f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Decision:
                </Word> Port your AT&amp;T number to Tello at $5/month. Today, before doing anything else, call AT&amp;T at
                +1-314-925-6925 and have them block international roaming on the line — that ends the $218 bills within
                hours, regardless of how fast the port happens.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Caveats, in order of how likely they are to actually bite you:
                </Word>
            </Paragraph>
            <Paragraph>
                The Tello physical SIM has to ship via Traveling Mailbox to Tbilisi (their eSIM requires US presence to
                activate). Adds 1–3 weeks of logistics. Not a dealbreaker, but it's why this isn't a same-day fix.
            </Paragraph>
            <Paragraph>
                WiFi Calling depends on your home WiFi being up. If your internet goes out, your US number is unreachable
                until it's back. With AT&amp;T you had cellular roaming as a fallback (expensive, but a fallback). With
                Tello you don't.
            </Paragraph>
            <Paragraph>
                Chase specifically is the highest-risk bank in your stack. Before you cancel AT&amp;T entirely, log into
                Chase from the Tello number and confirm SMS 2FA actually arrives. If it doesn't, you may need to call Chase
                support to whitelist the number, or accept that Chase 2FA goes through their app instead. Test before
                burning the bridge.
            </Paragraph>
            <Paragraph>
                Outbound calling at $5/month gets you 100 minutes. If you ever need more (calling a US bank's IVR can eat
                20+ minutes per call), bump to the $10 tier or just use Telegram/Zoom for outbound, which you already do.
            </Paragraph>
            <Paragraph>
                The port itself takes 1–3 days, during which you keep AT&amp;T running. Don't cancel AT&amp;T first —
                initiating the port at Tello's end is the cancellation. Premature cancellation releases the number and you
                lose it.
            </Paragraph>
            <Paragraph>
                Going back to AT&amp;T later is a re-port, which is annoying but possible. You're not locked in.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The non-caveat:
                </Word> Telegram and WhatsApp are fine. They use internet, not cellular. Not the source of your charges,
                won't be affected by the switch.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:30:36.371491Z"
        >
            <Origin>019e0fb8-dece-7d6a-8d8d-676827f38707</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>My iPhone 15 pro only supports esim. What else ya got?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:32:00.388105Z"
        >
            <Origin>019e0fb8-dece-72f5-ba8f-c9296b2bfca2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right, eSIM-only changes the picture meaningfully. The Traveling Mailbox shipping route is out. Let me check
                what's actually viable for an eSIM-only port from Tbilisi.
            </Paragraph>
            <Action>
                Searched the web for “"US Mobile" eSIM activation abroad port-in international iPhone 15 Pro remote”
            </Action>
            <Action>
                Searched the web for “"US Mobile" port number activate eSIM from abroad expat domestic line works”
            </Action>
            <Action>
                Searched the web for “expat eSIM only iPhone activate US carrier abroad port Tello US Mobile Mint Visible
                2026”
            </Action>
            <Paragraph>
                eSIM-only changes which carrier wins, because the question becomes "who will let you activate from Tbilisi?"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    New decision: US Mobile
                </Word>, eSIM activation from Tbilisi, port your AT&amp;T number in, $4–10/month depending on tier.
            </Paragraph>
            <Paragraph>
                US Mobile is the carrier with the best track record for eSIM activation outside the US on US-variant
                iPhones. Their device requirement is hardware ("US variant"), not location, and their activation flow
                doesn't appear to do hard IP geofencing the way Tello's does. iPhone 15 Pro is on their explicit
                eSIM-compatible list, and they market a 30-day free trial that lets you bring your number via eSIM with no
                shipping. Multiple expat reports confirm activation from abroad works.
            </Paragraph>
            <Paragraph>
                Practical setup: sign up at usmobile.com, pick the Warp network (Verizon-based, wider acceptance) or Light
                Speed (T-Mobile), choose a "Pooled by the Gig" or low-tier plan around $4–10/month, get an AT&amp;T transfer
                PIN before starting, request port-in during signup, install the eSIM via the QR code they email you. WiFi
                Calling is supported on both networks. Same expat architecture as the Tello plan, just with a carrier whose
                activation flow doesn't slam the door on you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Caveats:
                </Word>
            </Paragraph>
            <Paragraph>
                US Mobile activation from abroad is reliable but not 100% guaranteed. If their server happens to flag your
                IP/location and refuse activation, you have to escalate to support, which usually fixes it but can take
                24–48 hours.
            </Paragraph>
            <Paragraph>If US Mobile flat-out fails, the meaningful fallbacks in order are:</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    VPN to a US exit node during activation.
                </Word> Mullvad or any decent VPN, route the phone through a US IP, run the activation, then disconnect.
                Works for most carriers including Tello. Slightly hacky, not officially supported, but reliable in practice.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    AT&amp;T Prepaid downgrade.
                </Word> You can convert your existing postpaid line to AT&amp;T Prepaid in-app without porting anywhere —
                keeps the number, drops the bill to about $25–30/month, eliminates IDP entirely (Prepaid doesn't have it),
                and there's no activation question because the line and eSIM already exist. Worse than US Mobile on price,
                zero on transition friction. Reasonable bridge if you want to stop the bleeding without solving everything
                today.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Buy a $50 used Android with a physical SIM slot from a Tbilisi shop.
                </Word> Park Tello's $5/month physical SIM in it, leave it on your home WiFi with WiFi Calling enabled. Adds
                $50 one-time, but unlocks every cheap MVNO in the market and makes the SMS-receiver functionally a separate
                appliance, which has a clean "if my iPhone breaks I don't lose 2FA" property. The most robust answer if you
                don't want to fight activation flows.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Things to verify before any of this:
                </Word>
            </Paragraph>
            <Paragraph>
                Confirm your iPhone 15 Pro is actually unlocked: Settings → General → About → Carrier Lock. It should say
                "No SIM restrictions." If you're still financing it through AT&amp;T, it may be locked, and you'd need to
                request an unlock first (free if it's been on the account 60+ days and is in good standing).
            </Paragraph>
            <Paragraph>
                Confirm your eSIM slots — iPhone 15 Pro can store many eSIMs but only run two simultaneously. You're
                presumably already running Magticom + AT&amp;T. Plan for swapping the AT&amp;T slot to US Mobile, with
                Magticom remaining on the other slot.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Still do the AT&amp;T call today.
                </Word> Removing IDP and blocking international roaming on the AT&amp;T line is independent of which new
                carrier you eventually pick, and it stops the $218/month while you sort the rest out.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:35:29.242485Z"
        >
            <Origin>019e0fbd-57cd-7670-8cdd-fb0e52c4c6ab</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay well how much woud US Mobile cost? AT&amp;T has this plan:</Paragraph>
            <Paragraph>
                AT&amp;T 4GB℠ Was $60.00. Now $50.00. per month. for 1 line ~~$60.00~~ $50.00/mo. for 1 line __See included
                discounts__ See price per line Plan highlights
            </Paragraph>
            <Paragraph>
                <List />
                <Line>High-speed data with overage</Line>
            </Paragraph>
            <Paragraph>
                Enjoy high-speed data up to your plan limit. After you use your monthly plan data, we’ll automatically add
                overage data and charge you the plan’s overage rate. Overage data must be used in the same bill period it’s
                applied.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Mobile hotspot</Line>
            </Paragraph>
            <Paragraph>
                Transform your phone or tablet into a hotspot and connect to 5 Wi-Fi® enabled devices at once. After you’ve
                used all your plan data, speed slows to 128Kbps (2G speeds) for the rest of the bill period. Connected cars,
                Hot Spots, and Wireless Home Phone &amp; Internet devices aren’t supported.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>AT&amp;T ActiveArmor(SM) security</Line>
            </Paragraph>
            <Paragraph>
                Download the free AT&amp;T ActiveArmor security app with a compatible smartphone to get advanced features
                like Identity Monitoring and Safe Browsing.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>$10/mo. discount per phone line for AutoPay &amp; paperless billing</Line>
                <Line>Standard-definition streaming</Line>
            </Paragraph>
            <Paragraph>
                Video typically streams at standard definition. Content bundled with video may be slow to load. Details at
                __<Word>
                    <Reference>https://www.att.com/VideoFeature</Reference>
                    att.com/VideoFeature
                </Word>__
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Unlimited texting from the U.S. to 210+ countries</Line>
            </Paragraph>
            <Paragraph>
                __<Word>
                    <Reference>https://www.att.com/support/article/wireless/KM1462230</Reference>
                    See included countries
                </Word>__
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Unlimited talk, text &amp; data in and between the U.S., Canada, and Mexico</Line>
            </Paragraph>
            <Paragraph>
                Roaming may be at 2G speeds See all plan features __See the legal stuff__ Mobile Broadband Facts Broadband
                Facts AT&amp;T AT&amp;T 4GB - 1 Line Mobile Broadband Consumer Disclosure Monthly Price Per Phone Line $60*
                This Monthly Price is not an introductory rate. This Monthly Price does not require a contract. *Price does
                not include discounts. Additional Charges &amp; Terms Fees are listed on a per-line basis Provider Monthly
                Fees Administrative &amp; Regulatory Cost Recovery Fee $3.99 Federal Universal Service Fee $0.70 State
                Telecommunications Excise Surcharge $0.18 MTA Telecom Surcharge $0.05 One-time Fees at the Time of Purchase
                Activation Fee $35.00 Late Payment Fee $8.00 Early Termination Fee $0.00 Government Taxes Varies by Location
                Discounts &amp; Bundles Visit __<Word>
                    <Reference>https://att.com/mobilitydiscounts</Reference>
                    att.com/mobilitydiscounts
                </Word>__ for available billing discounts and pricing options for broadband service bundled with other
                services like video, phone, and wireless service, and use of your own equipment like modems and routers.
                Speeds Provided with Plan Typical Download Speed 152-472 Mbps (5G+) 57-337 Mbps (5G) 13-79 Mbps (4G LTE)
                Typical Upload Speed 5-30 Mbps (5G+) 3-21 Mbps (5G) 1-11 Mbps (4G LTE) Typical Latency 21-37 ms (5G+) 23-44
                ms (5G) 28-53 ms (4G LTE) Performance varies. See coverage at __<Word>
                    <Reference>https://www.att.com/maps/wireless-coverage.html</Reference>
                    att.com/wirelesscoverage
                </Word>__ Data Included with Monthly Price __<Word>
                    <Reference>https://www.att.com/support/article/wireless/KM1409222/</Reference>
                    att.com/4gbplan
                </Word>__ 4GB Charges for Additional Data Usage $10.00/2GB Network Management __<Word>
                    <Reference>https://about.att.com/sites/broadband/network</Reference>
                    att.com/bbnetwork
                </Word>__ Privacy __<Word>
                    <Reference>https://about.att.com/privacy.html</Reference>
                    att.com/privacy
                </Word>__ Customer Support Contact Us: __<Word>
                    <Reference>https://www.att.com/support/</Reference>
                    att.com/support
                </Word>__ | __&#91;(800) 331-0500&#93;(tel:8003310500)__ Learn more about the terms used on this label by
                visiting the Federal Communications Commission's Consumer Resource Center. __<Word>
                    <Reference>https://www.fcc.gov/consumers</Reference>
                    fcc.gov/consumers
                </Word>__ M0005937974180195265920047
            </Paragraph>
            <Paragraph>
                Sounds like I'd pay $40 with paperless billing and autopay. And what I switch to that and tell them no
                roaming (are we sure they can grant this?)
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:37:00.647563Z"
        >
            <Origin>019e0fbd-57cd-7eb4-80bd-208b5db27cfe</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me run the math and answer the roaming question precisely.</Paragraph>
            <Action>
                Searched the web for “AT&amp;T Prepaid plan pricing 2026 autopay no International Day Pass roaming abroad”
            </Action>
            <Paragraph>The math first, because the real comparison matters here.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    AT&amp;T 4GB at $40/mo isn't actually $40/mo.
                </Word> The Broadband Facts label you pasted lists $4.92 in mandatory monthly provider fees on top of the
                $40 plan price (Admin Cost Recovery $3.99, Federal USF $0.70, State Telecom Surcharge $0.18, MTA $0.05),
                plus state/local taxes which in most jurisdictions add another $3–6/month. All-in you're realistically
                looking at <Word>
                    <Bold />
                    $48–50/month
                </Word>, or ~$580/year. Plus a $35 activation/plan-change fee at the start.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    US Mobile equivalent: $5–12/month all-in
                </Word>, or $60–150/year.
            </Paragraph>
            <Paragraph>
                The "AT&amp;T tax" you'd be paying for staying postpaid is $35–45/month, or $420–540/year. And you'd be
                paying it for: 4GB of US data you can't use (you're in Tbilisi), US mobile hotspot you can't use,
                Canada/Mexico roaming you rarely use, and AT&amp;T's brand. Banks don't see that brand — they see the
                carrier lookup, and US Mobile's lookup says "real US mobile" the same way AT&amp;T's does.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Can AT&amp;T block international roaming on the line? Yes, but with caveats.
                </Word>
            </Paragraph>
            <Paragraph>
                The capability exists. Their International Department at +1-314-925-6925 has a network-level flag that
                disables roaming on a specific line. Multiple AT&amp;T forum threads with their own ACE moderators reference
                it. The asterisks:
            </Paragraph>
            <Paragraph>
                The first rep you get may not know the procedure. About a third of reports describe needing to escalate or
                call back to find someone who does. Be persistent and ask explicitly for "international roaming block at the
                network level, not just removing the Day Pass feature."
            </Paragraph>
            <Paragraph>
                There are scattered reports of the block silently lifting after billing cycle changes, plan changes, or
                account-side maintenance — i.e., AT&amp;T re-enabling something they shouldn't have. Not common, but it
                happens. You'd want to verify the block monthly by checking your bill.
            </Paragraph>
            <Paragraph>
                AT&amp;T's WiFi Calling reliability for permanent overseas residents is mediocre. They built it for
                travelers who come home periodically, not for permanent expats. Some users report registration failures
                after extended periods abroad that require contacting support to reset.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you want to stay with AT&amp;T at all, the actually-correct AT&amp;T option is Prepaid, not Postpaid 4GB.
                </Word>
            </Paragraph>
            <Paragraph>
                AT&amp;T Prepaid runs on the same network as Postpaid. "International data roaming not available" by default
                — there's no IDP feature to accidentally trigger because Prepaid doesn't have IDP. You'd add the
                International Travel Add-On only if you actually wanted to use the line abroad (you don't; WiFi Calling
                handles that). AT&amp;T Prepaid 5GB is ~$25/month with autopay, $30 without — about half the cost of
                Postpaid 4GB, structurally safer, and same network. The downside: Prepaid customer service is worse than
                Postpaid, and the eSIM transition from Postpaid to Prepaid requires going through AT&amp;T's flow which has
                its own activation quirks.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd actually do, in order:
                </Word>
            </Paragraph>
            <Paragraph>
                Today, call +1-314-925-6925 and block international roaming on the current postpaid line. Stops the $218
                bills regardless of which destination you pick. This is independent of everything else.
            </Paragraph>
            <Paragraph>
                Then over the next 1–2 weeks, attempt the US Mobile eSIM port from Tbilisi. The activation works for most
                people on US-variant iPhones, and you save ~$430/year vs the AT&amp;T 4GB plan. If activation hits a wall
                their support can't unblock, fall back to AT&amp;T Prepaid 5GB at ~$25/mo (saves you ~$280/year vs Postpaid
                4GB and is structurally more roaming-safe).
            </Paragraph>
            <Paragraph>
                The Postpaid 4GB plan is the worst of both worlds: you're paying postpaid prices for a service you'd be
                using like a prepaid line, with the IDP risk surface still attached even if you've blocked roaming. If the
                question is "stay with AT&amp;T or switch," staying with AT&amp;T can be defensible. If the question is
                "stay with AT&amp;T 4GB Postpaid or switch," I'd switch — and if you decide to stay, do Prepaid.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:37:40.023206Z"
        >
            <Origin>019e0fbf-55d6-7c0f-9b2c-2e4b58643073</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Why don't we have the interational roaming problem with us mobikle</Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:38:12.672352Z"
        >
            <Origin>019e0fbf-55d6-7f05-ad2b-09cafd52ea02</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Architectural answer, and it's actually elegant.</Paragraph>
            <Paragraph>
                AT&amp;T owns its own cellular network and has bilateral roaming agreements with foreign carriers like
                Magticom. Those agreements work like this: Magticom lets your AT&amp;T-numbered phone register on their
                towers, and AT&amp;T pays Magticom a wholesale rate per minute, text, and MB consumed. AT&amp;T then bills
                you to recover that cost — that's what IDP is. International roaming is <Word>
                    <Bold />
                    enabled by default
                </Word> on AT&amp;T postpaid lines because AT&amp;T wants the roaming revenue. To stop it, you have to opt
                <Word>
                    <Emphasis />
                    out
                </Word> by asking them to flip the flag, and even then it's not bulletproof because the default state of the
                system is "let this line roam."
            </Paragraph>
            <Paragraph>
                US Mobile is an MVNO. They own zero cellular infrastructure — they lease capacity from T-Mobile or Verizon,
                and their margins are tiny. They don't have direct foreign roaming agreements, and enabling them on every
                customer line by default would cost them money they don't have. So international roaming is <Word>
                    <Bold />
                    disabled by default
                </Word>. The way it works on US Mobile: if you want to roam, you explicitly buy a Pay-As-You-Go credit
                balance and toggle "International Roaming" on in your dashboard. Until you do that, your home carrier (US
                Mobile) refuses to authorize foreign tower registration when Magticom asks. Your phone shows "No Service" on
                the US Mobile eSIM, and no charges are possible because no cellular connection is possible.
            </Paragraph>
            <Paragraph>
                There's no IDP equivalent on US Mobile because there's no roaming feature to attach it to. The default state
                of the system is "this line cannot roam." WiFi Calling handles US-side reachability over your home internet
                — that path doesn't touch the cellular network at all, so the carrier's roaming policies are irrelevant to
                it.
            </Paragraph>
            <Paragraph>
                Same architecture on Tello, Red Pocket, Ultra Mobile, basically every MVNO. The reason your AT&amp;T line
                keeps bleeding money isn't because you've configured something wrong — it's because AT&amp;T's product is
                structurally designed to bill you for roaming, and you have to actively fight it. The MVNO products are
                structurally designed to <Word>
                    <Emphasis />
                    not
                </Word> bill you for roaming, and you'd have to actively enroll to get charged. You're switching from a
                product that's hostile to your use case to one that's neutral toward it.
            </Paragraph>
            <Paragraph>
                That's also why the "block roaming" call to AT&amp;T is just a stopgap. You're patching a default behavior
                that the system will keep trying to revert to. Switching carriers replaces the default itself.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:39:19.920711Z"
        >
            <Origin>019e0fc0-dd64-77b2-88fd-c578295f4e0d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>And I will get text messages? That is critical</Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:39:59.934885Z"
        >
            <Origin>019e0fc0-dd64-7d15-820c-33283b7753e6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, and here's the clean version of why I'm confident: <Word>
                    <Bold />
                    you're already doing this exact thing right now on AT&amp;T.
                </Word> You're receiving 2FA SMS in Tbilisi via WiFi Calling. That's the proof that the architecture works
                for you.
            </Paragraph>
            <Paragraph>
                Switching to US Mobile changes who you pay, but doesn't change the delivery path. WiFi Calling is the same
                standard (IMS over IPSec) on every US carrier. Bank sends SMS to your US number → US Mobile's network sees
                your phone is registered via WiFi Calling → SMS routes over the internet to your phone in Tbilisi → arrives
                in Messages. Same flow you have today, different invoice.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest caveats:
                </Word>
            </Paragraph>
            <Paragraph>
                WiFi Calling needs to be registered when the SMS arrives. It usually is, but registration can drop briefly
                during phone reboots, OS updates, network handoffs, or extended sleep periods. When it drops, the SMS queues
                at the carrier and delivers when WiFi Calling re-registers — typically seconds to a minute. Occasionally a
                2FA code will time out before delivery. This happens on AT&amp;T too; it's a function of WiFi Calling, not
                the carrier.
            </Paragraph>
            <Paragraph>
                A small number of bank SMS shortcodes are quirky on specific carriers' WiFi Calling. The 99%+ case works
                fine — Chase, Citi, PayPal, Mercury, IBKR, Fidelity, Schwab, BofA, IRS, SSA all standardly do. But you can't
                know with certainty until you've tested with <Word>
                    <Emphasis />
                    your specific accounts on the new carrier
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The mitigation, which I'd do regardless:
                </Word>
            </Paragraph>
            <Paragraph>
                Keep AT&amp;T alive for one full billing cycle after the US Mobile port completes — yes, paying both for ~30
                days. Use that month to log into each of your five accounts (Chase, Citi, PayPal, Mercury, IBKR) and trigger
                a test SMS to verify it arrives on the US Mobile line. Set up TOTP authenticator app 2FA wherever it's
                offered (Mercury, IBKR, PayPal, Citi all support it; Chase increasingly does) so SMS isn't your only path.
                Once everything's verified, kill AT&amp;T.
            </Paragraph>
            <Paragraph>
                The one-month overlap costs you maybe $50. The downside risk if you skip it and discover an SMS delivery
                issue with no AT&amp;T fallback is several hundred in time and stress. Cheap insurance.
            </Paragraph>
            <Paragraph>
                Net answer: yes, you'll get text messages. With the same reliability you have today on AT&amp;T, give or
                take small carrier-specific edge cases that the test month will surface.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:40:14.345797Z"
        >
            <Origin>019e0fc1-b223-7b22-9f3c-59925e744765</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No I get them on the street too. No WIFII need those to happen when out</Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:40:55.368555Z"
        >
            <Origin>019e0fc1-b223-7a8e-b047-a9c24b76b765</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Got it, this matters. The good news: you're already doing the thing that makes this work, and switching
                carriers preserves it.
            </Paragraph>
            <Paragraph>
                Here's what's actually happening when you receive SMS on the street: WiFi Calling is misnamed. It's not
                really "WiFi" Calling — it's "internet calling," and on iPhone it rides on whatever internet connection your
                phone has. When you're walking around Tbilisi with Magticom providing cellular data through its eSIM, your
                iPhone's AT&amp;T WiFi Calling client uses <Word>
                    <Emphasis />
                    that
                </Word> Magticom data connection to maintain its registration with AT&amp;T's servers. The phone treats
                Magticom's LTE/5G connection as the "WiFi" for WiFi Calling purposes. SMS comes in to your AT&amp;T number,
                AT&amp;T pushes it over the internet via Magticom's data path, it arrives on your phone. No actual WiFi
                network involved.
            </Paragraph>
            <Paragraph>
                This works because of an iOS setting: Settings → Cellular → Wi-Fi Calling → "While Roaming" → On. With that
                on, WiFi Calling will use any available internet, including foreign cellular data. With it off, WiFi Calling
                only works on actual WiFi networks. Yours is on, which is why you have street SMS working today.
            </Paragraph>
            <Paragraph>
                The same mechanism works on US Mobile. WiFi Calling is a standardized protocol (IMS over IPSec) — every
                major US carrier implements it, and the iPhone client doesn't really care which carrier's WiFi Calling
                registration it's holding open. As long as Magticom's cellular data connection is up, US Mobile's WiFi
                Calling client can reach US Mobile's servers and route SMS through it. Carrier label will show "US Mobile
                Wi-Fi" instead of "AT&amp;T Wi-Fi" but the behavior is identical.
            </Paragraph>
            <Paragraph>
                US Mobile's Light Speed network (T-Mobile) has particularly robust WiFi Calling, and T-Mobile's IMS
                infrastructure handles non-WiFi internet sources reliably. Their Warp network (Verizon) also works but
                Verizon has historically been a touch more conservative about non-WiFi sources — usually fine, occasionally
                finicky. If reliability while mobile is the priority, <Word>
                    <Bold />
                    pick US Mobile's Light Speed (T-Mobile-based) over Warp (Verizon-based)
                </Word> for this reason.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One verification step worth doing during the overlap month:
                </Word> after activating US Mobile, with both lines active, walk outside, away from any WiFi. Check that the
                carrier label for the US Mobile line shows "US Mobile Wi-Fi" (or similar — the key word is "Wi-Fi" appearing
                somewhere). Trigger a test 2FA SMS from one of your bank accounts. If it arrives on the street with no WiFi
                network in sight, your setup is preserved. If it doesn't, you have ~30 days to debug or fall back to
                AT&amp;T while you do.
            </Paragraph>
            <Paragraph>
                There's nothing in your current usage pattern that won't survive the switch. The architecture you're already
                running — Magticom for data, US line on eSIM, WiFi Calling using Magticom data as the transport — is exactly
                the architecture you'd run on US Mobile. Same flow, different invoice.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:42:15.665733Z"
        >
            <Origin>019e0fc3-8627-7549-a573-1b23f567d9ac</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so let's switch to US Mobile/. Don't worry about callng AT&amp;T aboiut the romaing. We are getting rid
                of them. What is the plan? Write a succinct editable artifact
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:43:33.507504Z"
        >
            <Origin>019e0fc3-8628-72bb-9822-d92b23eb2888</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/att-to-usmobile-migration.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Plan's in the artifact, edit freely. Most likely thing to adjust as you go: which specific US Mobile plan
                tier you pick once you see their current pricing — they shuffle promos. Light Speed is the network choice
                that matters; the plan tier is just whichever cheapest one supports unlimited talk/text + WiFi Calling.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:49:17.306841Z"
        >
            <Origin>019e0fc9-f4fc-79bb-b2ff-0ee3aadbcd30</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No sim restrictions on carrier lock</Paragraph>
            <Paragraph>
                I can choose wifi calling for each of my US and georgian numbers. Do I want to turn US off? Also I din't see
                a while roaming option for wifi calling in iOS
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:50:01.604400Z"
        >
            <Origin>019e0fc9-f4fc-7816-ae32-ea303443a789</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two corrections to make:</Paragraph>
            <Action>
                Searched the web for “iPhone iOS 18 WiFi Calling settings "While Roaming" toggle removed dual eSIM”
            </Action>
            <Paragraph>
                Two corrections — I was wrong on the "While Roaming" thing and need to address the WiFi Calling toggle
                question directly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The "While Roaming" toggle isn't a thing in current iOS.
                </Word> I was thinking of a setting that either doesn't exist anymore or never existed for WiFi Calling
                specifically (it exists for Data Roaming, which is a different setting). Modern iOS WiFi Calling is just a
                single toggle per line: on or off. When it's on, iOS automatically uses whatever internet connection is
                available — WiFi network <Word>
                    <Emphasis />
                    or
                </Word> cellular data from another active line on the phone. No "but only when I say so" sub-setting. My
                mistake.
            </Paragraph>
            <Paragraph>
                This means the mechanism is simpler than I described: with US line WiFi Calling <Word>
                    <Bold />
                    on
                </Word>, your iPhone automatically uses Magticom's cellular data as the internet path for the US line
                whenever you're not on actual WiFi. That's exactly how you're getting street SMS today. No extra
                configuration needed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Do not turn WiFi Calling off on the US line. Leave it on.
                </Word>
            </Paragraph>
            <Paragraph>
                WiFi Calling on the US line is the entire reason your US number works in Tbilisi. SMS to your US number
                arrives via the US carrier's WiFi Calling path — which uses whatever internet your phone has, including
                Magticom's data. Turn that toggle off and your US number goes dark — no SMS, no calls, nothing reaches you.
                Same will be true on US Mobile.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Georgian (Magticom) line's WiFi Calling toggle doesn't really matter for your use case.
                </Word> Magticom works natively on Georgian cellular towers — it doesn't need WiFi Calling to function. The
                toggle for the Magticom line just adds the option of receiving Georgian calls/SMS over WiFi when you're
                somewhere with bad cell signal (a thick-walled cafe basement, etc.). Leave it on if Magticom supports it;
                doesn't hurt anything.
            </Paragraph>
            <Paragraph>So your config should be:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        US line:
                    </Word> Wi-Fi Calling ON
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Magticom line:
                    </Word> Wi-Fi Calling either, doesn't matter
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        US line:
                    </Word> Data Roaming OFF (Settings → Cellular → US line → Data Roaming)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Magticom line:
                    </Word> the default cellular data line, "Allow Cellular Data Switching" OFF
                </Line>
            </Paragraph>
            <Paragraph>
                That's it. The same configuration carries over to US Mobile after the port — just swap "US line = AT&amp;T"
                for "US line = US Mobile" in your head and the rest is unchanged.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:54:25.725055Z"
        >
            <Origin>019e0fce-aeb5-7300-bc2d-dfbb92c493e1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here's the at&amp;t app page. Its not my at&amp;t. Isee that one number. But what do I havet o grab. Look up
                instructions for this app
            </Paragraph>
            <Attachment>Uploaded “1778381636040_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T02:55:17.443766Z"
        >
            <Origin>019e0fce-aeb5-7d94-8e05-0fea73f5fbff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me look up the current process for the AT&amp;T app specifically.</Paragraph>
            <Action>Searched the web for “AT&amp;T app get number transfer PIN port out 2026 wireless instructions”</Action>
            <Paragraph>
                That's the consumer AT&amp;T app (the unified rebrand of myAT&amp;T). Your screenshot shows the Account
                view. You need four pieces of info from AT&amp;T to give to US Mobile, and one prerequisite check.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to grab:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Your 10-digit US phone number
                    </Word> — you know this one.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Account number (BAN).
                    </Word> What you see on the screenshot under "Wireless" — <Word>
                        <Verbatim />
                        512173974171
                    </Word> — that's your Billing Account Number, not your phone number. Save it. (Confirm: tap "See bill
                    details" — the BAN is also there at the top of the bill.)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Billing ZIP code.
                    </Word> The ZIP on the account. Tap the gear icon (top right) → look for billing or address info.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Number Transfer PIN
                    </Word> — you have to generate this; it's a 6-digit one-time code valid for <Word>
                        <Bold />
                        4 days
                    </Word> after creation.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Prerequisite — turn off Wireless Account Lock first.
                </Word> AT&amp;T enables this security feature by default to prevent unauthorized ports. If it's on, the PIN
                request will fail or the port itself will fail. Find it in: gear icon → look for "Account info" or "Wireless
                Account Lock" → toggle off. AT&amp;T will send a one-time code to your phone to confirm. Do this <Word>
                    <Emphasis />
                    before
                </Word> generating the transfer PIN.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How to generate the Number Transfer PIN — two methods, pick whichever works:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Method A (easiest, most reliable): Dial \
                </Word>PORT.<Word>
                    <Emphasis />
                     From the AT&amp;T number itself (works fine via WiFi Calling), open Phone app and dial  0  (which spells \
                </Word>PORT). Follow the voice prompts — enter your account passcode, press 1 to request a new transfer PIN.
                AT&amp;T texts you the 6-digit PIN within seconds. Your transfer PIN will be valid for four days after you
                create it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Method B (in-app): tap your profile/name area or the gear icon
                </Word> → look for one of: "Manage profile," "Manage account," or "People &amp; permissions" → then
                "Transfer phone number" → "Request a new PIN." The exact path varies by app version. "Open the myAT&amp;T
                app → sign in and choose your profile icon → select Manage or remove account → tap Settings → scroll to
                Transfer phone number → select Request a new PIN to display your Number Transfer PIN."
            </Paragraph>
            <Paragraph>
                If Method B's menu items don't match what you see, just use Method A — <Word>
                    <Verbatim />
                    *PORT
                </Word> is identical regardless of app version and is what AT&amp;T's own support page recommends first.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Don't generate the PIN until you're ready to start signup at US Mobile.
                </Word> It expires in 4 days. Generate it the day you're going to do the US Mobile signup, not earlier.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Final list to copy somewhere safe before US Mobile signup:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Phone number: <Word>
                        <Verbatim />
                        (your 10-digit number)
                    </Word>
                </Line>
                <Line>
                    Account number (BAN): <Word>
                        <Verbatim />
                        512173974171
                    </Word>
                </Line>
                <Line>
                    Billing ZIP: <Word>
                        <Verbatim />
                        _____
                    </Word>
                </Line>
                <Line>
                    Account holder name: <Word>
                        <Verbatim />
                        DOUGLAS RUBINO
                    </Word>
                </Line>
                <Line>
                    Transfer PIN: <Word>
                        <Verbatim />
                        _______
                    </Word> (generate just-in-time)
                </Line>
            </Paragraph>
            <Paragraph>Once you have those five, you're ready to start at usmobile.com.</Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:58:17.853138Z"
        >
            <Origin>019e0fd2-38ac-76f0-b79b-1963ead77188</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can I get this from the website? I am not seeing on the app. Might be easier and you might know it better
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:58:42.202947Z"
        >
            <Origin>019e0fd2-38ac-7b16-8d7d-f4ca57f2d11e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “att.com website transfer PIN port out 2026 profile settings location step by step”
            </Action>
            <Paragraph>Yes, the website path is generally cleaner. From att.com:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 1: Sign in.
                </Word> Go to <Word>
                    <Bold />
                    att.com
                </Word> and sign in with your AT&amp;T credentials.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2: Open your profile.
                </Word> Top-right corner — click your name or the profile icon, then <Word>
                    <Bold />
                    Manage profile
                </Word> (or <Word>
                    <Bold />
                    Profile
                </Word> depending on what you see).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 3: People &amp; permissions.
                </Word> From the profile menu, click <Word>
                    <Bold />
                    People &amp; permissions
                </Word>, then <Word>
                    <Bold />
                    Wireless
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 4: Find Transfer phone number.
                </Word> Scroll down on that page until you see <Word>
                    <Bold />
                    Transfer phone number
                </Word> as a section.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 5: Request a new PIN.
                </Word> Click <Word>
                    <Bold />
                    Request a new PIN
                </Word>. A 6-digit PIN displays on screen instantly. It's valid for <Word>
                    <Bold />
                    4 days
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 6: Grab the account number while you're in there.
                </Word> The BAN (account number) appears in the top-right of any page in your AT&amp;T account, or on <Word>
                    <Bold />
                    My bill
                </Word> → top of the bill PDF. Yours is <Word>
                    <Verbatim />
                    512173974171
                </Word> from the screenshot — confirm it matches.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 7: Confirm billing ZIP.
                </Word> Profile → <Word>
                    <Bold />
                    Contact info
                </Word> or <Word>
                    <Bold />
                    Billing address
                </Word> — note the 5-digit ZIP on the account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Before you click Request a new PIN, two things:
                </Word>
            </Paragraph>
            <Paragraph>
                Make sure <Word>
                    <Bold />
                    Wireless Account Lock is OFF
                </Word>. From the same profile area, find <Word>
                    <Bold />
                    Account info
                </Word> or <Word>
                    <Bold />
                    Wireless Account Lock
                </Word> and toggle off if it's on. Otherwise the PIN request will fail. AT&amp;T texts you a one-time
                confirmation code to disable it.
            </Paragraph>
            <Paragraph>
                Don't generate the PIN until you're ready to start US Mobile signup <Word>
                    <Emphasis />
                    that same day
                </Word>. The 4-day window is real and short.
            </Paragraph>
            <Paragraph>
                If the website's menu names don't match what I described — AT&amp;T reshuffles the UI periodically — just
                dial <Word>
                    <Bold />
                    \*7678
                </Word> (\*PORT) from your iPhone using the AT&amp;T line. It's the fallback that works regardless of UI
                changes: enter your account passcode, press 1, AT&amp;T texts the PIN to you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Final list to copy somewhere before US Mobile signup:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Phone number: <Word>
                        <Verbatim />
                        (your 10-digit number)
                    </Word>
                </Line>
                <Line>
                    Account number: <Word>
                        <Verbatim />
                        512173974171
                    </Word>
                </Line>
                <Line>
                    Billing ZIP: <Word>
                        <Verbatim />
                        _____
                    </Word>
                </Line>
                <Line>
                    Account holder: <Word>
                        <Verbatim />
                        DOUGLAS RUBINO
                    </Word>
                </Line>
                <Line>
                    Transfer PIN: <Word>
                        <Verbatim />
                        _______
                    </Word> (just-in-time)
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T02:59:56.599912Z"
        >
            <Origin>019e0fd3-ba94-7691-9971-36209354bc56</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Youi get this on the profile:</Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://www.att.com/?customerType=personal</Reference>
                    Personal
                </Word><Word>
                    <Reference>https://www.business.att.com/</Reference>
                    Business
                </Word> <Word>
                    <Reference>https://www.att.com/stores/</Reference>
                    Find a store
                </Word>Ver en español
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Shop</Line>
                <Paragraph>
                    <List />
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Paragraph>
                <Line>Deals</Line>
                <Paragraph>
                    <List />
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Paragraph>
                <Line>AT&amp;T Difference</Line>
                <Paragraph>
                    <List />
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Paragraph>
                <Line>Support</Line>
                <Paragraph>
                    <List />
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>33 notifications</Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Paragraph>
            <Paragraph>Start of main content</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.att.com/acctmgmt/overview</Reference>
                        Account
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.att.com/acctmgmt/mypaymentcenter</Reference>
                        Payments
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.att.com/acctmgmt/billing/mybillingcenter</Reference>
                        Billing
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.att.com/acctmgmt/myprofile/overview</Reference>
                        Profile
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.att.com/securityprofile</Reference>
                        Security
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://andmorebenefits.att.com/root-discovery?isLogged=true</Reference>
                        &amp;More Benefits
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Profile Your info Update your AT&amp;T ID, email, and phone number Account info Manage your account settings
                and the primary account owner’s info. Settings Add or remove account and manage account security.
                Permissions Manage online and in-store account access. Communications Manage how we contact you about your
                accounts Privacy choices Review your privacy options. Marketing Opt in to text and email marketing offers.
                You are on the your-info page AT&amp;T ID doug.rubino@gmail.com Edit Password <Word>
                    <Bold />
                    *
                </Word>*** Edit AT&amp;T Wireless number 516.457.1715 Edit Remove Recovery email doug.rubino@gmail.com Edit
                Name DOUGLAS RUBINO Edit Want to change the name that appears on your bill? Call us at 800.288.2020.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:00:19.839262Z"
        >
            <Origin>019e0fd3-ba94-7c14-acc2-8ad4ab27ddb7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Now you have your phone number — <Word>
                    <Bold />
                    516-457-1715
                </Word> (Long Island, makes sense). Combined with what we already have, the data list is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Phone number: <Word>
                        <Bold />
                        516-457-1715
                    </Word>
                </Line>
                <Line>
                    Account number (BAN): <Word>
                        <Bold />
                        512173974171
                    </Word>
                </Line>
                <Line>
                    Account holder: <Word>
                        <Bold />
                        DOUGLAS RUBINO
                    </Word>
                </Line>
                <Line>Billing ZIP: still need</Line>
                <Line>Transfer PIN: still need (generate last)</Line>
            </Paragraph>
            <Paragraph>
                You're on the "Your info" sub-page right now. Use the other items in that left/top navigation:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Click "Permissions"
                </Word> — this is where the Transfer phone number option lives. Look for a "Wireless" section, then scroll
                for <Word>
                    <Bold />
                    Transfer phone number
                </Word> → <Word>
                    <Bold />
                    Request a new PIN
                </Word>. (Don't click it yet — wait until US Mobile signup day.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Click "Account info"
                </Word> — find the billing address. Grab the 5-digit ZIP. Save it with the rest.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Click "Settings"
                </Word> — look for <Word>
                    <Bold />
                    Wireless Account Lock
                </Word>. If it's ON, toggle OFF before requesting the PIN. AT&amp;T will text a one-time code to confirm. If
                it's already off, nothing to do.
            </Paragraph>
            <Paragraph>
                If Permissions doesn't show the Transfer phone number option (sometimes AT&amp;T puts it under Settings
                instead, depending on account type), check Settings as well. Failing both, dial <Word>
                    <Bold />
                    \*7678
                </Word> from the iPhone — that always works.
            </Paragraph>
            <Paragraph>
                Once you have the ZIP saved, you're ready for US Mobile signup. Generate the PIN that same day, then go
                straight into US Mobile's port-in flow.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:01:06.131889Z"
        >
            <Origin>019e0fd4-c9c2-7674-8fac-a3b9ecfc5ebf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>We get this on permissions:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.att.com/acctmgmt/mypaymentcenter</Reference>
                        Payments
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.att.com/acctmgmt/billing/mybillingcenter</Reference>
                        Billing
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.att.com/acctmgmt/myprofile/overview</Reference>
                        Profile
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.att.com/securityprofile</Reference>
                        Security
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://andmorebenefits.att.com/root-discovery?isLogged=true</Reference>
                        &amp;More Benefits
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Profile Your info Update your AT&amp;T ID, email, and phone number Account info Manage your account settings
                and the primary account owner’s info. Settings Add or remove account and manage account security.
                Permissions Manage online and in-store account access. Communications Manage how we contact you about your
                accounts Privacy choices Review your privacy options. Marketing Opt in to text and email marketing offers.
                You are on the permissions page Wireless Account 512173974171 In-store access (Retail Authorized Users)
                Retail Authorized Users can upgrade devices, change plans, and make payments in stores. Keep in mind: You
                can have up to 10 authorized users, and they need to be 18 years or older. Learn more about authorized users
                Secondary online access users Secondary users can make payments and manage your account online. You can also
                transfer primary online access to a secondary user. Learn more about secondary users. Learn more about
                secondary users.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:01:22.882632Z"
        >
            <Origin>019e0fd4-c9c2-78b2-a12a-cd61e015f639</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                AT&amp;T moved the option. The website doesn't reliably surface it anymore — happens because they don't
                actually want people porting out. <Word>
                    <Bold />
                    Just use \*PORT instead.
                </Word> It's faster than UI hunting.
            </Paragraph>
            <Paragraph>
                But first, <Word>
                    <Bold />
                    click "Settings"
                </Word> in that left nav — that's where you'll find:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Wireless Account Lock
                    </Word> — toggle OFF if it's on
                </Line>
                <Line>Possibly the Transfer phone number option (sometimes it lives here instead of Permissions)</Line>
            </Paragraph>
            <Paragraph>
                If Settings doesn't show Transfer phone number either, skip the website entirely and do this from the
                iPhone:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Dial  0  (\*PORT)
                </Word> from your AT&amp;T line. Phone app, type <Word>
                    <Verbatim />
                    *7678
                </Word>, hit call. WiFi Calling will route it through to AT&amp;T fine.
            </Paragraph>
            <Paragraph>You'll get an automated voice menu:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    It'll ask you to verify your account — enter your <Word>
                        <Bold />
                        4-digit AT&amp;T account passcode
                    </Word> (the one you set up; if you don't remember it, AT&amp;T can reset it).
                </Line>
                <Line>
                    Press <Word>
                        <Bold />
                        1
                    </Word> to request a new transfer PIN.
                </Line>
                <Line>Within ~30 seconds, AT&amp;T sends you an SMS with the 6-digit PIN.</Line>
                <Line>PIN is good for 4 days.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For the billing ZIP
                </Word> — also in your AT&amp;T website nav, click <Word>
                    <Bold />
                    Account info
                </Word> (one above Permissions in the left list). The billing address with ZIP is on that page.
            </Paragraph>
            <Paragraph>So the order of operations now:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Settings
                    </Word> — confirm Wireless Account Lock is OFF
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Account info
                    </Word> — grab the billing ZIP
                </Line>
                <Line>Don't generate PIN yet — wait until you're starting US Mobile signup</Line>
                <Line>
                    When ready: dial <Word>
                        <Verbatim />
                        *7678
                    </Word> from iPhone, get PIN via SMS, immediately use it at usmobile.com
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:02:15.429157Z"
        >
            <Origin>019e0fd5-d9b9-7155-95d0-f55fb399fa61</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Look settings has requesting a pin:</Paragraph>
            <Paragraph>
                Profile Your info Update your AT&amp;T ID, email, and phone number Account info Manage your account settings
                and the primary account owner’s info. Settings Add or remove account and manage account security.
                Permissions Manage online and in-store account access. Communications Manage how we contact you about your
                accounts Privacy choices Review your privacy options. Marketing Opt in to text and email marketing offers.
                You are on the settings page Wireless Account 512173974171 People and devices D DOUGLAS RUBINO 5164571715
                Apple iPhone 15 Pro Caller ID DOUGLAS RUBINO Edit Contact email DOUG.RUBINO@GMAIL.COM Passcode •••• Edit
                Manage extra security Transfer phone number You’ll need a number transfer PIN when you move your phone lines
                from AT&amp;T to another provider. If you want to move your line from AT&amp;T to another provider you’ll
                need to <Word>
                    <Reference>https://www.att.com/support/article/wireless/KM1447526/</Reference>
                    request a number transfer PIN
                </Word>. You’ll also need to __<Word>
                    <Reference>https://www.att.com/support/article/wireless/KM1008728/</Reference>
                    submit a request to unlock your phone
                </Word>__. Request a PIN to give to a new service provider. This cancels any previous PIN request. But,
                don't forget you're covered by the AT&amp;T Guarantee. With AT&amp;T, you get the connectivity you depend
                on, deals you want, and the prompt, friendly service you deserve. Talk to one of our loyalty experts about
                the AT&amp;T Guarantee by calling 800.331.0500. Cancel a PIN when you don’t need it or to prevent fraud.
                This cancels any of your active PINs or pending requests. Add an account Manage multiple accounts by adding
                them to your AT&amp;T ID. Note: Linking doesn’t change your billing. Link accounts Delink account You can
                remove an account that you previously linked. Note: You can’t remove combined or suspended accounts. Delink
                accounts
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:02:31.556905Z"
        >
            <Origin>019e0fd5-d9b9-7ac0-bf6d-d6c4424a6f8c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Found it. Two more things to do before clicking that PIN button.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Click "Manage extra security"
                </Word> (right under the passcode field on this same Settings page). That's where Wireless Account Lock
                lives — toggle it OFF if it's on. If it's already off, nothing to do.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Click "Account info"
                </Word> in the left nav — grab the 5-digit billing ZIP code.
            </Paragraph>
            <Paragraph>Then you have everything except the PIN. Final list:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Phone number: <Word>
                        <Bold />
                        516-457-1715
                    </Word>
                </Line>
                <Line>
                    Account number: <Word>
                        <Bold />
                        512173974171
                    </Word>
                </Line>
                <Line>
                    Account holder: <Word>
                        <Bold />
                        DOUGLAS RUBINO
                    </Word>
                </Line>
                <Line>Billing ZIP: ___ (about to grab)</Line>
                <Line>Transfer PIN: ___ (last step, just-in-time)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Don't click "Request a PIN" yet.
                </Word> It's good for only 4 days. Open usmobile.com in another tab first, get to the point in their signup
                flow where they ask for the transfer PIN, <Word>
                    <Emphasis />
                    then
                </Word> click Request a PIN here, copy the 6-digit code, paste it into US Mobile, submit. That way you're
                not racing the clock.
            </Paragraph>
            <Paragraph>
                When you do click it, AT&amp;T may show a retention prompt (the "AT&amp;T Guarantee" pitch you saw). Click
                through it. They might also call or text you with a "wait, please don't go" offer in the next day or two —
                ignore.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:06:20.072436Z"
        >
            <Origin>019e0fd9-9448-725b-9ebc-026e6c30ba6c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are you talking aboiut my billing address? Here it is</Paragraph>
            <Attachment>Uploaded “1778382369466_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T03:06:41.843398Z"
        >
            <Origin>019e0fd9-9448-7ba0-bde9-3db74fbd18a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that's it. <Word>
                    <Bold />
                    Billing ZIP: 27330
                </Word> (Sanford, NC — your Traveling Mailbox forwarding address, makes sense).
            </Paragraph>
            <Paragraph>
                If you just updated the billing address (the green "Billing address updated!" suggests so), wait a few hours
                before starting the US Mobile port so AT&amp;T's system fully propagates the change. If the address has been
                on the account for a while, you can proceed whenever.
            </Paragraph>
            <Paragraph>You now have everything except the PIN:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Phone number: <Word>
                        <Bold />
                        516-457-1715
                    </Word>
                </Line>
                <Line>
                    Account number: <Word>
                        <Bold />
                        512173974171
                    </Word>
                </Line>
                <Line>
                    Account holder: <Word>
                        <Bold />
                        DOUGLAS RUBINO
                    </Word>
                </Line>
                <Line>
                    Billing ZIP: <Word>
                        <Bold />
                        27330
                    </Word>
                </Line>
                <Line>Transfer PIN: still to generate (last)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing you haven't confirmed yet:
                </Word> Wireless Account Lock. Go back to Settings → click <Word>
                    <Bold />
                    "Manage extra security"
                </Word> below the passcode. If the lock is on, toggle it off (AT&amp;T texts a one-time code to confirm). If
                it's already off, nothing to do. The port will fail if it's on, so worth verifying before proceeding.
            </Paragraph>
            <Paragraph>
                Once that's done, you're ready to open usmobile.com and start the port-in flow. Generate the AT&amp;T
                transfer PIN at the moment US Mobile asks for it, not before.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:08:12.148591Z"
        >
            <Origin>019e0fdb-4aee-7454-b9d2-ec99dddad47d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here we go! Add that to the list. Security is in the right state</Paragraph>
            <Attachment>Uploaded “1778382479031_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T03:08:30.899929Z"
        >
            <Origin>019e0fdb-4aee-7f9a-a729-bc178d80fba6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Locked in. Final list:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Phone number: <Word>
                        <Bold />
                        516-457-1715
                    </Word>
                </Line>
                <Line>
                    Account number: <Word>
                        <Bold />
                        512173974171
                    </Word>
                </Line>
                <Line>
                    Account holder: <Word>
                        <Bold />
                        DOUGLAS RUBINO
                    </Word>
                </Line>
                <Line>
                    Billing ZIP: <Word>
                        <Bold />
                        27330
                    </Word>
                </Line>
                <Line>
                    Transfer PIN: <Word>
                        <Bold />
                        191147
                    </Word> (expires May 13, 10:07 PM CT — ~3 days)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now go to usmobile.com.
                </Word> The clock is on the PIN. Aim to complete the US Mobile signup + port-in submission today or tomorrow
                at the latest, well before that expiration.
            </Paragraph>
            <Paragraph>Recap of the US Mobile signup choices, so you don't have to scroll back:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Network: <Word>
                        <Bold />
                        Light Speed
                    </Word> (T-Mobile-based — better WiFi Calling reliability than Warp/Verizon for our use case)
                </Line>
                <Line>
                    Plan: cheapest tier with unlimited talk/text + WiFi Calling — likely "Pooled by the Gig" or low-tier
                    monthly, around $5–10/mo
                </Line>
                <Line>
                    SIM type: <Word>
                        <Bold />
                        eSIM
                    </Word>
                </Line>
                <Line>"Bring your number" — yes — paste the five values above</Line>
            </Paragraph>
            <Paragraph>
                When the eSIM QR code arrives by email, install it via Settings → Cellular → Add Cellular Plan → scan QR.
                Don't remove the AT&amp;T eSIM yet — let the port complete first.
            </Paragraph>
            <Paragraph>
                If activation hits a wall from Tbilisi, VPN to a US exit node and retry, or contact US Mobile support at
                <Word>
                    <Bold />
                    +1-878-205-0088
                </Word>.
            </Paragraph>
            <Paragraph>Ping me if anything in the US Mobile flow doesn't match what we planned.</Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:09:34.326100Z"
        >
            <Origin>019e0fdc-8832-7667-b133-0da9d4d07b55</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is thgis necessary? Does something break or are you trying to teach hygiene?</Paragraph>
            <Paragraph>
                Phase 2 — Add authenticator-app 2FA where possible (safety layer) For each, switch primary 2FA from SMS to
                TOTP authenticator app. SMS becomes the backup, not the only path.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>IBKR — IB Key push auth (already in use? confirm)</Line>
                <Line>Mercury — TOTP authenticator</Line>
                <Line>PayPal — TOTP authenticator or security key</Line>
                <Line>Citibank — TOTP authenticator (if available on your account type)</Line>
                <Line>Chase — Chase prefers their app's push 2FA; enable that. SMS will remain the fallback.</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:09:44.183013Z"
        >
            <Origin>019e0fdc-8832-76b6-bd9f-381063b7e95d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Honest answer: it's not strictly necessary if SMS keeps working through the port. It's hygiene with one
                specific failure mode in mind.
            </Paragraph>
            <Paragraph>
                The failure mode: there's a window during the port — typically a few minutes to a couple of hours,
                occasionally longer — where the number is in transition between AT&amp;T and US Mobile. SMS sent to your
                number during that window can get dropped on the floor. If you happen to need to log into Chase during that
                exact window and trigger 2FA, the code never arrives, and you can't get into Chase until the port completes.
            </Paragraph>
            <Paragraph>This is rare but real. The mitigation is either:</Paragraph>
            <Paragraph>
                <List />
                <Line>Don't try to log into financial accounts during the port window (easy — just pick a quiet day)</Line>
                <Line>Have authenticator-app 2FA already set up so SMS isn't your only path</Line>
            </Paragraph>
            <Paragraph>
                Skipping Phase 2 is fine if you're not actively transacting that day and you're willing to wait out the
                port. The downside risk is "locked out of Chase for a few hours during port." Not catastrophic.
            </Paragraph>
            <Paragraph>
                There's also a long-term hygiene argument — authenticator apps are more secure than SMS, less subject to
                SIM-swap attacks, etc. — but you didn't ask about that and it's not why I included it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cut Phase 2 if you want.
                </Word> The port itself works fine without it. I'd just suggest: don't initiate the port right before you
                need to log into a bank, and have an alternative way to reach support if something goes weird (which is what
                AT&amp;T staying alive for 30 days post-port already gives you).
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:14:50.103083Z"
        >
            <Origin>019e0fe1-5d61-710b-ad77-12a78e9e222c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here's what we see once making an account</Paragraph>
            <Attachment>Uploaded “1778382880958_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T03:15:22.553174Z"
        >
            <Origin>019e0fe1-5d61-719f-8f0d-8bc9c5b75329</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Pick <Word>
                    <Bold />
                    Low Data
                </Word> ($8/mo, 2GB + unlimited talk and text). That's the right tier for your use case — you won't use the
                2GB because Magticom handles all your data, but you're buying the unlimited talk/text which is what SMS 2FA
                actually needs. WiFi Calling is included on all US Mobile plans regardless of tier.
            </Paragraph>
            <Paragraph>Skip the others:</Paragraph>
            <Paragraph>
                <List />
                <Line>Unlimited ($17) — paying for data you won't use</Line>
                <Line>By the Gig ($10) — designed for sharing data across multiple lines, more than you need</Line>
                <Line>
                    The "30 days free" promo — tempting, but it's typically attached to Unlimited and auto-renews at full
                    price; not worth managing the downgrade
                </Line>
                <Line>Starlink/Smartwatch — irrelevant</Line>
            </Paragraph>
            <Paragraph>
                Click <Word>
                    <Bold />
                    Low Data
                </Word> → on the next screen they'll ask about network. <Word>
                    <Bold />
                    Choose Light Speed
                </Word> (T-Mobile-based) for WiFi Calling reliability. Then they'll ask SIM type → <Word>
                    <Bold />
                    eSIM
                </Word>. Then they should ask if you're bringing a number → <Word>
                    <Bold />
                    yes, port in
                </Word>, and that's where you'll paste:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Phone number: <Word>
                        <Bold />
                        516-457-1715
                    </Word>
                </Line>
                <Line>
                    Account number: <Word>
                        <Bold />
                        512173974171
                    </Word>
                </Line>
                <Line>
                    Account holder: <Word>
                        <Bold />
                        DOUGLAS RUBINO
                    </Word>
                </Line>
                <Line>
                    Billing ZIP: <Word>
                        <Bold />
                        27330
                    </Word>
                </Line>
                <Line>
                    Transfer PIN: <Word>
                        <Bold />
                        191147
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Ignore the "Start My Free Trial" item in the sidebar — that's a different flow. You want the Add a Line /
                port-in path, which is what you're already on.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:16:09.411256Z"
        >
            <Origin>019e0fe2-8f67-7ca7-ac58-0ec2f16e6874</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Now here</Paragraph>
            <Attachment>Uploaded “1778382963634_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T03:16:50.677230Z"
        >
            <Origin>019e0fe2-8f67-7d34-a75a-08a5a2ac9efa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Pick Light Plan, but toggle to Monthly first
                </Word> (top right corner, where it says "Annual (save 20%) | Monthly" — click Monthly).
            </Paragraph>
            <Paragraph>
                Reasoning: Annual saves $2/mo ($24/year) but locks you into $96 prepaid. Until you've confirmed the port
                works, SMS reception is solid on US Mobile from Tbilisi, and AT&amp;T is fully dead, monthly is the safer
                bet. After 30 days of clean operation you can switch to annual prepay and capture the savings.
            </Paragraph>
            <Paragraph>So the click sequence:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Toggle from <Word>
                        <Bold />
                        Annual
                    </Word> → <Word>
                        <Bold />
                        Monthly
                    </Word> (top right)
                </Line>
                <Line>Light Plan at $10/mo (the "Annual saves 20%" implies monthly is $10)</Line>
                <Line>Click into Light Plan</Line>
            </Paragraph>
            <Paragraph>
                Skip the Custom Plan — fiddling with sliders to save a few dollars isn't worth it, and it's monthly-only
                anyway.
            </Paragraph>
            <Paragraph>Ignore the two add-ons:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Int'l Calling add-on $36/yr
                    </Word> — for calling FROM your US Mobile line TO international numbers. You don't need it; you use
                    Telegram/Zoom.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $2 Network Transfer
                    </Word> — fee if you ever switch between Light Speed/Warp/Dark Star later. Not relevant now.
                </Line>
            </Paragraph>
            <Paragraph>
                After Light Plan you'll get to network selection — pick <Word>
                    <Bold />
                    Light Speed
                </Word> (T-Mobile) — then SIM type → <Word>
                    <Bold />
                    eSIM
                </Word> — then port-in flow with the five values.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:17:44.274552Z"
        >
            <Origin>019e0fe4-0634-759a-802e-61b61660ecdf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Now add on options. I haven;t been asked to enter data yet</Paragraph>
            <Attachment>Uploaded “1778383052704_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T03:18:03.962884Z"
        >
            <Origin>019e0fe4-0634-798f-9443-5d9df6ffaa72</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Skip everything. None of these are relevant for you:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        International Calling $3/mo
                    </Word> — for calling out from your US Mobile line to international numbers. You use Telegram/Zoom,
                    don't need it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Starlink
                    </Word> — home internet, irrelevant.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        US Mobile Protect
                    </Word> — device insurance, you're not buying a phone here.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        SIM Card Starter Kit
                    </Word> — physical SIM kit, you're doing eSIM (it even says "Not needed for most phones, which support
                    instant activation on eSIM").
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Google Pixel 10
                    </Word> — you have an iPhone.
                </Line>
            </Paragraph>
            <Paragraph>
                Click <Word>
                    <Bold />
                    Continue to checkout
                </Word> with nothing selected. Total stays $10.
            </Paragraph>
            <Paragraph>
                The port-in / "bring your number" question is coming next — US Mobile asks for it either right after add-ons
                (before payment) or as part of the eSIM activation step (after payment). Either way, that's where you'll
                paste the five values from the list. If they ask before checkout, you might want to keep that AT&amp;T
                transfer PIN tab open and ready since the clock's ticking.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:24:28.614553Z"
        >
            <Origin>019e0fea-307e-72a2-8adc-950468ed9f33</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay here now. Still haven't added in that info. What's the wait like?</Paragraph>
            <Attachment>Uploaded “1778383453520_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T03:25:10.460113Z"
        >
            <Origin>019e0fea-307e-7697-9f26-96145fe9a06a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Standard fraud review. It's flagging because you're connecting from a Tbilisi IP with a North Carolina
                billing address, which trips their automated check. Annoying, normal, fixable.
            </Paragraph>
            <Action>
                Searched the web for “"US Mobile" order review wait time fraud check approval expat international IP”
            </Action>
            <Paragraph>
                Typical wait is 1-24 hours, sometimes up to 48. The triggers for your account: foreign IP from Tbilisi + US
                billing address (Sanford NC) + US payment + new account = automated flag. It's not personal — just an
                algorithm being conservative.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Action: email them now to expedite.
                </Word> Don't wait. Send to &#91;email protected&#93; (or whatever their support address is, often shown in
                your confirmation email). Brief, factual:
            </Paragraph>
            <Paragraph>
                <Quoted />
                Subject: Order in review — please expedite Hi, my new order &#91;order number&#93; is in fraud review. I'm a
                US citizen currently living in Tbilisi, Georgia. I'm porting in my existing AT&amp;T number (516-457-1715,
                account holder Douglas Rubino) — I have a US Traveling Mailbox forwarding address in Sanford NC for billing,
                US-issued payment card, and an unlocked US-purchased iPhone 15 Pro. Happy to provide ID/passport for
                verification if helpful. The AT&amp;T transfer PIN expires May 13 — would appreciate prioritizing this if
                possible. Thanks, Douglas Rubino
            </Paragraph>
            <Paragraph>
                Don't be shy about being abroad — they deal with expat customers constantly, that's a meaningful slice of
                their book.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    About the port-in info you haven't entered:
                </Word> that step comes <Word>
                    <Emphasis />
                    after
                </Word> approval. The order page or activation flow will ask for the AT&amp;T transfer details once the
                account is unlocked. So the PIN doesn't burn down until then.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If review somehow stretches past May 13:
                </Word> AT&amp;T transfer PINs are free and unlimited to regenerate — just dial \*7678 again, get a fresh
                one, use that. The 4-day clock isn't a hard deadline on the migration, just on each individual PIN.
            </Paragraph>
            <Paragraph>
                Most likely outcome: approval in a few hours, you'll be entering the port-in info today. Worst case: 24-48
                hours, regenerate the PIN, proceed Monday or Tuesday.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:27:43.974990Z"
        >
            <Origin>019e0fed-2c5e-7493-be28-00a37877792b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I emailed. Where do I go to check if it's working</Paragraph>
            <Attachment>Uploaded “1778383653982_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T03:27:57.570574Z"
        >
            <Origin>019e0fed-2c5e-7b6d-95b7-a23d11d6f98b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Click <Word>
                    <Bold />
                    Orders
                </Word> in the left sidebar (below Help). Pending orders and their review status appear there — you'll see
                "in review" or similar status, and once approved, the order moves to active and the eSIM activation /
                port-in step becomes available.
            </Paragraph>
            <Paragraph>Also worth checking while you wait:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Notifications
                </Word> (bell icon top of sidebar) — any system messages about the order land there.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Settings
                </Word> has a red "1" badge — open it to clear that, sometimes it's a verification action item (ID upload,
                email confirmation, etc.) that's blocking the review. Worth a look.
            </Paragraph>
            <Paragraph>Approval triggers two things:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Email to you confirming</Line>
                <Line>
                    The dashboard updates — Lines counter goes from 0 → 1 (or shows pending), and the activation flow (eSIM
                    QR code + port-in form) becomes accessible
                </Line>
            </Paragraph>
            <Paragraph>
                Refresh the page or check Orders every hour or two. No need to sit on it. You'll get the email when it
                moves.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:29:20.857621Z"
        >
            <Origin>019e0fee-a485-7993-9936-0794fe884cd4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No orders there</Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:29:37.949907Z"
        >
            <Origin>019e0fee-a485-7fc4-acd9-c8e11c25990a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>A few possibilities — check in this order:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Your email.
                </Word> US Mobile sends an order confirmation immediately after submission. Search your inbox for "US
                Mobile" — that email has the order number and usually a direct status link. Sometimes it's in spam.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Settings (the red "1" badge).
                </Word> Open it. There may be a verification action sitting there — ID upload, email confirmation, address
                verification — and the order won't show up in Orders until you complete it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Notifications (bell icon).
                </Word> System messages about the order land there.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Log out and back in.
                </Word> Sometimes the dashboard takes a few minutes to reflect new orders, and a fresh session forces a
                sync.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Use chat support.
                </Word> Bottom-right of the US Mobile site there's a chat bubble. Click it, type "I just placed an order
                that went into review, but it's not showing in my Orders. Order ID &#91;from email&#93;." They'll see it on
                their end and can confirm status.
            </Paragraph>
            <Paragraph>
                If none of the above shows anything: it's possible the order didn't fully submit (review screen showed but
                the record didn't save). The chat support path will surface that too.
            </Paragraph>
            <Paragraph>What does the email confirmation say?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:47:29.281080Z"
        >
            <Origin>019e0fff-41c9-7516-a90a-0b1e3fd2e6a8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How can I figure out what this charge is? I am auditing my subscription including my phone. That's a big
                change
            </Paragraph>
            <Attachment>Uploaded “1778384826887_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T03:47:59.562858Z"
        >
            <Origin>019e0fff-41c9-7633-a808-de3a789e77d3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's <Word>
                    <Bold />
                    Squarespace
                </Word> (the SQSP prefix is Squarespace's billing descriptor). The "DOMAIN#" in the description tells you
                it's a domain registration renewal, not a website plan.
            </Paragraph>
            <Paragraph>
                $110 is high for a typical .com (which runs $20-30/yr at Squarespace), so this is almost certainly one of
                your premium <Word>
                    <Bold />
                    .love
                </Word> domains — that TLD has elevated wholesale pricing. Could be <Word>
                    <Verbatim />
                    dna.love
                </Word> or <Word>
                    <Verbatim />
                    atlas.love
                </Word>, possibly a multi-year renewal, possibly with privacy/email add-ons bundled in.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To verify exactly what it was:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Go to <Word>
                        <Bold />
                        account.squarespace.com
                    </Word> → log in.
                </Line>
                <Line>
                    Click your profile (top right) → <Word>
                        <Bold />
                        Account
                    </Word>.
                </Line>
                <Line>
                    Go to <Word>
                        <Bold />
                        Billing
                    </Word> → <Word>
                        <Bold />
                        Invoices
                    </Word>. Find the May 01, 2026 invoice for $110 — it'll show the exact domain name, the term (1 year, 2
                    years, etc.), and any add-ons.
                </Line>
            </Paragraph>
            <Paragraph>
                Or alternatively: <Word>
                    <Bold />
                    Domains
                </Word> in the left sidebar shows all domains under your account with their next renewal dates and prices.
                The one that just renewed May 01 is the culprit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For your audit, three questions to think about:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Do you still need both  0  and  1 ?
                    </Word> Your migration plan was dna → atlas. If atlas is the going-forward identity, dna.love can be
                    released at next renewal — that's potentially ~$110/year saved if both are on this pricing tier.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Are you paying for Squarespace's domain privacy + email forwarding add-ons?
                    </Word> Both are typically included free at registrars like Cloudflare or Namecheap. Squarespace
                    sometimes bundles them as paid extras.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Could you transfer to a cheaper registrar?
                    </Word> .love TLDs have a wholesale floor around $25-30/yr because of the registry pricing, but a
                    registrar like Cloudflare often passes wholesale through at-cost (close to $30/yr instead of $110).
                    Transferring after the current term ends — not now, since you just paid through next year — could cut
                    this annual cost roughly in half or more. Some registrars: Cloudflare Registrar (at-cost), Porkbun
                    (cheap on premium TLDs), Namecheap (decent but not the cheapest).
                </Line>
            </Paragraph>
            <Paragraph>
                Want me to dig into Squarespace's specific .love pricing and Cloudflare's transfer-in pricing to firm up the
                savings estimate?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:48:34.899394Z"
        >
            <Origin>019e1000-41ba-7c65-bfbb-e39a0f203ff4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I went to squarespace. I only saw one domain at $70. Did google and squarespace do a thing where I go to
                them&gt;
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:49:31.820070Z"
        >
            <Origin>019e1000-41ba-7934-90f4-b7f8480a9cd4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — Google sold Google Domains to Squarespace in mid-2023, and all Google Domains customers were
                force-migrated to Squarespace as their registrar over the following ~12 months. So if you registered domains
                through Google originally (which fits with the dna.love → atlas.love Google Workspace setup in your notes),
                they're now sitting in Squarespace.
            </Paragraph>
            <Action>
                Searched the web for “Google Domains migration Squarespace 2024 transferred billing find domains”
            </Action>
            <Paragraph>
                Yes, exactly — Google sold Google Domains to Squarespace. The migration completed July 2024, and all your
                old Google domains are now Squarespace's. Your dna.love and atlas.love (per your notes you have both) would
                have been moved automatically.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    $70 visible vs $110 charged means $40 unaccounted for.
                </Word> Three possibilities, ranked by likelihood:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. There's a second Squarespace account you haven't logged into.
                </Word> This is the most common cause. The migration created separate Squarespace accounts for each <Word>
                    <Emphasis />
                    unique email address
                </Word> associated with each domain — so if <Word>
                    <Verbatim />
                    dna.love
                </Word> was registered under one Google account and <Word>
                    <Verbatim />
                    atlas.love
                </Word> (or another domain) under a different one (admin@..., your personal Gmail vs. a Workspace user,
                etc.), they'd land in different Squarespace accounts.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To check:
                </Word> Search your Gmail (and any other inboxes) for "Squarespace" → look for migration confirmation emails
                or renewal notices from May 01, 2026. If you find one tied to an email address different from the one you
                logged in with, that's your other account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. The single domain renewed for 2 years.
                </Word> Check the May 01 invoice — if the term shows "2 years" instead of "1 year," that explains the math
                (roughly $55/yr × 2 = $110). On Squarespace: Account → Billing → Invoices → click the May 01 line item.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. WHOIS Privacy or another add-on.
                </Word> Squarespace charges differently than Google Domains did for some line items. Check the same invoice
                for any sub-line below the domain itself. Possible items: domain privacy, multi-year discount adjustment,
                sales tax (your old Google sales tax exemption didn't carry over, per Squarespace's own migration FAQ).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Easiest path: open the May 01 invoice in Squarespace.
                </Word> Account dropdown → Billing &amp; Account → Invoices → find the $110 invoice from 2026-05-01 → click
                for line-item breakdown. That tells you definitively what you were charged for. If it shows one $70 domain
                plus $40 in fees, you have your answer. If it shows two domains, you've found the missing one. If it shows
                one domain at $110, then the $70 you see in the dashboard is misleading and you should check what its actual
                renewal cost will be.
            </Paragraph>
            <Paragraph>Once you know what the $110 actually bought, the audit decision is downstream of that:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If you have both <Word>
                        <Verbatim />
                        dna.love
                    </Word> and <Word>
                        <Verbatim />
                        atlas.love
                    </Word> and the migration plan is dna→atlas, you can let <Word>
                        <Verbatim />
                        dna.love
                    </Word> lapse next renewal cycle (~$55-110/yr saved).
                </Line>
                <Line>
                    If everything's needed, you can transfer to <Word>
                        <Bold />
                        Cloudflare Registrar
                    </Word> (passes wholesale through at-cost — usually ~$30/yr for .love TLDs vs Squarespace's $70+) at
                    next renewal. Don't transfer mid-term; wait until ~30 days before expiry.
                </Line>
            </Paragraph>
            <Paragraph>Want me to walk through how to actually find the invoice, or are you good from here?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:51:45.463224Z"
        >
            <Origin>019e1003-2afa-7c43-9d9e-5c1f67b4bcac</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What if I started with google? Did they migrate? Maybe I lost them?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T03:52:15.391955Z"
        >
            <Origin>019e1003-2afa-787c-ac49-be71deb96f47</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Calm down — you didn't lose them. Two facts to anchor on:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. The migration was automatic and preserved everything.
                </Word> Squarespace took over Google's domain database wholesale. Every domain's registration, expiration
                date, DNS configuration, and billing info migrated intact. Nothing got lost in the transfer; domains kept
                ticking along on their original renewal schedules.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. The $110 charge is proof your domain(s) are alive.
                </Word> If a domain had lapsed, Squarespace couldn't charge you for it. The fact that money moved from your
                Citi card to Squarespace on May 01 means the registration is current and was successfully renewed. Whatever
                the $110 bought, you still own.
            </Paragraph>
            <Paragraph>
                The actual question is: <Word>
                    <Bold />
                    which Squarespace account is each domain in?
                </Word> That's where it can get fragmented.
            </Paragraph>
            <Paragraph>
                The migration sent each domain to the Squarespace account associated with the <Word>
                    <Emphasis />
                    email on the Google Domains record
                </Word> — and if you used different Google accounts (personal Gmail vs. a Workspace admin account vs. an old
                account from before atlas.love existed), those domains can end up in <Word>
                    <Emphasis />
                    different
                </Word> Squarespace accounts that share none of the same login.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To find all of them:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A. Search every email inbox for Squarespace migration messages.
                </Word> 2024 migration notifications had subject lines like "Your domain has migrated to Squarespace" — they
                went to the email on file for each domain. Search:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Your Gmail → "from:squarespace.com" → look at every notification address</Line>
                <Line>Any other email accounts you've used (workspace admin emails, old personal addresses)</Line>
            </Paragraph>
            <Paragraph>
                Each unique email that received a migration notice is a separate Squarespace account holding at least one of
                your domains.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    B. Try logging into Squarespace with "Continue with Google" using each of your Google accounts.
                </Word> When you sign in via Google OAuth with a different email, you may land in a different Squarespace
                account. Each account shows only the domains under it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    C. Check old Google Workspace billing.
                </Word> If <Word>
                    <Verbatim />
                    dna.love
                </Word> is your current Workspace domain, it's tied to your Workspace account. The domain registration
                itself migrated to Squarespace, but the <Word>
                    <Emphasis />
                    Workspace subscription
                </Word> (email/Drive/Docs) is still billed by Google. That billing record might list which email registered
                the domain originally — useful as a clue for which Squarespace account inherited it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    D. WHOIS lookup as a tiebreaker.
                </Word> Run <Word>
                    <Verbatim />
                    whois dna.love
                </Word> (or <Word>
                    <Verbatim />
                    whois atlas.love
                </Word>) at any WHOIS site like whois.com. The registrar will show as Squarespace, and the registrant email
                — though usually privacy-protected — sometimes shows the contact. More importantly, you'll see the
                registration is active and when it expires, confirming nothing was lost.
            </Paragraph>
            <Paragraph>
                The most likely state of your world: 2 domains, possibly in 2 different Squarespace accounts. The $110
                charge is one of them renewing; the $70 you see is either the <Word>
                    <Emphasis />
                    other
                </Word> domain's price for next renewal, or the same domain you got charged for and the dashboard is showing
                pre-tax.
            </Paragraph>
            <Paragraph>
                Run search A first — that gives you the answer in 30 seconds without logging into anything new.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:06:31.757246Z"
        >
            <Origin>019e1010-afff-7680-a336-d80f1a11afe7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I was invoiced $70 in May</Paragraph>
            <Paragraph>But the charges I see are this - are they even the same?</Paragraph>
            <Attachment>Uploaded “1778385218409_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1778385250809_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T04:07:02.530396Z"
        >
            <Origin>019e1010-afff-7927-a460-ab76481ac689</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>No, they're not the same charge. The dates and amounts both differ.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Look at the dates:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    $110 charge on Citi: <Word>
                        <Bold />
                        May 01, 2026
                    </Word>
                </Line>
                <Line>
                    dna.careers invoice: covers <Word>
                        <Bold />
                        May 23, 2026 – May 23, 2027
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Per Squarespace's policy, domains charge on the renewal date itself, not 15 days before. So <Word>
                    <Verbatim />
                    dna.careers
                </Word> will be charged <Word>
                    <Bold />
                    on or around May 23, 2026
                </Word> for $70 — that's a <Word>
                    <Emphasis />
                    future
                </Word> charge you haven't seen on your Citi statement yet.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The May 01 $110 charge is for a different domain.
                </Word> Some other domain that renewed on May 01, 2026, lives in a Squarespace account you haven't logged
                into.
            </Paragraph>
            <Paragraph>So your portfolio currently includes at minimum:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        dna.careers
                    </Word> — visible in this Squarespace account, $70/year, next charge May 23, 2026
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        &#91;unknown&#93;
                    </Word> — renewed May 01, 2026 for $110, in a <Word>
                        <Emphasis />
                        different
                    </Word> Squarespace account
                </Line>
                <Line>
                    Possibly <Word>
                        <Bold />
                        dna.love
                    </Word> and/or <Word>
                        <Bold />
                        atlas.love
                    </Word> — your notes mentioned these, status unknown
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To find the $110 domain:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Search Gmail for  0  between April 15 and May 5, 2026.
                    </Word> You'll find a renewal confirmation email for the $110 charge — it'll name the domain and tell
                    you which email address received it.
                </Line>
                <Line>
                    The email address that received that confirmation is the login for the <Word>
                        <Emphasis />
                        other
                    </Word> Squarespace account. Sign out of your current Squarespace, then sign back in via "Continue with
                    Google" using that other Gmail address.
                </Line>
                <Line>You should see the missing domain there.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    This is exactly the value of an audit.
                </Word> You just discovered:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A domain you forgot you had (dna.careers, $70/yr)</Line>
                <Line>An upcoming charge you weren't expecting (May 23)</Line>
                <Line>Probably another domain in a forgotten Squarespace account ($110/yr)</Line>
            </Paragraph>
            <Paragraph>Run the Gmail search. Send me what you find and we'll map the full picture.</Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:12:06.641693Z"
        >
            <Origin>019e1015-cc4b-7bc0-9923-c682f6e592cf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                WHat do I do with this? Looks like a recurring docusign charge but I can't find a not free trial account of
                either of my accounds that might have them
            </Paragraph>
            <Attachment>Uploaded “1778386299100_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T04:12:34.479505Z"
        >
            <Origin>019e1015-cc4b-7de2-9920-bad2776426ec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                DocuSign Personal plan is $15/month + tax = ~$16.32. Recurring, real, ~$196/year. Worth tracking down and
                canceling if you don't actively use it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Find the account in this order:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Search every inbox for  0 
                </Word> — any active DocuSign account sends:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Monthly invoice/receipt emails</Line>
                <Line>"Document signed" / "Document sent" notifications</Line>
                <Line>Periodic security/login emails</Line>
            </Paragraph>
            <Paragraph>
                The email address receiving those is the account holder. Search Gmail first, then any Workspace email
                addresses (admin@dna.love, anything @atlas.love, etc.), then any old personal addresses.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. If Gmail search comes up empty:
                </Word> go to <Word>
                    <Bold />
                    docusign.com
                </Word>, click "Sign In" → "Forgot Password," and try each of your email addresses one at a time. If
                DocuSign says "we sent a reset link" for one of them, that's your account. If they say "no account found"
                for all, no DocuSign exists under any email you're checking.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. If both fail:
                </Word> call DocuSign at <Word>
                    <Bold />
                    +1-877-720-2040
                </Word> (their billing/support line). Have your Citi card's last four digits and the charge date ready. They
                can look up the account by payment method and tell you which email it's registered to. They can also cancel
                on the spot.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Possible explanation worth considering:
                </Word> Did Ana set up DocuSign at any point — maybe for her illustration contracts, microstock paperwork,
                or anything tied to the custody legal proceedings? Russian or Georgian legal documents sometimes come
                through DocuSign for foreign signatories. If so, the account might be hers, billed to your card.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Once you find it:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If you actively need DocuSign: keep, but consider whether the cheaper plan tier covers your usage.
                </Line>
                <Line>
                    If you signed once a year ago and never again: cancel. DocuSign's free tier lets you sign documents
                    others send you (you just can't <Word>
                        <Emphasis />
                        send
                    </Word> them for signature). For occasional use, the free tier covers it.
                </Line>
            </Paragraph>
            <Paragraph>
                Same audit move you're doing across the board: every subscription that surfaces in this audit, ask "what
                does this give me, and is it worth what I'm paying?"
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:28:50.524338Z"
        >
            <Origin>019e1025-1d98-7bf7-b61e-30de6113c7f9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Those are three different docusign accounts. I don't like the active enterprize one but I can't figure out
                where to go to inactivate it
            </Paragraph>
            <Attachment>Uploaded “1778387220307_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1778387277769_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1778387306422_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T04:29:47.420987Z"
        >
            <Origin>019e1025-1d98-74d7-87a1-238e69ca9e68</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Three different accounts (well, two, since image 1 and image 3 look like the same one — Account ID 610701572
                — and image 2 is the Enterprise Free Trial that's separate). Important detail: that Enterprise trial <Word>
                    <Bold />
                    started today, May 10
                </Word>. Either you accidentally clicked into a trial signup while poking around, or DocuSign auto-prompted
                you. Either way — let's kill it.
            </Paragraph>
            <Action>Searched the web for “DocuSign Enterprise Free Trial cancel close account settings 2026”</Action>
            <Paragraph>Two things to know before going further:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Free trials don't auto-bill if you don't pick a plan.
                </Word> Per DocuSign's own community moderators: "if no plan is selected once the Free Trial ends, the
                account does not automatically charge the user, as the system does not know which plan the user would like,
                after the 30 days, the free trial will expire and the account will downgrade to a free account. No
                cancellation is required."
            </Paragraph>
            <Paragraph>
                So the Enterprise trial that started today and the Basic trial ending May 16 will both expire harmlessly
                without billing. You don't <Word>
                    <Emphasis />
                    have
                </Word> to do anything for them. They won't become subscriptions unless you click an upgrade button.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The $16.32 April 21 charge is coming from a THIRD account you haven't found yet.
                </Word> Both accounts you've shown me are on free trials and aren't charging anything. The paid
                Personal-tier subscription ($15/mo + tax) is on a different DocuSign account under a different email.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To find the paid account:
                </Word>
            </Paragraph>
            <Paragraph>Search every email inbox for a DocuSign receipt around April 21, 2026:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Gmail: <Word>
                        <Verbatim />
                        from:docusign.com receipt 2026/04/21
                    </Word> or <Word>
                        <Verbatim />
                        from:docusign.com subject:invoice
                    </Word>
                </Line>
                <Line>
                    Or just <Word>
                        <Verbatim />
                        from:docusign.com after:2026/04/15 before:2026/04/25
                    </Word>
                </Line>
                <Line>
                    Same search across any other email accounts (Workspace, old personal addresses, anything Ana might use,
                    etc.)
                </Line>
            </Paragraph>
            <Paragraph>
                The April invoice email will be addressed to the email that owns the paid account. Sign into DocuSign with
                that email, navigate to <Word>
                    <Bold />
                    Settings → Plan and Billing → Cancel Subscription / Close Account
                </Word>, kill it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you want to actively close the Enterprise trial now (rather than waiting for May 17):
                </Word>
            </Paragraph>
            <Paragraph>
                Settings (top nav or hamburger menu) → <Word>
                    <Bold />
                    Plan and Billing
                </Word> → at the bottom of the page there should be a <Word>
                    <Bold />
                    Close Account
                </Word> link or a Cancel Subscription button. "Click the provided link under 'Close Account' at the bottom
                of the page. Confirm the closure of your account."
            </Paragraph>
            <Paragraph>
                If the cancel option isn't visible: per DocuSign's policy, you have to open a support case at
                support.docusign.com for them to manually close trial accounts. But again — you don't <Word>
                    <Emphasis />
                    need
                </Word> to. It expires May 17 with no consequences.
            </Paragraph>
            <Paragraph>Priority is finding the $16.32 source. The trials are noise.</Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:47:46.730635Z"
        >
            <Origin>019e1036-73cb-71d6-bdf0-2f3d36030a71</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Fixed it.</Paragraph>
            <Paragraph>If I moved domains to Azure, would I still get billed, possibly by squarespace?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:48:49.169982Z"
        >
            <Origin>019e1036-73cb-74fd-bca6-dec2b55629fe</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Cloudflare Registrar pricing .love .careers wholesale domain transfer”</Action>
            <Paragraph>
                Direct answer: <Word>
                    <Bold />
                    Yes, after a successful transfer to any registrar, Squarespace stops billing
                </Word> for that domain. The transfer moves both the registration and the billing relationship — Squarespace
                no longer has anything to charge you for.
            </Paragraph>
            <Paragraph>
                But <Word>
                    <Bold />
                    Azure is the wrong target
                </Word>. Azure App Service Domains supports a narrow list of TLDs (.com, .net, .org, .biz, .info, .co.uk,
                .in, .nl, .org.uk, and a handful of others) and <Word>
                    <Bold />
                    does not support .careers or .love
                </Word>. So you literally can't transfer those there. Their pricing also isn't notably cheaper than
                Squarespace for what they do support.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The right target is Cloudflare Registrar.
                </Word> Cloudflare supports 390+ TLDs (including .careers and .love), passes wholesale pricing through with
                <Word>
                    <Bold />
                    zero markup
                </Word>, and includes WHOIS privacy + DNSSEC for free. That's the structural reason to switch, not a promo.
                Renewal price equals the registry's wholesale price plus the $0.18 ICANN fee.
            </Paragraph>
            <Paragraph>For your specific domains:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    dna.careers (renews May 23, 2026, $70 at Squarespace):
                </Word> Transfer to Cloudflare <Word>
                    <Emphasis />
                    now
                </Word>, before May 23. The transfer adds a one-year extension to your current expiration, so you skip the
                May 23 Squarespace charge entirely. Cloudflare's price for .careers is around $25-30/year. Annual savings:
                ~$40/year, every year going forward.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The unknown $110 domain (renewed May 01):
                </Word> It just locked in for another year at Squarespace, so transferring it now wouldn't recover the $110.
                Wait until ~30-45 days before its next renewal (around April 2027) to transfer. In the meantime, find out
                which domain it is so you know what you're managing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Process for dna.careers transfer:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Sign up at <Word>
                        <Bold />
                        cloudflare.com
                    </Word>, free tier.
                </Line>
                <Line>
                    Add <Word>
                        <Verbatim />
                        dna.careers
                    </Word> to your account, change nameservers to Cloudflare (Cloudflare gives you two NS records to set at
                    Squarespace; this is a prerequisite — Cloudflare requires using their DNS before they'll accept a
                    transfer).
                </Line>
                <Line>
                    In Squarespace: domain settings → unlock the domain → request the <Word>
                        <Bold />
                        authorization code
                    </Word> (also called EPP code or transfer code).
                </Line>
                <Line>
                    In Cloudflare: Domains → Transfer Domain → enter the auth code → confirm and pay (~$25-30 for the year).
                </Line>
                <Line>
                    Wait ~5-10 days. Squarespace sends you an email asking to approve or deny the transfer; approve it (or
                    let it auto-approve after 5 days).
                </Line>
                <Line>Done. Cloudflare now handles renewal, Squarespace no longer has the domain.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Important constraint
                </Word> I noticed in the docs: "Your domain was registered at least 60 days ago and has not been transferred
                in the last 60 days (ICANN requirement)." Since the Google → Squarespace migration completed July 2024 (well
                over a year ago) and you haven't transferred since, you're fine.
            </Paragraph>
            <Paragraph>
                Cloudflare's at-cost approach takes both .love domains from $70-110/yr to ~$25-35/yr, and .careers
                similarly. Long-term annual savings across your portfolio could easily be $150+/year.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:50:41.502760Z"
        >
            <Origin>019e1039-1f28-7971-b32d-632202896118</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so we got rejected by US mobile twice. I had a US VPN on the second time. What might be going on?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:51:29.950175Z"
        >
            <Origin>019e1039-1f28-7864-b92f-5419e0b41506</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Two rejections in a row, and the VPN possibly made the second one worse. Here's what's likely going on and
                what to do.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the VPN likely hurt rather than helped:
                </Word>
            </Paragraph>
            <Paragraph>
                Modern fraud-detection systems treat VPN/proxy traffic as a <Word>
                    <Emphasis />
                    negative
                </Word> signal, not a neutral one. Without the VPN, your traffic looks like "ordinary expat from Tbilisi" —
                unusual but explainable. With the VPN on, the same browser session now looks like "user who's actively
                hiding their location" — which fraud heuristics weight much more suspiciously, because legitimate expats
                don't usually hide where they are, but card-testing fraud rings always do. Stack on top of that:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The browser/iPhone fingerprint (timezone, language, locale settings) probably still showed Tbilisi/GMT+4
                    even with the US VPN, creating a <Word>
                        <Emphasis />
                        mismatch
                    </Word> between IP and device. That mismatch is a stronger fraud signal than either signal alone.
                </Line>
                <Line>
                    Two rapid submissions of the same order looks like classic card-testing behavior, regardless of
                    legitimacy.
                </Line>
                <Line>
                    The AT&amp;T billing address that was updated on May 01 (the green "Billing address updated!" we saw)
                    may not have fully propagated through carrier validation systems yet, causing the port-in validation
                    step to fail silently and look like a verification mismatch.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd do now, in order:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Stop submitting.
                </Word> Each rejection compounds. A third quick attempt almost certainly fails too, and might get the
                account flagged for manual review even after support intervenes.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Email US Mobile support directly with full context.
                </Word> Write to &#91;email protected&#93; (or whatever address came in your order confirmation email). Be
                transparent about everything:
            </Paragraph>
            <Paragraph>
                <Quoted />
                Subject: Two orders rejected — need help completing port-in Hi, my last two orders were rejected. I want to
                provide context so you can verify legitimacy. I'm a US citizen currently living in Tbilisi, Georgia. I'm
                porting in my AT&amp;T number (516-457-1715, Douglas Rubino, account 512173974171, billing ZIP 27330). - My
                Citi card has US billing address: 500 Westover Dr PMB 36118, Sanford NC 27330 (Traveling Mailbox forwarding
                service — happy to provide proof of mail forwarding contract). - iPhone 15 Pro is unlocked, US-purchased. -
                First submission was from a Tbilisi IP. Second submission I used a US VPN, which may have made things worse
                — apologies, that was me trying to help. I can provide passport, US driver's license, AT&amp;T account
                verification, or any other ID needed to confirm I am who I say I am. Please let me know what you need to
                manually approve. Thanks, Douglas Rubino
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Wait for their response before resubmitting anything.
                </Word> A human rep can manually approve and walk you through, often within a few hours during US business
                hours.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Turn off the VPN going forward.
                </Word> For an expat with a legitimate setup, a clean Tbilisi IP combined with proactive context to support
                is far better than a VPN that creates fingerprint mismatches.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. If support is slow, try chat directly on usmobile.com.
                </Word> Bottom-right chat bubble. Same script, but live. Often faster than email.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Backup option if US Mobile won't approve:
                </Word> This is exactly the failure mode I flagged earlier as a possibility for eSIM-only iPhone from
                abroad. The fallbacks remain:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Tello with the physical SIM via Traveling Mailbox.
                    </Word> Tello eSIM activation is officially blocked from abroad, but their physical SIM works fine — you
                    ship to your NC address, Traveling Mailbox forwards to Tbilisi, you put it in a spare phone with WiFi
                    calling. Adds 2-3 weeks but works reliably. Need a phone with a SIM tray, though, which the iPhone 15
                    Pro lacks. Could buy a cheap used Android in Tbilisi for $50.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        AT&amp;T Prepaid downgrade.
                    </Word> Keep the AT&amp;T number where it is, drop to prepaid (~$25/mo), kill IDP for good. No transfer
                    needed, no fraud check anywhere. Worse than US Mobile on monthly cost but lowest friction. If US Mobile
                    keeps rejecting, this is the structural fallback.
                </Line>
            </Paragraph>
            <Paragraph>
                What did the US Mobile rejection emails actually say? If they gave a specific reason, that helps narrow down
                whether it's payment, identity, or port-validation.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:55:55.344434Z"
        >
            <Origin>019e103d-e778-7b1e-9bb0-01786747c861</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is there a free tier of google workspace? Any ida to see if I have it?</Paragraph>
            <Paragraph>
                Orchids Rose Welcome to the Google Workspace Admin Console <Word>
                    <Reference>https://admin.google.com/ac/users?authuser=0</Reference>
                    UsersAdd or manage users
                </Word> BO CK CK DR
            </Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://admin.google.com/ac/billing/subscriptions?authuser=0</Reference>
                    BillingManage subscriptions and billing
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://workspace.google.com/discover?origin=ac_home_page&amp;authuser=0</Reference>
                    DiscoverGet the most out of Google
                </Word> Get the most out of Google Workspace Learn more about the best features of Google Workspace and make
                sure everything is set up just right
            </Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://workspaceupdates.googleblog.com/?authuser=0</Reference>
                    Product updatesLatest updates in Workspace
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>http://workspaceupdates.googleblog.com/2026/05/weekly-recap-05-08-2026.html</Reference>
                        Google Workspace Updates Weekly Recap - May 8, 2026May 8
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>http://workspaceupdates.googleblog.com/2026/05/improvements-to-help-me-write-in-gmail.html</Reference>
                        Improvements To Help Me Write in GmailMay 8
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>http://workspaceupdates.googleblog.com/2026/05/google-workspace-studio-available-in-more-languages.html</Reference>
                        Google Workspace Studio available in more languagesMay 7
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>http://workspaceupdates.googleblog.com/2026/05/view-google-meet-live-stream-automatically-if-an-adaptive-meeting-becomes-full.html</Reference>
                        View the Google Meet live stream automatically if an adaptive meeting becomes fullMay 7
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://admin.google.com/ac/domains?authuser=0</Reference>
                    DomainsManage your domains
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://admin.google.com/ac/ac?authuser=0</Reference>
                    AlertsView notifications about potential issues
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://admin.google.com/ac/chrome/browsers?authuser=0</Reference>
                    Chrome EnterpriseSet up management of Chrome browsers
                </Word> Enforce browser policies, manage extensions, and view reports
            </Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
                <Line></Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://admin.google.com/ac/chrome/devices?authuser=0</Reference>
                    ChromeOS device management
                </Word> Remotely manage devices, secure company data, and optimize productivity with advanced security and
                reporting features
            </Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://admin.google.com/ac/groups?authuser=0</Reference>
                    GroupsCreate groups for mailing lists and applying policies
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/apps?authuser=0</Reference>
                    AppsManage web and mobile app access and settings
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/dm?authuser=0</Reference>
                    DevicesManage devices and secure your organization's data
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/accountsettings?authuser=0</Reference>
                    Account settingsManage your organization's profile and preferences
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/orgunits?authuser=0</Reference>
                    Organizational unitsOrganize users into units for applying policies
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/managedsettings/352555445522?authuser=0</Reference>
                    SecurityConfigure security settings, and view alerts and analytics
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/reporting/home?authuser=0</Reference>
                    ReportingMonitor your organization's user and admin activity
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/sync/externaldirectories?authuser=0</Reference>
                    Directory syncManage your external directories
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/ax?authuser=0</Reference>
                    RulesManage rules to set alerts and actions
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/list/roles?authuser=0</Reference>
                    Admin rolesAssign roles to control permissions for the Admin Console
                </Word> <Word>
                    <Reference>https://admin.google.com/ac/storage?authuser=0</Reference>
                    StorageManage your organization's shared storage
                </Word> <Word>
                    <Reference>https://support.google.com/a?authuser=0</Reference>
                    SupportConnect with the Help Assistant
                </Word> Enable advanced mobile management Protect Google Workspace data with strong device controls Tools
                <Word>
                    <Reference>https://www.google.com/appsstatus</Reference>
                    Google Workspace Status Dashboard
                </Word> <Word>
                    <Reference>https://admin.google.com/u/0/ac/list/unmanagedusers?dn=&amp;cid=00s2tt54</Reference>
                    Transfer tool for unmanaged users
                </Word> <Word>
                    <Reference>https://support.google.com/a/topic/7302923?hl=en</Reference>
                    Google Meet video setup
                </Word> <Word>
                    <Reference>https://workspace.google.com/marketplace</Reference>
                    Google Workspace Marketplace
                </Word> <Word>
                    <Reference>https://www.google.com/a/partnersearch/</Reference>
                    Get help from a partner
                </Word> <Word>
                    <Reference>https://workspace.google.com/landing/partners/referral/?utm_source=signup&amp;utm_medium=referral&amp;utm_campaign=apps-referral-adminconsole&amp;utm_content=US</Reference>
                    The Google Workspace Referral Program
                </Word>
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T04:56:45.847489Z"
        >
            <Origin>019e103d-e778-7bf4-8587-01f594606cb5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Google Workspace free tier 2026 Essentials Starter legacy free edition admin console
                check”
            </Action>
            <Paragraph>Two relevant free tiers exist, but only one of them gives you Gmail with a custom domain:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. G Suite Legacy Free Edition
                </Word> — Grandfathered. Originally created when Google launched Apps for Your Domain in 2006, killed off
                for new signups in 2012, Google tried to force everyone onto paid in 2022, then partially reversed for
                personal/non-commercial use. "Google Workspace and the free edition of Workspace are only available for
                personal non-commercial use. Google may occasionally review accounts that have free edition subscriptions.
                If we suspect the subscription is being used for commercial purposes, we may contact account administrators
                and direct them to switch to a paid Workspace plan. Suspend accounts that continue to use free edition
                subscriptions for commercial purposes." Includes Gmail with custom domain. If you have this, it's the
                valuable one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Workspace Essentials Starter
                </Word> — Currently signupable. Free for everyone, but does <Word>
                    <Emphasis />
                    not
                </Word> include Gmail with a custom domain. Just Docs/Drive/Chat/Meet, capped at 15 GB Drive per user.
                Useless if your goal is custom email.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To check what you have, click "Billing" in your admin console
                </Word> (the top-left nav has "Billing — Manage subscriptions and billing"). That page tells you
                definitively which subscription is active and whether you're paying.
            </Paragraph>
            <Paragraph>What you'll see:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        "Free"
                    </Word> or <Word>
                        <Bold />
                        "G Suite legacy free edition"
                    </Word> with no monthly charge → you're on the grandfathered free tier (good news, but watch the
                    commercial-use clause)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Business Starter / Standard / Plus"
                    </Word> with a monthly cost per user → you're paying
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Workspace Individual"
                    </Word> ($9.99/mo) → solo paid plan
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Essentials Starter"
                    </Word> → free Essentials only, no Gmail (rare for someone who set up domain email)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Specifically what to look for in your case:
                </Word>
            </Paragraph>
            <Paragraph>
                You have 4 users on this Workspace (BO, CK, CK, DR initials). If you're on a paid plan, you're paying
                $7.20–$28/user/month, so 4 users = $28–$112/month = $336–$1,344/year. The Billing page will say.
            </Paragraph>
            <Paragraph>
                Also worth checking: which domain is "Orchids Rose" tied to? Click <Word>
                    <Bold />
                    Domains
                </Word> in the admin nav. That tells you whether this Workspace is for <Word>
                    <Verbatim />
                    dna.love
                </Word>, <Word>
                    <Verbatim />
                    atlas.love
                </Word>, <Word>
                    <Verbatim />
                    dna.careers
                </Word>, or something else. You may have <Word>
                    <Emphasis />
                    another
                </Word> Workspace under a different account for a different domain — same fragmentation pattern as the
                DocuSign and Squarespace situations.
            </Paragraph>
            <Paragraph>What does the Billing page show?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:03:23.763789Z"
        >
            <Origin>019e1044-bf91-7375-acc5-b2c12c289d2f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It doesn't seem to have subscriptions, and this is what it says:</Paragraph>
            <Attachment>Uploaded “1778389399367_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T05:03:52.204693Z"
        >
            <Origin>019e1044-bf91-7980-9ad2-5d19a067eb45</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the <Word>
                    <Bold />
                    Payment accounts
                </Word> page — it shows payment methods, not active subscriptions. The "Not in use" status means this
                payment account isn't currently being charged for anything. The "Business Starter / Business Plus" listed in
                the Subscriptions column are likely just the subscription types eligible to be linked to this payment
                method, not active subscriptions.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Strong likelihood: you're on G Suite Legacy Free Edition.
                </Word> That tier:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Has full Gmail with custom domain email</Line>
                <Line>
                    Supports multiple users (originally up to 50, later 10, grandfathered users keep their original cap)
                </Line>
                <Line>Has no payment account in use because there's nothing to charge</Line>
                <Line>Was supposed to be killed in 2022 but Google reversed for personal/non-commercial use</Line>
            </Paragraph>
            <Paragraph>That would explain a working Workspace with 4 users and a "Not in use" payment account.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To confirm, navigate to the actual Subscriptions page:
                </Word>
            </Paragraph>
            <Paragraph>
                In the admin console, go to <Word>
                    <Bold />
                    Billing → Subscriptions
                </Word> (left nav, not "Payment accounts"). Or directly: <Word>
                    <Verbatim />
                    admin.google.com/ac/billing/subscriptions
                </Word>
            </Paragraph>
            <Paragraph>What you should see there:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If on legacy free: a subscription named "G Suite legacy free edition" or similar, with $0/month, no
                    payment method, no renewal date
                </Line>
                <Line>
                    If on a paid plan: "Google Workspace Business Starter" (or Standard/Plus) with monthly fee, payment
                    method, next billing date
                </Line>
                <Line>If on a trial: "Free trial" status with countdown to expiration</Line>
            </Paragraph>
            <Paragraph>
                Send me what's on that page and we'll know definitively. But the "Not in use" payment status is a strong
                tell that you're not being charged — which would be a nice surprise in the audit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One concern worth flagging if you are on legacy free:
                </Word> Google's policy says "the free edition of Workspace are only available for personal non-commercial
                use" and that they may suspend accounts found using it commercially. If your hedge fund operations or any
                commercial activity touches this Workspace, you're technically out of policy — Google rarely enforces but
                the risk exists. If you're using it for genuinely personal email and family, you're fine indefinitely.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:19:27.847292Z"
        >
            <Origin>019e1053-7585-7b1c-ac1f-32badca7d23f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What are our options after them? They cancelled me twice. I am talking with support but it probably won't be
                good. Make sure to think about the georgia thing. And I have browsec and proton for browser and full
                computer. If either of those might help
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:20:41.633597Z"
        >
            <Origin>019e1053-7585-72df-8db0-df32be2742ec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                After two US Mobile rejections, the system has likely flagged your contact info, payment method, and IP
                combination. Even if support intervenes, the chance of a third attempt succeeding is non-trivially impaired.
                Worth letting it cool. Here are the realistic options, ranked.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On VPNs first, since you asked:
                </Word> Neither Browsec nor Proton VPN is likely to fix this for you, and either could make it worse. US
                Mobile's fraud detection treats VPN/proxy traffic as a <Word>
                    <Emphasis />
                    stronger
                </Word> negative signal than a foreign residential IP. A clean Tbilisi residential IP looks like "expat" —
                explainable. A VPN exit looks like "actively hiding location" — fraud-pattern. Of the two, <Word>
                    <Bold />
                    Proton is somewhat better than Browsec
                </Word> because Proton operates better-quality exit nodes and offers paid dedicated IPs that aren't on
                shared blocklists. Browsec's free tier IPs are heavily flagged. But honestly: if you're going to retry US
                Mobile after the cooldown, retry from a clean Tbilisi IP without a VPN, and lean on support context instead.
                The thing that wins you a manual approval is a human at US Mobile being convinced you're real, not your IP
                geography.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now the alternatives, ranked by realistic fit:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. AT&amp;T Prepaid downgrade — by far the lowest friction.
                </Word> You already have an AT&amp;T account. Convert your postpaid line to AT&amp;T Prepaid in-app. Same
                number, same network, same eSIM, no porting, no new account, no fraud check anywhere. Drop to AT&amp;T
                Prepaid 5GB for ~$25/month with autopay. Critical structural win: "International data roaming not available"
                by default on Prepaid, so there's no IDP feature to accidentally trigger. WiFi Calling continues working
                unchanged. Saves you ~$190/month vs current postpaid bill, no logistics. The eSIM can be re-provisioned
                within AT&amp;T's flow, which has historically worked from abroad for in-place plan changes (much friendlier
                than for new account creation).
            </Paragraph>
            <Paragraph>
                This is what I'd actually do given the US Mobile failure. It's not the <Word>
                    <Emphasis />
                    cheapest
                </Word> answer ($25 vs $5) but the difference is $20/month and the alternative is more weeks of
                carrier-fraud-detection roulette.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Have a US-based friend or family member sign up at US Mobile on your behalf.
                </Word> If you have someone trustworthy in the US, they sign up with their info, their address, their card,
                from their IP. No fraud flags. Once approved, you initiate the AT&amp;T port-in to that account. They hold
                the account paperwork; you use the line and pay them back. The number is yours by way of the port, but the
                Squarespace—wait, US Mobile—billing relationship is theirs. Slightly awkward but completely effective. Works
                fine for ongoing use because the eSIM, once activated, doesn't care about location.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Tello physical SIM + a cheap second device.
                </Word> Tello blocks eSIM activation from abroad, but their physical SIM works fine. The catch: your iPhone
                15 Pro is eSIM-only, so the SIM has to live in another phone. Buy a used Android in Tbilisi for $50, order
                the Tello SIM kit ($5/mo plan), have it shipped to your Traveling Mailbox NC address, package-forwarded to
                Tbilisi. Park the phone permanently at home on WiFi, with WiFi Calling enabled. SMS arrives there, and on
                iOS you can configure SMS forwarding (Settings → Messages → Text Message Forwarding) so messages received on
                the Android propagate to your iPhone via Apple ID. Total: $50 one-time + $60/year. Most robust against
                single-device failure (if iPhone breaks, your 2FA path doesn't break with it). Most logistical setup, but
                works.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Cricket Wireless (AT&amp;T's prepaid MVNO).
                </Word> Cricket runs on AT&amp;T's network and is owned by AT&amp;T. Their fraud detection for porting
                <Word>
                    <Emphasis />
                    from AT&amp;T
                </Word> is essentially nonexistent because the validation goes through their own parent company's records.
                Plans start at ~$25/month (similar to AT&amp;T Prepaid but slightly different feature set). eSIM available.
                Worth trying as a step up from #1 if you want a non-AT&amp;T-branded experience but with AT&amp;T's
                friendlier internal validation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Try US Mobile again in 2–3 weeks, after the flag cools.
                </Word> Different email, different browser session, no VPN, with proactive support email <Word>
                    <Emphasis />
                    before
                </Word> signing up explaining the situation and asking for pre-approval. Historically this works for some
                expats who got rejected on a first attempt. Slow path, no guarantee.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6. Mint Mobile or Boost Mobile.
                </Word> Both have eSIM. Both have looser fraud detection than US Mobile in some reports. Both also have less
                expat-friendly support if anything goes wrong. Possible but riskier than #1–4.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Recommendation, given the Georgia constraint and the eSIM-only constraint:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Do AT&amp;T Prepaid this week
                </Word> to stop the bleeding immediately and get to ~$25/month. No porting, no fraud detection, no new
                account, just an in-app plan change. You retain optionality — if down the road you want to try porting to a
                cheaper MVNO again, the AT&amp;T Prepaid number can be ported out at any time. But the urgent thing (stop
                paying $218 for service you don't really use) gets solved this week instead of next month.
            </Paragraph>
            <Paragraph>
                Then, if you want to push for the cheaper $5–10/month option later, queue up either #2 (US friend signup) or
                #3 (Tello physical + cheap Android) when you have the bandwidth. Neither needs to happen in May.
            </Paragraph>
            <Paragraph>What does AT&amp;T's prepaid section look like when you go to switch the plan?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:34:20.533088Z"
        >
            <Origin>019e1061-158d-70a8-a88e-da74332e7868</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm fine with AT&amp;T prepaid downgrade. Let's do that. What does prepaid mean and are you sure there's a
                $25 one? How do I find it on the website
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:35:54.022825Z"
        >
            <Origin>019e1061-158d-710f-93ab-4f4e899b8526</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me get you the current pricing and the switching path.</Paragraph>
            <Action>Searched the web for “AT&amp;T Prepaid plans pricing 2026 $25 5GB autopay current options”</Action>
            <Action>
                Searched the web for “AT&amp;T postpaid to prepaid switch keep same number eSIM iPhone process 2026”
            </Action>
            <Action>Searched the web for “"AT&amp;T Prepaid" plans list 2026 cheapest monthly 5GB autopay $30 $35”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    What "prepaid" means:
                </Word>
            </Paragraph>
            <Paragraph>
                You pay <Word>
                    <Emphasis />
                    before
                </Word> the service period starts (today, $30, for the next 30 days), instead of paying <Word>
                    <Emphasis />
                    after
                </Word> like postpaid (you used the service, here's the bill). Functional differences for your situation:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>No contract. Cancel anytime by simply not paying the next month.</Line>
                <Line>No credit check.</Line>
                <Line>
                    <Word>
                        <Bold />
                        No International Day Pass feature exists.
                    </Word> It's not a setting you toggle off — Prepaid lines literally cannot be enrolled in IDP.
                    Structural elimination of the $218 problem.
                </Line>
                <Line>
                    No international roaming by default. "International data roaming not available." If you want roaming
                    abroad, you have to actively buy a Travel Add-On (you don't, since Magticom handles your data).
                </Line>
                <Line>Same AT&amp;T network, same towers, same coverage. The eSIM and number are unchanged.</Line>
                <Line>
                    Slightly lower data priority during network congestion (deprioritized), which doesn't affect you since
                    you don't use the data.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pricing — the $25 needs an asterisk:
                </Word>
            </Paragraph>
            <Paragraph>
                The $25/month <Word>
                    <Emphasis />
                    requires 12-month upfront prepayment of $300
                </Word>. Online only. That's the AT&amp;T Prepaid 12-month plan: unlimited talk/text/data, 16GB high-speed
                cap then slowed to 1.5Mbps.
            </Paragraph>
            <Paragraph>
                The cheapest <Word>
                    <Emphasis />
                    month-to-month
                </Word> AT&amp;T Prepaid plan is <Word>
                    <Bold />
                    Unlimited Saver at $35/month
                </Word> (30GB capped at 3Mbps — slow data, but unlimited talk/text and you don't need data on this line
                anyway). "AT&amp;T Prepaid plans start at $30/mo" per AT&amp;T's own page, but the $30 might require autopay
                or be promotional — verify when you get to the plan picker.
            </Paragraph>
            <Paragraph>
                For your usage profile, <Word>
                    <Bold />
                    either works fine
                </Word>. The 12-month at $300 upfront saves you ~$120/year vs Unlimited Saver, but locks the money up.
                Unlimited Saver at $35/mo is risk-free month-to-month. Pick whichever suits how confident you are that you
                want to stay with AT&amp;T's network for a year.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How to find it / how to switch:
                </Word>
            </Paragraph>
            <Paragraph>
                Go to <Word>
                    <Bold />
                    att.com/prepaid/plans/
                </Word> for the standard plans, or <Word>
                    <Bold />
                    att.com/prepaid/multi-month-plans/
                </Word> for the 12-month $25/mo deal.
            </Paragraph>
            <Paragraph>
                The switch from postpaid to prepaid is <Word>
                    <Emphasis />
                    technically a number port within AT&amp;T
                </Word> — same number, same eSIM, but a new account on AT&amp;T's prepaid billing system. Process:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Sign up for AT&amp;T Prepaid online at the URL above.</Line>
                <Line>Pick the plan ($35/mo Unlimited Saver, or the $25/mo annual).</Line>
                <Line>
                    Choose <Word>
                        <Bold />
                        eSIM
                    </Word>.
                </Line>
                <Line>
                    Choose <Word>
                        <Bold />
                        "Bring your number" / "Transfer my number from another carrier"
                    </Word> — yes, even though it's AT&amp;T to AT&amp;T, the system treats it as a port.
                </Line>
                <Line>
                    Enter your existing AT&amp;T number (516-457-1715), the account number/BAN (512173974171), the billing
                    ZIP (27330), and the <Word>
                        <Bold />
                        Number Transfer PIN (191147)
                    </Word> — the same one we generated earlier. It's still valid until May 13.
                </Line>
                <Line>Pay the first month / first 12 months.</Line>
                <Line>
                    Install the new prepaid eSIM via QR code from the email AT&amp;T sends you. The old postpaid line
                    auto-cancels when the port completes.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Eligibility check
                </Word> (per AT&amp;T's official transition page): your postpaid account must have been active 30+ days
                (you're fine), it can't be a service bundle (wireless + internet combo), and you can't switch within 2 days
                before or 4 days after your billing cycle ends. So check when your AT&amp;T billing cycle resets, and avoid
                that window.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing that may or may not happen
                </Word>: AT&amp;T may use the same Transfer PIN for an internal port, or they may not require one at all and
                recognize the line as already theirs. Either way, the PIN we have is good through May 13 if needed.
            </Paragraph>
            <Paragraph>Annual savings vs your current $218/mo:</Paragraph>
            <Paragraph>
                <List />
                <Line>$35/mo Unlimited Saver = $420/year, savings of ~$2,200/year</Line>
                <Line>$25/mo annual prepaid = $300/year, savings of ~$2,300/year</Line>
            </Paragraph>
            <Paragraph>
                Get to att.com/prepaid/plans, screenshot what you see, and we'll pick the right tier together.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:37:40.385049Z"
        >
            <Origin>019e1064-20c5-759a-82ea-3351ee203d5d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here's what I see on plans,. It's messy:</Paragraph>
            <Paragraph>
                <List />
                <Line>Shop</Line>
                <Paragraph>
                    <List />
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Paragraph>
                <Line>Deals</Line>
                <Paragraph>
                    <List />
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Paragraph>
                <Line>AT&amp;T Difference</Line>
                <Paragraph>
                    <List />
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Paragraph>
                <Line>Support</Line>
                <Paragraph>
                    <List />
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>33 notifications</Paragraph>
            <Paragraph>
                <List />
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Paragraph>
            <Paragraph>Start of main content Back Change my plan</Paragraph>
            <Paragraph>
                <List />
                <Line>1. Change my plan</Line>
                <Line>2. Sign up for AutoPay &amp; paperless billing</Line>
                <Line>3. Review and submit</Line>
            </Paragraph>
            <Paragraph>
                UnlimitedUnlimitedOther plansOther plans Explore our unlimited data plans. Choose the right one for you.
                AT&amp;T may temporarily slow data speeds if the network is busy. DOUGLAS's Apple iPhone 15 Pro |
                516.457.1715 Close Price includes eligible AutoPay and paperless billing discount ($10/mo. per device when
                enrolled with a bank account. Discount reduced to $5/mo. with a debit card.) Excludes taxes, fees, certain
                credits, and additional charges. page 0page 1 Estimated new plan cost -- per month. -- Price excludes taxes,
                fees, certain credits, additional charges, and some applicable discounts.
            </Paragraph>
            <Paragraph>None of that strikes me as prepaid so where do I go?</Paragraph>
            <Attachment>Uploaded “1778391383200_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1778391431611_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1778391448996_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T05:38:09.793654Z"
        >
            <Origin>019e1064-20c6-73c3-bf73-5d1d3bea5f01</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — the "Change my plan" flow inside your postpaid account <Word>
                    <Emphasis />
                    only shows other postpaid plans
                </Word>. That's why you don't see prepaid options. AT&amp;T treats Postpaid and Prepaid as separate
                businesses internally, even though it's the same company.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    You have to leave the postpaid section entirely and start a Prepaid signup as if you were a new customer:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Go directly to <Word>
                        <Bold />
                        att.com/prepaid/plans/
                    </Word> in a new tab. (Or att.com/prepaid/multi-month-plans/ for the $25/mo annual deal.)
                </Line>
                <Line>
                    You'll see the actual prepaid plans — Unlimited Saver $35/mo, Unlimited Enhanced Plus $45/mo, etc., plus
                    the 12-month $300 ($25/mo) option.
                </Line>
                <Line>Pick a plan and click "Buy now" or "Get started."</Line>
                <Line>
                    AT&amp;T will ask if you want a <Word>
                        <Bold />
                        new number
                    </Word> or to <Word>
                        <Bold />
                        bring your existing number
                    </Word>. Choose <Word>
                        <Bold />
                        bring your existing number / transfer
                    </Word>.
                </Line>
                <Line>Enter:</Line>
                <Paragraph>
                    <List />
                    <Line>Phone number: 516-457-1715</Line>
                    <Line>Account number (BAN): 512173974171</Line>
                    <Line>Billing ZIP: 27330</Line>
                    <Line>Transfer PIN: 191147</Line>
                </Paragraph>
                <Line>
                    Choose <Word>
                        <Bold />
                        eSIM
                    </Word>, complete payment, install eSIM via QR code from email.
                </Line>
                <Line>The port completes, the postpaid line auto-cancels, you keep the number on prepaid.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Useful side observation from your screenshots:
                </Word> your current postpaid plan is <Word>
                    <Bold />
                    AT&amp;T Unlimited Premium PL at $90.99/month
                </Word>. So your $218 bill = $91 base + ~$120 in IDP roaming charges across about 10 days that month. The
                IDP charges were the bulk of the bleeding. Prepaid eliminates that vector entirely.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    While you're in the postpaid Change Plan view: you could also drop down to AT&amp;T Value 2.0 at $50/mo as an interim move
                </Word> if for some reason the prepaid signup hits a snag and you want immediate relief. Value 2.0 is still
                postpaid (so still has the IDP risk in theory), but at $50 base + blocked roaming, you'd at least be paying
                ~$50 instead of $91 while you sort out prepaid. Optional fallback.
            </Paragraph>
            <Paragraph>
                Don't change anything in the postpaid flow yet. <Word>
                    <Bold />
                    Open a new tab to att.com/prepaid/plans/ and start that signup.
                </Word> Screenshot what you see when you get to plan selection.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:39:49.946678Z"
        >
            <Origin>019e1066-1b7a-7065-b509-1475acd7dc0f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here we go:</Paragraph>
            <Paragraph>
                Unlimited data. Unreal prices. All our new unlimited plans include unlimited talk, text, and data, plus
                ActiveArmor® mobile security. New! 12 month unlimited + 10GB hotspot data $20.00 per month. $20.00/mo. When
                you prepay $240 After 16GB, slowed to max. 1.5Mbps. Online only. Req. SIM or phone purchase, activation on
                new single line, and $240 prepayment. Taxes, fees, terms, and restr's. apply. __See offer details__ Here’s
                what you’ll get: Unlimited talk, text and data 5G access included1 Unlimited text from the U.S. to over __<Word>
                    <Reference>https://www.att.com/prepaid/static-pages/intl-text-unlimited-list</Reference>
                    230 countries
                </Word>__ and territories Calls to Canada and Mexico from the U.S. AT&amp;T ActiveArmor® security2 Spam Call
                Blocking and more. 10GB hotspot data Standard-definition streaming Save on the best phones With this plan,
                you're eligible for our __<Word>
                    <Reference>https://www.att.com/buy/prepaid-phones/browse/hasdeals/</Reference>
                    most exciting offers.
                </Word>__ Online only Unlimited talk, text, and data $25.00 per month. $25.00/mo. 30GB/mo. at max 3Mbps,
                then speeds slowed to max 1.5Mbps. Online only. Req. new single line. Taxes and fees extra. Terms &amp;
                restr’s. apply. __See offer details__ Here’s what you’ll get: Unlimited talk, text and data AT&amp;T Level
                UpSM __Learn more__ Unlimited text from the U.S. to over __<Word>
                    <Reference>https://www.att.com/prepaid/static-pages/intl-text-unlimited-list</Reference>
                    230 countries
                </Word>__ and territories AT&amp;T ActiveArmor® security2 Spam Call Blocking and more. Standard-definition
                streaming New! Unlimited SaverSM $35.00 per month. $35.00/mo. 30GB/mo. at max 3Mbps then speed slowed to max
                1.5Mbps Single line only. Taxes and fees extra. Terms &amp; restrictions apply. __See offer details__ Here’s
                what you’ll get: Unlimited talk, text, and data AT&amp;T Level UpSM __Learn more__ Unlimited text from the
                U.S. to over __<Word>
                    <Reference>https://www.att.com/prepaid/static-pages/intl-text-unlimited-list</Reference>
                    230 countries
                </Word>__ and territories AT&amp;T ActiveArmor® security2 Spam Call Blocking and more. Standard-definition
                streaming Save on the best phones With this plan, you're eligible for our __<Word>
                    <Reference>https://www.att.com/buy/prepaid-phones/browse/hasdeals/</Reference>
                    most exciting offers.
                </Word>__ 5GB hotspot data $10.00 per month. plus taxes $10.00/mo. plus taxes Add it to your plan at any
                time in your __<Word>
                    <Reference>https://www.paygonline.com/websc/loginPage.html</Reference>
                    prepaid account.
                </Word>__
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:40:21.139359Z"
        >
            <Origin>019e1066-1b7a-7a88-aba3-7f2359fe9f80</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Three viable options. For your usage profile (no actual data needed, just SMS reception via WiFi Calling),
                the speed caps on these plans are irrelevant — you're not consuming the cellular data anyway.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pick the $25/month one.
                </Word>
            </Paragraph>
            <Paragraph>Here's the comparison:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        $20/mo annual
                    </Word>: $240 upfront for 12 months. Saves $60/year vs the monthly. But locks $240 up and commits you to
                    AT&amp;T network for a year.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $25/mo monthly
                    </Word>: Same coverage, same network, no commitment. Cancel anytime.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $35/mo "Unlimited Saver"
                    </Word>: $10 more for nothing you need. Skip.
                </Line>
            </Paragraph>
            <Paragraph>The $25 monthly is the right pick because:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    You just got bitten by US Mobile rejection. Lower-commitment options are appropriate while you confirm
                    prepaid actually works for your setup.
                </Line>
                <Line>
                    The annual saves only $60/year — not enough to justify locking in $240 prepaid given everything else in
                    flight (the audit, the eventual potential to revisit US Mobile or Tello via friend, etc.).
                </Line>
                <Line>You can always upgrade to the annual after a couple of months if it's working well.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Click into the $25/mo plan ("Unlimited talk, text, and data").
                </Word> The next screens should ask:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    New number or bring your number → <Word>
                        <Bold />
                        bring your number / transfer
                    </Word>
                </Line>
                <Line>
                    SIM type → <Word>
                        <Bold />
                        eSIM
                    </Word>
                </Line>
                <Line>Port-in info → enter your five values:</Line>
                <Paragraph>
                    <List />
                    <Line>Phone: 516-457-1715</Line>
                    <Line>Account: 512173974171</Line>
                    <Line>ZIP: 27330</Line>
                    <Line>Transfer PIN: 191147</Line>
                    <Line>Account holder: DOUGLAS RUBINO</Line>
                </Paragraph>
                <Line>Payment → your card</Line>
            </Paragraph>
            <Paragraph>
                The "Req. new single line" language just means the line has to be new to AT&amp;T Prepaid (not new to
                AT&amp;T overall). Porting in qualifies. You're not blocked by that.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One caveat to watch for:
                </Word> AT&amp;T's eligibility rules say "You also can't switch to AT&amp;T Prepaid two days before/four
                days after your bill period ends." If your AT&amp;T postpaid billing cycle is about to roll over in the next
                few days, the system might block the port-in. Check your bill cycle date in myAT&amp;T (or just try and see
                — if it blocks you, wait until the window opens).
            </Paragraph>
            <Paragraph>
                If the port-in flow rejects you for billing-cycle timing or any other reason, screenshot what it says and
                we'll work through it. Otherwise, proceed.
            </Paragraph>
            <Paragraph>
                Annual savings vs your current $218/mo: ~$2,300/year on the $25/mo plan. That's the real number.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:41:28.688661Z"
        >
            <Origin>019e1067-9d5f-79cf-92a3-0d933292e292</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay and does this plan have the roaming problem from random calls that my old one did?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:41:43.244682Z"
        >
            <Origin>019e1067-9d5f-786c-92c0-5e6dac98458a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>No. This is the structural win.</Paragraph>
            <Paragraph>
                The $25/mo Prepaid plan <Word>
                    <Bold />
                    cannot
                </Word> trigger IDP from random incoming calls because IDP doesn't exist as a feature on Prepaid — there's
                nothing to fire. Postpaid had a roaming agreement infrastructure with Magticom that defaulted to "let this
                line connect to foreign towers and bill it"; Prepaid doesn't have that infrastructure at all.
            </Paragraph>
            <Paragraph>
                What actually happens when someone calls your number while you're in Tbilisi on the new Prepaid line:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Caller dials 516-457-1715.</Line>
                <Line>AT&amp;T's network checks: where is this line registered?</Line>
                <Line>
                    If WiFi Calling is registered (your iPhone is on WiFi or Magticom data) → call routes via WiFi Calling,
                    internet path, no Georgian tower involved, no charge.
                </Line>
                <Line>
                    If WiFi Calling isn't registered → the call has nowhere to go. There's no foreign cellular fallback
                    because Prepaid doesn't have international roaming enabled. The caller hits voicemail or gets a "not
                    available" message. <Word>
                        <Bold />
                        No $12 trigger because there's no cellular roaming path to even attempt.
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                This is the mechanical difference from your old setup. Postpaid was "always reachable, sometimes via
                expensive roaming." Prepaid is "reachable only via WiFi Calling, never via foreign cellular." Same
                end-result for you (calls and SMS still arrive when WiFi Calling is up, which is essentially always given
                Magticom data is on), without the failure mode where a momentary WiFi Calling registration drop costs you
                $12.
            </Paragraph>
            <Paragraph>
                The official AT&amp;T Prepaid documentation states it plainly: "International data roaming not available."
                If you ever wanted to actively use the line abroad on a Georgian tower, you'd have to manually buy a Travel
                Add-On ($35 for 7 days). You won't, and that's the point — the dangerous default is gone.
            </Paragraph>
            <Paragraph>
                Voicemail isn't a leak vector either on Prepaid the way it was on Postpaid, because Prepaid voicemail also
                can't fire IDP charges (no IDP to fire).
            </Paragraph>
            <Paragraph>
                Net: same number, same SMS reception via WiFi Calling, same architecture you already use day-to-day. Just
                $25/mo instead of $218 and no random charge surprises.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:42:24.618212Z"
        >
            <Origin>019e1068-73f1-7072-8b09-4aa3725ab884</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Uh oh. Is this a trap? Should I say Tbilisi?</Paragraph>
            <Attachment>Uploaded “1778391731963_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T05:42:53.077402Z"
        >
            <Origin>019e1068-73f1-73e5-9b82-6dbd99e2fab6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Don't say Tbilisi. Use your Sanford, NC address (the one already on your AT&amp;T account).
                </Word>
            </Paragraph>
            <Paragraph>This isn't a trap — but answering "Tbilisi" would be. Here's why.</Paragraph>
            <Paragraph>
                The "Primary place of use" is a US tax/regulatory term, not a literal "where do you physically sit"
                question. The Mobile Telecommunications Sourcing Act requires US carriers to bill state and local taxes
                based on the customer's official US address — that's the data point they need from this field. The system
                expects and validates a US street address with a US ZIP. A Tbilisi street address will either be flat-out
                rejected by the form (no US ZIP), or worse, <Word>
                    <Bold />
                    trigger the same fraud-detection cascade that just got you bounced twice from US Mobile.
                </Word>
            </Paragraph>
            <Paragraph>
                The right answer here matches what AT&amp;T already has on file for your postpaid account:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    500 Westover Dr PMB 36118, Sanford, NC 27330
                </Word>
            </Paragraph>
            <Paragraph>Why this is the correct answer, not a workaround:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        It's already in AT&amp;T's system.
                    </Word> Your postpaid line uses this address; your prepaid line should match for the port-in to validate
                    cleanly.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It's a real US address.
                    </Word> Your Traveling Mailbox forwarding service is a legitimate residential mailbox at that location,
                    and AT&amp;T has been billing you there for the entire postpaid relationship.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It's the legally correct answer for US tax sourcing.
                    </Word> Your formal "place of primary use" in the regulatory sense <Word>
                        <Emphasis />
                        is
                    </Word> your US address — that's how mail forwarding, banking, brokerage, etc. all work for expats.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It's the answer AT&amp;T expects.
                    </Word> Their fraud system is calibrated to "US customer with US address." That's you. Don't break the
                    pattern.
                </Line>
            </Paragraph>
            <Paragraph>Clear what's in the field now (the 84 Lebri… text) and enter:</Paragraph>
            <CodeBox>
                {`500 Westover Dr PMB 36118
Sanford, NC 27330`}
            </CodeBox>
            <Paragraph>
                Then submit. The form will accept it because it matches their existing record. Port validation downstream
                will also pass for the same reason.
            </Paragraph>
            <Paragraph>
                This is the same logic as your billing address everywhere else — Citi, Mercury, IBKR, etc. all see Sanford
                NC. Consistency across all your US-facing accounts is what makes the expat infrastructure work. Diverging
                here would create a fraud signal for no benefit.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:44:04.734020Z"
        >
            <Origin>019e1069-fd3b-7063-aca0-73565662c40a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Now we're being asked this:</Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T05:44:42.123068Z"
        >
            <Origin>019e1069-fd3b-771e-a44a-9e3ebdca8365</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good — your address populated correctly (<Word>
                    <Verbatim />
                    500 WESTOVER DR, SANFORD, NC 27330
                </Word>).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pick the $25/mo "Unlimited talk, text and data" plan
                </Word> (the first one).
            </Paragraph>
            <Paragraph>Quick comparison so you know why:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word></Word>
                    <Word>$25/mo monthly</Word>
                    <Word>$35/mo Saver</Word>
                    <Word>$20/mo 12-month</Word>
                </Line>
                <Line>
                    <Word>Commitment</Word>
                    <Word>None</Word>
                    <Word>None</Word>
                    <Word>$240 upfront, locks 12 months</Word>
                </Line>
                <Line>
                    <Word>Talk/text</Word>
                    <Word>✓</Word>
                    <Word>✓</Word>
                    <Word>✓</Word>
                </Line>
                <Line>
                    <Word>Data speed cap</Word>
                    <Word>3Mbps</Word>
                    <Word>3Mbps</Word>
                    <Word>Full LTE/5G to 16GB</Word>
                </Line>
                <Line>
                    <Word>Hotspot</Word>
                    <Word>None</Word>
                    <Word>$10 add-on</Word>
                    <Word>10GB included</Word>
                </Line>
                <Line>
                    <Word>Annual cost</Word>
                    <Word>$300</Word>
                    <Word>$420</Word>
                    <Word>$240</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The $35 Saver is identical to $25 for what you need — you'd just be paying $10/mo extra for the option to
                add hotspot, which you'll never use. Skip it.
            </Paragraph>
            <Paragraph>
                The $20/mo annual saves $60/year but locks you in and ties up $240. Given you've just had US Mobile reject
                you twice and prepaid is uncharted territory, the lower commitment is worth $5/mo. You can switch to the
                annual after a few months of confirmed clean operation if you want.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing to flag in the fine print:
                </Word> the page footnote says "Starting February 6, 2026, the price of this plan will increase by $3 per
                month for all customers." That date already passed. The $25 displayed price is what AT&amp;T charges new
                sign-ups <Word>
                    <Emphasis />
                    as of right now
                </Word>. If you see anything different at checkout, that's why — but it should still match $25 today.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Click "Get this plan" on the $25 option.
                </Word> Next steps will be:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Pick your device
                    </Word> → choose <Word>
                        <Bold />
                        "Bring Your Own Device"
                    </Word> (you have the iPhone 15 Pro)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Customize your device
                    </Word> → likely eSIM/SIM choice → pick <Word>
                        <Bold />
                        eSIM
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bring your number
                    </Word> → enter the port-in info:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Phone: 516-457-1715</Line>
                    <Line>Account: 512173974171</Line>
                    <Line>ZIP: 27330</Line>
                    <Line>Transfer PIN: 191147</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Review and pay
                    </Word> → $25 plus the $0.16 NC Telecom Relay fee plus state tax. All-in around $26-27.
                </Line>
            </Paragraph>
            <Paragraph>Screenshot the next step if anything looks off.</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:46:20.797165Z"
        >
            <Origin>019e106c-1260-7129-80cf-48cb1ddb3e3e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>We're up to picking a device. We need esim right?</Paragraph>
            <Attachment>Uploaded “1778391969304_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T05:46:33.841994Z"
        >
            <Origin>019e106c-1260-7cbf-a9c2-4e2c47932750</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You don't want to buy a phone — you want to bring your iPhone 15 Pro.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Click "Check compatibility"
                </Word> in the gray box on the top-left ("Keep the phone you love — Switch to AT&amp;T Prepaid today with
                your current phone"). That's the BYOD (bring your own device) path. Don't click any of the iPhone 17 /
                Galaxy options — those are leasing flows.
            </Paragraph>
            <Paragraph>The "Check compatibility" flow will:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Ask for your iPhone's IMEI (find it in Settings → General → About → IMEI, or dial <Word>
                        <Verbatim />
                        *#06#
                    </Word> on the phone)
                </Line>
                <Line>Confirm it's eSIM-capable and unlocked (it is)</Line>
                <Line>Move you to the next step where you'll get the eSIM/SIM choice</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, on the next step pick eSIM.
                </Word> Your iPhone 15 Pro is eSIM-only anyway, so it's the only option that'll work.
            </Paragraph>
            <Paragraph>Click "Check compatibility" and screenshot the next page.</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:49:42.188834Z"
        >
            <Origin>019e106f-24e0-7fc3-9cda-fbbc2cf2b6a2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm putting in my IMEI and it's not found. I worry that my phone is esim only and mybe this is a sim check?
                Hard to know but its not working
            </Paragraph>
            <Attachment>Uploaded “1778392152973_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-10T05:50:05.292079Z"
        >
            <Origin>019e106f-24e0-74a7-9a22-dceae2327b6c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                iPhone 15 Pro has <Word>
                    <Bold />
                    two IMEIs
                </Word> plus an EID (the eSIM identifier). You're probably entering the wrong one. Try the others.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Get all of them at once:
                </Word> Open the Phone app on your iPhone, dial <Word>
                    <Bold />
                     0 
                </Word>, hit call. A screen pops up showing IMEI, IMEI 2, and EID. Try each in turn.
            </Paragraph>
            <Paragraph>Or via Settings → General → About → scroll down. You'll see:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        IMEI
                    </Word> (or "IMEI 1") — primary cellular
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        IMEI 2
                    </Word> — secondary, for the second eSIM slot
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        EID
                    </Word> — eSIM identifier
                </Line>
            </Paragraph>
            <Paragraph>The 353468917600597 you tried is one of them. Try the other IMEI and then the EID.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If none of them work:
                </Word>
            </Paragraph>
            <Paragraph>
                Possibility 1 — <Word>
                    <Bold />
                    AT&amp;T sees the device as already in use on your postpaid account, blocking it from prepaid activation as a "new" device.
                </Word> This would be a chicken-and-egg problem since your goal is to migrate this same device. The fix is
                to call AT&amp;T Prepaid support at <Word>
                    <Bold />
                    (877) 426-0525
                </Word> (the number on the legal disclosure page) and explain you're trying to port from your own postpaid
                line to prepaid using the same device. They can override the check.
            </Paragraph>
            <Paragraph>
                Possibility 2 — Database hiccup. Try in a different browser or after clearing cookies, since the failed
                attempt may have cached.
            </Paragraph>
            <Paragraph>
                Possibility 3 — eSIM-only device check is doing something weird. Some users report AT&amp;T Prepaid's BYOD
                flow having trouble with eSIM-only iPhone 15 Pros. Calling support resolves it in their system manually.
            </Paragraph>
            <Paragraph>Try the other IMEI/EID first. If that fails, call (877) 426-0525.</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:55:01.214956Z"
        >
            <Origin>019e1074-0346-77d8-beca-defc62dbb426</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>None worked. It says 15 digit MEI. It's the small one. But it can't find mine...</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:55:28.667296Z"
        >
            <Origin>019e1074-0346-7297-8793-357a4bac4c1d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Stop trying the website. The most likely diagnosis: AT&amp;T's prepaid BYOD checker is seeing that your
                iPhone's IMEI is <Word>
                    <Bold />
                    already active on your AT&amp;T postpaid account
                </Word>, and refusing to register it as a "new" prepaid device. The system is treating "this phone is
                already on AT&amp;T" as "this phone isn't eligible for activation," when really you just want the line type
                changed.
            </Paragraph>
            <Paragraph>
                This is exactly what their support reps handle manually. The website's automated check can't do it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Call AT&amp;T Prepaid support: (877) 426-0525
                </Word>
            </Paragraph>
            <Paragraph>
                You can dial this from your iPhone using WiFi Calling — it works the same as any US call. Or use Skype /
                Telegram-out / any VoIP service that can dial US numbers if you'd rather not use the AT&amp;T line for the
                call.
            </Paragraph>
            <Paragraph>What to say when you reach a rep:</Paragraph>
            <Paragraph>
                <Quoted />
                "Hi, I'm trying to port my existing AT&amp;T postpaid line to AT&amp;T Prepaid, keeping the same number and
                the same iPhone. I started the BYOD signup at att.com/prepaid, but the IMEI compatibility check keeps saying
                'IMEI not found' even though I've verified I'm entering the right IMEI from my device — I think it's because
                the device is already registered to my postpaid account. Can you help me complete the postpaid-to-prepaid
                port manually?"
            </Paragraph>
            <Paragraph>Have ready:</Paragraph>
            <Paragraph>
                <List />
                <Line>Phone number being ported: 516-457-1715</Line>
                <Line>Account number / BAN: 512173974171</Line>
                <Line>Billing ZIP: 27330</Line>
                <Line>Number Transfer PIN: 191147 (still good through May 13)</Line>
                <Line>
                    IMEI: any of the ones from <Word>
                        <Verbatim />
                        *#06#
                    </Word>
                </Line>
                <Line>
                    EID (32-character eSIM identifier, also from <Word>
                        <Verbatim />
                        *#06#
                    </Word>)
                </Line>
                <Line>Last 4 of card you'll pay with</Line>
            </Paragraph>
            <Paragraph>What they'll do:</Paragraph>
            <Paragraph>
                <List />
                <Line>Pull up your postpaid account, verify it's you</Line>
                <Line>Provision the prepaid line with port from your existing number</Line>
                <Line>Send you an eSIM QR code via email (or walk you through eSIM activation right then on the call)</Line>
                <Line>Tell you when the postpaid line will close</Line>
            </Paragraph>
            <Paragraph>
                This is the path the website was supposed to do automatically and choked on. The phone agent has tools to
                bypass the check.
            </Paragraph>
            <Paragraph>
                If for any reason this rep can't help, hang up politely, wait 10 minutes, call back — you'll get a different
                rep, and the second one is often more capable. AT&amp;T Prepaid support quality varies meaningfully across
                reps.
            </Paragraph>
            <Paragraph>
                Worth noting: this is a known friction point with AT&amp;T's flow for existing customers downgrading. Once
                you're past it (one phone call), prepaid runs cleanly. The pain is one-time.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:57:20.437724Z"
        >
            <Origin>019e1076-2337-781e-a053-77e1f5ec4175</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Got it. Just had to restart</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:57:26.281718Z"
        >
            <Origin>019e1076-2337-7e26-92e5-e484dbbd2369</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Nice — sometimes it really is that simple. Browser session got into a bad state, restart cleared it.
                AT&amp;T's site is notoriously stale.
            </Paragraph>
            <Paragraph>Continue through the flow:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Confirm the IMEI compatibility check passes</Line>
                <Line>
                    Choose <Word>
                        <Bold />
                        eSIM
                    </Word>
                </Line>
                <Line>
                    Choose <Word>
                        <Bold />
                        bring your number
                    </Word> / port-in
                </Line>
                <Line>
                    Enter the five values: phone 516-457-1715, account 512173974171, ZIP 27330, PIN 191147, account holder
                    Douglas Rubino
                </Line>
                <Line>Pay $25 + ~$0.16 NC fee + state tax (probably $26-27 total)</Line>
                <Line>Watch for the eSIM QR code email</Line>
                <Line>Install the eSIM, wait for port to complete</Line>
            </Paragraph>
            <Paragraph>Ping me if anything else looks weird at checkout.</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:58:04.383962Z"
        >
            <Origin>019e1076-ce7f-7f92-a62a-04ace879eb2a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm here now. I still didn't have to enter any of that data but maybe because AT&amp;T knows me:
            </Paragraph>
            <Paragraph>
                My cart Empty Wireless Line 1 Unlimited talk, text and data $25.00/mo. Unlimited Bring your own device eSIM
                Activation $1.29 Add another line and save Save more when you add additional lines to your account. Due
                today $26.29 $26.29 Plus taxes and fees. __See disclosures__ Price details Due today $26.29 Unlimited talk,
                text and data $25.00 eSIM Activation $1.29 Taxes and fees calculated at checkout. $-.-- What do I owe today?
                Savings &amp; promotions Got a promo code?
            </Paragraph>
            <Paragraph>*</Paragraph>
        </Message>
        <Message
            at="2026-05-10T05:58:36.787277Z"
        >
            <Origin>019e1076-ce80-7f8b-a1d7-4895c8762777</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Pause before paying. The cart doesn't show any port-in step, which is a yellow flag. Two possibilities:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A. Port-in is asked AFTER checkout, during eSIM activation
                </Word> — typical for AT&amp;T Prepaid. You'd pay $26.29, get the eSIM QR code emailed, install it, and
                during the activation walkthrough on your iPhone you'd be asked "new number or transfer existing." This is
                the likely path.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    B. They're about to assign you a brand new number
                </Word> — if you don't enter port-in info anywhere, the system defaults to issuing a fresh prepaid number.
                This is the scary path.
            </Paragraph>
            <Paragraph>
                You don't want to find out which it is by paying $26.29 and hoping. Two ways to verify before clicking pay:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: Look around the cart page first.
                </Word> Scroll up and down — is there a "Transfer phone number" or "Bring your number" button or link
                anywhere on this page? Sometimes it's collapsed under an accordion or in a sidebar. There may be an "Add
                line details" or "Customize" option on the Line 1 entry that opens up the port-in fields.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: Open AT&amp;T chat support to confirm.
                </Word> Bottom-right of the page should have a chat icon. Quick message:
            </Paragraph>
            <Paragraph>
                <Quoted />
                "I'm about to check out a $25 prepaid plan and want to port my existing AT&amp;T postpaid number
                516-457-1715 to it. The cart doesn't show a port-in step. Will I get to enter port info before or after
                payment? I want to be sure I keep my number."
            </Paragraph>
            <Paragraph>A live agent will tell you exactly. Should take 2-3 minutes.</Paragraph>
            <Paragraph>
                If chat confirms port-in happens during eSIM activation (path A), proceed with payment. If they say it
                doesn't and the line gets a new number by default (path B), they'll likely walk you through how to handle
                the port — possibly by adding the port-in info via a different URL or having them process it manually.
            </Paragraph>
            <Paragraph>
                Don't gamble on $26.29 — it's not the money, it's the risk of ending up with two AT&amp;T accounts and a
                number-recovery cleanup. Confirm first.
            </Paragraph>
            <Paragraph>What does the rest of the cart page look like? Anything below what's in the screenshot?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T06:01:25.707610Z"
        >
            <Origin>019e1079-e07d-738d-9865-cd1800f1dc8a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Uh oh the plot thickens:</Paragraph>
            <Paragraph>
                Mobile number Let us know if you want to keep your current number or get a new one. Line 1 Bring your own
                device eSIM activation Where will you use your device the most?
            </Paragraph>
            <Paragraph>Please provide us your place of primary use address. __Add address__</Paragraph>
            <Paragraph>
                Check if you can keep your number. If so, we'll make the transfer easy! Just don't cancel your existing
                service-that'll happen when you activate your new device. Enter your current number
            </Paragraph>
            <Paragraph>
                This number is already an AT&amp;T number. If you're not transferring a number from another carrier, you'll
                need to get a new number.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T06:01:52.857041Z"
        >
            <Origin>019e1079-e07d-7574-ac51-8352abc203fb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is the chicken-and-egg I warned about. AT&amp;T's website refuses to port your number to AT&amp;T
                Prepaid because the system sees the number is already on AT&amp;T (postpaid). The automated form has no
                logic for "intra-carrier port from postpaid to prepaid" — it's coded for "port from another carrier."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Stop the website signup. Don't pay anything. Don't get a new number — that defeats the purpose.
                </Word>
            </Paragraph>
            <Paragraph>This is exactly what their phone agents handle that the website can't.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Call AT&amp;T Prepaid: (877) 426-0525
                </Word>
            </Paragraph>
            <Paragraph>Use WiFi Calling from your iPhone or any VoIP service. The script:</Paragraph>
            <Paragraph>
                <Quoted />
                "Hi, I want to switch my existing AT&amp;T postpaid line to AT&amp;T Prepaid, keeping the same phone number
                and the same iPhone. I tried the online signup but the website rejects my own AT&amp;T number for transfer
                because it's already an AT&amp;T number. I need you to process this manually."
            </Paragraph>
            <Paragraph>What they should do:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Pull up your postpaid account, verify identity</Line>
                <Line>Take the $25/month plan order over the phone (they can charge your card)</Line>
                <Line>Provision a new prepaid line tied to your existing number</Line>
                <Line>Send you an eSIM QR code by email</Line>
                <Line>Walk you through eSIM activation if needed</Line>
                <Line>Schedule the postpaid line to close as the prepaid activates</Line>
            </Paragraph>
            <Paragraph>Have ready:</Paragraph>
            <Paragraph>
                <List />
                <Line>Phone number: 516-457-1715</Line>
                <Line>Account number / BAN: 512173974171</Line>
                <Line>
                    Account passcode (the 4-digit one you used to generate the transfer PIN, or any other AT&amp;T account
                    passcode you have)
                </Line>
                <Line>Billing ZIP: 27330</Line>
                <Line>
                    IMEI from your iPhone (<Word>
                        <Verbatim />
                        *#06#
                    </Word> for the lookup)
                </Line>
                <Line>Card you'll pay with</Line>
            </Paragraph>
            <Paragraph>
                You don't actually need the Number Transfer PIN for this since it's not a true port — it's an internal
                account-type change. The transfer PIN was for porting <Word>
                    <Emphasis />
                    out
                </Word> of AT&amp;T to a different carrier.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If the first rep gives you trouble
                </Word> — you'll know within 60 seconds if they're confused or competent. If they say "we can't do that" or
                try to push you to a store, hang up politely, wait 5 minutes, call back. Different rep, often different
                (better) answer. AT&amp;T's prepaid support quality is uneven.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you somehow get nowhere with phone support after 2-3 attempts:
                </Word> the structural workaround is to port your number out of AT&amp;T to a different carrier (Tello,
                Cricket, etc.) and then port it back to AT&amp;T Prepaid as an external port. That's a multi-week dance you
                don't want to do, but it bypasses the same-carrier block. Last resort only.
            </Paragraph>
            <Paragraph>
                Don't pay the $26.29 on the website right now — payment without porting risks creating a new prepaid line at
                a new number while your postpaid stays active. Mess. Call instead.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T06:03:17.601633Z"
        >
            <Origin>019e107b-9435-769f-b7d9-0a3f891b4c4c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you verify that this method actually works - calling directly? If it does, write a little editable
                artifact to walk me through it - with the number to call (remember I am international but have the
                international plan) - hours of operation converted to tbilisi time (and american), what to say, etc...
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T06:05:03.551598Z"
        >
            <Origin>019e107b-9436-7b68-a448-571cc7ac032d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me verify before writing the artifact.</Paragraph>
            <Action>
                Searched the web for “AT&amp;T Prepaid customer service phone postpaid switch number transfer success 2026”
            </Action>
            <Action>
                Searched the web for “"AT&amp;T Prepaid" support phone "877-426-0525" hours operation customer service”
            </Action>
            <Paragraph>
                Verified. AT&amp;T explicitly supports this via phone — their own docs say "When you're ready, contact us to
                start your transfer" for postpaid-to-prepaid. Phone agents have tools the website's BYOD form doesn't. Let
                me write the artifact.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/att-prepaid-call-walkthrough.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Edit freely. Two things worth knowing in advance:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The phone-based postpaid-to-prepaid migration is a documented AT&amp;T process
                </Word> — their own support page tells customers to "contact us to start your transfer" for this exact
                scenario, with a stated turnaround of 3–5 business days when initiated over the phone. So this isn't a
                workaround; it's the official path. The website's BYOD form just doesn't support it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The agent quality varies a lot.
                </Word> First rep might try to push you back to the website ("just go to att.com/prepaid"), or try to retain
                you on postpaid with a discount, or claim it can't be done. Don't engage. Politely repeat the request, ask
                for a supervisor, or hang up and call back. The capability exists; you're filtering for the agent who knows
                how to use it.
            </Paragraph>
            <Paragraph>
                Best window to call given today is Sunday May 10: late afternoon to early evening Tbilisi time gets you US
                morning reps, who tend to be sharper and have shorter holds.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T06:15:47.203635Z"
        >
            <Origin>019e1087-0466-7c16-af77-6c8041532e89</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here is the IMEI the IMEI2 and the EID in order. Place them in the correct part of the docs please:
            </Paragraph>
            <Paragraph>
                &#91;5/10/2026 9:47 AM&#93; Doug: 35 346891 760059 7&#91;5/10/2026 9:53 AM&#93; Doug: 35 346891 792756
                0&#91;5/10/2026 9:53 AM&#93; Doug: 89049032007208888900176907262882
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T06:16:02.731293Z"
        >
            <Origin>019e1087-0466-7c6b-9245-dea911dd25d5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Edited /mnt/user-data/outputs/att-prepaid-call-walkthrough.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Updated. All three identifiers now in the "Have ready before dialing" section. The rep will probably ask for
                the IMEI first (use IMEI 1: 353468917600597); the EID is what they'll need if they're remote-provisioning
                the eSIM directly to your device rather than emailing you a QR code.
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);
