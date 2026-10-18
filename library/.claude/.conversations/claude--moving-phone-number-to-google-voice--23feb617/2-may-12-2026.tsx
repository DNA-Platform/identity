import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Title>[[ 12 May 2026 ]]</Title>
        <Message
            at="2026-05-12T14:12:59.097622Z"
        >
            <Origin>019e1c88-a581-7ce2-ab01-5ae47df8287b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The prepaid requires me to have a prepaid number to connect me to someone. You need to find a way for me to
                call AT&amp;T where they recognize my number and can help me get prepaid. Maybe they will have to transfer
                me?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:14:14.044253Z"
        >
            <Origin>019e1c88-a581-76c0-91dc-12b61480e2d3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “AT&amp;T postpaid customer service phone number switch prepaid migration department
                transfer”
            </Action>
            <Paragraph>
                Good catch — the Prepaid line is for existing prepaid customers, which you're not yet. You need to come in
                through the Postpaid door, since they'll recognize your number. Let me fix the artifact.
            </Paragraph>
            <Action>Edited /mnt/user-data/outputs/att-prepaid-call-walkthrough.md</Action>
            <Action>Edited /mnt/user-data/outputs/att-prepaid-call-walkthrough.md</Action>
            <Action>Edited /mnt/user-data/outputs/att-prepaid-call-walkthrough.md</Action>
            <Action>Edited /mnt/user-data/outputs/att-prepaid-call-walkthrough.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Updated. Key change: you're now coming in through the <Word>
                    <Bold />
                    Postpaid
                </Word> door (dial 611 from your iPhone or 1-800-331-0500 from anything else), where they recognize your
                line immediately and there's no "enter your prepaid number" gate. You're asking them to either process the
                migration directly or warm-transfer you internally to the Prepaid migration team — bypassing the public
                Prepaid IVR that's blocking you.
            </Paragraph>
            <Paragraph>
                The script now explicitly addresses the IVR routing problem upfront so the postpaid rep doesn't just hang up
                and send you back to the Prepaid number.
            </Paragraph>
            <Paragraph>Two practical notes:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    611 over WiFi Calling is the cleanest path
                </Word> because it's free, immediate, and the rep sees your AT&amp;T account before you say a word. They can
                pull up your postpaid line, your billing, your iPhone IMEI, all of it, without you having to verify anything
                beyond the account passcode.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The "warm transfer" language matters.
                </Word> A warm transfer means the postpaid rep stays on the line to introduce you to the prepaid rep,
                briefing them on what you need. That prevents the second rep from asking you for a prepaid number to route
                you. If you let them do a "cold transfer" (send you to the prepaid public line), you end up in the same IVR
                dead-end.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:15:23.561224Z"
        >
            <Origin>019e1c8a-d84b-7590-bb6f-eaf9062b1de4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude... did you remove the script and all the id numbers from the document? Y'know, everything useful?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:15:36.384075Z"
        >
            <Origin>019e1c8a-d84b-7cf5-8bd3-41bcb3f9f810</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/user-data/outputs/att-prepaid-call-walkthrough.md</Action>
            <Paragraph>
                No, everything is still there — script (lines 49-55), all the ID numbers (lines 38-47, with your IMEIs and
                EID), three-strike rule, cost table, fallbacks, all of it. The document is intact and ~110 lines.
            </Paragraph>
            <Paragraph>
                My update to your concern about "the prepaid line wants a prepaid number" replaced two sections (the
                Numbers, Hours, Script, and Fallback bullets) with new versions tuned to calling postpaid customer service
                instead. Net change: similar length, more useful framing.
            </Paragraph>
            <Paragraph>
                You may have been looking at a cached or pre-update version of the file in your viewer. Reopen the artifact
                — everything's in there. Specifically:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Script
                    </Word>: line 51, full opening line, plus retention pushback (53) and warm-transfer language (55)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ID numbers to have ready
                    </Word>: lines 38–47, including phone, BAN, ZIP, name, all three device identifiers, and email
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Hours with Tbilisi conversion
                    </Word>: lines 17–28
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What the call should accomplish
                    </Word>: lines 57–64
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Three-strike fallback
                    </Word>: lines 66–74
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cost table
                    </Word>: lines 90–100
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fallback options if AT&amp;T won't process
                    </Word>: lines 102–110
                </Line>
            </Paragraph>
            <Paragraph>
                If the version you're looking at really is missing content, refresh or re-download. Otherwise we're good —
                you have everything to make the call.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:18:49.017502Z"
        >
            <Origin>019e1c8d-fb5b-7e87-99ef-1a9e0c8309d9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can I do online support? The main one won't connect me to an agent about prepaid and prepaid won't connect
                me without a number. Is there chat support?&gt;
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:19:41.918461Z"
        >
            <Origin>019e1c8d-fb5b-7f10-9b08-b3995df2f670</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “AT&amp;T live chat support wireless postpaid prepaid migration website 2026”
            </Action>
            <Paragraph>Yes, two chat paths, and one of them is potentially perfect for your situation.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Best option: Text "prepaid" to 75421.
                </Word> AT&amp;T Prepaid's own SMS chat support. Mon–Sat 9 AM – 11 PM ET, Sun 10 AM – 11 PM ET. You send
                from your AT&amp;T iPhone (over WiFi Calling), so:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    They see your number, recognize you as an existing AT&amp;T customer (just on the postpaid side)
                </Line>
                <Line>No IVR maze to navigate</Line>
                <Line>No "enter your prepaid number to continue" gate</Line>
                <Line>Async — you can think before responding, paste IMEIs and EID cleanly without reading them aloud</Line>
                <Line>
                    Works regardless of which side (postpaid/prepaid) the rep is technically on, because SMS chat just
                    routes you to whoever's available
                </Line>
            </Paragraph>
            <Paragraph>Hours converted to Tbilisi (you're in the Sunday window today):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Sun 10 AM – 11 PM ET = 6 PM Tbilisi Sunday to 7 AM Tbilisi Monday
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mon–Sat 9 AM – 11 PM ET = 5 PM Tbilisi to 7 AM Tbilisi (next day)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Right now (assuming you're sending this around your usual hours) the window is wide open.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Backup option: Live chat on att.com.
                </Word> Go to <Word>
                    <Bold />
                    att.com/support/contact-us/
                </Word> — look for a "Chat" button bottom-right of the page (or in the contact options). Available roughly
                24/7 per their site. Same content, different UI. The advantage of att.com chat is you're already logged into
                your AT&amp;T account, so they pull up your full account context immediately. The disadvantage is sometimes
                the website chat starts with a bot that tries to deflect, and you have to push past "I want to talk to a
                human" prompts.
            </Paragraph>
            <Paragraph>Let me update the artifact to add the chat paths.</Paragraph>
            <Action>Edited /mnt/user-data/outputs/att-prepaid-call-walkthrough.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Phone numbers still in there for fallback, but the SMS chat path is now at the top of the options. Try
                <Word>
                    <Bold />
                    text "prepaid" to 75421
                </Word> from your AT&amp;T iPhone first. That's the lowest-friction route — they see your existing AT&amp;T
                number immediately, no IVR routing problem, no calling problem, and you can paste IMEIs and EIDs cleanly
                without reading 32-character strings out loud.
            </Paragraph>
            <Paragraph>
                If SMS chat says they can't do it or routes you to a number you can't reach, fall through to att.com chat
                (you're logged in, so account context is automatic), then to 611/1-800-331-0500 by phone.
            </Paragraph>
            <Paragraph>
                The script is essentially the same regardless of channel — explain you're a postpaid customer wanting to
                migrate to prepaid, the website refused the port because the number is already AT&amp;T, you want the $25
                plan on eSIM, keeping the same number and same iPhone.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:22:35.887690Z"
        >
            <Origin>019e1c91-7129-7543-bca6-673516f629b1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                If this doesn't work, do I transfer to another service AND THEN transfer back to AT&amp;T prepaid? That's
                dumb. We might just need another service to transfer to
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:23:30.294601Z"
        >
            <Origin>019e1c91-7129-7193-82fe-386ac9be143b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — porting out and back is theater, not strategy. If AT&amp;T won't take you, just commit to
                wherever you port to. Let me lay out the real destination options ranked by likelihood of working given
                everything we've learned.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Top backup: Cricket Wireless
                </Word> ($25/mo). Cricket is <Word>
                    <Emphasis />
                    owned by AT&amp;T
                </Word> and runs on AT&amp;T's network. Why this matters:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Porting <Word>
                        <Emphasis />
                        out of
                    </Word> AT&amp;T <Word>
                        <Emphasis />
                        to
                    </Word> Cricket is functionally an internal transfer at the parent-company level. The number lookup says
                    "AT&amp;T → AT&amp;T-owned MVNO" which is much friendlier than "AT&amp;T → US Mobile" was.
                </Line>
                <Line>
                    Same network means same WiFi Calling behavior you have today. Your street SMS reception via Magticom
                    data will work identically.
                </Line>
                <Line>
                    eSIM activation tends to be more permissive than US Mobile's because Cricket sees fewer fraud signals on
                    AT&amp;T→AT&amp;T-network ports.
                </Line>
                <Line>
                    Plan: Cricket Core ($25/mo, unlimited talk/text + 5GB data) or Core+ ($30/mo, unlimited everything).
                    Both cap at 8Mbps download, which doesn't matter to you since you don't use the data anyway.
                </Line>
                <Line>No IDP, no auto-roaming, same structural protection as AT&amp;T Prepaid.</Line>
                <Line>
                    Sign up at <Word>
                        <Bold />
                        cricketwireless.com
                    </Word>, choose "Bring Your Own Phone," select eSIM, port your number with the AT&amp;T transfer PIN
                    (191147).
                </Line>
            </Paragraph>
            <Paragraph>If Cricket also rejects you for the same Tbilisi-IP fraud reasons as US Mobile did:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Second: Mint Mobile
                </Word> ($15-25/mo). T-Mobile network, generally has the most permissive activation flow among the budget
                MVNOs. eSIM available. $15/mo for 5GB plan or $25/mo unlimited; annual plans dropping prices further.
                Reports of expats successfully activating from abroad are common. The downside vs Cricket: different
                network, you'd be relearning WiFi Calling registration behavior on T-Mobile's IMS (which is generally robust
                but not what you currently have).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Third: Have someone in the US sign up for US Mobile on your behalf.
                </Word> $5/mo, they're the account holder, you pay them back. Requires a trusted US-based person with their
                own address, IP, and willingness to attach the line to their own paperwork. The structural risk: if they
                ever stop paying or move on, your number is on their account. But for $5/mo with a reliable friend or family
                member, this is the cheapest sustainable path.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fourth: Tello physical SIM + $50 used Android in Tbilisi.
                </Word> $5/mo Tello, physical SIM shipped to Traveling Mailbox NC, package-forwarded to Tbilisi, activated
                in a cheap Android parked at home. SMS Forwarding from Android to iPhone via... actually wait, iOS Text
                Message Forwarding only works between Apple devices. Cross-Android forwarding requires third-party apps and
                is unreliable. Scratch that part — you'd need to actually check the Android for the SMS, which defeats the
                convenience. Drop this option unless desperate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Floor option: Keep AT&amp;T postpaid, downgrade to AT&amp;T Value 2.0 ($50/mo), block international roaming.
                </Word> Eliminates the IDP risk via the blocked-roaming flag, drops your bill from $218 to ~$55 all-in, no
                porting, no fraud detection anywhere. Worse than $25 Prepaid on monthly cost but lowest friction by a mile.
                If you've tried text-75421, att.com chat, 611 phone, and the migration is genuinely refused — and
                Cricket/Mint also reject you — this is the "give up on $25/mo and accept $55/mo" fallback. Still saves you
                ~$2,000/year.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Realistic recommended sequence:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Try text "prepaid" to 75421 from your iPhone (5 minutes effort, highest success probability)</Line>
                <Line>If that fails, try att.com chat (5 minutes)</Line>
                <Line>If that fails, try 611 by voice (15 minutes)</Line>
                <Line>If all three AT&amp;T paths fail: Cricket Wireless eSIM signup (30 minutes)</Line>
                <Line>If Cricket rejects: Mint Mobile eSIM signup (30 minutes)</Line>
                <Line>
                    If Mint also rejects: pause, evaluate whether to involve a US friend for US Mobile, or accept AT&amp;T
                    postpaid at $50/mo as the floor.
                </Line>
            </Paragraph>
            <Paragraph>
                You're unlikely to need to go beyond step 4. The Cricket angle specifically wasn't fully on the table
                earlier because we were focused on AT&amp;T-internal — but as a "commit to a destination" play, Cricket is
                the natural next stop. AT&amp;T's own subsidiary, same network, friendlier port mechanics.
            </Paragraph>
            <Paragraph>
                Want me to add this branching tree to the artifact so you have it written down when running through the
                calls/chats?
            </Paragraph>
        </Message>
    </Chapter>
);
