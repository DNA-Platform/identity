import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-07T14:13:53.914873Z"
        >
            <Origin>019ea26f-1024-7e14-8bd6-5f5fe2573a5e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have a FedEx shipment from Freeport, New York coming to Tblisi Georgia and it is coming at a time where I
                will not be available. I imagine that they can just keep it at their warehouse if they failed to deliver it,
                but I was thinking about contacting them and asking if they could deliver it a few days later. Is that
                possible with FedEx and is it possible to do online? What does it look like to request a different delivery
                date?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:14:29.713394Z"
        >
            <Origin>019ea26f-1029-7c89-a4c9-135b212034c4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “FedEx reschedule delivery date international shipment online”</Action>
            <Action>
                Searched the web for “FedEx Georgia Tbilisi local office customer service reschedule delivery recipient”
            </Action>
            <Paragraph>
                Short version: rescheduling is usually possible, but for a shipment landing in Tbilisi you most likely won't
                be able to do it through the slick self-service "FedEx Delivery Manager" tool — that's mainly a
                US/Western-Europe residential feature. FedEx Delivery Manager lets recipients decide when, where, and how
                they receive packages, but certain options may not apply to specific deliveries, and shippers can restrict
                changing the destination once a shipment is in transit. For inbound international to Georgia, final delivery
                is handled by FedEx's local agent, so the reliable route is contacting them directly.
            </Paragraph>
            <Paragraph>What I'd verify and do:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Contact FedEx Georgia, not US FedEx.
                    </Word> The local operation runs through offices in Tbilisi (one address on file is 25 Agmashenebeli
                    Ave). The Georgia team is available Monday to Friday, 10:00 to 19:00, closed weekends and public
                    holidays. Give them your tracking number and ask them to hold and deliver on your preferred date.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Try the online tracking page first.
                    </Word> FedEx's own guidance is that you can schedule a new delivery time on the FedEx Delivery page —
                    worth attempting with your tracking number, but for Georgia I'd expect "request hold / contact us"
                    rather than a self-serve date picker. Don't count on it working online.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A hold is the fallback you already guessed.
                    </Word> If a delivery attempt fails, they typically hold it at the local facility for pickup. That part
                    is standard.
                </Line>
            </Paragraph>
            <Paragraph>
                Two things I can't verify and you should ask them directly: (1) whether there's a <Word>
                    <Bold />
                    storage/demurrage fee
                </Word> if it sits too long after customs clearance, and (2) whether your shipment has <Word>
                    <Bold />
                    cleared Georgian customs
                </Word> yet — for an international inbound package, clearance happens before final delivery, and that step
                can shift the timing anyway, sometimes making a manual reschedule unnecessary.
            </Paragraph>
            <Paragraph>
                Do you have the tracking number handy? I can look at where it currently is, which would tell us whether it's
                even close to the delivery stage yet.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:14:53.026940Z"
        >
            <Origin>019ea26f-f9ec-7c85-abe1-f1884b5b29ac</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, I have a tracking page that tracks it all the way to where it’s going, so wouldn’t I start there?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:15:03.167515Z"
        >
            <Origin>019ea26f-f9ec-7713-95b9-697f4ba34371</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — that's exactly where to start. Whatever self-service options exist for <Word>
                    <Emphasis />
                    your specific shipment
                </Word> surface on the tracking page once you're looking at that tracking number. If a reschedule or hold
                option is available to you, there'll be a "Manage Delivery" / "Customize Delivery" link right there.
            </Paragraph>
            <Paragraph>So the practical sequence is:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Open the tracking page, look for <Word>
                        <Bold />
                        Manage/Customize Delivery
                    </Word>. If it's there, you're done — pick your date or set a hold.
                </Line>
                <Line>
                    If those options are greyed out or absent, that's your signal it's not self-service eligible for this
                    shipment, and you fall back to phoning FedEx Georgia with the same tracking number.
                </Line>
            </Paragraph>
            <Paragraph>
                The reason I led with the local-contact caveat is that international inbound to Georgia often <Word>
                    <Emphasis />
                    doesn't
                </Word> expose the full menu — the shipper or the in-transit status can lock it. But there's no downside to
                checking the page first; it costs nothing and may just work.
            </Paragraph>
            <Paragraph>
                One thing worth doing while you're on that page: note the current <Word>
                    <Bold />
                    status/location
                </Word>. If it hasn't cleared Georgian customs yet, the delivery date on the page is provisional anyway, and
                you may have more natural slack than you think.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:15:34.250797Z"
        >
            <Origin>019ea270-9a9c-787f-8cc3-528647eec6fb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We’ll do some research and try to find a local contact here and if you need to see information from the
                Delivery page, I can find it
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:15:40.238120Z"
        >
            <Origin>019ea270-9a9c-7aa9-a698-c57cd5a4ce7b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Sounds good. Local contact is the more reliable lever here anyway, so that's the right place to put your
                energy.
            </Paragraph>
            <Paragraph>
                A couple of things that'll make that contact more productive when you reach them: have the <Word>
                    <Bold />
                    tracking number
                </Word> ready, and if you can, note who the <Word>
                    <Bold />
                    actual local handler
                </Word> is. FedEx in Georgia runs through a local entity rather than FedEx-branded staff directly, so the
                person you reach may operate under a partner name — knowing that up front saves confusion.
            </Paragraph>
            <Paragraph>
                And yes — paste whatever the Delivery page shows whenever you want a second set of eyes. The two things most
                worth seeing: the <Word>
                    <Bold />
                    current status/location
                </Word> (tells us whether it's pre- or post-customs) and any <Word>
                    <Bold />
                    Manage/Customize Delivery
                </Word> options that do or don't appear. Either one shapes what's actually possible.
            </Paragraph>
            <Paragraph>No rush. Bring it back when you've got it.</Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:19:17.818899Z"
        >
            <Origin>019ea274-0492-78c6-9cb6-6c6472a50c2c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No rush for you maybe! Do you have access to a virtual secretaty back there for me?</Paragraph>
            <Paragraph>Here’s the tracking page</Paragraph>
            <Attachment>Uploaded “IMG_3331.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3330.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3329.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-07T14:19:54.831749Z"
        >
            <Origin>019ea274-0492-7a15-a6b2-c4ac26ca240d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Got it — and the page tells us a lot.</Paragraph>
            <Paragraph>
                Where it actually is: <Word>
                    <Bold />
                    Dartford, GB
                </Word> as of 6/4, still in transit. Scheduled delivery <Word>
                    <Bold />
                    Thursday 6/11 before 6:00 pm
                </Word>, into Tbilisi. So it's exactly the pre-customs situation I flagged — it hasn't reached Georgia or
                cleared customs yet, which means that 6/11 date is provisional and could slip on its own. You may end up
                with more slack than you're planning for.
            </Paragraph>
            <Paragraph>Two things on that page worth acting on:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Tap "Check For Delivery Options."
                    </Word> That's the self-service lever we talked about. Expand it and tell me what it offers — a date
                    picker and a hold option would be the win; "contact us" or greyed-out choices would confirm it's not
                    self-serve for this lane.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Note the "1 of 2 pieces."
                    </Word> There's a second box on its own tracking number. Whatever you arrange — hold or reschedule —
                    make sure it covers <Word>
                        <Emphasis />
                        both
                    </Word>, or one could show up while you're away.
                </Line>
            </Paragraph>
            <Paragraph>
                As for a virtual secretary back here: I wish. I can't place a call or send anything on your behalf — no
                hands, no phone. But I can do the next best thing: <Word>
                    <Bold />
                    draft the exact email or message
                </Word> to FedEx Georgia and hand you a verified local contact to send it to, so it's copy-paste-and-go.
                Earlier I found their Tbilisi offices but not a confirmed phone/email — I'd verify the real one before you
                rely on it rather than hand you a number that bounces.
            </Paragraph>
            <Paragraph>
                Want me to expand on what to tap first, or get the contact + draft ready so it's waiting when you need it?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:30:35.745173Z"
        >
            <Origin>019ea27e-5cd5-711b-b0c1-7d17c1a4715b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What do you think happens when they try to deliver it and I’m not there? Obviously they’re not gonna pay to
                ship it back to Freeport after one attempt.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:31:07.340531Z"
        >
            <Origin>019ea27e-5cd5-705e-bdf9-0b2e1e0c8037</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that they won't bounce it back across the Atlantic after one miss — that's not how it works.
                Let me verify the actual sequence rather than guess at it, since the international-inbound flow differs from
                US domestic.
            </Paragraph>
            <Action>
                Searched the web for “FedEx international failed delivery attempts hold at facility before return to shipper
                storage”
            </Action>
            <Paragraph>
                Your instinct is correct. One miss does not trigger a return — that's the worst-case endpoint, not the first
                move. Here's the verified sequence:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        They reattempt.
                    </Word> FedEx typically attempts delivery three times before returning a package to the shipper, and the
                    courier will often try to call the recipient to check availability. So a single missed day just rolls to
                    the next attempt.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Then they hold it locally.
                    </Word> After the attempts, FedEx holds the package at a local facility or partner location for the
                    recipient to collect, and only returns it to the shipper if the recipient takes no action. The
                    pickup-and-hold step is exactly the fallback you assumed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Return is the last resort,
                    </Word> only after the hold window lapses with no contact.
                </Line>
            </Paragraph>
            <Paragraph>
                One genuinely useful wrinkle for you: because this is an <Word>
                    <Bold />
                    import
                </Word> shipment, if the shipper put your email or phone on the air waybill, you'll get a notification
                letting you make delivery changes — but that option doesn't apply if the shipment is addressed to a company
                name rather than a person. So make sure it's addressed to <Word>
                    <Emphasis />
                    you
                </Word>, not "DNA" or any business name, or you lose that self-service path.
            </Paragraph>
            <Paragraph>
                The thing I'd actually watch isn't the return risk — it's <Word>
                    <Bold />
                    storage fees after customs clearance.
                </Word> Once it clears Georgian customs and sits at the facility waiting for you, demurrage can start
                accruing. That's the real cost of being away, not a transatlantic return.
            </Paragraph>
            <Paragraph>
                Two things I can't verify precisely: the <Word>
                    <Bold />
                    exact hold window in Georgia
                </Word> (US standard is 5–7 days, but the local handler sets its own clock — worth asking them directly) and
                whether there's a per-day storage charge. Both are good questions for that local-contact email.
            </Paragraph>
            <Paragraph>
                Net: if you do nothing, you almost certainly still get the package — it waits for you. The downside is fees
                and faff, not loss. Want me to draft the local-contact message now so you can lock in a hold and sidestep
                the storage clock?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:36:19.567928Z"
        >
            <Origin>019ea283-9b33-701f-b994-11d543cea320</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It’s addressed to me and if they did it right, it should have my georgian phone number on there so it sounds
                like I will get a call to be able to talk with them. If I’m connected to Wi-Fi even if they have my American
                phone number, they can give me a call, but I don’t know if they will because they’re in George.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-07T14:36:44.824628Z"
        >
            <Origin>019ea283-9b33-77dd-8b12-2d7ab6b73053</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Your read on WiFi calling is right: if it's enabled on your US line, an inbound call to that number rings
                through over WiFi no matter where the caller sits. From the courier's side it's just an international call
                to a US number — they dial, you pick up. So <Word>
                    <Emphasis />
                    receiving
                </Word> isn't the problem.
            </Paragraph>
            <Paragraph>
                The real question is the one you put your finger on: <Word>
                    <Bold />
                    will a Georgia-based handler actually place that international call?
                </Word> And here I have to be honest — not verified, and I'd lean skeptical. Last-mile in Georgia runs
                through a local partner, not FedEx-badged staff, and local couriers often won't dial a foreign number. More
                typical for them: ring a local number, fire an SMS, leave a door tag, or just reattempt. An SMS to a US
                number from a Georgian system may not even land. So if the <Word>
                    <Bold />
                    Georgian number
                </Word> made it onto the waybill, you're in good shape. If it's <Word>
                    <Emphasis />
                    only
                </Word> the US number, I wouldn't count on the call.
            </Paragraph>
            <Paragraph>
                Which makes the controllable move clear: <Word>
                    <Bold />
                    don't depend on them reaching out — reach in.
                </Word> Two things worth doing:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Confirm which number is actually on the waybill.
                    </Word> The shipper would know, or "View more details" on the tracking page sometimes surfaces
                    contact-on-file. If it's the US number only, that's your cue to be proactive.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Establish contact on your terms
                    </Word> with the local handler, referencing the tracking ID, before the attempt window. Email tends to
                    cross borders more reliably than a phone call anyway.
                </Line>
            </Paragraph>
            <Paragraph>
                So: you <Word>
                    <Emphasis />
                    might
                </Word> get a call, and you're set up to take it if you do — but I'd treat that as a bonus, not the plan.
                Want me to verify the local handler's actual phone/email now so you've got a working channel either way?
            </Paragraph>
        </Message>
    </Chapter>
);
