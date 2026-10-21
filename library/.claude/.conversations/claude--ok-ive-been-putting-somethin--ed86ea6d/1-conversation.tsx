import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 April 2026](2026-04-21)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-21T12:13:27.153389Z"
        >
            <Origin>019daff6-7ccc-7011-a2d7-5d0f034ff196</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, I’ve been putting something off for a long time and maybe you can just help me assemble the checklist. I
                sold my US house and I now live in another country - Georgia. I have a traveling mailbox account in North
                Carolina that I can use as an address rather than my Georgian one for US accounts. But I have to just go
                ahead and update everything to the new address. How do we compile a list of all of the things that I have to
                update to get this done?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-21T12:14:04.609284Z"
        >
            <Origin>019daff6-7ccc-7521-b60c-de1db96884c7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Two approaches that work well together — <Word>
                    <Bold />
                    discovery sources
                </Word> (to surface every account that exists) and a <Word>
                    <Bold />
                    category checklist
                </Word> (to make sure you don't miss whole buckets).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Discovery sources
                </Word> — go through each and write down anything with your old address:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Password manager (biggest single source if you use one)</Line>
                <Line>Email search for "address," "shipping to," "change of address," "billing statement"</Line>
                <Line>Last 12 months of credit card and bank statements (catches subscriptions and recurring billers)</Line>
                <Line>Browser autofill profiles</Line>
                <Line>Physical mail forwarded by Traveling Mailbox over the last 6 months</Line>
                <Line>Contacts app (doctors, accountants, attorneys you'd tell personally)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Category checklist
                </Word> — to sanity-check you've covered everything:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Government
                    </Word>: IRS (Form 8822), state tax authority (last state of residence), Social Security Administration,
                    State Department / passport records if you use a US address for consular stuff, voter registration
                    (federal absentee via FVAP if you still want to vote), Selective Service if applicable
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Financial
                    </Word>: every bank, brokerage, credit card, retirement account (401k, IRA custodians), HSA, 529, crypto
                    exchanges, PayPal/Wise/Mercury, any closed accounts still sending tax forms
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Insurance
                    </Word>: health, dental, life, umbrella, renters, any US auto policy still active
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Investment/fund admin
                    </Word>: K-1 issuers, any private investments, fund admins for LPs
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Employment/income
                    </Word>: current and past employers (for W-2s), any 1099 payers
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Professional
                    </Word>: LinkedIn, professional associations, alumni (UChicago, UCSD), licenses
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Healthcare
                    </Word>: every US doctor/dentist/specialist, pharmacies, medical records holders
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Legal/estate
                    </Word>: attorneys, estate documents (if you have a will listing your address)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Loyalty/travel
                    </Word>: airline programs, hotel programs, TSA PreCheck/Global Entry, credit card travel portals
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Subscriptions
                    </Word>: streaming, software, news, anything recurring
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Shipping/delivery
                    </Word>: Amazon, any regular vendors
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two things to flag specifically for your situation
                </Word>:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Some US financial institutions won't let you have a foreign residence on file even if mailing goes to NC
                    — they ask for residence address separately. Decide in advance whether you're declaring Georgia as your
                    residence or keeping NC as both. This affects state tax residency too.
                </Line>
                <Line>
                    Brokerages (IB, Schwab, Fidelity) often restrict account activity when they detect a non-US residence.
                    Worth knowing which of yours are OK with a true non-resident and which you're effectively keeping on an
                    NC-resident fiction.
                </Line>
            </Paragraph>
            <Paragraph>
                Want me to build this as an actual tracking spreadsheet (one row per account, columns for status/date
                updated/notes)? That's probably the most useful next step if you're going to work through it over days or
                weeks.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-21T13:30:34.442699Z"
        >
            <Origin>019db03d-0d73-774e-aa52-c05a8d0d8bd5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, here’s a list that I had assembled for what to change when my credit card number changes. How much of
                this list is the same and how much money I need to add to it?
            </Paragraph>
            <Paragraph>Personal:</Paragraph>
            <Paragraph>
                <List />
                <Line>Chrome</Line>
                <Line>Apple</Line>
                <Line>Microsoft</Line>
                <Line>Google</Line>
                <Line>Amazon</Line>
                <Line>Link</Line>
                <Line>GPT</Line>
                <Line>Claude</Line>
                <Line>SCWA</Line>
                <Line>Optimum</Line>
                <Line>AT&amp;T</Line>
                <Line>Geico</Line>
                <Line>EZPass</Line>
                <Line>Neptune</Line>
                <Line>Ebay</Line>
            </Paragraph>
            <Paragraph>DNA:</Paragraph>
            <Paragraph>
                <List />
                <Line>DNA Azure</Line>
                <Line>DNA Google Workspace</Line>
                <Line>DNA Platform Github</Line>
                <Line>ChatGPT</Line>
                <Line>Claude</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-04-21T13:30:52.742419Z"
        >
            <Origin>019db03d-0d73-76a2-821d-8461be75fac0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good starting point. Your list is about <Word>
                    <Bold />
                    30–40% overlap
                </Word> with what you need for an address change — the recurring-billing accounts do double duty, but
                address changes reach much further.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From your list that also needs address updates:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Apple, Microsoft, Google, Amazon, eBay (billing + shipping)</Line>
                <Line>AT&amp;T (they'll care you're abroad — affects Day Pass billing and WiFi Calling setup)</Line>
                <Line>
                    Geico (almost certainly needs cancellation or major change; auto insurance doesn't work without a US
                    vehicle/residence)
                </Line>
                <Line>EZPass (probably cancel unless you're keeping a car with someone)</Line>
                <Line>
                    SCWA, Optimum, Neptune — <Word>
                        <Bold />
                        these should be terminated entirely
                    </Word>, not address-updated (water, cable, flood insurance on the sold house)
                </Line>
                <Line>ChatGPT, Claude, GitHub — billing address only, trivial</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Probably not relevant for address change:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Chrome, Link — these are autofill/payment tools, not accounts with mailing addresses</Line>
                <Line>
                    DNA Azure, DNA Google Workspace — billing address only, and you're mid-decision on the dna.love →
                    atlas.love migration anyway
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The big gap — what's on your address list but not your card list:
                </Word>
            </Paragraph>
            <Paragraph>
                The card-change list only captures <Word>
                    <Emphasis />
                    recurring billers
                </Word>. Address changes also hit everything that sends you mail once a year or once a decade:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Government
                    </Word>: IRS (Form 8822), state tax, SSA, voter registration, passport records
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Financial institutions holding assets
                    </Word>: Interactive Brokers, Citibank, Chase, Mercury, Wise, PayPal, Freedom Finance KZ, any retirement
                    accounts, any brokerages from old employers
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tax form issuers
                    </Word>: every 1099/W-2/K-1 source, including closed accounts
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Professional
                    </Word>: UChicago and UCSD alumni (relevant for your PhD re-entry), LinkedIn, any professional licenses
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Healthcare
                    </Word>: US doctors, dentists, pharmacies, medical records
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Legal/estate
                    </Word>: attorneys, will/estate docs
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Travel
                    </Word>: airline programs, hotel programs, Global Entry/TSA PreCheck, passport
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Insurance beyond Geico
                    </Word>: health, life, umbrella if any
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Traveling Mailbox itself
                    </Word>: make sure <Word>
                        <Emphasis />
                        its
                    </Word> billing and your account contact info are current
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Suggested next step:
                </Word> want me to turn this into a single tracking spreadsheet with your existing items pre-filled, columns
                for address-updated / card-updated / cancelled / notes, and the gap categories added as empty rows for you
                to fill in? That way you have one document instead of two overlapping lists.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-21T13:33:58.677703Z"
        >
            <Origin>019db040-34e1-77cb-af76-d7e1a15e412c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, let me help. You think a little bit more clearly because you just said that Chrome is an auto fail
                tool right? How do you think I enter my address most often? I have to set it up so that it does that right.
                Factoring that. Type of thinking, and yes, adding your extra things on the list, what does the address
                change list look like?
            </Paragraph>
            <Paragraph>
                Are you sure about passport? Doesn’t that happen when I renew my passport? Are you sure about IRS stuff?
                Didn’t that happen when I did my taxes? Please try to assemble a list for me and don’t agree with me. I
                don’t know these things. I’m just pushing back a little bit to make sure you’re thinking clearly about the
                actual work that I need to do so I don’t do more work.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-21T13:34:24.153753Z"
        >
            <Origin>019db040-34e1-715e-a49e-e1f04c6df086</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right on both pushbacks, and the Chrome point is a genuinely good catch.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On Chrome/autofill:
                </Word> Yes — Chrome, Apple (iCloud Keychain/Wallet), and any other browser/OS autofill profiles should be
                <Word>
                    <Emphasis />
                    first
                </Word> on the list, not omitted. If you update those first, every subsequent web form pre-fills correctly
                and you stop propagating the old address by accident. Same logic for Amazon's saved addresses, PayPal's
                saved addresses, etc. — these are "address sources" that feed other transactions.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On passport:
                </Word> You're right, I was wrong. The State Department uses the address from your most recent passport
                application. There's no separate "update my address with State" process for a regular citizen — it happens
                at renewal. Remove it. (The exception is if you're enrolled in STEP, the Smart Traveler Enrollment Program,
                which does have its own address — but that's opt-in and you'd know if you did it.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On IRS:
                </Word> Partially right. If you file your next return with the new address, the IRS updates automatically —
                Form 8822 is only needed if you've moved <Word>
                    <Emphasis />
                    between
                </Word> filings and expect correspondence (refund check, notice) in the interim. Given you've already sold
                the house, the question is whether anything is in flight right now. If not, just file your next return with
                the new address and skip 8822.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On state tax:
                </Word> Same logic as IRS — handled at next filing. But there's a bigger question underneath: which state
                are you a resident of now? If you're claiming NC via the mailbox, that's a residency position, not just an
                address. Worth thinking about separately from this checklist.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The actual list, reordered by what unlocks what:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 1 — Do these first, because they feed everything else:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Chrome autofill profile</Line>
                <Line>Apple (iCloud contact card + Wallet billing addresses)</Line>
                <Line>Amazon saved addresses (default shipping + billing)</Line>
                <Line>PayPal saved addresses</Line>
                <Line>Google account address</Line>
                <Line>Microsoft account address</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 2 — Terminate, don't update (old house):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>SCWA (water)</Line>
                <Line>Optimum (cable/internet)</Line>
                <Line>Neptune (flood insurance)</Line>
                <Line>EZPass (unless keeping a vehicle)</Line>
                <Line>Geico (unless keeping a vehicle)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 3 — Financial institutions (these are the ones that matter for tax forms and legal notices):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Interactive Brokers</Line>
                <Line>Citibank</Line>
                <Line>Chase</Line>
                <Line>Mercury</Line>
                <Line>Wise</Line>
                <Line>PayPal (account address, separate from saved shipping)</Line>
                <Line>Freedom Finance Kazakhstan</Line>
                <Line>Any old 401k/IRA custodians from past employers</Line>
                <Line>Any brokerage accounts you've forgotten about (check last year's 1099 pile)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 4 — Recurring billers with shipping/service implications:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>AT&amp;T (important — they should know you're abroad; affects billing)</Line>
                <Line>eBay (shipping defaults)</Line>
                <Line>Traveling Mailbox itself (account contact address, not the forwarding address)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 5 — Low-stakes billing-address-only updates:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    ChatGPT, Claude, GitHub, Azure, Google Workspace — do these in a single sitting, they take 30 seconds
                    each
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 6 — Annual/infrequent but important:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>LinkedIn</Line>
                <Line>
                    UChicago alumni, UCSD alumni (relevant for PhD re-entry — you want these current when you start reaching
                    out)
                </Line>
                <Line>Any US doctors/dentists with active records</Line>
                <Line>Attorneys (the custody matter + any US estate/personal attorneys)</Line>
                <Line>Will and estate documents if they list an address</Line>
                <Line>
                    Global Entry / TSA PreCheck (updates at next renewal, but you can update the Trusted Traveler profile
                    now)
                </Line>
                <Line>Airline and hotel loyalty programs</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Skip entirely:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Passport (handled at renewal)</Line>
                <Line>IRS (handled at next filing, unless something's in flight)</Line>
                <Line>State tax (handled at next filing, but think about residency)</Line>
                <Line>SSA (only matters if you're receiving benefits or near retirement — are you?)</Line>
                <Line>Voter registration (only if you want to vote absentee; separate decision)</Line>
            </Paragraph>
            <Paragraph>Want the spreadsheet version of this now?</Paragraph>
        </Message>
    </Chapter>
);
