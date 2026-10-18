import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 August 2026](2026-08-05)</Date>
        </Dated>
        <Title>[[ 5 August 2026 ]]</Title>
        <Message
            at="2026-08-05T08:44:13.391753Z"
        >
            <Origin>019fd119-224b-74e7-b0b9-ebd9a1513dd2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The would was infected. The surgeon removed tge stitches and necrotic tissue. Dressed it with antibacterial
                gel and instructed me to see an infectious surgeon in 3 days. No weight on it at all. What happens now? What
                is the recovery like?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T08:44:31.423918Z"
        >
            <Origin>019fd119-224d-768d-8b7e-a7220cdc755f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That changes the picture, so here's the honest map of what happens from here.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the surgeon's actions tell you.
                </Word> Removing stitches, excising necrotic tissue, packing with antibacterial gel, and sending you to an
                infectious disease specialist in three days — rather than admitting you or taking you back to the OR —
                signals he's treating this as a wound-level infection caught at a manageable stage, not a deep emergency.
                The stitches came out because an infected wound must not be held closed: it now heals open, by secondary
                intention, granulating and filling from the bottom up.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the infection specialist will do.
                </Word> Expect a wound culture (if one wasn't already taken) to identify the organism and pick a targeted
                antibiotic, an assessment of how deep the infection goes, and likely imaging or labs if there's any question
                of deeper involvement. The one question they will specifically be ruling out is whether infection has
                reached the bone — osteomyelitis — because you had bone-level surgery and there's a fresh screw tract
                communicating with the wound. That's why the referral is to an infectious surgeon rather than back to
                routine dressing changes, and why the follow-up is quick. If it's soft-tissue only, the treatment is oral
                antibiotics plus wound care; if bone is involved, treatment is longer (typically six weeks of antibiotics,
                sometimes IV initially, occasionally another debridement). Nothing in what you've described tells us which
                it is — that's precisely what the three-day visit determines.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why no weight at all now.
                </Word> Weight-bearing compresses and shears the open wound bed, drives contamination deeper, and impedes
                the granulation tissue trying to form. This restriction is about the wound, not the bone.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Recovery shape.
                </Word> An open heel wound healing by secondary intention is a weeks-scale process — typically several weeks
                of regular dressing changes as it fills in and contracts, with the timeline depending on wound size after
                debridement and how quickly the infection clears. It's slower than primary closure, but heel wounds
                granulate reliably in a healthy patient once infection is controlled. The walking timeline resets
                accordingly: weight returns when the wound bed is clean and closing, on the specialist's schedule rather
                than the original one.
            </Paragraph>
            <Paragraph>
                Between now and the appointment: keep it dressed as instructed, strictly off the foot, and go in sooner than
                three days if you see spreading redness up the foot or ankle, worsening pain, fever, or discharge that turns
                foul — those are the "don't wait" signs.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T08:46:53.643212Z"
        >
            <Origin>019fd11b-99d7-7ec2-aaa9-f68de17c7c02</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I can’t see spreading redness if its dressed. Why did he say to wait 3 dats</Paragraph>
        </Message>
        <Message
            at="2026-08-05T08:47:04.947829Z"
        >
            <Origin>019fd11b-99d8-7a4c-bda3-1aa1fb8bc9f3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair point — what you can actually watch for without undressing it: redness or warmth extending beyond the
                edges of the dressing onto visible skin, red streaks running up the ankle or calf, swelling of the foot
                above the dressing, pain that escalates rather than settles, fever or chills, or the dressing soaking
                through with drainage or developing a foul smell. Those are all visible or feelable with the dressing on,
                and any of them means go in immediately rather than waiting.
            </Paragraph>
            <Paragraph>
                As for why three days — it's not arbitrary, and it maps onto several clocks that all run about that long:
            </Paragraph>
            <Paragraph>
                The debridement itself needs time to declare. He just removed the dead tissue, and the freshly cleaned wound
                bed will show within 2–3 days whether it's responding — granulating and pinking up — or whether infection is
                still active and more tissue is demarcating. Looking at it tomorrow tells the specialist almost nothing;
                looking at it in three days shows the trajectory.
            </Paragraph>
            <Paragraph>
                If a culture was taken, results take roughly 48–72 hours. Arriving at the infectious disease appointment
                with the organism identified and its antibiotic sensitivities in hand means the specialist can prescribe
                targeted treatment at that first visit instead of guessing.
            </Paragraph>
            <Paragraph>
                And the antibacterial gel needs a few days of contact time to suppress the bacterial load before anyone can
                judge whether it's sufficient.
            </Paragraph>
            <Paragraph>
                So the three-day interval means: he judged the infection to be controlled enough after debridement that it
                doesn't need daily hospital supervision, and short enough that nothing deep can quietly progress unchecked.
                If he thought there was meaningful risk of rapid spread, you'd have been admitted. The safety valve is
                exactly the symptom list above — three days is the default schedule, not a lock.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T08:56:08.290595Z"
        >
            <Origin>019fd124-108b-7143-90fe-593b94e21af0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No culture yet. I assume that will happen with the infectious surgeon in three days. How do I know how
                serious this is without seeing the wound? Is pain an indicator? What else could be?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T08:56:22.442319Z"
        >
            <Origin>019fd124-108b-72c4-b595-c2fdd55bc186</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Pain is an indicator, but it's the <Word>
                    <Emphasis />
                    trajectory
                </Word> that carries the information, not the level. Post-debridement, the wound was just surgically
                manipulated, so it will hurt for a day or two — that baseline soreness tells you nothing. What's informative
                is the direction over the next 48–72 hours:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Improving picture:
                </Word> pain that plateaus and then eases day over day, throbbing that settles when the foot is elevated,
                tenderness that stays local to the heel.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Worsening picture:
                </Word> pain that escalates despite elevation and rest, pain changing character — from sore to deep pounding
                or pressure, like something building — or new pain in areas that didn't hurt before (up the ankle, the
                arch). Pain out of proportion to what you can see is taken seriously in wound infections. One caveat
                specific to you: your sural territory sensory changes mean the lateral heel isn't a fully reliable reporter,
                so weigh the other signals accordingly.
            </Paragraph>
            <Paragraph>The other channels you have without seeing the wound:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Systemic signs — the most important ones.
                </Word> Fever, chills, night sweats, feeling generally unwell or unusually fatigued, loss of appetite. A
                localized wound infection with no systemic signs is a contained problem; the same wound plus fever means
                it's gaining ground. Take your temperature morning and evening — that's your best single instrument for the
                next three days.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The dressing itself.
                </Word> It's not a blackout curtain — it reports. Increasing strike-through (drainage soaking to the outer
                layer), drainage that turns from thin/pinkish to thick yellow-green, or any foul smell developing through
                the dressing are all meaningful. So is the opposite: a dressing that stays mostly dry and odorless is good
                news.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The borders.
                </Word> Redness, warmth, or swelling advancing past the dressing edge onto skin you can see. You can even
                mark the edge of any visible redness with a pen — if it crosses the line, that's objective progression.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Function.
                </Word> The foot getting harder to move, toes swelling or stiffening, calf pain — signs things are extending
                rather than settling.
            </Paragraph>
            <Paragraph>
                If all channels are quiet — stable-to-easing pain, no fever, dressing unremarkable, no spreading borders —
                that's a genuinely reassuring composite, and the three-day interval is doing its job. Any single alarm from
                the list is your cue to be seen that day instead.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T08:59:39.847405Z"
        >
            <Origin>019fd127-4a16-7844-8cbe-80d52454dd97</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You keep thinking I have access. I don’t . It’s a wrapped bandage</Paragraph>
        </Message>
        <Message
            at="2026-08-05T08:59:51.600460Z"
        >
            <Origin>019fd127-4a17-7434-a664-4421cc1d016c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — with a full wrap you can't see the wound, the inner dressing, or the skin borders. So drop
                those. Here's what you can actually monitor through a wrapped bandage:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your thermometer.
                </Word> This is now your primary instrument. Temperature morning and evening; fever or chills is the
                clearest signal available to you that the infection is advancing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pain trajectory.
                </Word> As before — easing day over day is good, escalating despite rest and elevation, or changing
                character to deep pounding, is bad. This works regardless of the wrap.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Smell.
                </Word> A serious wound infection announces itself through even a wrapped bandage. If the bandage starts to
                smell foul, that's real information.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Soak-through.
                </Word> If drainage is heavy enough to reach the outer layer of the wrap — visible staining, dampness —
                that's worth a call, especially if it's colored or smells.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's above and below the wrap.
                </Word> Your toes and your ankle/lower leg are visible. Toes that swell, stiffen, turn dusky or unusually
                pale, or feel cold; swelling or redness climbing above the top edge of the wrap; calf tenderness. These are
                your visible borders now.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your whole body.
                </Word> Fatigue, feeling off, appetite loss, sweats. Systemic signs don't need line of sight.
            </Paragraph>
            <Paragraph>
                That's the honest set. It's less information than an unwrapped wound would give, but the most important
                channels — fever, pain direction, smell, and how you feel overall — are all fully available to you. If all
                of those stay quiet for three days, that composite is genuinely reassuring. If any one of them turns, you go
                in that day and they unwrap it — you don't need to make the judgment through the bandage, you just need
                enough signal to know whether to shorten the interval.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T09:04:05.567548Z"
        >
            <Origin>019fd12b-5a2e-7eea-ae1b-131afccf6b58</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well can’t I already integrate over how I have been feelimg? Pain has not been advancing but there has been
                tenderness. It hurts more after removing the necrotic tissue but he also agitated the tissue to promote
                healing. No systemic signs over the last two weeks
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T09:04:16.561133Z"
        >
            <Origin>019fd12b-5a2f-791e-8838-6a92e0a86d1b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, and that integral is actually the most informative thing you've said. Two weeks of an infection being
                present — because it was almost certainly brewing under that dressing for some time before it was found —
                with zero systemic signs, stable pain, and you walking on it, describes a low-grade, contained, superficial
                wound infection. That's the profile of colonized devitalized tissue (that macerated dead layer was an ideal
                bacterial medium) rather than an aggressive invasive process. An infection with real momentum doesn't sit
                quietly for two weeks; it declares itself with fever, escalating pain, and spreading inflammation on a
                timescale of days.
            </Paragraph>
            <Paragraph>
                The increased pain since the debridement fits the benign reading too. He cut away tissue and deliberately
                agitated the wound bed to a bleeding, biologically active state — that hurts more for a few days by design.
                Fresh surgical pain layered on a previously stable baseline is expected; it would only become a signal if it
                keeps climbing past day two or three instead of settling.
            </Paragraph>
            <Paragraph>
                So your posterior, integrating everything: a contained superficial infection, caught and mechanically
                cleaned out, in a patient with no systemic involvement over a two-week window. That's the good version of
                this diagnosis. The reason for the specialist visit and the caution isn't that anyone thinks it's currently
                serious — it's the one thing that can't be excluded from outside: the wound sits over a fresh screw tract,
                and bone infection is quiet early. It would not necessarily have produced fever or dramatic signs yet.
                That's the specific question the culture, and possibly imaging, answers in three days.
            </Paragraph>
            <Paragraph>
                Your job in the interval is just to keep the integral running: pain settling from its post-debridement bump,
                no fever, no smell, no soak-through. If the trend holds, you'll walk into that appointment with the
                reassuring version of the story.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T09:11:14.614880Z"
        >
            <Origin>019fd131-dde6-7e78-ba84-73cd6158982e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so aside from systemic changes, I’m mostly watching pain. He put a bandage on it over cotton. I wrapped
                it with a loose bandage. Is this okay?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T09:11:25.219160Z"
        >
            <Origin>019fd131-dde6-7b46-a040-bfbf413ce8ec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that's fine. A secondary wrap over the surgeon's dressing is standard practice — its job is just to
                hold the inner layers in place and keep them clean, and loose is exactly right. The things that matter:
            </Paragraph>
            <Paragraph>
                Not too tight — you want no compression that could impede circulation in a foot that needs blood flow to
                heal. The test is the one you can already do: toes stay warm, pink, and comfortable, no throbbing that eases
                when you unwrap. Loose enough that you could slide a finger under the edge is the right calibration.
            </Paragraph>
            <Paragraph>
                Don't disturb the inner layer. The cotton and gel dressing the surgeon placed is the sterile interface with
                the wound — your outer wrap can be adjusted or rewrapped as needed, but the inner dressing stays untouched
                until the specialist visit unless he told you otherwise.
            </Paragraph>
            <Paragraph>
                Keep it dry. The wrap will wick water if it gets wet (showering with a bag or waterproof cover over the
                whole thing), and a soaked dressing both macerates and carries bacteria inward.
            </Paragraph>
            <Paragraph>
                One practical addition given no weight-bearing: when you're seated or lying down, keep the foot elevated
                when convenient — it reduces swelling, eases the throbbing kind of pain, and modestly helps the wound
                environment. And since crutches or hopping are now your locomotion, mind the other foot and your balance
                around the apartment; a fall onto the open-wound foot would be the worst-case own goal.
            </Paragraph>
            <Paragraph>
                Otherwise: thermometer twice a day, track the pain trend, nose check on the bandage, and you're doing
                everything that can be done from your side of the wrap.
            </Paragraph>
        </Message>
    </Chapter>
);
