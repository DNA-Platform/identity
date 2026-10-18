import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Title>[[ 13 May 2026 ]]</Title>
        <Message
            at="2026-05-13T07:41:26.354589Z"
        >
            <Origin>019e2048-87db-753f-bfd7-c49706fa05cf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I'm frustrated with AT&amp;T. Maybe cricket will be faster. Any downsides to switching</Paragraph>
        </Message>
        <Message
            at="2026-05-13T07:41:47.740217Z"
        >
            <Origin>019e2048-87db-7fe8-a066-4571378d46cc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Switching to Cricket is a reasonable move and probably the right call given the friction. Honest downsides:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cost:
                </Word> Cricket Core is $25/mo + tax/fees ≈ $27-28 all-in. AT&amp;T Prepaid would have been the same $25 +
                the same fees. So no monetary difference vs the AT&amp;T Prepaid you were trying to get. The savings vs your
                current $218 postpaid bill are identical: ~$2,300/year.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Customer service quality:
                </Word> Cricket support is generally rated worse than AT&amp;T's. Smaller team, longer holds, less authority
                to escalate. If something goes wrong with your line a year from now, you'll feel it. AT&amp;T's prepaid
                support isn't great either but has more depth.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Data speed cap:
                </Word> Cricket Core is capped at 8 Mbps regardless of network conditions, vs AT&amp;T Prepaid's $25 plan
                that's 3 Mbps after 30GB. Both irrelevant to you (Magticom does data), but worth noting Cricket's 8Mbps is
                actually higher than AT&amp;T Prepaid's 3Mbps cap.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Deprioritization:
                </Word> Cricket lines are heavily deprioritized during network congestion on AT&amp;T's towers. Means slower
                data when towers are busy. Again irrelevant to you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mobile hotspot:
                </Word> Cricket Core doesn't include hotspot (Core+ at $30/mo does, with 15GB). AT&amp;T Prepaid $25 didn't
                have hotspot either. Same.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No "Level Up" benefit:
                </Word> AT&amp;T Prepaid's $25 plan included "Level Up" — pay on time for 6 months, get $0-down financing
                access at postpaid later. Cricket has its own loyalty program (Cricket Credits, similar idea) but not as
                well known. Probably doesn't matter to you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Roaming:
                </Word> Same structural win as AT&amp;T Prepaid — no international roaming enabled by default on Cricket
                prepaid, no IDP feature exists, no auto-billing for foreign tower connections. WiFi Calling supported. Same
                architecture.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Activation risk:
                </Word> The reason we're discussing Cricket is the <Word>
                    <Emphasis />
                    hope
                </Word> that their fraud detection is friendlier than US Mobile's because of the AT&amp;T parent
                relationship. But it's not guaranteed. Cricket runs its own activation system. There's a non-zero chance
                they reject you for the same Tbilisi-IP/US-billing-address mismatch that got US Mobile to bounce you. We
                won't know until you try.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One-way nature:
                </Word> Once you port AT&amp;T → Cricket, getting back to AT&amp;T Prepaid later would require porting
                Cricket → AT&amp;T Prepaid, which is its own friction (different fraud system, same eSIM-from-abroad
                concerns we had on US Mobile). You're committing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Net assessment:
                </Word> No structural downsides for your use case. Same price, same network, same WiFi Calling reliability,
                same SMS-on-the-street behavior. The reason to do Cricket is faster execution. The reason <Word>
                    <Emphasis />
                    not
                </Word> to do Cricket is if you think AT&amp;T's chat support (75421 SMS or att.com chat) might still come
                through and you'd rather spend 30 more minutes there than start over.
            </Paragraph>
            <Paragraph>
                My honest call: if you've already tried 75421 SMS and att.com chat without success, just go to <Word>
                    <Bold />
                    cricketwireless.com
                </Word>, sign up with eSIM and BYOD, port using the same five values (516-457-1715, BAN 512173974171, ZIP
                27330, PIN 191147, name Douglas Rubino), and be done in 20 minutes. If you haven't tried 75421 SMS yet,
                that's 5 minutes — try it first, then commit to Cricket if it doesn't pan out.
            </Paragraph>
            <Paragraph>Want me to write a Cricket-specific walkthrough artifact that mirrors the AT&amp;T one?</Paragraph>
        </Message>
        <Message
            at="2026-05-13T07:42:59.101576Z"
        >
            <Origin>019e2049-f0ba-7491-aa32-a07580b7cd56</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Don't love the deprioritization. Is there another service to switch to that's affordable. I am in georgia
                with an esim, so it has to work for that
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T07:43:47.107164Z"
        >
            <Origin>019e2049-f0ba-7902-afe3-100f3e7add70</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Honest reframe first, then options.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The deprioritization concern probably doesn't matter for your use case.
                </Word> Deprioritization affects <Word>
                    <Emphasis />
                    cellular data speeds during network congestion
                </Word>. You don't use cellular data on the US line — Magticom handles all your data. SMS and voice calls
                ride on IMS/VoLTE, which is prioritized separately from data and isn't affected by MVNO deprio. So in
                practice, on Cricket vs AT&amp;T Prepaid vs Mint, your SMS would arrive identically. The deprio difference
                would only matter if you ever tethered or actively used the US line for cellular data in the US, neither of
                which is your pattern.
            </Paragraph>
            <Paragraph>That said, here are the genuinely lower-deprio options that work for eSIM-from-Tbilisi:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Best for "minimal deprio + actually works from abroad": Mint Mobile.
                </Word>
            </Paragraph>
            <Paragraph>
                T-Mobile MVNO, mid-tier deprio (lighter than Cricket, lighter than Visible base), eSIM available.
                Critically: Mint has a documented track record of permissive activation from foreign IPs — they're popular
                with the expat crowd and don't have the aggressive fraud detection that bit you at US Mobile. Pricing:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>5GB plan: $15/mo</Line>
                <Line>15GB plan: $20/mo</Line>
                <Line>Unlimited: $30/mo</Line>
                <Line>
                    Annual prepay drops these further (e.g., 5GB annual = ~$15/mo, sometimes $10/mo on intro promos)
                </Line>
            </Paragraph>
            <Paragraph>
                Sign up at <Word>
                    <Bold />
                    mintmobile.com
                </Word>, choose BYOD + eSIM + port-in. For your use case (no data needed) the 5GB plan at $15/mo is plenty —
                saves you ~$120/year over Cricket. Same WiFi Calling architecture as Tello/T-Mobile.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alternative: Visible
                </Word> ($25/mo) or <Word>
                    <Bold />
                    Visible+
                </Word> ($45/mo). Verizon-owned, eSIM. Visible+ specifically has Premium Network access (full Verizon
                priority, no deprio). Different fraud system than US Mobile so it's worth a try if Mint also fails. Cons:
                Verizon's WiFi Calling has been historically slightly more restrictive about non-WiFi internet sources than
                T-Mobile's, which may or may not affect your street-SMS-over-Magticom-data behavior. Visible's $25 base plan
                has heavy deprio (similar to Cricket); only Visible+ at $45 has the no-deprio benefit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The "I'm done fighting this" option: AT&amp;T 4GB Postpaid downgrade + block roaming.
                </Word>
            </Paragraph>
            <Paragraph>
                You already have an AT&amp;T postpaid line. You can downgrade in-app right now from your current $90.99
                Premium PL plan to <Word>
                    <Bold />
                    AT&amp;T 4GB at $50/mo
                </Word>, then call AT&amp;T International to block roaming. Total all-in: ~$55-58/mo. No porting, no fraud
                detection, no eSIM activation flow, no chat-support nightmare. Your line continues to work exactly as it
                does today, but without the IDP risk because roaming is blocked at the network level.
            </Paragraph>
            <Paragraph>Tradeoffs vs Mint $15:</Paragraph>
            <Paragraph>
                <List />
                <Line>$35-40/mo more = $420-480/year extra</Line>
                <Line>Zero activation risk</Line>
                <Line>Postpaid network priority (no deprio at all)</Line>
                <Line>Existing customer support relationship</Line>
                <Line>
                    Same number, same network, same WiFi Calling — <Word>
                        <Emphasis />
                        everything
                    </Word> you have today, just cheaper and roaming-safe
                </Line>
            </Paragraph>
            <Paragraph>
                For someone who's just spent hours fighting carrier websites and chatbots, the $420/year premium for "this
                just works today" is a reasonable price.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical ranking given your frustration level:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    If you have 30 more minutes of patience: <Word>
                        <Bold />
                        try Mint Mobile
                    </Word> (mintmobile.com → eSIM port-in). $15/mo, T-Mobile network, expat-friendly activation. Best
                    long-term economics if it accepts you.
                </Line>
                <Line>
                    If Mint rejects you: <Word>
                        <Bold />
                        AT&amp;T 4GB postpaid downgrade + block roaming
                    </Word>. ~$55/mo, immediate, zero further friction. Done.
                </Line>
                <Line>
                    Cricket remains an option if you decide Mint's T-Mobile network is somehow wrong for you and Visible's
                    fraud detection rejects you — but I'd skip it now given your deprio aversion.
                </Line>
            </Paragraph>
            <Paragraph>
                The honest summary: for a line whose only job is receiving SMS via WiFi Calling, deprio is theoretical. The
                real question is <Word>
                    <Emphasis />
                    which carrier will actually let you activate from Tbilisi
                </Word>. Mint has the best track record on that. AT&amp;T postpaid downgrade has the best track record on
                "just keep working." Pick based on whether you want $180/year savings (Mint) or 5 minutes of remaining
                effort (AT&amp;T downgrade).
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T07:45:36.766364Z"
        >
            <Origin>019e204c-5975-780d-828b-ddf27229f224</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Mint sounds good. And roaming safe - are you sure? No auto-international? I will get text messages for
                things like 2FA access codes?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T07:45:58.518831Z"
        >
            <Origin>019e204c-5975-76b5-9540-69e580123a10</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes on all three, with the same architecture you already have working. Let me be precise about each.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Roaming-safe: yes.
                </Word> Mint Mobile is a T-Mobile MVNO and follows the same prepaid structural model as Tello, US Mobile,
                and AT&amp;T Prepaid. Mint's published policy: international roaming is <Word>
                    <Bold />
                    opt-in only
                </Word>, requires you to actively purchase an "UpRoam" credit pack (their version of pay-as-you-go
                international), and is disabled by default on every line. There is no IDP-equivalent feature on Mint.
                There's no auto-trigger when your phone touches Magticom's tower. T-Mobile's home network (Mint's parent)
                simply refuses to authorize roaming for your line because Mint hasn't enabled it. Your phone shows "No
                Service" on the cellular side, exactly like it would on Tello or US Mobile or AT&amp;T Prepaid. Zero risk of
                surprise charges.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No auto-international: confirmed.
                </Word> Mint sells international features as explicit add-ons — UpRoam for data/calls abroad, international
                long-distance for outbound calls from the US to foreign numbers. Both require active purchase via the Mint
                app. Neither auto-applies. You won't have either enabled, and the only way to accidentally enable them is to
                intentionally buy them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SMS reception for 2FA: yes, identical mechanism to today.
                </Word> Mint runs on T-Mobile's IMS infrastructure, which supports WiFi Calling on all standard plans. The
                flow:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Bank sends SMS to your number (516-457-1715 after the port).</Line>
                <Line>Mint's network sees your line is registered via WiFi Calling.</Line>
                <Line>
                    SMS routes over the internet to your phone — via your home WiFi when you're indoors, via Magticom's
                    cellular data when you're on the street.
                </Line>
                <Line>Arrives in Messages.</Line>
            </Paragraph>
            <Paragraph>
                Same architecture as your current AT&amp;T setup. The only thing that changes is which carrier's IMS servers
                are holding your registration. T-Mobile's IMS handles non-WiFi internet sources (i.e., your Magticom data)
                reliably — it's the same reason I recommended T-Mobile-based options (Mint, Tello, US Mobile Light Speed)
                over Verizon-based ones earlier.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The same caveats that exist for AT&amp;T also exist for Mint
                </Word> — these aren't Mint-specific weaknesses:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    WiFi Calling needs to be registered when the SMS arrives. Brief drops happen on any carrier; the SMS
                    queues and delivers within seconds to a minute. Same as today.
                </Line>
                <Line>
                    A small number of bank SMS shortcodes can be quirky on specific carriers' WiFi Calling. Mint inherits
                    T-Mobile's shortcode handling, which has the broadest compatibility in the US market — IRS, SSA, Chase,
                    Citi, BofA, Fidelity, Schwab, PayPal, Mercury, IBKR all standardly work. You won't know with 100%
                    certainty until tested with <Word>
                        <Emphasis />
                        your
                    </Word> accounts on the new line.
                </Line>
                <Line>
                    T-Mobile's WiFi Calling registration on iPhone is generally robust. Some users report needing to toggle
                    WiFi Calling off and on once after first installing the eSIM to force registration, but it's a one-time
                    setup quirk.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bank-friendliness: high.
                </Word> Mint numbers are provisioned through T-Mobile's number pool. Carrier lookup databases report them as
                legitimate T-Mobile mobile numbers, not VoIP. This is the same property that makes Tello bank-friendly —
                it's not Mint-specific, it's the T-Mobile-number-pool property. Banks that block VoIP numbers don't block
                Mint numbers.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Verify-during-overlap protocol still applies, same as we discussed for any switch:
                </Word> keep AT&amp;T alive for ~30 days after Mint's port completes, test 2FA from each financial account
                during the overlap, cancel AT&amp;T only when confirmed working. This is cheap insurance ($55 for one extra
                month of AT&amp;T) against the small chance of an edge case with one specific bank.
            </Paragraph>
            <Paragraph>
                The net answer: yes, Mint is roaming-safe by design, has no auto-international anything, and your
                SMS-on-the-street behavior carries over unchanged. Same setup, lower bill, T-Mobile network instead of
                AT&amp;T. Go to <Word>
                    <Bold />
                    mintmobile.com
                </Word>, click "Bring Your Phone," choose eSIM and port-in, use your five values when prompted.
            </Paragraph>
            <Paragraph>
                If you want, I'll write a Mint-specific walkthrough artifact like the AT&amp;T one — port-in info ready,
                eSIM activation steps, what to do if their fraud check trips. Want that?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T07:49:02.709967Z"
        >
            <Origin>019e204f-7e5b-7d79-9706-667adaf796f8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay here: Choose Your Phone Plan All plans include the essential features. Free Mobile Hotspot Coverage on
                the Nation’s Largest 5G Network Free Calling to Mexico, Canada &amp; the UK Unlimited Talk &amp; Text
                Award-Winning Customer Care High-Speed Data 3 Months New customer offer 6 Months 12 Months 5GB/mo 15GB/mo
                20GB/mo UNLIMITED $10/mo ~~$15/mo~~ $30 upfront payment required $15/mo ~~$20/mo~~ $45 upfront payment
                required $20/mo ~~$25/mo~~ $60 upfront payment required $25/mo ~~$30/mo~~ $75 upfront payment required
                $20/mo $120 upfront payment required $25/mo $150 upfront payment required $35/mo $210 upfront payment
                required $35/mo $210 upfront payment required $15/mo $180 upfront payment required $20/mo $240 upfront
                payment required $25/mo $300 upfront payment required $30/mo $360 upfront payment required
            </Paragraph>
            <Paragraph>
                Assume I will only be in the states for max two weeks at a time rarely. And in Georgia otherwise. I need
                text messages mostly, the occaisional call when they need it to come from my US number. Which of these do
                you recommend?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T07:49:28.437632Z"
        >
            <Origin>019e204f-7e5b-7c82-9d8c-e08175dd7d14</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Pick: 3 Months / 5GB / $10/mo ($30 upfront).
                </Word>
            </Paragraph>
            <Paragraph>Reasoning is straightforward given everything we've learned today:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why 5GB:
                </Word> You'll use roughly 0GB on this line. Magticom handles all your data in Tbilisi, and for your rare
                2-week US trips, 5GB is more than enough for casual use. Anything above 5GB is paying for data you don't
                consume. The 15GB/20GB/Unlimited tiers are wasted money for your usage profile.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why 3 months, not 12:
                </Word> This is the trial period. For $30 you find out:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Whether Mint's activation actually accepts you from Tbilisi (the same question that killed US Mobile)
                </Line>
                <Line>Whether SMS 2FA reliably arrives from all your banks on a T-Mobile WiFi Calling registration</Line>
                <Line>
                    Whether the WiFi Calling registration is stable on your specific iPhone with Magticom underneath
                </Line>
            </Paragraph>
            <Paragraph>
                If all three work over 90 days, renew at the <Word>
                    <Bold />
                    12-month 5GB plan at $15/mo ($180/year)
                </Word>. If something goes wrong, you're out $30, not $180.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The intro pricing is genuinely a bargain.
                </Word> $10/mo for 3 months ($30 total) vs Cricket's $25/mo single month means your trial period costs less
                than one month of any alternative. You're not getting locked into anything.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Math going forward:
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Phase</Word>
                    <Word>Plan</Word>
                    <Word>Cost</Word>
                </Line>
                <Line>
                    <Word>Trial (3 months)</Word>
                    <Word>5GB intro</Word>
                    <Word>$30</Word>
                </Line>
                <Line>
                    <Word>Steady state</Word>
                    <Word>5GB 12-month annual</Word>
                    <Word>$180/yr</Word>
                </Line>
                <Line>
                    <Word>First 12 months total</Word>
                    <Word>Trial + 9mo of annual</Word>
                    <Word>~$165</Word>
                </Line>
                <Line>
                    <Word>Year 2+</Word>
                    <Word>5GB 12-month annual</Word>
                    <Word>$180/yr</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                vs current AT&amp;T at $218/mo = $2,616/year. <Word>
                    <Bold />
                    Annual savings: ~$2,440 after trial.
                </Word> Even better than Cricket would have been ($300/yr saved on top).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Don't fall for the upsell.
                </Word> The site will probably try to nudge you toward 12 months or Unlimited. Resist both. 3 months / 5GB
                is correct for your situation. You can always upgrade later if your usage genuinely warrants it (it won't).
            </Paragraph>
            <Paragraph>
                Click 3 Months → 5GB at $10/mo → continue to BYOD/eSIM/port-in flow. Use the same five values:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Phone: 516-457-1715</Line>
                <Line>Account: 512173974171</Line>
                <Line>ZIP: 27330</Line>
                <Line>Transfer PIN: 191147</Line>
                <Line>Account holder: DOUGLAS RUBINO</Line>
            </Paragraph>
            <Paragraph>Screenshot the next step if anything looks off.</Paragraph>
        </Message>
        <Message
            at="2026-05-13T07:55:26.727712Z"
        >
            <Origin>019e2055-5818-77eb-a115-0676a8820c4e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I need to specify this. I see the account number. But we generated me a transfer pin right? Do you have it
                remember it? Is it still good?
            </Paragraph>
            <Attachment>Uploaded “1778658894287_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-13T07:55:52.311375Z"
        >
            <Origin>019e2055-5818-7068-b0f9-13df7e15aad3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — <Word>
                    <Bold />
                    Transfer PIN: 191147
                </Word>. We generated it on May 9-10, expires May 13, 2026 at 10:07 PM CT — which is <Word>
                    <Bold />
                    7:07 AM Tbilisi on May 14
                </Word>. Today is May 13 in CT, so you're still in the valid window assuming you submit before that.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you're past 7 AM Tbilisi on May 14:
                </Word> regenerate. Either dial <Word>
                    <Bold />
                    \*7678
                </Word> (*PORT) on your AT&amp;T iPhone or go to AT&amp;T website Settings → Manage extra security →
                Transfer phone number → Request a new PIN. The replacement is instant and gives you another 4 days.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Important: change the ZIP field.
                </Word> It currently shows 11701 (Amityville, Long Island — Mint auto-filled based on the 516 area code).
                AT&amp;T doesn't have 11701 on file for you. <Word>
                    <Bold />
                    Change it to 27330
                </Word> (your actual AT&amp;T billing ZIP at the Sanford NC Traveling Mailbox address). If the ZIP doesn't
                match AT&amp;T's records, the port-in validation fails.
            </Paragraph>
            <Paragraph>Final values for the form:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Current Phone Number
                    </Word>: (516) 457-1715 ✓ already correct
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Account Number
                    </Word>: 512173974171
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Transfer PIN
                    </Word>: 191147
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Billing ZIP Code
                    </Word>: 27330 <Word>
                        <Emphasis />
                        (change from auto-filled 11701)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The disclaimer is right — incorrect info will delay things up to 48hrs. So double-check before hitting
                Transfer.
            </Paragraph>
            <Paragraph>
                Also note the footer: "<Word>
                    <Emphasis />
                    To continue to receive calls and messages from your current phone number, keep your AT&amp;T Wireless SIM in your phone until the transfer is complete.
                </Word>" Don't remove the AT&amp;T eSIM from your iPhone yet. Install Mint's eSIM alongside it once you
                receive the QR code, and the AT&amp;T eSIM will deactivate automatically when the port completes.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:01:51.134558Z"
        >
            <Origin>019e205b-37d7-7dca-943d-46a7ee4159b1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I okay done. Now, do I need to do anything on the AT&amp;T side? Turn of automatic payments or cancel or
                whatever?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:02:07.753617Z"
        >
            <Origin>019e205b-37d7-7f20-ac0a-143b00ee0f81</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, and importantly: <Word>
                    <Bold />
                    don't.
                </Word> Killing AT&amp;T from your side before the port completes will release the number and you'll lose
                it.
            </Paragraph>
            <Paragraph>
                The mechanics: a successful port-in <Word>
                    <Emphasis />
                    is
                </Word> the cancellation signal AT&amp;T receives. When Mint completes the transfer (typically a few hours
                to 1-2 business days), AT&amp;T's system gets the notification, marks your postpaid line as ported out, and
                auto-cancels billing. You don't call AT&amp;T, you don't cancel autopay manually, you don't do anything. The
                system handles it.
            </Paragraph>
            <Paragraph>
                Things you specifically should <Word>
                    <Bold />
                    not
                </Word> do:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Don't cancel autopay on AT&amp;T.
                    </Word> If your AT&amp;T bill cycles before the port completes, AT&amp;T may issue one final
                    partial-month charge for the days between your last billing date and the port completion date. Autopay
                    handles that automatically. If you've disabled autopay and the final bill goes unpaid, AT&amp;T marks
                    the account delinquent — which can flag for collections and damages your AT&amp;T standing (relevant if
                    you ever want to return as a customer).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Don't call AT&amp;T to cancel.
                    </Word> The port itself is the cancellation. Calling cancels the postpaid line manually, which can race
                    against the port-in and cause the port to fail (carrier sees "this number isn't active" and rejects
                    Mint's request).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Don't remove the AT&amp;T eSIM from your iPhone until the port completes.
                    </Word> Same reason as the footer in Mint's form said: you need AT&amp;T's service running until the
                    moment Mint takes over, or you have a window of unreachability.
                </Line>
            </Paragraph>
            <Paragraph>What to expect over the next few hours/days:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Mint emails you confirmation that the port is in progress.</Line>
                <Line>
                    AT&amp;T may send a notification email or SMS saying "we received a port-out request, contact us if this
                    wasn't you." Ignore — it's you.
                </Line>
                <Line>Mint emails you the eSIM QR code. Don't install it yet — wait for the next email.</Line>
                <Line>
                    Mint sends a "your number has transferred" or "your line is active" notification when the port
                    completes.
                </Line>
                <Line>
                    At that point: install the Mint eSIM via QR code (Settings → Cellular → Add Cellular Plan → scan QR).
                </Line>
                <Line>
                    The AT&amp;T eSIM on your iPhone becomes inactive automatically. You can leave it sitting there or
                    remove it later; it's harmless either way.
                </Line>
                <Line>
                    Confirm the new line works — make a test call to a US number, check carrier label shows "Mint Mobile
                    Wi-Fi" or similar when on Magticom data, trigger a 2FA SMS from one of your banks.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing to do soon (within the next week):
                </Word> check your AT&amp;T account online or in the app once the port completes. Verify the line shows as
                "cancelled" or "ported out." Confirm no final bill is unusually high (it should be ~$0-50 depending on
                prorated days). If there's a problem, you have 30 days to dispute it. Otherwise, leave it alone — the
                account will close naturally.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing to do after a few weeks:
                </Word> log into myAT&amp;T one last time and verify everything's settled — no outstanding balance, no
                surprise final charges. If clean, you can stop checking. If not, address it then.
            </Paragraph>
            <Paragraph>
                That's it. The lift you'd associate with cancellation (calling, arguing with retention, etc.) is exactly the
                lift AT&amp;T uses to keep customers. The port mechanism bypasses all of it. Mint pulls the number, AT&amp;T
                releases it, the postpaid line dies on its own.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:04:15.357232Z"
        >
            <Origin>019e205d-69aa-7ca4-adec-ddf77daa1468</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                My cellular and data is just USA because I named it. How else can i check the name of the network on my
                phone
            </Paragraph>
            <Attachment>Uploaded “1778659394918_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-13T08:04:35.559889Z"
        >
            <Origin>019e205d-69aa-7474-b204-17a54133155b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Congrats — port complete. To verify the actual network underneath your "USA" label name:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Easiest: Settings → General → About → scroll to "Network" and "Carrier" sections.
                </Word>
            </Paragraph>
            <Paragraph>Each active line shows up. For your "USA" line you should see:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Network: Mint Mobile
                    </Word> (or possibly <Word>
                        <Bold />
                        T-Mobile
                    </Word> since Mint runs on T-Mobile's network — either is correct)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Carrier
                    </Word>: shows the carrier bundle version (e.g., "Mint 56.2" or "T-Mobile 56.2")
                </Line>
            </Paragraph>
            <Paragraph>
                If it still says "AT&amp;T" anywhere for the USA line, the eSIM hasn't switched over and we need to
                investigate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Other ways to verify:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Status bar at the top of the screen.
                </Word> When the screen is on and you're not in an app, look at the upper-left/upper-right corner where the
                carrier name briefly displays. Should show "Mint" or "T-Mobile" — when WiFi Calling is registered, it'll
                show as "Mint Wi-Fi" or "T-Mobile Wi-Fi" (this is the critical indicator for SMS-on-the-street working).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Settings → Cellular → tap your "USA" line.
                </Word> Below the line name:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Network Selection
                    </Word> → should be set to Automatic, showing T-Mobile or Mint as the network
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        About
                    </Word> → tap this for full carrier details
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Control Center pull-down.
                </Word> When you long-press the connectivity tile (top-left of Control Center), it shows your active
                cellular plans by line name and network.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Most important verification for your use case:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Confirm <Word>
                        <Bold />
                        AT&amp;T is no longer active
                    </Word> — go to Settings → Cellular and check that AT&amp;T's eSIM is either removed or marked inactive.
                    Otherwise you have a dead eSIM still slotted that could cause confusion.
                </Line>
                <Line>
                    Confirm <Word>
                        <Bold />
                        WiFi Calling is enabled on the Mint/USA line
                    </Word> — Settings → Cellular → USA → Wi-Fi Calling → on. Same toggle you had on AT&amp;T.
                </Line>
                <Line>
                    Walk outside (no WiFi) and check the carrier label shows "Mint Wi-Fi" or "T-Mobile Wi-Fi" while you're
                    on Magticom data. That's the proof the architecture is working — street SMS will arrive.
                </Line>
                <Line>
                    Trigger a test 2FA SMS from one of your banks (Chase, Citi, Mercury — any of them). Confirm it arrives
                    within a minute.
                </Line>
            </Paragraph>
            <Paragraph>
                If you see "Mint" or "T-Mobile" anywhere in About → Network → for your USA line, you're good.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:05:26.021438Z"
        >
            <Origin>019e205e-7e3c-70d3-8543-14c6042b37aa</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Network GOECELL, Carrier AT&amp;T 69.0. So hmm</Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:05:54.989862Z"
        >
            <Origin>019e205e-7e3c-7af3-ac4e-79e4db619394</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That's the old AT&amp;T line you're looking at, not Mint. Two issues stacked:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. "Carrier: AT&amp;T 69.0" means this line is still your AT&amp;T eSIM
                </Word> (the bundle name shows the carrier the eSIM was originally provisioned by, not the network it's
                currently connecting to). The "USA" label is just the name you assigned. Since the port has completed,
                AT&amp;T should have deactivated this line — but the eSIM profile itself is still sitting on your phone
                trying to register.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. "Network: GEOCELL"
                </Word> is the Georgian carrier (Geocell, one of Georgia's mobile operators, separate from Magticom) that
                your AT&amp;T eSIM is <Word>
                    <Emphasis />
                    trying
                </Word> to roam onto since it can't find an AT&amp;T tower. Since the port completed, AT&amp;T's home
                network won't accept this line's registration anymore, but the eSIM is still attempting to roam.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real question: have you actually installed Mint's eSIM yet?
                </Word>
            </Paragraph>
            <Paragraph>
                The port completing and installing the Mint eSIM are two separate steps. Mint sends you a QR code via email
                after activation. You scan it into Settings to install the new eSIM. Did that happen?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Check Settings → Cellular and tell me how many "Cellular Plans" you see listed.
                </Word> Should be at least:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Magticom (your Georgian data line)</Line>
                <Line>AT&amp;T (renamed "USA" by you, now defunct after the port)</Line>
                <Line>Mint (the new one — only present if you've scanned the QR code)</Line>
            </Paragraph>
            <Paragraph>
                If you only see two (Magticom + USA/AT&amp;T), Mint isn't installed yet. Check your email — search for
                "Mint" or "from:mintmobile.com" — there should be an email with the eSIM QR code and instructions. Open the
                email on a separate device (laptop, iPad, or even on the iPhone itself in Mail), go to Settings → Cellular →
                Add Cellular Plan → scan QR with your iPhone camera pointed at the QR image. Once installed, name it "Mint"
                or similar.
            </Paragraph>
            <Paragraph>
                If you see three lines including Mint, then we just need to make sure Mint is set as the active US line (not
                the dead AT&amp;T one) — and the carrier bundle on the Mint line should show "Mint Mobile" or "T-Mobile"
                instead of AT&amp;T.
            </Paragraph>
            <Paragraph>
                Once Mint is installed and active, you can remove the AT&amp;T/"USA" eSIM (Settings → Cellular → tap that
                line → Remove Cellular Plan). It's defunct and serves no purpose.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:07:26.988311Z"
        >
            <Origin>019e2060-55ea-7b2f-913a-cb9b44624531</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I used the QR code but maybe my esim was full? I still have it. What do I do?</Paragraph>
            <Attachment>Uploaded “1778659629112_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-13T08:08:02.420896Z"
        >
            <Origin>019e2060-55ea-729c-b372-8ca364c97c8d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You have an interesting setup. Let me parse it:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        USA
                    </Word> (+1 516-457-1715) — this is your old AT&amp;T eSIM. Number is now on Mint, but the eSIM profile
                    itself is still here as a zombie.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Turkey
                    </Word> (+90 534…) — old Turkish line, inactive
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Travel - MAGTICOM
                    </Word> (+995 511…) — your Georgian data line, active
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Used as "Personal"
                    </Word> (No Number) — this is suspicious. Possibly a partial/failed Mint eSIM install, or an orphaned
                    slot from an earlier attempt.
                </Line>
            </Paragraph>
            <Paragraph>
                iPhone 15 Pro can <Word>
                    <Bold />
                    store
                </Word> up to 8 eSIMs but only <Word>
                    <Bold />
                    activate
                </Word> 2 simultaneously. You have 4 stored and 2 active (USA + MAGTICOM). So you're not at the storage
                limit, but the 2-active limit means if you add Mint as a new eSIM, you can't have all three (USA + MAGTICOM
                + Mint) active at once.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    First, investigate "Used as 'Personal'"
                </Word> — tap it. What does it show? If it's a Mint eSIM that partially installed but didn't complete (no
                number assigned), that's your problem and you'll need to delete it before re-scanning the QR code (iOS may
                refuse a fresh install if a duplicate profile is sitting there).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Recommended sequence:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Tap "Used as 'Personal'"
                    </Word> to see what it actually is. Report back what carrier/info it shows.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If "Personal" is a failed Mint install
                    </Word>: tap it → scroll down → <Word>
                        <Bold />
                        Delete eSIM
                    </Word> (or Remove Cellular Plan). Then re-scan the Mint QR code via Settings → Cellular → <Word>
                        <Bold />
                        Add eSIM
                    </Word> → <Word>
                        <Bold />
                        Use QR Code
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If "Personal" is something unrelated
                    </Word> (old line, etc.) and you want to keep it: leave it. Just add Mint via Settings → Cellular → Add
                    eSIM. Storage isn't full.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Delete the old AT&amp;T eSIM ("USA")
                    </Word> — it's now a zombie. The port completed, AT&amp;T no longer has the number, this eSIM is just
                    sitting there trying to register on Georgian roaming networks (GEOCELL) and failing. Tap "USA" → Remove
                    Cellular Plan. This frees up the active slot for Mint.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Scan the Mint QR code
                    </Word> via Add eSIM → Use QR Code. Follow the prompts. Once installed:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Name it "Mint" or "USA - Mint"</Line>
                    <Line>
                        Turn it <Word>
                            <Bold />
                            On
                        </Word>
                    </Line>
                    <Line>
                        Enable <Word>
                            <Bold />
                            Wi-Fi Calling
                        </Word> on the line
                    </Line>
                    <Line>
                        Verify the carrier shows as <Word>
                            <Bold />
                            Mint Mobile
                        </Word> or <Word>
                            <Bold />
                            T-Mobile
                        </Word> in Settings → General → About
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Verify the active mix:
                    </Word> MAGTICOM (on, data) + Mint (on, voice/SMS). That's your working configuration.
                </Line>
            </Paragraph>
            <Paragraph>
                Start with step 1 — tap "Used as 'Personal'" and tell me what it shows. That'll determine whether you need
                to clean up before installing Mint, or just install fresh.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T13:38:23.474570Z"
        >
            <Origin>019e218f-4bd7-7fb4-a6b9-d541214f4805</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Mint Mobile has been a nightmare. I am not in a state where my eSim is stuck on activating. Their support
                tried and failed to help me. They say everything is fine on their end
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T13:38:51.324071Z"
        >
            <Origin>019e218f-4bd7-7318-a2d7-22e7c4dae633</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's frustrating. The "stuck on activating" symptom usually means the eSIM profile downloaded to your
                phone but iOS can't complete the network registration handshake with T-Mobile's IMS servers. Carrier-side,
                Mint sees the line as provisioned and ready — they're not lying. Phone-side, something is blocking the final
                registration.
            </Paragraph>
            <Paragraph>Most likely causes, in order of how often they're the culprit:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. iOS network state needs a full reset.
                </Word> The eSIM transition happens during a moment when iOS is juggling carrier configurations, and
                sometimes the network stack gets stuck. Try in sequence:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Toggle Airplane Mode
                    </Word> on/off (Settings → top toggle, wait 30 seconds, off)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Full restart
                    </Word> of the iPhone (power off completely, wait 30 seconds, power back on — not just lock screen,
                    actual shutdown)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reset Network Settings
                    </Word>: Settings → General → Transfer or Reset iPhone → Reset → Reset Network Settings. This nukes your
                    saved WiFi networks (you'll need to re-enter passwords) but clears any corrupt cellular/IMS
                    configuration. Most reliable single fix.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Carrier bundle / iOS version.
                </Word> Settings → General → About → check what version of iOS you're on. If you're on an older iOS that
                hasn't downloaded Mint's carrier bundle, the eSIM activation can hang. Settings → General → Software Update
                → check for any pending updates. If carrier settings update is available, install it. After the reset above,
                iOS should pull Mint's bundle automatically.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Conflict with the old AT&amp;T eSIM.
                </Word> If the old AT&amp;T "USA" eSIM is still on the phone with the same phone number that's now on Mint,
                iOS gets confused about which profile owns 516-457-1715. <Word>
                    <Bold />
                    Remove the AT&amp;T eSIM
                </Word>: Settings → Cellular → tap the AT&amp;T "USA" line → Remove Cellular Plan. Then restart the phone.
                Then check if Mint's eSIM activates.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Geographic restriction during activation.
                </Word> Some carriers' eSIM activation has a soft geofence on the <Word>
                    <Emphasis />
                    first
                </Word> registration attempt (the eSIM downloads fine, but the IMS handshake checks location and gives up).
                Workaround: enable your laptop's VPN (Proton Full Computer) to a US exit node, then on your iPhone briefly
                join your laptop's WiFi hotspot (so your iPhone's internet is now routed through the US VPN), then restart
                the iPhone with that VPN-routed WiFi as its only connection. After 5 minutes, switch back to your normal
                WiFi. The activation completes during the VPN-routed window.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. eSIM profile corruption.
                </Word> If the QR code was scanned during a flaky moment, the downloaded profile can be incomplete. Delete
                the Mint eSIM entirely (Settings → Cellular → Mint line → Remove Cellular Plan), then ask Mint support to
                issue a <Word>
                    <Bold />
                    fresh QR code
                </Word> (not the same one — they should be able to generate a new one). Scan that. Often resolves it when
                nothing else does.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Order I'd try them:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Remove AT&amp;T eSIM first
                    </Word> — eliminates the phone-number conflict possibility. Restart phone.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reset Network Settings
                    </Word>. Restart phone.
                </Line>
                <Line>
                    If still stuck, ask Mint support for a <Word>
                        <Bold />
                        new QR code
                    </Word> (not just retry the old one — explicitly new code). Delete old Mint eSIM profile, scan new one.
                </Line>
                <Line>
                    If still stuck after a fresh QR, <Word>
                        <Bold />
                        VPN-routed activation attempt
                    </Word> via Proton on laptop + iPhone hotspot.
                </Line>
                <Line>If nothing works, this becomes the "Mint isn't working for you" scenario and we need to pivot.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What "isn't working" looks like at this point:
                </Word> Mint has your number, AT&amp;T released it, but your iPhone can't bring the line to life. Without
                working iPhone activation, you don't have a functioning US line anywhere. This is recoverable in a few ways:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Port the number out of Mint to another carrier
                    </Word> (Cricket, Visible+, or back to AT&amp;T Prepaid). The number is portable regardless of which
                    carrier eSIM activation is or isn't working — Mint just has to release it. You'd be initiating the port
                    from the new carrier's side, same as we did from AT&amp;T → Mint.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cancel Mint and reclaim the number to AT&amp;T Prepaid
                    </Word> by calling AT&amp;T to recover the recently-ported-out number. AT&amp;T has a ~30 day recovery
                    window where they can pull a number back, but they don't always cooperate. Worth trying if other options
                    fail.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mint physical SIM
                    </Word> — if eSIM truly won't activate, Mint also sells physical SIM kits. Ship to Traveling Mailbox,
                    forward to Tbilisi, put in a cheap Android. Same architecture as the Tello physical SIM plan I described
                    earlier.
                </Line>
            </Paragraph>
            <Paragraph>
                Try the first three steps (delete AT&amp;T eSIM, reset network settings, request fresh QR) before going to
                plan B. Most "stuck on activating" cases resolve once iOS has a clean profile to work with on a clean
                network state.
            </Paragraph>
            <Paragraph>Which of those have Mint support already had you try? That'll narrow down what's left.</Paragraph>
        </Message>
        <Message
            at="2026-05-13T13:38:58.461812Z"
        >
            <Origin>019e218f-dba5-7eb5-805d-cbaad250b0d6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How about that I am in Georgia</Paragraph>
        </Message>
        <Message
            at="2026-05-13T13:39:50.565943Z"
        >
            <Origin>019e218f-dba5-71fc-9426-5ecbf3cd5e9f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — being in Georgia is almost certainly the root cause, and I should have led with that. Let me address
                it properly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The diagnosis:
                </Word>
            </Paragraph>
            <Paragraph>eSIM activation involves two steps that happen at different layers:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Profile download
                    </Word> (SM-DP+ server): Mint's server sends the eSIM profile to your phone. This worked — you have a
                    profile sitting there, stuck.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        IMS registration handshake
                    </Word> (T-Mobile's network): your phone presents the profile to T-Mobile and asks to be registered as a
                    real working line. This is where Mint activations from abroad commonly hang.
                </Line>
            </Paragraph>
            <Paragraph>
                T-Mobile's IMS infrastructure does a "location-aware" check on first registration — it looks at your phone's
                current network registration (Magticom) and IP address, sees a Georgian cellular tower and a non-US IP, and
                silently refuses to complete the handshake. The eSIM profile shows "Activating..." indefinitely because the
                registration request never gets a successful response. This is a different gate than ongoing service; once a
                line is activated, it works over any internet connection (which is how we knew WiFi Calling architecture
                would work for street SMS). The friction is exclusively at the <Word>
                    <Emphasis />
                    first
                </Word> registration moment.
            </Paragraph>
            <Paragraph>
                This is why Mint support says "everything is fine on their end" — provisioning is complete on their side.
                The block is in T-Mobile's IMS infrastructure responding to your iPhone's first registration attempt.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The fix: route the activation attempt through a US IP using Proton VPN on your iPhone.
                </Word>
            </Paragraph>
            <Paragraph>
                You have Proton, full computer version. There's also a free <Word>
                    <Bold />
                    Proton VPN iOS app
                </Word> — install it. The cleanest version:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Install Proton VPN on the iPhone
                    </Word> (App Store, free).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Turn off MAGTICOM temporarily.
                    </Word> Settings → Cellular → Travel - MAGTICOM → toggle line off. This stops the Georgian cellular
                    registration from sending location data.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Connect to your home WiFi only.
                    </Word> This eliminates Magticom as a confounding signal.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Open Proton VPN on iPhone, connect to a US server.
                    </Word> Pick US East Coast for closest geographic proximity to T-Mobile's IMS servers (their core
                    infrastructure is heavily East-Coast and Bellevue/Seattle).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Restart the iPhone
                    </Word> with VPN still connected (Proton's "Always-on / Kill Switch" feature, if enabled, ensures the
                    VPN reconnects on boot before any traffic leaks).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        After restart, wait for VPN to reconnect.
                    </Word> Verify it's on (Proton icon in status bar).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Now check the Mint eSIM.
                    </Word> Sometimes it auto-completes activation once the network state is clean. If not: Settings →
                    Cellular → tap the stuck Mint line → look for a "Retry activation" or similar option, or toggle the line
                    off and back on.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wait 5-10 minutes.
                    </Word> First-time IMS registration over a VPN-routed connection can be slow.
                </Line>
                <Line>
                    Once activated, re-enable Magticom and disconnect Proton VPN. The line should keep working — geographic
                    check is one-time only.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If the iPhone Proton VPN alone doesn't work, try the laptop hotspot route:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Proton VPN on your laptop → US server.</Line>
                <Line>Enable laptop's Personal Hotspot (or "Internet Sharing" on Mac).</Line>
                <Line>Connect iPhone to the laptop's hotspot.</Line>
                <Line>Disable iPhone's own Proton VPN (would conflict).</Line>
                <Line>iPhone's traffic now routes laptop → Proton US server → T-Mobile.</Line>
                <Line>Repeat the toggle/restart steps above.</Line>
            </Paragraph>
            <Paragraph>
                The laptop route is sometimes more effective because it forces <Word>
                    <Emphasis />
                    all
                </Word> iPhone traffic through the VPN — including the system-level cellular registration handshakes that
                the iPhone's Proton VPN app may not capture (iOS VPN APIs don't catch every kind of traffic; carrier
                handshakes can leak).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Have Mint issue a fresh QR code first.
                </Word> Before any of this, call Mint support and ask them to <Word>
                    <Bold />
                    generate a new eSIM QR code
                </Word> rather than retrying the same one. The current profile in the iPhone is in a stuck state and may not
                respond to retries; a fresh QR creates a new profile. Delete the stuck one first (Settings → Cellular → Mint
                line → Remove Cellular Plan), then scan the fresh code from a VPN-routed network state.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If even the VPN-routed retry fails:
                </Word> Mint isn't going to work for you, and we pivot. The next-best target for someone in your exact
                situation (eSIM-only iPhone, permanent expat, just got out of AT&amp;T):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        AT&amp;T Prepaid recovery.
                    </Word> Call AT&amp;T within the 30-day window of the port-out and ask them to recover the number to
                    AT&amp;T Prepaid. They sometimes do this for customers who report port-out issues with the new carrier.
                    Pitch: "My port to Mint failed activation, can you recover 516-457-1715 back to AT&amp;T Prepaid and
                    provision a new eSIM?" Their infrastructure already knows your phone, no foreign-IP check on existing
                    equipment.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Visible+ ($45/mo, Verizon).
                    </Word> Different parent than US Mobile and Mint. Different fraud system. Worth trying as a clean-slate
                    retry.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Have a US-based friend or family member do the eSIM activation on their phone briefly, then transfer the eSIM profile.
                    </Word> Some carriers allow eSIM transfer between devices via QR re-generation. Tricky logistically;
                    usually not worth the coordination unless other paths exhausted.
                </Line>
            </Paragraph>
            <Paragraph>
                Try the VPN trick first, with a fresh QR code from Mint. The single most common success pattern for expat
                Mint activation is: fresh QR + VPN US exit + Magticom temporarily off + iPhone restart. If you do all of
                those and it still hangs, the geographic check is more aggressive than usual and you'll need to pivot.
            </Paragraph>
        </Message>
    </Chapter>
);
