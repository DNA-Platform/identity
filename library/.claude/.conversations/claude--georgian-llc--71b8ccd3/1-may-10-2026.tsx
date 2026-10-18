import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 May 2026](2026-05-10)</Date>
        </Dated>
        <Title>[[ 10 May 2026 ]]</Title>
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
    </Chapter>
);
