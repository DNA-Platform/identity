import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Title>[[ 13 May 2026 ]]</Title>
        <Message
            at="2026-05-13T08:25:51.355599Z"
        >
            <Origin>019e2071-16f5-7594-9b11-88693a8bfd1b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so if we want to setup the LLC for Ana in the simplest safest way, what does that look like? What info
                does she need to have?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:26:48.789266Z"
        >
            <Origin>019e2071-16f5-7283-b12a-652cbabd1d89</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Quick flag before the checklist: for Ana's actual use case (single person, foreign-client freelancing, ~$48K/year), IE is still likely the simpler structure than LLC.
                </Word> LLC adds bookkeeping, a separate corporate bank account, and slightly more complex tax mechanics. If
                you're going LLC anyway for reasons (liability shield, looking more institutional, futureproofing for
                hiring/scaling, or wanting to keep the IE option open separately), here's what setup looks like.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What Ana needs to have ready:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Her passport.
                    </Word> Original Russian passport plus a notarized Georgian translation. If she already has the
                    translation from the marriage registration, the same one likely works as long as it's under 60 days old
                    or can be re-notarized.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A company name.
                    </Word> Three options in case the first is taken in the registry. Can be in Georgian, English, or both.
                    Add the "LLC" suffix (Georgian: შპს, transliterated as "Sh.P.S."). Quick check at napr.gov.ge to see if
                    your preferred name is available.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Legal address.
                    </Word> Where the company is registered. Can be your residential address in Saburtalo if your landlord
                    agrees (some don't want their address used for business registration — worth asking). Alternatively a
                    virtual office service runs ~30-50 GEL/month.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Activity description.
                    </Word> What the LLC will actually do, to select NACE codes. For Fiverr-style work, common codes include
                    63.99 (information services), 73.11 (advertising), 74.10 (design), 74.30 (translation), 62.01
                    (programming). Pick what genuinely fits — wrong codes can disqualify her from certain tax regimes later.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Shareholder and director designations.
                    </Word> Ana = 100% shareholder, Ana = sole director.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Initial capital declaration.
                    </Word> No minimum required by law; the charter just has to state a figure. Most foreign-owned LLCs put
                    1 GEL or 100 GEL in the charter. Doesn't need to be deposited anywhere as proof.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A charter (statute).
                    </Word> Standard one-page document describing the company. Service providers have templates. You can
                    draft your own from a template but the language should be in Georgian.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two paths to actually register:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Path A: DIY at Public Service Hall.
                </Word> Walk into any PSH (Sanapiro is central) with Ana's translated passport, draft charter, and the
                application form. Pay ~100 GEL fee. Registration in 1-2 business days. Pick up extract and tax ID. Then go
                to Revenue Service to register for the appropriate tax regime, and to Credo Expat to open the corporate
                account. This is the cheapest route (~150 GEL total) and works fine if you're patient and
                Georgian-bureaucracy-comfortable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Path B: Service provider.
                </Word> ExpatHub.GE or equivalent does the entire formation for $300-500 — drafts the charter, handles
                translations, files at PSH, sets up tax registration, often assists with bank account opening. Saves
                probably a week of figuring-things-out time. For "simplest and safest" this is the route I'd default to,
                especially given Ana navigating the Russian-language vs Georgian-language paperwork side.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    After registration, the critical post-formation steps:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Tax regime election at Revenue Service.
                    </Word> Default is the Estonian-model CIT (0% retained, 15%+5% distributed). If her work qualifies as IT
                    services to foreign clients, also apply for <Word>
                        <Bold />
                        Virtual Zone status
                    </Word> — 0% CIT even on distributions, 5% dividend tax, 0% VAT. Application is through the Ministry of
                    Economy; takes 4-8 weeks. For Fiverr-style design/content/programming work to foreign clients, this is
                    often where the LLC structure becomes meaningfully better than IE.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Corporate bank account at Credo Expat.
                    </Word> Bring: registration extract, charter, Ana's passport, source-of-funds explanation, maybe a brief
                    business plan. Note that Russian-passport corporate banking has gotten harder in 2025-2026 — confirm
                    with Credo specifically what their current onboarding looks like for Russian directors before assuming
                    this is automatic.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        rs.ge access set up.
                    </Word> Monthly tax declarations get filed here. Even months with no income require a "zero"
                    declaration. 15th of the month for the prior month.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Accountant or bookkeeper.
                    </Word> LLC bookkeeping is meaningfully more involved than IE. Budget 100-200 GEL/month for a Georgian
                    accountant to handle declarations, especially in the first year while you learn the system. The
                    mistakes-avoidance cost is far below the penalty exposure.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What Ana doesn't need:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Georgian residency (LLC ownership doesn't require it)</Line>
                <Line>Georgian language skills (everything translatable)</Line>
                <Line>A Georgian co-owner or partner (100% foreign ownership is fine)</Line>
                <Line>Physical office space (legal address is enough)</Line>
                <Line>Notarized signatures from you as her spouse (your involvement isn't required for her ownership)</Line>
                <Line>
                    Apostilled documents from the US (you're already in Georgia, she's already in Georgia, the relevant
                    document is her Russian passport)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Russian-banking caveat I keep raising:
                </Word>
            </Paragraph>
            <Paragraph>
                Before you commit to LLC formation, walk Ana into Credo Expat for an in-person conversation about opening a
                corporate account as a Russian-passport-holding sole director. Their current policy on this is the
                rate-limiting question. If they say "no" or "we need extensive documentation," the LLC structure suddenly
                has a banking gap that has to be solved before formation makes sense. Better to know now than to register
                the LLC and discover the bank won't open the account.
            </Paragraph>
            <Paragraph>
                If everything checks out — service provider plus Credo conversation, both confirmed clean — the actual
                formation is genuinely a one-week project, not a one-month one.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:56:16.955966Z"
        >
            <Origin>019e208c-ec1e-7fff-ad24-deee2f3d63eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Well then you forget why we need an LLC but we do</Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:56:54.259025Z"
        >
            <Origin>019e208c-ec1e-7b9c-a775-1df0dfc554ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair, sorry — I'll stop nudging on IE-vs-LLC. You've decided, you have reasons, the previous checklist
                stands. To make it more actionable:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 1 — This week, before anything else:
                </Word> Ana walks into Credo Expat (Chavchavadze) for a 15-minute conversation. Question for them: "I'm a
                Russian citizen planning to register a Georgian LLC where I'll be sole director and 100% owner. What's your
                current process for opening a corporate account for me?" Get the actual documentation list and any flags. If
                they say no or get squirrelly, the LLC plan needs adjusting before you start. If they say yes and give a
                clean list, you're cleared to proceed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2 — Same week:
                </Word> Email ExpatHub or equivalent for an LLC formation quote. Provide:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Ana's full name as it appears in her passport</Line>
                <Line>Three candidate company names (Georgian/English/both)</Line>
                <Line>Activity description in two sentences (what the LLC will actually do)</Line>
                <Line>
                    Whether Virtual Zone status is being targeted (i.e., is the work IT services to foreign clients)
                </Line>
                <Line>Your Saburtalo address or request for virtual office</Line>
            </Paragraph>
            <Paragraph>
                Their flat-rate quote should be $300-500 plus the ~100 GEL state fee. Get the timeline — typical is 2-3
                weeks end-to-end including bank account setup.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 3 — While formation is in progress:
                </Word> Ana opens Payoneer or Wise in her own name (the rails test we discussed). Confirms Fiverr can pay
                out to her new processor. This is independent of the LLC and doesn't wait on it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 4 — Once the LLC is registered:
                </Word> Fiverr payout reconfigured to Payoneer/Wise → LLC's Credo corporate account. Monthly rs.ge
                declarations begin. Accountant hired (100-200 GEL/month).
            </Paragraph>
            <Paragraph>
                The two gating questions are (a) does Credo open the corporate account for a Russian director cleanly, and
                (b) does her Fiverr/payment processor setup work in her name. Both resolvable in a week of asking.
                Everything else is straightforward execution once those are confirmed.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:59:01.769217Z"
        >
            <Origin>019e208f-76c6-7726-bfcd-589d598cdc35</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is Expat hub or similar? What does it do? What are the options</Paragraph>
        </Message>
        <Message
            at="2026-05-13T08:59:40.400441Z"
        >
            <Origin>019e208f-76c6-7584-a466-9685fb077251</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “ExpatHub Georgia LLC formation immigration services Tbilisi review 2026 alternatives”
            </Action>
            <Paragraph>
                ExpatHub and its peers are full-service "foreigner-in-Georgia" agencies — they bundle the legal,
                immigration, tax, and accounting work that an expat would otherwise have to find separate Georgian lawyers,
                accountants, and immigration consultants for. The value proposition is one English-speaking firm that
                handles every layer of getting set up and staying compliant.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    ExpatHub specifically.
                </Word> Based in Saburtalo (35 Lavrenti Ardaziani) plus a Vake office on Chavchavadze. Their services span
                moving-to-Georgia logistics, real estate, tax advice, accounting (monthly/annual filings), legal services,
                Individual Entrepreneur and SBS setup, LLC registration, Special Labour Permit, Tbilisi virtual
                address/office, immigration, residency, visa, contract drafting, Power of Attorney, Virtual Zone,
                International Company status, High Net Worth Individual program, and Small Business Status. Managing partner
                is ex-Ernst &amp; Young; legal director handles immigration/contracts/real estate. They offer a free
                30-minute Zoom consultation. LLC formation typically runs in the $300-500 range plus VAT; their tax-advisory
                packages run approximately $600-2,600 USD plus VAT, one-time fee, including drafting Georgian documents,
                notary, translation, and where needed business registration and bank account opening.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The other serious players in this space:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        PB Services
                    </Word> — comparable scope to ExpatHub, mentioned consistently across the same kinds of articles and
                    guides. Tend to write more on the immigration/work-permit side. Russian-speaking-friendly staff which
                    may matter for Ana.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Gegidze
                    </Word> — newer, more digital-first marketing. Strong on Individual Entrepreneur formation guides, less
                    depth on complex tax structures.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Andersen Georgia
                    </Word> — local affiliate of the international Andersen network. More institutional, more expensive,
                    better fit for complex international tax structures (e.g., if you eventually want HNW status,
                    International Company status, or sophisticated cross-border planning). Probably overkill for Ana's LLC
                    setup.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Legal.ge
                    </Word> — not a firm, but a directory/marketplace where you can compare individual Georgian lawyers
                    across the immigration/business/tax niches. Useful if you want to comparison-shop or if you want a
                    specialist on one specific issue rather than a full-service agency.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Team Up
                    </Word> — specialty firm focused on Employer of Record (EOR) services. If you ever wanted to be employed
                    <Word>
                        <Emphasis />
                        by
                    </Word> a third-party Georgian entity that handles your payroll, work permit, and residence on your
                    behalf, this is the model. Not relevant for Ana running her own LLC, but worth knowing exists.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How to choose for your specific case:
                </Word>
            </Paragraph>
            <Paragraph>
                For a single-person LLC formation with foreign-client services, the difference between these firms is
                mostly:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Price
                    </Word> — ExpatHub and PB Services in the $300-500 range for basic LLC formation; Gegidze sometimes
                    cheaper; Andersen meaningfully more expensive.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Language coverage
                    </Word> — All offer English. PB Services has more Russian-language capacity, which matters if Ana wants
                    direct communication in Russian rather than going through you.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ongoing relationship fit
                    </Word> — You'll want the same firm (or another firm) handling monthly bookkeeping and rs.ge
                    declarations after registration. Cost ~100-200 GEL/month. ExpatHub bundles this; some others charge
                    separately.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Russian-passport familiarity
                    </Word> — given Ana's nationality, you want a firm that's actively handled Russian-citizen formations in
                    2025-2026 without surprise. Ask this directly during the consultation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bank account assistance
                    </Word> — some firms have established relationships with Credo/TBC/Bank of Georgia that smooth corporate
                    account opening. ExpatHub explicitly includes "opening of bank accounts" in their service packages.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My honest recommendation, given your situation:
                </Word>
            </Paragraph>
            <Paragraph>
                Do free consultations with <Word>
                    <Bold />
                    two
                </Word> firms — ExpatHub plus one Russian-friendly alternative (PB Services or a Russian-speaking Georgian
                lawyer found via Legal.ge or Kovcheg referrals). Both should be 30 minutes of unupsold advice. Compare:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Their quoted total cost (formation + first year of accounting)</Line>
                <Line>
                    Their answer to "what are you filing right now for Russian-citizen directors and what's the bank-account
                    success rate?"
                </Line>
                <Line>
                    Their answer to "what's your current read on the post-April-16 framework — are you filing under the new
                    rules or holding back?"
                </Line>
                <Line>How they communicate with Ana directly in her preferred language</Line>
            </Paragraph>
            <Paragraph>
                The choice often comes down to who answers those four questions most precisely rather than to price. The
                $200 spread between firms is trivial compared to the friction cost of a poor service provider stretching a
                2-week setup into 6 weeks.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T09:01:05.298880Z"
        >
            <Origin>019e2091-5797-760d-83c7-a89494791418</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Woah expensive!!! $600-$2600?!?</Paragraph>
        </Message>
        <Message
            at="2026-05-13T09:01:21.329843Z"
        >
            <Origin>019e2091-5797-7e1f-b864-f9ee4f7765da</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Sorry, I muddled two different price tiers. Let me separate them:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    LLC formation only
                </Word> — ~$300-500 (~800-1,300 GEL) plus the ~100 GEL state fee. This is the basic "register the company,
                draft the charter, set up the tax registration, help with the bank account" package. ExpatHub, PB Services,
                Gegidze all sit in this band.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The $600-2,600 range
                </Word> — that's tax-advisory packages: applying for Virtual Zone status, International Company status, HNW
                status, or building custom tax structures. You don't need this for basic LLC formation. It's a separate menu
                of services for people doing complex cross-border tax planning.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    DIY at Public Service Hall
                </Word> — ~100 GEL state fee total (~$37), no service provider, you handle the paperwork. Doable but slow,
                and you'd need someone to draft the Georgian-language charter. For a Russian-speaker with patience, this is
                genuinely feasible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ongoing accounting
                </Word> — separate from formation. ~100-200 GEL/month (~$37-75/month) for monthly rs.ge declarations and
                bookkeeping. Needed regardless of who formed the LLC.
            </Paragraph>
            <Paragraph>So the realistic budget for Ana's LLC, full-service:</Paragraph>
            <Paragraph>
                <List />
                <Line>Formation: ~$300-500 one time</Line>
                <Line>State fee: $37 one time</Line>
                <Line>Translation/notary: maybe $50 if not included</Line>
                <Line>Bank account opening: usually included or $50-100</Line>
                <Line>Monthly accounting: $37-75/month ongoing</Line>
            </Paragraph>
            <Paragraph>Year-one all-in: ~$800-1,500. Not nothing, but a long way from $2,600.</Paragraph>
            <Paragraph>
                If you wanted to lean DIY: PSH yourself, find a freelance Georgian accountant for monthly filings at the
                lower end of the range, skip the agency markup. Year-one DIY: ~$500-700. The agency premium buys you
                English-speaking project management and someone to call when something breaks, which is often worth the
                spread for the first year while you learn what's actually needed.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T09:02:24.623347Z"
        >
            <Origin>019e2092-8be1-74fc-b8d9-8f8fe71b198a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>None of this is online?? I can’t hire a cheaper online accountant?</Paragraph>
        </Message>
        <Message
            at="2026-05-13T09:02:55.911349Z"
        >
            <Origin>019e2092-8be1-7ab1-b1f8-5c2082fb853c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    You absolutely can. The "expat agency" premium is real, and you're not obligated to pay it.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For the formation itself:
                </Word>
            </Paragraph>
            <Paragraph>
                DIY at any Public Service Hall is ~100 GEL ($37) total. You walk in with Ana's passport (with Georgian
                translation), a charter, and 100 GEL. Out in 1-2 days with the LLC registered. The only piece you can't
                easily do online is the Public Service Hall visit itself — but you're in Tbilisi, so that's a one-hour
                walk-in, not a flight.
            </Paragraph>
            <Paragraph>
                For the charter, you can use a template (free online in Georgian) or pay a local lawyer ~$50-100 to
                customize one. Don't pay $400 to a service provider for a one-page document a local lawyer drafts in 20
                minutes.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For ongoing accounting (the real recurring cost):
                </Word>
            </Paragraph>
            <Paragraph>
                This is where you save the most. rs.ge is the government's online tax portal — filings happen there
                regardless of who does them. Your accountant just needs login access and a power of attorney for tax
                matters; physical location is irrelevant.
            </Paragraph>
            <Paragraph>
                Realistic monthly accounting rates for a single-person LLC with straightforward operations:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Local Georgian accountant (English-speaking)
                    </Word> — 100-150 GEL/month ($37-55). Often found through expat Facebook groups.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Local Georgian accountant (Russian-speaking)
                    </Word> — 80-120 GEL/month ($30-45). Often cheaper, abundant supply due to the Russian emigrant wave.
                    Easy to find via Russian-language Tbilisi expat groups (Kovcheg network) or Telegram channels.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Expat agency accounting (ExpatHub, etc.)
                    </Word> — 200-400 GEL/month ($75-150). Same work, English-language project management premium.
                </Line>
            </Paragraph>
            <Paragraph>
                For Ana's case — single LLC, foreign clients only, no employees, no VAT (under threshold for foreign-client
                services) — the monthly accounting is genuinely simple work. A junior Georgian accountant can do it in 30
                minutes. You shouldn't be paying expat-agency rates for it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where to actually look:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Russian-speaking accountants:
                    </Word> Telegram channels for Russian emigrants in Tbilisi (several active ones), Kovcheg referrals,
                    Facebook groups like "Russian-speaking Tbilisi." Ana can vet them in Russian directly.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        English-speaking accountants:
                    </Word> "Expats in Georgia" and "Tbilisi Expat" Facebook groups have constant "looking for an
                    accountant" threads with recommendations.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Local recommendations
                    </Word> — your landlord, your IE-registered friends, anyone running a small business in Georgia.
                    Word-of-mouth is how most of this market actually works.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A reasonable budget version of the whole setup:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Formation at PSH yourself: ~$40</Line>
                <Line>Charter from a local lawyer or template: $0-50</Line>
                <Line>Bank account at Credo: free, just time</Line>
                <Line>Monthly accounting with a local accountant: $30-50/month</Line>
                <Line>Year-one total: ~$400-650</Line>
            </Paragraph>
            <Paragraph>Compare to ExpatHub full-service: ~$800-1,500 year one. The agency markup is roughly 2x.</Paragraph>
            <Paragraph>
                The decision is essentially: do you want to pay ~$800 extra in year one to have an English-speaking project
                manager who walks you through every step, or do you want to spend a few hours in Facebook groups finding a
                local accountant and DIY the PSH visit? Both are reasonable answers depending on how much your time and
                stress matter relative to the cash.
            </Paragraph>
            <Paragraph>
                For Ana specifically — bilingual English/Russian, presumably comfortable navigating Russian-speaking
                professional networks — finding a Russian-speaking Tbilisi accountant for 100 GEL/month is genuinely the
                obvious play. There's a whole post-2022 emigrant economy of these services priced for Russians, not for
                confused American expats.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T09:04:32.482747Z"
        >
            <Origin>019e2094-8316-7eff-91a9-faf1c542144c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Find us some russian speaking or english speaking georgian accountant options. We can form through expat
                hub. Add all of this to an edible artifact so I can download it.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T09:06:50.391268Z"
        >
            <Origin>019e2094-8316-7a18-ae29-066fdf4a4c31</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me search for actual accountant options before compiling the artifact — I won't make up names.
            </Paragraph>
            <Action>
                Searched the web for “Georgian accountant Tbilisi LLC small business English speaking expat 2026 monthly
                bookkeeping”
            </Action>
            <Paragraph>Let me check the doc creation guide before assembling.</Paragraph>
            <Action>Read /mnt/skills/public/docx/SKILL.md</Action>
            <Action>Read /mnt/skills/public/docx/SKILL.md</Action>
            <Action>
                Ran cd /home/claude &amp;&amp; which node &amp;&amp; node --version &amp;&amp; npm list -g docx
                2&gt;/dev/null || npm install -g docx 2&gt;&amp;1 | tail -3
            </Action>
            <Action>Created /home/claude/build_doc.js</Action>
            <Action>Ran cd /home/claude &amp;&amp; node build_doc.js &amp;&amp; ls -la Ana_LLC_Setup_Plan.docx</Action>
            <Action>
                Ran python3 /mnt/skills/public/docx/scripts/office/validate.py /home/claude/Ana_LLC_Setup_Plan.docx
            </Action>
            <Action>
                Ran cp /home/claude/Ana_LLC_Setup_Plan.docx /mnt/user-data/outputs/Ana_LLC_Setup_Plan.docx &amp;&amp; ls -la
                /mnt/user-data/outputs/
            </Action>
            <Action>Presented files</Action>
            <Paragraph>Document ready. Key things to know about what's in it:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Accountant options included:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Bookkeeping.ge
                    </Word> — explicitly bilingual English/Russian, runs as a dedicated accounting firm rather than
                    full-service expat agency, likely better pricing than ExpatHub
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        PB Services
                    </Word> — full trilingual (English/Russian/Georgian), comparable scope to ExpatHub, often cheaper,
                    Russian-passport-friendly
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ExpatHub Accounting
                    </Word> — premium expat-agency tier, ~200-400 GEL/month
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Kudos Georgia
                    </Word> — more local-Georgian firm, Georgian/English
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Local independent via FB groups
                    </Word> — cheapest option, 80-150 GEL/month, requires you to find and vet
                </Line>
            </Paragraph>
            <Paragraph>
                For your case I'd put <Word>
                    <Bold />
                    Bookkeeping.ge
                </Word> and <Word>
                    <Bold />
                    PB Services
                </Word> at the top of the list to actually contact, since both are explicitly Russian-capable and priced
                below the expat-agency premium. ExpatHub for formation is fine; for ongoing monthly bookkeeping you can do
                better.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Before engaging anyone, verify the URLs load
                </Word> — your prior research has flagged that Georgian business websites die frequently. I've listed
                established ones with recent online activity, but spot-check before sending serious inquiries.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The doc structure:
                </Word>
            </Paragraph>
            <Paragraph>
                Plan summary → 5-step action sequence → formation provider table → accounting provider table → ways to find
                local accountants directly → verification checklist → year-one budget → key regulatory references.
            </Paragraph>
            <Paragraph>
                Edit it freely — it's a working document, not a final reference. The "Things still to verify" section is the
                most important part; it's the list of empirical questions that have to resolve before the plan commits to
                anything.
            </Paragraph>
        </Message>
    </Chapter>
);
