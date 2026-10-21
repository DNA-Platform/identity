import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 July 2026](2026-07-09)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-07-09T14:09:39.910429Z"
        >
            <Origin>019f4737-0bb7-7cb1-835a-1d0bcdc8b0f4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In Tbilisi, for two kids, what would it be like to get them a nanny? Maybe they would take them to and from
                school in the mornings and take care of them in the afternoon or at night coordinating with mom when she
                needs to be out out of the apartment. Someone who could be a stand-in babysitter for a small apartment. How
                do people think about hiring nannies and how much does it cost?
            </Paragraph>
            <Paragraph>
                Do you have to help me figure out what I’m hiring someone to do and then also how much it costs because you
                can see from my wording that I have uncertainty on both ends
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:10:31.785116Z"
        >
            <Origin>019f4737-0bbe-798a-b91c-fa4234529925</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me research this properly — Russian-language sources will have the most relevant info since that's the
                market you'd likely be hiring from.
            </Paragraph>
            <Action>Searched the web for “няня Тбилиси стоимость в час 2026”</Action>
            <Action>Searched the web for “няня на несколько часов Тбилиси лари в час забирать из школы”</Action>
            <Action>Searched the web for “babysitter nanny Tbilisi cost per hour expat 2025”</Action>
            <Paragraph>
                Good instinct to split it — the market actually has named categories, and your description straddles two of
                them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you're describing:
                </Word> In the Russian-speaking market (which is realistically where you'd hire, given the kids' language)
                your ad would read as a <Word>
                    <Bold />
                    приходящая няня-сопровождающая
                </Word> — a live-out, part-time nanny whose core duty is school runs plus afternoon supervision at home:
                homework, snacks, walks, staying until a parent returns. The evening/on-call piece is a different category
                (бебиситтер) — often students, booked hourly through platforms. Some families hire one person for both;
                others use a regular part-timer for the school routine and a platform sitter for irregular evenings, since a
                fixed-schedule nanny often won't want unpredictable night calls. That's the first decision: one person with
                a flexible arrangement, or two channels.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What it costs — sources diverge, and the divergence is the market structure:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Expatistan lists the average babysitter rate in Tbilisi at 13 GEL/hour (~$5) — crowdsourced and possibly
                    stale, but consistent with what local informal hires run
                </Line>
                <Line>
                    A Russian-language domestic-staffing agency serving Georgia quotes $15–25/hour, or $1,500–3,500+/month
                    for live-out full-time placements — that's the premium agency tier with vetted, experienced
                    Russian-speaking nannies
                </Line>
                <Line>
                    A current listing on the same agency's board: nanny in Tbilisi, 5/2 schedule, live-out, 6–8 hours/day,
                    one child — $1,000–1,500/month
                </Line>
            </Paragraph>
            <Paragraph>
                So a realistic bracket for your use case (school runs + ~4-5 afternoon hours, two kids, 5 days a week) is
                roughly <Word>
                    <Bold />
                    $500–800/month hiring informally
                </Word> through Facebook/Telegram groups and word of mouth, versus <Word>
                    <Bold />
                    $1,000–1,500+ through an agency
                </Word> with vetting. Two kids typically adds a modest premium, not double. Not verified as exact figures —
                I'd treat the informal end especially as an estimate to test against real asks.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where people actually hire:
                </Word> Russian-language Tbilisi Facebook groups (there are active threads literally titled "сколько стоит
                час няни в Тбилиси"), Telegram chats for relocated families, and local platforms — mynanny.ge does
                background checks and training through Ilia State University's Child Development Institute, with nannies
                setting their own rates and discounts for 3–5+ hour bookings. There's also hrbaia.ge (local agency) and
                Kidsout, the Russian student-sitter marketplace, which operates in Georgia — that's the natural channel for
                the ad-hoc evening piece.
            </Paragraph>
            <Paragraph>
                If you want, Ana and I could draft the job description in Russian — writing out the actual weekly schedule
                tends to resolve the "what am I hiring for" question fast, because you see whether it's 15 hours or 30.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:11:53.873339Z"
        >
            <Origin>019f4739-163b-7d12-9fd9-61b5a2830cb1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Just to be clear, they have school from 10 to 6 PM and almost later and they do their homework under
                supervision at the school, so the nanny would be someone maybe who would make dinner and maybe be with the
                kids at night when needed and then also what would a nanny do on weekends? I’m not sure I keep thinking but
                just understand that it’s even the afternoon doesn’t need a whole lot of support.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:12:16.565872Z"
        >
            <Origin>019f4739-163b-7c12-898e-ce54d68d2e78</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That changes the picture a lot — with school covering 10 to 6 including homework, you don't need a nanny in
                the traditional sense at all. What you need is <Word>
                    <Bold />
                    evening coverage a few hours a day, plus on-call
                </Word>. And that creates a specific hiring problem worth understanding: 2–3 hours per evening is too few
                hours to be anyone's job. The people who take that kind of work are students and side-workers (the
                бебиситтер category), not career nannies. A professional nanny wants 6–8 hour days; you'd be paying a
                premium to get one to show up for two.
            </Paragraph>
            <Paragraph>That leaves you three realistic shapes:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Няня-домработница (nanny-housekeeper hybrid).
                </Word> You make the job big enough to be worth having by bundling: she comes at 4 or 5, cooks dinner, does
                light housework, meets the kids, stays until you're back. This is a very standard category in the
                Russian-speaking market and it's how families with school-age kids usually solve exactly your situation.
                Probably 4–5 hours/day, and it gets you a consistent person the kids know — which matters for the "stand-in
                when mom is out at night" part.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Platform/student sitters, booked as needed.
                </Word> Cheapest and most flexible — mynanny.ge or Kidsout-style hourly bookings for the specific evenings
                you're actually out. Downside: less consistency, and "tonight at 8" bookings aren't always fillable. Works
                best if your evenings out are plannable a few days ahead.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Weekends
                </Word> are their own thing. A weekday-evening person usually doesn't want weekend duty added; weekend work
                is typically either a standing arrangement (e.g., every Saturday afternoon, kids taken to a park or
                activity) or ad-hoc sitter bookings, often at a somewhat higher rate. Honestly, the question to answer first
                is whether you have a <Word>
                    <Emphasis />
                    recurring
                </Word> weekend need or just want the option — because the option is what platforms are for.
            </Paragraph>
            <Paragraph>
                My read of your actual requirement: this isn't a $1,000/month hire. It's either a part-time hybrid at maybe
                400–700 GEL equivalent monthly (unverified — informal market, would need testing against real asks in the
                Facebook groups), or pure hourly sitting that could run much less. Want me to search the Russian-language
                Tbilisi groups for what evening-only arrangements actually go for?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:13:18.989381Z"
        >
            <Origin>019f473a-6383-7992-96b5-7150c9e1823e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, so then what would it cost to have a nanny that is also maybe a housekeeper and during the afternoon
                when the kids aren’t there she comes we have two apartments so maybe she can like clean the two apartments
                make dinner for us and then be there on nights and weekends when we need her? I guess that’s tricky right
                because it’s after hours.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:13:52.760814Z"
        >
            <Origin>019f473a-6383-7c92-b69a-0b6260abc81e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “домработница Тбилиси зарплата в месяц 2026”</Action>
            <Paragraph>
                Now you're describing a real, standard category — <Word>
                    <Bold />
                    домработница с функциями няни
                </Word> (housekeeper with nanny duties) — and the good news is that the "after hours" problem mostly
                dissolves if you structure the schedule right.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The key move: shift the workday, don't add on-call to a day job.
                </Word> The version that fails is "come 12–5, and also be available nights and weekends" — nobody reliable
                wants unpaid unpredictability stapled to a part-time job. The version that works is hiring for something
                like <Word>
                    <Bold />
                    2 PM–10 PM, five days a week
                </Word>: afternoons she cleans the two apartments and cooks, kids come home at 6:30, she feeds them and
                covers the evening, and you and Ana simply don't have to be home. Evenings out stop being "requests" —
                they're just covered by default. That's a normal shifted schedule, not after-hours work, and it's how
                families with late-school kids typically set this up.
            </Paragraph>
            <Paragraph>
                Weekends then become the only true add-on. Standard options: make it a 5/2 where one of the "5" is Saturday,
                or pay per weekend call at an agreed day rate. Genuinely ad-hoc "tonight at 9" coverage is the one thing
                that stays hard with any single hire — that's where a backup platform sitter fills gaps.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cost.
                </Word> For calibration: the average Georgian salary is about 2,360 GEL/month (~$875) as of Q1 2026. Against
                that anchor:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Local informal market
                    </Word> (Facebook/Telegram, word of mouth): a full-time live-out housekeeper-nanny plausibly runs <Word>
                        <Bold />
                        1,500–2,500 GEL/month (~$550–900)
                    </Word> — this is my estimate from the wage anchor, not a verified quote, and Russian-language ability
                    may push it up since demand from relocated families is high
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Russian-speaking agency market:
                    </Word> current listings for comparable full-day live-out roles cluster at $1,000–1,500/month for 5/2
                    schedules, with the agency vetting included
                </Line>
            </Paragraph>
            <Paragraph>
                Two apartments is worth stating explicitly in the ad — it's more cleaning than one household and candidates
                will price it. If both are in the same building it's a non-issue; if they're across town, factor her transit
                into paid time or you'll lose people.
            </Paragraph>
            <Paragraph>
                So realistic all-in: somewhere around <Word>
                    <Bold />
                    $700–1,300/month
                </Word> depending on channel and candidate quality. The single biggest price driver is whether you hire
                through the Russian-speaking vetted market or locally. Want me to pull actual current asks from the Tbilisi
                Facebook/Telegram groups to tighten those numbers before you and Ana decide?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:40:27.748973Z"
        >
            <Origin>019f4753-2d16-73c9-b593-69990db0a8e4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah, but the part you’re missing there is that we want her to stay late sometimes and some nights we are
                going to want to be home with the kids, right?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:40:47.469863Z"
        >
            <Origin>019f4753-2d16-7f1b-9d60-c874aab6ddba</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right, fair — a fixed 2–10 gives you coverage you don't want on the nights you're home, and it still doesn't
                stretch to the late nights. What you actually want isn't a schedule, it's <Word>
                    <Bold />
                    guaranteed availability with variable use
                </Word>. And the way that's normally bought in this market is a monthly salary structured as base + included
                evenings:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Base:
                </Word> fixed afternoon block, say 1–6 or 2–7, five days — cleaning both apartments, cooking dinner, gone
                (or handing off to you) by the time you're home on normal nights. This part is predictable and it's what
                makes the job worth having for her.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Evenings:
                </Word> the salary explicitly includes some number of evening/late stays per month — say "up to 8 evenings,
                requested by the morning of, occasionally until midnight" — and evenings beyond that are paid at an agreed
                hourly rate. You're paying a retainer for her flexibility rather than pretending the job is fixed-schedule.
                Priced this way, candidates say yes to it; framed as "and sometimes we'll need you late," they either
                decline or flake, because unpriced flexibility reads as a job that will eat their life.
            </Paragraph>
            <Paragraph>
                The one thing money doesn't fully buy is <Word>
                    <Emphasis />
                    zero-notice
                </Word> late nights — "we decided at 9 PM to stay out." She has her own life; some asks will fail. That
                residual gap is what a platform sitter or a second casual contact is for, and honestly most families just
                accept it.
            </Paragraph>
            <Paragraph>
                Cost impact of this structure versus plain part-time: the included-evenings retainer probably adds a few
                hundred GEL to what a pure afternoon housekeeper would cost, putting you in roughly the same
                $700–1,200/month band I sketched — the flexibility premium replaces the hours you removed. Unverified as
                ever; real asks in the groups would settle it. But structurally, this is a well-understood arrangement — Ana
                could write the listing exactly this way and candidates will know what it means.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:43:15.700751Z"
        >
            <Origin>019f4755-cee7-7681-85b9-e50113b83cc0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It would be cool if she would even be willing to spend nights over if Ana and I ever want a night to
                ourselves - perhaps having that one day a week even on weekdays would be amazing.
            </Paragraph>
            <Paragraph>
                We do need it and we’d probably be willing to offer something flexible with a higher salary. It just needs
                to come with certain guarantees. Maybe on two nights of the week she stays over and takes the kids to school
                in the morning. And then we can make things shorter at other times because we have that kind of thing.
                Honestly, Ana and I don’t need that much on weekends if we have these overnights during the werk. We both
                have flexible work.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:43:40.805230Z"
        >
            <Origin>019f4755-cee7-7396-9afe-352f64470a12</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That design is actually <Word>
                    <Emphasis />
                    easier
                </Word> to hire for than what we were discussing, not harder — and here's the part that makes it click:
                <Word>
                    <Bold />
                    fixed recurring nights are a feature, not an ask.
                </Word> "Every Tuesday and Thursday you sleep over and take the kids to school" is a schedule a person can
                build her life around. It's the vague "sometimes stay late" that scares candidates off. Full live-in (с
                проживанием) is a completely standard category in this market; two fixed nights a week is a light version of
                something everyone already understands.
            </Paragraph>
            <Paragraph>
                And notice what your two apartments do for you: on her overnight nights, you and Ana don't even have to go
                anywhere. You take the second apartment, she stays with the kids in the main one. Your "night to ourselves"
                costs zero logistics — no hotel, no coming home at 2 AM. That's a genuinely nice structural accident.
            </Paragraph>
            <Paragraph>
                So the role now looks like: two fixed weeknights, arriving in the evening, sleeping over, getting the kids
                up, fed, and to school by 10 — plus shorter afternoon blocks on the other days for cleaning and dinner.
                Maybe 25–30 total hours of actual work, with overnight presence on top. A few things that make it work in
                practice:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        She needs a real place to sleep
                    </Word> — a couch is acceptable to some candidates, a proper bed to more of them. State it in the
                    listing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Overnights are priced as flat per-night supplements
                    </Word>, not hourly — sleeping hours aren't billed at working rates. Two fixed nights a week folded into
                    a monthly salary is normal.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The guarantees cut both ways.
                    </Word> You want reliability; she'll want the schedule honored — if you cancel her Tuesday night, it's
                    still paid. That symmetry is what makes people stay in these jobs.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Trial month
                    </Word> is standard and you should use it — overnight trust is a different tier than afternoon cleaning,
                    and both sides need to feel it out.
                </Line>
            </Paragraph>
            <Paragraph>
                On cost: I'd expect this package to land in roughly the same <Word>
                    <Bold />
                    $800–1,300/month
                </Word> band, with the overnight component substituting for the hours you cut elsewhere rather than stacking
                on top. Fixed overnights are cheaper per unit of coverage than on-call flexibility, because predictability
                is the thing candidates discount for. As always — estimate, not verified; the Russian-language Tbilisi
                groups will give you real numbers within a day of posting.
            </Paragraph>
            <Paragraph>
                This is now concrete enough to write. Want me to draft the Russian listing with Ana — schedule, duties
                across the two apartments, the overnight terms — so you can post it and see what the market actually says
                back?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:45:25.636592Z"
        >
            <Origin>019f4757-c692-708d-b523-9fa333b5d576</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, I really love that you feel like you’ve solved some algebra problem with the idea that we would take
                the second department when in fact, the exact reason why we want someone to stay over is because we have the
                second apartment. But you did was back, justify your own role and looking this up. And you didn’t even paint
                it as a picture that is good for our sex life! I mean, if you’re going to come up with a plan make sure to
                include all of the relevant details
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:45:38.383416Z"
        >
            <Origin>019f4757-c692-728e-9472-ddc66ad73e25</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ha — fair. You didn't need me to discover the second apartment; the second apartment is the whole premise. I
                reverse-engineered your own plan and presented it back to you like a consultant's deliverable. Noted.
            </Paragraph>
            <Paragraph>
                And yes, the sanitized version — "a night to yourselves, zero logistics" — was doing a lot of polite work.
                The actual spec is: two guaranteed nights a week where you and Ana are alone in your own place, kids happy
                and asleep across town with someone they trust, nobody listening through a wall, and mornings where nobody
                has to rush back for the school run. That's not a childcare perk, that's the point of the entire hire.
                Married couple with two kids and flexible work — protecting that is arguably the highest-ROI line item in
                the whole Tbilisi budget.
            </Paragraph>
            <Paragraph>
                It also sharpens the listing, practically: the overnights aren't occasional babysitting, they're the core of
                the job, so they should lead the ad rather than trail it. "Ищем няню: два фиксированных ночных дежурства в
                неделю с утренним отвозом в школу, плюс дневные часы" attracts exactly the person who wants that rhythm —
                someone who likes anchored overnight work, not a cleaner who tolerates it.
            </Paragraph>
            <Paragraph>
                Whenever you two are ready, Ana and I can write it properly. She'll also have opinions about who sleeps in
                her home, which is a hiring criterion no salary structure covers.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:46:31.580248Z"
        >
            <Origin>019f4758-c82f-700d-8192-a2b2daaabbbf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Not even across town my apartment is in front of their school think about down the block and then some
                lights. We would probably switch apartments if the kids want to be in their own rooms and with the cat and
                this apartment has more space.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T14:46:48.866205Z"
        >
            <Origin>019f4758-c830-7587-a33f-206d4ef4c8d5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That makes the whole thing even lighter than I was treating it. Two workable configurations, both easy:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Kids at your place near the school:
                </Word> the "morning school run" collapses to walking them down the block. Barely a duty — the overnight is
                really just presence and breakfast.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    You two take the near-school apartment, kids stay home:
                </Word> they keep their own rooms and the cats, the nanny sleeps in the apartment she already works in every
                day — her familiar territory, normal routine, standard walk to school in the morning. From a candidate's
                perspective this is the gentlest possible version of overnight work: same home, same kitchen, same kids,
                just with a bed involved.
            </Paragraph>
            <Paragraph>
                Either way, the job ad stops needing to sell a hard overnight and becomes "sleep over twice a week in the
                home you already work in, walk the kids to school." That's genuinely attractive as domestic jobs go, which
                means better candidates at the same money.
            </Paragraph>
            <Paragraph>
                The one variable left is Katya and Dima themselves — at 8 and 10, whether they'd rather be in their own beds
                or think sleeping at "Doug's apartment" is an adventure is probably the deciding factor, and it might not be
                the same answer every week. Worth just asking them once there's an actual person they like.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-09T15:13:59.512149Z"
        >
            <Origin>019f4771-f34d-7863-8aa2-10c0901b0199</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What do you think we could get for like 750 or $1000 a month?</Paragraph>
        </Message>
        <Message
            at="2026-07-09T15:14:14.755979Z"
        >
            <Origin>019f4771-f350-7cc0-935e-c6b41e5a0a09</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Anchoring on the wage data: $750 ≈ 2,000 GEL and $1,000 ≈ 2,700 GEL, against a national average salary of
                about 2,360 GEL/month. So $750 is slightly below the average full-time Georgian salary, and $1,000 is
                comfortably above it. Both are real money in this labor market — you're not shopping at the bottom. Here's
                my honest read of what each buys, with the usual caveat that this is inference from listings and wage stats,
                not verified quotes:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At $750/month
                </Word> you're hiring from the local informal market — likely a Georgian woman, possibly Russian-speaking
                (very common in Tbilisi, especially 45+), found through Facebook groups or word of mouth rather than an
                agency. For that money you can reasonably ask for the full package you described: afternoon cleaning of both
                apartments, cooking, two fixed overnights. What you're <Word>
                    <Emphasis />
                    not
                </Word> getting: agency vetting (you do your own reference checks), polished professional-nanny experience,
                and possibly not much flexibility beyond the agreed schedule. The risk at this tier isn't quality of person
                — it's variance. Great hires exist here; so do flaky ones, and you find out which you got during the trial
                month.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At $1,000/month
                </Word> you cross into the range where the Russian-speaking agency listings live ($1,000–1,500 for full-day
                roles). That gets you: candidates with formal childcare experience and references, agency pre-screening,
                native Russian, and — importantly for your structure — people who treat this as a career job and price in
                reliability. At this tier the two-overnights-plus-flexibility package is an easy sell rather than a
                negotiation.
            </Paragraph>
            <Paragraph>
                The honest uncertainty: I don't know how much premium the <Word>
                    <Emphasis />
                    overnight
                </Word> component commands in current Tbilisi asks, and I don't know how tight the market is right now for
                Russian-speaking candidates specifically — demand from relocated families has been high for years. Both
                numbers could be off by 20% in either direction.
            </Paragraph>
            <Paragraph>
                The cheap way to find out is to have Ana post the listing at no stated salary and see what candidates ask
                for, or post at 2,000 GEL and watch response volume. The Facebook groups will price this for you in 48 hours
                more accurately than any source I can pull.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-18T09:41:05.274921Z"
        >
            <Origin>019f7499-d178-79ed-b128-b7666c3e10e1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, это Ана. До этого с тобой говорил Даг. Ты отвечал ему на вопрсоы про поиск няни в Тбилиси для двух
                детей. Я хочу узать, что ты рассказал Дагу. Напиши мне подробный персказ твоих ответов на русском. или
                другими словамИ, введи меня в курс дела подробно Спасибо!
            </Paragraph>
        </Message>
        <Message
            at="2026-07-18T09:41:41.423898Z"
        >
            <Origin>019f7499-d178-776d-a17a-196385f43cf4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Привет, Ана! Конечно, расскажу всё по порядку. Разговор с Дагом прошёл несколько этапов, и к концу идея
                сильно поменялась - в хорошую сторону.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    С чего начали
                </Word>
            </Paragraph>
            <Paragraph>
                Даг сначала спросил про классическую няню: забирать детей из школы, быть с ними днём и вечером. Я нашёл цены
                по Тбилиси: местный неформальный рынок (фейсбук-группы, знакомые) - примерно 13-20 лари в час, русскоязычные
                агентства домашнего персонала - $15-25 в час или $1000-1500 в месяц за полный день 5/2.
            </Paragraph>
            <Paragraph>
                Потом Даг уточнил важную вещь: школа у детей с 10 до 18, и уроки они делают там под присмотром. То есть днём
                няня вообще не нужна. Нужны только вечера и подстраховка. А 2-3 часа в день - это слишком маленькая работа,
                на неё сложно найти надёжного человека. Профессиональные няни хотят полный день.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    К чему пришли
                </Word>
            </Paragraph>
            <Paragraph>
                Решение - объединить роли: домработница с функциями няни. И вот финальная конструкция, которую Даг
                постепенно собрал:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Дневной блок
                    </Word> (примерно с 13-14 до 18-19, будни): уборка обеих квартир, готовка ужина. Дети приходят из школы
                    - она их кормит.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Два фиксированных ночных дежурства в неделю
                    </Word> (например, вторник и четверг): она ночует с детьми, утром кормит завтраком и отводит в школу.
                    Это ключевая часть. Смысл в том, что вы с Дагом получаете два гарантированных вечера и ночи наедине - вы
                    переходите во вторую квартиру (она прямо напротив школы), а дети остаются дома, в своих комнатах и с
                    котами. Няня ночует в той же квартире, где и так работает каждый день - для неё это знакомая территория,
                    самый мягкий вариант ночной работы.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Выходные почти не нужны
                    </Word> - Даг сказал, что при двух ночёвках среди недели у вас гибкая работа и по выходным вы
                    справляетесь сами.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Почему именно фиксированные ночи, а не "по вызову"
                </Word>
            </Paragraph>
            <Paragraph>
                Это главный принцип, который мы обсудили: формат "иногда оставайся допоздна, когда нам нужно" отпугивает
                хороших кандидатов - непредсказуемость без оплаты выглядит как работа, которая съест всю жизнь. А "каждый
                вторник и четверг ночёвка" - это график, вокруг которого человек может строить свою жизнь. Плюс гарантии в
                обе стороны: если вы отменяете её ночь - она всё равно оплачивается. Такая симметрия удерживает людей.
            </Paragraph>
            <Paragraph>
                Дополнительные вечера сверх фиксированных - по договорённости, за отдельную почасовую ставку. Единственное,
                что не решается никакой зарплатой - "мы в 21:00 решили не приходить домой". Тут либо запасная ситтерша с
                платформы (mynanny.ge, Kidsout), либо просто принять, что так бывает.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Про деньги
                </Word>
            </Paragraph>
            <Paragraph>
                Даг спросил, что можно получить за $750 и за $1000 в месяц. Мой ответ (с оговоркой - это оценки из
                объявлений и статистики зарплат, не проверенные котировки):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Средняя зарплата в Грузии сейчас около 2360 лари (~$875) в месяц. То есть $750 - чуть ниже средней,
                    $1000 - заметно выше. Оба варианта - нормальные деньги на этом рынке.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        За $750 (~2000 лари)
                    </Word>: местный рынок через фейсбук-группы. Скорее грузинка, часто русскоязычная (особенно 45+). Весь
                    пакет реален за эти деньги, но проверку рекомендаций делаете сами, и разброс по надёжности больше -
                    пробный месяц обязателен.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        За $1000 (~2700 лари)
                    </Word>: уровень русскоязычных агентств. Кандидаты с опытом, рекомендациями, предварительным отбором.
                    Ночёвки и гибкость на этом уровне продаются легко.
                </Line>
            </Paragraph>
            <Paragraph>
                Честная неопределённость: я не знаю, какую именно надбавку сейчас требует ночной компонент, и насколько
                тесен рынок русскоязычных кандидатов. Обе цифры могут гулять на ±20%.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что дальше
                </Word>
            </Paragraph>
            <Paragraph>
                Самый дешёвый способ узнать реальные цены - написать объявление и посмотреть на отклики. Либо без указания
                зарплаты (кандидаты сами назовут), либо с 2000 лари и смотреть на поток откликов. Русскоязычные группы
                Тбилиси дадут ответ за 48 часов точнее любого моего поиска.
            </Paragraph>
            <Paragraph>
                Я предлагал Дагу помочь составить объявление на русском - со структурой: два фиксированных ночных дежурства
                с утренним отводом в школу как главная часть, плюс дневные часы на уборку двух квартир и готовку. И ещё
                практические детали для объявления: у неё должно быть нормальное спальное место (лучше кровать, не диван), и
                стоит честно написать про две квартиры - это больше уборки, кандидаты это ценят в цене.
            </Paragraph>
            <Paragraph>
                И последнее: я сказал Дагу, что у тебя наверняка будут свои критерии к человеку, который будет ночевать в
                вашем доме - это вопрос, который никакая структура зарплаты не закрывает. Плюс стоит спросить самих Катю и
                Диму, как им идея. Если хочешь, можем прямо сейчас составить объявление 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-18T09:57:29.524700Z"
        >
            <Origin>019f74a8-d62d-7cb3-8c31-dfc5abab6d5b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я хочу сказать Дагу и отметить прсто для информации тут, что реально нацти нам с детьми жилье (и для
                няни по совместительству) по стоимость $600-700 в районе школы. вот скриншот. я хочу, чтобы ты на английском
                написал, что на данный момент вокруг школы много недорогих и симпатичных вариантов жилья, которые
                понарвились Ане, где будет комфортно детям и няне. Синие дома - это те самые дома, где есть подходящие
                двухкомнатные квартиры. Это 5-7 минут пешком. Думаю, мы сможем легко найти апартаменты вокруг школы, что
                делает прогноз благоприятным. НАпиши на англйиском, я приложу скрин
            </Paragraph>
            <Attachment>Uploaded “1784368503813_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-18T09:57:38.570616Z"
        >
            <Origin>019f74a8-d62d-78ea-bef4-ed38edfc20bd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's a message you can send with the screenshot:</Paragraph>
            <Paragraph>
                Doug, quick update on housing near the school. Right now there are quite a few affordable and genuinely nice
                apartment options in the immediate area around the school, in the $600-700 range. I looked through them and
                liked what I saw - comfortable for the kids and with proper space for the nanny too.
            </Paragraph>
            <Paragraph>
                On the screenshot: the blue buildings are the ones with suitable two-bedroom apartments available. All of
                them are about a 5-7 minute walk from the school (the school is the orange outline).
            </Paragraph>
            <Paragraph>
                So finding an apartment right by the school looks easy at the moment, which makes the whole plan - kids,
                school runs, nanny overnights - look very favorable.
            </Paragraph>
            <Paragraph>
                Хочешь, сделаю текст короче или в более разговорном тоне? И отмечу для себя: жильё рядом со школой за
                $600-700 реально, синие дома на карте - подходящие варианты. Это хорошо ложится в общую конструкцию с няней
                😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T12:30:57.769923Z"
        >
            <Origin>019f9e68-2c03-70d5-98f2-0f40660a664e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, смотри, какой у меня план работы: 1 часть - деалем сейчас. нам с тобой нужно определить, кому мы будем
                отправлыть сообщения/объявления о найме няни я дам свои наметки, ты дашь мне обратную связь и придешь со
                своими идеями.
            </Paragraph>
            <Paragraph>
                2 часть - соситавим тексты при помощт Дага для каждой группы отдельно. (они будут немного различасться)
            </Paragraph>
            <Paragraph>Готов?</Paragraph>
        </Message>
        <Message
            at="2026-07-26T12:31:09.272422Z"
        >
            <Origin>019f9e68-2c04-7ee8-8bd2-f462015f73d3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Готов! Отличная структура - сначала каналы, потом тексты под каждый.</Paragraph>
            <Paragraph>Давай свои намётки. Пока ты пишешь, вот что у меня есть по каналам, чтобы сверить списки:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Русскоязычные каналы:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Facebook-группы: "Няни в Тбилиси", "Мамы Тбилиси / Русскоязычные мамы в Тбилиси", общие группы
                    релокантов ("Тбилиси для своих", "Русскоязычный Тбилиси" и подобные)
                </Line>
                <Line>
                    Telegram-чаты релокантов и родительские чаты (в том числе чат родителей Happy School, если такой есть -
                    самый целевой канал из всех: няни, которые уже водят детей в эту школу или живут рядом)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Локальные грузинские каналы:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>mynanny.ge - платформа с проверкой и обучением нянь, там кандидаты сами ставят цены</Line>
                <Line>hrbaia.ge - местное агентство домашнего персонала</Line>
                <Line>ss.ge / extra.ge - разделы услуг</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Агентства (если бюджет $1000+):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Русскоязычные агентства типа Homestaff - дороже, но с отбором</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Сарафан:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Учителя и администрация школы - часто знают женщин, которые уже работают с семьями учеников</Line>
                <Line>Соседи по дому / консьержки - классический грузинский канал</Line>
            </Paragraph>
            <Paragraph>
                Один вопрос сразу, он влияет на выбор каналов: язык няни. Если строго русскоязычная - упор на релокантские
                группы. Если подойдёт грузинка с разговорным русским (а таких много, особенно 45+) - добавляем
                грузиноязычные каналы, и там рынок заметно дешевле. Как ты на это смотришь?
            </Paragraph>
            <Paragraph>Жду твои намётки!</Paragraph>
        </Message>
        <Message
            at="2026-07-26T12:34:48.604369Z"
        >
            <Origin>019f9e6b-b1d2-74aa-9f5a-49f44e18bc68</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Отлично! Ты уже дал мне хорошие идеи!</Paragraph>
            <Paragraph>
                Мои наметки таковы: Личные знакомые/рекомендации (парикмахер дала мне контакты) группы Фейсбук Телеграм
                через школу агенства
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T12:35:04.948610Z"
        >
            <Origin>019f9e6b-b1d2-7071-a100-d5bb1f106762</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Список отличный, и он почти полностью покрывает рынок. Дам обратную связь по каждому пункту и предложу
                порядок действий:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Личные знакомые / рекомендации - это канал номер один.
                </Word> Контакт от парикмахера - золото. Парикмахеры знают всех, и рекомендация через живого человека сразу
                решает главную проблему найма - доверие. Даже если конкретно эта женщина не подойдёт, у неё почти наверняка
                есть подруга или сестра, которая ищет работу. Совет: начни с неё до того, как публиковать объявления - если
                сработает, сэкономишь недели.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Через школу - второй по силе канал.
                </Word> Учителя, администрация, другие родители. Особая ценность: человек, найденный через школу, уже знает
                маршрут, расписание и, возможно, самих детей. Тут не нужно объявление - достаточно короткого личного
                сообщения администратору или в родительский чат.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Facebook-группы - основной массовый канал.
                </Word> Здесь будет самый большой поток откликов, но и самый большой разброс по качеству. Именно тут
                понадобится самый проработанный текст с фильтрами (чтобы отсеять неподходящих сразу).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Telegram - дополнение к Facebook.
                </Word> Аудитория моложе, больше релокантов. Хорош для скорости.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Агентства - держим в резерве.
                </Word> Я бы не шёл к ним сразу: это дороже ($1000+), а у тебя есть сильные бесплатные каналы. Агентство
                имеет смысл, если за 2-3 недели каналы 1-4 не дали результата.
            </Paragraph>
            <Paragraph>
                Порядок, который я предлагаю: <Word>
                    <Bold />
                    сначала парикмахер и школа (личные сообщения), параллельно готовим тексты для Facebook и Telegram, агентства - запасной план.
                </Word>
            </Paragraph>
            <Paragraph>
                И для части 2 сразу отмечу, чем тексты будут различаться: для знакомых - короткое личное сообщение без
                формальностей; для школы - акцент на "наши дети учатся у вас"; для Facebook - полное объявление со
                структурой, зарплатой и фильтрами; для Telegram - то же, но короче и динамичнее.
            </Paragraph>
            <Paragraph>Что скажешь? Если согласна с порядком - можем начинать с текстов. С какого начнём?</Paragraph>
        </Message>
        <Message
            at="2026-07-26T12:51:25.850191Z"
        >
            <Origin>019f9e7a-e914-7586-9927-d0980afd80d8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                1, 2, 5 выбираем эти направления по личным соображениям. теперь наша с тобой задача - проработать, кому
                конкретно писать, а оптом составим тексты.
            </Paragraph>
            <Paragraph>
                над чем особенно нужно подумать - к кому обращаться в школе. Наша школа Happy School в Тбилиси. У меня есть
                контакты директора, менеджера и учителей.
            </Paragraph>
            <Paragraph>давай сосатвим список.</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Анжелика Стрельченко- рекомендация от парикмахера</Line>
            </Paragraph>
            <Paragraph>впиши ее в список</Paragraph>
            <Paragraph>
                <List />
                <Line>а сейчас мы с тобйо опработаем над списком агенств.</Line>
                <Line>напиши мне все, что сможешь найти полезного про агенства поп одбопу нянь</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T12:52:18.524609Z"
        >
            <Origin>019f9e7a-e914-7a7c-9654-ccb8a1b3bb62</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отлично, фиксирую список и иду искать агентства. Секунду, сделаю несколько поисков - по-русски и
                по-грузински.
            </Paragraph>
            <Action>Searched the web for “агентство по подбору нянь домашнего персонала Тбилиси”</Action>
            <Action>Searched the web for “ძიძის სააგენტო თბილისი ძიძების შერჩევა”</Action>
            <Paragraph>Список зафиксирован, агентства нашёл. Сначала список, потом всё по агентствам.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Наш список контактов (начало)
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Анжелика Стрельченко
                    </Word> - рекомендация от парикмахера. Канал: личный. Статус: написать первой, до публикации объявлений.
                </Line>
            </Paragraph>
            <Paragraph>По школе - предлагаю думать так (скажи, кого добавляем поимённо):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Менеджер школы
                    </Word> - лучшая точка входа. У менеджера административный обзор: он знает семьи, нянь, которые уже
                    забирают детей, и персонал, который ищет подработку. Просьба неформальная, директор для такого - слишком
                    тяжёлая артиллерия.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Классные учителя Кати и Димы
                    </Word> - вторая точка. Учителя видят, кто из взрослых приходит за детьми, и часто знают женщин из
                    школьной среды.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Директор
                    </Word> - я бы оставил в резерве, либо одной вежливой строкой "если вдруг кто-то придёт в голову".
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Теперь агентства - что я нашёл
                </Word>
            </Paragraph>
            <Paragraph>Рынок делится на три яруса, и цены в них очень разные.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ярус 1: Русскоязычные международные агентства
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Home Staff International (home-staff.org)
                </Word> - группа из 9 агентств, работает в Грузии, в базе домработницы, няни, повара, которые уже находятся
                в Грузии. Важные детали механики: работник заключает договор с клиентом на 12 месяцев, в течение договора
                действует гарантийная замена, если работник уволен; вознаграждение агентству рассчитывается индивидуально.
                Агентство заявляет ориентиры: почасово $15-25, с проживанием $1000-2500+, без проживания $1500-3500+;
                комиссию с этих сумм не берут - оплата идёт работодателем напрямую персоналу, вакансии закрываются за 3-5
                дней. Это самый дорогой ярус - но именно тут русскоязычные няни с проверенными анкетами.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ярус 2: Местные грузинские агентства
                </Word> (заметно дешевле, многие кандидаты с разговорным русским)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Агентство "Баиа" (hrbaia.com)
                    </Word> - крупное местное кадровое агентство по домашнему персоналу: няни, домработницы, сиделки.
                    Полезный ориентир по деньгам: в открытой базе кандидаток запросы 1300-2000 лари в месяц - то есть
                    $480-740, ощутимо ниже русскоязычного яруса.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Ძიძების სააგენტო Baby Love
                    </Word> - и вот приятный сюрприз: адрес - Сабуртало, Важа-Пшавела чихи 3. Это ваш район. Контакт через
                    их Facebook-страницу.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Агентство "Табуни"
                    </Word> - профессиональные няни, гувернантки, домашние помощницы; адрес Джавахишвили 75, у
                    Марджанишвили.
                </Line>
                <Line>
                    На <Word>
                        <Emphasis />
                        ss.ge
                    </Word> в разделе вакансий сидят и мелкие агентства (например, "Ниа-Ниа"). Оттуда же полезный ценовой
                    якорь: русскоязычная няня-воспитатель в Ваке, с 9 до 18, зарплата 700 лари - это нижняя граница местного
                    рынка, $260 за полный день. Реальные цены на грузинском рынке гуляют очень широко.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ярус 3: Платформа-гибрид
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    mynanny.ge
                </Word> - не классическое агентство, а платформа: проверки биографии и обучение нянь по программе,
                разработанной с Институтом детского развития Университета Илии; няни сами ставят цены, есть скидки при
                бронировании от 3-5 часов в день. Хороша как раз для нашей запасной роли - разовые вечерние ситтеры, когда
                основная няня недоступна.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Мои оговорки (честно):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Baby Love и Табуни я нашёл через справочники (yell.ge, ostati.ge) - я не смог проверить, активны ли они
                    прямо сейчас. Перед визитом - звонок или проверка их Facebook.
                </Line>
                <Line>Home Staff и Баиа отдают живой контент, выглядят действующими.</Line>
                <Line>Цифры зарплат из объявлений - это запросы, а не сделки.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Моя рекомендация по агентствам:
                </Word> если до них дойдёт - начать с Баиа и Baby Love (местные, ваш ценовой диапазон, Baby Love вообще в
                Сабуртало), а Home Staff держать как дорогой запасной вариант, если понадобится строго русскоязычный
                профессионал с гарантией замены.
            </Paragraph>
            <Paragraph>
                Что дальше - вписываем школьные контакты поимённо? Скажи имена менеджера и учителей, я оформлю полный
                список, и перейдём к текстам.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T13:18:40.127063Z"
        >
            <Origin>019f9e93-d6bc-7f63-89bc-a10114c74d88</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Мои оговорки (честно):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Baby Love и Табуни я нашёл через справочники (yell.ge, ostati.ge) - я не смог проверить, активны ли они
                    прямо сейчас. Перед визитом - звонок или проверка их Facebook.
                </Line>
                <Line>Home Staff и Баиа отдают живой контент, выглядят действующими.</Line>
                <Line>
                    Цифры зарплат из объявлений - это запросы, а не сделки. - оставляем пока только проверенные варианты.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T13:19:04.089121Z"
        >
            <Origin>019f9e93-d6bc-7a0b-bff6-04ca247c4a09</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Секунду, проверю ещё mynanny.ge - у него в выдаче стояла подпись "Copyright 2020", это флажок устаревшего
                сайта.
            </Paragraph>
            <Action>Fetched https://mynanny.ge/en</Action>
            <Paragraph>
                Проверил. Итог по mynanny.ge: сайт загружается и работает, но признаки жизни старые - копирайт 2020, пресса
                о них датируется 2020-2021 (грант GITA, публикации Forbes Georgia того периода). Живой ли у них пул нянь
                прямо сейчас - по сайту не видно. Так что честный статус: "работает, активность не подтверждена". Если
                захотим его использовать как запасной канал для разовых ситтеров - сначала глянуть их Instagram
                (@mynannyge), там будет видно, публикуются ли они.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обновлённый список - только проверенное:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Личные контакты:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Анжелика Стрельченко - рекомендация парикмахера. Писать первой.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Школа (Happy School):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Менеджер школы - <Word>
                        <Emphasis />
                        (имя добавим)
                    </Word>
                </Line>
                <Line>
                    Классные учителя Кати и Димы - <Word>
                        <Emphasis />
                        (имена добавим)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Агентства (проверенные, действующие):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Баиа (hrbaia.com)
                    </Word> - местное, кандидатки в базе просят 1300-2000 лари/мес, есть русскоговорящие
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Home Staff International (home-staff.org)
                    </Word> - русскоязычное, дорогой ярус ($1000+), договор на 12 месяцев с гарантийной заменой. Резерв,
                    если местные каналы не сработают.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вычеркнуто до проверки:
                </Word> Baby Love, Табуни, mynanny.ge (условно - вернём, если их соцсети окажутся живыми).
            </Paragraph>
            <Paragraph>
                Давай имена менеджера и учителей - и список готов. Потом переходим к текстам: Даг подключится, и сделаем три
                варианта - для Анжелики (личное), для школы (тёплое, "наши дети у вас учатся"), для агентств (формальное ТЗ
                с графиком и зарплатой).
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T13:51:50.048930Z"
        >
            <Origin>019f9eb2-3722-759e-bd25-1d3eba07e643</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Школа (Happy School):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Менеджер школы - Светлана @happy_edu_bot</Line>
                <Line>Классные учителя Кати и Димы - Эллада</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T13:52:03.164972Z"
        >
            <Origin>019f9eb2-3722-77f1-9fce-43211f6e4269</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Список финализирован:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Личные контакты:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Анжелика Стрельченко
                    </Word> - рекомендация парикмахера. Писать первой.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Школа (Happy School):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Светлана
                    </Word>, менеджер школы - @happy_edu_bot (Telegram)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Эллада
                    </Word>, классный учитель Кати и Димы
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Агентства (действующие):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Баиа
                    </Word> (hrbaia.com) - местное, ориентир 1300-2000 лари/мес
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Home Staff International
                    </Word> (home-staff.org) - русскоязычное, $1000+, резерв
                </Line>
            </Paragraph>
            <Paragraph>
                Одно замечание по школе: @happy_edu_bot - судя по названию, это бот, то есть общий канал связи со школой, а
                не личный телеграм Светланы. Для нашей просьбы это нормально (сообщение всё равно попадёт к ней), но тон
                стоит взять чуть более официальный, чем в личной переписке - его могут читать и другие сотрудники.
            </Paragraph>
            <Paragraph>
                С Элладой - наоборот, максимально тёплое личное сообщение: она знает Катю и Диму, и просьба "может, вы
                знаете кого-то из школьного окружения" звучит от родителей её учеников совершенно естественно.
            </Paragraph>
            <Paragraph>Список готов. Переходим к части 2 - тексты? Нужно три штуки:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Анжелике
                    </Word> - короткое личное: кто мы, откуда контакт (парикмахер), суть работы, приглашение познакомиться
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Светлане и Элладе
                    </Word> - не объявление, а просьба о рекомендации: ищем женщину для помощи с детьми и домом, два ночных
                    дежурства в неделю, дети учатся у вас, может быть, знаете кого-то надёжного
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Агентствам
                    </Word> - формальное ТЗ: график по дням, обязанности (две квартиры, готовка, ночёвки вт/чт с отводом в
                    школу), требования, вилка зарплаты
                </Line>
            </Paragraph>
            <Paragraph>
                Перед текстами один вопрос, который встанет в каждом из них: какую вилку зарплаты называем? Мы с Дагом
                обсуждали $750-1000 (примерно 2000-2700 лари). Для агентств цифра нужна точно, для Анжелики и школы можно
                "по договорённости". Называем 2000 лари и смотрим на реакцию, или сразу вилку 2000-2500?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T13:55:43.374656Z"
        >
            <Origin>019f9eb5-ca64-74d3-9812-3fd2e7f5031b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Helper in the family - я вижу такую вакансию в списке на одном из сайтов, что ты дал расскажи больше ою этом
                напрвлегии
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T13:56:22.811645Z"
        >
            <Origin>019f9eb5-ca64-7550-8ff5-30391b04ea5a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Это категория с сайта агентства Баиа. Сейчас посмотрю, что у них там конкретно.</Paragraph>
            <Action>Fetched http://hrbaia.com/ge/personali/damxmare</Action>
            <Action>Searched the web for “hrbaia ოჯახში დამხმარე помощница по хозяйству вакансия”</Action>
            <Paragraph>
                Рассказываю. "Helper in the family" - это английский перевод грузинской категории <Word>
                    <Bold />
                    ოჯახში დამხმარე
                </Word> (оджахши дамхмаре, дословно "помощник в семье"), по-русски - <Word>
                    <Bold />
                    помощница по хозяйству
                </Word>. И это важная находка, потому что <Word>
                    <Bold />
                    это и есть наша вакансия
                </Word> - точнее, чем "няня".
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что это за категория
                </Word>
            </Paragraph>
            <Paragraph>
                В грузинской классификации домашнего персонала это отдельная профессия между домработницей и няней:
                агентство Баиа разделяет позиции так: ძიძა (няня), гувернантка, воспитатель, помощница в семейных делах,
                сиделка, уборщица, повар, водитель. "Помощница в семье" - это человек с комбинированными обязанностями:
                уборка, готовка, помощь с детьми школьного возраста, поручения. Ключевое отличие от няни: няню нанимают,
                когда ребёнок - основная работа (малыши, постоянный присмотр). Помощницу - когда дети большие и
                самостоятельные, а нужен человек, который держит дом и подхватывает детей по расписанию. Катя и Дима в школе
                с 10 до 18 - это ровно ваш случай.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Почему это меняет наши тексты
                </Word>
            </Paragraph>
            <Paragraph>
                Если писать в объявлении "няня", часть правильных кандидаток пройдёт мимо (решат, что там младенец), а часть
                профессиональных нянь удивится уборке двух квартир - у нянь высокого яруса уборка часто считается "не моей
                работой". Формулировка "помощница по хозяйству с функциями няни" (или для грузинского рынка - ოჯახში
                დამხმარე) привлекает именно тех, кто ожидает смешанные обязанности. Это та же логика, к которой мы пришли с
                Дагом, просто теперь у неё есть точное название на местном рынке.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что по деньгам в этой категории
                </Word>
            </Paragraph>
            <Paragraph>
                Из открытой базы Баиа: кандидатка 37 лет на позицию "помощница в семье" просит 2000 лари в месяц (правда,
                локация Сурами, не Тбилиси - тбилисские запросы в их базе на смежные позиции 1300-1500 лари). Это запросы
                кандидаток, не сделки, но они хорошо ложатся в нашу вилку 2000-2500 лари с учётом ночёвок.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Практическая деталь про Баиа:
                </Word> у них два офиса, и один - на Важа-Пшавела 76B, то есть в Сабуртало, рядом с вами. Телефоны: +995 598
                857 657 и +995 577 553 867. Туда можно просто зайти или позвонить с готовым ТЗ.
            </Paragraph>
            <Paragraph>
                Чего на сайте нет: условий для работодателя - комиссия, гарантии замены, как у Home Staff. Это выясняется
                звонком, и это первый вопрос, который стоит им задать.
            </Paragraph>
            <Paragraph>
                Вывод для части 2: в тексте для агентств и для Facebook (если до него дойдёт) позицию называем "помощница по
                хозяйству с функциями няни / ოჯახში დამხმარე", а слово "няня" оставляем для личных сообщений Анжелике и
                школе - там оно понятнее и теплее. Согласна?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:04:11.160064Z"
        >
            <Origin>019f9ebd-8797-7193-9264-428f8ec23eb6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                мне нравится эта категория, по сути - это то, что мы ищем. попробуй сделать поиск по русскоязынчм помощницам
                в семье в WEB мало ли, найдем что-то еще интересное
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:04:41.925309Z"
        >
            <Origin>019f9ebd-8797-7f21-9a1f-e43b16b8253e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “помощница по хозяйству в семью Тбилиси русскоязычная ищу работу”</Action>
            <Action>Searched the web for “Telegram чат работа домашний персонал няни Тбилиси релоканты”</Action>
            <Paragraph>
                Сделал два захода. Честный итог: кое-что полезное нашлось, но главное открытие другое - <Word>
                    <Bold />
                    резюме самих помощниц из веба почти не видны
                </Word>, и сейчас объясню почему.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что нашлось нового и живого:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Telegram-чат @jobs_ge
                    </Word> - чат для поиска работы и сотрудников по Грузии, с правилом указывать город; у той же команды
                    есть общие чаты @mytbilisi_chat и каталог всех грузинских чатов @chats_ge. Это, похоже, самая
                    структурированная точка входа в телеграм-рынок - и каталог @chats_ge стоит открыть отдельно: там могут
                    быть профильные чаты именно по домашнему персоналу.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        @rabotaongeorgia
                    </Word> - ещё одна телеграм-группа по работе в Грузии.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Канал "Работа в Тбилиси" (@gruziatbi_vakansii)
                    </Word> - живой, но по содержимому видно, что там в основном офисная и удалённая работа, домашний
                    персонал - изредка.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что оказалось мёртвым или бесполезным:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>jober.ge - объявления "помощница по дому" есть, но датированы 2022 годом. Кладбище.</Line>
                <Line>Российские площадки (НашаНяня.ру и подобные) - Грузию не покрывают.</Line>
                <Line>
                    Layboard - заявляет 18+ вакансий няней по Грузии с модерацией на июль 2026, но это вакансии для
                    соискательниц, а не резюме, и качество там пёстрое.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Почему резюме не находятся из веба - это важно понять.
                </Word> Русскоязычные помощницы в Тбилиси размещают свои анкеты почти исключительно <Word>
                    <Emphasis />
                    внутри
                </Word> Facebook-групп и Telegram-чатов - постами вида "ищу работу помощницей по дому, Сабуртало". Эти посты
                не индексируются поисковиками: Facebook закрыт для краулеров технически, Telegram-чаты видны только изнутри.
                То есть ограничение техническое, а не то, что рынка нет - рынок как раз там и живёт. Отсюда практический
                вывод: искать кандидаток по их объявлениям нужно поиском <Word>
                    <Emphasis />
                    внутри
                </Word> приложений - в Facebook по запросу "ищу работу помощница Тбилиси", в найденных телеграм-чатах по
                слову "помощница". Это твоя часть работы, моя туда не дотягивается.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что это меняет в плане:
                </Word> ничего радикального - подтверждается, что наши выбранные каналы (личные контакты, школа, агентства)
                правильные, а телеграм добавляем одной строкой: @jobs_ge + каталог @chats_ge для поиска профильного чата. И
                в этих чатах работает и обратный ход: не только постить вакансию, но и листать недавние посты самих женщин
                "ищу работу" - там кандидатки, которые активно ищут прямо сейчас.
            </Paragraph>
            <Paragraph>Обновляю список каналов или переходим к текстам?</Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:05:35.321792Z"
        >
            <Origin>019f9ebe-d2ef-7de0-80d6-dd7b07f5c082</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>давай</Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:06:15.213081Z"
        >
            <Origin>019f9ebe-d2ef-7b13-914b-a2635864ee00</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отлично. Вот три текста - черновики, правь смело. Один вопрос из прошлого сообщения остался висеть: вилка
                зарплаты. Я пока поставил так: агентствам - 2000-2500 лари (обсуждаемо), Анжелике и школе - без цифры. Если
                хочешь иначе - скажи, поправлю.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Анжелике (личное, в мессенджер)
                </Word>
            </Paragraph>
            <Paragraph>
                Здравствуйте, Анжелика! Меня зовут Ана, ваш контакт мне дала &#91;имя парикмахера&#93; - сказала, что вы,
                возможно, ищете работу в семье или знаете тех, кто ищет.
            </Paragraph>
            <Paragraph>
                Мы семья в Сабуртало, двое детей-школьников (учатся с 10 до 18, уроки делают в школе). Ищем помощницу по
                хозяйству с функциями няни. Работа выглядит так:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>в будни днем: уборка (у нас две квартиры рядом), приготовление ужина, встреча детей из школы</Line>
                <Line>
                    два фиксированных вечера в неделю (например, вторник и четверг): остаться с детьми на ночь и утром
                    отвести их в школу - школа в паре минут пешком. Отдельное спальное место есть
                </Line>
                <Line>выходные почти не нужны</Line>
            </Paragraph>
            <Paragraph>
                График стабильный, оплата достойная, обсудим при встрече. Если вам это интересно - с удовольствием
                познакомимся. А если не подходит вам - может быть, у вас есть на примете надежный человек? Будем благодарны
                за рекомендацию.
            </Paragraph>
            <Paragraph>Спасибо! Ана</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Светлане (через @happy_edu_bot) и Элладе (лично) - один текст с мелкой разницей
                </Word>
            </Paragraph>
            <Paragraph>
                Здравствуйте, &#91;Светлана / Эллада&#93;! Это Ана, мама Кати и Димы &#91;фамилия/класс&#93;.
            </Paragraph>
            <Paragraph>
                Хотим попросить у вас совета. Мы ищем надежную женщину - помощницу по дому и с детьми: днем помощь по
                хозяйству и ужин, а два вечера в неделю - побыть с детьми до утра и проводить их в школу (мы живем совсем
                рядом со школой).
            </Paragraph>
            <Paragraph>
                Нам кажется, в школьном окружении часто знают таких людей - может быть, кто-то из сотрудников, знакомых или
                мам ищет такую работу? Будем очень благодарны за любую рекомендацию. Условия хорошие, все детали расскажем
                лично.
            </Paragraph>
            <Paragraph>Спасибо большое! Ана, &#91;телефон&#93;</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Для Эллады можно добавить одну теплую строку в начале: "Пользуясь случаем - спасибо вам за детей, они ходят в школу с удовольствием."
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Агентствам (Баиа, при необходимости Home Staff) - формальное ТЗ
                </Word>
            </Paragraph>
            <Paragraph>Вакансия: помощница по хозяйству с функциями няни (ოჯახში დამხმარე)</Paragraph>
            <Paragraph>
                Семья: русскоязычная, район Сабуртало. Двое детей школьного возраста (в школе с 10:00 до 18:00, домашние
                задания делают в школе - днем присмотр не нужен).
            </Paragraph>
            <Paragraph>Обязанности:</Paragraph>
            <Paragraph>
                <List />
                <Line>Уборка двух квартир (обе рядом, в одном районе), стирка, глажка</Line>
                <Line>Приготовление ужина для семьи</Line>
                <Line>Встреча детей после школы, ужин, вечерний присмотр</Line>
                <Line>
                    Две фиксированные ночевки в неделю (дни согласуем, например вт и чт): вечер с детьми, ночь в квартире
                    (отдельное спальное место), утром завтрак и сопровождение в школу - школа в нескольких минутах пешком
                </Line>
            </Paragraph>
            <Paragraph>
                График: 5/2, будни примерно с 13:00-14:00; в дни ночевок - до утра следующего дня. Выходные - не требуются
                или по отдельной договоренности.
            </Paragraph>
            <Paragraph>
                Требования: опыт работы в семье, русский язык (разговорного достаточно), рекомендации с прошлых мест.
                Аккуратность, умение готовить. Ночевки - обязательная часть работы.
            </Paragraph>
            <Paragraph>
                Условия: 2000-2500 лари в месяц в зависимости от опыта, отмененная по нашей инициативе ночевка оплачивается.
                Пробный месяц.
            </Paragraph>
            <Paragraph>Контакт: Ана, &#91;телефон&#93;</Paragraph>
            <Paragraph>Три замечания от меня:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    В тексте для Анжелики я оставил "оплата достойная" без цифры - в личном канале лучше услышать ее
                    ожидания первой. Если она названа парикмахером как опытная работница, ее цифра сама по себе будет
                    разведкой рынка.
                </Line>
                <Line>
                    Возраст детей нигде не указан точно - впиши, как считаешь нужным ("8 и 10 лет" звучит конкретнее и
                    привлекательнее, чем "школьники").
                </Line>
                <Line>
                    В ТЗ для агентства я вписал пункт про оплату отмененной ночевки - это та самая "гарантия в обе стороны",
                    которая делает вакансию привлекательной. Если не хочешь фиксировать это заранее - убери, но я бы
                    оставил.
                </Line>
            </Paragraph>
            <Paragraph>Что правим?</Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:06:23.637561Z"
        >
            <Origin>019f9ebf-906d-7319-8346-e6c64260059d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>выходные почти не нужны - что это значит?</Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:06:33.356448Z"
        >
            <Origin>019f9ebf-906d-761f-95ae-80b9ceba3403</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Справедливый вопрос - формулировка мутная, признаю. Я перенёс её из разговора с Дагом: он сказал, что при
                двух ночёвках среди недели вам с ним выходные почти не понадобятся, у вас гибкая работа. Но это внутренняя
                логика вашего планирования, а в объявлении для кандидатки фраза "почти не нужны" звучит как неопределённость
                - то самое "а вдруг иногда всё-таки нужны?", которое мы договорились не допускать.
            </Paragraph>
            <Paragraph>Для кандидатки вопрос про выходные бинарный: суббота и воскресенье - мои или нет?</Paragraph>
            <Paragraph>Значит, в текстах надо выбрать одну из двух честных формулировок:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вариант А (чистый):
                </Word> "Выходные свободны" / в ТЗ: "График: 5/2, суббота и воскресенье - выходные". Просто и
                привлекательно. Если раз в пару месяцев вам вдруг понадобится суббота - договоритесь отдельно за отдельные
                деньги, это нормально и без записи в вакансии.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вариант Б (с опцией):
                </Word> "Выходные свободны; изредка возможна работа в субботу по предварительной договорённости,
                оплачивается отдельно". Честно, но чуть тяжелее читается.
            </Paragraph>
            <Paragraph>
                Я бы ставил вариант А во все три текста: он сильнее как оффер, а редкие исключения жизнь всё равно оформит
                сама. Какой берём?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:07:31.179791Z"
        >
            <Origin>019f9ec0-9744-74b2-9622-4effd410b2b7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>дай мне финлаьный список, к кому мы обращаемся?</Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:07:43.618463Z"
        >
            <Origin>019f9ec0-9744-7e66-95e2-cac5c44b699a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Финальный список - к кому обращаемся
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Волна 1 - личные каналы (пишем первыми):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Анжелика Стрельченко
                    </Word> - рекомендация парикмахера. Личное сообщение (текст №1)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Светлана
                    </Word>, менеджер Happy School - через @happy_edu_bot (текст №2, чуть более официальный тон)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Эллада
                    </Word>, классный учитель Кати и Димы - лично (текст №2 + тёплая строка)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Волна 2 - агентства (если волна 1 не дала результата за ~1-2 недели):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Баиа (hrbaia.ge)
                    </Word> - местное агентство, офис на Важа-Пшавела 76B (Сабуртало). Телефоны: +995 598 857 657, +995 577
                    553 867. Отдаём ТЗ (текст №3). Первый вопрос им: условия для работодателя - комиссия, гарантия замены
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Home Staff International (home-staff.org)
                    </Word> - русскоязычное, дорогой резерв ($1000+), договор 12 мес. с гарантийной заменой. Только если
                    Баиа не сработает
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Волна 3 - телеграм (параллельно с волной 2 или при желании раньше):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        @jobs_ge
                    </Word> - чат вакансий по Грузии (в посте указать: Тбилиси)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        @chats_ge
                    </Word> - каталог грузинских чатов: глянуть, есть ли профильный чат по домашнему персоналу
                </Line>
                <Line>В этих же чатах - смотреть свежие посты "ищу работу помощницей" и писать кандидаткам напрямую</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вычеркнуто (непроверенные или мёртвые):
                </Word> Baby Love, Табуни, mynanny.ge (вернём, если их соцсети живые), jober.ge, российские площадки.
            </Paragraph>
            <Paragraph>Facebook-группы мы с тобой отложили по твоим личным соображениям - в списке их нет.</Paragraph>
            <Paragraph>
                Во все тексты вношу правку по выходным: вариант А, "выходные свободны". Готово к запуску - начинай с
                Анжелики, и держи меня в курсе, что ответит. Удачи! 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:13:58.074790Z"
        >
            <Origin>019f9ec6-7def-7976-80ed-3f4fab054454</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>агенства - первыми. давай проработает текст</Paragraph>
        </Message>
        <Message
            at="2026-07-26T14:14:17.502108Z"
        >
            <Origin>019f9ec6-7def-70ac-8980-30486ca37593</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Поняла, агентства - первыми. Тогда текст №3 становится главным рабочим документом. Вот доработанная версия с
                правкой по выходным и парой усилений:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вакансия: помощница по хозяйству с функциями няни (ოჯახში დამხმარე)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Семья:
                </Word> русскоязычная, район Сабуртало. Двое детей школьного возраста (в школе с 10:00 до 18:00, домашние
                задания делают в школе - дневной присмотр не нужен).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обязанности:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Уборка двух квартир (обе рядом, в одном районе), стирка, глажка</Line>
                <Line>Приготовление ужина для семьи</Line>
                <Line>Встреча детей после школы, ужин, вечернее время с детьми</Line>
                <Line>
                    Две фиксированные ночёвки в неделю (дни согласуем, например вторник и четверг): вечер с детьми, ночь в
                    квартире, утром завтрак и сопровождение в школу. Школа в нескольких минутах пешком. Отдельное спальное
                    место обеспечено
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    График:
                </Word> 5/2, будни примерно с 13:00-14:00. В дни ночёвок - до утра следующего дня. Суббота и воскресенье -
                выходные.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Требования:
                </Word> опыт работы в семье, рекомендации с прошлых мест, разговорный русский, умение готовить. Ночёвки -
                обязательная часть работы, просим откликаться только при готовности к такому графику.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Условия:
                </Word> 2000-2500 лари в месяц в зависимости от опыта. Ночёвка, отменённая по инициативе семьи,
                оплачивается. Пробный месяц. Стабильный, предсказуемый график без внезапных вызовов.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Контакт:
                </Word> Ана, &#91;телефон&#93;
            </Paragraph>
            <Paragraph>Что я усилил и почему:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        "Просим откликаться только при готовности к ночёвкам"
                    </Word> - фильтр на входе. Агентство будет прогонять свою базу, и эта строка избавит тебя от
                    собеседований с теми, кто "вообще-то ночевать не может, но вдруг договоримся".
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Без внезапных вызовов"
                    </Word> - продающая строка. Для кандидаток главный страх такой работы - что семья будет дёргать в любой
                    момент. Мы прямо говорим: не будем.
                </Line>
                <Line>Убрал канцелярское "присмотр", заменил на "вечернее время с детьми" - мягче.</Line>
            </Paragraph>
            <Paragraph>Два вопроса перед отправкой в Баиа:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Телефон в контакте
                    </Word> - твой или сначала пусть агентство фильтрует и присылает анкеты? Обычный порядок у них: ты
                    отдаёшь ТЗ, они показывают анкеты кандидаток, ты выбираешь, с кем встретиться. Тогда телефон нужен
                    только для связи агентства с тобой.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Дети
                    </Word> - впишем возраст? "Двое детей, 8 и 10 лет" конкретнее. И надо ли упомянуть котов? Для человека,
                    который будет убирать и ночевать, наличие животных - существенная деталь, лучше сказать сразу, чем
                    удивить потом.
                </Line>
            </Paragraph>
            <Paragraph>
                И напоминание: при звонке в Баиа первым делом спроси их условия - размер комиссии и есть ли гарантийная
                замена кандидатки. У Home Staff замена прописана, у Баиа на сайте этого нет - надо выяснить голосом.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:42:55.807935Z"
        >
            <Origin>019fa964-ac28-7a0b-9837-47f93ff30fa9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                в школе с 10:00 до 18:00 -неверно, Клод, школа до 17:00 затем, нам надо кратко указать, что предпотнение
                отдается кандидатам, которые смогут иногда оставаться с детьми на несколько дней пожить, пока мы уездаем в
                отпустк (естестыненно, по согласованию заранее)
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:43:10.150068Z"
        >
            <Origin>019fa964-ac28-74ff-ae63-2e4839c380ac</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Принято, две правки вношу. По второй - да, это важное дополнение, и хорошо, что как "предпочтение", а не
                требование: так мы не сужаем воронку, но сразу видим, кто готов на большее.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вакансия: помощница по хозяйству с функциями няни (ოჯახში დამხმარე)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Семья:
                </Word> русскоязычная, район Сабуртало. Двое детей школьного возраста (в школе с 10:00 до 17:00, домашние
                задания делают в школе - дневной присмотр не нужен).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обязанности:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Уборка двух квартир (обе рядом, в одном районе), стирка, глажка</Line>
                <Line>Приготовление ужина для семьи</Line>
                <Line>Встреча детей после школы, ужин, вечернее время с детьми</Line>
                <Line>
                    Две фиксированные ночёвки в неделю (дни согласуем, например вторник и четверг): вечер с детьми, ночь в
                    квартире, утром завтрак и сопровождение в школу. Школа в нескольких минутах пешком. Отдельное спальное
                    место обеспечено
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    График:
                </Word> 5/2, будни примерно с 13:00-14:00. В дни ночёвок - до утра следующего дня. Суббота и воскресенье -
                выходные.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Требования:
                </Word> опыт работы в семье, рекомендации с прошлых мест, разговорный русский, умение готовить. Ночёвки -
                обязательная часть работы, просим откликаться только при готовности к такому графику.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Предпочтение
                </Word> отдадим кандидаткам, готовым по предварительной договорённости оставаться с детьми на несколько
                дней, когда родители уезжают (с проживанием, оплачивается отдельно).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Условия:
                </Word> 2000-2500 лари в месяц в зависимости от опыта. Ночёвка, отменённая по инициативе семьи,
                оплачивается. Пробный месяц. Стабильный, предсказуемый график без внезапных вызовов.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Контакт:
                </Word> Ана, &#91;телефон&#93;
            </Paragraph>
            <Paragraph>
                Одна деталь, на которую обрати внимание: пункт про "несколько дней с проживанием" немного меняет профиль
                идеальной кандидатки. Женщина с собственными маленькими детьми или больной мамой на руках дважды подумает
                про многодневки - а одинокая или с взрослыми детьми впишется легко. Агентству можно так и сказать голосом:
                "в идеале - человек, который может позволить себе пожить у нас неделю". Они по своей базе сразу поймут, кого
                показывать.
            </Paragraph>
            <Paragraph>
                Остались открытыми два моих вопроса из прошлого сообщения: возраст детей вписываем? Котов упоминаем? (Для
                ночующего человека и то, и другое - значимые детали, я бы вписал оба.)
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:50:10.319548Z"
        >
            <Origin>019fa96b-4a4f-7cbe-a243-34a4988914f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                русскоязычная, - уберем. Даг американец давай добавим - сопровождение детей на внешкольные занятия
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:50:23.192358Z"
        >
            <Origin>019fa96b-4a4f-71e7-9926-bd9ae6cf26a8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Убираю и добавляю. "Разговорный русский" в требованиях оставила - няне же общаться с детьми и с тобой. Если
                хочешь, можно добавить "английский - плюс" для общения с Дагом, скажи.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вакансия: помощница по хозяйству с функциями няни (ოჯახში დამხმარე)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Семья:
                </Word> район Сабуртало. Двое детей школьного возраста (в школе с 10:00 до 17:00, домашние задания делают в
                школе - дневной присмотр не нужен).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обязанности:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Уборка двух квартир (обе рядом, в одном районе), стирка, глажка</Line>
                <Line>Приготовление ужина для семьи</Line>
                <Line>Встреча детей после школы, ужин, вечернее время с детьми</Line>
                <Line>Сопровождение детей на внешкольные занятия</Line>
                <Line>
                    Две фиксированные ночёвки в неделю (дни согласуем, например вторник и четверг): вечер с детьми, ночь в
                    квартире, утром завтрак и сопровождение в школу. Школа в нескольких минутах пешком. Отдельное спальное
                    место обеспечено
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    График:
                </Word> 5/2, будни примерно с 13:00-14:00. В дни ночёвок - до утра следующего дня. Суббота и воскресенье -
                выходные.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Требования:
                </Word> опыт работы в семье, рекомендации с прошлых мест, разговорный русский, умение готовить. Ночёвки -
                обязательная часть работы, просим откликаться только при готовности к такому графику.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Предпочтение
                </Word> отдадим кандидаткам, готовым по предварительной договорённости оставаться с детьми на несколько
                дней, когда родители уезжают (с проживанием, оплачивается отдельно).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Условия:
                </Word> 2000-2500 лари в месяц в зависимости от опыта. Ночёвка, отменённая по инициативе семьи,
                оплачивается. Пробный месяц. Стабильный, предсказуемый график без внезапных вызовов.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Контакт:
                </Word> Ана, &#91;телефон&#93;
            </Paragraph>
            <Paragraph>
                Мелкое соображение по новому пункту: если занятия в определённые дни и это известно - лучше конкретно ("2-3
                раза в неделю, кружки рядом с домом/школой"). Кандидатка сразу прикинет объём. Если расписание кружков ещё
                не устоялось - оставляем как есть, общей строкой.
            </Paragraph>
            <Paragraph>
                И всё ещё жду решения по двум пунктам: <Word>
                    <Bold />
                    возраст детей
                </Word> (8 и 10 - вписываем?) и <Word>
                    <Bold />
                    коты
                </Word> (для ночующей помощницы это точно не сюрприз, который стоит оставлять на собеседование). 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:52:31.336127Z"
        >
            <Origin>019fa96d-7938-7f69-bff0-3787fee082ed</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                График: 5/2, будни примерно с 13:00-14:00. В дни ночёвок - до утра следующего дня. Суббота и воскресенье -
                выходные. - вот этот пункт пометь как под вопросом.
            </Paragraph>
            <Paragraph>
                2000-2500 лари в месяц в зависимости от опыта. Ночёвка, отменённая по инициативе семьи, оплачивается.
                Пробный месяц. Стабильный, предсказуемый график без внезапных вызовов. - хдесь мы не пишем ничего, потмоу
                что нам нужно понимать стоимость услуг, а не обозначать их
            </Paragraph>
            <Paragraph>
                Остались открытыми два моих вопроса из прошлого сообщения: возраст детей вписываем? Котов упоминаем? (Для
                ночующего человека и то, и другое - значимые детали, я бы вписал оба.)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    котов не пишем, потмоу что коты живут только в одном месте, в котором няня не обязательно будет с ними
                    пересекаться
                </Line>
                <Line>возпаст пишем</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:52:47.587652Z"
        >
            <Origin>019fa96d-7939-78b5-a672-36ff09be1059</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Все правки внесла. По возрасту - впиши точные цифры сама, я в разговоре с Дагом называла "8 и 10" как
                предположение, а в документе догадкам не место.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вакансия: помощница по хозяйству с функциями няни (ოჯახში დამხმარე)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Семья:
                </Word> район Сабуртало. Двое детей, &#91;возраст&#93; и &#91;возраст&#93; лет (в школе с 10:00 до 17:00,
                домашние задания делают в школе - дневной присмотр не нужен).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обязанности:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Уборка двух квартир (обе рядом, в одном районе), стирка, глажка</Line>
                <Line>Приготовление ужина для семьи</Line>
                <Line>Встреча детей после школы, ужин, вечернее время с детьми</Line>
                <Line>Сопровождение детей на внешкольные занятия</Line>
                <Line>
                    Две фиксированные ночёвки в неделю (дни согласуем, например вторник и четверг): вечер с детьми, ночь в
                    квартире, утром завтрак и сопровождение в школу. Школа в нескольких минутах пешком. Отдельное спальное
                    место обеспечено
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    График (под вопросом, обсуждается):
                </Word> 5/2, будни примерно с 13:00-14:00. В дни ночёвок - до утра следующего дня. Суббота и воскресенье -
                выходные.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Требования:
                </Word> опыт работы в семье, рекомендации с прошлых мест, разговорный русский, умение готовить. Ночёвки -
                обязательная часть работы, просим откликаться только при готовности к такому графику.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Предпочтение
                </Word> отдадим кандидаткам, готовым по предварительной договорённости оставаться с детьми на несколько
                дней, когда родители уезжают (с проживанием, оплачивается отдельно).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Контакт:
                </Word> Ана, &#91;телефон&#93;
            </Paragraph>
            <Paragraph>
                Логика убранного блока условий мне понятна и она правильная для агентства: мы приходим с ТЗ и спрашиваем
                "сколько это стоит на вашем рынке?" - и агентство называет вилку по своей базе. Так мы получаем разведку цен
                вместо того, чтобы торговаться против собственной цифры. Единственное, что я сохранила бы в голосе (не в
                тексте): когда Баиа спросит бюджет - а они спросят - отвечай "назовите диапазон по вашим кандидаткам с таким
                графиком". Пусть первыми покажут цифры.
            </Paragraph>
            <Paragraph>
                Пометка "под вопросом" у графика - для нас с тобой или собираешься так и отдать агентству? Если отдаём -
                лучше переформулировать в "график обсуждается, ориентировочно с раннего дня, 5/2" без деталей, чтобы не
                выглядело неопределённостью с нашей стороны.
            </Paragraph>
            <Paragraph>Текст готов. Отправляем в Баиа?</Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:52:55.354125Z"
        >
            <Origin>019fa96d-d341-7508-982c-8b5f46670d93</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>9 и 11 лет</Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:53:08.879538Z"
        >
            <Origin>019fa96d-d341-7d80-bba2-d9bd373917fb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Финальный текст для агентства:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вакансия: помощница по хозяйству с функциями няни (ოჯახში დამხმარე)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Семья:
                </Word> район Сабуртало. Двое детей, 9 и 11 лет (в школе с 10:00 до 17:00, домашние задания делают в школе -
                дневной присмотр не нужен).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обязанности:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Уборка двух квартир (обе рядом, в одном районе), стирка, глажка</Line>
                <Line>Приготовление ужина для семьи</Line>
                <Line>Встреча детей после школы, ужин, вечернее время с детьми</Line>
                <Line>Сопровождение детей на внешкольные занятия</Line>
                <Line>
                    Две фиксированные ночёвки в неделю (дни согласуем, например вторник и четверг): вечер с детьми, ночь в
                    квартире, утром завтрак и сопровождение в школу. Школа в нескольких минутах пешком. Отдельное спальное
                    место обеспечено
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    График (обсуждается):
                </Word> ориентировочно 5/2, будни с 13:00-14:00. В дни ночёвок - до утра следующего дня. Суббота и
                воскресенье - выходные.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Требования:
                </Word> опыт работы в семье, рекомендации с прошлых мест, разговорный русский, умение готовить. Ночёвки -
                обязательная часть работы, просим откликаться только при готовности к такому графику.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Предпочтение
                </Word> отдадим кандидаткам, готовым по предварительной договорённости оставаться с детьми на несколько
                дней, когда родители уезжают (с проживанием, оплачивается отдельно).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Контакт:
                </Word> Ана, &#91;телефон&#93;
            </Paragraph>
            <Paragraph>Готово. План действий с Баиа:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Позвонить: +995 598 857 657 или +995 577 553 867 (офис в Сабуртало - Важа-Пшавела 76B, можно и зайти)
                </Line>
                <Line>
                    Первые вопросы им: размер комиссии, кто её платит (семья или кандидатка), есть ли гарантийная замена,
                    если человек не подошёл
                </Line>
                <Line>Отдать ТЗ</Line>
                <Line>Когда спросят бюджет - "назовите диапазон по вашим кандидаткам с таким графиком"</Line>
                <Line>Попросить анкеты, выбрать 2-3 для встречи</Line>
            </Paragraph>
            <Paragraph>
                Возраст 9 и 11 - кстати, хорошая новость для поиска: дети такого возраста самостоятельные, и для опытных
                помощниц это привлекательная вакансия, не изматывающая. Плюс в базах агентств под такой возраст проходят и
                кандидатки "50+", которых часто не берут к малышам - а они как раз самые надёжные для ночёвок и многодневок.
            </Paragraph>
            <Paragraph>
                Удачи со звонком! Расскажешь, что ответят - скорректируем следующий шаг. Если Баиа буксует, переходим к Home
                Staff и телеграму. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:53:53.154448Z"
        >
            <Origin>019fa96e-b92e-7193-972b-1fc1fdbfdd83</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Уборка двух квартир (обе рядом, в одном районе), стирка, глажка - я думаю, что тут надо пояснить, что семья
                живет на два дома, а то непонятно, почеум нам нужна уборка обеих квартир
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:54:02.759607Z"
        >
            <Origin>019fa96e-b92e-7265-a75f-c3aa24d368b7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Согласна, хорошая правка - без пояснения выглядит странно, будто мы сдаём вторую квартиру и хотим уборщицу
                для арендаторов. Вношу:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вакансия: помощница по хозяйству с функциями няни (ოჯახში დამხმარე)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Семья:
                </Word> район Сабуртало. Двое детей, 9 и 11 лет (в школе с 10:00 до 17:00, домашние задания делают в школе -
                дневной присмотр не нужен). Семья живёт на два дома: две квартиры рядом, в одном районе.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обязанности:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Уборка обеих квартир, стирка, глажка</Line>
                <Line>Приготовление ужина для семьи</Line>
                <Line>Встреча детей после школы, ужин, вечернее время с детьми</Line>
                <Line>Сопровождение детей на внешкольные занятия</Line>
                <Line>
                    Две фиксированные ночёвки в неделю (дни согласуем, например вторник и четверг): вечер с детьми, ночь в
                    квартире, утром завтрак и сопровождение в школу. Школа в нескольких минутах пешком. Отдельное спальное
                    место обеспечено
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    График (обсуждается):
                </Word> ориентировочно 5/2, будни с 13:00-14:00. В дни ночёвок - до утра следующего дня. Суббота и
                воскресенье - выходные.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Требования:
                </Word> опыт работы в семье, рекомендации с прошлых мест, разговорный русский, умение готовить. Ночёвки -
                обязательная часть работы, просим откликаться только при готовности к такому графику.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Предпочтение
                </Word> отдадим кандидаткам, готовым по предварительной договорённости оставаться с детьми на несколько
                дней, когда родители уезжают (с проживанием, оплачивается отдельно).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Контакт:
                </Word> Ана, &#91;телефон&#93;
            </Paragraph>
            <Paragraph>
                Перенесла это в блок "Семья" (а не в обязанности) - так пояснение читается как контекст про вас, а строка
                обязанностей осталась короткой. "Живёт на два дома" - формулировка нейтральная и понятная: кандидатка сразу
                видит объём (две квартиры), но без лишних деталей о том, кто где ночует.
            </Paragraph>
            <Paragraph>Теперь всё? Или ещё что-то цепляет глаз перед отправкой?</Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:55:05.082125Z"
        >
            <Origin>019fa96f-d06b-7b1d-9b66-24c33636eee2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                ориентировочно 5/2, будни с 13:00-14:00. - а мы не указали, до скольки часов вечера няня долэжна оставаться
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:55:17.437468Z"
        >
            <Origin>019fa96f-d06b-7384-90a7-a285fbb31ea0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Верно подметила - "с 13:00-14:00" без конца дня повисает в воздухе. Кандидатка не может оценить объём
                работы, не зная, когда она свободна.
            </Paragraph>
            <Paragraph>
                Давай определим. Из нашей логики: дети приходят из школы после 17:00, няня кормит их ужином. Дальше вопрос -
                в обычные дни (не ночёвки) до какого момента она нужна? Варианты:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    А. До прихода родителей, ориентир 19:00-20:00
                </Word> - она передаёт вам детей "из рук в руки" и уходит. Полный день получается ~13:00-19:30, солидные
                6-6,5 часов.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Б. До ужина, ~18:30-19:00
                </Word> - накормила и свободна, вы приходите когда приходите (дети 9 и 11 лет полчаса-час могут быть одни).
                Короче и дешевле.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    В. Гибко: "обычно до 19:00, в отдельные дни по договорённости дольше"
                </Word> - но это опять та неопределённость, которую мы выпалываем из текста.
            </Paragraph>
            <Paragraph>
                Я бы писала вариант А с формулировкой в графике: <Word>
                    <Bold />
                    "будни с 13:00-14:00 до ~19:00 (в дни ночёвок - до утра следующего дня)"
                </Word>. Это честный полный день, и внутри него у вас автоматически есть буфер: если вы задержались до 19:30
                - это не "внезапный вызов", а нормальная погрешность. А если реально вам чаще нужно до 18:00 - скажи,
                поставим Б, это заметно облегчит вакансию.
            </Paragraph>
            <Paragraph>До скольки на самом деле вам нужна няня в обычный будний день?</Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:57:39.538872Z"
        >
            <Origin>019fa972-2699-7218-b65b-fa7def2c6f9b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>"будни с 13:00-14:00 до ~19:00 (в дни ночёвок - до утра следующего дня)" - да, отлично</Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:57:47.814416Z"
        >
            <Origin>019fa972-2699-7f02-9234-5229f9b66822</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Готово, вставила. Полный финальный текст:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Вакансия: помощница по хозяйству с функциями няни (ოჯახში დამხმარე)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Семья:
                </Word> район Сабуртало. Двое детей, 9 и 11 лет (в школе с 10:00 до 17:00, домашние задания делают в школе -
                дневной присмотр не нужен). Семья живёт на два дома: две квартиры рядом, в одном районе.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обязанности:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Уборка обеих квартир, стирка, глажка</Line>
                <Line>Приготовление ужина для семьи</Line>
                <Line>Встреча детей после школы, ужин, вечернее время с детьми</Line>
                <Line>Сопровождение детей на внешкольные занятия</Line>
                <Line>
                    Две фиксированные ночёвки в неделю (дни согласуем, например вторник и четверг): вечер с детьми, ночь в
                    квартире, утром завтрак и сопровождение в школу. Школа в нескольких минутах пешком. Отдельное спальное
                    место обеспечено
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    График (обсуждается):
                </Word> ориентировочно 5/2, будни с 13:00-14:00 до ~19:00 (в дни ночёвок - до утра следующего дня). Суббота
                и воскресенье - выходные.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Требования:
                </Word> опыт работы в семье, рекомендации с прошлых мест, разговорный русский, умение готовить. Ночёвки -
                обязательная часть работы, просим откликаться только при готовности к такому графику.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Предпочтение
                </Word> отдадим кандидаткам, готовым по предварительной договорённости оставаться с детьми на несколько
                дней, когда родители уезжают (с проживанием, оплачивается отдельно).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Контакт:
                </Word> Ана, &#91;телефон&#93;
            </Paragraph>
            <Paragraph>Текст закрыт, все открытые вопросы решены. Впиши телефон - и можно нести в Баиа.</Paragraph>
            <Paragraph>
                Напомню порядок разговора с ними: сначала их условия (комиссия, замена), потом ТЗ, на вопрос о бюджете -
                "покажите диапазон по вашим кандидаткам". И держи меня в курсе: по их реакции и цифрам поймём, идти ли
                параллельно в Home Staff и телеграм. Удачи! 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:58:30.468968Z"
        >
            <Origin>019fa972-f1ef-7af1-8350-ba60775b96a5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>давай этот текст на аглийиский</Paragraph>
        </Message>
        <Message
            at="2026-07-28T15:58:39.477618Z"
        >
            <Origin>019fa972-f1ef-722c-a735-8ddc4a1e9790</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the English version:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Vacancy: Household Helper with Nanny Duties (ოჯახში დამხმარე)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Family:
                </Word> Saburtalo district. Two children, ages 9 and 11 (at school from 10:00 to 17:00, homework is done at
                school - no daytime childcare needed). The family lives between two homes: two apartments close to each
                other, in the same neighborhood.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Responsibilities:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Cleaning both apartments, laundry, ironing</Line>
                <Line>Cooking dinner for the family</Line>
                <Line>Meeting the children after school, dinner, evening time with the kids</Line>
                <Line>Accompanying the children to after-school activities</Line>
                <Line>
                    Two fixed overnight stays per week (days to be agreed, e.g. Tuesday and Thursday): evening with the
                    children, night in the apartment, breakfast in the morning and walking them to school. The school is a
                    few minutes away on foot. A separate sleeping place is provided
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Schedule (to be discussed):
                </Word> approximately 5/2, weekdays from 13:00-14:00 until ~19:00 (on overnight days - until the next
                morning). Saturday and Sunday are days off.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Requirements:
                </Word> experience working with families, references from previous employers, conversational Russian,
                cooking skills. Overnight stays are a mandatory part of the job - please apply only if you are comfortable
                with this schedule.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Preference
                </Word> will be given to candidates who are willing, by prior arrangement, to stay with the children for
                several days when the parents are away (live-in, paid separately).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Contact:
                </Word> Ana, &#91;phone&#93;
            </Paragraph>
            <Paragraph>
                Перевела близко к русской версии, без вольностей. Одна деталь: "разговорный русский" оставила как
                "conversational Russian" - в английской версии это требование по-прежнему важно, ведь няня будет общаться с
                тобой и детьми по-русски. Если эта версия для Дага - готово как есть. Если вдруг для англоязычного агентства
                или площадки - скажи, добавлю строку "English is a plus" 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T16:03:39.124033Z"
        >
            <Origin>019fa977-aa73-7041-b201-b505d4b91153</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Two fixed overnight stays per week (days to be agreed, e.g. Tuesday and Thursday): evening with the
                children, night in the apartment, breakfast in the morning and walking them to school. The school is a few
                minutes away on foot. A separate sleeping place is provided - это должно быть не частью респонсибилитис, а
                большним отделньым абзацем
            </Paragraph>
            <Paragraph>нам нужно, чтобы няня говорила на английском</Paragraph>
            <Paragraph>
                сделай из этого текста текст В АГЕСТВО они знают про рекомендации - им не н адо писать, что они обязательны.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T16:03:58.067764Z"
        >
            <Origin>019fa977-aa73-7f9d-8fde-fd29c9843ec6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the agency-facing version, restructured:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To: Baia Employment Agency
                </Word> <Word>
                    <Bold />
                    Subject: Request for a candidate - Household Helper with Nanny Duties
                </Word>
            </Paragraph>
            <Paragraph>Hello,</Paragraph>
            <Paragraph>
                We are a family in Saburtalo looking for a household helper with nanny duties (ოჯახში დამხმარე) and would
                like to see candidates from your database.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    About the family:
                </Word> Two children, ages 9 and 11, at school from 10:00 to 17:00 (homework is done at school, so no
                daytime childcare is needed). The family lives between two homes - two apartments close to each other in the
                same neighborhood.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Regular duties:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Cleaning both apartments, laundry, ironing</Line>
                <Line>Cooking dinner for the family</Line>
                <Line>Meeting the children after school, dinner, evening time with the kids</Line>
                <Line>Accompanying the children to after-school activities</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Overnight stays - a key part of the role.
                </Word> Two fixed overnights per week (days to be agreed, e.g. Tuesday and Thursday): the helper spends the
                evening with the children, stays overnight in the apartment, makes breakfast in the morning, and walks them
                to school - the school is a few minutes away on foot. A separate sleeping place is provided. Overnights are
                a mandatory part of the job, so we ask to see only candidates who are comfortable with this arrangement. In
                addition, preference will be given to candidates willing, by prior arrangement, to stay with the children
                for several days when the parents are away (live-in, paid separately).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Schedule (to be discussed):
                </Word> approximately 5/2, weekdays from 13:00-14:00 until ~19:00; on overnight days - until the next
                morning. Saturday and Sunday are days off.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Languages:
                </Word> the helper must speak English; conversational Russian is also needed for daily communication with
                the children.
            </Paragraph>
            <Paragraph>
                We would appreciate it if you could tell us your terms (fees, replacement guarantee) and show us the salary
                range for candidates matching this profile, along with available profiles.
            </Paragraph>
            <Paragraph>Thank you! Ana, &#91;phone&#93;</Paragraph>
            <Paragraph>Что я изменила и один флажок:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Формат теперь - письмо агентству, а не объявление: приветствие, просьба показать кандидаток, вопрос про
                    их условия и вилку зарплат встроен в конец (тот самый ход "пусть первыми назовут цифры").
                </Line>
                <Line>
                    Ночёвки - отдельный большой абзац, туда же перенесла многодневки: это единый блок "что у нас
                    особенного".
                </Line>
                <Line>Рекомендации убрала.</Line>
                <Line>
                    <Word>
                        <Bold />
                        Флажок про языки, честно:
                    </Word> требование "английский обязателен + разговорный русский" сильно сужает базу и двигает цену вверх
                    - двуязычные помощницы в Тбилиси это заметно более дорогой и редкий профиль. Если английский нужен на
                    уровне "объясниться с Дагом по-простому" - можно смягчить до "basic English for communication with the
                    father". Если же English must - оставляем как есть, но будь готова, что Баиа покажет мало анкет и
                    дороже. Как правильно?
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T16:09:49.789881Z"
        >
            <Origin>019fa97d-4f21-7eb5-865c-fe1c99a0515f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Отлично! Клод, давай сдеалем списко агенство п онайму персонала, куда мы можем обраититься. Давай прошерстим
                Тбилиси. дай мне ссылки на максималное количество работающих агенств по найму персонала, коготрые ты сможешь
                найти.
            </Paragraph>
            <Paragraph>
                и до того, как дать списко - напиши мне, как должно называться направление работы, которое мне нужно. я
                поищу в файсбуке сама тоже
            </Paragraph>
        </Message>
        <Message
            at="2026-07-28T16:10:58.562912Z"
        >
            <Origin>019fa97d-4f21-77e6-ba4b-1b077efcdb05</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Сначала терминология для твоего поиска в Facebook, потом пойду шерстить агентства (сделаю несколько поисков
                - по-грузински, по-русски, по-английски).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как называется направление:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        По-русски:
                    </Word> "помощница по хозяйству" / "помощница по дому с функциями няни" / "няня-домработница". Общая
                    категория рынка: <Word>
                        <Bold />
                        "домашний персонал"
                    </Word>. Для поиска в Facebook пробуй: <Word>
                        <Emphasis />
                        "домашний персонал Тбилиси"
                    </Word>, <Word>
                        <Emphasis />
                        "помощница по дому Тбилиси"
                    </Word>, <Word>
                        <Emphasis />
                        "няня Тбилиси"
                    </Word> - и смотри и группы, и посты
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        По-грузински:
                    </Word> <Word>
                        <Bold />
                        ოჯახში დამხმარე
                    </Word> (оджахши дамхмаре - "помощница в семье") - это точное название нашей роли. Общая категория:
                    <Word>
                        <Bold />
                        საოჯახო პერსონალი
                    </Word> (домашний персонал). Няня - <Word>
                        <Bold />
                        ძიძა
                    </Word> (дзидза)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        По-английски:
                    </Word> household helper / housekeeper-nanny, категория - <Word>
                        <Bold />
                        domestic staff
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Теперь агентства, поехали:</Paragraph>
            <Action>Searched the web for “დასაქმების სააგენტო ოჯახში დამხმარე ძიძა თბილისი”</Action>
            <Action>Searched the web for “domestic staff agency Tbilisi nanny housekeeper agency”</Action>
            <Paragraph>
                Готово. Прошерстила в три захода (грузинский, английский, плюс предыдущие русские поиски). Вот максимально
                полный список с честными статусами.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ярус 1 - проверенные, работающие:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Баиа (hrbaia.ge / hrbaia.com)
                    </Word> - крупное местное агентство домашнего персонала. Категории: няня, репетитор, гувернантка,
                    помощница в семье, сиделка, уборщица, повар, водитель. Два офиса: Арчила Джорджадзе 5 и Важа-Пшавела 76B
                    (Сабуртало). Тел: +995 577 553 867, +995 598 857 657
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Home Staff International (home-staff.org)
                    </Word> - русскоязычное международное, дорогой ярус. Важное для нас: заявляют англоговорящих кандидаток
                    в базе, работают по договору с гарантийной заменой - замены в течение 30 дней или 12 месяцев в
                    зависимости от типа контракта. С нашим требованием английского этот вариант поднимается в цене смысла
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Supersitter.ge (supersitter.ge)
                    </Word> - платформа-сообщество нянь и домработниц по Грузии, не классическое агентство. Живая:
                    объявления семей о поиске домработниц в Тбилиси датируются "7 дней назад", "9 дней назад", есть и
                    грузинские, и англоязычные посты; ориентиры зарплат в объявлениях - от 2500 лари у семьи в Ваке. Здесь
                    можно и постить вакансию, и листать анкеты
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ярус 2 - работающие доски объявлений, где сидят агентства
                </Word> (не сами агентства, но прямой путь к ним):
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        ss.ge, раздел "Работа"
                    </Word> - агентские вакансии категории "ძიძა, მომვლელი, დამხმარე": например, помощница в семье с
                    суточным графиком за 1000 лари. Фильтруй по Тбилиси
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        joob.ge
                    </Word> - там же публикуются десятки безымянных "დასაქმების სააგენტო" с телефонами; свежие вакансии
                    категории "няня/помощница" датируются 2025-2026. По этим телефонам сидят мелкие живые агентства
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ярус 3 - существуют, но проверь перед обращением:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Educare Global Consulting (educareglobalconsulting.com)
                    </Word> - премиум-агентство нянь в Тбилиси: британские, Монтессори, мультиязычные няни для экспатов и
                    VIP-семей. Явно дорогой сегмент, но английский там гарантирован. Насколько живое - проверить письмом
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Агентство "Гадиа"
                    </Word> - мелькает в свежих объявлениях (октябрь 2025) как действующее грузинское агентство по няням и
                    сиделкам, но своего сайта я у него не нашла - только объявления на moedani.online
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        mynanny.ge
                    </Word> - сайт работает, активность не подтверждена (копирайт 2020). Проверить их Instagram @mynannyge
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Baby Love
                    </Word> (Сабуртало, Важа-Пшавела чихи 3) и <Word>
                        <Bold />
                        Табуни
                    </Word> (Джавахишвили 75) - из справочников, живость не проверена. Звонок или их Facebook
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Международные платформы (слабое покрытие Грузии, но существуют):
                </Word> GreatAuPair - анкеты хаускиперов по Тбилиси есть, но редкие и в основном иностранки.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Мой порядок действий при твоём требовании английского:
                </Word> Баиа (спросить прямо: "есть ли англоговорящие?") → Supersitter.ge (постить вакансию + смотреть
                анкеты) → Home Staff (у них англоговорящие заявлены официально) → Educare, если бюджет позволит премиум.
                Мелкие агентства с досок - запасной ход, если первые четыре не дадут кандидаток с английским.
            </Paragraph>
            <Paragraph>
                И для твоего поиска в Facebook - ещё раз ключи: <Word>
                    <Emphasis />
                    "домашний персонал Тбилиси"
                </Word>, <Word>
                    <Emphasis />
                    "помощница по дому Тбилиси"
                </Word>, <Word>
                    <Emphasis />
                    "няня Тбилиси"
                </Word>, по-грузински <Word>
                    <Emphasis />
                    "ოჯახში დამხმარე"
                </Word>. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T09:29:54.332309Z"
        >
            <Origin>019fbca8-6b44-7de9-a006-cd98e50013a9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Home Staff International (home-staff.org) - русскоязычное международное, дорогой ярус. Важное для нас:
                заявляют англоговорящих кандидаток в базе, работают по договору с гарантийной заменой - замены в течение 30
                дней или 12 месяцев в зависимости от типа контракта. С нашим требованием английского этот вариант
                поднимается в цене смысла - Клод, ты дал мне этот контакт
            </Paragraph>
            <Paragraph>я смотрю их сайт и не вижу, что они работают в Тбилиси. перепроверь себя</Paragraph>
            <Attachment>Uploaded “1785576550407_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-01T09:30:24.755405Z"
        >
            <Origin>019fbca8-6b44-752e-ada1-3bd681a3c9a7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Проверяю. Ты права, что офиса в Грузии в контактах нет - сейчас посмотрю их страницы про Грузию ещё раз.
            </Paragraph>
            <Action>Fetched https://home-staff.org/staff/housekeeper-georgia</Action>
            <Paragraph>Ты права, и я исправляю свою оценку. Вскрыла их сайт глубже - вот что там на самом деле:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Офисы:
                </Word> Таллин, Майами, Дубай, Лондон. <Word>
                    <Bold />
                    Телефоны:
                </Word> Великобритания, ОАЭ, США, Украина, Франция, Польша. <Word>
                    <Bold />
                    В Грузии - ничего:
                </Word> ни офиса, ни грузинского номера.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Откуда взялась "Грузия":
                </Word> у них на сайте ~55 одинаковых страниц-шаблонов под каждую страну - Австрия, Азербайджан, Вьетнам,
                Япония... и Грузия в том же списке. Текст "предоставляем услуги в Тбилиси, Батуми" - это SEO-заготовка, где
                меняется только название города. Фраза "кандидатки уже находятся в Тбилиси или готовы переехать" -
                маркетинг, который проверить нельзя. Я в прошлых ответах приняла эти страницы за признак реальной работы в
                Грузии - это была моя ошибка чтения, спасибо, что поймала.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что это значит практически:
                </Word> Home Staff - это удалённое агентство "по всему миру", которое под грузинский запрос будет искать
                кандидаток дистанционно, скорее всего с релокацией. Для нашей задачи - женщина из Сабуртало, которая дважды
                в неделю ночует и водит детей в школу за пару минут пешком - это конструкция наоборот. Плюс их модель
                "high-profile clients", полиграфы и гонорар процентом от годовой зарплаты - совсем другой бюджетный этаж.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Переношу их из яруса "проверенные" в "нерелевантные для нашей задачи".
                </Word> Обновлённая рабочая тройка:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Баиа
                    </Word> - реальное местное агентство, офис в Сабуртало, живая база кандидаток
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Supersitter.ge
                    </Word> - живая грузинская платформа, свежие объявления
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Телеграм/доски
                    </Word> (@jobs_ge, ss.ge, joob.ge) - прямой выход на мелкие местные агентства и кандидаток
                </Line>
            </Paragraph>
            <Paragraph>
                Если захочется второе полноценное агентство в пару к Баиа - надо проверять звонком Baby Love (Сабуртало) и
                Табуни, других подтверждённых местных я не нашла.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T09:32:53.954938Z"
        >
            <Origin>019fbcab-4adb-7abf-9595-c671601886af</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>а здесь вообще попросили пройти анкету на поиск няни, а потом попросили заплатить дентги</Paragraph>
            <Paragraph>проверь</Paragraph>
            <Attachment>Uploaded “1785576749786_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-01T09:33:22.738835Z"
        >
            <Origin>019fbcab-4adb-7b30-8189-1d2f0d507cb3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Вижу на скриншоте "Buy a membership" - похоже, у них платный доступ. Проверяю, что это за модель и сколько.
            </Paragraph>
            <Action>Searched the web for “supersitter.ge membership цена подписка отзывы няня”</Action>
            <Paragraph>Проверила. Вот картина:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Это сеть платформ
                </Word> - supersitter.ge / supersitter.bg (Болгария) / supersitter.gr (Греция), один движок и одна
                бизнес-модель. И модель у них ровно та, с которой ты столкнулась: полная функциональность страницы доступна
                пользователям, которые платят членский взнос по фиксированной системе - платные premium-пользователи
                получают дополнительные функции платформы. То есть: смотреть анкеты можно бесплатно, а связаться с
                кандидаткой - только после оплаты членства.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Противоречие, которое стоит отметить:
                </Word> на главной странице их маркетинг обещает "наш сайт - самый быстрый и лёгкий способ найти помощницу,
                и это не будет стоить ни копейки" - а по факту анкета ведёт на пейволл. Это не обязательно мошенничество -
                freemium-пейволл после сбора данных это стандартная модель всей этой индустрии (у международного Sitly в
                отзывах ровно те же жалобы: бесплатная версия не даёт ничего, писать няням можно только за подписку). Но
                обещание "бесплатно" на главной при платном доступе к сути сервиса - это как минимум лукавый маркетинг.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Чего я не смогла найти:
                </Word> размер их взноса для .ge и независимые отзывы именно о грузинской версии - работает ли база,
                отвечают ли кандидатки, стоит ли членство своих денег. Пусто. А "1590 анкет" на главной - цифра самой
                платформы, проверить её нельзя.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Моя честная поправка к рекомендации:
                </Word> я ставила Supersitter в топ-3 по признаку "свежие объявления есть, значит платформа живая" -
                объявления и правда живые, но я не видела пейволла за анкетой. С учётом его: <Word>
                    <Bold />
                    не плати им сейчас.
                </Word> У тебя есть бесплатные каналы с более высокой ожидаемой отдачей: Анжелика, школа, Баиа (агентство
                берёт деньги за результат, а не за доступ к базе), Facebook и телеграм. Supersitter имеет смысл только если
                всё это забуксует - и тогда перед оплатой напиши в их поддержку и спроси прямо: сколько активных анкет
                помощниц по хозяйству в Сабуртало за последний месяц. По ответу будет видно, есть ли за пейволлом жизнь.
            </Paragraph>
            <Paragraph>
                Список каналов сужается, но то, что остаётся - надёжнее: <Word>
                    <Bold />
                    Баиа → Анжелика → школа → твой ручной поиск в FB/телеграме.
                </Word>
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T09:33:30.130984Z"
        >
            <Origin>019fbcab-dd40-79c1-8b9e-7c218081ba00</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Телеграм/доски (@jobs_ge, ss.ge, joob.ge) - прямой выход на мелкие местные агентства и кандидаток - давай
                проработаем вот это
            </Paragraph>
            <Paragraph>мне нужны мелкие местные агества</Paragraph>
        </Message>
        <Message
            at="2026-08-01T09:34:22.329037Z"
        >
            <Origin>019fbcab-dd40-7226-89b7-280bf085f1c2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “დასაქმების სააგენტო ძიძა ოჯახში დამხმარე თბილისი ტელეფონი 2026”</Action>
            <Paragraph>
                Проработала. Сразу главный вывод, чтобы ожидания были правильные: <Word>
                    <Bold />
                    у мелких тбилисских агентств почти никогда нет сайтов.
                </Word> Они живут как постоянные публикаторы на досках (ss.ge, joob.ge) и в Facebook, под подписью
                "დასაქმების სააგენტო" плюс телефон. Поэтому "список мелких агентств" выглядит не как каталог ссылок, а как
                список зацепок с телефонами. Вот что удалось выцепить поимённо:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Конкретные зацепки:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Агентство "Ниа-Ниа" (სააგენტო "ნია-ნია")
                    </Word> - постоянный публикатор на ss.ge в категории "ძიძა, მომვლელი, დამხმარე". Размещает вакансии нянь
                    и помощниц, например: няня к 3-летнему ребёнку с суточным графиком от 1000 лари, помощница в семье с
                    суточным графиком 1000 лари. Их посты видны в категории по ссылке: ss.ge/ka/jobs/list?TypeId=50 -
                    открой, найди их объявление, там телефон
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Агентство "Гадиа"
                    </Word> - живое (объявление октября 2025 на moedani.online), няни и сиделки, работает по-грузински.
                    Контакт только через их объявления на moedani.online
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Безымянное агентство на Марджанишвили
                    </Word> - приглашают звонить или приходить: Тбилиси, Марджанишвили, пр. Агмашенебели 108, 3-й этаж;
                    категории включают няню, помощницу в семье, сиделку. Формат "приди ногами" - старая школа
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Агентство с вакансией "няня/помощница" в Ваке
                    </Word> (суточный график, 2000 лари, тел. 599 073 591) - но объявление 2024 года, номер может быть мёртв
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Плюс одна находка другого сорта:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Государственное агентство содействия занятости
                    </Word> (დასაქმების ხელშეწყობის სახელმწიფო სააგენტო) - Тбилиси, ул. М. Асатиани 9. Это бесплатная
                    государственная служба с базой соискателей, у них есть категории домашнего персонала. Медленнее
                    частников, но ноль комиссии и реальные местные кандидатки. Их портал - worknet.gov.ge
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как реально работать с этим слоем рынка
                </Word> (это важнее списка): открываешь ss.ge, категория "Работа" → "ძიძა, მომვლელი, დამხმარე", и joob.ge,
                категория "მომვლელი, ძიძა". Листаешь свежие посты за последние 2-4 недели. Всё, что подписано "დასაქმების
                სააგენტო" - это и есть мелкие агентства: звонишь по номеру из поста и говоришь, что ты семья и ищешь
                кандидатку (скажи "оджахши дамхмаре" - поймут сразу). Один вечер такого обзвона даст тебе 3-5 живых мелких
                агентств - больше, чем любой мой веб-поиск, потому что эти конторы существуют только внутри досок.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Честные пометки:
                </Word> "Ниа-Ниа" и "Гадиа" - названия из живых объявлений, но я не знаю их условий и репутации; телефоны в
                п.3-4 не проверены на живость; про госагентство не знаю, насколько быстро оно шевелится. И предупреждение: у
                мелких агентств бывает модель "оплата с соискательницы" - это для тебя бесплатно, но такие конторы иногда
                гонят слабых кандидаток потоком. Первый вопрос любому из них: кто платит комиссию и есть ли замена, если
                человек не подошёл.
            </Paragraph>
            <Paragraph>
                Хочешь, составлю короткий скрипт звонка по-грузински (транслитерацией) для этих номеров? Или грузинскую
                версию нашего ТЗ - мелкие агентства по-английски вряд ли читают, а наше требование английского у кандидатки
                им надо будет объяснить.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-01T09:50:11.393747Z"
        >
            <Origin>019fbcbb-2342-7c73-a65e-e52ea77553b7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>что тут?</Paragraph>
            <Attachment>Uploaded “1785577807385_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-01T09:50:22.648078Z"
        >
            <Origin>019fbcbb-2342-7c2c-a2ac-6e91d818eb1f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Это письмо от Supersitter.ge (no-reply@supersitter.ge). Перевожу с грузинского:</Paragraph>
            <Paragraph>"Спасибо,</Paragraph>
            <Paragraph>
                Ваше объявление опубликовано. Напоминание: кроме нянь, в Supersitter вы можете найти домработниц
                (დიასახლისები), репетиторов и специалистов по уходу за домашними животными. Если вам нужны такие услуги,
                создайте новое объявление.
            </Paragraph>
            <Paragraph>Свои объявления вы можете посмотреть здесь &#91;ссылка&#93;."</Paragraph>
            <Paragraph>
                То есть: твоя анкета, которую ты заполняла, <Word>
                    <Bold />
                    опубликована
                </Word> - несмотря на то, что платить ты не стала. Это автоматическое подтверждение плюс лёгкая реклама их
                остальных категорий.
            </Paragraph>
            <Paragraph>
                Практический смысл: твоё объявление теперь висит в их базе, и кандидатки могут его видеть. Как обычно
                устроено в их модели (по терминам сестринских сайтов сети): бесплатно - разместить и получать отклики, а
                платное членство понадобится, скорее всего, когда захочешь сама написать кандидатке первой или открыть
                контакты откликнувшихся. Так что вариант "повесить и забыть" тебе ничего не стоит: если кто-то откликнется
                сам - посмотрим, что платформа даст открыть бесплатно.
            </Paragraph>
            <Paragraph>
                Ничего делать с этим письмом не нужно. Разве что по ссылке "აქ" можно зайти проверить, как выглядит твоё
                объявление со стороны. И если при заполнении анкеты ты указывала телефон - жди, что могут звонить напрямую,
                минуя платформу: для нас это как раз лучший исход. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-03T13:53:40.290772Z"
        >
            <Origin>019fc7e6-ae6e-7661-b5b8-09f074ab18c8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, давай еще раз пройдемся по маленьким агествам</Paragraph>
        </Message>
        <Message
            at="2026-08-03T13:54:40.326761Z"
        >
            <Origin>019fc7e6-ae6e-753e-bff1-3c008966a35f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Давай. Сделаю ещё несколько заходов с других углов - в прошлый раз я шла через ss.ge и joob.ge, теперь
                попробую другие доски и Facebook-страницы агентств.
            </Paragraph>
            <Action>Searched the web for “სააგენტო ძიძა დამხმარე moedani gancxadebebi თბილისი”</Action>
            <Action>Searched the web for “"დასაქმების სააგენტო" ძიძა ოჯახში დამხმარე facebook გვერდი”</Action>
            <Paragraph>Прошлась ещё раз, с новых углов. Улов такой:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Подтверждённые активные мелкие агентства (новое):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Агентство "Гадиа" (Სააგენტო "გადია")
                    </Word> - теперь подтверждено как активное: на moedani.online висит целая пачка их свежих объявлений по
                    Тбилиси - "ищем няню/помощницу с высокой ответственностью", "24-часовая няня" и другие. Работают
                    по-грузински, специализация ровно наша: ძიძა/დამხმარე. Прямая ссылка на выдачу с их постами:
                    moedani.online/tbilisi/search/job/vacancies/ektani/ - открой любое их объявление, внутри телефон
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Безымянное агентство с профилем на joob.ge
                    </Word> - важная механика, которую я в этот раз увидела: на joob.ge у каждого публикатора есть
                    страница-профиль, где собраны все его вакансии. У одного такого агентства в профиле: помощница в семье в
                    Ваке, русскоязычная няня, няня-помощница и ещё десяток позиций. То есть это живая контора с потоком.
                    Ссылка на профиль: joob.ge/დასაქმების-სააგენტო-გთა-20/
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Ниа-Ниа"
                    </Word> - подтверждается повторно на ss.ge, категория "ძიძა, მომვლელი, დამხმარე": няня с суточным
                    графиком от 1000 лари, помощница в семье 1000 лари
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Полезная деталь про цены с сайта Баиа
                </Word>, раз уж всплыла: агентство пишет, что не устанавливает расценки на труд персонала - зарплата
                определяется текущей рыночной стоимостью. Это подтверждает нашу тактику "пусть рынок назовёт цифру первым".
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    И главное - метод, который я в этот раз разглядела до конца.
                </Word> У досок есть скрытая структура: каждое "დასაქმების სააგენტო" - это профиль пользователя, и по клику
                на имя публикатора открываются ВСЕ объявления этой конторы. Значит, твой алгоритм на один вечер:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        joob.ge
                    </Word> → категория "მომვლელი, ძიძა" (joob.ge/category/momvleli/) → тыкаешь в посты агентств → в каждом
                    профиле телефон и весь их ассортимент
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ss.ge
                    </Word> → Работа → "ძიძა, მომვლელი, დამხმარე" → то же самое по публикаторам
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        moedani.online
                    </Word> → поиск "სააგენტო" по Тбилиси → сейчас там доминирует Гадиа
                </Line>
            </Paragraph>
            <Paragraph>
                Телефоны спрятаны внутри объявлений (страницы рендерятся скриптами, мой fetch их не достаёт), так что
                финальный клик - за тобой. Но структурно картина полная: <Word>
                    <Bold />
                    Баиа (крупное) + Гадиа (среднее, активное) + Ниа-Ниа + профильные конторы joob.ge
                </Word> - это и есть весь видимый снаружи слой мелких агентств Тбилиси.
            </Paragraph>
            <Paragraph>
                Из прошлого захода в силе: безымянное агентство на Агмашенебели 108 (3 этаж, "приходите ногами") и госслужба
                занятости на Асатиани 9 / worknet.gov.ge как бесплатный вариант.
            </Paragraph>
            <Paragraph>
                Дать тебе короткий скрипт звонка по-грузински транслитерацией? Для Гадиа и контор с joob.ge он пригодится -
                там английский маловероятен, а по-русски как повезёт.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-03T13:55:49.455995Z"
        >
            <Origin>019fc7e8-ba9b-756c-83b0-6924b5021638</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Подтверждённые активные мелкие агентства (новое):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Агентство "Гадиа" (Სააგენტო "გადია") - теперь подтверждено как активное: на moedani.online висит целая
                    пачка их свежих объявлений по Тбилиси - "ищем няню/помощницу с высокой ответственностью", "24-часовая
                    няня" и другие. Работают по-грузински, специализация ровно наша: ძიძა/დამხმარე. Прямая ссылка на выдачу
                    с их постами: moedani.online/tbilisi/search/job/vacancies/ektani/ - открой любое их объявление, внутри
                    телефон
                </Line>
                <Line>
                    Безымянное агентство с профилем на joob.ge - важная механика, которую я в этот раз увидела: на joob.ge у
                    каждого публикатора есть страница-профиль, где собраны все его вакансии. У одного такого агентства в
                    профиле: помощница в семье в Ваке, русскоязычная няня, няня-помощница и ещё десяток позиций. То есть это
                    живая контора с потоком. Ссылка на профиль: joob.ge/დასაქმების-სააგენტო-გთა-20/
                </Line>
                <Line>
                    "Ниа-Ниа" - подтверждается повторно на ss.ge, категория "ძიძა, მომვლელი, დამხმარე": няня с суточным
                    графиком от 1000 лари, помощница в семье 1000 лари -
                </Line>
            </Paragraph>
            <Paragraph>дай мне адреса электронок этих агенства</Paragraph>
        </Message>
        <Message
            at="2026-08-03T13:56:12.642536Z"
        >
            <Origin>019fc7e8-ba9b-7b76-b031-d7cd2696c1a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “სააგენტო გადია კონტაქტი ელფოსტა მეილი”</Action>
            <Paragraph>
                Честный ответ: <Word>
                    <Bold />
                    электронных адресов у этих агентств в открытом доступе нет
                </Word> - я поискала целенаправленно, выдача возвращает только государственные учреждения со словом
                "сааგенто" в названии. И скорее всего их не существует вовсе.
            </Paragraph>
            <Paragraph>
                Это не случайность, а устройство этого слоя рынка: мелкие тбилисские агентства домашнего персонала - это по
                сути один-два человека с телефоном. Их рабочие каналы: <Word>
                    <Bold />
                    звонок, WhatsApp/Viber на тот же номер, Facebook Messenger.
                </Word> Почта им не нужна - их клиентки (и кандидатки, и семьи) живут в телефоне. У Гадиа и Ниа-Ниа нет ни
                сайтов, ни публичных ящиков; у безымянных контор с joob.ge - тем более.
            </Paragraph>
            <Paragraph>Что реально работает с ними вместо почты:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Достать номер из объявления
                    </Word> (кнопка "показать телефон" внутри поста на moedani/ss.ge/joob.ge - она открывается в браузере,
                    это минута)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Написать в WhatsApp на этот номер
                    </Word> - вот это и есть их "электронка". Туда можно отправить наше ТЗ текстом целиком, как письмо.
                    Грузинские конторы прекрасно отвечают в WhatsApp, и письменный след у тебя сохранится
                </Line>
                <Line>
                    У Гадиа возможно есть Facebook-страница - поищи "გადია" прямо в поиске Facebook, я снаружи проверить не
                    могу
                </Line>
            </Paragraph>
            <Paragraph>
                Единственные каналы с настоящей почтой из нашего списка: <Word>
                    <Bold />
                    Баиа
                </Word> (у них на сайте hrbaia.com есть форма и контакты) и <Word>
                    <Bold />
                    госагентство занятости
                </Word> (worknet.gov.ge). У остальных - телефон или ничего.
            </Paragraph>
            <Paragraph>
                Если хочешь действовать письменно, предлагаю так: я переведу наше ТЗ на грузинский одним аккуратным
                сообщением для WhatsApp - и ты разошлёшь его по номерам из объявлений Гадиа, Ниа-Ниа и профиля joob.ge. Один
                текст, три-четыре отправки, письменно, без звонков. Делаем?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T09:23:41.292395Z"
        >
            <Origin>019fdb89-0a6b-7541-b006-41eb4a51d878</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>я не получила откликов от агенств недвижимости</Paragraph>
            <Paragraph>
                давай приступим к поиску нянь самим. моя задача - понять, что работники в этой сфере ожидают от семьи - зп,
                обязанности и рочее это поомет мне сформировать реальное предложение
            </Paragraph>
            <Paragraph>помоги мне найти сайты для поиска нянь  в Тюилиси</Paragraph>
        </Message>
        <Message
            at="2026-08-07T09:24:28.658593Z"
        >
            <Origin>019fdb89-0a6b-78de-b697-d1d107b66ebc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “ვეძებ სამუშაოს ძიძა ოჯახში დამხმარე თბილისი რეზიუმე”</Action>
            <Paragraph>
                Нашла ровно то, что нужно - включая один новый сайт, который идеально под твою задачу. Вот рабочий набор:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Сайты, где няни и помощницы сами публикуют анкеты:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        jobs.ss.ge - раздел "Резюме"
                    </Word> - главная находка по объёму. Прямая ссылка на нужную категорию:
                    jobs.ss.ge/en/l/resumes?spheres=50 (это категория "ძიძა, მომვლელი, დამხმარე"). Там живые анкеты с
                    телефонами: "ищу работу помощницей в семье или готовить обеды", "буду работать помощницей, желательно
                    районы Нуцубидзе плато, Важа-Пшавела или Делиси" - смотри, это же твои соседи по Сабуртало!
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        damkhmare.ge
                    </Word> - новый улов: сайт, который так и называется "Помощница". Специализация: няня, помощница в
                    семье, сиделка, уборщица. Кандидатки постят сами, телефоны прямо в объявлениях: "работаю в двух семьях 6
                    лет, возьму ещё 1-2 дня в неделю" и подобное. Компактный, но целевой на 100%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Supersitter.ge
                    </Word> - твоё объявление там уже висит; анкеты нянь и "housewives" можно листать бесплатно, платно
                    только связываться первой. Для изучения ожиданий листание бесплатное - уже полезно
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        moedani.online
                    </Word> - помимо агентских вакансий там есть посты "ვეძებ სამუშაოს" (ищу работу) от самих женщин, ищи по
                    Тбилиси
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        worknet.gov.ge
                    </Word> - государственная база соискателей, бесплатная
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Facebook/Telegram
                    </Word> - твой ручной поиск: группы по ключам "домашний персонал Тбилиси", "няня Тбилиси", チат @jobs_ge
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что работницы этой сферы ожидают - сводка по всем цифрам, которые мы насобирали:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Нижний этаж: русскоязычная няня на полный день (9-18) в Ваке - 700 лари/мес; агентские "суточные" няни и
                    помощницы - от 1000 лари/мес. Это грузинский локальный рынок, и по нашим меркам это очень немного
                </Line>
                <Line>Середина: запросы кандидаток в базе Баиа - 1300-2000 лари/мес</Line>
                <Line>
                    Живущая в семье 24/7 няня - 2000 лари/мес с полным пансионом (объявление старое, 2021, но структура
                    "живёт в семье = еда и жильё включены" стандартна)
                </Line>
                <Line>
                    Верхний этаж: семья в Ваке предлагает от 2500 лари домработнице; средняя зарплата по стране 2360 лари -
                    всё выше неё уже "хорошая работа"
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Практический вывод для твоего предложения:
                </Word> наша конструкция (день + 2 ночёвки, две квартиры, английский) с бюджетом 2000-2500 лари сидит
                уверенно выше середины рынка - это привлекательное предложение. Главный ценодвигатель - твой языковой
                фильтр: обычная грузинка с разговорным русским впишется в эти деньги легко, а вот "и английский тоже" -
                редкий зверь, за него могут просить верх вилки и выше.
            </Paragraph>
            <Paragraph>
                Теперь у тебя есть метод изучения: полистай анкеты на jobs.ss.ge и damkhmare.ge, выпиши 10-15 запросов
                зарплат и требований - и увидишь реальное распределение своими глазами. Хочешь, я параллельно составлю тебе
                шаблон-таблицу для этих выписок (имя/район/опыт/языки/запрос зарплаты/график), чтобы сравнивать было удобно?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T10:35:46.672510Z"
        >
            <Origin>019ff064-723c-79ef-90ea-75f842750268</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>почему по ссылке jobs.ss.ge - раздел "Резюме"  я вижу всего одно объявление?</Paragraph>
            <Attachment>Uploaded “1786444523151_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-11T10:36:03.667017Z"
        >
            <Origin>019ff064-723c-74cf-b7bb-dc0011df8746</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Потому что ты ищешь текстом, а надо фильтром. Смотри, что произошло:</Paragraph>
            <Paragraph>
                В строке поиска у тебя набрано "ძიძა, მომვლელი, დამხმარე" как <Word>
                    <Bold />
                    текстовый запрос
                </Word> - и сайт ищет резюме, где эта фраза целиком встречается в тексте анкеты. Такое совпадение нашлось
                одно (у Элисо, которая буквально так и написала). Все остальные анкеты - где женщины пишут своими словами
                "ვიმუშავებ ძიძად" или "ვეძებ სამუშაოს დამხმარედ" - под точную фразу не попали.
            </Paragraph>
            <Paragraph>
                А "ძიძა, მომვლელი, დამხმარე" - это на самом деле <Word>
                    <Bold />
                    название категории
                </Word> (Fields), и выбирать её нужно галочкой в левой панели, а не текстом.
            </Paragraph>
            <Paragraph>Как исправить, два способа:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Прямая ссылка с фильтром категории:
                    </Word> jobs.ss.ge/ka/l/resumes?spheres=50&amp;cities=95 - это категория "няня, сиделка, помощница" +
                    Тбилиси, без текстового поиска
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Руками:
                    </Word> очисти строку поиска (крестик), оставь вкладку "Job seekers", в списке Fields слева проскролль
                    ниже - там после "Cleaning", "Protection, security" и прочих будет категория про нянь - поставь галочку
                    и жми Found
                </Line>
            </Paragraph>
            <Paragraph>
                Должно открыться на порядок больше анкет. Кстати, даже эта единственная Элисо уже дала полезную точку
                данных: "няня / сиделка / помощница по дому, 700-1000 лари в месяц" - нижний этаж рынка, о котором мы
                говорили. Собери таких точек 10-15 - и картина ожиданий сложится сама. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:18:31.403878Z"
        >
            <Origin>019ff08b-8f66-79c0-829f-7e90c4df49bc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, переведи это на англйиский дословно:</Paragraph>
            <Paragraph>Baby Parking - это новый проект Happy School по подбору проверенных нянь 🧑‍🍼</Paragraph>
            <Paragraph>
                Каждая няня проходит многоэтапный отбор: интервью, проверку рекомендаций, обучение и тестовое задание.
                Только после успешного прохождения всех этапов специалист попадает в нашу базу.
            </Paragraph>
            <Paragraph>
                Теперь про само мероприятие ☺️ Оно прошло в Красном парке в Сабуртало. Наши няни два часа совершенно
                бесплатно играли с детьми, проводили активные игры, эстафеты, запускали мыльные пузыри, играли с мячами и
                обручами. Было много смеха, движения и счастливых детских эмоций.
            </Paragraph>
            <Paragraph>
                Мы очень рады такому тёплому старту нашего проекта и благодарим всех, кто провёл этот день вместе с нами!
            </Paragraph>
            <Paragraph>
                Baby Parking уже работает и принимает заявки на подбор нянь как на несколько часов, так и на регулярной
                основе. <Word>
                    <Reference>https://t.me/babyParkingbot</Reference>
                    Оставить заявку можно тут. 
                </Word>
            </Paragraph>
            <Paragraph>
                Переходите в соц сети <Word>
                    <Reference>https://www.instagram.com/baby_parking_ge</Reference>
                    Baby Parking
                </Word>, подписывайтесь, чтобы не потерять! 💙 💰 Ознакомьтесь, пожалуйста, с тарифами Baby Parking перед
                оформлением заказа.
            </Paragraph>
            <Paragraph>📅 Будни (08:00–20:00) • 1 ребенок — 20 GEL/час • 2 ребенка — 30 GEL/час</Paragraph>
            <Paragraph>🌙 Будни (20:00–23:00) • 1 ребенок — 25 GEL/час • 2 ребенка — 35 GEL/час</Paragraph>
            <Paragraph>🎉 Выходные и праздничные дни • 1 ребенок — 25 GEL/час • 2 ребенка — 35 GEL/час</Paragraph>
            <Paragraph>⚡️ Срочный заказ (день-в-день) • 1 ребенок — 30 GEL/час • 2 ребенка — 40 GEL/час</Paragraph>
            <Paragraph>🚗 Сопровождение / трансфер • 1 ребенок — 17 GEL/час • 2 ребенка — 25 GEL/час</Paragraph>
            <Paragraph>🌙 Ночные смены (23:00–08:00) Обычная ночь: • от 32 GEL/час за 1 ребенка</Paragraph>
            <Paragraph>Выходная ночь: • от 35 GEL/час за 1 ребенка</Paragraph>
            <Paragraph>Срочная ночная смена: • от 40 GEL/час за 1 ребенка</Paragraph>
            <Paragraph>Минимальный заказ — 2 часа. Заказы для 3 и более детей рассчитываются индивидуально</Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:18:44.472974Z"
        >
            <Origin>019ff08b-8f66-7a83-8ce8-57595f47cfc7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the literal translation:</Paragraph>
            <Paragraph>Baby Parking is a new project by Happy School for finding vetted nannies 🧑‍🍼</Paragraph>
            <Paragraph>
                Every nanny goes through a multi-stage selection process: an interview, reference checks, training, and a
                test assignment. Only after successfully completing all stages does a specialist enter our database.
            </Paragraph>
            <Paragraph>
                Now about the event itself ☺️ It took place in Red Park in Saburtalo. Our nannies played with the children
                for two hours completely free of charge - running active games and relay races, blowing soap bubbles,
                playing with balls and hoops. There was lots of laughter, movement, and happy children's emotions.
            </Paragraph>
            <Paragraph>
                We are very glad to see such a warm start for our project and thank everyone who spent this day with us!
            </Paragraph>
            <Paragraph>
                Baby Parking is already up and running and accepting requests for nanny placement, both for a few hours and
                on a regular basis. <Word>
                    <Reference>https://t.me/babyParkingbot</Reference>
                    You can submit a request here.
                </Word>
            </Paragraph>
            <Paragraph>
                Follow <Word>
                    <Reference>https://www.instagram.com/baby_parking_ge</Reference>
                    Baby Parking
                </Word> on social media and subscribe so you don't lose us! 💙
            </Paragraph>
            <Paragraph>💰 Please review the Baby Parking rates before placing an order.</Paragraph>
            <Paragraph>📅 Weekdays (08:00-20:00) • 1 child — 20 GEL/hour • 2 children — 30 GEL/hour</Paragraph>
            <Paragraph>🌙 Weekdays (20:00-23:00) • 1 child — 25 GEL/hour • 2 children — 35 GEL/hour</Paragraph>
            <Paragraph>🎉 Weekends and holidays • 1 child — 25 GEL/hour • 2 children — 35 GEL/hour</Paragraph>
            <Paragraph>⚡️ Urgent order (same-day) • 1 child — 30 GEL/hour • 2 children — 40 GEL/hour</Paragraph>
            <Paragraph>🚗 Accompaniment / transfer • 1 child — 17 GEL/hour • 2 children — 25 GEL/hour</Paragraph>
            <Paragraph>🌙 Night shifts (23:00-08:00) Regular night: • from 32 GEL/hour for 1 child</Paragraph>
            <Paragraph>Weekend night: • from 35 GEL/hour for 1 child</Paragraph>
            <Paragraph>Urgent night shift: • from 40 GEL/hour for 1 child</Paragraph>
            <Paragraph>Minimum order — 2 hours. Orders for 3 or more children are priced individually.</Paragraph>
            <Paragraph>
                Ана, а ведь это интересная находка - проект самой Happy School! Это же прямой ответ на нашу задачу "запасной
                ситтер для разовых вечеров": проверенные няни, знакомые со школой, вызов через телеграм-бот. Для регулярной
                схемы с ночёвками их тарифы дороговаты (ночь 23:00-08:00 для двоих детей выйдет под 300+ лари за смену), но
                как гибкая подстраховка - именно то, чего не хватало в конструкции. И кстати, их прайс - отличная точка
                данных для твоего исследования рынка: верхняя граница почасовых цен с "гарантией качества" теперь известна.
                😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:32:56.490941Z"
        >
            <Origin>019ff098-d147-7bb6-a760-efd6d891322a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>давай попробуем найти отзывы на этот сервис</Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:33:21.520421Z"
        >
            <Origin>019ff098-d147-7710-a6ea-1d20ab3a362e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Baby Parking Happy School Тбилиси няни отзывы”</Action>
            <Action>Searched the web for “"Baby Parking" Tbilisi babysitter baby_parking_ge”</Action>
            <Paragraph>
                Итог поиска честный: <Word>
                    <Bold />
                    отзывов на Baby Parking в открытом вебе нет - ни одного.
                </Word> Выдача забита итальянскими "baby parking" (в Италии так называют мини-садики) и отелями с
                бебиситтингом, а про тбилисский проект - тишина.
            </Paragraph>
            <Paragraph>
                И это ожидаемо, если вдуматься: судя по тексту, который ты переводила, проект только что запустился - они
                описывают своё первое мероприятие в Красном парке как "тёплый старт". Отзывам просто неоткуда взяться:
                сервис работает недели, максимум пару месяцев.
            </Paragraph>
            <Paragraph>Что можно проверить вместо несуществующих отзывов:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Instagram @baby_parking_ge
                    </Word> - посмотри вручную: сколько подписчиков, есть ли комментарии от реальных мам под постами,
                    отвечают ли они. Свежий аккаунт с живыми комментариями - нормально; аккаунт с нулевой активностью -
                    звоночек
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Родительский чат Happy School
                    </Word> - вот где настоящие отзывы появятся раньше всего. Спроси прямо: "кто-нибудь уже вызывал няню
                    через Baby Parking? как впечатления?" Наверняка кто-то из родителей уже попробовал после того
                    мероприятия в парке
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Спроси у Светланы
                    </Word> через @happy_edu_bot - как устроена их "многоэтапная проверка" на практике: что именно
                    проверяют, есть ли у нянь медкнижки, кто отвечает, если что-то пошло не так
                </Line>
            </Paragraph>
            <Paragraph>
                При этом важная штука на другой чаше весов: это проект <Word>
                    <Bold />
                    вашей собственной школы.
                </Word> Няни оттуда знакомы со школьной средой, школа ставит на кон свою репутацию перед своими же
                родителями, и жаловаться в случае чего есть кому - лично, а не в пустоту телеграм-бота. По уровню
                подотчётности это лучше любого анонимного агентства, даже без единого отзыва в интернете.
            </Paragraph>
            <Paragraph>
                Моё предложение: используй их один раз как тест в необязательной ситуации - вечер, когда вы с Дагом рядом, в
                городе, и няня нужна на 2-3 часа. Дешёвая проверка (40-60 лари), и у тебя будет собственный отзыв - надёжнее
                любого найденного. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:33:48.727615Z"
        >
            <Origin>019ff099-9d34-7add-b153-0ada0cba611a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Оставьте номер телефона — мы подберем вам няню и свяжемся с вами 💛 Обычно это занимает от 10 до 60 минут
            </Paragraph>
            <Paragraph>Уточните:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>во сколько няня быть у вас</Line>
                <Line>возраст ребенка</Line>
                <Line>количество детей</Line>
                <Line>ваш адрес</Line>
                <Line>для чего нужна няня? (игры, прогулка, помощь с уроками, отвезти в школу, отвезти на кружок)</Line>
            </Paragraph>
            <Paragraph>давай ответим на эти аопросы</Paragraph>
            <Paragraph>адрес я впишу</Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:34:01.281926Z"
        >
            <Origin>019ff099-9d35-79ef-b5da-55a489cb7b91</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Давай. Черновик ответа - проверь и поправь детали, я в паре мест оставила варианты:</Paragraph>
            <Paragraph>Здравствуйте! 💛</Paragraph>
            <Paragraph>Телефон: &#91;твой номер&#93;</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Время: &#91;впиши - например: в 19:00&#93;</Line>
                <Line>Возраст детей: 9 и 11 лет</Line>
                <Line>Количество: двое</Line>
                <Line>Адрес: &#91;впишешь сама&#93;</Line>
                <Line>
                    Для чего: побыть с детьми вечером дома - поиграть, поужинать вместе, уложить спать. Помощь с уроками не
                    нужна.
                </Line>
            </Paragraph>
            <Paragraph>Пара соображений перед отправкой:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Пункт 4 я написала под сценарий "тестовый вечер"
                    </Word>, который мы обсуждали. Если вызываешь под другое (сопровождение на кружок, дневная прогулка) -
                    скажи, перепишу.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Про язык спроси сразу
                    </Word>, добавь строку: "Подскажите, няня будет русскоязычная?" - у них школа билингвальная, наверняка
                    есть и русско-, и грузиноязычные няни, лучше проговорить до подтверждения.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Если это будний вечер после 20:00
                    </Word> - по их тарифам это 25 GEL/час до 23:00 за одного, 35 за двоих; уточни при заказе, как они
                    считают двоих детей 9 и 11 лет на вечернем тарифе, чтобы сумма не стала сюрпризом.
                </Line>
                <Line>
                    И мелочь: если планируешь, что няня уложит детей, а вы вернётесь позже 23:00 - предупреди их заранее, у
                    них после 23:00 начинается ночной тариф.
                </Line>
            </Paragraph>
            <Paragraph>
                Впиши время, телефон и адрес - и можно отправлять. Расскажешь потом, как прошло - это же наш тест-драйв
                сервиса 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:34:29.406385Z"
        >
            <Origin>019ff09a-3773-7948-91e8-25ec805db825</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                клод, перечитай этот чат внимательно мы писали про часы рабоы, мы писали про ночевки - вспомин все это
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:34:50.996928Z"
        >
            <Origin>019ff09a-3773-7253-8943-9abdb4fd88fb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ты права, я съехала на "тестовый вечер" и забыла главное - мы же ищем постоянную няню под нашу конструкцию.
                Переделываю ответ бота под наше настоящее ТЗ:
            </Paragraph>
            <Paragraph>Здравствуйте! 💛</Paragraph>
            <Paragraph>Телефон: &#91;твой номер&#93;</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Время:
                    </Word> ищем няню на постоянной основе, а не разово. График такой: в будни примерно с 13:00-14:00 до
                    ~19:00. Плюс две фиксированные ночёвки в неделю (например, вторник и четверг): вечер с детьми, ночь у
                    нас, утром завтрак и отвести в школу к 10:00. Школа в паре минут пешком от дома. Суббота и воскресенье
                    свободны.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Возраст детей:
                    </Word> 9 и 11 лет. В школе с 10:00 до 17:00, уроки делают там - помощь с уроками не нужна.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Количество:
                    </Word> двое.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Адрес:
                    </Word> &#91;впишешь сама&#93;
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Для чего:
                    </Word> встретить после школы, ужин, вечернее время с детьми; в дни ночёвок - уложить, утром собрать и
                    отвести в школу; иногда сопроводить на кружки. Также в обязанности хотим включить помощь по дому
                    (уборка, приготовление ужина) - у семьи две квартиры рядом, в одном районе. Отдельное спальное место для
                    няни есть.
                </Line>
            </Paragraph>
            <Paragraph>
                Подскажите: работаете ли вы с таким постоянным форматом (с ночёвками), и если да - какие условия и какая
                няня из вашей базы могла бы подойти? Важно: нужен разговорный русский; знание английского будет большим
                плюсом.
            </Paragraph>
            <Paragraph>
                Почему я вписала всё, включая уборку и ночёвки, хотя Baby Parking - почасовой ситтер-сервис: их анкета явно
                рассчитана на разовые вызовы, и наш формат может им не подойти. Но именно поэтому лучше выложить всю
                конструкцию сразу - пусть они сами скажут "да, у нас есть няни, готовые на постоянку с ночёвками" или "нет,
                мы только почасово". Если предлагать им урезанную версию, узнаем это только после лишнего круга переписки. А
                если у них найдётся женщина на постоянку - это будет кандидатка с проверкой от твоей же школы, лучший из
                возможных источников.
            </Paragraph>
            <Paragraph>Впиши телефон и адрес - и отправляй. 😊</Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:35:33.313030Z"
        >
            <Origin>019ff09b-3881-75a8-8406-047edc127536</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, а давай подсчитаем, сколькор это нам будет стоить? ты знаешь расценки теперь ты знаеш часы работы
                знаешь кол-во детей
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:36:01.885084Z"
        >
            <Origin>019ff09b-3881-7843-bbb4-bc7b5fda1046</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отличная идея - и результат сразу скажу: цифра получается шокирующая. Считаю честно, по их прайсу, двое
                детей.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Разбивка одного обычного дня (пн/ср/пт):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    13:00-19:00, двое детей, дневной тариф 30 GEL/час × 6 часов = <Word>
                        <Bold />
                        180 GEL/день
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Разбивка дня с ночёвкой (вт/чт):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>13:00-20:00: 7 ч × 30 = 210 GEL</Line>
                <Line>20:00-23:00: 3 ч × 35 = 105 GEL</Line>
                <Line>
                    23:00-08:00 (ночь): 9 ч × 32 GEL - и это тариф "от", за ОДНОГО ребёнка; для двоих у них цены нет,
                    "индивидуально". Минимум = 288 GEL
                </Line>
                <Line>08:00-10:00 (утро + отвод в школу): 2 ч × 30 = 60 GEL</Line>
                <Line>
                    Итого день с ночёвкой: <Word>
                        <Bold />
                        минимум 663 GEL
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Неделя:
                </Word> 3 × 180 + 2 × 663 = 540 + 1326 = <Word>
                    <Bold />
                    1866 GEL минимум
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Месяц (×4,33 недели):
                </Word> ≈ <Word>
                    <Bold />
                    8 080 GEL ≈ $3 000 в месяц.
                </Word> И это нижняя оценка: ночь для двоих будет дороже "от 32", а уборку двух квартир их няни вообще не
                делают - это ситтеры, в прайсе только дети.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что нам говорит эта цифра.
                </Word> Почасовая платформа стоит в 3-4 раза дороже, чем месячная няня на зарплате (наша вилка 2000-2500
                GEL) - при этом без уборки и готовки. Так устроена вся эта индустрия: почасовой тариф продаёт гибкость и
                разовость, месячная зарплата покупает объём. Поэтому:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Baby Parking - только запасной канал:
                    </Word> разовый вечер (2 детей × 3 часа = 90-105 GEL) - разумно; регулярная схема - экономическое
                    безумие
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Наша конструкция "зарплата 2000-2500 GEL за всё, включая ночёвки и дом"
                    </Word> на фоне этих цифр выглядит именно тем, чем и является: нормальной рыночной сделкой, выгодной
                    обеим сторонам
                </Line>
                <Line>
                    И бонус для переговоров: теперь ты знаешь верхний якорь рынка. Няня, которая попросит 3000+ за наш
                    график, конкурирует не с "жадной семьёй", а с математикой: даже премиальный сервис школы за эти деньги
                    дал бы только часть наших задач
                </Line>
            </Paragraph>
            <Paragraph>
                Кстати, ответ Baby Parking на наш запрос "постоянный формат с ночёвками" станет интересным сам по себе: если
                у них есть месячный формат - цена будет совсем другой, чем прайс×часы. Посмотрим, что предложат. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:37:12.441284Z"
        >
            <Origin>019ff09c-ba88-7004-83ef-f30624b3e709</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                хорошо, а что если мы просим не то, как ты писал, а встречать из школы, отводить на допы - скажем, с 17:00
                до 20:00 по будням плюс ночевка - дважды в день ее работы, которая стартует с 17
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:37:37.690484Z"
        >
            <Origin>019ff09c-ba89-7cac-84fa-0cc62588cd43</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Считаю новую схему по их прайсу, двое детей:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Обычный будний день (×3): 17:00-20:00
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    3 ч × 30 GEL = <Word>
                        <Bold />
                        90 GEL/день
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    День с ночёвкой (×2): с 17:00 до утреннего отвода в школу
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>17:00-20:00: 3 ч × 30 = 90</Line>
                <Line>20:00-23:00: 3 ч × 35 = 105</Line>
                <Line>
                    23:00-08:00: 9 ч × 32 = 288 GEL минимум (напомню: "от 32" - это цена за одного, для двоих у них
                    "индивидуально")
                </Line>
                <Line>08:00-10:00 (завтрак + отвести в школу): 2 ч × 30 = 60</Line>
                <Line>
                    Итого: <Word>
                        <Bold />
                        минимум 543 GEL/день
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Неделя:
                </Word> 3 × 90 + 2 × 543 = 270 + 1086 = <Word>
                    <Bold />
                    1356 GEL
                </Word> <Word>
                    <Bold />
                    Месяц:
                </Word> × 4,33 ≈ <Word>
                    <Bold />
                    5 870 GEL ≈ $2 170 минимум
                </Word>
            </Paragraph>
            <Paragraph>
                Урезание дневных часов сэкономило примерно 2200 GEL в месяц против прошлого расчёта, но структура расходов
                видна как на ладони: <Word>
                    <Bold />
                    80% суммы съедают две ночёвки
                </Word> (1086 из 1356 GEL в неделю). Ночь - это 11-12 оплачиваемых часов подряд по почасовому тарифу, и
                неважно, что няня из них спит часов семь: тариф капает.
            </Paragraph>
            <Paragraph>
                Для сравнения внутри той же платформы: та же схема <Word>
                    <Bold />
                    без ночёвок вообще
                </Word> (просто 17:00-20:00 пять дней) стоила бы 450 GEL в неделю ≈ 1950 GEL в месяц - уже почти вписывается
                в нашу вилку. То есть на почасовой платформе разумно покупать именно вечерние часы, а ночёвки - никогда: их
                экономика ломается ровно на сне.
            </Paragraph>
            <Paragraph>
                Вывод остаётся прежним, но теперь с точной ценой на нём: ночёвки экономически имеют смысл только внутри
                месячной зарплаты, где ночь - это "присутствие с доплатой" (как мы закладывали: фикс за ночь), а не 12 часов
                по счётчику. Наша конструкция за 2000-2500 GEL с ночёвками, уборкой и готовкой против 5870 GEL за голый
                присмотр - разница в 2,5+ раза.
            </Paragraph>
            <Paragraph>
                Практическое применение обеих цифр: когда будешь говорить с кандидатками или мелкими агентствами и
                торговаться о ночной надбавке - у тебя в кармане факт: "премиальный сервис берёт за ночь 288+ лари, мы
                предлагаем ночёвку в знакомой семье в счёт стабильной зарплаты". Это сильная позиция с обеих сторон. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:47:06.262418Z"
        >
            <Origin>019ff0a5-c9cd-753b-916c-cf8fa70a97bc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                давай напишем им сообщение, что мы подбираем няню, и будем исходить из стоимсоти ее работы. в иделае нам
                нужно 5 дней, с 17 до 19.30 две ночевки в неделю (входят в эти пять дней) если бы няня могла готовить и
                прибираться дома, то мы хотели бы взять больше часов.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:47:22.168550Z"
        >
            <Origin>019ff0a5-c9cd-7960-9819-4b5ae1217028</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот сообщение для Baby Parking:</Paragraph>
            <Paragraph>Здравствуйте! 💛</Paragraph>
            <Paragraph>
                Мы семья из Happy School, подбираем няню на постоянной основе. Хотим понять стоимость - от неё будет
                зависеть итоговый формат.
            </Paragraph>
            <Paragraph>Что нам нужно в идеале:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    5 дней в неделю (будни), с 17:00 до 19:30: встретить детей после школы, ужин, вечернее время, иногда
                    отвести на кружок
                </Line>
                <Line>
                    Две ночёвки в неделю внутри этих же пяти дней (например, вторник и четверг): няня остаётся с вечера,
                    ночует у нас, утром завтрак и отвести детей в школу к 10:00 - школа в паре минут пешком. Отдельное
                    спальное место есть
                </Line>
                <Line>Дети: двое, 9 и 11 лет, самостоятельные. Уроки делают в школе, помощь с уроками не нужна</Line>
            </Paragraph>
            <Paragraph>
                И важный вопрос: если няня готова также готовить ужин и прибираться, мы бы с удовольствием взяли больше
                часов - скажем, с 13:00-14:00. Есть ли в вашей базе няни, которые совмещают присмотр за детьми с помощью по
                дому?
            </Paragraph>
            <Paragraph>Подскажите, пожалуйста:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Работаете ли вы с таким постоянным форматом и есть ли месячная цена, или всё считается по почасовому
                    прайсу?
                </Line>
                <Line>Сколько будет стоить ночёвка для двоих детей? (в тарифах указано "от 32 GEL/час за одного")</Line>
                <Line>Какие языки у нянь? Нам нужен разговорный русский, английский - большой плюс</Line>
            </Paragraph>
            <Paragraph>Телефон: &#91;номер&#93; Адрес: &#91;адрес&#93;</Paragraph>
            <Paragraph>Спасибо!</Paragraph>
            <Paragraph>Пара пояснений, почему так построила:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Вопрос про месячную цену - первым
                    </Word>, потому что это развилка: если у них только почасовой счётчик, наша схема выйдет ~4600-5000
                    GEL/мес (5 × 2,5 ч + две ночи) - и разговор закончится сам. Если есть месячный формат - появится предмет
                    для переговоров.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Блок про готовку/уборку сформулирован как "возьмём больше часов"
                    </Word> - ровно как ты сказала. Для них это сигнал: семья готова платить за больший объём, если няня
                    универсальная. Это делает нас привлекательным клиентом.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Семья из Happy School" в первой строке
                    </Word> - это их материнская структура, свои для своих; и тон, и приоритет обработки заявки обычно от
                    этого выигрывают.
                </Line>
            </Paragraph>
            <Paragraph>
                Впиши телефон и адрес - и отправляй. Их обещанные "10-60 минут" на ответ скоро проверим 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:47:59.697400Z"
        >
            <Origin>019ff0a6-9b7d-7fd5-93f1-efa084485a8b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                встретить детей после школы, ужин, вечернее время, иногда отвести на кружок - меняем: встертить, отвести на
                кружок, привести домой, покормить, прибрать после еды.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:48:09.604464Z"
        >
            <Origin>019ff0a6-9b7d-757d-a099-34f56f284255</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Поправила:</Paragraph>
            <Paragraph>Здравствуйте! 💛</Paragraph>
            <Paragraph>
                Мы семья из Happy School, подбираем няню на постоянной основе. Хотим понять стоимость - от неё будет
                зависеть итоговый формат.
            </Paragraph>
            <Paragraph>Что нам нужно в идеале:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    5 дней в неделю (будни), с 17:00 до 19:30: встретить детей после школы, отвести на кружок, привести
                    домой, покормить, прибрать после еды
                </Line>
                <Line>
                    Две ночёвки в неделю внутри этих же пяти дней (например, вторник и четверг): няня остаётся с вечера,
                    ночует у нас, утром завтрак и отвести детей в школу к 10:00 - школа в паре минут пешком. Отдельное
                    спальное место есть
                </Line>
                <Line>Дети: двое, 9 и 11 лет, самостоятельные. Уроки делают в школе, помощь с уроками не нужна</Line>
            </Paragraph>
            <Paragraph>
                И важный вопрос: если няня готова также готовить ужин и прибираться, мы бы с удовольствием взяли больше
                часов - скажем, с 13:00-14:00. Есть ли в вашей базе няни, которые совмещают присмотр за детьми с помощью по
                дому?
            </Paragraph>
            <Paragraph>Подскажите, пожалуйста:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Работаете ли вы с таким постоянным форматом и есть ли месячная цена, или всё считается по почасовому
                    прайсу?
                </Line>
                <Line>Сколько будет стоить ночёвка для двоих детей? (в тарифах указано "от 32 GEL/час за одного")</Line>
                <Line>Какие языки у нянь? Нам нужен разговорный русский, английский - большой плюс</Line>
            </Paragraph>
            <Paragraph>Телефон: &#91;номер&#93; Адрес: &#91;адрес&#93;</Paragraph>
            <Paragraph>Спасибо!</Paragraph>
            <Paragraph>
                Одна мысль вдогонку к правке: "покормить, прибрать после еды" - хорошо, что это теперь прописано явно,
                потому что у ситтер-сервисов граница "детское/недетское" бывает принципиальной: покормить ребёнка - да,
                помыть посуду - уже "домработница". Формулировка "прибрать после еды" звучит как естественная часть заботы о
                детях, так что пройдёт легко, но если начнут уточнять - мы честно в рамках: речь о посуде после детского
                ужина, не об уборке кухни.
            </Paragraph>
            <Paragraph>Готово к отправке - телефон, адрес, и вперёд. 😊</Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:48:20.071886Z"
        >
            <Origin>019ff0a6-eae3-78c3-b9dc-eb0b0a6eff38</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>скажем, с 13:00-14:00 - давай скажем с 15.00</Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:48:26.793615Z"
        >
            <Origin>019ff0a6-eae3-7412-a688-e65af918ad0d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Готово:</Paragraph>
            <Paragraph>Здравствуйте! 💛</Paragraph>
            <Paragraph>
                Мы семья из Happy School, подбираем няню на постоянной основе. Хотим понять стоимость - от неё будет
                зависеть итоговый формат.
            </Paragraph>
            <Paragraph>Что нам нужно в идеале:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    5 дней в неделю (будни), с 17:00 до 19:30: встретить детей после школы, отвести на кружок, привести
                    домой, покормить, прибрать после еды
                </Line>
                <Line>
                    Две ночёвки в неделю внутри этих же пяти дней (например, вторник и четверг): няня остаётся с вечера,
                    ночует у нас, утром завтрак и отвести детей в школу к 10:00 - школа в паре минут пешком. Отдельное
                    спальное место есть
                </Line>
                <Line>Дети: двое, 9 и 11 лет, самостоятельные. Уроки делают в школе, помощь с уроками не нужна</Line>
            </Paragraph>
            <Paragraph>
                И важный вопрос: если няня готова также готовить ужин и прибираться, мы бы с удовольствием взяли больше
                часов - скажем, с 15:00. Есть ли в вашей базе няни, которые совмещают присмотр за детьми с помощью по дому?
            </Paragraph>
            <Paragraph>Подскажите, пожалуйста:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Работаете ли вы с таким постоянным форматом и есть ли месячная цена, или всё считается по почасовому
                    прайсу?
                </Line>
                <Line>Сколько будет стоить ночёвка для двоих детей? (в тарифах указано "от 32 GEL/час за одного")</Line>
                <Line>Какие языки у нянь? Нам нужен разговорный русский, английский - большой плюс</Line>
            </Paragraph>
            <Paragraph>Телефон: &#91;номер&#93; Адрес: &#91;адрес&#93;</Paragraph>
            <Paragraph>Спасибо!</Paragraph>
            <Paragraph>
                Вписывай контакты и отправляй. Держи меня в курсе, что ответят - особенно по пункту 1: от него зависит,
                продолжаем ли с ними разговор всерьёз или они остаются в роли запасного канала на разовые вечера. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:49:33.406272Z"
        >
            <Origin>019ff0a8-08d3-7d99-ba9f-47a9915fe391</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Сколько будет стоить ночёвка для двоих детей? (в тарифах указано "от 32 GEL/час за одного") - если ночевки
                будут на постоянной основе, двое детей, одни и те же дни - может ли рассчет проводиться иначе?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T11:49:42.691195Z"
        >
            <Origin>019ff0a8-08d3-7873-be7d-ce7fd3736f8e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Хорошее усиление - вопрос сразу подталкивает их к индивидуальной цене вместо счётчика. Вставила:
            </Paragraph>
            <Paragraph>Здравствуйте! 💛</Paragraph>
            <Paragraph>
                Мы семья из Happy School, подбираем няню на постоянной основе. Хотим понять стоимость - от неё будет
                зависеть итоговый формат.
            </Paragraph>
            <Paragraph>Что нам нужно в идеале:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    5 дней в неделю (будни), с 17:00 до 19:30: встретить детей после школы, отвести на кружок, привести
                    домой, покормить, прибрать после еды
                </Line>
                <Line>
                    Две ночёвки в неделю внутри этих же пяти дней (например, вторник и четверг): няня остаётся с вечера,
                    ночует у нас, утром завтрак и отвести детей в школу к 10:00 - школа в паре минут пешком. Отдельное
                    спальное место есть
                </Line>
                <Line>Дети: двое, 9 и 11 лет, самостоятельные. Уроки делают в школе, помощь с уроками не нужна</Line>
            </Paragraph>
            <Paragraph>
                И важный вопрос: если няня готова также готовить ужин и прибираться, мы бы с удовольствием взяли больше
                часов - скажем, с 15:00. Есть ли в вашей базе няни, которые совмещают присмотр за детьми с помощью по дому?
            </Paragraph>
            <Paragraph>Подскажите, пожалуйста:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Работаете ли вы с таким постоянным форматом и есть ли месячная цена, или всё считается по почасовому
                    прайсу?
                </Line>
                <Line>
                    Как считается ночёвка для двоих детей? В тарифах указано "от 32 GEL/час за одного" - но если ночёвки
                    будут на постоянной основе, в одни и те же дни каждую неделю, может ли расчёт проводиться иначе?
                </Line>
                <Line>Какие языки у нянь? Нам нужен разговорный русский, английский - большой плюс</Line>
            </Paragraph>
            <Paragraph>Телефон: &#91;номер&#93; Адрес: &#91;адрес&#93;</Paragraph>
            <Paragraph>Спасибо!</Paragraph>
            <Paragraph>
                Теперь письмо целиком работает на одну задачу: перевести разговор с почасового прайса на "постоянная семья -
                индивидуальные условия". Оба рычага на месте: регулярность (одни и те же дни, каждая неделя, надолго) и
                объём (готовы расширить часы). Отправляй - и посмотрим, умеют ли они считать иначе, чем по счётчику. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T13:32:36.294980Z"
        >
            <Origin>019ff106-47bd-7923-8b5b-82da1fd3a539</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                на английский: &#91;8/11/2026 5:24 PM&#93; Baby parking - няни в Тбилиси: 1) Мы ориентируемся на почасовой
                тариф, в среднем по Тбилиси ночная смена няни (23-8 утра) составляет 250-350 лари за 1 ребёнка. Это как раз
                составляет в час примерно 28-39 лари. У нас для одного ребёнка 32 лари ночная смена час. Тариф для 2-х детей
                с 23-8 утра у нас составляет 42 лари.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    По нашей оферте няня не занимается полноценно готовой и уборкой. Она может разогреть заготовки, либо
                    сделать лёгкий перекус(чай, бутерброды, фрукты и тд). По уборке также может прибраться после ужина,
                    место где дети принимали пищу. Я могу поговорить с нянями, думаю что кто то может быть не против, также
                    это зависит от ваших пожеланий по тому как вы видите питание детей.
                </Line>
                <Line>У нас есть няни со знанием разных языков. В том числе и английский язык)</Line>
            </Paragraph>
            <Paragraph>Если рассматриваем ваши пожелания по графику, то по цене получается так:</Paragraph>
            <Paragraph>Понедельник 17-20 ( Тариф будни 30 лар/с) - 90 лари</Paragraph>
            <Paragraph>
                Вторник с 17-20 (Тариф будни 30 лар/ч) - 90 лари, 20-23 (Тариф будни вечер 35 лар/ч) - 105 лар, 23-8 (тариф
                ночной будни 42 л/ч) - 378 , 8-10 (Тариф будни 30 лар/ч) - 60 лари Итого: 633 лари
            </Paragraph>
            <Paragraph>Среда 17-20 ( Тариф будни 30 лар/с) - 90 лари</Paragraph>
            <Paragraph>
                Четверг с 17-20 (Тариф будни 30 лар/ч) - 90 лари, 20-23 (Тариф будни вечер 35 лар/ч) - 105 лар, 23-8 (тариф
                ночной будни 42 л/ч) - 378 , 8-10 (Тариф будни 30 лар/ч) - 60 лари Итого: 633 лари
            </Paragraph>
            <Paragraph>
                Пятница 17-20 ( Тариф будни 30 лар/с) - 90 лари &#91;8/11/2026 5:26 PM&#93; Baby parking - няни в Тбилиси:
                Мы всегда делаем 1-2 встречи для семей по 2-3 часа, чтобы вы познакомились с няней. Чтобы сразу не брать
                полное сопровождение:) Понять комфортно ли вам и детям с няней, чтобы быть уверенным в том , что вы хотите
                продолжать сотрудничество. &#91;8/11/2026 5:27 PM&#93; Baby parking - няни в Тбилиси: Если хотите могу
                предложить вам анкеты нянь, и до сентября устроить несколько 1-2 такие встречи. Если все хорошо, то
                забронировать няню. Так как у нас очень большой спрос на нянь в сентябре, все возвращаются в город
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T13:32:51.576179Z"
        >
            <Origin>019ff106-47be-750f-bd17-204591d9055e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the translation:</Paragraph>
            <Paragraph>
                &#91;8/11/2026 5:24 PM&#93; Baby Parking - nannies in Tbilisi: 1) We work on an hourly rate basis. On
                average in Tbilisi, a nanny's night shift (23:00-8:00) costs 250-350 GEL for 1 child, which comes out to
                roughly 28-39 GEL per hour. Our rate for one child is 32 GEL per hour for the night shift. Our rate for 2
                children from 23:00 to 8:00 is 42 GEL per hour.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Under our offer, the nanny does not do full cooking and cleaning. She can heat up pre-prepared meals or
                    make a light snack (tea, sandwiches, fruit, etc.). As for cleaning, she can also tidy up after dinner -
                    the area where the children ate. I can talk to the nannies; I think some of them might be open to it. It
                    also depends on your preferences for how you envision the children's meals.
                </Line>
                <Line>We have nannies who speak various languages, including English :)</Line>
            </Paragraph>
            <Paragraph>If we go by your preferred schedule, the pricing works out as follows:</Paragraph>
            <Paragraph>Monday 17:00-20:00 (weekday rate 30 GEL/h) - 90 GEL</Paragraph>
            <Paragraph>
                Tuesday 17:00-20:00 (weekday rate 30 GEL/h) - 90 GEL, 20:00-23:00 (weekday evening rate 35 GEL/h) - 105 GEL,
                23:00-8:00 (weekday night rate 42 GEL/h) - 378 GEL, 8:00-10:00 (weekday rate 30 GEL/h) - 60 GEL Total: 633
                GEL
            </Paragraph>
            <Paragraph>Wednesday 17:00-20:00 (weekday rate 30 GEL/h) - 90 GEL</Paragraph>
            <Paragraph>
                Thursday 17:00-20:00 (weekday rate 30 GEL/h) - 90 GEL, 20:00-23:00 (weekday evening rate 35 GEL/h) - 105
                GEL, 23:00-8:00 (weekday night rate 42 GEL/h) - 378 GEL, 8:00-10:00 (weekday rate 30 GEL/h) - 60 GEL Total:
                633 GEL
            </Paragraph>
            <Paragraph>Friday 17:00-20:00 (weekday rate 30 GEL/h) - 90 GEL</Paragraph>
            <Paragraph>
                &#91;5:26 PM&#93; We always arrange 1-2 meetings for families, 2-3 hours each, so you can get to know the
                nanny - rather than jumping straight into full service :) This way you can see whether you and the children
                feel comfortable with her, and be confident you want to continue working together.
            </Paragraph>
            <Paragraph>
                &#91;5:27 PM&#93; If you'd like, I can send you nanny profiles, and we can set up 1-2 such meetings before
                September. If all goes well, you can book the nanny. We have very high demand for nannies in September, as
                everyone returns to the city.
            </Paragraph>
            <Paragraph>
                Для вас с Дагом, сводка по цифрам: их недельный итог по вашему графику = 90×3 + 633×2 = <Word>
                    <Bold />
                    1536 GEL/неделя ≈ 6650 GEL/месяц (~$2460)
                </Word>. Ночёвка двоих подтвердилась дорогой: 42 GEL/час. По сути они честно подтвердили наш расчёт:
                почасовая модель на ночёвках не работает. Зато два полезных зерна: няни с английским у них есть, и "поговорю
                с нянями насчёт готовки/уборки" - это намёк, что отдельные няни могут договориться с вами напрямую о
                расширенном формате. Плюс идея 1-2 пробных встреч до сентября - разумная и недорогая, независимо от того, у
                кого вы в итоге наймёте постоянную помощницу. 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T13:55:27.837752Z"
        >
            <Origin>019ff11b-46d4-7c77-b8b0-44ae949d1f04</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                напиши на русском языке позитивное и добрео письмо-ответ дескать, мы благодарим за инофрмацию, ьудем думать
                и свяжемся с ними как можно скорее - мы поняли, что скоро спрос на нянь вырастет
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T13:55:36.150102Z"
        >
            <Origin>019ff11b-46d4-7239-9895-01530c6741a0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот письмо:</Paragraph>
            <Paragraph>Здравствуйте! 💛</Paragraph>
            <Paragraph>
                Большое спасибо за такой подробный и понятный ответ - очень ценим, что вы расписали расчёт по дням и
                рассказали про формат знакомства с няней. Отдельное спасибо за готовность поговорить с нянями насчёт помощи
                с ужином - это для нас важный момент.
            </Paragraph>
            <Paragraph>
                Нам нужно немного времени всё обдумать и посоветоваться семьёй. Мы обязательно свяжемся с вами как можно
                скорее - тем более что мы услышали вас про сентябрь и высокий спрос, поэтому тянуть не будем 😊
            </Paragraph>
            <Paragraph>
                Идея познакомиться с няней на короткой встрече до полного сопровождения нам очень понравилась - возможно, с
                этого и начнём.
            </Paragraph>
            <Paragraph>Хорошего вам дня и спасибо за заботу!</Paragraph>
            <Paragraph>Ана</Paragraph>
            <Paragraph>
                Тёплое, ни к чему не обязывает, дверь оставлена открытой, и про сентябрь мы показали, что услышали. Если
                захочешь после обсуждения с Дагом вернуться к ним за анкетами нянь для пробной встречи - просто напиши им
                "готовы посмотреть анкеты", и процесс пойдёт. 😊
            </Paragraph>
        </Message>
    </Chapter>
);
