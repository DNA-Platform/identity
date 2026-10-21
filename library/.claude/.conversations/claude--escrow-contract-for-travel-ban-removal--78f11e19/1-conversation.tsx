import { Bold, Chapter, Emphasis, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-20T08:43:23.064601Z"
        >
            <Origin>01a01e57-ff6f-7e48-8b41-97ebb090db2f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Seemingly the last remaining problem with maxim is that he has a travel ban and Dima needs to renew his
                passport in a bit over a year. It’s very hard to compel a man to remove a travel ban in a way where you can
                trust it. The best thing I can think of is some sort of escrow contract, where we put money which he
                desperately needs behind an escrow agreement that does something like start when we can verify that he’s
                left the travel band and then if he keeps, it lifted for a certain number of months, then he gets money and
                if at any time it’s put back in the place he forfeited that money and it comes back to us. Is this a sort of
                arrangement that could be made with some lawyer in Russia? Is this the kind of contract that is made?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:43:51.003958Z"
        >
            <Origin>01a01e57-ff6f-71bd-93a1-9ab94f60d742</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Short answer: the escrow mechanism exists in Russian law, but the specific condition you want to attach to
                it is the weak point.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The mechanism.
                </Word> Russia has had a proper escrow framework since 2018 — договор условного депонирования (эскроу), Art.
                926.1–926.8 Civil Code — where a notary, bank, or other agent holds money and releases it on a verifiable
                condition. Notaries do these routinely for real estate; bank эскроу-счета are standard in construction.
                Conditions dependent on a party's own actions are permitted under Art. 327.1. So "release after X months if
                condition Y holds, return to depositor if Y fails" is a structure a Moscow notary or lawyer knows how to
                draft.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The problem.
                </Word> A contract whose explicit subject is paying a parent to not exercise a parental right (the ban under
                Art. 21 of 114-FZ is his statutory right) is very likely void under Art. 168/169 Civil Code and the Family
                Code principle that parental rights can't be traded. A notary would likely refuse to certify it in that
                form, and if Maxim took the money then re-imposed the ban, you'd be asking a Russian court to enforce a
                contract it would probably strike down.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How this is actually done.
                </Word> The money gets attached to something that <Word>
                    <Emphasis />
                    is
                </Word> contractable — typically a court-approved мировое соглашение or notarized settlement covering
                property division, alimony arrears, and порядок общения (Art. 66 SK), with his withdrawal of the ban as one
                recited step. The property claim you're already weighing is the natural vehicle. Even so, two limits remain:
                (1) nothing prevents him from filing a new ban the next day, and (2) forfeiture returns your money but
                doesn't restore the passport window.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Verification is feasible.
                </Word> МВД notifies the other parent when a ban is filed, and Ana can confirm status by request — so the
                trigger condition can be checked.
            </Paragraph>
            <Paragraph>
                The question for Гурина is narrow: can an escrow release tied to a recited ban-withdrawal survive inside a
                мировое соглашение, and would she draft it.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:45:49.411787Z"
        >
            <Origin>01a01e5a-3913-7a54-bf04-f9820465e465</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                First of all, I don’t think we care about this being valid in the governmental sense. Don’t we just care
                that the law firm that we work with will honor the escrow in the sense that they won’t give money back to us
                if he is compliant and won’t give it to him if he is not? Also, we’re not saying not to exercise it because
                he just forfeit his money he doesn’t go to jail or anything. But we are asking him to remove it for some
                value. Check precedent for this but check in Russian. We obviously don’t want it to be illegal, but we also
                don’t need it to be an official notary. I don’t think as long as both parties can trust the intermediary.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:46:10.659061Z"
        >
            <Origin>01a01e5a-3913-7b25-8c55-6e298d6c9b5e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “соглашение снятие запрета на выезд ребенка за вознаграждение судебная практика”
            </Action>
            <Action>
                Searched the web for “эскроу адвокат депонирование денег условие исполнение обязательства семейный спор
                практика”
            </Action>
            <Paragraph>Yes — your reframe holds, and Russian law supports it without a notary.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Non-notarial escrow is explicitly allowed.
                </Word> Under Chapter 47.1 Civil Code (Art. 926.1–926.8, since June 2018), law firms may act as escrow
                agents on par with banks and notaries; the agent, as an independent third party, verifies that the
                conditions are met and then transfers the money to the beneficiary. Moscow advocates advertise this as a
                service — taking property on deposit from the депонент and performing as escrow agent. Two features help
                you: depositor and beneficiary can only terminate the escrow jointly (Art. 926.8), so Maxim can't unwind it
                alone, and if the release conditions never arise, the property returns to the depositor — that's your
                forfeiture built into the default rule.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Precedent for this exact condition.
                </Word> I found no published case of money escrowed against ban withdrawal. What is documented is the
                adjacent standard move: when parties agree mid-litigation, they sign a мировое соглашение under which the
                respondent undertakes to withdraw the ban administratively by applying to migration authorities; it takes
                effect immediately under Art. 153.10(11) CPC. So "he undertakes to withdraw it" is an accepted contractual
                term. Attaching money to that undertaking is the novel part.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this means for your structure:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Release condition = МВД confirmation the ban is withdrawn, then N months without a new filing.
                    Verifiable, since the other parent is notified on filing.
                </Line>
                <Line>
                    The legal-validity risk I raised earlier now matters only if one of you sues to unwind — which is
                    precisely what escrow removes from the table. Maxim's exposure is to the agent's judgment, not to a
                    court.
                </Line>
                <Line>
                    Real residual risks: (1) Maxim's own lawyer may balk at signing anything that reads as payment for a
                    parental right, so the recital should frame it as settlement of arrears/property with ban withdrawal as
                    a step; (2) the agent must be someone Maxim will accept — your firm is adverse to him, so he may demand
                    a neutral firm or a bank escrow account.
                </Line>
            </Paragraph>
            <Paragraph>
                The question for Гурина: does the firm act as escrow agent, and would she draft the release condition as I
                described.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:48:25.598921Z"
        >
            <Origin>01a01e5c-9c05-7f70-a475-24af04537f5f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is it novel or just unpublished? This isn’t the kind of agreement you want to advertise</Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:48:32.623164Z"
        >
            <Origin>01a01e5c-9c05-7193-8e44-a817f72e06f8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Almost certainly unpublished rather than novel. Three reasons:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Escrow disputes only reach published practice when the agent or a party breaches. A deal where a law
                    firm holds money and releases it on a verified administrative act has no reason to surface — and Russian
                    family settlements are closed hearings, so even court-approved versions aren't indexed.
                </Line>
                <Line>
                    Paying to resolve a ban is the open secret of this niche. Family lawyers' forums discuss отступные for
                    "согласие на выезд" routinely; it's usually dressed as погашение задолженности, раздел имущества, or a
                    lump-sum alimony capitalization under Art. 104 SK. The cash-for-withdrawal logic is the same; only the
                    label differs.
                </Line>
                <Line>
                    The 2018 escrow chapter was written specifically so that private intermediaries could hold money against
                    non-standard conditions. A family-law firm that handles divorces and hasn't done a conditional deposit
                    of some kind would be unusual.
                </Line>
            </Paragraph>
            <Paragraph>
                So the right question to Гурина isn't "is this possible" but "have you or your colleagues done this, and how
                do you paper it so his side signs." Her answer will tell you whether it's routine in her circle or merely
                permissible.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:50:19.641037Z"
        >
            <Origin>01a01e5e-5c58-77e3-8623-f07c15d95288</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can this be done in the context of splitting marital assets?</Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:50:30.860507Z"
        >
            <Origin>01a01e5e-5c58-79f2-b92d-69b66c9a5034</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, and it's the cleanest wrapper available.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mechanics.
                </Word> Property division between ex-spouses can be done by notarized соглашение о разделе имущества (Art.
                38 SK) or by мировое соглашение in a division suit. Either can allocate unequal shares or a компенсация
                payment from one spouse to the other. A compensation owed <Word>
                    <Emphasis />
                    by Ana to Maxim
                </Word> is a perfectly ordinary term — she keeps an asset, he gets money. Nobody questions why.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the escrow fits.
                </Word> The compensation is paid through a договор эскроу: deposited on signing, released to Maxim when the
                agreed conditions occur. The division agreement itself can say only "компенсация уплачивается в порядке,
                предусмотренном договором эскроу от такого-то числа." The ban conditions live in the escrow contract, which
                is private between the parties and the agent. A мировое соглашение requires a judge to approve the division
                terms, but the escrow contract isn't before the court.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Advantages over a bare escrow:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Gives Maxim a legitimate reason to receive money, which his side needs on paper.</Line>
                <Line>
                    Solves your "how does he justify signing" problem — he's settling a property claim, not selling a
                    parental right.
                </Line>
                <Line>
                    If he already fears a property suit, filing one creates the litigation in which a мировое соглашение
                    naturally arises. You're already considering the claim as leverage; this gives the leverage a landing
                    place.
                </Line>
                <Line>
                    A court-approved мировое соглашение with ban withdrawal as an undertaking gets you an исполнительный
                    лист if he refuses to file the withdrawal — escrow handles the money side, the writ handles his act.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Constraints to confirm with Гурина:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Whether there's still divisible marital property (or a claim to it) substantial enough for a
                    compensation of the size you intend; a payment wildly out of proportion to the property invites a
                    притворная сделка argument — though again, only if someone sues.
                </Line>
                <Line>
                    Limitation period for division is three years from when Ana learned her rights were violated, not from
                    the divorce; check the clock.
                </Line>
                <Line>Whether the judge approving the settlement will ask about the payment schedule.</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:52:01.016551Z"
        >
            <Origin>01a01e5f-e78d-708d-a8b1-a4b1b6cdf45c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>мировое соглашение - what is this again?</Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:52:05.777311Z"
        >
            <Origin>01a01e5f-e78d-7383-84dc-b28f9c79e5f1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                A court-approved settlement. When there's a lawsuit pending, the parties can agree terms and submit them to
                the judge, who approves them by ruling (определение) and closes the case (Art. 153.8–153.11 CPC).
            </Paragraph>
            <Paragraph>Two properties make it useful here:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    It has the force of a judgment. If Maxim doesn't do what he undertook, Ana gets an исполнительный лист
                    from the same court without a new suit — bailiffs enforce it.
                </Line>
                <Line>It takes effect immediately on approval, no appeal waiting period.</Line>
            </Paragraph>
            <Paragraph>
                The judge checks only that the terms don't violate law or third-party rights; she doesn't renegotiate them.
                Family settlements are heard in closed session, so the terms aren't published.
            </Paragraph>
            <Paragraph>
                Contrast with a notarized соглашение: that's a private contract — faster, no lawsuit required, but breach
                means a new suit to enforce. Мировое соглашение requires an existing case, which is why the property
                division claim matters: it creates the case.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:53:14.380670Z"
        >
            <Origin>01a01e61-0680-7bd4-9e3d-a71d8a759b35</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But where does the escrow lawyer come in? Are they a third party to the suit? It feels like they shouldn’t
                represent anyone
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:53:20.033894Z"
        >
            <Origin>01a01e61-0680-7008-b698-263ec5b8d259</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Correct on both counts. The escrow agent is not a party to the suit and should not be counsel to either
                side.
            </Paragraph>
            <Paragraph>The structure is two documents:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Мировое соглашение
                    </Word> (in court, two parties: Ana and Maxim). Says: Ana keeps X, Maxim receives compensation of Y
                    rubles, payable in the manner set out in the escrow contract of such-and-such date; Maxim undertakes to
                    withdraw the ban by such-and-such date.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Договор эскроу
                    </Word> (outside court, three parties: Ana as депонент, Maxim as бенефициар, agent). Says: money
                    deposited; released to Maxim on conditions A (МВД confirms withdrawal) and B (no new ban for N months);
                    otherwise returned to Ana.
                </Line>
            </Paragraph>
            <Paragraph>
                The agent's only job is holding money and checking the conditions. Under Art. 926.1 the agent must be
                independent of both parties; an advocate has an ethical bar against acting as agent for a client's deal
                anyway. So it's a separate firm, a bank escrow account, or a notary depot — chosen jointly, since Maxim has
                to trust it as much as you do.
            </Paragraph>
            <Paragraph>
                Your lawyers' role is to draft both documents and negotiate the terms. The agent receives a fee and a copy
                of the release conditions, nothing more.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:54:48.864201Z"
        >
            <Origin>01a01e62-7687-7dd5-a049-2c7374628a67</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What are some reputable escrow firms in moscow</Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:55:05.037167Z"
        >
            <Origin>01a01e62-7687-7c29-a187-aa40de0d8837</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “эскроу-агент услуги Москва юридическая фирма условное депонирование”</Action>
            <Paragraph>
                Short version: there isn't a standalone "escrow firm" market for private individuals in Moscow. Chapter 47.1
                escrow agents that actually advertise are securities registrars like ВТБ Регистратор and Reestr, built for
                share deals. For a cash deposit between two people, the realistic agents are:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Bank эскроу-счёт
                    </Word> (Sber, ВТБ, Альфа, Т-Банк). Cheapest and most neutral; Maxim can't object to Sber. Downside:
                    banks run them mostly for real estate, with document-based release conditions, and a branch may refuse a
                    bespoke "МВД confirmation plus N months" trigger. Worth asking anyway.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Депозит нотариуса
                    </Word> (Art. 87 Основ о нотариате). A notary holds funds and releases on contract terms;
                    well-understood, state-supervised, acceptable to both sides. This is probably the default choice for a
                    one-off private deal.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A neutral law firm
                    </Word> the two sides pick jointly. Any reputable Moscow firm will do it for a fee, but their names are
                    not what matters — Maxim's acceptance is. Often the pragmatic pick is a firm his lawyer trusts that has
                    never acted for him.
                </Line>
            </Paragraph>
            <Paragraph>
                One useful detail: an escrow contract must be notarized except where non-cash money or uncertificated
                securities are deposited, so a bank-transfer deposit needs no notary regardless of agent, and the term is
                capped at five years.
            </Paragraph>
            <Paragraph>
                Practical notes: Ana should be the депонент — a US citizen's money in a Russian escrow invites sanctions
                questions at the bank. And ask Гурина which of these three she has actually used; her answer picks the agent
                faster than any ranking I could give.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:56:00.379995Z"
        >
            <Origin>01a01e63-8f3d-764d-ae59-81b6843b685b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We just said that banks and notaries are not the right one for this so why are you recommending them? Do
                some research for me and find me a firm list
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:56:23.175073Z"
        >
            <Origin>01a01e63-8f3d-7866-bd71-157e9c4575dd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “адвокат эскроу-агент услуги физическим лицам Москва договор эскроу”</Action>
            <Action>
                Searched the web for “юридическая фирма выступает эскроу-агентом услуга условное депонирование денежных
                средств стоимость”
            </Action>
            <Action>Searched the web for “"эскроу-агент" адвокатское бюро Москва принимаем на депонирование”</Action>
            <Paragraph>
                On the bank/notary point: I raised them as <Word>
                    <Emphasis />
                    agents
                </Word> because they're the only ones with a published retail product; I wasn't walking back the law-firm
                route. But you're right that a neutral firm is the fit, so here is what the Russian-language search turns
                up. The honest finding: the market of firms that openly advertise acting as escrow agent for cash between
                private parties is thin. Most escrow-agent advertising is securities registrars (ВТБ Регистратор, Реестр,
                Паритет) — wrong tool. Firms with a dedicated agent practice:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Moscow — advertised escrow-agent practice
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Пепеляев Групп
                    </Word> (pgplaw.ru). Has a standalone "Услуги эскроу-агента" practice page; positions itself as an
                    independent arbiter holding the deferred payment and releasing it on agreed conditions. Top-tier,
                    expensive, and unimpeachably neutral — the kind of name Maxim's lawyer can't object to.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Клифф
                    </Word> (cliff.ru). Writes on escrow structuring and offers advisory; ask directly whether they take the
                    agent role.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Бартолиус
                    </Word> (bartolius.ru). Advocate bureau that has commented publicly on the FPA ethics guidance for
                    advocate-agents — signals familiarity, not necessarily a service line.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Regional but fully able to act (the agent needn't be in Moscow)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Кацайлиди и партнёры
                    </Word>, Yekaterinburg (katsaylidi.ru). Explicitly offers escrow-agent services, taking property on
                    deposit and performing as agent. The only firm I found that advertises this as a retail service for
                    individuals.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        GRATA International
                    </Word>, Rostov office — publishes on the mechanism; the network has Moscow presence.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the list is short.
                </Word> Advocates acting as agent fall under a 2019 FPA ethics clarification: they must obtain written
                consent from both депонент and бенефициар to act despite the potential conflict, and to use information from
                both. That's routine paperwork but it means many family-law advocates simply haven't built the service. The
                firms that have tend to be corporate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical path.
                </Word> Ask Гурина which neutral firm her circle uses for conditional deposits — almost every Moscow firm
                has a quiet answer, and Maxim's counsel will likely propose one too. Pepeliaev is the safe "nobody can
                argue" option if you want to lead with a name.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:58:50.927987Z"
        >
            <Origin>01a01e66-27ae-7d79-be48-12e5ebfd8b75</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Maxim has no lawyer. Expand your list but keep the recommendations you have on there and for each one try to
                approximate how much we would pay for this in addition to the money that we would pay Maxim directly. It
                doesn’t feel like they should be very hard. If we did the checking, isn’t this just the drafting of a
                contract holding of money and then distributing it to either the beneficiary or back to us? Yes I suppose
                they do need to verify what we’re saying. So the verification of travel ban status
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T08:59:17.648555Z"
        >
            <Origin>01a01e66-27ae-717b-83d3-49267b4af76c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “эскроу-агент вознаграждение процент от суммы юридическая фирма тариф”</Action>
            <Paragraph>
                No price lists are published for firm-as-agent; what follows is estimated from Moscow legal rates (mid-tier
                advocates ~10–25k ₽/hour, top-tier 30–80k ₽/hour) against the work actually involved. Your instinct is
                right: the work is small.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the agent actually does.
                </Word> Under Art. 926.3 the agent checks the release conditions only by external signs — e.g. by reviewing
                an extract from the relevant register. So the escrow contract names a document (МВД written confirmation
                that no restriction is on file for Dima, obtained by Ana on request; plus the absence of a new МВД
                notification over N months), and the agent compares paper to contract. No investigation. Drafting, holding,
                one or two document checks, one payout. Maybe 8–15 lawyer-hours total over the life of the deal. Fee is by
                default owed jointly by депонент and бенефициар — you'll pay it, but write it that way so Maxim co-signs the
                engagement.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Estimates (₽, total: drafting + agent fee, excluding the mirovoe soglashenie work your own lawyers do)
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Firm</Word>
                    <Word>Type</Word>
                    <Word>Est. cost</Word>
                    <Word>Notes</Word>
                </Line>
                <Line>
                    <Word>Пепеляев Групп (Moscow)</Word>
                    <Word>Top-tier, dedicated agent practice</Word>
                    <Word>400–900k</Word>
                    <Word>Priced for M&amp;A; overkill unless you want a name nobody can question</Word>
                </Line>
                <Line>
                    <Word>Клифф (Moscow)</Word>
                    <Word>Mid/upper corporate</Word>
                    <Word>200–450k</Word>
                    <Word>Publishes on escrow; confirm they take the agent role</Word>
                </Line>
                <Line>
                    <Word>Lidings (Moscow)</Word>
                    <Word>Mid/upper, has written on escrow</Word>
                    <Word>200–400k</Word>
                    <Word>Same caveat</Word>
                </Line>
                <Line>
                    <Word>Korpus Prava (Moscow)</Word>
                    <Word>
                        Private-client / wealth focus; publishes on agent duties incl. receipts and document preparation
                    </Word>
                    <Word>150–350k</Word>
                    <Word>Best profile fit among Moscow names — used to individuals</Word>
                </Line>
                <Line>
                    <Word>BRACE (Moscow)</Word>
                    <Word>Mid-size business firm, writes on escrow practice</Word>
                    <Word>120–300k</Word>
                    <Word></Word>
                </Line>
                <Line>
                    <Word>Бартолиус (Moscow)</Word>
                    <Word>Advocate bureau, commented on advocate-agent ethics</Word>
                    <Word>150–350k</Word>
                    <Word></Word>
                </Line>
                <Line>
                    <Word>Кацайлиди и партнёры (Yekaterinburg)</Word>
                    <Word>Only firm found advertising retail agent service</Word>
                    <Word>60–150k</Word>
                    <Word>Regional pricing; remote deal fine since money moves by transfer</Word>
                </Line>
                <Line>
                    <Word>Any solo Moscow advocate with FPA-compliant paperwork</Word>
                    <Word>Boutique</Word>
                    <Word>50–120k</Word>
                    <Word>Cheapest real option; Гурина's circle will know one</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Two cost levers: (1) specify the verification documents precisely in the contract so the agent does no
                judgment work; (2) ask for a flat fee rather than hourly, which firms accept readily for a defined-scope
                escrow.
            </Paragraph>
            <Paragraph>
                Given Maxim has no lawyer, neutrality is about optics for him, not a negotiation. A mid-size Moscow firm
                he's never heard of, with a clean website, will satisfy that. The top-tier names buy nothing extra here.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:01:20.024872Z"
        >
            <Origin>01a01e68-6f60-7249-b09c-e2248acce8ba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No!! Maxim can’t know about Dima. Ostensibly this is so the children can go on vacation. We’d probably pay
                him quarterly starting on the 3rd month and ending at a year because it can take a long time
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:01:28.813763Z"
        >
            <Origin>01a01e68-6f60-7a3f-8e0d-ad496d919dfd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Understood — the purpose never appears anywhere. The escrow contract states only the condition, and the
                condition is symmetric across both children: "no ограничение права на выезд on file for either child with
                МВД." That reads as exactly what a mother wanting to take her kids abroad would ask for. Nothing about
                passports, renewal dates, or Dima specifically. Drafting instruction to your lawyers: purpose clause is the
                property-division compensation; release conditions are mechanical; no recitals.
            </Paragraph>
            <Paragraph>The staged structure fits the escrow framework cleanly:</Paragraph>
            <Paragraph>
                <List />
                <Line>Deposit full sum on signing.</Line>
                <Line>
                    Tranche 1 at month 3, then months 6, 9, 12 — each released only if, on that date, the agent holds a
                    fresh МВД confirmation of no restriction on either child and no МВД notification of a new filing has
                    been received since the prior check.
                </Line>
                <Line>
                    Any breach: the current and all remaining tranches revert to Ana; tranches already paid stay with him.
                </Line>
            </Paragraph>
            <Paragraph>
                Two adjustments worth making: weight the tranches toward the end (say 15/20/25/40%) so the largest piece is
                what he'd lose by re-filing late; and request the МВД confirmation yourselves 1–2 weeks before each tranche
                date so the agent's check is a date-stamped document, not a phone call.
            </Paragraph>
            <Paragraph>
                Cost estimates hold — four document checks instead of one adds an hour or two, not a tier.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:04:16.545753Z"
        >
            <Origin>01a01e6b-1d03-7586-99cc-375de8f5f47e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So review cost estimates with me again. If hourly what does the hourly commitment look like for this task
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:04:24.555061Z"
        >
            <Origin>01a01e6b-1d03-7e9d-a805-5fbccb38b594</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Hourly breakdown for the agent firm only (your own lawyers' mirovoe work excluded):</Paragraph>
            <Paragraph>
                <List />
                <Line>Intake, conflict check, FPA consent forms from both parties: 1–2 h</Line>
                <Line>
                    Draft escrow contract (they'll adapt a template; the bespoke part is the release conditions and tranche
                    table): 3–5 h
                </Line>
                <Line>Negotiate/explain terms to Maxim, who has no lawyer and will ask questions: 1–3 h</Line>
                <Line>Signing, receipt of deposit, client-account paperwork: 1 h</Line>
                <Line>
                    Four quarterly checks, each = receive МВД confirmation, compare to contract, authorize transfer, send
                    notice to both sides: 0.5–1 h × 4 = 2–4 h
                </Line>
                <Line>Close-out / final reversion if triggered: 0.5–1 h</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Total: ~9–16 hours.
                </Word> Call it 12.
            </Paragraph>
            <Paragraph>Applied to Moscow rates:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Tier</Word>
                    <Word>Rate ₽/h</Word>
                    <Word>12 h</Word>
                </Line>
                <Line>
                    <Word>Solo advocate / boutique</Word>
                    <Word>5–10k</Word>
                    <Word>60–120k</Word>
                </Line>
                <Line>
                    <Word>Mid-size (Korpus Prava, BRACE, Бартолиус)</Word>
                    <Word>12–25k</Word>
                    <Word>150–300k</Word>
                </Line>
                <Line>
                    <Word>Upper-mid (Клифф, Lidings)</Word>
                    <Word>20–35k</Word>
                    <Word>240–420k</Word>
                </Line>
                <Line>
                    <Word>Pepeliaev</Word>
                    <Word>35–70k</Word>
                    <Word>420–840k</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                So my earlier table was a bit generous at the top; the realistic middle is 150–300k ₽ at a firm Maxim will
                find credible, and half that at a boutique. Firms will also often quote a flat "агентское вознаграждение" as
                0.5–1% of the deposit plus a drafting fee — worth asking for both quotes, since the percentage can come in
                lower than hourly for a modest sum and higher for a large one.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:35:08.165180Z"
        >
            <Origin>01a01e87-6168-78cb-bb61-e34e4a76d823</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Put that into dollars gor me</Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:35:13.986264Z"
        >
            <Origin>01a01e87-6168-7db2-af02-6d5ac252a2f5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “курс доллара к рублю сегодня”</Action>
            <Paragraph>CBR rate for today is about 85.1 ₽/$. At that rate, 12 hours of agent work:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Tier</Word>
                    <Word>₽/h</Word>
                    <Word>$/h</Word>
                    <Word>12 h</Word>
                </Line>
                <Line>
                    <Word>Solo advocate / boutique</Word>
                    <Word>5–10k</Word>
                    <Word>$60–120</Word>
                    <Word>$700–1,400</Word>
                </Line>
                <Line>
                    <Word>Mid-size (Korpus Prava, BRACE, Бартолиус)</Word>
                    <Word>12–25k</Word>
                    <Word>$140–295</Word>
                    <Word>$1,750–3,500</Word>
                </Line>
                <Line>
                    <Word>Upper-mid (Клифф, Lidings)</Word>
                    <Word>20–35k</Word>
                    <Word>$235–410</Word>
                    <Word>$2,800–4,900</Word>
                </Line>
                <Line>
                    <Word>Pepeliaev</Word>
                    <Word>35–70k</Word>
                    <Word>$410–820</Word>
                    <Word>$4,900–9,900</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Realistic target for a credible-looking neutral firm: <Word>
                    <Bold />
                    $2,000–3,500
                </Word>. A flat quote of 0.5–1% of the deposit plus a drafting fee will come in lower than this if the
                deposit is under roughly $200k.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:36:53.699061Z"
        >
            <Origin>01a01e88-fd85-7163-9bd1-6863f3910cf3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay not bad. What firms do recommend i reach out to and what does outreach look like?</Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:37:11.047319Z"
        >
            <Origin>01a01e88-fd85-755b-982d-3fa55d62ef2a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Reach out to three, in parallel:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Korpus Prava
                    </Word> — best profile fit (private clients, publishes on agent duties). Lead candidate.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Бартолиус
                    </Word> — advocate bureau, already aware of the FPA agent-ethics rules; a clean neutral face for Maxim.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        One boutique from Гурина's referral
                    </Word> — price anchor, and likely the one you actually use.
                </Line>
            </Paragraph>
            <Paragraph>Add Кацайлиди (Yekaterinburg) only if you want a fourth quote; remote is fine.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Outreach principles
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Ana sends it, from her own email, in Russian. She is the депонент and the Russian-facing party; you
                    don't appear.
                </Line>
                <Line>
                    Describe the <Word>
                        <Emphasis />
                        mechanism
                    </Word>, not the purpose. The firm needs: parties (two former spouses, individuals), asset (non-cash
                    rubles), schedule (four quarterly tranches, months 3/6/9/12), release condition (document-based, a
                    specified МВД certificate per tranche), reversion on failure. That's it.
                </Line>
                <Line>
                    Ask four things: do they act as escrow agent for individuals; flat fee for drafting plus agency; whether
                    funds sit in a dedicated client account; and timeline to sign.
                </Line>
                <Line>
                    One paragraph. A first inquiry that's long or explains context signals exactly what you don't want
                    signaled.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Draft (Ana sends)
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                Добрый день. Рассматриваю заключение договора условного депонирования (гл. 47.1 ГК РФ) и ищу эскроу-агента.
                Стороны — два физических лица (бывшие супруги), предмет — безналичные денежные средства в счёт компенсации
                по соглашению о разделе имущества. Выплата бенефициару четырьмя траншами (3, 6, 9 и 12 месяцев) при наличии
                на каждую дату определённого документа из МВД; при невыполнении условия остаток возвращается депоненту.
                Прошу сообщить: 1) оказывает ли ваша фирма услуги эскроу-агента для физических лиц; 2) ориентировочную
                фиксированную стоимость подготовки договора и агентского сопровождения; 3) на каком счёте хранятся
                депонированные средства; 4) сроки. Сумма — порядка &#91;X&#93; руб. С уважением, &#91;Анастасия&#93;.
            </Paragraph>
            <Paragraph>
                Insert the sum — firms won't quote without it. Once quotes are in, the mirovoe soglashenie side (your own
                lawyers) and the escrow side can be drafted together so the cross-reference is consistent.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:39:02.503488Z"
        >
            <Origin>01a01e8a-f393-7e95-bd8c-ee0cce7aca5c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, good but what about the duty of checking the travel ban? How do we verify that they can do this without
                tripping up there ethics detector?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:39:19.412971Z"
        >
            <Origin>01a01e8a-f393-7309-8d89-5fa841b2b92e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two separate questions: can they verify, and will they balk.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Verification is just a document.
                </Word> Under Art. 926.3 the agent checks release conditions by external signs only — it doesn't
                investigate. So the contract names the document: written response from МВД (ГУВМ) confirming that no
                заявление о несогласии на выезд is on file for either child, dated within 14 days before the tranche date.
                Ana can request this herself; МВД's own order No. 651 (2021) prescribes the notification form for imposing
                and lifting restrictions, and since then the other parent is notified of filings. Ana obtains the letter,
                hands it to the agent, the agent matches it to the clause and pays. If you want belt-and-braces, the
                contract can also give the agent a power of attorney from Ana to request the МВД response directly — cleaner
                optics, no extra ethics exposure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The ethics question is narrower than it sounds.
                </Word> The FPA's 2019 clarification is about conflict of interest: the advocate must get written consent
                from both депонент and бенефициар to act despite the potential conflict and to use information from both. It
                says nothing about scrutinizing the parties' motives. What a firm does check is that the contract's stated
                obligation is lawful. Your stated obligation is compensation under a property-division settlement; the
                release condition is a lawful fact about the children's travel status. A mother conditioning payments to an
                ex-spouse on the children remaining free to travel abroad is an ordinary family arrangement — it reads as
                protecting a vacation, which is the only story anyone will ever hear.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How to test it before committing.
                </Word> In the first call, ask the firm directly: "Условие выплаты — справка МВД об отсутствии ограничений
                на выезд детей. Примете такой документ как основание?" A firm that says yes has told you its comfort level.
                One that hesitates isn't the one to use. Don't explain further than that sentence — volunteering rationale
                is what would invite scrutiny.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:41:54.469397Z"
        >
            <Origin>01a01e8d-94fc-78d3-8d79-c2a7afa64a10</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No if you think that’s what this is then you don’t understand it. We need to get Dima a passport. The travel
                ban has has to be gone, and if anytime it’s not gone this thing needs to dissolve otherwise this whole thing
                doesn’t work. You have completely lost the purpose of this based on what you just said. Dima cannot get his
                passport if there is a travel ban. The way this likely has to work is that Ana can request a check at any
                time or can submit a document providing evidence that is verified. If maxim can get paid while being
                difficult he will. This needs to be ungameable
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T09:42:18.663407Z"
        >
            <Origin>01a01e8d-94fc-7412-af5d-d92fc7f757c9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — the condition I described was periodic, and a periodic check is gameable: he files a ban at month 4,
                Dima's application is refused, he lifts it before the month-6 check and collects. The condition has to be
                continuous, and any evidence of a ban at any moment has to kill the whole remaining balance with no cure.
            </Paragraph>
            <Paragraph>Ungameable structure:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Continuous condition.
                    </Word> "At no moment during the term is a restriction on file for either child." Not "on the tranche
                    date."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ana can trigger dissolution at any time
                    </Word> by submitting to the agent any one of: (a) МВД notification of a new filing (МВД sends this to
                    the other parent automatically), (b) an МВД response to her own request showing a restriction, or (c) a
                    written refusal of any consular/МВД action citing a restriction. On receipt, the agent returns the
                    entire remaining balance to her. No hearing, no Maxim response, no cure period. The agent checks only
                    that the document is what it purports to be.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Maxim has no trigger.
                    </Word> He can't call a check or request payment; tranches release on schedule only if no dissolution
                    document has arrived <Word>
                        <Emphasis />
                        and
                    </Word> a fresh clean МВД certificate is on file. He can't force anything.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tranches back-loaded
                    </Word> (e.g. 10/15/25/50%) so the cost of defecting late is maximal.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No partial forfeiture.
                    </Word> One filing, even withdrawn the same day, dissolves everything remaining. That is what makes
                    re-filing irrational at every point.
                </Line>
            </Paragraph>
            <Paragraph>
                The part the escrow can't do: it can't make the passport issue. It only keeps the window open. So the
                sequencing matters — Russian passports can be renewed well before expiry, so Ana applies the day the
                withdrawal is confirmed, and the term is long enough to cover consular processing (Tbilisi Interests Section
                can take up to three months). Twelve months covers that comfortably.
            </Paragraph>
            <Paragraph>
                One consequence to be clear on: this is ungameable against a <Word>
                    <Emphasis />
                    filed
                </Word> ban. It does nothing if he obstructs through some other channel. For passport renewal of a minor,
                the ban is the only mechanism he has, which is why the design works.
            </Paragraph>
        </Message>
    </Chapter>
);
