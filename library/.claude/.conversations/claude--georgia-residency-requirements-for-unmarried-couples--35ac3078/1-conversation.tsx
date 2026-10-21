import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-10T08:36:18.597487Z"
        >
            <Origin>019c46b1-b681-760a-b52f-3b8897183f4d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ana and I want residency in Georgia. She and I will likely be married but maybe not. If not, will we need to
                have a leased apartment to get it? If so, will both our names need to be on the lease? She has two kids and
                we’re going to want bank accounts and phones and insurance so how important is residency to get as fast as
                possible
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:36:43.881599Z"
        >
            <Origin>019c46b1-b681-7c27-9de0-8f5c1dbbc5f5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Great questions — let me break these down systematically since they're interconnected.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Lease requirement for residence permits:
                </Word>
            </Paragraph>
            <Paragraph>
                Yes, you'll need to demonstrate a registered address in Georgia as part of any temporary residence permit
                (TRP) application. This is typically done through a lease agreement that's been notarized or through
                property ownership documents. The key requirement is a <Word>
                    <Bold />
                    registration address
                </Word> — the Public Service Hall needs to see you have a legitimate place of residence.
            </Paragraph>
            <Paragraph>
                Each applicant generally needs to show their own address registration. If you and Ana apply separately
                (i.e., unmarried), you could both be registered at the same address — you don't necessarily both need to be
                <Word>
                    <Emphasis />
                    named on the lease
                </Word>, but you each need documentation connecting you to a registered address. A common approach is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>One person signs the lease</Line>
                <Line>
                    The landlord provides a notarized consent letter allowing the other person(s) to register at that
                    address
                </Line>
            </Paragraph>
            <Paragraph>
                This is standard practice in Georgia and landlords familiar with foreigners are used to it. The children
                would be registered under Ana's application.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Married vs. unmarried — practical differences:
                </Word>
            </Paragraph>
            <Paragraph>
                If married, Ana and the kids could potentially be included as dependents on your application depending on
                the pathway, simplifying things. Unmarried, you'd file separately. Given the IE pathway you've been
                researching, you could each pursue separate IE registrations, or one of you could apply through IE and the
                other through a different basis. But marriage simplifies the family unit documentation considerably,
                especially for the children's permits under Ordinance No. 520.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How critical is residency for banking, phones, insurance:
                </Word>
            </Paragraph>
            <Paragraph>This is where urgency matters:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Phone (Georgian SIM):
                    </Word> You can get a prepaid SIM with just a passport — no residency needed. Magti and Geocell both
                    sell them easily.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Insurance:
                    </Word> SafetyWing and similar international policies don't require Georgian residency. Local Georgian
                    insurance would, but you're already covered.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Banking:
                    </Word> This is the big one. Georgian banks have tightened significantly. Opening a basic account at
                    Bank of Georgia or TBC with just a passport is <Word>
                        <Emphasis />
                        technically
                    </Word> possible for foreigners, but in practice many branches now require a TRP or at minimum evidence
                    of legitimate presence (lease, work contract, etc.). Russians specifically face additional scrutiny
                    since the 2022 influx. Ana may encounter more friction than you (US passport holders generally have an
                    easier time). A TRP dramatically smooths this process.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Embassy access:
                    </Word> For US consular services related to spousal immigration processing, your US citizenship is
                    sufficient. But Ana's ability to interact with Georgian institutions for the children's schooling,
                    healthcare enrollment, and any legal matters all improve substantially with a TRP.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line on timing:
                </Word>
            </Paragraph>
            <Paragraph>
                Get the TRP applications moving as fast as possible. Banking access is the most immediate practical
                bottleneck — everything from paying rent to receiving transfers to paying school fees becomes easier with
                proper Georgian bank accounts, and those are increasingly gated behind residency status. The IE pathway's
                70-80% approval rate and relatively straightforward requirements make it the strongest option, and school
                enrollment for the kids strengthens the applications by demonstrating integration intent.
            </Paragraph>
            <Paragraph>
                Would it be helpful to map out a timeline and sequencing for the applications — what can be done in parallel
                vs. what depends on what?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:39:02.633921Z"
        >
            <Origin>019c46b4-38d1-7aee-b572-01e52cf0a4eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So banking is the thing and its not that big a deal with wise. We do need insurance though because safety
                wing is just insurance for medical with no prior evidence and no one takes it directly. What does insurance
                cost with a residency?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:39:33.752008Z"
        >
            <Origin>019c46b4-38d1-7d9f-bb7e-1b51c33b8a97</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Georgia country health insurance cost foreigners residency 2025”</Action>
            <Action>Searched the web for “Georgian local health insurance cost family TBC Aldagi Imedi price 2025”</Action>
            <Paragraph>
                Good correction on SafetyWing — you're right, it's reimbursement-only with no local network acceptance,
                which limits its practical value for routine care.
            </Paragraph>
            <Paragraph>
                Here's the key finding: <Word>
                    <Bold />
                    you don't actually need residency to buy local Georgian health insurance.
                </Word> The major Georgian insurers — GPI Holding, Imedi L, Ardi, TBC Insurance, Aldagi — all sell policies
                to foreigners without a TRP. A passport is sufficient. So this shouldn't be gated behind the residence
                permit timeline.
            </Paragraph>
            <Paragraph>
                On cost, Ardi's products start from 33 to 88 GEL per month per person depending on coverage level. That's
                roughly $12-33 USD per person. For your family of four, you're looking at something like:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Basic plans:
                    </Word> ~130-200 GEL/month ($50-75) for the family
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        More comprehensive:
                    </Word> ~250-350 GEL/month ($90-130) for the family
                </Line>
            </Paragraph>
            <Paragraph>
                The standard insurance period is 12 months, and many companies require upfront payment for the first and
                last month when signing the contract, with remaining months paid monthly. So expect to pay roughly 2 months
                upfront.
            </Paragraph>
            <Paragraph>
                A few practical caveats worth knowing: almost all policies exclude pre-existing conditions, and some
                companies don't cover planned surgeries in the first 6-12 months to prevent people from buying insurance
                solely for an upcoming procedure. Also, large insurance companies have English- and Russian-speaking
                managers, and there are many Russian-speaking specialists in Georgian clinics, which helps Ana
                significantly.
            </Paragraph>
            <Paragraph>
                So to revise the residency urgency picture — insurance and phones are both accessible without a TRP. Banking
                remains the main friction point, but you're handling that through Wise. The real value of the TRP is
                longer-term stability: it's the foundation for school enrollment documentation, embassy processing for the
                spousal visa, and avoiding any future complications as Georgia tightens rules on long-stay foreigners (the
                new mandatory tourist insurance requirement as of January 2026 is one signal of that tightening).
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:46:55.299822Z"
        >
            <Origin>019c46bb-7003-72ff-9c95-4a9129a96fae</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Spousal visa not an option on either side right now. Sounds like marriage would be useful. What about
                through work? We have a US company. Maybe it can have a georgian branch or something? Is there someway to
                configure that so that we can get residency relatively easily
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:47:34.790872Z"
        >
            <Origin>019c46bb-7003-7351-ab1d-d9a2723fe648</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Georgia country foreign company branch office residence permit 2025”</Action>
            <Paragraph>
                This is actually a strong angle. There are several configurations that could work, and the regulatory
                landscape is shifting significantly — the new work permit system launches March 1, 2026, which is just weeks
                away. Let me lay out the options.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: Georgian LLC as a branch/subsidiary of your US company
                </Word>
            </Paragraph>
            <Paragraph>
                You register a Georgian LLC, which can be a subsidiary of your US company or simply a new entity you own.
                The key requirements for a work-based TRP through a company:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The company must have an annual turnover of 50,000 GEL (~$19,000) per each foreigner employed</Line>
                <Line>
                    The founders and director of the company may NOT be citizens of Georgia, and persons applying for the
                    residence permit may be directors or founders but must also work in the company under an employment
                    contract
                </Line>
                <Line>
                    Monthly income must exceed at least 5 times the Georgian subsistence minimum (currently 230.5 GEL, so
                    roughly 1,150 GEL/month minimum — about $430)
                </Line>
            </Paragraph>
            <Paragraph>
                So the structure would be: you and Ana are both directors/employees of the Georgian LLC, each with
                employment contracts showing adequate salary, and the company generates 100,000 GEL (~$38,000) annual
                turnover to cover both of you. Your US company could contract with or fund the Georgian entity. The kids
                would go on Ana's application under Ordinance No. 520.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: Individual Entrepreneur (IE) pathway — one or both of you
                </Word>
            </Paragraph>
            <Paragraph>
                Same 50,000 GEL turnover requirement per person, but lighter structure. You need IE status, VAT
                registration, and documentation of the turnover for the 12 months preceding the application. The challenge
                here is the 12-month lookback — you'd need to register the IE now and start running revenue through it,
                meaning you wouldn't qualify for the TRP application until ~12 months later.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 3: New IT residence permit (if applicable)
                </Word>
            </Paragraph>
            <Paragraph>
                As of September 1, 2025, Georgia offers a special IT residence permit valid for three years, renewable up to
                twelve years, open to IT employees, small business owners in IT, and executives of international IT
                companies, along with their family members. Requirements are at least two years of IT experience and annual
                income of at least $25,000. If your US company does anything IT-adjacent, this could be the fastest and most
                favorable pathway — three-year permit out of the gate rather than 6-12 months, and it explicitly covers
                family members.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Critical timing consideration: March 1, 2026 changes
                </Word>
            </Paragraph>
            <Paragraph>
                Starting March 1, 2026, every foreigner who intends to work, operate a business, or even provide remote
                services for a Georgian company must obtain the Right to Engage in Labor Activity. This authorization
                becomes the gateway to legal employment — without the work right, any labor or entrepreneurial activity will
                be unlawful. Fines of 2,000 GEL per violation. Those already in Georgia must apply within 10 days for a
                labor residence permit after receiving work authorization.
            </Paragraph>
            <Paragraph>
                This means the window to get established under the current (simpler) rules is closing fast. Foreigners
                registered in the labor migrant system by March 1, 2026 will have until January 1, 2027 to obtain the new
                work authorization and correct residence permit. That's a meaningful grace period if you get registered
                before the cutoff.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My recommendation on configuration:
                </Word>
            </Paragraph>
            <Paragraph>
                The LLC route is probably the most flexible for your situation. You register a Georgian LLC, employ both
                yourself and Ana, and run enough revenue through it (via contracts with or payments from your US entity) to
                meet the turnover threshold. This gives you both independent residence permit bases, covers the kids through
                Ana, and creates a legitimate corporate structure for banking, contracting, and tax purposes. If your work
                is IT-related, pivot to the IT permit pathway instead — it's more generous in every dimension.
            </Paragraph>
            <Paragraph>
                Marriage would still simplify things (family reunification as a backup pathway, simpler documentation for
                the kids), but isn't strictly necessary if you're both employed by the same Georgian entity.
            </Paragraph>
            <Paragraph>
                Want me to dig into the specific registration process for the Georgian LLC, or into whether your US
                company's work would qualify under the IT permit category?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:50:36.622467Z"
        >
            <Origin>019c46be-cf78-7e07-8177-ce972f113cf0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So you have to prove salary? Or can I just put money in the company to cover whatever difference?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:50:54.357975Z"
        >
            <Origin>019c46be-cf78-7fdf-9323-b2b4d793eb71</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good question — there are two separate requirements to distinguish here:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Company turnover (50,000 GEL per foreigner)
                </Word>
            </Paragraph>
            <Paragraph>
                This is <Word>
                    <Emphasis />
                    turnover
                </Word> — revenue flowing through the business — not profit, not capitalization. The turnover document must
                be recent and indicate the turnover accumulated during the last 12 months, and this amount should be 50,000
                GEL or more per foreign employee applying for or holding a work residence permit.
            </Paragraph>
            <Paragraph>
                The practical question is whether intercompany transfers from your US entity count as turnover. If the
                Georgian LLC provides services to the US company under a contract (consulting, operations, whatever the
                actual work is), those payments would be legitimate revenue. That's a standard intercompany services
                arrangement and it's exactly how most foreign-owned Georgian entities generate their turnover. You're not
                fabricating anything — your US company is paying a Georgian subsidiary for services actually rendered by its
                employees (you and Ana).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Personal income proof
                </Word>
            </Paragraph>
            <Paragraph>
                The monthly income must exceed at least 5 times the Georgian subsistence minimum — that's about 1,150
                GEL/month (~$430). This can be shown through the employment contract salary, or alternatively through a
                certificate issued by a Georgian bank indicating the total funds in the applicant's personal bank account.
                So yes, for the <Word>
                    <Emphasis />
                    personal income
                </Word> piece, you can show a bank balance instead of salary. They recommend showing at least 60 times the
                subsistence minimum as a lump sum (~13,800 GEL / ~$5,200).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So the practical setup would be:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Georgian LLC has a services agreement with your US company</Line>
                <Line>US company pays Georgian LLC for services (hitting the 50,000 GEL per person threshold)</Line>
                <Line>Georgian LLC pays you and Ana salaries (meeting the 5x subsistence minimum)</Line>
                <Line>
                    Or if the LLC isn't generating enough revenue yet at application time, you show personal bank balances
                    to cover the income proof
                </Line>
            </Paragraph>
            <Paragraph>
                The turnover is the harder requirement because it needs 12 months of history. The personal income piece is
                the easier one — a bank balance works fine.
            </Paragraph>
            <Paragraph>
                The key question is timing: do you need 12 months of turnover history before you can apply, or can you apply
                when you register the company and demonstrate sufficient capitalization and contracts? That's something your
                legal counsel would need to confirm under the current rules versus the March 2026 changes, because the
                answer may differ depending on which regime you're applying under.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:52:09.006198Z"
        >
            <Origin>019c46c0-3a8a-7a0a-8fa2-9997d8cebd60</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do children factor in as Ana has chikdren</Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:52:34.517028Z"
        >
            <Origin>019c46c0-3a8a-790a-9056-b36c766c604b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia residence permit children family reunification minor turnover requirement”
            </Action>
            <Paragraph>
                The children don't add to your turnover burden — that's the good news. Here's how it works:
            </Paragraph>
            <Paragraph>
                The 50,000 GEL per foreigner requirement only counts <Word>
                    <Bold />
                    foreign employees
                </Word> of the company applying for or holding work residence permits. The kids aren't employees, so they
                don't trigger additional turnover requirements.
            </Paragraph>
            <Paragraph>
                Instead, minor children apply through family reunification after the parent's residence permit is approved.
                The validity period is the same as the main residence permit holder's. The process is:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Ana gets her work TRP through the Georgian LLC</Line>
                <Line>
                    Once Ana receives her residence card (ID), she applies for the children through family reunification
                </Line>
                <Line>
                    Documents needed are: application form, notarized passport copy and translation, notarized translation
                    of the document confirming the relationship (birth certificates), and a bank statement confirming
                    sufficient funds in the parent's bank account
                </Line>
            </Paragraph>
            <Paragraph>
                The income threshold for family reunification is also lower — the monthly income must exceed at least 2
                times the Georgian subsistence minimum (so about 461 GEL / ~$175/month), or show 24 times that as a lump sum
                (~5,500 GEL / ~$2,100). Trivial given your situation.
            </Paragraph>
            <Paragraph>
                The critical piece you've already solved: Ordinance No. 520 allows Ana to apply for the children's permits
                without their father's consent. That eliminates what would otherwise be the hardest part of this.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One timing note:
                </Word> if the sponsor's own residence permit has less than 6 months validity, they may not be able to
                sponsor a family member. Since first-time permits are typically issued for 6-12 months, Ana should file for
                the children immediately after receiving her card — don't wait.
            </Paragraph>
            <Paragraph>
                So the total structure: Georgian LLC employs you and Ana, needs 100,000 GEL turnover (covering two foreign
                employees), and the two kids ride on Ana's permit through family reunification at minimal additional cost.
                If you're married, you could alternatively have just one of you employed and the other plus kids all come
                through family reunification — but having both of you independently employed gives you redundancy, which
                matters for your situation.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:53:41.856538Z"
        >
            <Origin>019c46c1-a407-7624-b0fd-3dc8263c1f2b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>If she and I are married can I get mine through reunification too?</Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:54:00.899065Z"
        >
            <Origin>019c46c1-a407-7d22-8cc4-30624362b25e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. Family reunification covers: spouse (the other spouse joins them), minor child (parents join them), and
                parent (minor children join them). So if Ana holds the work TRP, you as her spouse and the two kids all come
                through family reunification on her permit.
            </Paragraph>
            <Paragraph>
                That cuts the turnover requirement in half — 50,000 GEL instead of 100,000 GEL, since only one foreigner
                (Ana) is employed by the LLC.
            </Paragraph>
            <Paragraph>
                The income threshold for your family reunification application is the same low bar as the kids — 2 times the
                subsistence minimum monthly, or 24 times as a lump sum in a bank account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The tradeoff is exactly what I flagged before: redundancy.
                </Word> If Ana's permit gets denied, not renewed, or revoked for any reason, everyone's status falls with it
                — yours and the kids'. With both of you independently employed by the LLC, you each have your own basis, and
                the kids could ride on either parent's permit.
            </Paragraph>
            <Paragraph>
                Given your specific situation — operational security concerns, the complexity of Ana's documentation
                (Russian passport, custody considerations) — having a single point of failure on her permit is riskier than
                it would be for a typical family. If her renewal hits a snag, you'd have zero fallback time.
            </Paragraph>
            <Paragraph>
                So it's a real choice: 50,000 GEL turnover and simpler structure but fragile, versus 100,000 GEL and more
                paperwork but resilient. Given that the turnover is just intercompany payments from your US entity anyway,
                I'd lean toward the redundant setup — the extra $19K in revenue isn't the hard part.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:54:53.467790Z"
        >
            <Origin>019c46c2-bc62-7f3c-901a-fa7a17643d42</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We have a single point of failure. Kids can only travel with her period. If she fails, everything fails.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:55:02.939714Z"
        >
            <Origin>019c46c2-bc62-7a3e-9d11-fcd5af2ab3dd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a clear-eyed assessment and it changes the calculus completely. Your independent work permit doesn't
                actually buy you anything — if Ana's status fails, you're not staying in Georgia without her and the kids.
                So the "redundancy" is illusory.
            </Paragraph>
            <Paragraph>
                Go with the simpler structure: Ana holds the work TRP through the LLC, you and the kids come through family
                reunification. 50,000 GEL turnover, one set of employment documentation, lower complexity all around.
            </Paragraph>
            <Paragraph>
                The effort that would go into maintaining a second 50,000 GEL revenue stream and your separate employment
                paperwork is better spent making Ana's application as bulletproof as possible — clean corporate
                documentation, solid turnover history, kids enrolled in school showing integration intent, everything
                buttoned up for renewal.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:55:40.968633Z"
        >
            <Origin>019c46c3-74e6-71d2-86c7-e36cc7b3a21b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But how do we do it if we have to create a new entity because then that entity hasn’t had any money coming
                through it
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:56:16.689289Z"
        >
            <Origin>019c46c3-74e6-7211-8518-c1405a4ac887</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is the key problem. Let me search for whether there's a way around the 12-month lookback.
            </Paragraph>
            <Action>
                Searched the web for “Georgia residence permit new company turnover 12 months requirement branch office
                foreign company”
            </Action>
            <Paragraph>
                There's actually a critical detail buried in one of these sources that changes everything. If the turnover
                attains the specified amount within a shorter period, such as four months, there is no requirement to delay
                — applicants can promptly submit their residence permit applications.
            </Paragraph>
            <Paragraph>
                So it's not "wait 12 months and then show 50,000 GEL." It's "show 50,000 GEL accumulated within the
                preceding 12 months." If you register the Georgian LLC next week and your US company pays it 50,000 GEL over
                the next few months under a services contract, Ana can apply as soon as that threshold is hit.
            </Paragraph>
            <Paragraph>
                That said, a brand-new startup with zero history cannot sponsor anyone for a residence permit immediately
                because it has no 12-month track record. So there <Word>
                    <Emphasis />
                    is
                </Word> a ramp-up period — probably 3-4 months if you push revenue through aggressively. Not 12 months, but
                not instant either.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Three ways to accelerate this:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Front-load the intercompany payments.
                </Word> Register the LLC, open the corporate bank account, execute a services agreement with your US
                company, and start transferring immediately. Hit 50,000 GEL as fast as possible. You're looking at roughly
                $19,000 — you could theoretically push that through in a couple months.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Employer of Record (EOR).
                </Word> This is interesting — an established Georgian entity with significant local turnover already exceeds
                the 50,000 GEL per-foreigner requirement, allowing you to hire foreign talent immediately without waiting
                for your own company to build up a 12-month revenue history. A company like Team Up acts as Ana's legal
                employer on paper, using their existing turnover to sponsor her TRP. You'd pay them a fee, but you skip the
                ramp-up entirely. This could get Ana's application filed within weeks instead of months.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. IT residence permit.
                </Word> If Ana's work qualifies as IT-related, this sidesteps the turnover question entirely. You need to
                confirm 2 years of work experience and an annual salary of at least $25,000, and it's issued for three years
                immediately. No company turnover lookback. Spouse and minor children apply after approval of the main
                applicant's IT permit, with the same validity term. Does Ana's work through your US company have any IT
                component?
            </Paragraph>
            <Paragraph>
                The EOR route is probably the fastest path to getting Ana's permit filed if IT doesn't apply. You can still
                register your own LLC in parallel and transition her employment to it later once turnover is established.
                The EOR is a bridge, not a permanent arrangement.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:57:09.824153Z"
        >
            <Origin>019c46c4-d185-706a-ba08-626f4f2773d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m talking about taking our other company which is about a year old and doing some sort of relocation to
                George or something
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:57:53.724463Z"
        >
            <Origin>019c46c4-d185-70a1-bfd6-485b851168d3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia register foreign company branch office existing turnover residence permit”
            </Action>
            <Action>
                Searched the web for “register branch foreign company Georgia country Tbilisi turnover counted residence”
            </Action>
            <Paragraph>
                I see what you're getting at — can you register the existing US company as a branch in Georgia and have its
                existing revenue history count toward the 50,000 GEL requirement?
            </Paragraph>
            <Paragraph>
                A branch office is a territorial unit (subdivision) of a foreign company in Georgia. Unlike a new Georgian
                LLC, a branch isn't a separate legal entity — it's legally the same company as your US parent. That's the
                structural argument for why its existing revenue should count.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But here's the problem.
                </Word> The turnover proof has to come through Georgian systems. Turnover can be proven by: a VAT turnover
                statement issued by the Revenue Service, a bank statement of your Georgian business bank account in GEL, or
                a licensed auditor verifying turnover — though recent practice shows that auditors' reports are getting
                rejected.
            </Paragraph>
            <Paragraph>
                So even if your US company has done $100K in the last year, the Georgian Revenue Service doesn't care about
                US bank statements. They want to see money flowing through a Georgian bank account or Georgian tax filings.
                A brand new branch registered tomorrow has zero history in the Georgian system regardless of how much the
                parent has earned.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real question is whether a branch structure lets an auditor certify the parent company's existing turnover as the branch's turnover
                </Word>, since they're legally the same entity. Before auditor reports started getting rejected, this was
                apparently a viable path. Now it's shaky.
            </Paragraph>
            <Paragraph>
                This is genuinely a question for your legal counsel — specifically, someone who deals with the Public
                Service Hall regularly and knows what's being accepted in practice right now, not just what the statute
                says. The answer may differ month to month as the 2026 reforms roll in.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practically, I think you're looking at three realistic paths to close the gap:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Branch registration + immediately route all US company revenue through the Georgian branch's bank account.
                    </Word> You reclassify clients as contracting with the Georgian branch. Revenue starts accumulating in
                    the Georgian system from day one. Hit 50,000 GEL as fast as your existing revenue allows — could be
                    weeks if revenue is sufficient.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        EOR as a bridge
                    </Word> while you build up Georgian branch turnover. Ana gets employed by an established Georgian
                    company immediately, files for TRP right away, and you transition her to your own entity once it has
                    history.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        IT permit
                    </Word> if applicable — bypasses the entire turnover question.
                </Line>
            </Paragraph>
            <Paragraph>
                The branch route with revenue rerouting is probably the closest to what you're envisioning and has the
                strongest logic. But "we registered this branch yesterday and here's our first month of Georgian bank
                activity showing $19K" is a very different pitch to the PSH than "here's 12 months of steady revenue." Your
                counsel needs to tell you how that will actually be received.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:59:29.826213Z"
        >
            <Origin>019c46c6-f32b-7cca-8942-941e2455aeb8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Oy complex. Okay need to think</Paragraph>
        </Message>
        <Message
            at="2026-02-10T08:59:38.033998Z"
        >
            <Origin>019c46c6-f32b-7560-bad8-9df51fa18d0e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yeah, there are a lot of moving parts. The core tension is speed vs. simplicity — the fastest paths (EOR, IT
                permit) have their own constraints, and the cleanest path (your own entity with established revenue) takes
                time to build.
            </Paragraph>
            <Paragraph>
                When you're ready to pick it back up, it might help to bring these specific questions to your legal counsel
                since they'll know what the PSH is actually accepting on the ground right now:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Whether a branch with rerouted revenue will be treated differently than a new LLC</Line>
                <Line>How fast turnover needs to accumulate before they'll accept an application</Line>
                <Line>Whether the March 2026 deadline changes the calculus on any of this</Line>
            </Paragraph>
            <Paragraph>
                No rush. You've got the visa-free year giving you breathing room on the residency timeline itself — the
                urgency is more about getting ahead of the regulatory tightening than about immediate legal status.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T09:00:54.999976Z"
        >
            <Origin>019c46c8-3eb9-70ec-b465-61533424f96a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t have legal council, so how does one find legal council in Georgia to do these sorts of things?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T09:01:25.598901Z"
        >
            <Origin>019c46c8-3eb9-7116-967d-e60462767f25</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “immigration lawyer Tbilisi Georgia residence permit business foreigner English
                speaking”
            </Action>
            <Action>
                Searched the web for “ExpatHub Georgia residency application service review Tbilisi attorney recommendation”
            </Action>
            <Paragraph>
                Here are the most practical options, roughly in order of how well they'd fit your situation:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    ExpatHub.GE
                </Word> — This is probably your best first call. They're expat-managed, English-speaking, have licensed
                Georgian attorneys on staff, and they handle exactly the combination you need: business registration,
                residence permits, family reunification, tax setup, all under one roof. They offer a free 30-minute
                consultation to scope your situation. They're in Saburtalo, Tbilisi. They've processed hundreds of residency
                applications and reviews consistently mention responsiveness and transparent pricing. Contact: expathub.ge,
                or book a free consultation directly on their site. Given the complexity of your situation — company
                structuring, Ana's Russian passport, kids' family reunification, Ordinance No. 520, the March 2026 deadline
                — this is the kind of firm that can handle the full picture rather than just one piece.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Nomos Georgia
                </Word> — A Tbilisi law firm specializing in business, immigration, real estate, and civil law, with
                internationally educated legal professionals. Strong reviews, particularly around Lika Tsintsabadze. More of
                a traditional law firm if you want someone with courtroom experience and heavier legal lifting (e.g., if the
                humanitarian protection angle ever needs formal legal work). nomosgeorgia.com
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Business Setup Georgia / Valeri Bendianishvili
                </Word> — Immigration lawyer and Georgia Bar Association member since 2006, fluent in English and Russian.
                The Russian fluency is useful for working with Ana's documents. They specialize in the company formation +
                residence permit pipeline. immigration-georgia.com / lawfirmgeorgia.com
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Lawyers.ge
                </Word> — Team fluent in English, French, Russian, and Georgian. Handles immigration, company registration,
                and virtual zone status. More general practice but covers the immigration + business combo.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My suggestion:
                </Word> Start with ExpatHub's free 30-minute consultation. Come with the specific question about branch
                registration vs. new LLC, whether existing US company revenue can be channeled through to meet the turnover
                requirement, and the timeline to get Ana's TRP filed before March 2026. That one conversation will tell you
                both whether they're the right fit and what the actual viable path is given current PSH practice. If they're
                not the right fit for the more complex humanitarian/custody dimensions, they'll likely know who is.
            </Paragraph>
        </Message>
    </Chapter>
);
