import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-27T20:59:18.207450Z"
        >
            <Origin>019dd0bd-15ee-79ad-89d5-5b52313d89a4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m staying at the Hampton Inn in Massapequa and I just wanted to know what to ask them to see if I can get
                mail delivered to my room? Does Hampton Bay have an official policy for this where you send it to a
                particular address?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T20:59:44.286457Z"
        >
            <Origin>019dd0bd-15ee-74ef-8daf-9c867135c656</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Hampton Inn guest mail package delivery policy”</Action>
            <Action>Searched the web for “Hampton Inn Massapequa address phone number”</Action>
            <Paragraph>
                Yes, Hilton (Hampton Inn's parent company) has an official policy: most Hilton properties will hold packages
                for guests. The package label must be addressed to the hotel and include your name and reservation
                confirmation number. They will not accept packages sent C.O.D. (cash on delivery).
            </Paragraph>
            <Paragraph>
                That said, individual properties can vary — some charge a small handling fee, some have limits on
                size/weight, and policies can be stricter for packages arriving before you check in. So it's worth calling
                the front desk directly and asking:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Will you accept and hold a package addressed to me as a guest?</Line>
                <Line>Is there a handling/storage fee?</Line>
                <Line>
                    How should the label be formatted? (Standard format is: Your Name, c/o Hampton Inn &#91;location&#93;,
                    Guest Arriving &#91;date&#93;, Confirmation # &#91;number&#93;, then the street address)
                </Line>
                <Line>How early before check-in can it arrive, and how long will you hold it after I check out?</Line>
                <Line>Where do I pick it up — front desk or somewhere else?</Line>
            </Paragraph>
            <Paragraph>
                One note: I couldn't find a Hampton Inn located directly in Massapequa itself — the nearest ones on Long
                Island are in Commack, Westbury, Garden City, and Farmingdale. Worth double-checking your booking
                confirmation for the exact address before you have anything sent.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T21:00:18.225708Z"
        >
            <Origin>019dd0be-25c1-792d-881c-28084cbcf536</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here’s the actual place if that helps you look up more specific information for me</Paragraph>
            <Attachment>Uploaded “IMG_3155.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-27T21:00:46.335820Z"
        >
            <Origin>019dd0be-25c1-7892-9e5e-a2aa40f5a046</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, that changes things — it's a Best Western, not a Hampton Inn. Let me look up the right info.
            </Paragraph>
            <Action>Searched the web for “Best Western Bar Harbour Inn Massapequa Park address phone”</Action>
            <Paragraph>
                Got the contact info. Let me also check whether Best Western has a corporate policy on this.
            </Paragraph>
            <Action>Searched the web for “Best Western hotel guest package mail delivery policy”</Action>
            <Paragraph>
                Thanks — that's helpful context. Best Western Bar Harbour Inn is at <Word>
                    <Bold />
                    5080 Sunrise Hwy, Massapequa Park, NY 11762
                </Word>, phone <Word>
                    <Bold />
                    (516) 541-2000
                </Word>.
            </Paragraph>
            <Paragraph>
                Unlike Hilton, Best Western is a franchise system where individual hotels set their own policies, so there
                isn't a single corporate policy on guest mail — each property does it differently. Some Best Westerns accept
                packages free with a reservation, others charge per-package handling fees and have weight or timing
                restrictions. Calling the front desk is the only way to know.
            </Paragraph>
            <Paragraph>When you call (516) 541-2000, ask:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Will you accept and hold mail/packages addressed to me as a guest during my stay (Apr 27–May 1)?
                </Line>
                <Line>Is there a handling fee per item?</Line>
                <Line>Are there any size, weight, or carrier restrictions (USPS vs. FedEx/UPS)?</Line>
                <Line>How should the label be addressed?</Line>
                <Line>Where do I pick it up — front desk?</Line>
            </Paragraph>
            <Paragraph>A safe label format that most hotels accept:</Paragraph>
            <Paragraph>
                <Quoted />
                Doug &#91;Last Name&#93; (Guest) c/o Best Western Bar Harbour Inn Confirmation #525851640 Check-in:
                04/27/2026 5080 Sunrise Hwy Massapequa Park, NY 11762
            </Paragraph>
            <Paragraph>
                One tip: don't use "Hold for Guest" without your name — staff can't match it to a reservation. And avoid
                C.O.D., which most hotels refuse outright.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T21:01:26.877837Z"
        >
            <Origin>019dd0bf-2df0-7c47-a5ca-56325b97ebf8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You don’t see any case studies out there that suggests how one franchise does it cause I’m sure they’re not
                completely independent
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T21:02:14.580753Z"
        >
            <Origin>019dd0bf-2df0-7bf6-87f2-26f7c835beb6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Best Western franchise package handling fee guest typical”</Action>
            <Paragraph>You're right that I overcorrected. Let me look for actual data on the typical pattern.</Paragraph>
            <Action>Searched the web for “"Best Western" hold package guest free fee reddit traveler experience”</Action>
            <Action>Searched the web for “hotel package handling fee typical small hotel guest mail forum”</Action>
            <Paragraph>
                You're right, I was hedging. There is a clear pattern in the data — it just doesn't track franchise brand,
                it tracks <Word>
                    <Bold />
                    property type
                </Word>:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Convention hotels and big-box urban properties
                </Word> (think Vegas Strip, Orlando, downtown convention centers) almost universally charge package handling
                fees, typically $5–$10 per small package, with higher fees for heavier items. This started in convention
                markets when exhibitors began shipping materials to themselves at hotels to avoid drayage charges at the
                convention center, which created more work for front-of-house staff and led these small charges to be
                established. One Best Western data point: the Orlando Gateway (600+ rooms, Disney-adjacent) charges $5.00
                plus 6.5% tax per package, restricts size to under 50 lbs, and adds charges if packages arrive more than 10
                days before arrival.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Limited-service suburban/roadside properties
                </Word> — which is what your Bar Harbour Inn is (72 rooms, off Sunrise Hwy, no convention business) —
                overwhelmingly accept guest packages for free as a courtesy. The FlyerTalk threads and TripAdvisor Q&amp;As
                are full of travelers reporting Best Western front desks accepting Amazon/FedEx deliveries without comment
                or charge. The Best Western Plus Bayside in Oakland states it explicitly: "Package handling is free while
                there is an existing reservation or meeting."
            </Paragraph>
            <Paragraph>
                On the franchise question — you're also right that "completely independent" was wrong. Best Western is
                structured a bit unusually: it's a membership cooperative rather than a typical royalty-based franchise (HVS
                notes Best Western brands had the lowest franchise costs in their 2014 study because they don't include
                royalty or marketing fees). So properties have more autonomy on operational details like package handling
                than a Marriott or Hilton franchisee would. There's no corporate guest-mail policy I can find — unlike
                Hilton, which publishes one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical takeaway:
                </Word> For a property of this profile, the modal outcome is "yes, free, just bring ID at pickup." A small
                chance of a $5-ish handling fee. Worth a 2-minute call to confirm, but I wouldn't expect a problem.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T22:13:03.403466Z"
        >
            <Origin>019dd100-b296-7496-a2b8-5cdf1f6fd171</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>For sensitive items do they do mail scanning</Paragraph>
        </Message>
        <Message
            at="2026-04-27T22:13:36.663454Z"
        >
            <Origin>019dd100-b296-7d15-ad51-b68388d4b5ee</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “do hotels scan or open guest packages security”</Action>
            <Paragraph>No — not in any meaningful sense, and especially not at a property like this one.</Paragraph>
            <Paragraph>
                What actually happens at a 72-room limited-service Best Western: a courier hands the package to whoever is
                at the front desk, the staff member logs the sender and your name in a book or PMS note, and the package
                goes into a back office, luggage room, or behind-the-desk shelf until you ask for it. No X-ray, no metal
                detector, no opening. Routinely opening or reading a guest's mail would violate privacy norms and, in many
                jurisdictions, postal and privacy laws, so they don't.
            </Paragraph>
            <Paragraph>Where scanning does happen is a narrow set of cases that don't apply to you:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        High-threat luxury and embassy-district hotels
                    </Word> in places like Israel, parts of the Middle East, South Asia, and some Latin American capitals —
                    these often X-ray luggage and incoming parcels at the entrance.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Major convention and resort properties
                    </Word> with dedicated business centers or FedEx/UPS-staffed package rooms — these log and sometimes
                    inspect for damage/leakage but don't content-scan.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ad hoc inspection
                    </Word> if a package looks tampered with, leaks, smells, or otherwise looks suspicious — staff and law
                    enforcement may open or detain it as part of an incident response.
                </Line>
            </Paragraph>
            <Paragraph>
                The practical implication for sensitive items: the weak point isn't scanning, it's <Word>
                    <Bold />
                    physical custody and access control
                </Word>. Your package will sit unattended in a back room for hours or days where any front-desk employee,
                housekeeper passing through, or — in a worst case — someone who talks their way past the desk could
                potentially access it. There's no chain-of-custody, no signature requirement at pickup unless you arrange
                it, and "Doug, room 214" is enough for many staff to hand it over.
            </Paragraph>
            <Paragraph>If "sensitive" means valuable, irreplaceable, or contains personal data:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Require signature confirmation
                    </Word> with the carrier (FedEx Signature Required, UPS Adult Signature, USPS Signature Confirmation) —
                    this forces the desk to physically sign, creating a record, and prevents porch-pirate-style handoffs.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Use FedEx Hold at Location or UPS Access Point
                    </Word> instead — pick it up at a staffed retail location with ID. The nearest options to Massapequa
                    Park would be the FedEx Office or a UPS Store; both require government ID at pickup.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        USPS Hold for Pickup
                    </Word> at the Massapequa post office (~5450 Merrick Rd) works similarly.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        For genuinely high-value or confidential material
                    </Word> (legal documents, financial instruments, medications, electronics over a few hundred dollars), a
                    courier hand-delivery or pickup-locker route is meaningfully more secure than the hotel.
                </Line>
            </Paragraph>
            <Paragraph>If you tell me roughly what's being sent, I can suggest the right channel.</Paragraph>
        </Message>
    </Chapter>
);
