import { Bold, Chapter, Date, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[20 May 2026](2026-05-20)</Date>
        </Dated>
        <Title>[[ 20 May 2026 ]]</Title>
        <Message
            at="2026-05-20T14:22:30.560325Z"
        >
            <Origin>019e45c4-3924-78eb-904a-ab3b1ba73548</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I received a notice from the IRS that I owe payment because I was late, which I was. This is what the team
                said. Can you fact check:
            </Paragraph>
            <Paragraph>
                CP162A Penalty — The Math Arthur: The IRS assessed $1,020 — $255/partner × 2 partners × 2 months late. The
                1065 was due March 16, 2026 (March 15 fell on a weekend) and was filed April 16, 2026. That's 1 month + 1
                day, which the IRS rounds up to 2 full months. Our earlier estimate of ~$880 was based on the old
                $245/partner rate; the 2025 rate is $255. Can It Be Contested? — Yes, Strong Case Arthur: You have two
                paths, and the first one is nearly guaranteed: Path 1: First-Time Penalty Abatement (FTA) — Best Option
                Arthur: This is an administrative waiver, not a judgment call. The IRS grants it if:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>No penalties of the same type in the prior 3 tax years — met (the LLC didn't exist)</Line>
                <Line>All required returns are filed — met (the 1065 is filed)</Line>
                <Line>All taxes due are paid — met (partnership owes no tax)</Line>
            </Paragraph>
            <Paragraph>
                Arthur: A first-year entity qualifies by definition because there's no prior penalty history. You can
                request this by phone — call 800-829-4933 (IRS business line) with the EIN and notice number. The agent can
                apply FTA on the spot during the call. Path 2: Reasonable Cause (backup if FTA is denied) Arthur: Your
                documented disability — the same one we used for the §72(t) exception on the personal return — is a
                recognized reasonable cause under IRM 20.1.1.3.2. Combined with first-year entity status and unfamiliarity
                with the March 15 partnership deadline, this makes a compelling case. This would go via Form 843 with a
                supporting letter and medical documentation. Path NOT available: Rev. Proc. 84-35 Arthur: The notice itself
                mentions this "small partnership penalty relief," but it explicitly excludes partnerships with a nonresident
                alien partner. Ana's status as a nonresident alien is a hard disqualifier regardless of her filing
                obligation. Recommended Action Arthur: Call 800-829-4933 before June 1, 2026 and request First-Time Penalty
                Abatement. Have the EIN (33-4868229) and notice number ready. If they grant it on the call — which they
                should — the $1,020 goes to $0 and there's nothing to pay. If for some reason they deny FTA, we escalate to
                a Form 843 reasonable cause request citing disability. Arthur: Do not pay the $1,020 yet. Request abatement
                first. If it's granted, there's nothing to pay. If denied, you can pay and then file Form 843 for a refund,
                or pay by the deadline while the reasonable cause request is pending to avoid additional interest. Want me
                to draft the talking points for the phone call, or write the backup Form 843 reasonable cause letter?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:23:38.065463Z"
        >
            <Origin>019e45c4-3924-7e77-8656-4f9d449d7d46</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “IRS CP162 penalty 2025 Form 1065 late filing per partner per month rate first time
                abatement phone request”
            </Action>
            <Paragraph>Arthur's analysis is mostly correct. Here's the full fact-check:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Penalty amount and math — correct.
                </Word> For 2025 tax year returns, the IRS charges $245/partner/month per one source — but the notice itself
                says $1,020, which only works out as $255 × 2 partners × 2 months. So the notice amount is the ground truth
                and Arthur's $255 rate is confirmed by the math.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2 months assessment — correct.
                </Word> Due March 16, filed April 16. That's exactly one month to the day, but the IRS counts any part of a
                month as a full month. April 16 is the first day of month two — counts as a second month. Hence 2 months.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    FTA eligibility — correct.
                </Word> First-time penalty abatement applies to the failure-to-file penalty under IRC §6698(a)(1). FTA
                covers failure to file, failure to pay, and failure to deposit. First-year entity with no prior penalty
                history qualifies automatically.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Rev Proc 84-35 exclusion — correct.
                </Word> Rev Proc 84-35 requires all partners to be U.S. individuals or estates who filed their own returns
                on time. Ana is a nonresident alien. Hard disqualifier. Arthur is right to flag this.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phone number 800-829-4933 — correct
                </Word> for the IRS Business line. However one important issue: you're calling from Tbilisi. 800 numbers
                don't work internationally. The correct number to dial from Georgia is <Word>
                    <Bold />
                    +1-267-941-1099
                </Word> — that's the IRS international business line. Have the EIN (33-4868229) and the notice number ready.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Do not pay yet" — correct.
                </Word> Request abatement first. If granted, nothing to pay.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing Arthur didn't mention:
                </Word> If you get a difficult agent who denies FTA on the call, ask to speak to a supervisor or call back.
                FTA for a first-year entity is nearly automatic and should not require escalation, but agent quality varies.
            </Paragraph>
            <Paragraph>Bottom line: Arthur's analysis is sound. Make the call to +1-267-941-1099 before June 1.</Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:26:03.457363Z"
        >
            <Origin>019e45c7-78f7-7423-a245-fdf193c9400e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don't get this: Rev Proc 84-35 exclusion — correct. Rev Proc 84-35 requires all partners to be U.S.
                individuals or estates who filed their own returns on time. Ana is a nonresident alien. Hard disqualifier.
                Arthur is right to flag this. <Word>
                    <Reference>https://form-us-estimated-tax.pdffiller.com/</Reference>
                    pdfFiller
                </Word>
            </Paragraph>
            <Paragraph>Does that mean I can't get a rebate?</Paragraph>
            <Paragraph>
                I have a US number and can WIFI call. Do I use the 800 number? Are you sure this number is right??
            </Paragraph>
            <Paragraph>
                Phone number 800-829-4933 — correct for the IRS Business line. However one important issue: you're calling
                from Tbilisi. 800 numbers don't work internationally. The correct number to dial from Georgia is
                +1-267-941-1099 — that's the IRS international business line. Have the EIN (33-4868229) and the notice
                number ready.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:26:19.698698Z"
        >
            <Origin>019e45c7-78f7-7c32-88ef-0b03a96b4471</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two clear answers:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Rev Proc 84-35 not applying does NOT mean you can't get abatement.
                </Word> That's just one path — and Arthur correctly identified it as unavailable. The main path is FTA,
                which has nothing to do with Rev Proc 84-35. FTA is a completely separate administrative waiver based on
                your clean penalty history. Ana's status doesn't affect FTA eligibility at all. You're still almost certain
                to get the $1,020 waived.
            </Paragraph>
            <Action>Searched the web for “IRS business specialty tax line phone number 800-829-4933 verify 2026”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    On Rev Proc 84-35:
                </Word> No — that just means one specific automatic waiver isn't available to you. It has nothing to do with
                FTA. You still have two perfectly valid paths to get the $1,020 waived — FTA first, reasonable cause as
                backup. Rev Proc 84-35 being off the table is a non-issue.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the phone number:
                </Word> 800-829-4933 is confirmed as the correct IRS business tax line, Monday–Friday 7am–7pm local time. If
                you have a US number and can WiFi call, use the 800 number — that's easier and you'll get through to the
                same line. No need to use the international number.
            </Paragraph>
            <Paragraph>
                One practical tip from the research: call early morning between 7am and 10am or late afternoon between 3pm
                and 7pm, and avoid Mondays which are the busiest day. Given you're in Tbilisi (UTC+4), 7am Eastern is 3pm
                your time, so mid-afternoon Tbilisi time is your window.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:27:20.514937Z"
        >
            <Origin>019e45c8-a874-7e57-a31c-765a4e001209</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What do I say exactly? Like the truth is that I thought the taxes were due on April 15th...
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:27:30.799024Z"
        >
            <Origin>019e45c8-a875-730e-b6a8-2ea3d375600f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's actually a reasonable cause argument, not FTA. For FTA you don't need to explain anything — you just
                ask for it. Here's exactly what to say:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    When the agent picks up:
                </Word>
            </Paragraph>
            <Paragraph>
                "Hi, I'm calling about a CP162A penalty notice for a partnership return. I'd like to request first-time
                penalty abatement."
            </Paragraph>
            <Paragraph>They'll ask you to verify identity. Have ready:</Paragraph>
            <Paragraph>
                <List />
                <Line>EIN: 33-4868229</Line>
                <Line>Business name: Digital Narrative Art LLC</Line>
                <Line>Your name as responsible party</Line>
                <Line>The notice number from the CP162A</Line>
                <Line>The tax year: 2025</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    After you verify:
                </Word>
            </Paragraph>
            <Paragraph>
                "This is the first year the partnership existed. We have no prior penalty history. I'm requesting first-time
                abatement under the IRS administrative waiver."
            </Paragraph>
            <Paragraph>
                That's it. Don't explain why it was late. Don't mention April 15th. Don't mention anything about thinking
                the deadline was different. FTA doesn't require a reason — the moment you start giving reasons you're
                shifting into reasonable cause territory, which is harder and slower.
            </Paragraph>
            <Paragraph>
                The agent will either approve it on the spot or say it needs to be reviewed. If approved, ask them to
                confirm the penalty is being abated and get a confirmation number.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If they say FTA doesn't apply:
                </Word>
            </Paragraph>
            <Paragraph>
                "Can you tell me why it doesn't qualify? The entity had no prior penalties, all returns are filed, and
                there's no tax owed."
            </Paragraph>
            <Paragraph>
                If still denied, don't argue. Say thank you, hang up, and we escalate to a written reasonable cause request
                via Form 843. But that's unlikely — first-year entity FTA is nearly automatic.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:29:48.984079Z"
        >
            <Origin>019e45ca-ed85-7364-b615-163c47010fc3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here's info from the notice. I want to know what id they will ask for. Also, do I call the number they give
                here or the one you give:
            </Paragraph>
            <Paragraph>
                Department of the Treasury Internal Revenue Service Ogden, UT 84201-0039 063510.121153.343714.21905 1 AB
                0.641 700 ייייייייייייייייייי DIGITAL NARRATIVE ART LLC DOUGLAS MICHAEL RUBINO MBR 500 WESTOVER DR 36118
                SANFORD NC 27330-8941 We charged a penalty for failure to file your partnership return on time. Balance due:
                $1,020.00 We charged a penalty because you didn't file your return on time. When a return is mailed or
                transmitted after the due date for filing, it isn't considered filed until we've received it in processable
                form. A penalty is charged for each month the return is late. Summary Failure to file penalty Balance due by
                June 1, 2026 Notice CP162A Tax period December 31, 2025 Notice date May 11, 2026 Employer ID number
                33-4868229 To contact us Phone 800-829-0115 Page 1 of 4 $1,020.00 $1,020.00 IRS DIGITAL NARRATIVE ART LLC
                DOUGLAS MICHAEL RUBINO MBR 500 WESTOVER DR 36118 SANFORD NC 27330-8941 Notice Notice date Employer ID number
                Continued on back... CP162A May 11, 2026 33-4868229 Payment INTERNAL REVENUE SERVICE OGDEN, UT 84201-0039
                יייייייייייייייייייייייייייייייווייייייי Make your check or money order payable to the United States
                Treasury. Write your Employer ID number (33-4868229), the tax period (December 31, 2025), and the form
                number (1065) on your payment and any correspondence. Amount due by June 1, 2026 334868229 DT DIGI O6 2
                202512 670 00000102000 $1,020.00 What you need to do immediately If we don't hear from you Notice CP162A Tax
                period December 31, 2025 Notice date May 11, 2026 Employer ID number 33-4868229 Page 2 of 4 If you agree
                with the amount due Pay the amount due of $1,020.00 by June 1, 2026, to avoid additional interest charges.
                Pay online or by phone using the Electronic Federal Tax Payment System (EFTPS). Enroll at IRS.gov/EFTPS.
                Once enrolled, you can also schedule payments and receive email notifications. • If you plan to mail a
                payment, consider the electronic options at IRS.gov/payments. • If you pay by check, money order, or
                cashier's check, make sure it's payable to the U.S. Treasury. Can't pay it all now? • Apply for a payment
                plan (installment agreement) at IRS.gov/OPA Consider an offer in compromise at IRS.gov/OIC • Request a
                temporary collection delay at IRS.gov/TempCollection Delay If you disagree with the balance due Call
                800-829-0115 or the IRS representative you've been working with to review your account, have your account
                information available when you call. Penalty relief You may qualify for penalty relief as outlined below.
                Note: Generally, if you've been working with an IRS representative, they determined you don't qualify for
                penalty relief. If you think you may qualify, you can discuss your specific facts when you contact them.
                We'll assume you agree with the information in this notice.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:29:55.087681Z"
        >
            <Origin>019e45ca-ed85-70a4-8174-7d95a4839c85</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The notice gives <Word>
                    <Bold />
                    800-829-0115
                </Word> — use that number, not 800-829-4933. The notice number is the authoritative contact for your
                specific case.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What they'll ask to verify your identity:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Business name: Digital Narrative Art LLC</Line>
                <Line>EIN: 33-4868229</Line>
                <Line>Your name: Douglas Michael Rubino</Line>
                <Line>Your title: Member</Line>
                <Line>The notice number: CP162A</Line>
                <Line>Notice date: May 11, 2026</Line>
                <Line>Tax period: December 31, 2025</Line>
                <Line>Your address: 500 Westover Dr #36118, Sanford NC 27330</Line>
            </Paragraph>
            <Paragraph>Have all of that in front of you before you dial.</Paragraph>
            <Paragraph>
                One thing the notice says worth flagging: "Generally, if you've been working with an IRS representative,
                they determined you don't qualify for penalty relief." You haven't been working with a representative, so
                that caveat doesn't apply to you. You're calling fresh.
            </Paragraph>
            <Paragraph>
                Everything else stands — ask for first-time penalty abatement, don't explain why it was late, just state
                it's the first year the entity existed and there's no prior penalty history. The script I gave you is still
                correct, just use 800-829-0115.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:31:28.515361Z"
        >
            <Origin>019e45cc-7156-78e1-81bb-59315a226242</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>That's all I need? THere's no id for the charge?</Paragraph>
        </Message>
        <Message
            at="2026-05-20T14:31:32.146659Z"
        >
            <Origin>019e45cc-7156-774b-8371-edd200735bcd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The notice number IS the identifier for the charge. When you say "I'm calling about notice CP162A dated May
                11, 2026" the agent pulls up exactly that assessment. That's all they need to locate it.
            </Paragraph>
            <Paragraph>But have the full set ready just in case they ask:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Notice number: <Word>
                        <Bold />
                        CP162A
                    </Word>
                </Line>
                <Line>
                    Notice date: <Word>
                        <Bold />
                        May 11, 2026
                    </Word>
                </Line>
                <Line>
                    EIN: <Word>
                        <Bold />
                        33-4868229
                    </Word>
                </Line>
                <Line>
                    Tax period: <Word>
                        <Bold />
                        December 31, 2025
                    </Word>
                </Line>
                <Line>
                    Balance: <Word>
                        <Bold />
                        $1,020.00
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>That covers every identifier on the notice. You're good.</Paragraph>
        </Message>
    </Chapter>
);
