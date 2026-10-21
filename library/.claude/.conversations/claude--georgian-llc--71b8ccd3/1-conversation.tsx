import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 May 2026](2026-05-10)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-10T00:06:08.382338Z"
        >
            <Origin>019e0f34-7924-77fa-9382-ee9001a0e12d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there a way that I can set up a company in Georgia that has its own bank account without being a resident
                yet, and perhaps even to use to get my residency?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:07:19.561673Z"
        >
            <Origin>019e0f34-7925-7b4d-90fd-3424184b8809</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Georgia LLC registration non-resident foreigner remote 2026”</Action>
            <Paragraph>
                These results are mostly the US state of Georgia, not the country. Let me search more precisely.
            </Paragraph>
            <Action>
                Searched the web for “Georgia country LLC formation non-resident foreigner power of attorney remote
                registration”
            </Action>
            <Paragraph>Now let me get the residency-via-LLC angle, which is the critical part of his question.</Paragraph>
            <Action>
                Searched the web for “Georgia work residence permit LLC company 50000 GEL turnover 2026 director founder”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line: yes on the company and bank account, qualified yes on residency — with a timing problem you've already mapped out.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Forming the LLC.
                </Word> Non-residents can own 100% of a Georgian LLC, serve as sole director, and register remotely via
                notarized + apostilled power of attorney. No residency, no local partner, no nominee shareholder, no minimum
                capital required. Since you're already in Tbilisi, you can skip the PoA route and register in person at
                Public Service Hall — faster and cheaper.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Corporate bank account.
                </Word> This is the part that's gotten harder. Banks have become much more wary of foreign-owned Georgian
                companies, and articles claiming it's easy to open a business account remotely are out of date. Being
                physically present in Tbilisi flips this — and since you already bank at Credo Expat, that's the natural
                first ask. Worth asking them directly before you incorporate, since they'll tell you what KYC they want for
                the corporate account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Residency via the LLC — the catch.
                </Word> Same chicken-and-egg as the IE route, just with extra steps:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    For every foreign national employed (including the director/owner if foreign), the company must show
                    turnover of at least GEL 50,000 over the preceding 12 months. A brand-new startup with zero history
                    cannot sponsor anyone for a residence permit immediately because it has no 12-month track record.
                </Line>
                <Line>
                    Turnover is typically proven via VAT statement from Revenue Service, or bank statement of the Georgian
                    business account in GEL. Foreign-currency turnover into a Georgian corporate account counts; foreign
                    income outside the entity does not.
                </Line>
                <Line>
                    As of March 1, 2026, directors need both a work permit and a residence permit. If you're a director and
                    also doing developer/manager/etc work, you can be issued an employee status under the company's
                    transition period until January 1, 2027 — but only as an employee, not as a director.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where your US company comes in.
                </Word> A Georgian LLC is a fresh entity with no history. A <Word>
                    <Bold />
                    branch
                </Word> of your US company is the same legal person as the US entity, which is why this might solve the
                lookback problem — but I'm not confident the Revenue Service treats a branch's pre-registration foreign
                turnover as Georgian turnover for the 50K test. This is exactly the kind of question I'd refuse to guess on.
                ExpatHub.GE or a tax-focused firm needs to answer it before you commit to a structure, because if the answer
                is "no, only post-registration Georgian-side revenue counts," you have the same 12-month wait either way and
                the branch buys you nothing on residency.
            </Paragraph>
            <Paragraph>Two questions worth putting to ExpatHub in one consult:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    For a <Word>
                        <Bold />
                        branch
                    </Word> of my US LLC, does the Revenue Service count revenue booked to the branch from day one, or only
                    revenue from a Georgian-registered entity's tax history? Is there any way the branch's parent-company
                    history establishes the 12-month track record?
                </Line>
                <Line>
                    Under the March 2026 framework, what's the cleanest path to TRP for me as director/owner — and is there
                    any structure (IT residence permit, investor permit, something else) that bypasses the 50K lookback for
                    someone in my situation?
                </Line>
            </Paragraph>
            <Paragraph>
                The honest answer to your question is "yes, with a 12-month delay you can't fully engineer away." Anyone
                selling you a structure that promises immediate residency from a fresh Georgian LLC is glossing over the
                lookback.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:10:23.090804Z"
        >
            <Origin>019e0f38-5b1e-75df-8aed-7bf4963490ad</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can I have a single person LLC in Georgia that just goes into my personal credo bank via paypal? Or
                crypto?!? )Georgians like crypto but im mostly kidding) - what if my georgian company was empoyed by a US
                company and pays through the company? What does tax obligation look like?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:11:38.481478Z"
        >
            <Origin>019e0f38-5b1e-786f-b4f8-dc7f5b21fc96</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia country LLC tax 2026 corporate income tax dividend distributed profit Estonian
                model”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Short answer: routing LLC revenue to your personal account defeats the entire structure. The US-co-pays-Georgian-LLC setup is the standard play, and the tax math depends heavily on which regime you qualify for.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On personal-account routing (PayPal or crypto).
                </Word> Don't. The whole point of the LLC is that <Word>
                    <Emphasis />
                    the LLC
                </Word> has 50K GEL of turnover for the TRP lookback. Money landing in your personal Credo account isn't LLC
                turnover — it's personal income. Worse, if the LLC bills the work but the cash lands with you, that's
                textbook hidden profit distribution: the taxable base is broadly defined to cover dividends in cash or in
                kind, as well as certain transactions with related or tax-exempt parties that deviate from market
                conditions, and transfer pricing adjustments may give rise to deemed profit distributions. Same answer for
                crypto — receiving business income as USDT is still business income; the LLC must book it. PayPal in Georgia
                has also historically been receive-limited (mostly send-only for personal accounts), worth verifying with
                Credo/your accountant if you're counting on it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The US company → Georgian LLC structure.
                </Word> This is the standard intermediary play. Your US LLC contracts with your Georgian LLC for services,
                pays the Georgian LLC, which becomes its turnover. Then the Georgian LLC pays you via salary, dividend, or
                retained profit. Tax stack at each layer:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Georgian LLC, standard regime:
                    </Word> Under the Estonian-style CIT system, corporate profits are not taxed when earned — only when
                    distributed. The 15% CIT rate applies only upon dividend payment; dividends to individuals then attract
                    a further 5% withholding tax. Effective on distribution: ~18.6% (the 15% is grossed up — a dividend of
                    GEL 85,000 triggers a tax liability of GEL 15,000). Reinvested = 0%.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Virtual Zone status (if your work is IT services to foreign clients):
                    </Word> You don't pay corporate profit tax at all even when distributing profits. Dividends are taxed at
                    5%. No VAT on foreign invoices. This is the headline IT regime — narrowly scoped to digital
                    products/services to non-Georgian clients.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        International Company status:
                    </Word> 5% CIT on distribution, 5% PIT on salaries to employees of the international company, 0%
                    withholding on dividends. Requires IT or maritime sector, real substance, and two years of prior IT
                    activity (in Georgia or abroad, though in the second case the controlling interest must be owned by the
                    foreign partner). Your ~1-year-old US company doesn't clear that yet but might in another year.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Salary route:
                    </Word> If you pay yourself a salary as a non-resident, 20% PIT. As a resident (post-TRP, post-183
                    days), 20% PIT plus 2%+2% pension. Salary is deductible against the LLC's distributable profit base.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Three things that will trip you up if not handled deliberately.
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Transfer pricing.
                    </Word> Both entities are wholly yours. If the US LLC pays the Georgian LLC a price that doesn't look
                    like arm's-length compensation for the services rendered, the Revenue Service can recharacterize the
                    excess as a deemed distribution and tax it. Get a defensible service agreement with market-rate pricing
                    documented.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        US-side tax — and this is where I'd push hard for a US international tax accountant, not just ExpatHub.
                    </Word> A Georgian LLC owned 100% by a US person is likely a Controlled Foreign Corporation under US
                    rules, with Form 5471 reporting and potentially GILTI/Subpart F implications, depending on
                    classification elections. This is genuinely outside what a Georgian-side firm will handle competently —
                    wrong answers here cost real money.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The 12-month lookback hasn't gone away.
                    </Word> Even with the US co paying the Georgian LLC, you still need 12 months of ≥50K GEL turnover
                    <Word>
                        <Emphasis />
                        in the Georgian LLC
                    </Word> before the TRP application. Starting that revenue clock immediately is the whole game.
                </Line>
            </Paragraph>
            <Paragraph>
                The cleanest version of this for your situation is probably: incorporate the Georgian LLC now, sign a
                services agreement with your US co at arm's-length pricing, route US-co revenue through it monthly to build
                the track record, retain profits inside the Georgian LLC during the build year (0% CIT), then revisit
                Virtual Zone or International Company status once you see what your actual activity profile looks like. But
                which regime you should actually elect is the kind of question I'd want ExpatHub <Word>
                    <Emphasis />
                    and
                </Word> a US-side international tax person both signing off on, not me.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:12:40.640629Z"
        >
            <Origin>019e0f3a-755d-7adc-a09e-603f22ae0947</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, forget my US LLC. This would replace its purpose. I want a Georgian bank account, and a Georgian
                company, and I want my tax obligation to be Georgian
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:14:07.112098Z"
        >
            <Origin>019e0f3a-755d-7b98-9b52-31bc76097a5f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Got it. That's a cleaner structure and exactly what Georgia is designed for. Two single-person flavors, both with the Credo corporate (or IE) account doing the work.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option A: IE with Small Business Status — the headline regime.
                </Word>
            </Paragraph>
            <Paragraph>
                1% of gross turnover, with monthly "zero" declarations still required even if you made no income. Cap is
                500K GEL (~$185K) annual turnover; above that you bump up. No CIT, no dividend tax, no VAT on foreign
                clients. Single-person consultant doing knowledge work for foreign clients — this is unbeatable on raw
                burden. Trade-off: no liability shield. You're personally on the hook for any business obligations. For pure
                intellectual services to clean clients, that's rarely a real-world constraint; for anything riskier, it
                matters.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option B: Standard LLC.
                </Word>
            </Paragraph>
            <Paragraph>
                0% on retained profits (Estonian model); 15% CIT + 5% dividend WHT on distributions, effective ~18.6% if you
                pay it all out. Adds liability shield, lets you reinvest at 0%, and makes the structure look more
                institutional to clients/banks. If your work qualifies as IT services to foreign clients, <Word>
                    <Bold />
                    Virtual Zone status
                </Word> turns this into 0% corporate profit tax even when distributing profits, 5% dividend tax, and no VAT
                on foreign invoices — effective 5%, with the LLC shield intact. Consulting and quant-finance work usually
                doesn't qualify; software/data products usually do. Worth probing exactly what you'd be billing for.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quick comparison for your likely revenue band:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    $100K consulting → IE: ~$1,000 tax. LLC standard distributing all of it: ~$18,500. LLC Virtual Zone:
                    ~$5,000.
                </Line>
                <Line>
                    $200K consulting → IE bumps off small-business status; LLC starts looking competitive again, especially
                    Virtual Zone.
                </Line>
            </Paragraph>
            <Paragraph>
                For a single person doing services under ~$185K, IE is hard to beat. The math flips at scale or if
                liability/Virtual-Zone eligibility enters the picture.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Constraints that still apply regardless:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Work authorization.
                    </Word> From March 1, 2026, working in Georgia requires a work permit plus residence permit; visa-free
                    presence does not grant the right to engage in employment or entrepreneurial activities. This applies to
                    IEs and LLC directors equally. The transition period runs to January 1, 2027 for those already
                    registered. So before you actually start invoicing through a new Georgian entity, you need to be in the
                    labor migration system.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The 12-month lookback hasn't moved.
                    </Word> Same 50K GEL/12-month requirement to convert business activity into TRP, whether IE or LLC.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        US filing doesn't disappear, but US tax burden can.
                    </Word> Substantively your tax obligation can be entirely Georgian — Foreign Earned Income Exclusion
                    (~$130K of earned income excluded for 2026 if you pass the physical presence test, which you will) plus
                    Foreign Tax Credit on what's left will typically zero out US tax owed. But you'll still file 1040 +
                    Schedule C (if IE) or Form 5471 (if LLC, as a CFC owner) every year forever. The dollars go to Tbilisi;
                    the paperwork still goes to the IRS. A US international tax person handling the annual filings is
                    non-optional for the LLC route specifically — Form 5471 mistakes are expensive.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My read:
                </Word> if your work is generic consulting or research-style services and revenue stays under ~$185K, IE 1%
                is the obvious choice and the simplest possible structure — passport, IE registration, work permit, Credo
                account, done. If revenue is higher or there's a Virtual Zone angle, LLC starts winning. Either way, get
                ExpatHub (or equivalent) to walk you through which regime your specific work actually qualifies for before
                you incorporate — the wrong structure is annoying to unwind.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:15:53.420451Z"
        >
            <Origin>019e0f3d-6659-766a-b16b-623c981ad35e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, let’s say I have that Georgian company. Let’s say I work for a lab at a US university as a contractor.
                They hire the company right? What did they have to report to the US government? What gets reported to the
                Georgian government? How are these things sorted out?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:18:03.820234Z"
        >
            <Origin>019e0f3d-6659-7e6a-8d1e-54dcb78e40b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “US totalization agreement Georgia country self-employment tax”</Action>
            <Action>
                Searched the web for “US payer foreign LLC contractor services performed abroad W-8BEN-E withholding 1042-S
                source income”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line: the lab contracts with the Georgian LLC, not you. If the work happens entirely in Georgia, the US side reports almost nothing, the Georgian side reports everything, and the IRS reconciles via FATCA and your personal filings.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the lab does on the US side.
                </Word>
            </Paragraph>
            <Paragraph>
                Before paying you a dime, their accounts payable office needs a <Word>
                    <Bold />
                    Form W-8BEN-E
                </Word> from the Georgian LLC (the entity-version W-8). On it, the LLC certifies it's a foreign person and
                provides its Georgian tax ID. The lab keeps it on file; nothing gets sent to the IRS at this stage.
            </Paragraph>
            <Paragraph>
                Then the magic of the sourcing rule: As long as the foreign service provider is performing all of the
                services outside of the U.S., there is no 1099 or withholding requirement for the domestic U.S. payor.
                Personal-services income is sourced where the work happens, not where the payer sits. You doing research
                from Tbilisi for a Stanford lab = foreign-source income.
            </Paragraph>
            <Paragraph>
                So: foreign-source services to a nonresident are normally not reportable. No 1099 (those are for US persons
                only — issuing a 1099 to a foreign person is incorrect and could lead to backup withholding violations). No
                1042-S (that's for foreign persons receiving <Word>
                    <Emphasis />
                    US-source
                </Word> income). No 30% NRA withholding. The lab's accounting treats the payment as a foreign vendor
                expense, deductible on their books, and that's it.
            </Paragraph>
            <Paragraph>
                The piece they care about: the W-8BEN-E. Get it right, sign it, send it. They'll likely also have an
                internal vendor onboarding form.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the Georgian LLC reports to Georgia.
                </Word>
            </Paragraph>
            <Paragraph>
                The LLC files monthly tax declarations through rs.ge showing turnover. The university's payments hit the
                Credo corporate account in USD; the bank reports those to the Revenue Service automatically (the Revenue
                Service can see your account). VAT on services to foreign clients is 0% (reverse-charge / export of
                services). At year-end nothing dramatic happens — under the Estonian model, no CIT until you distribute.
                When you do pay yourself (salary or dividend), the LLC withholds the relevant tax at source: 20% PIT on
                salary, 5% on dividends.
            </Paragraph>
            <Paragraph>
                For your TRP application later, you pull the Revenue Service turnover certificate that proves the 50K
                GEL/12-month threshold.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you personally report to the US.
                </Word>
            </Paragraph>
            <Paragraph>
                This is where the real complexity lives, because you're a US citizen owning a foreign corporation:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Form 5471
                    </Word> with your 1040 every year — Controlled Foreign Corporation reporting. Substantial form,
                    substantial penalties for mistakes ($10K minimum for late or incomplete filing).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        FBAR (FinCEN 114)
                    </Word> if total balances across your foreign accounts hit $10K at any point. Personal Credo + corporate
                    Credo both count. Form 8938 applies when specified assets exceed $200,000 for singles or $400,000 for
                    joint filers living abroad.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        GILTI / Subpart F
                    </Word> potentially apply on the LLC's earnings even before distribution, depending on what kind of
                    income it earns and the entity classification you elect (default foreign corp vs. check-the-box
                    disregarded entity). For services-only income earned by an active business, this is usually manageable,
                    but the election decision is consequential and irrevocable for 5 years.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Form 1040
                    </Word> with FEIE (Form 2555) excluding ~$130K of earned income you receive from the LLC as salary, and
                    Foreign Tax Credit (Form 1116) for any Georgian tax you've paid. This typically zeroes out your US
                    income tax bill on the salary.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The self-employment tax trap — this is why LLC &gt; IE for Americans.
                </Word>
            </Paragraph>
            <Paragraph>
                There is no totalization agreement between Georgia and the United States. Practical consequence: if you are
                self-employed, even with the FEIE, in most situations the IRS expects you to pay the 15.3%
                self-employment/Medicare tax on your net income, even if your income is foreign-sourced and your business is
                based outside the US.
            </Paragraph>
            <Paragraph>
                If you operate as an IE, you're self-employed in the IRS's eyes → 15.3% US SE tax on top of Georgian 1%.
                That turns "1% Georgian tax" into "~16% combined." The Georgian LLC structure routes around this because
                salary you receive from the LLC is wage income (not self-employment income), and there's no US payroll-tax
                obligation for a foreign employer paying a US citizen. This is the single biggest reason an American would
                pick LLC over IE despite IE's headline rate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How the two sides reconcile.
                </Word>
            </Paragraph>
            <Paragraph>There's no automatic income matching the way 1099s match domestic returns. But:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        FATCA
                    </Word> — Credo and every other Georgian bank report your account balances and certain transfers to the
                    IRS automatically.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        US-Georgia Tax Information Exchange Agreement
                    </Word> — either government can request specific records.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Your own filings
                    </Word> — your 1040, Form 5471, FBAR, and 8938 collectively tell the IRS what your LLC earned, what you
                    took out, and where the money sits.
                </Line>
            </Paragraph>
            <Paragraph>
                The system assumes you're honest and verifies through paper trails. Where people get hurt is missed Form
                5471 filings (the $10K-per-year penalty stacks fast) or treating the Georgian LLC as a piggy bank for
                personal expenses (deemed distribution under both Georgian and US rules).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One practical note about university procurement.
                </Word>
            </Paragraph>
            <Paragraph>
                University accounts payable offices vary wildly in their comfort with paying foreign entities, especially
                small foreign entities owned by US citizens. Some sail through it; some demand mountains of paperwork and
                want to issue a 1099-NEC anyway because that's what their system defaults to. If a US company mistakenly
                sent a 1099-NEC to a foreign contractor for work done entirely overseas, ask the payer to file a corrected
                1099-NEC (zeroed) and, if any US-source services were paid to a nonresident, issue 1042-S instead. Worth
                confirming with the lab's grants office <Word>
                    <Emphasis />
                    before
                </Word> signing the contract that they've paid foreign entities before and know the W-8BEN-E drill.
            </Paragraph>
            <Paragraph>
                The legal framework is solid; the bureaucratic friction can be real. And given the stakes — Form 5471,
                GILTI, entity classification election, FEIE optimization — the US-side filings are absolutely a job for a US
                international tax CPA, not me. The Georgian side is straightforward by comparison.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:30:02.772695Z"
        >
            <Origin>019e0f4a-59d3-7949-8c73-e9d89f13dae2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, but in this hypothetical lab scenario where I would be, let’s say the person that’s actually doing the
                work, but they are billing the Georgian company, the school really doesn’t submit anything to the IRS? Did
                they then instead submit something to the Georgian government? Where does my name come into it?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:31:25.790821Z"
        >
            <Origin>019e0f4a-59d3-74a1-8c67-c9156fd1f583</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, that's really the answer. The school files nothing transaction-specific to the IRS, nothing to Georgia, and your name enters the picture mostly through your own US filings — not through the school.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the "really nothing to the IRS" part — really.
                </Word>
            </Paragraph>
            <Paragraph>
                The information-return system (1099, 1042-S) is designed to capture two things: payments to US persons, and
                US-source income paid to foreign persons. A payment from a US payer to a foreign entity for services
                performed entirely abroad is neither. There is no IRS form that fits. The W-8BEN-E goes into the lab's
                vendor file and stays there, available if the IRS ever audits the university and asks "why didn't you 1099
                this vendor?" — at which point the W-8BEN-E is the answer.
            </Paragraph>
            <Paragraph>
                The university's books still show the payment as a foreign vendor expense, deductible like any other
                expense. If they're a nonprofit (most universities), aggregate vendor spending shows up on their Form 990,
                but individual vendors are only listed for the top 5 or those above specific thresholds, and the IRS doesn't
                cross-reference those against vendor tax returns the way it does 1099s. So the transaction is effectively
                invisible to the IRS at the payer level.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the Georgian government — no, the lab doesn't report anything there either.
                </Word>
            </Paragraph>
            <Paragraph>
                The university is a US entity dealing with a Georgian vendor. Georgia has no jurisdiction over them; they
                have no reporting obligation in Georgia. The Georgian government learns about the payment from three of
                <Word>
                    <Emphasis />
                    your
                </Word> sources:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The Georgian LLC's monthly tax declaration to the Revenue Service (you file this).</Line>
                <Line>Credo Bank reporting the inbound USD on the corporate account (automatic).</Line>
                <Line>Whatever VAT, payroll, or dividend filings flow from the LLC's activity (you file these).</Line>
            </Paragraph>
            <Paragraph>
                The reporting chain on the Georgian side is entirely on your side of the transaction. The school is not in
                it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where your name enters the chain.
                </Word>
            </Paragraph>
            <Paragraph>
                This is worth mapping out because the answer is "everywhere, but mostly through doors you open yourself":
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        W-8BEN-E to the lab.
                    </Word> The form is signed by an authorized representative of the LLC. That's you, as director. Your
                    name appears as signatory and likely as a "responsible party." The form sits in the lab's files; not
                    filed with IRS.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The contract.
                    </Word> The lab's services agreement is with the Georgian LLC. You sign it as director. The contract may
                    also reference you specifically as the principal investigator/key personnel — universities often require
                    this for grant compliance, and it's a normal feature of consulting agreements where one person's
                    expertise is the point.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Invoices and project deliverables.
                    </Word> Issued in the LLC's name; you may sign them. Lab personnel obviously know it's you doing the
                    work — they email you, they cite your work in publications, they list you as a collaborator.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The Georgian public registry.
                    </Word> Your name as director and beneficial owner is publicly searchable on napr.gov.ge. The LLC isn't
                    anonymous.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Credo's KYC files.
                    </Word> As beneficial owner and signatory on the corporate account.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Your US filings — this is the main channel by which the IRS learns about you.
                    </Word> Form 5471 declares you own a CFC and lays out the LLC's financials. Form 1040 reports any salary
                    or dividends you took. FBAR (FinCEN 114) reports your signature authority over the LLC's Credo account
                    if balances cross $10K. Form 8938 if the asset thresholds trip.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        FATCA, automatic.
                    </Word> Credo reports your account balances and certain transactional data — both your personal account
                    and the corporate account where you're a signatory — to the IRS every year, indexed to your SSN. The IRS
                    doesn't need the lab to tell them about you; the bank already did.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this actually means.
                </Word>
            </Paragraph>
            <Paragraph>
                The system is not "school reports your work to the IRS." The system is "you report your work to the IRS, and
                the IRS independently has bank-level data via FATCA to cross-check what you reported." If your Form 5471
                says the LLC took in $80K from one US client and Credo reports $200K of inbound payments on the corporate
                account, that's a flag. If the numbers reconcile, no one cares.
            </Paragraph>
            <Paragraph>
                Where this has historically tripped up Americans abroad isn't the lab-side reporting (which truly doesn't
                happen) — it's the personal-side reporting (5471, FBAR, 8938) being skipped or done sloppily, and FATCA data
                later showing the IRS that something was undisclosed. The penalties for those filings being late or wrong
                are brutal — Form 5471 starts at $10,000 per form per year for non-filing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One subtler thing worth understanding about the structure itself.
                </Word>
            </Paragraph>
            <Paragraph>
                There's a US tax doctrine ("assignment of income") that says you can't assign your personal services income
                to a corporation if the corporation is just a paper vehicle to redirect what is functionally your personal
                earnings. The IRS rarely challenges this when:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The corporation has real substance (a real bank account, real bookkeeping, real contracts in its name,
                    real expenses).
                </Line>
                <Line>The contract is genuinely with the corporation, not just billed through it.</Line>
                <Line>The corporation could in principle hire someone other than you to do the work.</Line>
            </Paragraph>
            <Paragraph>
                For a single-person Georgian LLC that's the legitimate operating vehicle for your services business —
                substantively real, with you as employee/director — this isn't a meaningful risk. It becomes a risk if the
                structure looks like sleight-of-hand: e.g., the lab originally hired you personally and then you
                "redirected" the contract through a shell. The way to keep this clean is to have the lab's contract be with
                the LLC from day one, and to actually run business activity through the LLC (other clients, real
                bookkeeping, salary on payroll, etc.) rather than treating it as a payment-routing instrument.
            </Paragraph>
            <Paragraph>
                So the honest summary: the lab really does submit essentially nothing about this transaction to anyone. Your
                name enters the chain primarily through the contract, the LLC's public-registry director listing, and your
                own annual US filings. The IRS sees you not because the school told them, but because you told them — and
                FATCA quietly verifies what you said.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:35:33.681817Z"
        >
            <Origin>019e0f4f-64d9-7bf3-93ca-6ab890076c13</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You’re saying this is my obligation to file if I want to inform the US that I have a Georgian company:
            </Paragraph>
            <Paragraph>
                Your US filings — this is the main channel by which the IRS learns about you. Form 5471 declares you own a
                CFC and lays out the LLC’s financials. Form 1040 reports any salary or dividends you took. FBAR (FinCEN 114)
                reports your signature authority over the LLC’s Credo account if balances cross $10K. Form 8938 if the asset
                thresholds trip.
            </Paragraph>
            <Paragraph>
                I know that’s finicky and I haven’t made any decisions there but to understand that I currently have a wife
                that the US says I’m not allowed to bring to the country so I’m not feeling great about the benefits that
                I’m getting for my passport
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:36:14.121406Z"
        >
            <Origin>019e0f4f-64d9-7b18-a5ef-8059631f6224</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That's a fair frustration, and I don't think there's a tidy way to talk you out of it.</Paragraph>
            <Paragraph>
                The US is one of two countries on earth that tax citizens on worldwide income regardless of where they live,
                and the 5471/FBAR/8938 stack is a paperwork load Brits or Canadians in your same situation simply don't
                carry. And you're naming the real asymmetry: the obligations of the passport apply at full strength while
                the benefit you actually need from it right now — being able to bring your wife in — is exactly what isn't
                being delivered.
            </Paragraph>
            <Paragraph>
                I'm not going to argue you into feeling better about it. Sometimes the answer is just "yeah, that's a raw
                deal," and figuring out the optimal Georgian structure is what's available to do while the immigration
                timeline grinds along on its own clock.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:37:30.506318Z"
        >
            <Origin>019e0f51-305a-7038-8658-548276e91919</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right, but what I’m saying is that it’s something I choose to report. It’s not something that’s reported for
                me.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:38:06.882042Z"
        >
            <Origin>019e0f51-305a-783c-b94f-17bdc7a0d804</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Mostly right, with one significant exception: <Word>
                    <Bold />
                    FATCA
                </Word>.
            </Paragraph>
            <Paragraph>
                Under the US-Georgia intergovernmental agreement, Credo identifies US persons among its account holders and
                reports your balances and certain payment data to the IRS automatically each year, indexed to your SSN. So
                the existence of your Georgian accounts and roughly how much money is flowing through them is <Word>
                    <Emphasis />
                    not
                </Word> something you choose to disclose — the bank already does it on its own clock.
            </Paragraph>
            <Paragraph>
                The forms you mentioned — 5471, FBAR, 8938 — are self-reported. The IRS has no automatic feed of who owns
                Georgian LLCs or who holds signature authority on which accounts. They have the bank-level FATCA data and
                they wait for you to fill in the rest.
            </Paragraph>
            <Paragraph>
                Practically, this means the IRS doesn't have a fully populated picture of your situation without your
                filings, but they have enough to spot when things don't reconcile — $200K flowing through Credo and a 1040
                that shows $40K of income is a visible gap. The system runs on voluntary compliance backed by selective
                verification, and FATCA is the main piece of that verification for Americans abroad.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:39:50.466494Z"
        >
            <Origin>019e0f53-513f-7c36-babe-08be7c4e2ded</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What if its anas company and I am a contractor getting salary to my bank. The lab hires me through company
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:41:52.838687Z"
        >
            <Origin>019e0f53-513f-7f51-911c-4912b2816ab5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Form 5471 spousal attribution nonresident alien spouse Section 958(b) CFC ownership”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    This is actually a meaningful change, not just a nuisance shift. The US filing picture gets substantially lighter, and the self-employment tax problem largely disappears.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why Form 5471 mostly drops out.
                </Word>
            </Paragraph>
            <Paragraph>
                There's a specific provision — §958(b)(1) — that blocks attribution of stock owned by a non-resident alien
                spouse to a US citizen for CFC determination purposes. Concrete result: U.S. citizen Husband cannot be a
                United States shareholder because that would require him to own 10% or more of the foreign corporation's
                stock. Which he doesn't — IRC §958(b)(1), modifying IRC §318(a)(1)(A)(i), says U.S. citizen Husband owns
                bupkis. Nothing. Zero. This means that U.S. citizen Husband cannot be a United States shareholder.
            </Paragraph>
            <Paragraph>
                So if Ana is the 100% owner and you own nothing, the company isn't a CFC as to you, and the Category 5
                filing requirement (the heavy annual one with all the financials, GILTI, Subpart F) doesn't apply.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What might still apply, lightly:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Category 4 (control filer):
                    </Word> Different attribution rules for §6038 <Word>
                        <Emphasis />
                        do
                    </Word> attribute Ana's ownership for "control" purposes, so technically you'd be a Category 4 filer.
                    But there's an exception: When the US person has no direct or indirect ownership, and Category 4 applies
                    solely because of attribution from a nonresident spouse, the exception under Treas. Reg. §1.6038-2(l)
                    generally eliminates the annual filing requirement.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Category 3 (formation year):
                    </Word> In the formation year, the US person is treated as crossing the 10% threshold through
                    attribution. A one-time Category 3 filing may be required. So you might owe one Form 5471 the year Ana
                    sets it up, and then nothing thereafter.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Category 2:
                    </Word> Triggers only if you're an officer or director. If you're purely contractor/employee, doesn't
                    apply.
                </Line>
            </Paragraph>
            <Paragraph>
                Net: maybe one Form 5471 in formation year, then zero. Compare that to filing it every year forever as a CFC
                owner.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The self-employment tax problem disappears.
                </Word>
            </Paragraph>
            <Paragraph>
                This is the big quiet win. Your income now is wages from a foreign employer, not self-employment income.
                Payroll taxes include social security and Medicare and are around 15.3%. Wages from a foreign employer
                aren't subject to US SE tax — the totalization-agreement gap doesn't bite you anymore. Salary goes on 1040
                as foreign wage income, FEIE excludes the first ~$130K, FTC handles anything above. You're left with US tax
                that's likely zero.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What still applies regardless:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        FBAR.
                    </Word> If you have signature authority on the company's bank account (which you almost certainly will
                    if you're operationally running things on Ana's behalf), you file FBAR for that account, even though you
                    don't own it. Plus your personal Credo if it crosses $10K.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Form 8938
                    </Word> if the asset thresholds trip ($200K end-of-year / $300K any time, single, abroad).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        FATCA from Credo
                    </Word> keeps reporting your personal account automatically. Ana's company account, owned by a non-US
                    person, doesn't get FATCA-reported on her — but signature authority by you may flag your name in the
                    bank's records anyway.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The non-negotiable "must be real" piece.
                </Word>
            </Paragraph>
            <Paragraph>
                For this to actually work as described, Ana has to genuinely own and control the company. She signs the
                formation documents, she's the director, she signs the W-8BEN-E to the lab, she signs the services
                agreement, the bank account is in her name as principal. You're an employee or contractor — your role is
                operational, not ownership. If the structure is documentary cover for you actually owning and controlling,
                the IRS has anti-abuse tools (sham entity doctrine, the new §951B from OBBBA, assignment-of-income) and
                they're not subtle. The way this stays clean is that the economic reality matches the paper.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical Georgian-side complications worth thinking through:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Two foreigners, two work authorizations.
                    </Word> Under the March 2026 framework, Ana as director needs work authorization, and you as
                    employee/contractor need separate work authorization. Both go through the Ministry of Labor.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        TRP turnover doubles.
                    </Word> The 50K GEL/12-month threshold is per foreign person in the company. With Ana (director) and you
                    (employee) both foreign, the company needs 100K GEL turnover before either of you can use it for TRP.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ana's own legal status.
                    </Word> Per the structure, she'd register as the founder/director and likely apply for her own TRP
                    through the company. She'd also need a Georgian tax ID and become a Georgian tax resident, which
                    substantively means her global income becomes Georgian-taxable (Georgia is territorial-leaning so this
                    is mostly academic, but worth knowing).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Lab procurement.
                    </Word> The university's vendor onboarding will treat Ana's company as a foreign vendor with Ana as the
                    responsible party. Some labs are fine with this; some have policies that get squirrelly when the
                    responsible party doesn't match the person doing the work. Worth flagging early.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line for you:
                </Word> Annual Form 5471 disappears, SE tax disappears, FATCA still sees the personal account, and the
                salary you take from Ana's company gets cleanly excluded under FEIE. The Georgian-side complications (two
                work permits, doubled turnover threshold) are real but tractable. The whole approach hinges on Ana being a
                real owner-operator, not a paper one.
            </Paragraph>
            <Paragraph>
                This is a legitimate planning structure that exists in tax law specifically because Congress decided not to
                attribute NRA spouse ownership for CFC purposes. It's not a loophole — it's the rule. But the implementation
                has to match the legal form, and the cross-border tax mechanics here are exactly the territory where I'd
                want a US international tax CPA running the actual numbers and a Georgian lawyer handling the entity
                formation, not me.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:43:39.418878Z"
        >
            <Origin>019e0f56-d1a1-764f-875f-22d1d93454e8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, she would run the company entirely and hire me as a contractor just for this job and she would do her
                business too through it. Whats the w6ben like? What gets into the IRS about me
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:45:07.999705Z"
        >
            <Origin>019e0f56-d1a1-7544-9660-f6bd184e8b38</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    The form is W-8BEN-E (the entity version — W-8BEN is for individuals). And in this structure, your name doesn't appear on it at all.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What Ana's LLC sends to the lab.
                </Word>
            </Paragraph>
            <Paragraph>
                The W-8BEN-E is a 9-page IRS form that the LLC fills in once and sends to the lab. The fields that matter:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Entity name (Ana's LLC)</Line>
                <Line>Country of incorporation (Georgia)</Line>
                <Line>
                    Type of entity (Corporation, since Georgian LLC defaults to corporate treatment for US purposes unless
                    otherwise elected)
                </Line>
                <Line>Permanent address (Tbilisi)</Line>
                <Line>Georgian Tax Identification Number</Line>
                <Line>
                    <Word>
                        <Bold />
                        FATCA classification
                    </Word> — and this is the line that decides whether you appear
                </Line>
                <Line>Authorized representative signature (Ana, as director)</Line>
            </Paragraph>
            <Paragraph>
                The FATCA classification is the key. For an active services business — Ana actually running
                consulting/whatever the company does — the LLC is an <Word>
                    <Bold />
                    Active NFFE
                </Word> (Non-Financial Foreign Entity, active). Active NFFEs do not have to disclose "substantial US owners"
                on the form. The whole "Part XXX — Substantial U.S. Owners of Passive NFFE" section gets left blank.
            </Paragraph>
            <Paragraph>
                Compare to a Passive NFFE (mostly investment income), which <Word>
                    <Emphasis />
                    would
                </Word> have to list any US person owning more than 10%. Different beast, doesn't apply here.
            </Paragraph>
            <Paragraph>
                So Ana's company files a W-8BEN-E that mentions Ana, the company, and Georgia. Your name doesn't appear
                anywhere on it. The form sits in the lab's vendor file. It's never sent to the IRS — it's just kept on hand
                to justify the lab's decision not to do 1099 or 1042-S reporting.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What hits the IRS about you specifically.
                </Word>
            </Paragraph>
            <Paragraph>In this structure, the channels narrow to essentially two:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        FATCA on your personal Credo account.
                    </Word> Whenever Ana's LLC pays you (whether as contractor or employee), the money lands in your
                    personal Credo account. Credo identifies you as a US person — they have your passport and SSN — and
                    reports your account balance and certain transaction data to the IRS once a year. This is automatic and
                    unaffected by anything else in the structure.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Whatever you file yourself.
                    </Word> Your 1040 reporting income from the LLC, Form 2555 (FEIE), Form 1116 (FTC) if relevant. FBAR if
                    you cross $10K, including signature authority on the company account if Ana grants it to you. Form 8938
                    if asset thresholds trip.
                </Line>
            </Paragraph>
            <Paragraph>
                That's it. The lab generates zero IRS-facing paperwork that includes your name. Ana's LLC has no US
                reporting obligation. The Georgian government's data isn't shared with the IRS in any automatic way that
                includes you. The only US footprint about you is bank-level FATCA plus your own filings.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing worth flagging before you finalize the structure.
                </Word>
            </Paragraph>
            <Paragraph>
                You said "hire me as a contractor just for this job." That phrasing matters for US tax purposes. Independent
                contractor income is self-employment income to the IRS, which means:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Schedule C on your 1040</Line>
                <Line>15.3% US self-employment tax kicks back in (no totalization agreement to escape it)</Line>
                <Line>
                    FEIE still excludes the income tax portion but <Word>
                        <Bold />
                        not
                    </Word> the SE tax
                </Line>
            </Paragraph>
            <Paragraph>
                If instead Ana's LLC employs you as an actual employee — wages with Georgian payroll withholding — the
                income is foreign wages, no US SE tax obligation on you (foreign employer has no US payroll duty), and FEIE
                handles the income tax piece. The SE tax problem from earlier in our conversation comes back if you're a
                contractor and disappears if you're a wage employee.
            </Paragraph>
            <Paragraph>
                Trade-off: as a Georgian wage employee, you'd be paying Georgian PIT at 20% withheld at source, vs. ~1% if
                you registered yourself as an IE and contracted in. So combined burden:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>IE contractor route: ~1% Georgian + 15.3% US SE tax = ~16.3%</Line>
                <Line>Wage employee route: ~20% Georgian + 0% US SE tax = ~20%</Line>
            </Paragraph>
            <Paragraph>
                For a single client at moderate volume, the IE contractor route is cheaper despite the SE tax. For higher
                income or once you cross the SS wage base cap (~$168K), the math shifts. And the wage employee structure has
                fewer moving parts and no SE tax nightmare. Worth modeling against your expected income before locking it
                in.
            </Paragraph>
            <Paragraph>
                Either way, your name still doesn't appear on the lab's W-8BEN-E or anywhere else they send the IRS.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:53:08.309739Z"
        >
            <Origin>019e0f5f-7f39-7654-a696-4d5080341db7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I create an LLC online in Georgia?</Paragraph>
        </Message>
        <Message
            at="2026-05-10T00:53:44.129495Z"
        >
            <Origin>019e0f5f-7f39-7151-bb15-2f92ad453678</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia LLC online registration NAPR napr.gov.ge foreigner remote yourself 2026”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Not really, in the way you mean. There's no pure online portal where you sit at a laptop in Tbilisi and click through to a registered LLC.
                </Word>
            </Paragraph>
            <Paragraph>The two paths that actually exist:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        In person at any Public Service Hall.
                    </Word> You walk in with passport, charter (which any service provider can draft for ~$100), proof of
                    legal address (lease or notarized landlord letter), pay ~100 GEL fee, and you have a registered LLC in
                    1–2 business days. This is what Georgians do and what foreigners physically present in Georgia do. Since
                    you're already in Tbilisi, this is the fast cheap option.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Remotely via Power of Attorney.
                    </Word> If you weren't in country, you'd notarize and apostille a PoA in your home country and send it
                    to a Georgian service provider who handles it on your behalf. If you're a foreign national setting up a
                    business remotely, appointing a registered agent is non-negotiable.
                </Line>
            </Paragraph>
            <Paragraph>
                The articles you'll see online claiming Georgia has an "e-residency program" letting you incorporate from
                your couch are mostly marketing language from formation-service providers describing their PoA-based
                service. Georgia has been developing more digital-government tools, but there's no Estonia-style e-residency
                that lets a non-resident incorporate directly through a self-service portal. The application must be
                completed in the presence of a representative of the Public Registry — either you in person, or your
                PoA-holder.
            </Paragraph>
            <Paragraph>
                After registration, <Word>
                    <Emphasis />
                    management
                </Word> is heavily online: monthly tax declarations, the Revenue Service portal at rs.ge, the NAPR portal
                for company changes — all digital and remote-friendly. The bottleneck is the initial registration, not
                ongoing operations.
            </Paragraph>
            <Paragraph>
                For your situation: walk into the Public Service Hall on Sanapiro or any Tbilisi branch with passport +
                charter + address proof. Done in two days. Doing it via a service provider while sitting at home in
                Saburtalo is technically possible but more expensive and slower for no real benefit.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T15:38:37.671831Z"
        >
            <Origin>019e128a-304c-74fa-84e0-dcf9f3fe345b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                From a residency perspective, if one person gets it through a company can their spouses and dependent
                children also get it
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T15:39:42.147611Z"
        >
            <Origin>019e128a-304c-7fc1-8f58-0c066aee0d30</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia temporary residence permit family reunification spouse children work-based TRP
                2026”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, with one structural wrinkle that matters for your specific family.
                </Word>
            </Paragraph>
            <Paragraph>
                The standard rule, confirmed by ExpatHub: The residence permit for family reunification is issued to the
                family members of a foreigner already holding a residence permit in Georgia or to family members of a
                Georgian Citizen. A family member means parent for a minor and a minor child and spouse for an adult. So
                once you hold a work-based TRP, your spouse and any minor children get to apply for derivative TRPs as your
                sponsored family.
            </Paragraph>
            <Paragraph>
                The wrinkle for you: Ana's kids aren't your biological children, they're your stepchildren. Georgian family
                reunification anchors on the parent-child relationship. The cascade is therefore not "you sponsor everyone"
                but rather:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>You get the work-based TRP through the company.</Line>
                <Line>Ana gets a TRP via family reunification, sponsored by you as spouse.</Line>
                <Line>
                    The children get TRPs via family reunification, sponsored by <Word>
                        <Bold />
                        Ana
                    </Word> as their mother — not by you directly.
                </Line>
            </Paragraph>
            <Paragraph>
                This is fine, just a sequence. And it's why Ordinance 520 Article 3 §5 (the "one parent without the other's
                consent" provision you've already worked through) matters — it's Ana applying for the kids, not you, so the
                route works without needing the biological father's signature for the temporary permits. That same exception
                does not apply to permanent residence permits, which is the wall you'll eventually need a different solution
                for.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical constraints to plan around:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Permit length asymmetry.
                    </Word> Work-based TRP runs 1+ years (often longer with renewals). Family reunification residence
                    permits are 6 months to 1 year. Yours and Ana's will get out of sync; the family permits need renewal
                    more often.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Derivative status.
                    </Word> All three of theirs are tethered to yours. If your work-based TRP lapses or doesn't renew,
                    theirs collapse too. You're the load-bearing wall on the family's legal status.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Financial sufficiency.
                    </Word> You'll need to show ability to support them — ExpatHub's working number is monthly income
                    exceeding at least 2 times the Georgian subsistence income per dependent, or roughly 24 months of
                    subsistence in savings as an alternative.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Renewal application timing.
                    </Word> The residence permit application needs to be submitted at least 40 days before the expiry of the
                    applicant's legal stay. Easy to miss with three permits running on different clocks.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        March 2026 work-permit rules apply only to your TRP, not theirs.
                    </Word> Family reunification permits aren't tied to the new labor migration system. Ana doesn't need a
                    work permit to get a family-reunification TRP. She <Word>
                        <Emphasis />
                        would
                    </Word> need one if she's also the director of the Georgian LLC and working through it — but that's a
                    separate hat she'd be wearing.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Worth verifying with ExpatHub before you commit to the structure
                </Word> is whether the order matters: specifically, can Ana apply for her children's TRP simultaneously with
                her own family-reunification application, or does she have to wait until hers is approved before sponsoring
                the kids? Some families end up with a 4–6 week gap where the kids are technically out of legal status while
                waiting for Ana's permit to issue first. Worth knowing whether the Agency lets you submit them as a stack or
                requires sequencing.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T15:41:06.599102Z"
        >
            <Origin>019e128c-76cd-719d-a62e-8690be564dc9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The plan is for this to be Ana’s company and I would probably be Ana’s husband so we’re thinking about Ana’s
                children with respect to her being the owner of an LLC that has made the requisite amount of money
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T15:42:20.020836Z"
        >
            <Origin>019e128c-76cd-7151-aaf9-3cd95572a9c5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    This is actually a cleaner structure than the version where you're the primary, and it's a common configuration for binational families in Georgia.
                </Word>
            </Paragraph>
            <Paragraph>The cascade:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Ana owns and runs the LLC, it generates ≥50K GEL/12 months in turnover.</Line>
                <Line>Ana applies for her work-based/entrepreneurial TRP using the company's track record.</Line>
                <Line>
                    Ana applies for her children's family-reunification TRPs as their mother (Ordinance 520 Art 3 §5 lets
                    her do this without the bio father's consent for temporary permits — this is the provision you'd already
                    mapped out).
                </Line>
                <Line>You apply for family-reunification TRP as Ana's spouse.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What gets meaningfully cleaner in this version:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Your US tax picture.
                    </Word> No Form 5471 (Ana is a non-US person, the NRA spouse exception under §958(b)(1) blocks CFC
                    attribution). No CFC, no GILTI, no Subpart F. If you stay genuinely uninvolved in the LLC's operations,
                    this stays simple.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No SE tax problem.
                    </Word> As long as you're not contracting through Ana's company, the totalization-gap issue doesn't
                    apply to you.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The 50K GEL threshold stays at 50K.
                    </Word> That number is per <Word>
                        <Emphasis />
                        foreign person tied to the company's activity
                    </Word>. If you're purely a dependent spouse not working for the LLC, only Ana counts, so the company
                    needs 50K GEL turnover, not 100K.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The children's path is structurally correct.
                    </Word> They anchor to Ana as their biological mother. Doug-as-stepfather sponsoring stepkids would be a
                    less standard route (and likely require the bio father's consent and other complications). Ana
                    sponsoring her own children is the path Georgian law is built for.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The tradeoff to be deliberate about: whether you work at all.
                </Word>
            </Paragraph>
            <Paragraph>
                If you stay purely on family-reunification status and earn any income from non-Georgian sources only:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Cleanest legal posture</Line>
                <Line>No Georgian work permit needed</Line>
                <Line>No Georgian-source income, no Georgian tax filings</Line>
                <Line>US filings stay normal (1040, FBAR if balances cross thresholds, no 5471)</Line>
            </Paragraph>
            <Paragraph>If you do contract work through Ana's LLC (the lab scenario, or anything similar):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    You become a foreign worker tied to the LLC, which kicks the threshold to 100K GEL combined for the
                    company
                </Line>
                <Line>You need your own work authorization separately under the March 2026 framework</Line>
                <Line>SE tax considerations come back if you're a contractor</Line>
                <Line>
                    Whether family-reunification TRP holders need separate work permits to work for a Georgian entity under
                    the new rules is genuinely unclear from public sources — this is exactly the question to put to ExpatHub
                    before assuming either way
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical things to watch:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Three different renewal clocks.
                    </Word> Ana's work-based TRP (typically 1+ years), your family-reunification TRP (6–12 months), each
                    child's family-reunification TRP (6–12 months, possibly approved with different start dates). Easy to
                    miss the 40-day-pre-expiry submission window.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Single point of failure.
                    </Word> Everyone's legal status hangs on Ana's TRP, which hangs on the LLC's 50K GEL annual turnover. If
                    she lapses, all four of you lapse. Worth thinking about contingency — e.g., would you want a parallel
                    basis for your own status (separate IE, property investment, etc.) as a backup, or is the simplicity of
                    one anchor more valuable?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Permanent residence eventually.
                    </Word> Temporary permits via family reunification roll into permanent residence after the standard 6
                    years, but for permanent residence the bio-father consent exception <Word>
                        <Emphasis />
                        doesn't
                    </Word> apply — so when the kids are eventually ready for permanent residence (still minors then or
                    having transitioned to a different basis), the consent question comes back. That's a 2032-ish problem,
                    but worth keeping on the radar.
                </Line>
            </Paragraph>
            <Paragraph>
                The honest summary: this is the right structure for your family. It uses the rules as they're designed,
                threads through the bio-father-consent issue cleanly via Ordinance 520, and minimizes your US filing burden
                in a way that's legally clean rather than aggressive. Get ExpatHub to confirm the
                work-permit-while-on-family-reunification question and the timing of stacking Ana's application with the
                children's.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T15:43:49.010841Z"
        >
            <Origin>019e128e-f215-7d72-98ce-759de9f60e84</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can she apply as soon as she earns the 50 K gel? Or is it only evaluated after 12 months? If she gets the
                residency, what is the probability that her kids get it? I would think that is high. What is the probability
                that her husband gets it? I would guess that it’s lower.?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-10T15:45:28.760739Z"
        >
            <Origin>019e128e-f215-75ff-b0d5-c626d1dd0359</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia work residence permit 50000 GEL turnover 12 months lookback minimum operation
                period”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    On the 12-month question — the threshold is 50K GEL *within* the last 12 months, not 50K GEL *evenly across* 12 months.
                </Word>
            </Paragraph>
            <Paragraph>
                The legal text is clear: the turnover for 12 consecutive calendar months prior to the issuance of the
                certificate is not less than GEL 50 000 per alien seeking a work residence permit. The 12 months is the
                <Word>
                    <Emphasis />
                    measurement window
                </Word>, not a <Word>
                    <Emphasis />
                    minimum operational period
                </Word>. If Ana's LLC clears 50K GEL in three months of activity, the Revenue Service certificate covers
                that 12-month window and shows 50K of turnover — eligible.
            </Paragraph>
            <Paragraph>That said, two practical caveats:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Cautious framings exist.
                    </Word> Some practitioners describe it as needing a 12-month track record of GEL 50,000 revenue, which
                    suggests at least some firms are being conservative about scrutiny. The Revenue Service can issue the
                    certificate based on a few months of declarations; the immigration agency <Word>
                        <Emphasis />
                        may
                    </Word> still raise eyebrows at a company that earned 50K in week one and applied in week three.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        You also need the personal-income test.
                    </Word> Separately from company turnover, the applicant must show personal income of at least 5× the
                    Georgian subsistence minimum per month, or sufficient bank funds. As of July 2023, this amount is 254.5
                    x 5 = 1,272.50 GEL per month; figure has been updated upward since. So Ana also needs documented
                    personal income flowing from the company.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical answer:
                </Word> apply as soon as the 50K is on the books, but ideally with at least 4–6 months of consistent monthly
                turnover declarations behind it rather than a single big invoice. The risk of a thinner record isn't
                outright denial; it's that the agency might want supplementary documentation (contracts, client
                correspondence) to verify the activity is genuine.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the kids' probability — high, with one footnote.
                </Word>
            </Paragraph>
            <Paragraph>
                The structural case is as clean as Georgian family reunification gets: biological mother holds a valid TRP,
                applies for her minor children's TRPs, has Ordinance 520 §5 to bypass the bio father's consent for temporary
                permits. This is exactly the path the law was written to handle. ExpatHub flags one practical wrinkle: As
                the sponsor, if your own residence permit has less than 6 months validity, you may not be able to sponsor a
                family member. So timing matters — Ana needs to apply for the kids early in her TRP cycle, not when hers is
                about to expire.
            </Paragraph>
            <Paragraph>
                I don't have authoritative approval-rate statistics, but for a clean documentation case (apostilled Russian
                birth certificates, valid translations, financial sufficiency, Ana's TRP in good standing), this is the
                routine high-probability outcome. The risk factors are documentation issues — apostille mistakes,
                translation problems, expired papers — far more than substantive denial. I'd say "very probable"
                comfortably; specific percentage isn't something I'd give without empirical data.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On your probability — your intuition is backwards. It's at least as high as the kids', probably higher.
                </Word>
            </Paragraph>
            <Paragraph>
                The reasoning: spousal family reunification is the <Word>
                    <Emphasis />
                    cleanest
                </Word> case in the system. One relationship to verify, no third party (bio father) capable of objecting, an
                adult applicant managing his own paperwork, US passport so no visa-entry complications, and the marriage was
                registered in Georgia — meaning the Georgian government has direct documentary evidence of it from its own
                records, not foreign documents requiring apostille and translation.
            </Paragraph>
            <Paragraph>Things that slightly elevate scrutiny on the kids that don't apply to you:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Bio father exists and could theoretically contest (even though §5 covers temporary permits, paperwork
                    mentioning him invites questions)
                </Line>
                <Line>Multiple foreign documents requiring apostille per child</Line>
                <Line>Russian documentation can be slow to procure</Line>
            </Paragraph>
            <Paragraph>Things that elevate scrutiny on you but probably don't bite:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    "Sham marriage" considerations exist in any system, but Georgia's threshold for this is very low for
                    legitimate marriages with normal indicia (cohabitation, registered in country, normal courtship). You
                    and Ana don't fit any sham profile.
                </Line>
                <Line>
                    Recent marriage timing — the marriage is recent, but legitimately so, and the Georgian agency knows this
                    because they registered it themselves.
                </Line>
            </Paragraph>
            <Paragraph>
                The pattern in practice: spouses on family reunification approve almost reflexively when the marriage is
                verifiable and the sponsor's status is in order. Yours should be approved approximately as easily as Ana's
                company-based TRP, conditional on hers being approved.
            </Paragraph>
            <Paragraph>
                The honest summary: if Ana's primary application clears, both your application and the kids' applications
                are very high probability. The constraint is paperwork hygiene and timing, not the substantive merits. The
                risk profile of the whole family's status is concentrated in Ana's primary — that's where the failure modes
                sit. Once she's through, the rest is mostly mechanics.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:41:42.088917Z"
        >
            <Origin>019e1c6b-e4ab-769a-aeec-f51efe4cb073</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So is this the most realistic route to a Georgian residency? Are there others to be aware of? If we’re
                pretty sure we can get the 50,000 gel for Ana in about six months is this the most pragmatic one for all of
                us in the universe where she and I are married
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:42:51.245128Z"
        >
            <Origin>019e1c6b-e4ab-78af-b48b-a3fa549801d3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Honest assessment: it's one of three serious routes, and probably not the strongest if you have liquidity.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Route 1: Ana's LLC entrepreneurial TRP
                </Word> — what we've been discussing. Works, but the 6-month turnover plan runs into the 12-month-lookback
                issue we already mapped: even with 50K GEL earned in 6 months, you're submitting an application backed by a
                thin track record, and conservative practitioners flag that as scrutiny risk. Also, all four of you depend
                on Ana's primary holding up — single point of failure. Different renewal clocks. Cleanest US tax picture,
                though.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Route 2: Real estate investment TRP
                </Word> — the heavy alternative that I think you should genuinely consider. Buy non-agricultural property
                worth ≥$150K (post-March 2026 threshold). One application covers Ana + you + both kids together. 1-year
                permit, renewable annually. No turnover requirements, no labor migration system, no work permit needed for
                anyone, no 12-month lookback, no chicken-and-egg. Permit can be processed in 10-30 days depending on the fee
                tier.
            </Paragraph>
            <Paragraph>
                Cost: $150K parked in a Tbilisi apartment (you've been in Saburtalo — $150K buys real space there or a
                comparable place in Vake or Vera). Real downside is property-value risk — if the appraised market value
                drops below $150K, the permit can be revoked. Upside: the capital isn't gone, it's in an asset that can
                appreciate or generate rental income. And you're already paying Tbilisi rent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Route 3: Combined real estate + LLC
                </Word> — probably the most pragmatic play if you have the capital.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Buy a $150K Tbilisi property and file the real estate TRP application — all four of you legalized in
                    ~30-60 days.
                </Line>
                <Line>Establish Ana's LLC in parallel, build turnover over 12+ months on a proper unhurried timeline.</Line>
                <Line>
                    At Year 1 renewal, choose: extend the real estate TRP, or switch Ana to the entrepreneurial TRP with
                    everyone as family reunification.
                </Line>
            </Paragraph>
            <Paragraph>
                This eliminates timing pressure on the LLC entirely. You get optionality, instant legal status, and a
                property that's also a rental hedge.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Other paths worth knowing but probably not optimal:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        $300K investment TRP
                    </Word> — 5-year permit, leads directly to permanent residency. Worth it if you're committed to Georgia
                    long-term and have the capital. Otherwise overshoots.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        IT residence permit
                    </Word> — 3-year duration, $25K minimum annual IT income, 2+ years IT experience. Your
                    neuroscience/quant background <Word>
                        <Emphasis />
                        might
                    </Word> be framable as IT depending on what you're actually producing (computational work, software,
                    data products). 3-year duration is a meaningful advantage over 1-year renewals if you qualify. Worth
                    asking ExpatHub whether any of your activity fits the IT-content classification rules.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Doug's own IE/LLC route
                    </Word> — back where we started a few hours ago. Worse for US tax, worse for the kids' path
                    (stepchildren rather than bio mother sponsoring), worse on every dimension except your sense of being
                    the breadwinner. Drop it.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To directly answer your "is this the most pragmatic" question:
                </Word>
            </Paragraph>
            <Paragraph>
                If $150K is tight or earmarked for other things — yes, Ana's LLC is the best of the pragmatic options. Plan
                for 12+ months of LLC operation before applying, not 6, even though you might be able to push through
                earlier.
            </Paragraph>
            <Paragraph>
                If $150K is available — the real estate route is meaningfully cleaner, faster, and lower-risk for the <Word>
                    <Emphasis />
                    whole family
                </Word> simultaneously. The Ana's LLC route is a <Word>
                    <Emphasis />
                    one-person
                </Word> solution that then cascades; the real estate route is a <Word>
                    <Emphasis />
                    family
                </Word> solution from the outset. Your former hedge fund background suggests this might not be a hard
                constraint, but I don't actually know your liquidity picture.
            </Paragraph>
            <Paragraph>
                If you have $150K <Word>
                    <Emphasis />
                    and
                </Word> want to do this thoroughly — the combination is what I'd recommend. The property gives you instant
                family status; the LLC gives you long-term flexibility and Ana's career structure; and you're not gambling
                the whole family's legal status on a single hurried application.
            </Paragraph>
            <Paragraph>
                The thing I'd want to know before committing is: how much weight do you put on optionality vs. capital
                efficiency? The Ana's LLC route maximizes capital efficiency (no big lockup), the real estate route
                maximizes optionality and risk reduction. There's no objectively right answer — it depends on what failure
                mode bothers you more.
            </Paragraph>
            <Paragraph>
                ExpatHub running the numbers on both paths with your specific finances and timeline is the right next step.
                They've seen which paths actually clear cleanly and which run into agency-discretion problems.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:46:40.847546Z"
        >
            <Origin>019e1c70-73b9-7a9d-a7f1-236f3f762282</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Not buying real estate. Not certain we wouldn’t have to move. Not investing 300K not that liquid. The whole
                point is that with my benefits I can’t earn 25K so my IT credentials don’t work. Same for me having LLC.
            </Paragraph>
            <Paragraph>
                Unless my ssa payments can count towards my salary if I had another smaller job. If so I could be freelance
                IS. I will get about 36K income
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:47:44.224095Z"
        >
            <Origin>019e1c70-73b9-7af3-b3e8-47277df611cf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Given those constraints, the Ana-as-primary cascade isn't just the best option — it's effectively the only one. The SSA income angle doesn't open a new door for you, but it does help your family reunification application.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the SSA-as-salary question for the IT permit specifically:
                </Word>
            </Paragraph>
            <Paragraph>
                The IT residence permit requires remuneration received from labor or business activity in IT over the past
                year of at least the equivalent of $25,000 in GEL. The wording is restrictive — it's not "total income of
                $25K," it's "remuneration from IT labor/business activity of $25K." SSA payments aren't IT remuneration. So:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>SSA alone: doesn't count.</Line>
                <Line>SSA + $5K IT freelance: doesn't count (the IT-derived portion has to clear $25K on its own).</Line>
                <Line>
                    To qualify you'd need $25K of IT-specific earned income, which would put you well over the SSA earnings
                    threshold and cost you the benefit.
                </Line>
            </Paragraph>
            <Paragraph>The IT permit is closed to you. Acknowledge it and move on.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's actually left, given your constraints:
                </Word>
            </Paragraph>
            <Paragraph>You've eliminated, with clear reasons:</Paragraph>
            <Paragraph>
                <List />
                <Line>Real estate investment ($150K) — capital lockup, mobility</Line>
                <Line>$300K investment — liquidity</Line>
                <Line>IT residence permit — earnings cap conflicts with $25K IT-income requirement</Line>
                <Line>
                    Doug-as-primary work-based TRP via own IE/LLC — same earnings problem (would need 50K GEL turnover
                    flowing to you, which crashes through SGA)
                </Line>
            </Paragraph>
            <Paragraph>
                What's left is Ana as primary, full stop. She owns and runs the LLC, the LLC clears 50K GEL turnover over 12
                months, she gets entrepreneurial TRP, you and the kids cascade as family reunification. This is the only
                route in the universe of options that:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Doesn't require capital you don't want to commit</Line>
                <Line>
                    Doesn't require <Word>
                        <Emphasis />
                        you
                    </Word> to earn income that breaks your SSA
                </Line>
                <Line>Doesn't require you to qualify for any independent status</Line>
                <Line>Gets all four of you legalized</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your SSA income is actually a positive for the family-reunification side.
                </Word>
            </Paragraph>
            <Paragraph>
                The financial-sufficiency requirement for family reunification TRPs is genuinely modest — currently around
                550 GEL per month per dependent for the duration of the permit, demonstrable either via the sponsor's
                income, the applicant's income, or a Georgian bank account with the equivalent total. $36K/year
                ($3,000/month) is roughly 8,200 GEL/month — comfortably above the threshold for a four-person household. So
                when your application gets filed, you can show your own SSA income via bank statements rather than depending
                solely on Ana's LLC income. That's actually a clean win for the family financial picture: Ana's company
                doesn't need to clear an enormous bar to support all four of you, because you're bringing in real US-side
                income that's already documented.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two practical things worth confirming with ExpatHub specifically:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Whether your SSA bank deposits to your Credo account count as "income" for the family-reunification income test.
                    </Word> Almost certainly yes (the test is income, not specifically Georgian-source income), but get
                    explicit confirmation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Whether you can do any work at all while on family-reunification status without triggering the March 2026 work-permit framework.
                    </Word> If your "freelance IT" idea was about doing some small consulting under your SGA cap (so under
                    ~$19-20K/year), that's a question of whether you need Georgian work authorization for foreign-source
                    remote work. The new rules are written ambiguously on this — they target "working in Georgia" but the
                    definition of "in Georgia" for remote work for foreign clients is genuinely unclear. You don't need to
                    resolve this for residency itself — your residency works either way — but you do need to resolve it
                    before invoicing anyone.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the 6-month plan specifically:
                </Word>
            </Paragraph>
            <Paragraph>
                Given you're not in a hurry (you're already in country on visa-free, your family's getting settled, no
                external deadline forcing the application), I'd push back on the 6-month aspiration and let Ana's LLC
                operate a full 12 months before applying. The conservative timing eliminates the lookback-thin-record risk,
                gives the agency a clean Revenue Service certificate to work with, and reduces the chance of
                refusal-and-reapply (which is more expensive in time than a longer initial build).
            </Paragraph>
            <Paragraph>
                So: revise the timeline to "Ana's LLC opens this month, builds turnover deliberately, applies in month ~13."
                Your SSA income covers the family financially in the meantime. Your visa-free status keeps you legal. Ana
                and the kids' visa-free status keeps them legal (verify her specific visa-free duration as a Russian citizen
                — Russians get 90 days, not 365, so her stay needs to be managed differently than yours).
            </Paragraph>
            <Paragraph>
                This is the structure. It's not glamorous, but for your specific constraints it's the one that actually
                works without forcing tradeoffs you've correctly said no to.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:48:32.212368Z"
        >
            <Origin>019e1c72-26a7-73b7-b61a-8e0f80af63e4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So there we go my original hypothesis was correct. The LLC route is the route although I think Ana believes
                there’s a freelancer route that maybe is like the IT one that you haven’t found yet
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:49:52.539612Z"
        >
            <Origin>019e1c72-26a7-7cec-95ea-ce7beaf426b9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair call — let me actually search for that rather than assume I've covered the space. Ana operating in
                Russian-language sources may have found something I haven't.
            </Paragraph>
            <Action>
                Searched the web for “Georgia freelancer residence permit self-employed individual entrepreneur personal
                income alternative to 50000 GEL turnover”
            </Action>
            <Paragraph>
                Doug, this is a significant catch on Ana's part. Let me dig deeper — I found one source claiming a <Word>
                    <Bold />
                    major April 2026 statutory change
                </Word> that could be what she's referring to, and I need to verify it before I update my position.
            </Paragraph>
            <Action>
                Searched the web for “Georgia April 2026 amendments residence permit 50000 GEL turnover requirement removed
                freelancer”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Ana is right and I owe her credit. There was a significant April 16, 2026 amendment I hadn't surfaced that materially changes this picture.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I missed:
                </Word>
            </Paragraph>
            <Paragraph>
                On April 16, 2026, Parliament passed amendments to the Law on Labour Migration that did two big things:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        The requirement for a 50,000 GEL annual turnover, which for years was the main barrier for small entrepreneurs, has been removed from the legislative text.
                    </Word> Replacement criteria are being codified in a Government Ordinance that hasn't been published
                    yet.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Created explicit carve-outs from the work-permit obligation for:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Service to non-resident clients: An individual may be physically in Georgia but provides services to
                        non-residents (foreign companies). Their activities relate to the business operations of those
                        non-residents conducted entirely outside Georgia.
                    </Line>
                    <Line>
                        If you are an Individual Entrepreneur (IE) with Small Business Status (1% tax) and work only for the
                        international market, the work permit obligation no longer applies to you.
                    </Line>
                    <Line>
                        The term "Partner" (founder) has been removed from the definition of a self-employed foreigner.
                        Consequently, establishing a company, owning shares, and investing capital in Georgia no longer
                        creates a need for a work permit.
                    </Line>
                    <Line>
                        Managers (directors) and members of supervisory boards of Category I, II, and III enterprises are
                        also exempt from this obligation.
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                This is the "freelancer route" Ana was referring to. It's not a new permit category — it's a structural
                change to the existing IE/work-residence pathway that removes both the turnover threshold and the
                work-permit obligation for the specific case of "IE serving foreign clients."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this means for your family if the new framework holds:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Ana running the LLC serving foreign clients: no work permit needed (founder + director carve-outs
                    apply).
                </Line>
                <Line>
                    You as an IE serving foreign clients (e.g., the lab): no work permit needed, no 50K GEL turnover bar to
                    clear for residency.
                </Line>
                <Line>
                    This potentially opens a path where <Word>
                        <Emphasis />
                        you
                    </Word> could be the primary residency-holder via your own IE serving the lab, with Ana and the kids on
                    family reunification with you — exactly the structure I'd been telling you was closed.
                </Line>
            </Paragraph>
            <Paragraph>
                But — and this is critical — the implementing ordinance hasn't been published. Without it, what
                practitioners actually file in 2026 is in flux. Until the Ordinance is published, the existing application
                process remains in effect; documentation requirements and thresholds may be revised at that point. Some
                firms are conservative and still preparing 50K GEL turnover documentation; others are testing whether the
                new framework can be invoked now. A legal.ge article from three days ago (May 9, 2026) still talks about the
                50K threshold as a "structural legal gap" — meaning the field is genuinely contradictory about whether the
                old rule still binds in practice.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The implications for Doug-specifically:
                </Word>
            </Paragraph>
            <Paragraph>Your SSA constraint changes the math less than you might think, because:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The IT residence permit threshold ($25K specifically IT-derived income) is unaffected by the April 16
                    amendments. Still closed to you.
                </Line>
                <Line>
                    But the <Word>
                        <Emphasis />
                        general
                    </Word> work residence permit (which the IT permit is a specialized version of) appears to no longer
                    require 50K GEL turnover. If correct, you could potentially register as an IE serving foreign clients,
                    do the lab gig (small income, under SGA), and qualify for residency on the strength of <Word>
                        <Emphasis />
                        being a foreign-client-serving IE in good standing
                    </Word> — not on the strength of 50K GEL turnover.
                </Line>
                <Line>
                    You'd still need to show personal financial sufficiency (the 5× subsistence income test, ~$5-6K/year),
                    which your SSA easily covers.
                </Line>
            </Paragraph>
            <Paragraph>
                If this reading holds, the Ana-as-primary cascade isn't your only option anymore. You could be your own
                primary, with Ana and kids on family reunification through you — same end state, different routing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd actually recommend right now:
                </Word>
            </Paragraph>
            <Paragraph>This is exactly the kind of moving-target legal change where:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Don't pin the whole plan to my synthesis above.
                    </Word> I'm reading recent secondary sources interpreting a statute whose implementing ordinance doesn't
                    exist yet. ExpatHub will know what they're filing <Word>
                        <Emphasis />
                        this week
                    </Word> and what's actually clearing the Agency.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Apologize to Ana on my behalf
                    </Word> — her intuition that there's a freelancer-specific path I'd missed was correct. The path doesn't
                    have a separate name; it's a carve-out within the existing work-residence framework created by the April
                    16 amendments.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Get a consultation with ExpatHub specifically scoped to "what's actually being filed under the post-April-16 framework right now."
                    </Word> Not "what are my options for residency" — they'll give you the old answer. Specifically: "What
                    are practitioners filing today, in May 2026, that's actually clearing the Agency? Are people invoking
                    the new amendments successfully, or is everyone still building 50K GEL turnover packages while waiting
                    for the ordinance?"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The fork in the road shifts.
                    </Word> If the new framework holds in practice, both Ana-primary and you-primary become viable, and you
                    should pick based on US tax considerations (Ana-primary still wins, NRA-spouse rule, no Form 5471) and
                    family structure (Ana-primary still wins, biological mother sponsoring kids). If the new framework
                    hasn't fully landed yet, the conservative play is still Ana-primary with the 12-month turnover build.
                </Line>
            </Paragraph>
            <Paragraph>
                The bottom line: your original hypothesis was almost right, but the universe of options is larger than I'd
                been describing. Ana was reading the field more accurately than I was. The right next step is an ExpatHub
                consult specifically about the April 16 amendments and the still-pending ordinance, not committing to one
                structure based on my synthesis.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:51:19.462476Z"
        >
            <Origin>019e1c74-b2bb-714d-8b02-eee837a38ecc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So there you go Ana’s LLC could exclusively service outside parties which would so that what prevents her
                from needing to get a work permit? She can create an LLC without a work permit, right
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:51:49.680639Z"
        >
            <Origin>019e1c74-b2bb-7c0a-a480-87db0ca06cd1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes to both — with one small but important distinction between the two.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the LLC formation:
                </Word> She could always create the LLC without a work permit. That's not a new thing from the April 16
                amendments. Registering a company is a registry act, not a labor activity. The Public Service Hall doesn't
                ask if you have work authorization — they ask for passport, charter, address, fee. Foreigners and
                non-residents could always do this. The work-permit framework attaches to <Word>
                    <Emphasis />
                    doing work
                </Word>, not <Word>
                    <Emphasis />
                    owning or forming
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On exclusive foreign-client service triggering the work-permit carve-out:
                </Word> Yes, this is what the April 16 amendments did. An individual may be physically in Georgia but
                provides services to non-residents (foreign companies). Their activities are related to the business
                operations of these non-residents, which are carried out entirely outside Georgia. If Ana's LLC has only
                foreign clients, the work she does for it falls under that carve-out.
            </Paragraph>
            <Paragraph>
                She's actually covered by <Word>
                    <Bold />
                    two independent carve-outs
                </Word>, not just one:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Founder carve-out
                    </Word> — The term "Partner" (founder) has been removed from the definition of a self-employed
                    foreigner. Consequently, establishing a company, owning shares, and investing capital in Georgia no
                    longer creates a need for a work permit. This applies regardless of who the LLC's clients are.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Foreign-client carve-out
                    </Word> — applies to her actual work activity within the LLC, again regardless of her ownership status.
                </Line>
            </Paragraph>
            <Paragraph>Either alone exempts her. Both together is belt-and-suspenders.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one place to be careful:
                </Word>
            </Paragraph>
            <Paragraph>
                The work permit and the residence permit are two different things, governed by two different laws.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Work permit (Law on Labour Migration, April 16 amendments): exempts her cleanly via the carve-outs
                    above.
                </Line>
                <Line>
                    Residence permit (Law on Legal Status of Aliens, Article 15): still required if she wants legal status
                    to <Word>
                        <Emphasis />
                        live
                    </Word> in Georgia beyond visa-free entry. The 50K GEL turnover threshold for this was struck from the
                    statute but the replacement criteria are pending the unpublished ordinance.
                </Line>
            </Paragraph>
            <Paragraph>So the practical state right now is:</Paragraph>
            <Paragraph>
                <List />
                <Line>She forms the LLC: done in 1-2 days, no permits needed.</Line>
                <Line>She operates it serving foreign clients: no work permit needed.</Line>
                <Line>
                    She wants to live in Georgia legally on the basis of running it: still needs to apply for a TRP, and
                    what specific evidence the Agency will accept in lieu of the old 50K GEL turnover certificate is the
                    open question.
                </Line>
            </Paragraph>
            <Paragraph>
                This is what makes the ExpatHub consult time-sensitive — they're the ones who know what's clearing the
                Agency in May 2026 right now while the ordinance is pending.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:53:22.155907Z"
        >
            <Origin>019e1c76-932f-7d16-9bd8-f9f2e97ec4f8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, whatever I’m just saying there’s more options because if they care about serving foreign clients.
                Might they accept a fiverr payment history in leui of anything flowing through the business account? We’re
                not too worried about the 50,000 gel thing, but it would be super cool if we didn’t even need it.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:54:09.311440Z"
        >
            <Origin>019e1c76-932f-789c-a281-afc4d962aad2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    You're directionally right, and the evidence flexibility almost certainly increases. But pure Fiverr-screenshots-without-anything-else probably isn't quite the bypass — there's still a structural piece that's hard to skip.
                </Word>
            </Paragraph>
            <Paragraph>Here's how I'd think about it:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's likely loosening:
                </Word> The amount of turnover required, and the rigidity of the documentation. Pre-April-16, the Revenue
                Service turnover certificate showing ≥50K GEL was the gold standard. Post-amendments, the regulatory
                philosophy is "you're a legitimate foreign-client-serving freelancer," and the evidence menu plausibly
                expands to include things like client contracts, foreign payment-processor histories, and bank inflow
                records. Fiverr payment history fits squarely in the "evidence you serve foreign clients" category.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What probably stays:
                </Word> Some form of <Word>
                    <Emphasis />
                    registered Georgian economic activity
                </Word> — the IE or LLC structure itself. The carve-outs in the April 16 amendments don't say "you don't
                need to be an IE"; they say "as an IE serving foreign clients, you don't need a separate work permit on
                top." The IE is still the legal anchor; the carve-outs reduce what's stacked on top of it.
            </Paragraph>
            <Paragraph>
                So the route that's probably opening up isn't "skip the IE entirely and just show Fiverr receipts," it's
                more like:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Register as IE (one-day Public Service Hall trip)</Line>
                <Line>
                    Run foreign-client income through it — Fiverr → Payoneer/Wise → Credo → declared monthly on rs.ge
                </Line>
                <Line>File rs.ge declarations at 1% even on small amounts</Line>
                <Line>
                    When you apply for the TRP, attach the rs.ge turnover documentation <Word>
                        <Bold />
                        plus
                    </Word> the Fiverr payment history showing foreign clients
                </Line>
            </Paragraph>
            <Paragraph>
                Under the new framework, the amount on the turnover certificate may not need to clear 50K GEL anymore.
                Whether it's $5K, $15K, or anywhere in between, the combination of "registered IE + documented
                foreign-client income + declarations on file" is the package that's likely to clear. Practitioners noted
                this pattern even before the amendments: Proof of Turnover: To renew residency, turnover must be shown, but
                funds come via Payoneer or PayPal. Proper declaration of this income is needed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The "5x subsistence" alternative threshold that always existed:
                </Word>
            </Paragraph>
            <Paragraph>
                One thing worth noting that I haven't emphasized enough: even under the <Word>
                    <Emphasis />
                    old
                </Word> framework, there were two alternative thresholds, not just one. The 50K GEL turnover route was one.
                The other was personal earnings of 5x the Georgian subsistence minimum — roughly 1,300 GEL/month or
                ~$5,800/year. If Ana's IE generates that much (or even just barely above) and the declarations are clean,
                that <Word>
                    <Emphasis />
                    alone
                </Word> might have qualified her even under the old rules, depending on how the Agency interpreted "personal
                earnings." Under the new framework, this lower threshold has probably gotten even more accessible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest summary of where flexibility actually sits:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Pure Fiverr history alone, no Georgian structure: probably not enough.</Line>
                <Line>
                    Fiverr history + IE registration + rs.ge declarations on small amounts: likely sufficient under
                    post-April-16 framework, especially once the ordinance lands with reduced thresholds.
                </Line>
                <Line>
                    Fiverr history + IE + 50K GEL declared turnover: definitely sufficient, but you don't need this much.
                </Line>
            </Paragraph>
            <Paragraph>
                So the cool thing Ana's onto is real — the bar moved from "50K GEL of turnover" to "you're plausibly a
                foreign-client-serving freelancer with declared activity," and the second bar is <Word>
                    <Emphasis />
                    much
                </Word> easier to clear. But it's not "no bar"; there's still a registered-IE-with-declarations skeleton
                you'd be filling in. The question is just how much meat needs to be on it.
            </Paragraph>
            <Paragraph>
                This is exactly the kind of "what are practitioners filing today" question for ExpatHub. The answer will
                probably be "less than 50K GEL is being accepted now, but file with the maximum credible evidence package
                because the Agency is still calibrating."
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:55:08.474002Z"
        >
            <Origin>019e1c78-30c4-7dd6-83cb-14af1dc5632d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is IE</Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:55:18.253893Z"
        >
            <Origin>019e1c78-30c4-767f-a787-f73e8ca13925</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Individual Entrepreneur. Georgia's term for a registered sole proprietor — the legal status a freelancer or
                solo operator takes on to invoice clients and pay taxes properly. It's a person, not a company; you register
                yourself, not a separate entity.
            </Paragraph>
            <Paragraph>Practical features:</Paragraph>
            <Paragraph>
                <List />
                <Line>Registered at any Public Service Hall in ~1 hour, ~50-100 GEL fee</Line>
                <Line>
                    Comes with the option to apply for <Word>
                        <Bold />
                        Small Business Status
                    </Word> = 1% flat tax on gross turnover up to 500K GEL/year
                </Line>
                <Line>No minimum capital, no business plan required</Line>
                <Line>
                    Can have foreign clients, can receive payments via Wise/Payoneer/etc., declarations filed monthly on
                    rs.ge
                </Line>
                <Line>Doesn't require Georgian residency or citizenship to register</Line>
                <Line>
                    Personal liability (no LLC shield) — for service work to clean clients, rarely a real-world constraint
                </Line>
            </Paragraph>
            <Paragraph>For Ana's case, she could either:</Paragraph>
            <Paragraph>
                <List />
                <Line>Register as an IE (simplest, 1% tax, no liability shield)</Line>
                <Line>
                    Form an LLC (more formal, Estonian-model 0% on retained profits, liability shield, slightly more
                    bookkeeping)
                </Line>
            </Paragraph>
            <Paragraph>
                For a single-person foreign-client services business, IE is usually the obvious choice. LLC makes sense if
                she wants liability protection, plans to add employees, or expects to scale meaningfully past 500K GEL/year.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:55:48.899919Z"
        >
            <Origin>019e1c78-d057-7294-8c61-25c36209ea41</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can she have a one person llc and be an IE?</Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:56:11.924988Z"
        >
            <Origin>019e1c78-d057-75b9-b360-63f10b4fb39a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, technically. The two are different legal positions for the same person, and Georgian law allows both simultaneously.
                </Word> They're tracked separately and taxed separately.
            </Paragraph>
            <Paragraph>How it would work:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ana as IE
                    </Word> — natural-person registration. Her personal freelance income flows through this. 1% Small
                    Business Status applies to IE turnover up to 500K GEL/year.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ana owns 100% of LLC
                    </Word> — separate legal entity she controls. LLC's income is taxed under the Estonian model (0%
                    retained, 15% + 5% on distributions).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Income streams stay separate.
                    </Word> IE turnover doesn't count toward the LLC's books and vice versa. The 500K GEL Small Business cap
                    is per-IE, not combined.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    When this is actually useful:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Two genuinely distinct activities — e.g., consulting work she invoices personally (IE) plus a product
                    business that needs liability separation (LLC).
                </Line>
                <Line>
                    Tax optimization — she could route up to 500K GEL through the IE at 1%, then anything above (or
                    higher-risk work) through the LLC.
                </Line>
                <Line>
                    Liability separation — keep the risky business in the LLC, low-risk personal services in the IE.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    When it's overkill:
                </Word>
            </Paragraph>
            <Paragraph>
                For a single freelancer doing foreign-client services, it usually is. You'd be filing monthly rs.ge
                declarations for the IE <Word>
                    <Emphasis />
                    and
                </Word> monthly declarations for the LLC, maintaining two sets of books, two banking arrangements, possibly
                two accountants. The complexity premium isn't worth it unless there's a real reason to keep activities
                separate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing to watch:
                </Word> Small Business Status excludes certain activities — consulting (general), legal, medical,
                architectural, and a handful of others are on the prohibited list for the 1% rate. If Ana's freelance work
                falls into one of the excluded categories, the IE would default to 20% on net income, which often makes the
                LLC route (with potential Virtual Zone status if IT) the better single-vehicle play.
            </Paragraph>
            <Paragraph>
                For your situation specifically, I'd default to <Word>
                    <Bold />
                    one vehicle, not two
                </Word> — either IE (if the work fits Small Business eligibility) or LLC (if it doesn't, or if
                liability/scaling matters). Save the dual structure for when there's a genuine reason to compartmentalize.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:57:29.839947Z"
        >
            <Origin>019e1c7a-5a38-7296-adee-358671e90397</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So for IE point start having her salary go to her Georgian bank account? Then when we set up the LLC, we
                routed there? Ana has like US$4000 sitting in fiverr that she needs to put somewhere. She makes something
                like that every month.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:58:16.988875Z"
        >
            <Origin>019e1c7a-5a38-7e7c-a10f-b0a905e0181e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Sequence is right in concept, but at her income level you might be over-engineering this. Let me push back gently on the LLC piece.
                </Word>
            </Paragraph>
            <Paragraph>Ana earning ~$4K/month is ~$48K/year, ~130K GEL/year. That's:</Paragraph>
            <Paragraph>
                <List />
                <Line>Well above any plausible residency threshold (old or new framework).</Line>
                <Line>Well below the 500K GEL Small Business cap (where 1% breaks down).</Line>
                <Line>In the sweet spot for IE-only structure.</Line>
            </Paragraph>
            <Paragraph>
                For her use case, the IE alone might be the complete solution. The LLC adds bookkeeping, banking,
                declarations, and accountant fees without obvious benefit unless there's a specific reason — liability
                concerns, activity restrictions on Small Business, or planning to scale past 500K GEL. <Word>
                    <Bold />
                    What problem would the LLC solve that the IE doesn't?
                </Word> If you don't have a clear answer, just do IE and stop.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The practical sequence:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Register Ana's IE at any Public Service Hall.
                    </Word> Passport, ~$30, one hour. She walks out with a tax ID.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Same visit or same day: apply for Small Business Status at the Revenue Service.
                    </Word> This is what locks in the 1% rate. Without it, she's at 20%.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Open her own Credo Expat account
                    </Word> in her name (separate from yours). She'll need it for both personal banking and as the
                    destination for IE income. <Word>
                        <Bold />
                        Important: IE income can flow through her personal account
                    </Word> — no separate "business account" required. This is one of the IE structure's conveniences.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bridge Fiverr to Credo.
                    </Word> Fiverr typically pays out via Payoneer or direct bank. Payoneer → Credo is the standard expat
                    route. Wise also works.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Declare monthly on rs.ge.
                    </Word> Even months with low/no income require a "zero" declaration. The 15th of each month for the
                    prior month.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the $4K sitting in Fiverr right now:
                </Word>
            </Paragraph>
            <Paragraph>
                Don't wait for Georgian banking to get it out — Fiverr balances are exposure (account freezes, policy
                changes, payment limits). Get it moving now via whatever route already works for her. If she has any
                existing Payoneer or US bank she can use, withdraw to that first, then transfer to Credo once it's set up.
                Don't let it sit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two things you specifically need to verify before this plan goes operational:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Russian-passport implications for Fiverr/Payoneer.
                    </Word> Given Ana's bilingual profile and the current sanctions environment, US-based fintech services
                    have inconsistent treatment of Russian nationals. Funds come via Payoneer or PayPal — proper declaration
                    of this income is needed — but the prerequisite is that the payment processors will actually serve her.
                    Worth confirming her Fiverr account, Payoneer eligibility, and what payout rails are actually available
                    to her. This is where Russian-language expat forums (Kovcheg or similar) might have better intel than
                    English sources.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Small Business Status activity classification.
                    </Word> Small Business Status 1% rate excludes consulting of any kind, medical, architectural, legal and
                    more. If her Fiverr work is design, content creation, programming, translation, marketing — she's fine.
                    If it's "consulting" in any explicit sense — she'd default to 20% and the IE structure loses most of its
                    appeal. The activity code she picks at registration matters.
                </Line>
            </Paragraph>
            <Paragraph>
                If both check out, the path is: IE registered this week, Fiverr money rerouted to Credo within a month,
                monthly declarations start flowing, and after ~12 months of clean rs.ge records she has the documented
                foreign-client-IE profile that should clear the new (looser) residency requirements when she applies. No LLC
                needed unless something specific changes.
            </Paragraph>
            <Paragraph>
                The LLC discussion was useful for <Word>
                    <Emphasis />
                    your
                </Word> hypothetical lab-work scenario, where US tax considerations (Form 5471, SE tax) made entity choice
                matter. For Ana's actual freelancing? IE is probably just the answer.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T13:59:31.996149Z"
        >
            <Origin>019e1c7c-30fc-73ab-a8b3-88f33b83ecbe</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, but it still needs to get to her George bank account and right now we have an American company and the
                PayPal is attached to that so we would have to restructure how her currency flows because I don’t think
                George cares about the deposits into the US company
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:00:12.898205Z"
        >
            <Origin>019e1c7c-30fd-7cbb-833b-807dbe408ac7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Right — you've correctly identified that the existing routing is hiding her income inside your US LLC, which works for the IRS but does zero for the Georgian story she needs to build.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The practical restructure:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        First, clarify whose Fiverr account it actually is.
                    </Word> If the Fiverr profile is in <Word>
                        <Emphasis />
                        Ana's
                    </Word> name doing the work, with payout merely linked to your US LLC's PayPal because she didn't have
                    her own rails — easy fix, just relink the payout. If the Fiverr profile is in <Word>
                        <Emphasis />
                        your
                    </Word> name and Ana has been doing the work behind the scenes — harder fix, because legally the income
                    has been yours. She'd need her own Fiverr account, her own client relationships, her own ratings to
                    build. The former is a one-day reconfiguration; the latter is a multi-month migration.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Open Ana's own payment processor.
                    </Word> She needs a Payoneer or Wise account in her own name. Then Fiverr → Ana's Payoneer/Wise → Ana's
                    Credo.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Open Ana's Credo Expat account.
                    </Word> Hers, not yours. The Credo Expat Centre on Chavchavadze handles this with passport only; she
                    doesn't need TRP yet.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Update Fiverr payout settings
                    </Word> to her new payment processor. Disconnect from your US LLC PayPal entirely.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        From that point forward
                    </Word>, every dollar she earns lands in Ana's Georgian banking ecosystem, gets declared on rs.ge
                    monthly as IE turnover, and builds the documented profile for residency.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the $4K currently sitting in Fiverr / your US LLC's PayPal:
                </Word>
            </Paragraph>
            <Paragraph>
                I wouldn't try to retroactively reclassify this as Ana's income — too messy, and your US LLC has presumably
                already booked it as US LLC revenue for accounting and tax purposes. Treat it as a sunk transaction (US
                LLC's income, US tax handling) and start the clean separation going forward. If you genuinely want some of
                that $4K to land with Ana, the cleanest way is to have your US LLC pay her as a contractor for services
                rendered — generates a clean US-side expense, creates a transaction record, but creates its own questions
                (US LLC paying a Russian non-employee for work). Probably not worth the complication for $4K. Just let it
                sit on the US side and start fresh.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Russian-nationality payment-rail question that I keep flagging:
                </Word>
            </Paragraph>
            <Paragraph>
                This is the gating issue you actually need to resolve first, because the whole plan above assumes Ana can
                open Payoneer/Wise/PayPal accounts in her own name. Sanctions and KYC restrictions on Russian-passport
                holders vary wildly by service, and they change. Before you architect anything, the empirical first step is:
                have Ana try to open accounts at Payoneer, Wise, and PayPal using her Russian passport and current residence
                (Georgia). See which ones approve her. That determines what rails are actually available.
            </Paragraph>
            <Paragraph>
                If all three reject her — the workaround is usually a Georgian-based fintech (Bank of Georgia or TBC has
                business banking that integrates with international rails) or simply having her Fiverr pay out directly to
                her Georgian bank account if Fiverr supports that for Georgian residents.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One subtle Georgian-side thing to know:
                </Word>
            </Paragraph>
            <Paragraph>
                Once Ana is a registered IE and Georgian tax resident, all her freelance income is Georgian-source for tax
                purposes, regardless of where the clients are or where the payment processor is. This is what makes the 1%
                rate clean — Georgia considers the work performed in Georgia, taxable in Georgia. The previous arrangement
                (routing through your US LLC's PayPal) was technically misallocating her income to a US entity for what was
                substantively her Georgian-performed work. The new structure fixes that, but it also means: from the day she
                registers as IE and is past 183 days, declarations need to be complete and accurate. No more "let the US LLC
                absorb it." She files monthly even on small amounts.
            </Paragraph>
            <Paragraph>The order I'd actually do this in:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        This week:
                    </Word> Have Ana try opening Payoneer/Wise to confirm payment rails. Verify her Fiverr account is in her
                    name or migrate it if not.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Next week:
                    </Word> PSH visit — register Ana as IE + apply for Small Business Status at Revenue Service. Open her
                    Credo Expat account.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Following week:
                    </Word> Reconnect Fiverr to Ana's new payment processor. Start clean separation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Month 1+:
                    </Word> Monthly rs.ge declarations begin. Income builds in her name, in Georgia, on the record.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Around month 10-12:
                    </Word> Apply for TRP with whatever documentation the post-April-16 framework requires by then.
                </Line>
            </Paragraph>
            <Paragraph>
                The whole sequence depends on step 1 working. Don't sink time into the rest until you confirm the payment
                rails are available to her.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:04:10.812458Z"
        >
            <Origin>019e1c80-7922-7685-96c1-aade04581922</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I mean, we could also probably have our US entity give her her distributions to her Georgian account and
                then that would be her George salary right? That’s another IE route I bet but then we have to get the US
                entity to stay alive and since I can’t be paid through it as a US citizen it’s a US entity that only pays a
                foreign citizen and so then we’ll never owe taxes and that is not a defensible US entity in the long run
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:04:48.298161Z"
        >
            <Origin>019e1c80-7922-704c-96db-f869ce31c3ee</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    You've talked yourself into the right answer. That structure works on paper for about three months and then falls apart under any scrutiny.
                </Word>
            </Paragraph>
            <Paragraph>A few precisions on the mechanics:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Distributions to Ana" isn't quite the right framing.
                </Word> Distributions are payments to owners. Ana isn't an owner of your US LLC. So what you'd actually be
                doing is having the US LLC <Word>
                    <Emphasis />
                    pay her as a contractor
                </Word> — which means the LLC issues her 1099 income (or international equivalent), the LLC books the work
                she did as the LLC's revenue, and books the payment to her as an offsetting business expense. Net to the
                LLC: roughly zero. Net to Ana: the contractor income, which she'd then declare as her IE income in Georgia.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this doesn't escape your SGA problem.
                </Word> The work was substantively yours-or-Ana's, performed in Georgia. Routing through a US LLC doesn't
                change who earned it. If the IRS looks at this — and at the FATCA bank flows they can already see — they
                apply assignment-of-income doctrine: the LLC didn't really earn anything, Ana did, and the LLC was a
                conduit. The LLC's "books" don't insulate you. And to the extent any of it gets attributed to you (as 100%
                owner of a disregarded entity), it counts toward your SGA whether you ever touched the cash.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this isn't defensible as a US entity in the long run — exactly your point.
                </Word> A US LLC with:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>No US operations</Line>
                <Line>No US employees</Line>
                <Line>No US customers</Line>
                <Line>One foreign contractor receiving 100% of revenue</Line>
                <Line>Net income near zero, no US tax owed</Line>
                <Line>Owner can't and doesn't take compensation</Line>
            </Paragraph>
            <Paragraph>
                ... is a sham conduit by every standard the IRS uses. It exists only to launder Ana's foreign-earned income
                through a US name and bank account. Under audit, the LLC gets pierced; the income gets attributed to whoever
                the IRS thinks should have reported it (you, Ana, or both); penalties stack.
            </Paragraph>
            <Paragraph>
                The IRS doesn't usually audit small entities like this aggressively, so this <Word>
                    <Emphasis />
                    might
                </Word> run for years undetected. But "might evade detection" is not the same as "defensible."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The clean structure is what we've been converging on all conversation:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Disconnect Fiverr from your US LLC's PayPal. Stop routing Ana's work through your entity.</Line>
                <Line>Ana opens her own payment rails (Payoneer/Wise/whatever survives Russian-passport KYC).</Line>
                <Line>Ana registers as IE in Georgia, opens her own Credo Expat account.</Line>
                <Line>Income flows: Fiverr → Ana's processor → Ana's Credo → declared monthly on rs.ge at 1%.</Line>
                <Line>
                    Your US LLC: either wind it down (since you can't usefully operate through it under your SSA
                    constraints), or keep it for some genuinely separate activity that's defensible on its own terms.
                </Line>
            </Paragraph>
            <Paragraph>
                The reason this is the right answer isn't that the routing structure is <Word>
                    <Emphasis />
                    illegal
                </Word> — it's that it carries audit risk for marginal benefit, complicates your US filings, doesn't
                actually solve your SGA problem, and adds entities you'd then have to maintain (annual reports, state fees,
                registered agent, bookkeeping). The income belongs to Ana; let it land with Ana.
            </Paragraph>
            <Paragraph>
                The US LLC question is worth thinking through separately. What was its original purpose? If it was meant to
                house <Word>
                    <Emphasis />
                    your
                </Word> consulting work and that's no longer viable under your SGA cap, the LLC has lost its reason for
                existing. Closing it is cleaner than keeping a zombie entity around as a payment conduit. If there was
                another reason — investment vehicle for your own assets, a specific contract, an IP holding — that purpose
                might still justify keeping it alive.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:05:41.035220Z"
        >
            <Origin>019e1c81-d79a-7f44-9f00-bbe8b1979e83</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, the LLC that we own has both of us as owners and she has an 80 K distribution cap or rather a 6500 K
                distribution advantage per month where I don’t make money until it’s more than that so it’s not a
                disregarded entity
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:06:48.187489Z"
        >
            <Origin>019e1c81-d79a-7a2b-8e60-41f361a2a874</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Important correction on my part — you're right, multi-member LLC is taxed as a partnership by default, not a disregarded entity. That changes the analysis meaningfully.
                </Word>
            </Paragraph>
            <Paragraph>Let me update what I said with the actual structure in mind:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you've actually got is a partnership.
                </Word> Files Form 1065, each partner gets a K-1, partners report their share on personal returns. Ana's
                preferred distribution ($6,500/month before you receive anything) is a partnership-allocation arrangement —
                entirely legitimate as a partnership agreement device. It's how you've engineered the SGA management: keep
                your K-1 share below the threshold, let her absorb the income.
            </Paragraph>
            <Paragraph>
                This is structurally defensible in a way the "sham conduit" version I was warning against isn't, because:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>It's a real entity with a partnership agreement and a defined allocation method</Line>
                <Line>Both partners receive K-1s reflecting their actual shares</Line>
                <Line>
                    The preference structure can be justified by capital contributions, labor contributions, or risk
                    allocation — standard partnership-agreement material
                </Line>
                <Line>The IRS recognizes preferred-return arrangements as valid</Line>
            </Paragraph>
            <Paragraph>
                What still matters: the partnership agreement should be a real document, the K-1s should be issued, and the
                activity being reported through the LLC needs to be genuinely the LLC's business activity rather than
                personal freelance from one partner that happens to flow through a partnership bank account. The form is
                fine; the substance still has to match.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now the Georgian-residency question becomes more interesting.
                </Word>
            </Paragraph>
            <Paragraph>
                The thing I'd been treating as "she should route Fiverr through a Georgian IE" doesn't quite map onto your
                actual situation, because the income isn't really hers personally right now — it's the partnership's, and
                her piece comes to her as a K-1 share.
            </Paragraph>
            <Paragraph>Two different goals are now in tension:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        US SGA management
                    </Word> — the partnership structure protects this. Disrupting it (winding down the LLC, routing income
                    differently) reintroduces the SGA risk.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Georgian residency basis
                    </Word> — requires Ana to have <Word>
                        <Emphasis />
                        Georgian-source
                    </Word> business activity declared in her IE. Foreign partnership distributions arriving in her Credo
                    aren't Georgian IE turnover; they're foreign-source partnership income to her personally.
                </Line>
            </Paragraph>
            <Paragraph>So the question becomes: can you have both?</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option A: Keep the partnership running as-is, build Ana's Georgian IE in parallel.
                </Word>
            </Paragraph>
            <Paragraph>
                Some of Ana's work flows through the US partnership (current setup, SGA management intact). New work, or a
                portion of existing work, gets routed to her separately — her own Fiverr account, her own payment rails, her
                own IE registration in Georgia. The IE-side income is small but generates the rs.ge declarations and the
                Georgian-source paper trail she needs for residency. Once she clears whatever the new threshold becomes
                (probably much less than 50K GEL under the post-April-16 framework), she applies for TRP.
            </Paragraph>
            <Paragraph>
                This is more complexity but might thread the needle: SGA protection stays, Georgian basis gets built.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option B: Treat the partnership income as the Georgian basis directly.
                </Word>
            </Paragraph>
            <Paragraph>
                A creative angle worth asking ExpatHub about: if Ana receives K-1 distributions to her Credo account and
                declares those as her income for residency-application purposes (5x subsistence threshold, financial
                sufficiency), does Georgia care that the income's legal source is a US partnership rather than a Georgian
                IE? Under the post-April-16 framework with its "you're a legitimate foreign-client-serving freelancer"
                philosophy, the answer might be "yes, that counts" — especially if the work being done is hers, in Georgia,
                for foreign clients, just happening to be booked through a US entity.
            </Paragraph>
            <Paragraph>
                This is the harder question and I genuinely don't know the answer. It depends on what the Agency is actually
                accepting in May 2026.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option C: Migrate over time.
                </Word>
            </Paragraph>
            <Paragraph>
                The US LLC made sense when there wasn't a Georgian alternative. If the post-April-16 framework lets Ana
                operate as a Georgian IE with much less stringent thresholds, the long-term answer might be to gradually
                migrate clients to her Georgian IE while the US LLC winds down — preserving SGA protection during the
                transition and ending up at a cleaner long-run structure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest summary:
                </Word>
            </Paragraph>
            <Paragraph>
                I was working from a wrong assumption about the entity, and apologized. With the partnership reality
                understood, your current structure is more defensible than the "shell LLC" I was warning against — it's
                doing real SGA-management work that has US-side legitimacy. The trade-off you're navigating now isn't "is
                the US LLC defensible" but "how do I keep the US-side SGA protection while building the Georgian-side
                residency basis."
            </Paragraph>
            <Paragraph>
                That's a real two-objectives problem, not a one-answer question. ExpatHub plus a US-side tax person who
                understands SSDI rules need to be in the same conversation, because the optimization isn't independent.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:07:41.919607Z"
        >
            <Origin>019e1c83-b15e-7fe0-bcd0-d328014f07e2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You distinctly said that i.e. residency can come through foreign clients, didn’t you?</Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:08:12.848332Z"
        >
            <Origin>019e1c83-b15e-78c6-8dd5-4b3a383292e0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to push back — I owe you a cleaner distinction. Two things got tangled in my last response:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I did say, and stand by:
                </Word> Under the post-April-16 framework, <Word>
                    <Emphasis />
                    foreign-client services through a Georgian IE
                </Word> is a recognized residency basis. The carve-outs explicitly cover this configuration. Foreign clients
                are not a problem — they're actually the easier case.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I should have separated more clearly:
                </Word> "Foreign clients" and "Georgian IE registration" are two different requirements that both have to be
                met. The April 16 amendments loosened the <Word>
                    <Emphasis />
                    income threshold
                </Word> and <Word>
                    <Emphasis />
                    work-permit obligation
                </Word>, but they didn't eliminate the <Word>
                    <Emphasis />
                    structural requirement
                </Word> that there be a registered Georgian economic entity (IE or LLC) doing declared activity through
                rs.ge.
            </Paragraph>
            <Paragraph>
                So the carve-out logic is: "registered Georgian IE serving foreign clients = exempt from work permit +
                lower/removed turnover threshold for residency." The carve-out applies to a structure; it doesn't replace
                the structure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this means for your specific situation:
                </Word>
            </Paragraph>
            <Paragraph>
                If Ana's Fiverr work runs through the US partnership and the income reaches her as a K-1 distribution, she
                has:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Foreign-client work ✓</Line>
                <Line>US-partnership-routed income ✗ (not Georgian-registered activity)</Line>
                <Line>No rs.ge declarations ✗</Line>
                <Line>No Georgian-source business activity to point to ✗</Line>
            </Paragraph>
            <Paragraph>
                She'd be a foreigner receiving foreign passive income to her Georgian bank account, which doesn't fit the IE
                residency basis. Georgia has no equivalent of "I do work somewhere else and money lands here, give me
                residency" — there has to be Georgian-side declared activity.
            </Paragraph>
            <Paragraph>
                If Ana registers as a Georgian IE and routes some or all of her work through that IE instead of the US
                partnership, she has:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Foreign-client work ✓</Line>
                <Line>Georgian-registered IE ✓</Line>
                <Line>rs.ge declarations ✓</Line>
                <Line>Documented foreign-client-serving freelance activity ✓</Line>
            </Paragraph>
            <Paragraph>
                That's the structure that hits the post-April-16 carve-outs and gets her to TRP eligibility.
            </Paragraph>
            <Paragraph>
                The income doesn't have to be huge. Under the new framework (pending ordinance), even modest declared IE
                turnover plus the foreign-client documentation likely satisfies the requirements. But it has to <Word>
                    <Emphasis />
                    be
                </Word> Georgian IE turnover, not US partnership distribution.
            </Paragraph>
            <Paragraph>
                So both things are true: foreign clients are fine; IE registration in Georgia is still the load-bearing
                piece. My previous response was right about needing the IE structure but should have been more explicit
                about why — the carve-outs apply to a specific structural configuration, not to any foreign-client income
                arriving in any account.
            </Paragraph>
        </Message>
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
