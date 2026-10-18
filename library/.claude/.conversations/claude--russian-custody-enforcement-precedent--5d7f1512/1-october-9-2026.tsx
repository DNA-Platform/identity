import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Reference, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 October 2026](2026-10-09)</Date>
        </Dated>
        <Title>[[ 9 October 2026 ]]</Title>
        <Message
            at="2026-10-09T10:05:37.645735Z"
        >
            <Origin>68978e3b-31f3-4dc6-af76-3c518b480f01</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here's a research task. I need to emphasize that you look for precedent in Russian based on Russian law and
                do no interpolation with expectations that one might have from American courts and the American judicial
                process. Russia only. That is the point of this project
            </Paragraph>
            <Paragraph>
                We have a situation where, after losing his appeal of a court decision, Maxim has decided to exercise his
                right to speak to his children as granted to him in the custody decision. He has threatened to go the
                bailiffs and say tell them if Ana does not comply
            </Paragraph>
            <Paragraph>
                At the same time, Ana's lawyers have instructed her to wait it provide a means for Maxim to access
                communication with his children. We will ask them why they are unconcerned, but we want you to review the
                situation so we go in informed
            </Paragraph>
            <Paragraph>
                On the one hand, we are under the impression that Max can get a travel ban put on Ana, and this is bad
                because she needs to renew her passport and a travel ban blocks it. On the other hand, we are under the
                impression that a court does not consider talking to a father as life or death as the children not getting
                alimony from the father, and that the first set of actions are likely to be fines
            </Paragraph>
            <Paragraph>Which if either of these perspectives is right? Find solid precedent</Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:11:34.162927Z"
        >
            <Origin>28463ce7-4d1b-48d2-a350-7908281977ba</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll pull up what's already on file about the custody order and Ana's passport, then dig into Russian
                statute and case law on both questions.
            </Paragraph>
            <Action>Used mcp  memory  memory read</Action>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>Let me fetch the specific articles.</Paragraph>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used TaskUpdate</Action>
            <Paragraph>
                Both perspectives describe real mechanisms, but they run on parallel tracks, not one after the other. On one
                point the statute is the reverse of the intuition: a contact order can trigger an exit ban <Word>
                    <Emphasis />
                    more
                </Word> easily than alimony can.
            </Paragraph>
            <Heading>1. The exit ban is available, and it does block the passport</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statute.
                </Word> Under ст. 67 ч. 1 229-ФЗ, the bailiff may restrict a debtor's exit, either at the claimant's request
                or on his own initiative, if the debtor fails without valid reasons to comply within the
                voluntary-compliance period. Alimony qualifies only once the debt exceeds 10,000 ₽. Non-property
                requirements are listed with no threshold at all. An order on порядок общения is a non-property requirement.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Precedent in contact cases.
                </Word> ConsultantPlus's 2025 compilation of decisions under ст. 67 reads it together with ст. 109.3 and
                Пленум № 50 (пп. 22, 47). It states the condition as: the bailiff must establish that the debtor is not
                complying without valid reasons, or is obstructing the claimant's contact with the child. One worked example
                comes from Moscow. The Черемушкинский district court upheld a six-month exit restriction on a parent who had
                repeatedly kept the other parent from scheduled time. The court found the debtor had been duly notified and
                had shown no valid reasons. In that case the debtor was the father, so the mechanism doesn't depend on which
                parent holds the children.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Passport.
                </Word> Under ст. 10 114-ФЗ, if any ст. 15 circumstance exists, the passport is not processed and/or not
                issued. ст. 15 п. 5 covers a person evading court-imposed obligations, and the restriction lasts until they
                are performed or the parties reach agreement.
            </Paragraph>
            <Paragraph>The Supreme Court has upheld this twice:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    In АКПИ18-1130 (29.11.2018), the claimant had been refused an already-manufactured passport because of a
                    bailiff's six-month restriction. The court held the refusal ground fully consistent with 114-ФЗ.
                </Line>
                <Line>
                    In АПЛ22-561 (12.01.2023), the Appellate Collegium affirmed the same refusal ground in the current
                    regulation.
                </Line>
            </Paragraph>
            <Paragraph>Consulates abroad act on these restrictions too:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The Russian consulate in Lithuania refused a passport because the applicant's exit was closed over an
                    unpaid fine.
                </Line>
                <Line>
                    The embassy in Washington refused one after receiving a letter from ФССП about an active restriction.
                </Line>
                <Line>
                    ст. 67 ч. 9 routes restriction data electronically to the FSB and allows use of the state migration and
                    identity-document system.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two operational consequences:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The exposure lasts until the passport is in hand, not just until October 20.
                    </Word> Consular processing can take up to three months, and АКПИ18-1130 shows a finished passport can
                    be withheld at handover. Submitting on October 20 leaves her exposed until roughly late January 2027.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        An existing passport can be seized.
                    </Word> Under ст. 18, if exit is restricted under пп. 3–5 of ст. 15, the passport is subject to seizure,
                    and consulates are among the bodies named. I found no published case of this happening at a consulate.
                </Line>
            </Paragraph>
            <Paragraph>
                A ban on leaving Russia doesn't by itself stop travel out of Georgia. Its practical effect here is on the
                passport.
            </Paragraph>
            <Heading>2. The "fines first" ladder is real, but only for fines and custody</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Enforcement fee:
                    </Word> since January 9, 2026 the исполнительский сбор for a non-property document is 10,000 ₽ for an
                    individual.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        First fine:
                    </Word> ч. 2 ст. 5.35 КоАП carries 2,000–3,000 ₽. The Supreme Court upheld 2,000 ₽ fines imposed by КДН
                    in 2024 (32-АД24-1-К1) and 2025 (67-АД25-4-К8).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Repeat offense:
                    </Word> a repeat offense brings 4,000–5,000 ₽ or up to five days' arrest. Arrest only matters if she is
                    physically in Russia.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Transfer of the children:
                    </Word> transfer under ст. 66 п. 3 СК requires злостное non-compliance. Пленум № 10 (1998) п. 8 defines
                    that as non-compliance despite measures already applied. The court may order transfer, but isn't
                    required to, and must weigh the children's interests and opinion.
                </Line>
            </Paragraph>
            <Paragraph>
                The premise that needs adjusting: that ladder governs fines and a change of residence. The exit ban isn't on
                it. It becomes available at the same moment as the 10,000 ₽ fee, right after the voluntary period lapses. A
                claimant can ask for it in the very application that opens proceedings.
            </Paragraph>
            <Heading>3. What decides whether a ban is lawful: obstruction, not outcome</Heading>
            <Paragraph>
                FSSP's 23.05.2017 letter says the bailiff must establish that the debtor isn't obstructing contact. Once
                that is established, the proceeding is closed as executed.
            </Paragraph>
            <Paragraph>
                FSSP's 28.04.2016 letter (№ 00011/16/37579-СВС) relays the courts' position: compulsory enforcement is
                inadmissible when a child categorically refuses contact. The bailiff must determine, using a psychologist,
                whether the refusal is the child's own or was induced by the resident parent. If it is the child's own, the
                bailiff should apply to court to terminate the proceeding as impossible to execute. A published commentary
                on that letter adds that the law doesn't oblige the debtor to help build contact. Living abroad doesn't take
                Ana outside the obligation: the Supreme Court cites СК ст. 55, under which a child's right to contact with
                each parent holds even when the parents live in different countries.
            </Paragraph>
            <Paragraph>That makes the deciding factor the record:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Record that defeats a ban:
                    </Word> a channel exists, Maxim was told how to use it, and the children declined on their own. That
                    undercuts both "without valid reasons" and "obstructing."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Record that supports a ban:
                    </Word> Maxim asked in October and no channel exists. That is the pattern the Черемушкинский bailiff
                    relied on.
                </Line>
            </Paragraph>
            <Paragraph>The same 2016 letter cuts the other way if the refusal is attributed to Ana's influence.</Paragraph>
            <Heading>Questions for the lawyers</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    What is the reasoning for holding off on the channel? ст. 67 ч. 1 п. 2 has no threshold, and a passport
                    will be in process into January.
                </Line>
                <Line>
                    Has Maxim obtained an исполнительный лист, or is a proceeding already open? Which ОСП would have
                    jurisdiction?
                </Line>
                <Line>
                    What exactly does the order require of Ana for remote contact, and what would a bailiff accept as
                    compliance?
                </Line>
                <Line>
                    How is ст. 18 seizure applied at consulates if a restriction appears before submission or before
                    collection?
                </Line>
            </Paragraph>
            <Paragraph>I can draft these as a bilingual message for the lawyers' Telegram chat.</Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.consultant.ru/document/cons_doc_LAW_71450/d55c99ef04178dea050040276efd26d516424136/</Reference>
                        229-ФЗ ст. 67 (КонсультантПлюс)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.consultant.ru/law/podborki/ogranichenie_vyezda_za_granicu/</Reference>
                        Подборка: ограничение выезда (КонсультантПлюс)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://ur-delo.com/o-porjadke-obshhenija-s-rebenkom/</Reference>
                        Черемушкинский районный суд — ограничение выезда по порядку общения
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.consultant.ru/document/cons_doc_LAW_11376/3c9f5011b93965025dfc3c97e23f34b9dc019400/</Reference>
                        114-ФЗ ст. 10
                    </Word>, <Word>
                        <Reference>https://www.consultant.ru/document/cons_doc_LAW_11376/5a4fdcdf4ce525c4221a12682fc98e6e3fc9e17a/</Reference>
                        ст. 15
                    </Word>, <Word>
                        <Reference>https://www.consultant.ru/document/cons_doc_LAW_11376/7f853419138a6d1f7874b5b355a56b3bc0c92884/</Reference>
                        ст. 18
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://pravo.ppt.ru/resheniye/209615</Reference>
                        ВС РФ АКПИ18-1130
                    </Word>; <Word>
                        <Reference>https://pravo.ppt.ru/opredelenie/277448</Reference>
                        ВС РФ АПЛ22-561
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://theins.ru/news/269711</Reference>
                        The Insider — consulate refusals
                    </Word>; <Word>
                        <Reference>https://theins.ru/news/283863</Reference>
                        The Insider — Washington embassy
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.rg.ru/2026/01/12/fz563-dok.html</Reference>
                        563-ФЗ (Российская газета)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://vsrf.ru/lk/practice/stor_pdf/2341368</Reference>
                        ВС РФ 32-АД24-1-К1
                    </Word>; <Word>
                        <Reference>https://vsrf.ru/lk/practice/stor_pdf/2469804</Reference>
                        ВС РФ 67-АД25-4-К8
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://semkodeks.advokati-moscow.ru/sk-rf-statya-66/</Reference>
                        СК РФ ст. 66 with Пленум № 10 commentary
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://rulaws.ru/acts/Pismo-FSSP-Rossii-ot-23.05.2017-N-00011_17_46941-DA/</Reference>
                        Письмо ФССП от 23.05.2017
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://psyjournals.ru/nonserialpublications/cjp2017/contents/cjp2017_Lewinsky.pdf</Reference>
                        Лощинская Т.Ю., on FSSP letters on child refusal
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:19:30.596728Z"
        >
            <Origin>f5eebc21-d2de-4f62-b089-d6a9b4161fe4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You aren't expressing this as a function of time. And without that, it sounds like a ban might happen
                immediately when it won't
            </Paragraph>
            <Paragraph>
                The appeal was just denied. This is the first time Maxim has requested access to children in almost two
                years of them not living with him. The bailiffs haven't contacted Ana yet, and if they did, she would tell
                them that she is preparing contact with the kids. How does obstruction get decided?
            </Paragraph>
            <Paragraph>
                Let me give you hyperbole. If it was decided in a court decision that has 13 hearings, well then we
                shouldn't be worried at all. If the bailiffs have complete discretion and can react to a single suggestion
                from the potentially obstraucted parent we have a lot to worry about. Maxim has threatened to go to the
                bailiffs
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:21:28.120720Z"
        >
            <Origin>0da472d1-3d3b-4b92-9380-f829d8dd4172</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll lay out the procedure as a timeline and pin down who decides obstruction and on what record. First, a
                few statutory details I need to verify: notice, deadlines, and the Plenum's conditions for a ban.
            </Paragraph>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Paragraph>
                A ban can't happen immediately. Each step has its own statutory clock and they run in sequence, so the
                earliest a restriction could exist is a few weeks after Maxim actually files.
            </Paragraph>
            <Heading>Timeline from the day Maxim acts</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Step</Word>
                    <Word>Clock</Word>
                    <Word>Source</Word>
                </Line>
                <Line>
                    <Word>1. First-instance court issues the writ (исполнительный лист)</Word>
                    <Word>
                        No statutory deadline. It can only issue after the decision is in force, and after an appeal the
                        court usually waits for the case file to return. Days to weeks.
                    </Word>
                    <Word>ГПК ст. 428 (from general knowledge, not checked for this answer)</Word>
                </Line>
                <Line>
                    <Word>2. Bailiff office (ОСП) hands the writ to a bailiff</Word>
                    <Word>≤3 days</Word>
                    <Word>ст. 30</Word>
                </Line>
                <Line>
                    <Word>3. Bailiff opens proceedings; copy sent to Ana</Word>
                    <Word>≤3 days, then by the next day</Word>
                    <Word>ст. 30</Word>
                </Line>
                <Line>
                    <Word>4. Ana "receives" the opening order</Word>
                    <Word>Variable; she can be deemed to have received it (see below)</Word>
                    <Word>ст. 29</Word>
                </Line>
                <Line>
                    <Word>5. Voluntary-compliance period</Word>
                    <Word>5 days from receipt</Word>
                    <Word>Пленум № 50 п. 22</Word>
                </Line>
                <Line>
                    <Word>6. Earliest exit-restriction order</Word>
                    <Word>Right after step 5 lapses; senior bailiff approves; copy to Ana by the next day</Word>
                    <Word>ст. 67 ч. 5, ч. 10</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Days under 229-ФЗ are counted as working days (ст. 15, from general knowledge, not checked for this answer).
                Once the writ reaches the ОСП, steps 2–5 take roughly two to three weeks. If Maxim moved this week and got
                the writ quickly, a restriction becomes legally possible around early-to-mid November. It cannot come before
                the October 20 submission, but it can overlap the production and handover window.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 4 is the one that can surprise her.
                </Word> Under ст. 29, she counts as notified if the notice went to her last known residence and she didn't
                receive it. Notices sent electronically through the government channel (Госуслуги) also count. So the
                five-day clock can start without Ana reading anything, for example via mail to her Russian registration
                address. "The bailiffs haven't contacted her" and "the clock already ran" can both be true. Watching
                Госуслуги and the ФССП public database of proceedings is how she would know when the clock started.
            </Paragraph>
            <Heading>Who decides obstruction, and on what record</Heading>
            <Paragraph>It sits between your two poles.</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Who decides:
                    </Word> the bailiff alone, by order, approved by the senior bailiff. There is no hearing and no court
                    beforehand. The claimant can request the restriction in the same application that opens the case. That
                    part resembles your second pole.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What the bailiff must establish:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Ana was duly notified. The FSSP's own order template has a line stating this.</Line>
                    <Line>The voluntary period has lapsed.</Line>
                    <Line>
                        She failed to comply without valid reasons, or she obstructed contact. A 2024 court decision
                        (Красный Яр) held the restriction applies only to evasion that is culpable and unlawful.
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        The record in a contact case:
                    </Word> FSSP's 2017 letter has the bailiff establish whether the debtor is obstructing. If she isn't,
                    the proceeding closes as executed. With the children in Georgia, the bailiff can gather information
                    abroad only through treaty channels. In practice the file would be paper: Maxim's statement, Ana's
                    written explanation, and the correspondence.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Review:
                    </Word> only after the fact, by an administrative claim filed within 10 days. In that suit the bailiff
                    carries the burden of proving the order was lawful.
                </Line>
            </Paragraph>
            <Paragraph>
                So a single complaint from Maxim is not legally sufficient. But the bar to get a restriction issued is low.
                In the Черемушкинский case, the bailiff reasoned that the debtor had been notified, had missed the deadline,
                and had shown no extraordinary, unavoidable circumstances beyond his control. That is the standard a "valid
                reason" gets measured against. I found no data on how often bailiffs grant a restriction on the claimant's
                first request in contact cases.
            </Paragraph>
            <Heading>What this means for "she'd tell them she's preparing contact"</Heading>
            <Paragraph>
                Measured against that standard, "preparing" during the five-day window is a weak answer. A strong answer is:
                channel set up on &#91;date&#93;, details sent to Maxim on &#91;date&#93;, and the children's own responses.
                That removes the fact the bailiff would need to find. Because the clock can start through deemed notice,
                having the channel in place before any notice arrives makes the window irrelevant.
            </Paragraph>
            <Paragraph>
                That gives a concrete question for the lawyers: what does waiting buy, given the five-day clock can start
                without Ana knowing?
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://harant.ru/blog/ispolnitelnoe-proizvodstvo/vozbuzhdenie-ispolnitelnogo-proizvodstva/</Reference>
                        ст. 30 timing (harant)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://rulaws.ru/laws/Federalnyy-zakon-ot-02.10.2007-N-229-FZ/Statya-29/</Reference>
                        ст. 29 text (rulaws)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://sudact.ru/regular/doc/GB3Zls3pN9Vr/</Reference>
                        Красный Яр decision citing Пленум № 50 п. 22 (sudact)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.consultant.ru/document/cons_doc_LAW_71450/d55c99ef04178dea050040276efd26d516424136/</Reference>
                        229-ФЗ ст. 67
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.consultant.ru/document/cons_doc_LAW_114609/a5039f53c908453d7922a65f53a7955b64aa5717/</Reference>
                        Restriction order template
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.consultant.ru/law/podborki/ogranichenie_vyezda_za_granicu/</Reference>
                        ConsultantPlus compilation
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://pravo.ppt.ru/pismo/fssp/n-00011-17-46941-da-137079</Reference>
                        FSSP letter 23.05.2017
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://ur-delo.com/o-porjadke-obshhenija-s-rebenkom/</Reference>
                        Черемушкинский decision
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:27:13.031010Z"
        >
            <Origin>07575b82-0489-44c1-b796-c1fc0d4d124c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Aggregate what you said, and see if the lawyers are reasonable. I think they imagine that we might wait two
                weeks to get some information back. The custody decision just went into force. Maxim has yet to complain. He
                just made his request. Give a timeline. Make that the deliverable. Give above and below in days. Cite
                precedent
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:28:34.170922Z"
        >
            <Origin>3dca9aab-fa2b-473e-9c47-7fdb2a309d87</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll fill three remaining gaps (Госуслуги delivery rule, writ timing after appeal, a precedent voiding a
                premature ban), then build the timeline as a document.
            </Paragraph>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used Bash</Action>
            <Action>Used Skill</Action>
            <Action>Used mcp  Claude Docs  batch</Action>
            <Paragraph>Outline is up; now filling the bottom line, then the step-by-step chain.</Paragraph>
            <Action>Used Artifact</Action>
            <Action>Used mcp  Claude Docs  guide</Action>
            <Action>Used mcp  Claude Docs  guide</Action>
            <Action>Used mcp  Claude Docs  update</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>Bottom line is in; now the assumptions and the step-by-step chain.</Paragraph>
            <Action>Used mcp  Claude Docs  update</Action>
            <Action>Used WebFetch</Action>
            <Action>Used mcp  Claude Docs  update</Action>
            <Action>Used mcp  Claude Docs  update</Action>
            <Paragraph>Now the section on how obstruction is decided.</Paragraph>
            <Action>Used mcp  Claude Docs  update</Action>
            <Paragraph>Now the precedent table.</Paragraph>
            <Action>Used mcp  Claude Docs  update</Action>
            <Paragraph>Now the questions for the lawyers and the sources.</Paragraph>
            <Action>Used mcp  Claude Docs  update</Action>
            <Paragraph>Prose sections are in; now drawing the scenario timeline.</Paragraph>
            <Action>Used mcp  Claude Docs  batch</Action>
            <Action>Used mcp  Claude Docs  read</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used TaskUpdate</Action>
            <Paragraph>
                <Word>
                    <Reference>https://claude.ai/code/artifact/1e2d9d05-f686-4744-a007-203c7d924dc2</Reference>
                    Exit-Ban Timeline: Contact Order Enforcement
                </Word> is ready to read, edit inline, or comment on.
            </Paragraph>
            <Attachment>Uploaded “image-0-0.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-09T10:38:47.992401Z"
        >
            <Origin>01a1203e-e2fc-7a3e-a9da-f4435cb9ad48</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I still don’t think the clock might start until maxim has tried harder to contact or waitrd longer. This is
                his first attempt in years. He can’t just ask one day and complain the next
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:39:55.680775Z"
        >
            <Origin>01a1203e-e2fc-71ff-811b-a2b72953932a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The legal question is whether a claimant must try contact first before the bailiffs will act. Let me check
                the one source I found earlier that addresses claimants who skip their own contact attempts.
            </Paragraph>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                On the law as written, the clock does not depend on Maxim's effort. Your intuition holds at a different
                step: what the bailiff can find once the clock runs.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Starting the clock needs no prior attempts.
                </Word> Opening a case takes only Maxim's application and the writ. The application goes to a bailiff within
                three days, and the bailiff opens the case within three more (<Word>
                    <Reference>https://rulaws.ru/laws/Federalnyy-zakon-ot-02.10.2007-N-229-FZ/Statya-30/</Reference>
                    229-ФЗ ст. 30
                </Word>). The statute sets no requirement that he first tried contact or waited any period. So he can ask
                one day and file the next, and the timeline's dates stand as the earliest possible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Finding a violation is where his effort matters.
                </Word> A contact order is not violated by a request alone. Ana's duty is not to obstruct contact, and the
                bailiff must establish obstruction before closing or escalating the case (<Word>
                    <Reference>https://pravo.ppt.ru/pismo/fssp/n-00011-17-46941-da-137079</Reference>
                    FSSP letter 23.05.2017
                </Word>). Lawyers argue exactly your point: such an order depends on the claimant actually showing up or
                asking, and a fee needs the debtor's fault (<Word>
                    <Reference>https://pravo163.ru/zloupotreblenie-pravom-na-obshhenie-v-ramkax-ispolnitelnogo-proizvodstva-obzhalovanie-ispolnitelnogo-sbora/</Reference>
                    pravo163
                </Word>). That article cites no court decisions, and I found no published contact case annulling a fee or
                ban for the claimant's own inactivity. The fault requirement itself shows up in fee cases:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Fees were annulled where there was no evidence the debtor evaded the voluntary window (<Word>
                        <Reference>https://sudact.ru/regular/doc/2kvc1rJOw5Lv/</Reference>
                        Чкаловский, Yekaterinburg, 2021
                    </Word>).
                </Line>
                <Line>
                    A fee was annulled where the debtor complied inside the window (<Word>
                        <Reference>https://www.zakonrf.info/gorsud/doc-ccbca6ce-33f6-5f1c-ab7e-dfe7a2ea215e/</Reference>
                        Хорошевский 2025
                    </Word>).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two things work against relying on that:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The bailiff can create the "attempt" himself.
                    </Word> In the Черемушкинский contact case, the bailiff set a specific date, time and place for contact
                    by written demand. The court upheld it (<Word>
                        <Reference>https://ur-delo.com/o-porjadke-obshhenija-s-rebenkom/</Reference>
                        decision
                    </Word>). Missing a demand like that is a clean violation, whatever Maxim did beforehand.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The debtor in that same case made your argument and lost.
                    </Word> He said the other parent kept not showing up. The court rejected it because the record showed
                    repeated blocking. The argument works only when the record supports it.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this means for the record now.
                </Word> Maxim's request is the one fact a bailiff could read as obstruction if it goes unanswered. It
                doesn't need contact details to defuse it. A short reply through the lawyers, saying details for a dedicated
                channel will follow by a specific date, puts Ana on record as complying rather than refusing.
            </Paragraph>
            <Paragraph>
                One fact decides how much this matters: what the order says about remote contact. If it sets days and times,
                nothing can be missed until one falls inside the window. If it says something like "communicate freely by
                phone," the bailiff has more room to set his own terms.
            </Paragraph>
            <Paragraph>I can add this as a section in the timeline doc if you want it there for the lawyers.</Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:42:13.791219Z"
        >
            <Origin>01a12042-06ff-7c24-8647-a01d82e60a5f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How much time can the lawyers reasonably give her without that timeline being considered obstruction?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:42:37.173968Z"
        >
            <Origin>01a12042-06ff-7f01-9151-551e2b99d648</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Russian law sets no grace period between Maxim's request and Ana's response. The only defined compliance
                period is the five working days after a bailiff's notice (<Word>
                    <Reference>https://rulaws.ru/laws/Federalnyy-zakon-ot-02.10.2007-N-229-FZ/Statya-30/</Reference>
                    229-ФЗ ст. 30 ч. 12
                </Word>). Before that, the question is not "how many days" but whether the delay reads as preparing to
                comply or as not responding.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Three limits apply, and the earliest one governs:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        The order's own schedule.
                    </Word> If it sets days or times for remote contact, the first one after Maxim's request is a firm date.
                    A missed scheduled contact is the clearest form of violation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Five working days after any bailiff notice.
                    </Word> That window is not extendable by preparation. A late excuse has to meet the valid-reasons
                    standard: extraordinary, objectively unavoidable circumstances beyond the debtor's control (<Word>
                        <Reference>https://www.zakonrf.info/gorsud/doc-f947c534-48fe-5d79-a0e2-0ce68e6220b9/</Reference>
                        Хорошевский 2023
                    </Word>). Setting up a phone number won't meet it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Silence is risky even without the bailiffs.
                    </Word> Not complying with a parenting-order decision is an offense under ч. 2 ст. 5.35 КоАП whether or
                    not bailiffs are involved. In one Supreme Court case the police drew up the protocol and a minors'
                    commission imposed the fine (<Word>
                        <Reference>https://vsrf.ru/lk/practice/stor_pdf/2341368</Reference>
                        32-АД24-1-К1
                    </Word>). The fine is 2,000–3,000 ₽ and doesn't touch the passport. But a fine on record helps any later
                    bailiff or custody argument.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What makes a delay read as preparation.
                </Word> Courts and bailiffs judge the record, so a wait is defensible when it is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Acknowledged:
                    </Word> Maxim gets a reply soon after his request.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Dated:
                    </Word> the reply names a specific date for delivery of the contact details.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Explained:
                    </Word> the reason is concrete, such as a dedicated, recorded channel being set up and delivered through
                    the lawyers.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Short:
                    </Word> proportionate to the task. A dedicated number or messenger account takes a day or two to set up,
                    so a two-week gap is hard to present as setup time.
                </Line>
            </Paragraph>
            <Paragraph>
                An open-ended "we'll get back to you" fails all four, and the same two weeks of silence reads as
                non-response.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Applied to the lawyers' plan:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Two weeks with a reply sent now and a stated delivery date:
                    </Word> defensible, as long as no scheduled contact time falls inside it and any bailiff notice is
                    answered within five working days.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Two weeks of silence:
                    </Word> this is the version that gives a bailiff something to write down.
                </Line>
            </Paragraph>
            <Paragraph>
                I found no published decision setting a number of days for this. The standard comes from the valid-reasons
                cases and the obstruction test, not from a precedent on response time.
            </Paragraph>
            <Paragraph>
                The question for the lawyers: will they send Maxim a dated acknowledgment now, even if the contact details
                follow later?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:48:41.954655Z"
        >
            <Origin>01a12047-f359-7c87-8f1b-27ecbbdd1e29</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay, and you really believe the bailiffs will just believe maxim without suggesting that his appeal just
                ended and that he could have requested contact at any point, and to relax because response would be slow if
                him even contacting at all is shocking. His appeal was about lowering the amount of child support he had to
                pay so this court case doesn’t look like a father who’s concerned
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:49:08.039098Z"
        >
            <Origin>01a12047-f359-7291-9263-dcaf395c746e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No — the bailiff doesn't decide by believing either parent. He decides on paper: was Ana notified, did the
                window pass, and is there a missed contact or a refused demand. Your context matters, but in specific
                places, not as a general reason to relax.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where Maxim's history carries real weight:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The children's refusal.
                    </Word> FSSP's 2016 guidance has the bailiff test whether a child's refusal is the child's own. If it
                    is, for example because it grew from long separation or bad experience with the parent, the guidance
                    says enforcement measures should not be applied. The commentary on that guidance uses an almost
                    identical example: a child who hasn't seen the father in years and has no attachment to him (<Word>
                        <Reference>https://psyjournals.ru/nonserialpublications/cjp2017/contents/cjp2017_Lewinsky.pdf</Reference>
                        Лощинская, on FSSP letters 2016–2017
                    </Word>). Two years of no contact is exactly the fact that makes Katya's and Dima's refusal read as
                    their own.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Any escalation to court.
                    </Word> Transfer of the children under ст. 66 п. 3 СК turns on the children's interests and opinion. A
                    father whose last litigation was about paying less support is a weak applicant there.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A court reviewing a restriction.
                    </Word> The bailiff must prove the order lawful, and the judge sees the whole file.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it carries little weight:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ana's duty under the order.
                    </Word> The order grants Maxim the right regardless of motive. The valid-reasons test asks about Ana's
                    circumstances, not his sincerity. In the Черемушкинский case the debtor argued the other parent's
                    conduct, and the court looked only at whether the debtor blocked contact (<Word>
                        <Reference>https://ur-delo.com/o-porjadke-obshhenija-s-rebenkom/</Reference>
                        decision
                    </Word>).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "He could have asked at any time."
                    </Word> If the contact order sits in the decision that only entered into force on September 17, his
                    enforceable right is three weeks old. On paper, a request three weeks after the order took effect looks
                    timely, not late. A bailiff wouldn't read it as shocking.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What follows.
                </Word> The history is strongest as part of Ana's own explanation, alongside a record of compliance, not
                instead of one. For example: no contact from him in two years; the children decline on their own; channel
                delivered on &#91;date&#93;; their responses attached. That file is hard for a bailiff to turn into
                obstruction. "He's not a sincere father, so we didn't answer" asks the bailiff to weigh motive, which isn't
                his question.
            </Paragraph>
            <Paragraph>
                None of this means the bailiffs are likely to act fast or eagerly. I have no data on how quickly bailiffs
                pursue contact orders in practice. The point is only that Maxim's motive doesn't stop a five-day window from
                running once he files.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:50:30.766164Z"
        >
            <Origin>01a12049-9c60-7df4-8c23-fbc9c2346ba1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But ypu believe the ban goes in force well before the court hears the case?</Paragraph>
        </Message>
        <Message
            at="2026-10-09T10:50:51.870618Z"
        >
            <Origin>01a12049-9c60-7821-b392-9cdc6d642fb3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. The restriction is the bailiff's own order, approved by the senior bailiff, and it takes effect when
                issued. The bailiff sends Ana a copy by the next day, and the restriction goes electronically to the FSB and
                migration systems (<Word>
                    <Reference>https://www.consultant.ru/document/cons_doc_LAW_71450/d55c99ef04178dea050040276efd26d516424136/</Reference>
                    229-ФЗ ст. 67 ч. 5, 9, 10
                </Word>). No court sees it first.
            </Paragraph>
            <Paragraph>
                A court reviews it in advance only when the writ did not come from a court. The Елецкий case was that kind:
                a tax-authority writ, where the court heard the application beforehand and refused it (<Word>
                    <Reference>https://sudact.ru/regular/doc/A6ZTXX4gEYH1/</Reference>
                    decision
                </Word>). Maxim's writ comes from a court, so that step doesn't apply.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Court review comes afterward.
                </Word> Ana would file an administrative claim within 10 days of learning of the order. The bailiff then has
                to prove the order lawful. The restriction stays in force while the case is pending. Whether a court can
                suspend it in the meantime is a question for the lawyers; I haven't verified the КАС provision. The two
                Moscow cases show the timescale:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    In the Хорошевский case, the debtor challenged a restriction issued April 25. The decision came June 27,
                    and the restriction stayed in force throughout (<Word>
                        <Reference>https://www.zakonrf.info/gorsud/doc-f947c534-48fe-5d79-a0e2-0ce68e6220b9/</Reference>
                        decision
                    </Word>).
                </Line>
                <Line>
                    In the Черемушкинский case, the bailiff had already lifted the restriction by the time the court ruled (<Word>
                        <Reference>https://ur-delo.com/o-porjadke-obshhenija-s-rebenkom/</Reference>
                        decision
                    </Word>).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The fast exit runs through the bailiff, not the court.
                </Word> Once grounds for a restriction fall away, the bailiff must lift it no later than the next day (<Word>
                    <Reference>https://www.consultant.ru/document/cons_doc_LAW_71450/d55c99ef04178dea050040276efd26d516424136/</Reference>
                    ст. 67 ч. 7
                </Word>). Delivering the channel and documenting it is that kind of ground. That route takes days; the court
                route takes weeks to months.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For the passport,
                </Word> the dates in the timeline doc are when a restriction could be in force, not when a court would hear
                it. If one landed between submission and handover, the consulate could withhold the passport (<Word>
                    <Reference>https://pravo.ppt.ru/resheniye/209615</Reference>
                    АКПИ18-1130
                </Word>). Getting it lifted through the bailiff would be the only route quick enough to matter.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T14:47:52.616166Z"
        >
            <Origin>5a26735d-1088-4545-9119-2da2f7b38e8c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is a different question, but research it nonetheless. IN terms of alimony, in practice, what are the
                ways a father might be relieved of the burden of paying alimony? I am under the impression that this is not
                supposed to be possible but there are methods
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T14:51:50.013409Z"
        >
            <Origin>88ff90a5-f23a-451a-a52e-01ff88c67331</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll research the Russian legal grounds for ending or reducing alimony, then the practical routes fathers
                use and how courts and bailiffs respond to each.
            </Paragraph>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskCreate</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used TaskUpdate</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                Your impression is mostly right. A father can't simply opt out: a parent cannot renounce support, and losing
                parental rights does not end it (<Word>
                    <Reference>https://www.zakonrf.info/sk/71/</Reference>
                    СК ст. 71 п. 2
                </Word>). But there are lawful routes that end, reduce, or erase the obligation, and practical routes that
                shrink what is actually collected.
            </Paragraph>
            <Heading>Lawful routes</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Route</Word>
                    <Word>Effect</Word>
                    <Word>Limit</Word>
                    <Word>Source</Word>
                </Line>
                <Line>
                    <Word>Adoption of the child by someone else</Word>
                    <Word>Ends the obligation for good</Word>
                    <Word>
                        Needs his consent, or a court finding that he lived apart over 6 months and evaded upbringing and
                        support without valid reason
                    </Word>
                    <Word>
                        &#91;СК ст. 120&#93;(https://www.zakonrf.info/sk/120/) (with commentary citing ст. 137); &#91;ст.
                        130&#93;(https://pravo163.ru/advokat-po-semejnym-delam-usynovlenie-rebenka-bez-soglasiya-roditelya/)
                    </Word>
                </Line>
                <Line>
                    <Word>Majority at 18, or emancipation</Word>
                    <Word>Ends it</Word>
                    <Word>Timing only</Word>
                    <Word>&#91;СК ст. 120&#93;(https://www.zakonrf.info/sk/120/)</Word>
                </Line>
                <Line>
                    <Word>Changed financial or family situation</Word>
                    <Word>Court may reduce the amount or release him entirely</Word>
                    <Word>His burden to prove; courts weigh both parents</Word>
                    <Word>&#91;СК ст. 119&#93;(https://www.zakonrf.info/sk/119/)</Word>
                </Line>
                <Line>
                    <Word>Fixed sum instead of a share of income</Word>
                    <Word>Can lower or raise what he pays</Word>
                    <Word>Courts also use it against a payer who hides income</Word>
                    <Word>
                        Пленум ВС № 56, пп. 22–24
                        (&#91;text&#93;(https://www.zakonrf.info/postanovlenie-plenum-verkhovnogo-suda-rf-56-26122017/))
                    </Word>
                </Line>
                <Line>
                    <Word>Release from arrears</Word>
                    <Word>Court may cancel arrears in whole or part</Word>
                    <Word>Non-payment must stem from illness or another valid reason, and he must be unable to repay</Word>
                    <Word>&#91;СК ст. 114 п. 2&#93;(https://www.zakonrf.info/sk/114/)</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The Plenum names the changes that count for a reduction: the payer's disability (п. 8), other dependent
                children, low income, and health problems (п. 20).
            </Paragraph>
            <Paragraph>Three doors that look open but aren't:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Bankruptcy
                    </Word> does not discharge alimony, and current payments continue during the procedure (<Word>
                        <Reference>https://harant.ru/blog/bankrotstvo/bankrotstvo-i-alimenty-chto-spisyvaetsya-a-chto-net/</Reference>
                        harant
                    </Word>).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Waiting out arrears
                    </Word> doesn't work: the three-year limit doesn't apply when non-payment was his fault (<Word>
                        <Reference>https://base.garant.ru/10105807/ae742973025e8dd281503080d4be43e3/</Reference>
                        СК ст. 113
                    </Word>).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Forgiving arrears by agreement
                    </Word> is barred for alimony on minor children (<Word>
                        <Reference>https://www.zakonrf.info/sk/114/</Reference>
                        ст. 114 п. 1
                    </Word>).
                </Line>
            </Paragraph>
            <Heading>Practical routes (the "methods")</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Low official income.
                    </Word> A share-based order applies only to documented income, so informal pay shrinks it. Two counters
                    exist. The court can switch to a fixed sum (Пленум п. 24). If he shows no income documents, arrears are
                    computed at the Russian average wage (<Word>
                        <Reference>https://base.garant.ru/10105807/ae742973025e8dd281503080d4be43e3/</Reference>
                        ст. 113 п. 4
                    </Word>).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Manufactured obligations.
                    </Word> Inflated alimony agreements have been used to create artificial debt. The Supreme Court's
                    economic panel has been skeptical in bankruptcy cases; in one, a 4 million ₽/month agreement against a
                    declared income of 38,000 ₽ was sent back for retrial (<Word>
                        <Reference>https://pravo.ru/news/204299/</Reference>
                        pravo.ru
                    </Word>; <Word>
                        <Reference>https://www.advgazeta.ru/mneniya/alimentnye-soglasheniya-kak-mnimye-sdelki/</Reference>
                        advgazeta
                    </Word>). I found no case where such an agreement was used to dilute another child's share.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Military service (the war).
                    </Word> Alimony enforcement is not suspended for war participants or mobilized men, and the receiving
                    parent can block a suspension (<Word>
                        <Reference>https://nalog-nalog.ru/zarplaty_i_kadry/kak-vzyskat-alimenty-s-uchastnika-svo-kak-i-skolko-platyat-kogda-prihodyat/</Reference>
                        nalog-nalog, Apr 2026
                    </Word>; <Word>
                        <Reference>https://vseadvokaty.ru/questions/semeynoe-pravo/vzyskanie-alimentov/84437</Reference>
                        vseadvokaty
                    </Word>). It is withheld from military pay. Some payments are exempt, such as injury compensation, and
                    one source says combat pay too. So the base can shrink; the combat-pay point needs checking.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Leaving Russia or working abroad.
                    </Word> Enforcement reaches only income and assets visible in Russia. An exit ban bites only if he
                    returns. The other tools are license suspension, fines or arrest under КоАП 5.35.1, and criminal
                    liability under УК 157 for repeat evasion (<Word>
                        <Reference>https://harant.ru/blog/alimenty/dolzhnik-po-alimentam-ne-rabotaet-chto-delat/</Reference>
                        harant
                    </Word>).
                </Line>
            </Paragraph>
            <Paragraph>
                For scale: bailiffs collected over 100 billion ₽ in alimony in 2025, and the alimony debtor registry passed
                300,000 people by November 2025 (<Word>
                    <Reference>https://rtvi.com/news/pristavy-vzyskali-rekordnuyu-summu-dolgov-po-alimentam-v-2025-godu/</Reference>
                    RTVI, citing FSSP
                </Word>).
            </Paragraph>
            <Paragraph>
                Maxim's lost appeal was the ст. 119 route. Under ст. 119, the court changes an amount only when the parties'
                situation has changed since it was set, so a new attempt would need new circumstances. If you tell me what
                his appeal argued, I can map which of these routes remain open to him.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T14:54:52.509251Z"
        >
            <Origin>8a60e8c4-ea4e-4fb8-a89d-0a9d9fbfa67f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does the mother have to ask the bailiff to enforce teh debt? Can't the parents come to an agreement where it
                will accrue but will simply not be collected?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T14:55:56.709899Z"
        >
            <Origin>5c3f9ff4-b477-43b9-91c6-ffa70d9a3129</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Short answer: yes, collection runs on the mother's initiative, but an "accrue, don't collect" deal binds no
                one and only partly preserves the debt. Let me verify the lookback and withdrawal rules.
            </Paragraph>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                Yes, collection runs on the mother's initiative. Bailiffs open a case only on the claimant's application (<Word>
                    <Reference>https://rulaws.ru/laws/Federalnyy-zakon-ot-02.10.2007-N-229-FZ/Statya-30/</Reference>
                    229-ФЗ ст. 30 ч. 1
                </Word>). She can also close an open case by filing her own application to end it (<Word>
                    <Reference>https://rulaws.ru/laws/Federalnyy-zakon-ot-02.10.2007-N-229-FZ/Statya-47/</Reference>
                    ст. 47 ч. 1 п. 10
                </Word>). For periodic payments like alimony, the writ can be presented at any point while payments are owed
                and for three years after they end (<Word>
                    <Reference>https://rulaws.ru/laws/Federalnyy-zakon-ot-02.10.2007-N-229-FZ/Statya-21/</Reference>
                    ст. 21 ч. 4
                </Word>). Nothing forces her to use it.
            </Paragraph>
            <Paragraph>
                So an informal "accrues but isn't collected" arrangement is possible in practice. Four limits shape what it
                actually is:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        It binds only her goodwill.
                    </Word> The money belongs to the child, held by the parent for the child's support (<Word>
                        <Reference>https://www.zakonrf.info/sk/60/</Reference>
                        СК ст. 60 п. 2
                    </Word>). Arrears of alimony for minor children cannot be forgiven by agreement between the parents (<Word>
                        <Reference>https://www.zakonrf.info/sk/114/</Reference>
                        ст. 114 п. 1
                    </Word>). A written promise not to collect therefore cannot extinguish the debt. She can present the
                    writ any day.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The debt doesn't accumulate forever.
                    </Word> Once she presents the writ, past alimony is collectible only for the three years before that
                    date (<Word>
                        <Reference>https://base.garant.ru/10105807/ae742973025e8dd281503080d4be43e3/</Reference>
                        СК ст. 113 п. 1
                    </Word>). The exception that reaches the whole period applies when nothing was withheld through the
                    payer's fault (п. 2 of the same article). Under an agreed non-collection, his fault is hard to show. In
                    effect the debt is a rolling three-year window, and anything older falls away.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No pressure while it sits.
                    </Word> Bailiff tools apply only once a case is open: exit bans, license suspension, fines. A dormant
                    writ carries none of them.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The trigger stays with her.
                    </Word> Under such a deal the father carries a liability of up to three years' arrears that she can
                    activate at will, and he has no legal way to lock in her promise. It works as leverage held by the
                    mother, not as relief for the father.
                </Line>
            </Paragraph>
            <Paragraph>
                One detail for the lawyers: whether any waiting period applies before she can re-present a writ after
                closing a case herself. The six-month and two-month waits in ст. 46 ч. 5 cover cases closed for other
                reasons, and I haven't confirmed how they apply here.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T14:58:46.849495Z"
        >
            <Origin>6a0beb91-8ab1-4daa-bf7c-adfa3feaa80c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right and so the deal would be that the father removes the travel ban and does not pursue contact with the
                children. He does not claim obstruction. She does not collect alimony. He has the power to go to court and
                make things expensive for her. She has the power to collect the debt and make things expensive for him. And
                it's a sort of Nash equillibrium
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:00:27.421163Z"
        >
            <Origin>de818d53-7edb-4219-b099-d614d4e311d2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                The structure is mutual deterrence: each side holds a threat that is cheap for them to execute and costly
                for the other, and each refrains because the other can retaliate. Strictly, that isn't a one-shot Nash
                equilibrium. In a one-shot game, Ana's best response to Maxim's restraint would be to collect, because
                collecting gains her money. What makes restraint stable is the threat of retaliation over time, which makes
                it a self-enforcing equilibrium of a repeated game. That kind of equilibrium holds only if both threats stay
                credible for the whole period and neither side's concession is spent up front. Russian law bears on both
                conditions.
            </Paragraph>
            <Heading>The two threats are shaped differently</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Ana's threat
                </Word> is very credible, because collecting costs her one application and pays her money.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Size:
                    </Word> it is capped. Arrears are collectible only for the three years before she presents the writ (<Word>
                        <Reference>https://base.garant.ru/10105807/ae742973025e8dd281503080d4be43e3/</Reference>
                        СК ст. 113 п. 1
                    </Word>). The whole-period exception requires that nothing was withheld through his fault, which is hard
                    to show when she agreed not to collect. Her lever therefore plateaus at about 36 months of alimony; it
                    doesn't grow.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Duration:
                    </Word> it lasts while the writ is presentable, meaning the payment period plus three years (<Word>
                        <Reference>https://rulaws.ru/laws/Federalnyy-zakon-ot-02.10.2007-N-229-FZ/Statya-21/</Reference>
                        229-ФЗ ст. 21 ч. 4
                    </Word>).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Maxim's threats
                </Word> come in two forms:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The children's exit ban:
                    </Word> cheap and instant. While it stands, their passports cannot be issued (<Word>
                        <Reference>https://www.consultant.ru/document/cons_doc_LAW_11376/3c9f5011b93965025dfc3c97e23f34b9dc019400/</Reference>
                        114-ФЗ ст. 10
                    </Word>).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Contact enforcement:
                    </Word> slower and costlier. It runs through bailiffs and needs a record of obstruction.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Who is tempted to deviate:
                </Word> Ana's gain from deviating is concrete money. Maxim's gain from deviating is contact, which by your
                read he doesn't much want. If that read is right, he is the player with more to lose from a breakdown, which
                supports stability.
            </Paragraph>
            <Heading>Weak link: the order of moves on the exit ban</Heading>
            <Paragraph>
                The ban's value is front-loaded. Its main effect on a family living in Georgia is at passport issuance. Once
                the children hold passports, re-filing a disagreement mainly stops them leaving Russia, which matters little
                while they live in Tbilisi. So the concession Ana values most is effectively irreversible once used.
            </Paragraph>
            <Paragraph>
                After that, Maxim's only lasting lever is the contact order. It runs until the children turn 18, but it
                works only through bailiffs and a paper record. His ability to retaliate drops at exactly the point where
                her temptation stays unchanged. A forward-looking Maxim can see this and has a reason to hold the ban as
                long as he can. Either the move order has to account for it, or the equilibrium rests entirely on the
                contact order versus the alimony debt after the passports are issued.
            </Paragraph>
            <Heading>Nothing in it is legally binding</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Alimony:
                    </Word> arrears for minor children cannot be forgiven by agreement (<Word>
                        <Reference>https://www.zakonrf.info/sk/114/</Reference>
                        СК ст. 114 п. 1
                    </Word>). An agreed amount cannot fall below what a court would award (<Word>
                        <Reference>https://www.zakonrf.info/sk/103/</Reference>
                        ст. 103 п. 2
                    </Word>). Non-collection therefore cannot be a term of any agreement; in law it stays her unilateral
                    choice whether to present the writ.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The ban and contact:
                    </Word> Maxim's withdrawal of the exit disagreement is lawful on its own. Contact can be set by a
                    written agreement between the parents (<Word>
                        <Reference>https://semkodeks.advokati-moscow.ru/sk-rf-statya-66/</Reference>
                        СК ст. 66 п. 2
                    </Word>), for example at the children's own pace.
                </Line>
            </Paragraph>
            <Paragraph>
                So the arrangement can only be self-enforcing, which is what an equilibrium is anyway. But a document that
                trades contact for support is evidence for each side's worst story about the other. It can be read as Ana
                conditioning the children's contact on money: depriving a child of contact with a parent is listed in ч. 2
                ст. 5.35 КоАП (<Word>
                    <Reference>https://vsrf.ru/lk/practice/stor_pdf/2341368</Reference>
                    ВС 32-АД24-1-К1
                </Word>). It can equally be read as Maxim trading support for absence. Each side would then hold a written
                record usable as the threat itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Net:
                </Word> the structure holds as mutual deterrence, conditional on two things. Maxim's threat has to stay
                credible after the passports are issued, and the written record must not become usable by either side
                against the other.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:02:09.731076Z"
        >
            <Origin>c2aa90b3-5590-47b3-9bda-d8634fe5d6cc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Haha oh Claude. His effort can cause Ana to have to share custody of her precious children with a dangerous
                person, and her only ability is to get him to pay money
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:02:35.385436Z"
        >
            <Origin>bc40e7a9-d606-4d63-b7f2-698123b85ee7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That changes the model. The two threats aren't comparable levers. Maxim's threat reaches the children's
                residence and their safety; Ana's reaches money. Those losses don't trade against each other, so Ana's worst
                outcome dominates any amount of alimony. Carried through, that gives two consequences.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Ana's lever doesn't create the stability; Maxim's preferences do.
                </Word> With stakes this lopsided, the 36-month alimony debt deters him only if he values that money more
                than whatever he gains by pressing. If he wants money, a small lever is enough. If he wants control or the
                children, no amount of forbearance deters him. So the deal is stable exactly as far as your read of him is
                correct, and his appeal to cut support is the main evidence for it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Ana's protection against the catastrophic outcome lies outside the deal.
                </Word> In Russian law, his effort doesn't get shared custody directly. The residence is set with Ana, and
                he already holds whatever contact the order gives him. The escalation path is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>First, bailiff enforcement: fines, and an exit restriction on Ana.</Line>
                <Line>Then, a claim to transfer the children under ст. 66 п. 3 СК.</Line>
            </Paragraph>
            <Paragraph>
                That transfer requires non-compliance that persists despite measures already applied to her (Пленум ВС № 10,
                п. 8). The court weighs the children's interests and their opinion (<Word>
                    <Reference>https://semkodeks.advokati-moscow.ru/sk-rf-statya-66/</Reference>
                    СК ст. 66
                </Word>). And FSSP guidance treats forced contact as inadmissible when a child categorically refuses and the
                refusal is the child's own (<Word>
                    <Reference>https://psyjournals.ru/nonserialpublications/cjp2017/contents/cjp2017_Lewinsky.pdf</Reference>
                    Лощинская, on FSSP letters
                </Word>).
            </Paragraph>
            <Paragraph>
                So what guards the worst outcome is Ana's compliance record, not the alimony debt. A clean record of a
                channel provided and children declining on their own blocks the path to ст. 66 п. 3 at its first step.
            </Paragraph>
            <Paragraph>That splits the problem into two layers:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The deal
                    </Word> manages the middle tier: fines, exit restrictions, and the cost of litigation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The record
                    </Word> manages the tail: transfer of the children.
                </Line>
            </Paragraph>
            <Paragraph>
                Since the tail is what actually matters, the deal must never weaken the record. A written trade of contact
                for money is the one thing that could, because it reads as Ana conditioning contact. That turns the earlier
                point from a side caution into the binding constraint on any deal.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:09:58.419723Z"
        >
            <Origin>dd7f9582-22d6-459e-8baa-a5bbbd964347</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                He cares about the money, not the children. That's what we bet. So hopefully, if so, that means the
                situation where both can but neither do anything might be stable
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:10:17.515933Z"
        >
            <Origin>7b76edb7-3fae-49f0-97db-6dd11b3af74c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, under that assumption it closes.</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Maxim's side:
                    </Word> if he values money and not the children, pressing on contact gains him nothing he wants and
                    risks activating about 36 months of collectible arrears. Restraint is his best response.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ana's side:
                    </Word> given his restraint, she gains little from collecting compared with keeping his threat dormant,
                    because the children come first for her. Restraint is her best response too.
                </Line>
            </Paragraph>
            <Paragraph>"Both can, neither does" is then self-enforcing.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Reading his request through the bet.
                </Word> His request makes sense under the bet. He lost the money fight in court, then immediately picked up
                the one lever he still has. Under a money motive, the contact request is a bargaining chip, not a sign of
                interest. That makes the deal a direct answer to it, because it trades away the chip he just put on the
                table.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What would erode it while the bet holds:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ana's lever loses value if his collectible income falls.
                    </Word> That could happen through informal work, leaving Russia, or the war-service pay exemptions. If
                    collection would yield little, her threat stops deterring.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The exit-ban timing,
                    </Word> as before: once passports are issued, his cheapest lever is spent.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Any concession from Ana beyond non-collection.
                    </Word> If pressing ever extracts something, pressing becomes profitable for a money-motivated player.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How to test the bet:
                </Word> watch how he responds to a dated channel offer. If he takes it and goes quiet, that fits money. If
                he uses it actively, or rejects it to keep the complaint alive, it doesn't.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The hedge if the bet is wrong:
                </Word> Ana's compliance record protects against the catastrophic outcome whether or not the bet is right,
                and it costs her little. Keeping that record clean is what protects the children if the bet turns out wrong.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:11:11.386772Z"
        >
            <Origin>8c8d8011-81cd-46b4-9fd2-0a465adafd83</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                He is already on fixed, and its too much for him. He already tried to get the alimony lowered in court and
                failed.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:11:39.606456Z"
        >
            <Origin>50491ba8-0eb0-4e09-8171-d3ca9dab67ef</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Those two facts strengthen the equilibrium, and they explain the timing of his request.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The fixed sum makes Ana's lever independent of his income.
                </Word> A share-of-income order shrinks when income goes informal; a fixed sum is owed regardless. So the
                first erosion risk I listed mostly drops out. What remains is collectibility, and her pressure doesn't
                depend on that either. Once alimony arrears pass 10,000 ₽, a bailiff can restrict <Word>
                    <Emphasis />
                    his
                </Word> exit from Russia (<Word>
                    <Reference>https://www.consultant.ru/document/cons_doc_LAW_71450/d55c99ef04178dea050040276efd26d516424136/</Reference>
                    229-ФЗ ст. 67 ч. 1 п. 1
                </Word>). Repeated evasion carries administrative and then criminal liability (<Word>
                    <Reference>https://harant.ru/blog/alimenty/dolzhnik-po-alimentam-ne-rabotaet-chto-delat/</Reference>
                    harant, on КоАП 5.35.1 and УК 157
                </Word>). Those tools bite whether or not he can pay.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Too much for him" sets the deal's value to him.
                </Word> Every month of forbearance saves him the full fixed amount. Deviating would cost him that stream
                plus exposure to about 36 months of arrears and the enforcement tools above, all to pursue contact he
                doesn't want. For a money-motivated player that is a large gap, and it is what makes restraint his clear
                best response.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The failed appeal removes his alternative.
                </Word> A court changes the amount only on changed circumstances (<Word>
                    <Reference>https://www.zakonrf.info/sk/119/</Reference>
                    СК ст. 119
                </Word>), and he has just lost on that ground. The deal is now his only route to relief. That fits the
                sequence: he loses the money case, then immediately raises contact. The request reads as an opening position
                in a negotiation over the alimony.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The price is on Ana's side.
                </Word> The deal costs her the alimony stream. What she gets for it is the threat to the children going
                dormant, plus the lifted exit ban.
            </Paragraph>
            <Paragraph>
                One fact decides how her side of the deal works mechanically: is the alimony currently collected through an
                open bailiff case, or paid directly?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        If a case is open:
                    </Word> her part is a visible act, an application to close it (<Word>
                        <Reference>https://rulaws.ru/laws/Federalnyy-zakon-ot-02.10.2007-N-229-FZ/Statya-47/</Reference>
                        ст. 47 ч. 1 п. 10
                    </Word>). From then on, unpaid months fall under the three-year lookback when she later re-presents the
                    writ (<Word>
                        <Reference>https://base.garant.ru/10105807/ae742973025e8dd281503080d4be43e3/</Reference>
                        СК ст. 113 п. 1
                    </Word>).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If he pays directly:
                    </Word> her part is simply never filing.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:39:08.303002Z"
        >
            <Origin>01a12151-6e3b-7a25-bb2f-d711eb31b281</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, а ты можешь сделать мне подробный и довольно точный перес аз этого твоего разговора с Дагом. Я бы
                хотела тоже узнать, что вам удалось выяснить и какие варианты решения моей проблемы с бывшим мужем
                существуют
            </Paragraph>
        </Message>
        <Message
            at="2026-10-09T15:40:13.421429Z"
        >
            <Origin>01a12151-6e45-79e0-b7fe-cb0e0b8fb286</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Вот подробный пересказ. Сам документ с хронологией получился на английском (<Word>
                    <Reference>https://claude.ai/code/artifact/1e2d9d05-f686-4744-a007-203c7d924dc2</Reference>
                    Exit-Ban Timeline
                </Word>), поэтому ниже всё по-русски. Везде речь о российском праве и практике.
            </Paragraph>
            <Heading>1. Может ли Максим через приставов закрыть тебе выезд</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Да, закон это позволяет.
                </Word> Решение о порядке общения — это требование неимущественного характера. По ст. 67 закона об
                исполнительном производстве (229-ФЗ) пристав может ограничить выезд должника, если тот без уважительных
                причин не исполнил такое требование в срок для добровольного исполнения. Порога по сумме тут нет, в отличие
                от алиментов, где нужен долг больше 10 000 ₽. Практика есть: Черемушкинский районный суд Москвы признал
                законным ограничение выезда на 6 месяцев родителю, который мешал общению по решению суда.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Это действительно блокирует паспорт.
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>По 114-ФЗ (ст. 10) при ограничении выезда паспорт не оформляется и не выдаётся.</Line>
                <Line>
                    Верховный суд дважды признал законным отказ в паспорте по этому основанию (АКПИ18-1130, АПЛ22-561). В
                    первом деле отказали выдать <Word>
                        <Emphasis />
                        уже изготовленный
                    </Word> паспорт.
                </Line>
                <Line>
                    Консульства за рубежом тоже так делают. Посольство в Вашингтоне, например, отказало в паспорте, получив
                    письмо от ФССП.
                </Line>
            </Paragraph>
            <Paragraph>
                Поэтому риск длится не до подачи 20 октября, а до момента, когда ты получишь паспорт на руки. Консульство
                оформляет его до 3 месяцев, то есть ориентировочно до 20 января. Есть ещё ст. 18 того же закона: при
                ограничении выезда паспорт может быть изъят, в том числе консульством. Этот вопрос стоит задать юристам.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Штрафы тоже есть, но идут параллельно, а не перед запретом:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>исполнительский сбор 10 000 ₽ (с января 2026);</Line>
                <Line>
                    ч. 2 ст. 5.35 КоАП: штраф 2 000–3 000 ₽; повторно 4 000–5 000 ₽ или арест до 5 суток (только если ты в
                    России).
                </Line>
            </Paragraph>
            <Paragraph>
                Самый серьёзный сценарий — передача детей отцу по п. 3 ст. 66 СК. Он возможен только при <Word>
                    <Emphasis />
                    злостном
                </Word> неисполнении, то есть когда решение продолжают не исполнять уже после применённых мер. Суд при этом
                учитывает интересы и мнение детей. Так что «сначала штрафы» верно для этой лестницы, но запрет на выезд в
                этой очереди не стоит.
            </Paragraph>
            <Heading>2. Сроки</Heading>
            <Paragraph>Запрет не может появиться сразу. Шаги идут строго по порядку:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Суд первой инстанции выдаёт Максиму исполнительный лист. Срок законом не установлен; возможно, лист у
                    него уже есть.
                </Line>
                <Line>Приставы передают лист приставу-исполнителю: до 3 дней.</Line>
                <Line>Пристав возбуждает дело: до 3 дней, копию тебе отправляют на следующий день.</Line>
                <Line>Ты считаешься уведомлённой (подробнее ниже).</Line>
                <Line>Пять рабочих дней на добровольное исполнение.</Line>
                <Line>
                    Только после этого возможен запрет. Пленум ВС № 50 (п. 22) прямо запрещает накладывать его одновременно
                    с возбуждением дела.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Сценарии (сегодня 9 октября — день 0):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        A.
                    </Word> Лист у Максима уже есть, он подаёт в понедельник, пристав действует в тот же день: запрет
                    возможен с 21 октября (день 12).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        B.
                    </Word> Лист есть, приставы тянут максимальные сроки: с 29 октября.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        C.
                    </Word> Лист выдают так же, как в одном московском деле (через 33 дня после вступления решения в силу):
                    с 10 ноября.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        D.
                    </Word> Он только сейчас запрашивает лист, и всё идёт медленно: примерно с 11 декабря.
                </Line>
            </Paragraph>
            <Paragraph>Во всех сценариях предполагается, что ты ничего не делаешь в течение своих пяти дней.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Когда начинают считаться пять дней:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Через Госуслуги:
                    </Word> уведомление считается доставленным, когда ты входишь в личный кабинет. Если заходить каждый
                    день, «уведомлена» и «знаешь» совпадают.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        По почте:
                    </Word> письмо придёт по адресу регистрации у твоего отца. Ты можешь считаться уведомлённой, даже если
                    его не получила (ст. 29 229-ФЗ). Но есть и обратная практика: Елецкий районный суд отказал в запрете,
                    потому что не было доказательств, что должник реально получил постановление.
                </Line>
            </Paragraph>
            <Heading>3. Кто решает, было ли «воспрепятствование»</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Кто:
                    </Word> пристав единолично, без заседания; утверждает старший пристав. Суд смотрит только потом, если ты
                    обжалуешь в течение 10 дней. Доказывать законность тогда должен пристав, но запрет всё это время
                    действует.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Что нужно приставу:
                    </Word> что ты была уведомлена, срок истёк и ты без уважительных причин не исполнила решение или мешала
                    общению.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Если дети сами категорически отказываются:
                    </Word> принудительное исполнение недопустимо, так ФССП пишет в письме 2016 года. Но пристав проверяет,
                    собственный ли это отказ детей или внушённый.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Уважительные причины суды понимают узко:
                    </Word> чрезвычайные, непредотвратимые обстоятельства. «Готовлю общение» к ним не относится.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Быстрый выход:
                    </Word> если ты исполнила решение, пристав обязан снять запрет не позднее следующего дня (ч. 7 ст. 67).
                    Через суд выходит неделями и месяцами.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Должен ли Максим сначала «постараться»?
                </Word> Для возбуждения дела нет. Ему достаточно подать лист. Но чтобы найти нарушение, нужно что-то
                конкретное: пропущенное по графику общение или невыполненное требование пристава. Пристав может сам
                назначить дату, время и место; в Черемушкинском деле так и было, и суд это поддержал. Сейчас единственный
                факт, который можно истолковать против тебя, — его просьба, оставшаяся без ответа.
            </Paragraph>
            <Heading>4. Сколько можно ждать</Heading>
            <Paragraph>
                До того как приставы что-то возбудили, закон срока не даёт. После уведомления — жёстко пять рабочих дней.
                Ожидание выглядит как подготовка, а не как уклонение, если:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Максиму отвечают сейчас (лучше через юристов);</Line>
                <Line>в ответе названа конкретная дата передачи контакта;</Line>
                <Line>указана понятная причина (отдельный канал связи, который передадут юристы);</Line>
                <Line>срок разумно короткий.</Line>
            </Paragraph>
            <Paragraph>Две недели с таким ответом — защитимо. Две недели молчания — риск.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Условия, при которых ожидание юристов безопасно:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Ты каждый день заходишь на Госуслуги.</Line>
                <Line>
                    Канал для Максима подготовлен заранее, чтобы передать его в течение суток после любого уведомления.
                </Line>
                <Line>Юристы проверяют, выдан ли Максиму исполнительный лист.</Line>
                <Line>Кто-то следит за почтой по адресу у отца.</Line>
            </Paragraph>
            <Paragraph>
                Ещё один вопрос к юристам: что именно решение говорит о дистанционном общении. Если там есть конкретные дни
                и время, рисков меньше.
            </Paragraph>
            <Heading>5. Алименты: как отец может от них освободиться</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Законные пути:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Усыновление ребёнка другим человеком.
                    </Word> Нужно согласие отца. Без согласия можно, если суд установит, что он больше 6 месяцев не живёт с
                    ребёнком и без уважительных причин уклоняется от воспитания и содержания (ст. 130 СК).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Совершеннолетие или эмансипация ребёнка.
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Суд снижает размер или освобождает от уплаты
                    </Word> при изменении материального или семейного положения (ст. 119 СК). Максим этот путь уже пробовал
                    и проиграл. Новая попытка требует новых обстоятельств.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Суд освобождает от долга
                    </Word> (ст. 114 п. 2), если неуплата была из-за болезни или другой уважительной причины.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Не работает:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>лишение родительских прав (от алиментов не освобождает);</Line>
                <Line>банкротство (алименты не списываются);</Line>
                <Line>прощение долга по соглашению (для несовершеннолетних запрещено, ст. 114 п. 1);</Line>
                <Line>
                    работа без официального дохода: если доходов не показывать, долг считают по средней зарплате в России.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Практические лазейки:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>серые доходы (но у Максима твёрдая сумма, так что ему это не помогает);</Line>
                <Line>
                    служба на СВО (исполнительное производство по алиментам не приостанавливается, хотя часть выплат от
                    удержаний защищена);
                </Line>
                <Line>отъезд за границу.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Кто решает, взыскивать ли:
                </Word> только ты. Приставы начинают взыскание по твоему заявлению, и ты можешь его закрыть. Но долг потом
                можно взыскать только за 3 года до предъявления листа; более ранний «сгорает».
            </Paragraph>
            <Heading>6. Идея договорённости, которую обсуждали с Дагом</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Суть:
                </Word> Максим снимает запрет на выезд детей и не добивается общения; ты не взыскиваешь алименты. У каждого
                остаётся рычаг против другого, и поэтому обоим выгодно ничего не предпринимать.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вывод:
                </Word> такое равновесие устойчиво, если верна ставка Дага, что Максима интересуют деньги, а не дети. В
                пользу этого говорят три вещи:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>алименты у него твёрдой суммой, и для него это тяжело;</Line>
                <Line>снизить их через суд он не смог;</Line>
                <Line>просьба об общении появилась сразу после проигрыша, и похоже, что это козырь для торга.</Line>
            </Paragraph>
            <Paragraph>
                Для него такая сделка — единственный оставшийся путь к облегчению. Твой рычаг (около 36 месяцев долга плюс
                запрет выезда для него самого и уголовная ответственность за злостную неуплату) от его доходов почти не
                зависит.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Слабые места:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Запрет на выезд — одноразовая уступка.
                    </Word> После выдачи паспортов его рычаг сильно слабеет, а твой остаётся. Поэтому ему может быть выгодно
                    держать запрет подольше.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ничего из этого юридически не обязывает.
                    </Word> Отказ от алиментов нельзя закрепить в соглашении: ниже судебной суммы нельзя, простить долг
                    нельзя.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Письменный обмен «общение на деньги» опасен.
                    </Word> Его можно прочитать как то, что ты ставишь общение детей с отцом в зависимость от денег, а это
                    воспрепятствование по ч. 2 ст. 5.35. Законно можно оформить отзыв его несогласия на выезд и письменное
                    соглашение о порядке общения в темпе детей (п. 2 ст. 66 СК).
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Главное:
                </Word> сделка защищает от среднего уровня проблем (штрафы, запрет выезда, расходы на суды). От самого
                худшего, передачи детей, защищает другое: чистая история исполнения решения. Например: канал передан
                такого-то числа, дети сами отказываются, их ответы приложены. Это работает независимо от того, верна ли
                ставка на сделку.
            </Paragraph>
            <Heading>7. Вопросы юристам</Heading>
            <Paragraph>
                <List ordered />
                <Line>Получил ли Максим исполнительный лист?</Line>
                <Line>
                    Какую информацию мы ждём две недели, и меняет ли она что-то в действиях внутри пятидневного срока?
                </Line>
                <Line>Какой отдел приставов будет вести дело и кто следит за почтой по адресу регистрации?</Line>
                <Line>
                    Подадут ли они твоё письменное объяснение приставу в пределах пяти дней, с доказательством передачи
                    канала?
                </Line>
                <Line>Могут ли они передать канал Максиму уже сейчас, чтобы это было зафиксировано до любой жалобы?</Line>
                <Line>
                    Как консульство применяет ст. 18 (изъятие паспорта), если ограничение появится до получения паспорта?
                </Line>
            </Paragraph>
            <Paragraph>
                Остаётся один вопрос, от которого зависит механика договорённости: алименты сейчас взыскиваются через
                приставов или Максим платит сам?
            </Paragraph>
        </Message>
    </Chapter>
);
