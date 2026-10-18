import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 July 2026](2026-07-09)</Date>
        </Dated>
        <Title>[[ 9 July 2026 ]]</Title>
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
    </Chapter>
);
