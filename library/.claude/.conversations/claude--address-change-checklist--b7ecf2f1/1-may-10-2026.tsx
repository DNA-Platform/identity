import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 May 2026](2026-05-10)</Date>
        </Dated>
        <Title>[[ 10 May 2026 ]]</Title>
        <Message
            at="2026-05-10T01:04:33.988054Z"
        >
            <Origin>019e0f6a-1b4a-7f4e-9a1a-b542c586acbd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We did some work about what I need to do to change my address. We noted banks. We noted drivers license and
                passport would be tricky. Can you find that chat and list all that we came up with so far
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T01:05:29.489741Z"
        >
            <Origin>019e0f6a-1b4a-7c90-bee8-f9796626184d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “change address banks driver's license passport”</Action>
            <Action>Searched past conversations for “address change list autofill Chrome IRS spreadsheet tracking”</Action>
            <Action>Searched past conversations for “driver's license IRS Form 8822 NC North Carolina residence”</Action>
            <Action>Searched past conversations for “driver's license tricky address change Georgia residence”</Action>
            <Action>Searched past conversations for “DMV REAL ID state residency move abroad”</Action>
            <Paragraph>
                Found it — the chat from April 21, 2026 about updating everything after selling the US house and moving to
                Georgia, with the Traveling Mailbox NC address as the forwarding address. Here's the full picture we
                assembled:
            </Paragraph>
            <Heading>Discovery sources (to surface accounts you might forget)</Heading>
            <Paragraph>
                <List />
                <Line>Password manager</Line>
                <Line>Email search for "address," "shipping to," "change of address," "billing statement"</Line>
                <Line>Last 12 months of credit card and bank statements</Line>
                <Line>Browser autofill profiles</Line>
                <Line>Last 6 months of Traveling Mailbox forwarded mail</Line>
                <Line>Contacts app (doctors, accountants, attorneys)</Line>
            </Paragraph>
            <Heading>The action list, ordered by what unlocks what</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 1 — Do first (these feed everything else via autofill):
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
                    Tier 2 — Terminate, don't update (old house services):
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
                    Tier 3 — Financial institutions (matter for tax forms and legal notices):
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
                <Line>Any forgotten brokerages (check last year's 1099 pile)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 4 — Recurring billers with shipping/service implications:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>AT&amp;T (affects Day Pass billing and WiFi Calling)</Line>
                <Line>eBay (shipping defaults)</Line>
                <Line>Traveling Mailbox itself (account contact, not the forwarding address)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 5 — Low-stakes billing-address-only:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>ChatGPT, Claude, GitHub, Azure, Google Workspace — knock out in one sitting</Line>
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
                <Line>UChicago and UCSD alumni (relevant for PhD re-entry)</Line>
                <Line>US doctors/dentists with active records</Line>
                <Line>Attorneys (custody team + any US estate/personal attorneys)</Line>
                <Line>Will and estate documents if they list an address</Line>
                <Line>Global Entry / TSA PreCheck (Trusted Traveler profile)</Line>
                <Line>Airline and hotel loyalty programs</Line>
            </Paragraph>
            <Heading>Skip entirely (handled automatically elsewhere)</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Passport
                    </Word> — handled at renewal; State doesn't have a separate address-update process for regular citizens
                    (exception: STEP enrollment, opt-in)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        IRS
                    </Word> — handled at next return filing; Form 8822 only needed if something is in flight between filings
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        State tax
                    </Word> — handled at next filing
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        SSA
                    </Word> — only matters if receiving benefits or near retirement
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Voter registration
                    </Word> — only if you want to vote absentee (separate decision)
                </Line>
            </Paragraph>
            <Heading>Two unresolved meta-questions</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Residency position
                    </Word>: NC-via-mailbox is a residency claim, not just a mailing address. Affects state tax. You need to
                    decide whether you're declaring Georgia as residence or keeping NC as both.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Brokerage non-US residence
                    </Word>: Some institutions restrict accounts when they detect foreign residence. Need to know which of
                    yours are OK with a true non-resident vs. which you're keeping on an NC-resident fiction.
                </Line>
            </Paragraph>
            <Paragraph>
                One honest gap: I see passport in the "skip" tier, but I don't see <Word>
                    <Bold />
                    driver's license
                </Word> explicitly addressed in what we discussed. You mentioned both as "tricky" — want me to think through
                the driver's license piece now? The short version is it's tied to state residency, which is the unresolved
                meta-question above, so it's probably best handled together with that decision.
            </Paragraph>
            <Paragraph>
                Also — at the end of that chat I offered to turn this into a tracking spreadsheet with
                status/date-updated/notes columns. You didn't take me up on it then. Want it now?
            </Paragraph>
        </Message>
    </Chapter>
);
