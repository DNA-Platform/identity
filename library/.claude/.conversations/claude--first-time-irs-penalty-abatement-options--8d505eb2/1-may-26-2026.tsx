import { Append, Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Title>[[ 26 May 2026 ]]</Title>
        <Message
            at="2026-05-26T15:11:21.448076Z"
        >
            <Origin>019e64d7-1ff6-7200-b85a-c5a96c24f00a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Alright I have a first-time IRS penalty. We worked on taxes, Here's a bit of info we put together:
            </Paragraph>
            <Paragraph>
                "Arthur: Call 800-829-0115 before June 1, 2026 and request First-Time Penalty Abatement. Have the EIN
                (33-4868229) and notice number ready. If they grant it on the call — which they should — the $1,020 goes to
                $0 and there's nothing to pay. "Hi, I'm calling about a CP162A penalty notice for a partnership return. I'd
                like to request first-time penalty abatement." What they'll ask to verify your identity:
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
            <Paragraph>
                After you verify: "This is the first year the partnership existed. We have no prior penalty history. I'm
                requesting first-time abatement under the IRS administrative waiver.""
            </Paragraph>
            <Paragraph>
                I called and the automated line said they didn't have the capacity to take my call and to try again later.
                Is this a request I can make online
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:12:34.098759Z"
        >
            <Origin>019e64d7-1ff6-7f46-b0ab-95940f72e99a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll check whether the IRS currently offers an online path for this — their online account services have
                been expanding, so it's worth verifying rather than guessing.
            </Paragraph>
            <Action>Searched the web for “request first-time penalty abatement online IRS business account”</Action>
            <Action>
                Searched the web for “CP162A respond online IRS document upload tool penalty abatement partnership”
            </Action>
            <Paragraph>
                Short answer: there's no dedicated "click here for first-time abatement" button on the IRS site for a CP162A
                — the officially documented routes are still phone or in writing. The IRS says some penalty relief requests
                can be accepted over the phone if you call the number on your notice, and if they can't approve it that way
                you request it in writing with Form 843. But there are two things worth knowing before you spend more time
                fighting the phone tree.
            </Paragraph>
            <Paragraph>
                First, and this might matter a lot for you specifically: the IRS made first-time abatement <Word>
                    <Bold />
                    automatic
                </Word> starting this filing season. For returns filed in 2026 and after, qualifying taxpayers don't have to
                do anything — if an eligible penalty is assessed, the IRS should automatically reverse it, and the
                recommendation is to monitor your IRS account and check your transcripts online to confirm the automatic
                abatement was applied. Your penalty is on the 2025 partnership return (1065), which was filed in 2026 —
                exactly the window this covers. You got the CP162A anyway, which means either the automatic reversal hasn't
                posted yet or it didn't fire. So the genuinely useful "online" step is to log into your IRS business account
                and look at the account transcript: the abatement may already be in motion, in which case you don't need to
                make the request at all. If the automatic abatement was not applied, you can still request FTA by phone or
                by mail.
            </Paragraph>
            <Paragraph>
                Second, the closest thing to doing it online deliberately is the IRS <Word>
                    <Bold />
                    Document Upload Tool
                </Word>. Some notices now print an access code that lets you upload your written response instead of mailing
                it. Check your CP162A for an upload-tool reference or access code — if it's there, you can send a short
                written FTA request that way. If it's not, mailing a written statement or Form 843 to the address on the
                notice is the reliable fallback, and a paper request can't be turned away for "no capacity" the way the
                phone line just did to you.
            </Paragraph>
            <Paragraph>A couple of practical notes:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The "we can't take your call" recording is routine. Lines are emptiest right when they open in the
                    morning (call as early as you can), and Tuesday–Thursday tends to be lighter than Monday. The phone is
                    still the fastest path because they can grant it on the spot.
                </Line>
                <Line>
                    The June 1 date on your notice is almost certainly the pay-by date to stop interest accruing, not a
                    deadline on the abatement itself — you don't lose the right to request FTA if you call or write after
                    it. So don't panic if the phone keeps failing through the 1st.
                </Line>
                <Line>
                    Backup basis if FTA ever gets contested: a partnership of ten or fewer individual members can also get
                    failure-to-file penalties removed under reasonable cause (Rev. Proc. 84-35). FTA is cleaner and you
                    should win on it, but that's in your back pocket.
                </Line>
            </Paragraph>
            <Paragraph>
                Want me to draft the short written FTA statement you could either upload via the Document Upload Tool or
                mail? I can put it in the language the IRS expects, using the notice details you already have.
            </Paragraph>
            <Paragraph>
                One caveat — I'm not your accountant, and Arthur clearly already worked the substance of this with you, so
                treat me as a second set of hands on the logistics rather than the tax authority here.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:15:36.154267Z"
        >
            <Origin>019e64db-03e4-7be6-b888-095cc0c2d9e2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well I lost my expert on accounting in the switch. Arthur did the hands on stuff with the forms and
                coordinating the teams, but he relied on a conversation we had here for confirmation on everything we had
                done. Let me monitor the irs website and let me upload a document if possible. Do some research. Really try
                to confirm that auomatic abatement. That would be amazing. Let's see if there's any minimal thing we need to
                do to trigger that. Please give me simple step by step instructions
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:17:49.610983Z"
        >
            <Origin>019e64db-03e4-7d8e-bded-d2d1ee93f2c7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me dig into this properly — I want to confirm whether the automatic FTA actually reaches your specific
                penalty (the partnership failure-to-file penalty under §6698, which is what CP162A is), and whether an
                already-assessed penalty gets reversed automatically or needs a nudge.
            </Paragraph>
            <Action>
                Searched the web for “IRS automatic first time abate 2026 announcement effective date penalties covered”
            </Action>
            <Paragraph>
                Strongly confirmed so far. Let me get two more specifics: what counts as the "minimal action" even when it's
                automatic, and exactly how a partnership monitors this online (the business account vs. transcript question
                matters here).
            </Paragraph>
            <Action>Fetched https://catalyst-cpa.com/irs-first-time-penalty-abatement-now-automatic-in-2026/</Action>
            <Action>
                Searched the web for “IRS Business Tax Account partnership view notices transcript 2026 document upload tool
                CP162”
            </Action>
            <Paragraph>Good news first, then the honest caveat, then the steps.</Paragraph>
            <Paragraph>
                The automatic FTA is real and well-documented. National Taxpayer Advocate Erin Collins formally announced
                that beginning with tax year 2025 (returns filed in 2026), the IRS will automatically apply first-time
                abatement to all qualifying taxpayers without any action required on their part. It applies to penalties
                assessed on tax years beginning 2025 and later, and previously taxpayers had to actively request the relief
                by phone or mail. Your penalty is on the 2025 partnership return, so it's squarely inside the covered
                window, and FTA covers three penalty types: failure-to-file, failure-to-pay, and failure-to-deposit — CP162A
                is the partnership failure-to-file penalty, which is the first of those. On eligibility, you need three
                years of clean penalty history, all required returns filed, and tax paid or in a payment arrangement. Since
                this is the partnership's first year, there's no prior history to disqualify you — you're clean by default.
                And there's no underlying tax on a 1065, so the "tax paid" condition isn't even in play here; the only
                compliance requirement that matters is that the return is actually filed and processed.
            </Paragraph>
            <Paragraph>
                Now the caveat I won't paper over: "automatic" doesn't mean "guaranteed to have happened." Every source
                stresses the same thing — automatic does not mean invisible; you must check your IRS account or transcript
                to confirm the abatement was applied. And this is a brand-new rollout in its first season. FTA has always
                applied to the partnership §6698 penalty when requested manually, but I can't promise you that the IRS's new
                automatic machinery reliably catches <Word>
                    <Emphasis />
                    this specific
                </Word> penalty type in year one rather than focusing first on the high-volume 1040 and payroll penalties.
                So the right posture is: assume it'll likely resolve itself, verify that it did, and be ready to request it
                manually if it doesn't. There is no form to "opt in" or trigger it — the only real actions are verifying
                and, if needed, nudging.
            </Paragraph>
            <Paragraph>Here's the simple sequence.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 1 — Confirm the return is on file.
                </Word> FTA requires filing compliance, so the 1065 needs to show as filed and processed. Arthur coordinated
                the forms, so this is probably done, but it's the one prerequisite, so confirm it before anything else.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2 — Register for the IRS Business Tax Account (not your personal account).
                </Word> This is the key detail people get wrong. Your personal Online Account won't show the partnership. As
                of the 2026 expansion, the portal is now open to partnerships filing Form 1065, and a general partner or
                managing partner of an LLC can register for full access — letting them view the business profile, check
                balances, view tax transcripts, and read select IRS notices. As the Member managing Digital Narrative Art
                LLC, you register as the "Designated Official." Go to irs.gov, search "Business Tax Account," and register
                with ID.me. One requirement: online access requires you to be the responsible party listed on Form SS-4 (or
                as updated via Form 8822-B) for the EIN — that should be you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 3 — Watch for the balance to go to $0.
                </Word> Inside the Business Tax Account, check the balance for the December 31, 2025 tax period and pull the
                account transcript. If the automatic FTA fires, you'll see the penalty reversed and the balance drop to
                zero. Check roughly weekly. Give it until around the notice's pay-by date plus a couple of weeks before
                assuming it isn't coming.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 4 — If it doesn't post, then act — and the Document Upload Tool is your online route.
                </Word> The IRS Document Upload Tool lets you securely upload documents in response to an IRS letter or
                notice. Look at your physical CP162A for an "upload your documents" line or an access code — if it's there,
                you can upload a short written FTA request at irs.gov/upload instead of mailing or calling. Not every notice
                is upload-eligible, so if there's no upload reference on yours, the fallbacks are a written request mailed
                to the address on the notice (or another try at the phone line, which can grant it on the spot).
            </Paragraph>
            <Paragraph>Two more things worth knowing, since you're flying without the accountant:</Paragraph>
            <Paragraph>
                The "June 1" date isn't an FTA deadline. It's almost certainly the pay-by date to stop interest accruing.
                You don't lose the right to abatement by passing it, and FTA removes the penalty <Word>
                    <Emphasis />
                    and
                </Word> the related interest together — so there's no real reason to rush to pay $1,020 that's likely going
                to be wiped anyway.
            </Paragraph>
            <Paragraph>
                And you have a strong backup basis if FTA ever stalls. The IRS's own CP162A page says a small partnership of
                10 or fewer partners may qualify for a waiver of the late-filing penalty under Revenue Procedure 84-35,
                where reasonable cause is presumed if the partnership had no more than 10 partners and each was a natural
                person. Digital Narrative Art LLC almost certainly fits that, which means even in the unlikely event
                automatic FTA misses you, you have two independent ways to get to $0.
            </Paragraph>
            <Paragraph>
                Want me to draft the short written FTA request now so it's ready to upload or mail the moment Step 3 shows
                the penalty hasn't cleared? I can write it in the form the IRS expects, using your notice details — that way
                you're not scrambling later.
            </Paragraph>
            <Paragraph>
                One reminder: I'm not a tax professional, and you lost the person who was doing the hands-on coordination,
                so for anything where real money or a filing position is on the line, it's worth having a CPA or EA glance
                at it. What I can do well is keep the logistics straight and have the pieces ready.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:27:09.120975Z"
        >
            <Origin>019e64e5-965a-7ed5-8a26-fd41f711de75</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I want to create a business account?</Paragraph>
            <Attachment>Uploaded “1779809223255_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-26T15:27:25.338900Z"
        >
            <Origin>019e64e5-965a-7435-a853-b9f8d7a0440e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — the middle one, <Word>
                    <Bold />
                    Business
                </Word>. That's the Business Tax Account, and it's the only one of the three that shows partnership info
                (notice the bullets: account balance, tax records, and "Notices and letters" — that's where your CP162A and
                the abatement will show up). The Individual account on the left won't show anything about Digital Narrative
                Art LLC, and Tax Pro is for representing other people.
            </Paragraph>
            <Paragraph>Click "Sign in or create account" under Business.</Paragraph>
            <Paragraph>What to expect as you go:</Paragraph>
            <Paragraph>
                You'll verify your identity through ID.me. If you already have an ID.me login from the personal/individual
                side, the same credentials work — you don't make a second one.
            </Paragraph>
            <Paragraph>
                After ID.me, it'll ask you to set up access for the business. Register as the <Word>
                    <Bold />
                    Designated Official
                </Word> (full access) for the LLC — that's the general/managing member, which is you. Have the EIN
                (33-4868229) handy.
            </Paragraph>
            <Paragraph>
                The one gotcha: online access requires that you're the <Word>
                    <Bold />
                    responsible party
                </Word> the IRS has on file for that EIN (from the original SS-4 application, or a later Form 8822-B
                update). If you set up the EIN, that's you and it'll go through. If for some reason Arthur or someone else
                is listed as responsible party, the system may block you — in that case you'd fall back to the Document
                Upload Tool or mail instead.
            </Paragraph>
            <Paragraph>
                Once you're in, go to the December 31, 2025 tax period and check the balance / pull the account transcript.
                You're looking for the $1,020 to reverse to $0. If it's already gone, the automatic FTA fired and you're
                done. If it's still sitting there, that's your signal to send the written request — say the word and I'll
                have it drafted and ready.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:29:31.508255Z"
        >
            <Origin>019e64e7-c1fa-7b28-b580-c3a78a9e59db</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I have to add a business. Which do I pick</Paragraph>
            <Attachment>Uploaded “1779809364861_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-26T15:29:36.926345Z"
        >
            <Origin>019e64e7-c1fa-74e4-b638-e4ab67d5047a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Designated Official
                </Word> — the first one.
            </Paragraph>
            <Paragraph>
                That's the full-access role: "Take tax-related actions in the highest-level role and manage users on behalf
                of your entity." It's the one that lets you see the account balance, the notices, and pull the transcript —
                which is exactly what you need to confirm whether the $1,020 cleared.
            </Paragraph>
            <Paragraph>
                The "Partner" option next to it only gives you "limited tax details for the years you have a Schedule K-1" —
                that's the view-only role for a partner who isn't running the entity. It wouldn't reliably show you the
                penalty status or let you act on it.
            </Paragraph>
            <Paragraph>
                Pick Designated Official, then have the EIN (33-4868229) ready. The thing it's checking behind the scenes is
                whether you're the responsible party on file for that EIN — if you set up the LLC's EIN, this should go
                straight through.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:31:00.143784Z"
        >
            <Origin>019e64e9-1b33-7cf7-80f4-156e979460c8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This is not going to be something fast</Paragraph>
            <Attachment>Uploaded “1779809452972_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-26T15:32:01.561431Z"
        >
            <Origin>019e64e9-1b33-71ec-8dc5-9227b62a84aa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and your instinct is worth listening to here. That PIN arrives by mail in 5–10 business days,
                and it goes to the entity address the IRS has on file — which for Digital Narrative Art LLC is almost
                certainly your Sanford mailbox, not anywhere near Tbilisi. So realistically it's the 5–10 days <Word>
                    <Emphasis />
                    plus
                </Word> however long Traveling Mailbox takes to scan it to you. Call it two to three weeks before you can
                even log in. There's no faster online way to see the business transcript — the only alternatives are mail
                (Form 4506-T) or the phone line, both also slow.
            </Paragraph>
            <Paragraph>
                So let me reassess the whole thing, because I think we were over-engineering the monitoring.
            </Paragraph>
            <Paragraph>
                The business account was only ever for <Word>
                    <Emphasis />
                    verification
                </Word> — to watch whether the $1,020 cleared. It doesn't trigger or speed up the abatement; that happens
                (or doesn't) regardless of whether you're watching. So gating this on a two-week registration buys you
                visibility you don't strictly need. I'd set the business account aside for now. It's genuinely worth having
                for the LLC long-term — future notices, transcripts, payments all in one place — so do the registration
                eventually, just don't let this penalty wait on it.
            </Paragraph>
            <Paragraph>Here's the cleaner path, none of which needs the PIN:</Paragraph>
            <Paragraph>
                The likely outcome is the penalty auto-abates and you do nothing. You're already monitoring your mail
                through Traveling Mailbox, and that <Word>
                    <Emphasis />
                    is
                </Word> a monitor — if it abates, no further notices come; if it doesn't, you'll get a balance-due follow-up
                notice in a few weeks. That follow-up is your signal.
            </Paragraph>
            <Paragraph>
                But given you've lost your accountant and don't want this hanging over you, I'd actually just fire off the
                written FTA request now rather than wait and watch. It forces a determination, it doesn't conflict with the
                automatic process (if they see you qualify for FTA, they apply FTA regardless of how you asked), and it's
                belt-and-suspenders against the one real uncertainty — whether the new automatic system reliably catches the
                partnership penalty in its first year. And it can go through the Document Upload Tool, which needs no PIN:
                check your physical CP162A for an upload reference or access code, then go to irs.gov/upload. No upload code
                on the notice? Then mail it to the address printed on the notice. Either way, no two-week wait.
            </Paragraph>
            <Paragraph>
                So the decision is really: passively wait and watch the mail, or send the request now and be done thinking
                about it. For $1,020 with two solid abatement bases and no underlying tax, both are low-risk — it's just a
                question of whether you'd rather not touch it or rather close the loop.
            </Paragraph>
            <Paragraph>
                My vote is close the loop. Want me to draft the written request now? You'd have it ready to either upload or
                mail today, and you can skip the whole PIN saga.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:33:47.742844Z"
        >
            <Origin>019e64eb-aac9-7522-925f-3a4a9d9ff7db</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Well I already got this piece of mail</Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-26T15:35:40.597101Z"
        >
            <Origin>019e64eb-aaca-7c10-b5b0-518ffc84b18c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Now I can see the actual notice, and it changes the recommendation in a useful way.</Paragraph>
            <Paragraph>
                First, what the notice confirms: it's a 2-partner LLC, $255 per partner per month, 2 months late — that's
                your $1,020. The "balance due by June 1" is the pay-by date to stop interest, not a deadline on getting the
                penalty removed, so nothing is lost if a relief request lands after the 1st. And there's no Document Upload
                Tool access code printed on it, so scratch my earlier suggestion to look for one — the notice's own channels
                are mail to the Ogden address or the phone line.
            </Paragraph>
            <Paragraph>
                The bigger thing: the notice itself walks you straight to <Word>
                    <Bold />
                    Revenue Procedure 84-35
                </Word>, the small-partnership waiver, and lays out the criteria. For a 2-partner LLC that's actually a
                better tool than first-time abatement, for a reason worth understanding. FTA is a one-time card — you can
                only use it once in a clean three-year window. Rev. Proc. 84-35 is a separate "reasonable cause is presumed"
                waiver specific to small partnerships, and using it does <Word>
                    <Emphasis />
                    not
                </Word> burn your FTA. So if you request 84-35 and it's granted, the penalty goes to $0 <Word>
                    <Emphasis />
                    and
                </Word> your first-time abatement stays in your pocket for some future year. If instead the automatic FTA
                quietly fires on its own, the penalty also goes to $0 — but it spends your FTA. Same dollar outcome,
                different strategic cost. For a small entity that might slip again someday, 84-35 is the smarter play, and
                the notice is inviting you to use it.
            </Paragraph>
            <Paragraph>
                There's one criterion on 84-35 to verify before we lean on it. The notice requires that <Word>
                    <Emphasis />
                    every partner filed a timely income tax return
                </Word> (an extension counts as timely) reporting their share of the partnership items. The other three
                criteria you clearly meet — 2 partners, both individuals, equal/consistent shares. So the question that
                decides this:
            </Paragraph>
            <Paragraph>
                Who's the second partner — is it Ana? — and did both of you file your personal 2025 returns, or extensions,
                on time? If yes, 84-35 is clean and I'd go that route. If a partner didn't (or there's a non-US-filer
                wrinkle with Ana), we fall back to FTA, which doesn't have that per-partner requirement.
            </Paragraph>
            <Paragraph>
                On the logistics, since you're in Tbilisi and the notice wants a signed statement (under penalties of
                perjury) returned by mail to Ogden: international mail from Georgia is slow and clumsy. Cleaner options are
                to have Traveling Mailbox send the signed letter outbound for you, or try uploading at irs.gov/upload even
                without a code — it sometimes accepts a notice response if you enter the notice number and EIN. Worst case,
                the phone line can grant FTA verbally if you get through, though 84-35 they'll want in writing.
            </Paragraph>
            <Paragraph>
                Tell me who the second partner is and whether you both filed or extended on time, and I'll draft the 84-35
                request — correctly worded, stating each criterion, ready for your signature. If the per-partner-filing
                piece doesn't hold, I'll draft it as an FTA request instead. Either way you'll have the document today; the
                only slow part is getting a signed copy into the mail.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:36:26.005264Z"
        >
            <Origin>019e64ee-1562-79b1-a274-5314b8ec8a95</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Ana is Russian. Things can be complicated. We want FTA</Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:38:14.917693Z"
        >
            <Origin>019e64ee-1562-7525-b322-a1283fbaccd8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good call, and here's why it's clean: FTA looks only at the <Word>
                    <Emphasis />
                    partnership's
                </Word> own record — its penalty history and whether it has filed its required returns. It asks nothing
                about whether each individual member filed a personal return. So Ana's situation never enters the picture.
                That's exactly the prong that made 84-35 messy, and FTA simply doesn't have it. You also confirmed the key
                fact yourself at the start: this is the partnership's first year, no prior penalty history. A brand-new
                entity has no prior three years to be dinged on, so the clean-history requirement is satisfied
                automatically, and a 1065 has no tax due, so there's nothing to pay first. You qualify.
            </Paragraph>
            <Paragraph>Here's the request, ready to use:</Paragraph>
            <Paragraph>&#91;Today's date&#93;</Paragraph>
            <Paragraph>Internal Revenue Service Ogden, UT 84201-0039</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Re: Request for First-Time Penalty Abatement
                </Word> Taxpayer: Digital Narrative Art LLC EIN: 33-4868229 Notice: CP162A, dated May 11, 2026 Tax period:
                December 31, 2025 Form: 1065 Penalty: Failure to file — $1,020.00
            </Paragraph>
            <Paragraph>To Whom It May Concern:</Paragraph>
            <Paragraph>
                I am writing on behalf of Digital Narrative Art LLC to request abatement of the failure-to-file penalty of
                $1,020.00 assessed under IRC Section 6698, as shown on Notice CP162A dated May 11, 2026, for the tax period
                ending December 31, 2025.
            </Paragraph>
            <Paragraph>
                I respectfully request relief under the IRS First-Time Abate (FTA) administrative waiver. The partnership
                meets the criteria:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The tax year ending December 31, 2025 is the first year of the partnership's existence. The partnership
                    was not required to file, and did not file, a return for any prior year, and therefore has no prior
                    penalty history.
                </Line>
                <Line>
                    The partnership has filed all currently required returns, including the Form 1065 for the period at
                    issue.
                </Line>
                <Line>There is no outstanding tax due on the account.</Line>
            </Paragraph>
            <Paragraph>
                Because this is the partnership's first filing and its compliance history is clean, it qualifies for the
                First-Time Abate waiver. I ask that the $1,020.00 penalty and any associated interest be removed. If for any
                reason the partnership does not qualify for First-Time Abate, please treat this as a request to consider any
                other penalty relief for which it may be eligible.
            </Paragraph>
            <Paragraph>
                Thank you for your consideration. Please contact me at &#91;your phone number&#93; if you need anything
                further.
            </Paragraph>
            <Paragraph>Sincerely,</Paragraph>
            <Paragraph>
                Douglas Michael Rubino Member, Digital Narrative Art LLC 500 Westover Dr #36118 Sanford, NC 27330-8941
            </Paragraph>
            <Paragraph>
                Note there's no "under penalties of perjury" line — that's a Rev. Proc. 84-35 requirement, not an FTA one,
                so a plain signed letter is all FTA needs.
            </Paragraph>
            <Paragraph>Getting it to the IRS from Tbilisi, in order of least hassle:</Paragraph>
            <Paragraph>
                Try the upload tool first — go to irs.gov/upload. Even though your notice has no access code printed on it,
                the tool will often still let you respond if you enter the notice number (CP162A) and EIN. If it accepts,
                you upload a signed scan and you're done, no mail.
            </Paragraph>
            <Paragraph>
                If upload won't take it, mail it to the address at the very top of page 1 of your physical notice (that's
                the Ogden service center, 84201-0039, matching the payment stub). Since you're abroad, the simplest path is
                having Traveling Mailbox send it outbound for you — you sign a scan, they print and mail it domestically.
            </Paragraph>
            <Paragraph>
                Want me to turn this into a print-ready PDF once you've dropped your phone number in? Give me the number (or
                tell me to leave it off) and confirm the wording looks right, and I'll generate a clean signed-letter file
                you can hand to the upload tool or to Traveling Mailbox.
            </Paragraph>
            <Paragraph>
                Two honest flags before you send. First, the automatic FTA may still wipe this on its own — sending the
                letter doesn't conflict with that, it just forces the determination instead of waiting, which is what you
                wanted. Second, separate from this penalty: a foreign member in a US LLC can trigger extra partnership
                filing obligations (foreign-partner withholding forms and the like). That has nothing to do with getting
                this $1,020 removed, but with your accountant gone, it's worth having a CPA or EA glance at the LLC's setup
                at some point so it doesn't become next year's surprise. I'm not a tax professional — I'm keeping the
                logistics straight, not giving a filing opinion.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:39:33.289076Z"
        >
            <Origin>019e64f0-f181-78ee-8889-94e2e60e54a1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I just want a simple way to check the FTA. There must be. Basically you are saying I got charged $1020 but
                it will be cleared. I can't just let that hang forever. I have to check it. How? Do I just keep calling til
                I get through?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:40:25.876016Z"
        >
            <Origin>019e64f0-f181-7fa0-9e67-3672a0a76f8b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Honest answer: right now the phone is your only same-day way to actually check, and yes — getting through
                means calling and sometimes getting bounced until you land. There isn't an instant online lookup for a
                business penalty balance. The one online window that would show it is the Business Tax Account, and that's
                locked behind the PIN they mail you. So until that PIN arrives, online checking isn't available to you, full
                stop. I'd rather tell you that plainly than send you hunting for a button that isn't there.
            </Paragraph>
            <Paragraph>
                But here's the reframe that makes the phone worth the hassle: a call doesn't just <Word>
                    <Emphasis />
                    check
                </Word> the status — it <Word>
                    <Emphasis />
                    resolves
                </Word> it. If you get through, the rep pulls up the account, tells you on the spot whether the $1,020 is
                still there, and can grant the FTA verbally right then. One good connection and you walk away with a
                definite answer and the penalty gone. That's better than the online account would even give you.
            </Paragraph>
            <Paragraph>
                On getting through, the "no capacity" recording is a volume rejection, not a closed door. What helps:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Call right when US lines open in the morning. The IRS service lines run roughly 7am–7pm in US time
                    zones, so from Tbilisi that's your afternoon/early evening — convenient, actually. Aim for the first
                    hour they're open.
                </Line>
                <Line>
                    Midweek (Tue–Thu) beats Monday, and avoid the days right around June 1 when the pay-by crunch spikes
                    volume.
                </Line>
                <Line>
                    The line you want is the one on your notice, 800-829-0115. Have the notice in front of you and be ready
                    to say you're the Member calling about a CP162A and want first-time abatement.
                </Line>
            </Paragraph>
            <Paragraph>
                If you don't want to play phone roulette at all, the alternative that <Word>
                    <Emphasis />
                    guarantees
                </Word> a written answer is to send the FTA letter I drafted. The IRS mails back a determination — "we
                applied First-Time Abate, penalty removed" or not. That letter is your confirmation. It converts the
                open-ended "is it cleared?" into a closed loop with an answer that's definitely coming, no PIN and no hold
                music required.
            </Paragraph>
            <Paragraph>
                And so you're not white-knuckling it in the meantime: nothing bad happens while you work on getting through.
                The downside is bounded — $1,020, no underlying tax, and two separate abatement grounds. If it doesn't
                auto-clear and you do nothing, the next event isn't surprise collections; it's another notice (a balance
                reminder) landing in your mailbox in a few weeks. That reminder would itself be a signal that the
                auto-abatement didn't fire. So letting it sit for a couple of weeks isn't a risk — it's just uncomfortable,
                and I get that you want it closed.
            </Paragraph>
            <Paragraph>
                My honest recommendation: try the phone a few times this week during their morning — that's your fastest
                shot at both the check and the fix in one shot. If you haven't gotten through in two or three tries, send
                the letter and let the determination letter be your answer. Either way you're not stuck waiting on that PIN.
            </Paragraph>
            <Paragraph>
                Want me to generate the letter as a clean PDF now so it's ready to mail the moment you decide you're done
                dialing? Just give me a phone number to put on it or tell me to leave it off.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:41:33.121572Z"
        >
            <Origin>019e64f2-c2d6-7726-ae86-e6cd58a5d0ff</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I will call tomorrow at their 7a,m</Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:41:43.867240Z"
        >
            <Origin>019e64f2-c2d6-7a94-a880-dce94e058d68</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the right move. A couple of things to set you up so the call is quick and you don't get tripped at
                the verification step.
            </Paragraph>
            <Paragraph>
                7:00 a.m. US time is per time zone, so aim at whichever opens first — 7:00 a.m. Eastern is 7:00 a.m. in
                Ogden's... actually Ogden is Mountain, so 7:00 a.m. Eastern comes first. In Tbilisi terms, 7:00 a.m. Eastern
                is 3:00 p.m. your time, and 7:00 a.m. Mountain is 5:00 p.m. your time. Dial right at 3:00 p.m. Tbilisi to
                hit the earliest opening. Number is 800-829-0115, from your notice.
            </Paragraph>
            <Paragraph>
                One real gotcha calling from Georgia: an 800 number often won't dial from a non-US line or may not connect
                cleanly. Test this before tomorrow. If you've got a US number through Google Voice or similar, use that. If
                800-829-0115 won't go through, the IRS international line for these is reachable, but simplest is calling
                through a US-based VoIP. Worth a 30-second test tonight so you're not discovering it at 3 p.m.
            </Paragraph>
            <Paragraph>
                Have these in front of you (the rep will run verification and the call dies if you're fumbling):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>EIN: 33-4868229</Line>
                <Line>Business name: Digital Narrative Art LLC</Line>
                <Line>Your name and title: Douglas Michael Rubino, Member</Line>
                <Line>Notice: CP162A, dated May 11, 2026</Line>
                <Line>Tax period: December 31, 2025</Line>
                <Line>Form: 1065</Line>
                <Line>Business address: 500 Westover Dr #36118, Sanford NC 27330-8941</Line>
            </Paragraph>
            <Paragraph>
                What to say, roughly: "I'm calling about a CP162A failure-to-file penalty on a partnership return. I'd like
                to request first-time penalty abatement." Then let them verify you. One w
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:42:15.673161Z"
        >
            <Origin>019e64f3-68b8-7e0e-8f00-3c9230277e94</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can I have traveling mailbox send a letter for me? Do they have a service where I upload that writing and
                they print and send? It's expensive to mail to US from here
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:42:35.032023Z"
        >
            <Origin>019e64f3-68b8-7887-b897-858d3b745c11</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I should be careful here — I don't actually know Traveling Mailbox's current service menu or pricing from
                memory, and that's exactly the kind of thing that changes. Let me check rather than tell you something
                stale.
            </Paragraph>
            <Action>
                Searched the web for “Traveling Mailbox send outgoing mail upload document print and mail service”
            </Action>
            <Paragraph>
                Yes — this is exactly what you're hoping for, and it's built in. Traveling Mailbox has a feature called
                <Word>
                    <Bold />
                    Mail-A-Letter
                </Word>: it's now integrated into all online mailboxes — you simply submit your PDF and they mail the
                documents right out for you. Mechanically, you upload the document, and Traveling Mailbox prints it, stuffs
                it in an envelope, stamps it, and sends it on your behalf. Since you're already a customer, it's right there
                in your account — no separate signup.
            </Paragraph>
            <Paragraph>
                The big win for you: the letter goes to Ogden as <Word>
                    <Bold />
                    domestic US mail from within the US
                </Word>, so you skip the expensive Georgia-to-US international postage entirely. You're only paying their
                print-and-mail fee plus US postage, which is cheap by comparison.
            </Paragraph>
            <Paragraph>So the workflow is clean:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>I generate the FTA letter as a print-ready PDF.</Line>
                <Line>
                    You sign it. The simplest way from Tbilisi is to drop a signature image into the PDF, or print/sign/scan
                    if you have a printer — but a typed-then-imaged signature on a plain FTA letter is fine; this isn't the
                    84-35 version that needs a perjury signature, so it's low-formality.
                </Line>
                <Line>
                    Upload the signed PDF to Mail-A-Letter, address it to the Ogden service center (Internal Revenue
                    Service, Ogden, UT 84201-0039 — matches the payment stub on your notice), and send.
                </Line>
            </Paragraph>
            <Paragraph>
                One thing worth doing for peace of mind given your "I have to be able to check it" concern: Traveling
                Mailbox also offers certified mail / tracked options through their sending features. For a $1,020 abatement
                request I wouldn't bother with certified — a plain letter is standard for FTA — but if you want proof it
                arrived, the option exists. Your call.
            </Paragraph>
            <Paragraph>
                And remember the loop closes itself either way: once the IRS processes it, they mail back a determination
                letter ("we applied First-Time Abate, penalty removed"), which lands in that same Traveling Mailbox and gets
                scanned to you. That scanned letter is your definitive confirmation — no PIN, no phone tree.
            </Paragraph>
            <Paragraph>
                So you've actually got two independent paths to a definite answer now: the 7 a.m. call tomorrow (fastest if
                you get through), and this mailed letter (guaranteed written response, just slower). Doing both is fine —
                they don't conflict.
            </Paragraph>
            <Paragraph>
                Want me to generate the PDF now? Tell me whether to put a phone number on it or leave it off, and I'll have
                it ready for you to sign and drop into Mail-A-Letter.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:43:39.432132Z"
        >
            <Origin>019e64f4-b28e-7939-8341-6df4e6af0e9c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Where is there mail-a-letter in the UI? Can you look it up?</Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:43:51.327662Z"
        >
            <Origin>019e64f4-b28e-784c-870a-515256d46d91</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I can't actually pull this up for you — I don't have access to your Traveling Mailbox account, and their
                help pages don't lay out the exact menu location in a way I'd trust enough to give you a confident "click
                here." I'd rather not guess at button names and send you in circles.
            </Paragraph>
            <Paragraph>
                Here's what I can tell you from how their interface is described: Mail-A-Letter lives inside your logged-in
                mailbox, in the same area as their other outbound features (faxes, forwarding). It's a "compose/send" type
                action rather than something tied to a piece of incoming mail. So once you're logged in, look for a
                send/compose option — often along the top toolbar or a left-side menu — labeled something like "Mail A
                Letter," "Send Mail," or grouped under a "Send" or "Tools" section. It may sit right next to the fax option,
                since those two features are usually paired.
            </Paragraph>
            <Paragraph>If it's not obvious, two reliable ways to find it fast:</Paragraph>
            <Paragraph>
                Use their live support — Traveling Mailbox has support seven days a week, and a one-line chat ("Where do I
                find Mail-A-Letter to upload a PDF and send it?") will get you the exact spot in your version of the UI
                faster than me describing a menu I can't see.
            </Paragraph>
            <Paragraph>
                Or, if you'd rather poke around yourself, take a screenshot of your logged-in dashboard and paste it here —
                I can look at it and point you to the right button. That I can do, since I'd be reading your actual screen
                rather than guessing.
            </Paragraph>
            <Paragraph>
                If for some reason Mail-A-Letter turns out to be buried or unavailable on your plan, the fallback is a
                standalone print-to-mail service like LetterStream, where you upload a PDF and they mail it domestically
                with no subscription — but try your existing Traveling Mailbox account first, since it's already set up and
                you won't pay twice.
            </Paragraph>
            <Paragraph>
                Want to drop a screenshot of your dashboard? Or should I just generate the letter PDF now so it's ready the
                moment you find the button?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:44:20.979132Z"
        >
            <Origin>019e64f5-54b1-771c-bbda-66a1ce106514</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This is what's there</Paragraph>
            <Attachment>Uploaded “1779810256519_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-26T15:44:30.888253Z"
        >
            <Origin>019e64f5-54b1-7780-93bc-fc6bf4e37320</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good, I can see your dashboard now. Mail-A-Letter isn't on this left menu directly, but I can see where it
                most likely lives: <Word>
                    <Bold />
                    Virtual Office
                </Word>. That's the section that typically houses the send-out tools — Mail-A-Letter and faxing — as opposed
                to Forwarding (which is for re-sending mail that came <Word>
                    <Emphasis />
                    in
                </Word> to you). Click <Word>
                    <Bold />
                    Virtual Office
                </Word> first and look for a "Mail A Letter" or "Send a Letter" option there.
            </Paragraph>
            <Paragraph>
                If it's not under Virtual Office, the next most likely spot is the small calculator-looking icon at the top
                right next to the bell — that may be a tools/compose menu.
            </Paragraph>
            <Paragraph>
                If neither shows it, hit <Word>
                    <Bold />
                    Support
                </Word> at the bottom left (you've got it right there) — one quick message and they'll point you to the
                exact button on your plan.
            </Paragraph>
            <Paragraph>
                One thing I want to flag from your screenshot, because it actually matters for timing: your usage <Word>
                    <Bold />
                    resets June 1st
                </Word>, and you're at 13/35 page scans and 2/40 envelope scans. So you've got plenty of room this cycle.
                But note that June 1st is also the pay-by date on your IRS notice — pure coincidence, but a tidy reminder
                that the window you're working in is roughly the next week. No pressure on the penalty itself (it doesn't
                vanish if you pass June 1), but it's a clean target to aim at.
            </Paragraph>
            <Paragraph>
                So: click into Virtual Office and tell me what you see. And in the meantime — should I go ahead and generate
                the letter PDF now so it's ready to upload the second you find the button? I just need to know whether to
                put a phone number on it or leave it off.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:45:24.759957Z"
        >
            <Origin>019e64f6-4e04-7d75-b8aa-e8d7008955c9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good find. Can you produce the PDF I need for the mail-a-letter functionality? I will have it sent and
                continue to call. No risk in sending the letter right?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T15:48:05.429874Z"
        >
            <Origin>019e64f6-4e04-7dc7-87c2-2368e2090382</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Quick answer on risk, because you should send it knowing exactly what it does and doesn't do.
            </Paragraph>
            <Paragraph>
                There's essentially no downside, with one thing that's not a "risk" so much as a known tradeoff you already
                chose. Sending it can't make the penalty worse, can't trigger anything, and doesn't conflict with the
                automatic abatement or with your phone call — if a rep grants it tomorrow, the letter just becomes redundant
                and gets ignored; if the letter lands first, the call becomes redundant. No conflict either way. The letter
                states only true, favorable facts (first year, clean history, no tax due), so there's nothing in it that can
                be used against you. The one tradeoff: requesting FTA spends your one-time first-time-abate card for this
                three-year window — but that's the call you already made deliberately, since 84-35 got complicated with Ana.
                So nothing new there.
            </Paragraph>
            <Paragraph>
                Two small things to get right when you send it: mail it to the address printed at the <Word>
                    <Bold />
                    top of page 1
                </Word> of your physical notice (it should be the Ogden campus — verify it matches), and the letter already
                carries the EIN, tax period, and form number the notice asks you to include.
            </Paragraph>
            <Paragraph>Let me read the document skill and generate it properly.</Paragraph>
            <Action>Read /mnt/skills/public/pdf/SKILL.md</Action>
            <Paragraph>
                Reading done. Generating the letter now — clean single-page business letter, formal serif font, with a
                signature space and the phone number left off (you didn't specify, and it's optional for FTA; I can add it
                in ten seconds if you want it).
            </Paragraph>
            <Action>Ran pip install reportlab --break-system-packages --quiet 2&gt;/dev/null; echo "ready"</Action>
            <Action>Created /home/claude/make_letter.py</Action>
            <Action>Ran cd /home/claude &amp;&amp; python make_letter.py</Action>
            <Paragraph>Let me confirm it rendered cleanly before handing it over.</Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; pip install pdf2image --break-system-packages --quiet 2&gt;/dev/null; (which
                pdftoppm &gt;/dev/null 2&gt;&amp;1 || (apt-get install -y poppler-utils --quiet 2&gt;/dev/null)); pdftoppm
                -png -r 110 /mnt/user-data/outputs/FTA_Request_Digital_Narrative_Art_LLC.pdf /home/claude/preview
                2&gt;/dev/null &amp;&amp; ls preview*
            </Action>
            <Paragraph>It spilled onto a second page — let me check and tighten it to one clean page.</Paragraph>
            <Action>Read /home/claude/preview-1.png</Action>
            <Paragraph>
                Two fixes needed: the bullets are rendering as literal text, and the signature ran onto a second page. Let
                me correct both.
            </Paragraph>
            <Action>Edited /home/claude/make_letter.py</Action>
            <Action>
                Ran cd /home/claude &amp;&amp; \ sed -i 's/bulletText="&amp;bull;"/bulletText="\\u2022"/g' make_letter.py
                &amp;&amp; \ sed -i 's/fontSize=11, leading=15, alignment=TA_LEFT, spaceAfter=11,/fontSize=11, leading=15,
                alignment=TA_LEFT, spaceAfter=10,/' make_letter.py &amp;&amp; \ sed -i
                's/story.append(S(16))/story.append(S(12))/' make_letter.py &amp;&amp; \ sed -i
                's/story.append(S(28))/story.append(S(18))/' make_letter.py &amp;&amp; \ sed -i 's/story.append(S(48)) #
                signature space/story.append(S(40)) # signature space/' make_letter.py &amp;&amp; \ sed -i
                '0,/story.append(S(18))/! s/story.append(S(18))/story.append(S(14))/g' make_letter.py &amp;&amp; \ python
                make_letter.py &amp;&amp; \ pdftoppm -png -r 110
                /mnt/user-data/outputs/FTA_Request_Digital_Narrative_Art_LLC.pdf /home/claude/preview2 2&gt;/dev/null
                &amp;&amp; ls preview2*
            </Action>
            <Action>Read /home/claude/preview2-1.png</Action>
            <Paragraph>Almost — just the final address line tipped onto page 2. Pulling it up slightly.</Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; \ sed -i 's/story.append(S(40)) # signature space/story.append(S(30)) #
                signature space/' make_letter.py &amp;&amp; \ sed -i 's/story.append(S(18))/story.append(S(14))/'
                make_letter.py &amp;&amp; \ python make_letter.py &amp;&amp; \ PAGES=$(python -c "from pypdf import
                PdfReader; print(len(PdfReader('/mnt/user-data/outputs/FTA_Request_Digital_Narrative_Art_LLC.pdf').pages))")
                &amp;&amp; \ echo "pages=$PAGES" &amp;&amp; \ pdftoppm -png -r 110
                /mnt/user-data/outputs/FTA_Request_Digital_Narrative_Art_LLC.pdf /home/claude/preview3 2&gt;/dev/null
                &amp;&amp; ls preview3*
            </Action>
            <Action>Read /home/claude/preview3-1.png</Action>
            <Paragraph>
                Clean single page, bullets render correctly, signature block intact with room for your signature.
            </Paragraph>
            <Action>Presented files</Action>
            <Paragraph>There's your letter. A few notes on using it:</Paragraph>
            <Paragraph>
                It's unsigned by design — the blank space above your name is for your signature. Easiest from Tbilisi: drop
                a signature image into the PDF, or print/sign/scan if you have the printer set up. A plain signature is fine
                here; FTA doesn't need the "under penalties of perjury" line that 84-35 would.
            </Paragraph>
            <Paragraph>
                Two things to double-check before you upload it to Mail-A-Letter. First, the recipient address: I used the
                Ogden campus (84201-0039, matching your payment stub). Glance at the very top of page 1 of your physical
                notice and confirm the return address matches — if it shows a different ZIP+4, use that one. Second, it
                helps the IRS match the request fast if you append a scan of the CP162A notice behind the letter in the same
                Mail-A-Letter upload — not required, since the letter carries every identifier, but it speeds things up.
            </Paragraph>
            <Paragraph>
                On your plan, you're at 13/35 page scans with reset June 1, so a one- or two-page outbound letter won't
                strain anything.
            </Paragraph>
            <Paragraph>
                And to close the loop you were worried about: this letter forces a written determination — the IRS mails
                back a yes/no, which lands in your Traveling Mailbox and gets scanned to you. So between this and the 7 a.m.
                call tomorrow, you've got two independent ways to a definite answer, and you're no longer depending on that
                PIN showing up. Send it, keep dialing, and whichever resolves first ends it.
            </Paragraph>
            <Paragraph>
                Want me to add your phone number to the letter, or regenerate it with the notice copy already merged behind
                it?
            </Paragraph>
            <Attachment>Uploaded “preview-1.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “preview2-1.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “preview3-1.png”, whose content the export does not carry</Attachment>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);
