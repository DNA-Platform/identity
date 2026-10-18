import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[3 July 2026](2026-07-03)</Date>
        </Dated>
        <Title>[[ 3 July 2026 ]]</Title>
        <Message
            at="2026-07-03T14:23:09.737274Z"
        >
            <Origin>019f285d-34b3-788e-b97f-77db193ac04c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                About 6 1/2 months ago, I got what I think is a lateral calcaneal oseotomy surgery to correct ankle pain as
                a result of playing too much Pickle Ball and having a flat foot
            </Paragraph>
            <Paragraph>
                I’m wondering, what sort of pain might I be in? There was a pin that was put into my heel and when x-rayed
                the doctor said that it might have moved back and might need to come out at some point. Is it normal to feel
                pain near the site where that was inserted at this point in the recovery
            </Paragraph>
            <Paragraph>
                I also have trouble sleeping on the side where the outside part of my foot was operated on with the
                incision. There’s numbness and mild pain near the incision site, but even though it’s mild, kind of putting
                sustained pressure on it with my foot in the right direction feels uncomfortable enough to avoid it
            </Paragraph>
            <Paragraph>
                My biggest concern is that none of these symptoms are really going away. I still feel some pain in general
                when I put weight on the foot. The doctor told me I didn’t even need physical therapy because I guess my
                legs were strong or something, but I was able to walk normally at the three month mark. And that’s great but
                it doesn’t feel like it’s getting better.
            </Paragraph>
            <Paragraph>
                I was told that there’s like a one year tail to full recovery, but I just want you to do some real research
                and help me understand some context for what I’m feeling while I wait to see the doctor
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T14:24:54.683408Z"
        >
            <Origin>019f285d-34b8-7003-b5be-a34d93926c21</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll research this properly before giving you context. Let me pull current clinical information on each of
                the things you're describing.
            </Paragraph>
            <Action>
                Searched the web for “medializing calcaneal osteotomy flatfoot recovery timeline weight bearing pain months”
            </Action>
            <Paragraph>
                Let me dig into the two specific things you're describing — the lateral numbness/nerve issue and the
                hardware.
            </Paragraph>
            <Action>
                Searched the web for “sural nerve injury numbness lateral heel after calcaneal osteotomy recovery how long”
            </Action>
            <Paragraph>
                At 6.5 months you're in a fairly normal place, and each of the three things you're describing maps onto a
                specific, recognizable pattern rather than a single "it failed" story. Let me take them one at a time.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The overall "it's not getting better" feeling.
                </Word> The recovery curve for this surgery is front-loaded and then long-tailed: roughly 75–80% of the
                recovery happens in the first 6 months, but full recovery of bone, tendon, and soft tissue takes 12 months
                or more. When the osteotomy is part of flatfoot correction, return to unrestricted activity typically runs
                9–12 months. So the plateau you're feeling right now is expected — the last quarter of recovery is slow and
                undramatic, which is exactly why it reads as "nothing's changing." Residual ache with weight-bearing at this
                stage is common and usually keeps easing over the following months. Walking normally at 3 months with legs
                strong enough to skip PT is a genuinely good sign about your mechanics; it just isn't the same as being
                finished. (Side note: for a flat foot the standard correction is a <Word>
                    <Emphasis />
                    medializing
                </Word> osteotomy approached through a lateral incision, so the incision being on the outside fits
                regardless of what the surgeon called it.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The hardware pain.
                </Word> This one may not be a "wait it out" problem, and that's actually useful to know. When a screw or pin
                becomes prominent or backs out — which is almost certainly what "moved back" means — it presses against the
                thin soft tissue over the heel and causes localized pain right at that spot. Because that's mechanical, it
                characteristically <Word>
                    <Emphasis />
                    doesn't
                </Word> fade the way surgical soreness does; it tends to persist until the hardware comes out. Symptomatic
                hardware needing removal happens in roughly 10–20% of people after this procedure, and screws aren't removed
                until the bone has completely healed. So a chunk of what feels like "not improving" may be one discrete,
                fixable thing rather than a global healing failure. Worth asking directly: should the pin come out now, and
                is the osteotomy radiographically healed enough to do it?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The lateral numbness plus pressure sensitivity.
                </Word> This is textbook sural nerve territory. That nerve runs right along the lateral heel incision and is
                the most commonly affected nerve in this surgery — it gets stretched or bruised during the approach,
                producing numbness along the lateral foot border in about 5–10% of patients, usually resolving within 6–12
                months. The specific thing you describe — a spot that's numb but also uncomfortable under sustained
                directional pressure, enough that you avoid sleeping on it — fits nerve-and-scar hypersensitivity, where the
                regenerating nerve or the scar around it is touchy to pressure. There's also a recognized variant where the
                sural nerve gets entrapped in scar tissue and stays painful, even after hardware removal — it's identifiable
                on ultrasound and treatable (hydrodissection, for instance). I mention that only because it's a named,
                addressable thing if the numbness and sensitivity are still there near the one-year mark.
            </Paragraph>
            <Paragraph>
                The honest range: nerve symptoms usually improve, but a meaningful minority of patients keep some lasting
                numbness — it's one of the known trade-offs of the lateral approach. Numbness <Word>
                    <Emphasis />
                    without
                </Word> pain is generally only a sensory nuisance and doesn't affect function.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On skipping PT.
                </Word> "You don't need it" was likely a call that your strength and gait didn't require it, and at 3 months
                that held up. But targeted PT can still help the tail specifically — desensitization for the nerve area,
                scar mobilization, calf and ankle strengthening, proprioception. Reasonable to ask whether a short course
                would smooth the last stretch, even if it wasn't strictly necessary earlier.
            </Paragraph>
            <Paragraph>
                What I'd walk into the appointment wanting answered: whether the pin comes out now or waits and whether the
                bone is healed; a clear map of where the numbness versus the pressure-sensitive spot sit; whether the
                weight-bearing ache is coming from the osteotomy/joint or from the hardware; and whether some PT would help.
            </Paragraph>
            <Paragraph>
                Two caveats. I can't examine the foot, so this is context, not diagnosis — the visit you've got scheduled is
                the right move for pain that's still present at six-plus months. And if anything shifts sharply — new
                swelling, redness, warmth, drainage, or the foot feeling unstable under you — that's a reason to move the
                appointment up rather than wait.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T14:33:48.616779Z"
        >
            <Origin>019f2866-f498-7efa-a100-6602ab053bff</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                One of the reasons that this is problematic is, I had a surgeon in Turkey, who arguably, and I mean,
                arguably in a court committed like a consent violation here where this was in the context of tourism based
                surgery and I didn’t have any consulting doctor. The end result is treatment from a doctor that barely
                speaks English and me being given no information even about the recovery timeline so medializing is fine if
                that’s what it is. Yes, the incision on my left foot is on the left side. But the incision site is actually
                down fairly close to the heel now that I look at it. I attached a photo so you can compare.
            </Paragraph>
            <Paragraph>
                It’s hard to say 75 to 80% is because you know I think I started in the worst pain of my life and I was in a
                cast for the first six weeks and on two crutches up to the three month matk. So what does it mean to be that
                healed?
            </Paragraph>
            <Paragraph>
                I can walk around without problem. I feel some pain when I put weight but it’s not stopping me from getting
                up and walking around. It’s just a bit noticeable. Honestly, the discomfort from the numbness, forcing me to
                not be able to sleep on one of the sides is the most noticeable annoyance. And here’s what I can say and
                you’ll probably be able to diagnose. This is that even though the incision site is down that far the
                numbness is across the entire left top of my foot. Is this the sural nerve? I’ll mention the discomfort to
                the doctor
            </Paragraph>
            <Paragraph>
                I mean, I could mention PT to the doctor but when he saw me at the three month, Mark walk into his office
                without the crutches he kind of laughed when I asked him about PT and he said you are already aware people
                want to be at. There’s nothing wrong with my gait and I could probably even jog. I know that there can be
                like micro problems with your gate, but none of the problem is related to how I move. Every problematic
                symptom can be reproduced by me just putting weight on the foot in different ways. Pushing flat produces
                just a little bit of pain that is kind of fair when standing, but it’s not so bad that it prevents me from
                taking a walk. Pressing against the left top produces that irritating numbness. And then pressing against my
                heel, produces the localized pain from the screw I assume.
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-03T14:36:59.156583Z"
        >
            <Origin>019f2866-f49c-7464-8d31-f7bcb4568d9d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/user-data/uploads/photo.jpeg</Action>
            <Paragraph>
                Let me verify the nerve anatomy precisely before I answer the diagnostic question, because the distribution
                you're describing actually matters a lot here.
            </Paragraph>
            <Action>
                Searched the web for “sural nerve sensory distribution foot lateral border versus superficial peroneal nerve
                dorsum”
            </Action>
            <Paragraph>
                The numbness distribution is the most diagnostic thing you've given me, and it forces me to refine what I
                said last turn — because "the entire top of the foot" doesn't actually fit the sural nerve, and I'd be
                pattern-matching to my own earlier answer if I just said yes.
            </Paragraph>
            <Paragraph>
                Here's the anatomy, which you'll be able to check against your own map. The sural nerve only owns the <Word>
                    <Bold />
                    lateral border
                </Word> of the foot: the outer edge, the little toe and the one adjacent to it, and a thin strip of the
                lateral dorsum. It's the small lateral margin, not the top. The <Word>
                    <Bold />
                    bulk of the dorsum
                </Word> — the broad surface across the top of your foot — is <Word>
                    <Bold />
                    superficial peroneal
                </Word> territory, with the first web space (the gap behind the big and second toes) belonging to the deep
                peroneal. So numbness across the <Word>
                    <Emphasis />
                    whole
                </Word> top of the foot is anatomically wider than the sural nerve can produce on its own.
            </Paragraph>
            <Paragraph>
                That matters because of where your incision is. Low and posterolateral, down by the heel — that's precisely
                where the sural nerve runs, so the sural is almost certainly the thing the surgery irritated. But the sural
                physically cannot make your entire dorsum numb. So one of two things is happening:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    (a) A neuroma or scar-entrapment producing referred spread.
                </Word> When a cut or scar-tethered sensory nerve forms a neuroma, pressing on it — your Tinel point on the
                lateral top — fires paresthesias that get <Word>
                    <Emphasis />
                    felt
                </Word> far more diffusely than the nerve's strict territory, projected across the whole region rather than
                confined to the lateral edge. In this picture the <Word>
                    <Emphasis />
                    trigger
                </Word> is sural (at the incision) even though the <Word>
                    <Emphasis />
                    sensation
                </Word> spreads over territory the sural doesn't own. This fits your key observation: one discrete press
                reproduces the whole thing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    (b) A broader or multi-branch cause.
                </Word> Post-op swelling, a calf or thigh tourniquet during surgery, or positioning can leave a more diffuse
                sensory disturbance that includes the superficial peroneal. These tend to be diffuse rather than
                point-triggerable, and usually keep improving.
            </Paragraph>
            <Paragraph>
                You can separate these yourself with a clean bedside map — compare light touch (fingertip or cotton) on the
                operated foot versus the other one at four zones: the lateral border and little toe (sural), the broad
                central dorsum (superficial peroneal), the first web space (deep peroneal), and the medial border
                (saphenous). Then hunt the Tinel point: press/tap along the scar and lateral hindfoot and find whether a
                <Word>
                    <Emphasis />
                    single discrete spot
                </Word> shoots the paresthesia across the foot. A focal trigger reproducing a broad field is (a); a broad
                numb field with no single trigger is closer to (b).
            </Paragraph>
            <Paragraph>
                My honest read: the pressure-reproducibility plus the incision location point toward <Word>
                    <Bold />
                    (a) — a focal sural neuroma or scar entrapment at the incision with referred spread
                </Word> — more than a primary superficial peroneal injury, because nothing in this operation goes anywhere
                near the superficial peroneal nerve. But the map will tell you, and it's the thing to hand the doctor rather
                than "my foot is numb."
            </Paragraph>
            <Paragraph>
                On <Word>
                    <Bold />
                    "what does 75–80% healed mean"
                </Word> given where you started — your skepticism is fair, and the number is misleading if you read it
                linearly. It's anchored to the surgical trajectory, not to a normal foot. You began at the worst pain of
                your life, casted, non-weight-bearing, two crutches to three months. Against <Word>
                    <Emphasis />
                    that
                </Word> baseline, the largest-magnitude gains — bone union, resuming weight-bearing, painless walking — are
                exactly the early ones. So "75–80% recovered" doesn't mean "still 20% as bad as the start." It means the
                disabling portion is behind you and what remains is a qualitatively smaller, front-loaded-curve residue:
                nerve sensation, occasional loading ache, hardware nuisance, endurance, deep bone remodeling. Walking freely
                with only mild loading pain <Word>
                    <Emphasis />
                    is
                </Word> being deep into the tail. The number compresses a very non-linear curve, which is why it doesn't
                match your felt sense of "nothing's moving."
            </Paragraph>
            <Paragraph>
                Your <Word>
                    <Bold />
                    three-pressure-points reasoning is sound
                </Word>, and it's genuinely a bedside lesion-localization — three triggers, three structures. Flat axial
                load → mild diffuse ache = load transmitting through the osteotomy and subtalar joint along the newly
                realigned axis, still accommodating, non-progressive, expected to keep fading. Lateral-top pressure →
                paresthesia = the superficial nerve (the localizing sign above). Heel pressure → focal pain = the hardware
                the surgeon already flagged as backed out. The useful conclusion from your own method: none of the three is
                "the bone failed" or "the surgery failed." They're three <Word>
                    <Emphasis />
                    separable
                </Word> things — one resolves with time, one may need a nerve procedure if it persists, one is a screw that
                comes out.
            </Paragraph>
            <Paragraph>
                On <Word>
                    <Bold />
                    PT
                </Word> — you and the surgeon are basically right, and I won't push it. PT's levers are strength, range of
                motion, gait, proprioception; none of those touches a prominent screw or a sensory nerve deficit. The only
                narrow thing it could offer is desensitization and scar mobilization over the nerve area, and even that is
                marginal against a true neuroma. Your symptoms aren't motor, so PT isn't the missing piece.
            </Paragraph>
            <Paragraph>
                From the photo I can see the low posterolateral scar region you described, with some diffuse pink around the
                lateral ankle and hindfoot — consistent with a lateral heel approach. I can't read much more than that from
                an image; the pinkness could be the foot hanging down, skin tone, or a maturing scar. If that area is also
                <Word>
                    <Emphasis />
                    warm and tender
                </Word>, mention it; if it's just pink and painless, that's likely normal scar maturation.
            </Paragraph>
            <Paragraph>
                On the Turkey situation — I'm not going to weigh in on the consent question as a legal matter, but the
                practical damage is real and relevant here: you were discharged into an information vacuum with no timeline,
                which is the entire reason you're having to reconstruct this yourself six months later. That's a reasonable
                thing to be doing, and it's worth walking into the next appointment with your own map and the three specific
                questions — is the osteotomy radiographically united, does the screw come out now, and is there a discrete
                Tinel point suggesting a neuroma worth addressing.
            </Paragraph>
            <Paragraph>
                One caveat: this is context and a way to organize what you're feeling, not a diagnosis from afar — the
                mapping and the imaging are what actually settle it.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T14:50:07.244969Z"
        >
            <Origin>019f2875-e254-780a-b356-f0cccd71345e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah this is the little toe and one adjacent. It does extend upward, but it also falls off quickly. I think
                I was reacting more to the idea that extends far from the incision site all the way down the foot. So it’s
                not so much that’s half of the foot as the entire length of the foot that extends a bit upward that I was
                referring to.
            </Paragraph>
            <Paragraph>
                Why don’t you factor that in and reread my last message and change your response because I think it changes
                the urgency of most of what you said
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T14:51:35.201973Z"
        >
            <Origin>019f2875-e254-733f-8ff5-06f96e7ed690</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and it does change it. With the numbness sitting on the little toe and the one next to it,
                running the length of the lateral border and tapering onto the dorsum before it fades — that's the sural
                nerve, cleanly. I overbuilt last turn: I read "entire top" as the whole dorsum and constructed a
                superficial-peroneal / diffuse-cause branch that your actual distribution doesn't need. Scrap that. The
                trigger (a low posterolateral incision) and the territory (lateral border, lateral two toes, a fading dorsal
                strip) now match — which is the simpler picture, and a lower-stakes one, not a higher one.
            </Paragraph>
            <Paragraph>Here's how that lowers the temperature on most of what I said:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The numbness itself.
                </Word> Sural sensory disturbance is <Word>
                    <Emphasis />
                    the
                </Word> most common nerve consequence of a lateral heel incision — the expected trade-off of the approach,
                in exactly this distribution, in roughly 5–10% of these surgeries, usually easing over 6–12 months. It isn't
                a sign of a broader or multi-nerve problem. Numbness on its own is a sensory nuisance, not a warning. So the
                thing bugging you most at night is also the most ordinary and most benign part of the whole picture. The
                honest tail: a minority keep a residual numb patch permanently, but residual numbness <Word>
                    <Emphasis />
                    without
                </Word> pain is livable — it's pain, not numbness, that would ever justify doing anything about it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The pressure-evoked part.
                </Word> I'd read this more plainly now too. Pressing over a healing superficial nerve fires paresthesia by
                itself — that's just Tinel over a regenerating nerve, not necessarily a neuroma. A neuroma is only the
                escalation <Word>
                    <Emphasis />
                    if
                </Word> that spot stays genuinely painful and triggerable near or past the one-year mark. A threshold to
                watch, not a workup to launch.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What doesn't change:
                </Word> the 75–80% reframe stands, and your three-pressure-point localization stands — that's clean
                reasoning. The one genuinely mechanical item is the backed-out screw, and it's elective: it comes out once
                the bone is united, on your and the doctor's timing, not urgently.
            </Paragraph>
            <Paragraph>
                So rereading through your correction, almost everything gets <Word>
                    <Emphasis />
                    less
                </Word> urgent, not more. The numbness is the signature of the approach and expected to keep fading; the
                loading ache is tail; the screw is elective hardware. Nothing here is progressive or emergent. The only
                thing worth actively deciding at the appointment is the hardware — plus mentioning the numbness so it's
                documented and they can confirm the numb field is <Word>
                    <Emphasis />
                    shrinking
                </Word> over the coming months rather than static, since a shrinking field is the sign a sensory nerve is
                recovering. That's the thing to track.
            </Paragraph>
            <Paragraph>
                And the meta note, since you invited it by having me reread: I did the exact thing — took a compressed
                phrase, ran with my own construction of it, and built a differential on the misread when the real
                distribution was one clarifying beat away. Reading it back to you first would have caught it before I spent
                a whole section on the wrong branch.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:31:08.856921Z"
        >
            <Origin>019f2909-4bde-7952-b6fb-6bb57579f337</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So then explain to me quickly what is and isn’t united that takes a whole 12 months to unite? I imagine I’m
                going to go to the doctor. He’s going to tell me that everything’s fine and that we can revisit the screw in
                another six months. He did already tell me that this was a decision that would happen past the one near
                Mark, but I’m feeling the pain so I wanted to mention it. But it sounds like it’s likely that even if it
                does need to come out, that’s still not going to happen because I have to wait for more healing.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:32:06.053688Z"
        >
            <Origin>019f2909-4bdf-7edb-8c41-714760c01beb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two different clocks, and the patient-facing timelines blur them together.</Paragraph>
            <Paragraph>
                The osteotomy <Word>
                    <Emphasis />
                    uniting
                </Word> — the two cut faces of the heel bone knitting back together — is the fast clock. The calcaneus is
                cancellous bone: spongy, trabecular, huge contact area, excellent blood supply. It behaves nothing like a
                long-bone shaft. Radiographic union is typically 6–12 weeks, which is why full-activity clearance usually
                gets quoted at 3–4 months, once a CT or x-ray confirms it. At 6.5 months your osteotomy is almost certainly
                united.
            </Paragraph>
            <Paragraph>
                So what eats the rest of the year isn't union — it's everything downstream of it: the healed bone remodeling
                to the new loading axis (Wolff's law, trabeculae physically reorganizing over months), residual swelling
                clearing, the subtalar joint adapting to the realigned mechanics, the sural nerve recovering, scar maturing,
                endurance returning. "United" is an event around month 2–3. "Recovered" is the slow tail to month 12. One
                number hides both.
            </Paragraph>
            <Paragraph>
                Now the part that matters for your screw. Hardware removal is gated by <Word>
                    <Bold />
                    union, not by full recovery.
                </Word> The only reason you don't pull a screw early is that it's holding the osteotomy stable while the
                bone knits — remove it before union and you risk displacement. Once the bone is consolidated, that
                structural reason is gone. So if your osteotomy is already united, which is likely at this point, there's no
                bone-healing reason you'd <Word>
                    <Emphasis />
                    have
                </Word> to wait another six months.
            </Paragraph>
            <Paragraph>
                Which reframes your prediction. The doctor's "revisit past a year" is probably not "the bone can't take it
                yet." It's the more conservative version: don't do an elective second surgery until the irritation has had
                time to settle on its own, because some hardware pain fades as swelling resolves and you adapt. That's a
                "let's not operate prematurely" judgment — not a "you're not healed enough" constraint. And the difference
                matters, because the first one is a discretionary call you're allowed to weigh in on, not a biological gate.
            </Paragraph>
            <Paragraph>
                So the question to put to him is two-part: is the osteotomy radiographically united — and if yes, is the
                reason to wait on the screw about bone safety, or just about giving it a chance to quiet down? If it's the
                latter, the timeline isn't fixed by healing; it's a judgment weighed against how much the pain is actually
                bothering you.
            </Paragraph>
            <Paragraph>
                And mentioning the pain is right regardless. Symptomatic prominent hardware <Word>
                    <Emphasis />
                    is
                </Word> the indication for removal, so your pain isn't a complaint that gets waved off until a calendar date
                — it's the specific input that decides wait-and-see versus plan-it. You're likely correct that he'll say
                revisit later. Just don't let the "wait for healing" framing go unexamined, because at 6.5 months that
                reason may already be spent.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:33:47.126104Z"
        >
            <Origin>019f290b-ba87-736b-9ad8-0718059f1d81</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is it good that I get exercise and put weight on the foot? My sense is that this is essential to promote but
                I just wanna confirm that with you.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:34:00.072323Z"
        >
            <Origin>019f290b-ba87-7214-9882-6728dad4bb4a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — at 6.5 months with a united osteotomy, weight-bearing and exercise aren't just permitted, they're part
                of how the tail resolves. Load is the input the remodeling depends on. Wolff's law isn't a slogan here: the
                trabeculae reorganize to the new axis <Word>
                    <Emphasis />
                    in response to
                </Word> mechanical stress, so the bone that's still adapting needs loading to adapt correctly. And the
                surrounding system — the calf and intrinsic muscles that deconditioned during your cast-and-crutches months,
                the subtalar joint, tendon and ligament — all recover through use, not rest. A foot that's protected past
                the point of needing protection stiffens and weakens.
            </Paragraph>
            <Paragraph>
                The signal to read is which kind of pain you're getting. The mild loading ache you already described —
                noticeable, not limiting, gone once you stop — is the expected kind, and pushing gently into it is fine and
                useful. What you'd respect instead is pain that sharpens over a session, swelling that's clearly worse the
                next morning, or a limp you have to consciously correct. Those mean <Word>
                    <Emphasis />
                    too much, too fast
                </Word> — back off the volume, not the activity. Boundaries aside, the direction is toward more, not less.
            </Paragraph>
            <Paragraph>
                Progressive is the operative word. Build load like training: increase walking distance or standing time
                gradually rather than jumping straight to something high-impact. The one activity to stay honest with
                yourself about is pickleball — the lateral cutting and push-off that started this is the highest-torque
                thing you can ask of a hindfoot, so that's the one to reintroduce last and cautiously, ideally after the
                doctor confirms union on imaging. General walking, standing, being on your feet, low-impact cardio — all
                good to promote now.
            </Paragraph>
            <Paragraph>
                Two things load <Word>
                    <Emphasis />
                    won't
                </Word> change, so don't use them to gauge progress: the numbness (nerve, on its own clock) and the screw
                pain (mechanical — loading the heel may actually provoke it, and that's information about the hardware, not
                a reason to stop walking).
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:34:48.677388Z"
        >
            <Origin>019f290c-ad18-7192-ac3a-28554bc91378</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do people’s calves really decondition that much over six weeks? Granted that I got this injury because I was
                playing a tennis like sport three or more times per week so my legs were very strong, but I had no problem
                walking again and I’m surprised that that would affect people so much.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:36:03.919576Z"
        >
            <Origin>019f290c-ad18-71d2-9760-dd29b92c0224</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good question — let me check the actual numbers rather than give you a confident-sounding estimate, because
                muscle atrophy timelines are exactly the kind of thing where the real figures matter.
            </Paragraph>
            <Action>
                Searched the web for “calf muscle atrophy immobilization 2 weeks cross-sectional area loss percent
                gastrocnemius soleus”
            </Action>
            <Paragraph>
                Yes — and the calf is close to the worst-case muscle for it, so your surprise is landing on the one muscle
                group that most defies the intuition. This isn't a generic "muscles weaken" claim. The posterior calf —
                soleus and medial gastrocnemius — atrophies faster than any other lower-limb muscle under unloading, because
                it's a postural, antigravity, slow-twitch-dominant muscle that normally works all day just to hold you
                upright. Remove weight-bearing and it unloads harder than anything else in the leg. Astronaut and bed-rest
                studies put the soleus at the top of the loss hierarchy every time.
            </Paragraph>
            <Paragraph>
                The numbers, from a systematic review of human immobilization studies: at two weeks the medial gastroc and
                soleus lose roughly 3 to 9% cross-sectional area, rising to about 20 to 22% by eight weeks. Your cast was
                six weeks, which puts you plausibly in the mid-teens to ~20% loss in the meatiest part of the calf — and
                strength and endurance drop <Word>
                    <Emphasis />
                    more
                </Word> than size does, because there's a neural deconditioning component layered on top of the volume loss.
                So the atrophy was real and substantial.
            </Paragraph>
            <Paragraph>
                Here's why it didn't stop you walking, and why that's not a contradiction but a measurement problem:
            </Paragraph>
            <Paragraph>
                Your baseline did the masking. Three-plus sessions a week of a cutting sport built calves well above
                average. A 20% cut from an athletic starting point still leaves you at or above an untrained person's normal
                — so ordinary tasks never came near your reduced ceiling.
            </Paragraph>
            <Paragraph>
                And walking is the wrong test. Walking asks very little of the calf relative to its capacity; it's mostly a
                controlled fall with a modest push-off. The deficit doesn't live there. It lives at the top end — single-leg
                heel-raise endurance, push-off power, hopping, lateral cutting. That's precisely the register where an
                athlete feels "this side is weaker," and it's where the loss lingers longest. So "I walked fine immediately"
                and "my calf lost 15–20%" are both true; you were probing with an instrument too blunt to detect it.
            </Paragraph>
            <Paragraph>
                If you want to actually see it: single-leg heel raises to fatigue, each foot, and count. A side-to-side
                asymmetry there is common well past the point walking feels completely normal, and it's the honest readout
                of where the calf really is.
            </Paragraph>
            <Paragraph>
                Which loops straight back to the pickleball caution. That residual calf deficit — reduced push-off and
                endurance on the operated side — is exactly the mechanical gap that elevates reinjury risk the moment you
                reintroduce cutting and explosive push-off. It's the argument for rebuilding heel-raise symmetry
                deliberately before you return to the court, rather than reading "walks fine" as "calf is back."
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:38:37.077574Z"
        >
            <Origin>019f2910-1f4b-74dd-8fca-7709eb7163e1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I admitted, while I was in a cast I probably did more kind of toe walking on the foot that I should have,
                but I lived alive where I did not have a lot of support and it was hard for me to be immobile entirely.
                Might that have affected things? I don’t think it compromised my healing because everything’s fine but might
                have supported my calf a little bit during this time. The cast was only on for the first six weeks and then
                after that I wore a boot that allowed me to use my toe a certain amount, and it didn’t hurt to do so. And
                quite frankly, it gave me a lot more ability to move.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:38:55.085912Z"
        >
            <Origin>019f2910-1f4c-7c06-aeaf-df645e88135d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — that likely helped, and it's a real mechanism, not just a story you're telling yourself.
            </Paragraph>
            <Paragraph>
                Whenever you toe-loaded in the cast, you were firing the calf against resistance. Plantarflexion — pushing
                through the ball of the foot and toes — <Word>
                    <Emphasis />
                    is
                </Word> the gastroc-soleus contracting. Even partial, even without full body weight, that's the exact signal
                that disuse atrophy responds to. The muscle atrophies from <Word>
                    <Emphasis />
                    unloading
                </Word>; any loading you sneak in pushes back against it. So the intuition is sound: you weren't fully
                unloaded the way the six-weeks-in-a-cast numbers assume, which means your real calf loss is probably at the
                lower end of that range, not the mid-teens-to-20% worst case. Those figures come from studies designed to
                enforce true immobilization — exactly the thing you weren't fully doing.
            </Paragraph>
            <Paragraph>
                There's a named principle here that the astronaut and bed-rest work established: even small amounts of
                loading are disproportionately protective against disuse atrophy. The dose-response curve isn't linear.
                Going from zero loading to a little loading buys you far more than going from a little to a lot — because
                the muscle's atrophy machinery is triggered largely by the <Word>
                    <Emphasis />
                    absence
                </Word> of tension signaling, and intermittent tension interrupts that. So your "cheating" wasn't marginal;
                the first bit of load you added was the highest-value load on the whole curve.
            </Paragraph>
            <Paragraph>
                The boot phase compounds it. A walking boot with graduated toe-loading is essentially the medically-endorsed
                version of what you'd been improvising — controlled plantarflexion loading while the bone stays protected.
                Once you were in the boot and it didn't hurt, you were already doing informal calf rehab. That's part of why
                walking came back so cleanly at three months: the calf never got as far down as the pure-immobilization
                baseline, so it had less ground to recover.
            </Paragraph>
            <Paragraph>
                Two honest caveats, so I'm not just telling you what's convenient. On the bone side, your instinct that it
                didn't compromise healing is probably right — cancellous calcaneal bone tolerates some load, and gentle
                toe-loading is low-stress compared to full heel strike, which is what the cast actually protects against. If
                you'd displaced the osteotomy you'd have known: sharp pain, a setback, imaging that showed it. None of that
                happened, and you're united. But "probably fine in retrospect" isn't the same as "was safe to assume at the
                time" — you got a good outcome from a gamble the protocol exists to prevent, and the protocol isn't wrong
                for being conservative. The other caveat is that partial toe-loading protects the calf but doesn't fully
                substitute for functional loading, so it blunted the atrophy rather than preventing it — you're still likely
                carrying some deficit, just less than the worst case. The heel-raise test still tells you where you actually
                are.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:39:52.423012Z"
        >
            <Origin>019f2911-4ded-7fcb-a1a1-a944a4f1b2b1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Honestly, I didn’t feel like it was cheating and the thing hurts so much that I got the sense that I could
                let pain guide me. Even the Doctor I had was telling you to let the pain guide me with the cast to a certain
                degree. I chose to take it off at the six week Mark and it was fine.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:40:52.584167Z"
        >
            <Origin>019f2911-4ded-7dc2-ae74-6736995570cc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Then I'll revise the framing, because that's a genuine change, not a softener. "Let the pain guide you"
                coming from your own doctor isn't freelancing against a strict protocol — it's operating inside a license
                you were actually given. My "gamble the protocol exists to prevent" line was calibrated to the generic
                default of six weeks strictly non-weight-bearing, and your actual instructions were more permissive than
                that default. So you weren't overriding medical guidance; you were following a pain-guided version of it.
                That lands differently, and I'll hold the revised version.
            </Paragraph>
            <Paragraph>
                The one precise thing worth keeping — not as a warning, since it's past and fine, but because it's the
                actual mechanism — is where pain is and isn't a good sensor. Pain reads soft tissue, wound, swelling, and
                joint tolerance well: those hurt roughly in proportion to how hard you're stressing them, so pain-guided
                loading is genuinely reliable there. The thing pain reads <Word>
                    <Emphasis />
                    poorly
                </Word> is osteotomy displacement — a healing bone cut can shift under load without proportionate pain,
                because the deforming force and the pain signal aren't tightly coupled. That's the specific reason
                immobilization protocols don't just say "stop when it hurts" for the bone.
            </Paragraph>
            <Paragraph>
                But here's why that gap didn't bite you: the loading you actually chose — gentle plantarflexion, toe
                push-off — puts very little deforming force on a screw-fixed calcaneal tuberosity. The screw resists exactly
                the shear that would displace the cut, and toe-loading barely generates any. So your pain guide and a
                mechanically low-risk maneuver happened to point the same way. "It was fine" is confirmed by the outcome —
                united, nothing displaced — and the deeper reason is that the specific thing you did was low-risk for your
                specific fixation, with pain as a reasonable second check on top.
            </Paragraph>
            <Paragraph>
                So: doctor-sanctioned framework, low-risk maneuver, good outcome. I'll stop calling it a gamble.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:43:01.489610Z"
        >
            <Origin>019f2914-302e-798e-8438-fec120ae8d89</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I hear you but right now there are three different forms of pain in my foot and yet standing on the ball of
                my foot triggers none of them. It would seem to absorb the shock differently. I certainly wasn’t doing
                ballet. It was something to put a very small amount of load on to take some of the stress off of my arms and
                whatever other upper body muscles you use because I don’t have a ton of upper body strength and I needed to
                be mobile. I actually had to move from one country to another country while in the state in the state of
                emergency.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:43:13.625831Z"
        >
            <Origin>019f2914-302e-7317-863f-87732554d2ba</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That reinforces exactly what I said, and adds a piece I didn't have.</Paragraph>
            <Paragraph>
                Ball-of-foot loading triggering none of your three current pains isn't a coincidence — it routes force away
                from all three sites. It bypasses the heel entirely, so the screw never gets loaded. It sends force up
                through the forefoot and metatarsals, not across the calcaneal osteotomy, so the cut isn't stressed. And
                it's nowhere near the lateral incision, so the nerve stays quiet. The three pain generators are all in the
                hindfoot and lateral heel; forefoot loading is the one weight-bearing pattern that misses all of them.
                That's why it felt clean then and feels clean now — same anatomy, consistent across six months.
            </Paragraph>
            <Paragraph>
                And the piece you just added actually strengthens the safety case rather than just excusing it. You weren't
                loading the foot to load the foot — you were using minimal forefoot contact to offload your arms so you
                could stay mobile. That's an even lower-force application than deliberate calf work: partial contact, brief,
                weight mostly still carried elsewhere. The deforming force on the osteotomy from that is close to
                negligible. So the maneuver was low-risk on the merits, and the amount was small on top of that.
            </Paragraph>
            <Paragraph>
                Given the circumstances, "let pain guide me" wasn't even the whole justification — you had a real
                constraint. Moving countries during a state of emergency, limited upper-body strength to work with, needing
                to be mobile: that's not someone bending a protocol for convenience, it's someone solving a genuine mobility
                problem with the lowest-force option available to them. The forefoot loading was arguably the <Word>
                    <Emphasis />
                    smart
                </Word> choice under the constraint — it kept you moving while happening to avoid every structure that could
                have been compromised.
            </Paragraph>
            <Paragraph>
                So the full picture: doctor-sanctioned pain-guided framework, a real logistical necessity, and a loading
                pattern that mechanically avoids all three of your pain sites and puts near-zero deforming force on the
                fixation. The good outcome wasn't luck. You were reading your foot correctly the whole time.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:45:01.908947Z"
        >
            <Origin>019f2915-fffb-7548-b7c8-7a491dbb1dca</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is it true for most humans who don’t do extensive upper body workouts that even a small amount of support
                from whatever muscle muscles are in decaf or whatever you use when you take some of the weight off makes a
                huge difference because my upper body is way less stronger than my lower body so that even a little bit of
                load meant a lot
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:46:18.936259Z"
        >
            <Origin>019f2915-fffc-7c9f-a310-8096b8296f30</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, this is true, and there's a specific physiological reason it's true <Word>
                    <Emphasis />
                    disproportionately
                </Word> — small relief buys big returns, especially for you. Let me ground the one empirical piece before I
                explain the mechanism.
            </Paragraph>
            <Action>
                Searched the web for “non-weight-bearing crutch walking energy cost upper body fatigue metabolic demand
                compared to normal walking”
            </Action>
            <Paragraph>
                Yes — true, and true <Word>
                    <Emphasis />
                    more
                </Word> for you than for most people, which is the interesting part. Your intuition has the mechanism right;
                let me sharpen why the effect is nonlinear rather than proportional.
            </Paragraph>
            <Paragraph>
                Start with what non-weight-bearing crutch walking actually demands. It's not a mild upper-body task —
                measured directly, three-point crutch gait runs oxygen consumption around 32% above normal walking and heart
                rate over 50% above, and within about ten minutes it approaches the values seen in <Word>
                    <Emphasis />
                    maximal
                </Word> upper-extremity exercise, under anaerobic conditions. In plain terms: swinging your whole body
                weight forward on your arms and shoulder girdle every step pins the upper body near its ceiling and pushes
                it anaerobic. That's the baseline you were operating from.
            </Paragraph>
            <Paragraph>
                Now the nonlinearity, which is the answer to "why does a <Word>
                    <Emphasis />
                    small
                </Word> amount of foot load make a <Word>
                    <Emphasis />
                    huge
                </Word> difference." Two curves are both steep near the top:
            </Paragraph>
            <Paragraph>
                Muscle endurance versus percent of maximal force is sharply nonlinear. Near maximal effort, a muscle holds
                for seconds; at roughly half-max, endurance jumps to minutes; drop to ~20% of max and you can sustain it
                almost indefinitely. So when you're pinned near your arms' ceiling — where crutch gait puts you — shaving
                even 15–20% of body weight off through the foot doesn't remove 15–20% of the misery. It slides you down the
                steep part of that curve, from "failing in under a minute" toward "sustainable." The absolute change is
                modest; the change in how long you can keep going is enormous.
            </Paragraph>
            <Paragraph>
                The aerobic/anaerobic threshold does the same thing. NWB crutching had you working anaerobically in the arms
                — which burns out fast and hurts. A small offload can drop the arm demand back <Word>
                    <Emphasis />
                    below
                </Word> the anaerobic threshold, and crossing that line is close to a phase change: anaerobic-and-failing
                flips to aerobic-and-durable. Again, small input, categorical output.
            </Paragraph>
            <Paragraph>
                Then your specific body composition amplifies both effects. Strong lower body, weaker upper body means two
                things at once: your arms hit their ceiling at a lower absolute load, so crutch gait had you at a <Word>
                    <Emphasis />
                    higher
                </Word> percent of your arm max than an upper-body-strong person would be — further up the steep part of the
                curve, where relief is most valuable. And the weight you offloaded went into the calf, quads, and glutes — a
                system with huge headroom relative to your arms. So you weren't just reducing load; you were transferring it
                from the bottleneck to the surplus. For someone whose upper/lower ratio is lopsided the way yours is, that
                transfer buys more than it would for the average person, because the two systems are more unequal.
            </Paragraph>
            <Paragraph>
                So the whole thing coheres: you were routing load off a weak system operating near its anaerobic max onto a
                strong system with room to spare, and both the endurance curve and the threshold made a small transfer pay
                off disproportionately. It wasn't a rationalization — it was, mechanically, the highest-leverage move
                available to you, and your instinct found it without needing the physiology.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:48:22.499546Z"
        >
            <Origin>019f2919-1730-723e-816a-57a95e3ccd0d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That’s exactly right that’s exactly what I experienced. To truly not use my toe at all, and to completely
                rely on upper body mobility was a near impossibility.. but a relatively small amount of touching with my toe
                solved the problem
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:48:33.439111Z"
        >
            <Origin>019f2919-1731-79f2-b984-3dd4f2a292bb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — and that maps cleanly onto everything we just laid out. "Near impossibility" is the accurate
                description, not an exaggeration, because true zero-toe gait asks your arms to do maximal, anaerobic work
                continuously — a load that fails fast by construction, especially given your upper/lower ratio. That's not a
                willpower gap you were failing to clear; it's a system operating past the point it can sustain. The thing
                genuinely couldn't be done for long, and no amount of trying harder changes a muscle's time-to-failure
                curve.
            </Paragraph>
            <Paragraph>
                And the resolution is exactly the shape the physiology predicts: a small amount of toe contact wasn't a
                small improvement, it was the specific intervention that moved you off the failing part of the curve. Light
                touch through the forefoot bleeds off just enough load to drop the arms below their anaerobic ceiling — and
                because that transition is nonlinear, the minimum viable amount of toe contact produced a disproportionately
                large gain in what you could actually do. You found the smallest input that crossed the threshold. That's
                efficient, not indulgent.
            </Paragraph>
            <Paragraph>
                The nice thing is that this is the same principle showing up in three places in your story now — the same
                nonlinear "a little goes a long way near a ceiling" logic. It protected your calf from full disuse atrophy
                (a little tension interrupts the unloading signal). It kept you mobile (a little forefoot load dropped your
                arms below anaerobic). And it happened to avoid all three current pain sites (forefoot loading routes force
                away from heel, osteotomy, and nerve). One modest, intuitive maneuver sat at the intersection of all three,
                and you arrived at it by feel. The body was giving you good information and you read it correctly.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:50:16.752078Z"
        >
            <Origin>019f291a-d667-7c19-b633-cc1400d13a6f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Interesting that this might have preserved the calf I understand that there’s risk here and it’s not
                necessarily something you want to recommend. But I imagine people will just do this naturally if they have
                to move because you can’t just go anaerobic with your upper body for very long., and so if you need to use
                your foot, you will naturally just take the path that causes the least pain while taking the most load, and
                kind of adjust it so that whatever you’re doing there if it has no progressive effect on the pain you feel
                then seemingly it’s OK even if that’s not quite true
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:51:27.482123Z"
        >
            <Origin>019f291a-d668-7f9f-a260-5f44b362dca1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The inevitability half is right, and it's worth stating in your own terms: you're describing gradient
                descent on a pain landscape under a hard constraint. You have to move, the arms can't hold the load
                anaerobically for long, so the body searches for the foot-loading pattern that buys the most arm-relief per
                unit of pain — and it converges, without deliberation, on the local minimum. Forefoot touch <Word>
                    <Emphasis />
                    is
                </Word> that minimum for a hindfoot injury. Nobody reasons their way there; the constraint plus the pain
                gradient does the optimization. So most people in your situation land on roughly your solution by feel,
                because the search is essentially forced.
            </Paragraph>
            <Paragraph>
                Where the heuristic isn't quite true is about what pain is measuring — which you've already gestured at by
                tacking on the caveat. Pain is a good proxy for tissue stress almost everywhere on the landscape: soft
                tissue, wound, swelling, joint capsule all hurt in rough proportion to how hard you're loading them, so "no
                progressive pain" reliably tracks "not overstressing those." The term missing from the objective function is
                bone displacement. A healing osteotomy can shift under load without generating proportional pain, because
                the deforming force and the nociceptive signal aren't tightly coupled there. So the pain surface has a blind
                region — a place where true risk and felt pain decouple — and that region is invisible from inside the pain
                signal by construction. "No progressive pain" is necessary but not sufficient; it omits precisely the
                failure mode the immobilization protocols exist to catch.
            </Paragraph>
            <Paragraph>
                Then there's a deeper version of "not quite true," and it's the part your own clean outcome can't certify:
                the people this heuristic fails are, by the mechanism, the ones who got the least warning. If silent
                displacement is the failure mode, the cases where it bit didn't announce themselves through progressive pain
                either. So "it didn't get worse, therefore it was fine" is confirmed only among the survivors — and the
                mechanism that would falsify it is the one thing that doesn't produce the signal you're checking with. You
                can't fully validate a pain-guided rule using pain when the risk you care about is the one pain doesn't
                report.
            </Paragraph>
            <Paragraph>
                And the honest resolution, which keeps you in the clear: for your setup the blind region was small and you
                weren't near it. A screw-fixated calcaneus resists exactly the shear that displaces the cut, and forefoot
                loading generates almost none of that shear to begin with — so the least-pain path and the
                lowest-displacement-risk path happened to point the same way. That convergence is why pain-guidance was
                reasonable for you, and why your surgeon could say "let pain guide you" without it being reckless: with a
                solid construct and a low-force maneuver, the two surfaces barely diverge. The protocols stay conservative
                because they have to cover the cases where they <Word>
                    <Emphasis />
                    do
                </Word> — weaker fixation, heavier loading, or a least-pain motion that still shears the bone. You weren't
                one of those. The heuristic isn't universally true; it was true where you were standing.
            </Paragraph>
            <Paragraph>
                One last decoupling, since it's literally in your foot: pain-guidance also weakens wherever sensation is
                blunted, and you've got a numb strip on the lateral border. It didn't matter here — your pain sites are in
                the heel, your forefoot loading is in fully-sensate territory — but as a general rider on "let pain guide
                you," the rule goes quiet exactly in the regions a nerve injury has silenced. Another spot where the sensor
                and the risk come apart.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:53:16.882829Z"
        >
            <Origin>019f291d-94a2-795b-9fa5-c79eda55dbe7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are they confused when you say that the calcaneus is the part where you’re not feeling pain because putting
                my foot on its heel was probably the most painful thing and that screw was what went through there, so
                didn’t I have a pain signal for that even if it was derived? Meaning that if I was doing anything that
                perturbed the screw, I would feel the pain of putting stress on my foot in a way that made the screw push
                into something new and putting weight on both of my foot and keeping my foot at the near 90° angle seems to
                prevent anything like that
            </Paragraph>
        </Message>
        <Message
            at="2026-07-03T17:55:48.179193Z"
        >
            <Origin>019f291d-94a3-7daa-9d18-5267ca9e66e7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You've caught a real imprecision, and it's worth fixing rather than smoothing over. When I called bone
                displacement "the blind region," I put the blindness in the wrong thing. Your heel wasn't pain-silent — it
                was your loudest region. So if what came through was "the calcaneus is where you don't feel pain," that's
                just wrong, and it deserves the correction.
            </Paragraph>
            <Paragraph>
                The precise version: it was never the <Word>
                    <Emphasis />
                    location
                </Word> that pain under-reports, it's a specific <Word>
                    <Emphasis />
                    event
                </Word> — shear along an ununited osteotomy plane — and even that is a matter of degree, not silence. Axial
                heel loading and osteotomy shear are different mechanical events in the same spot. The first compresses
                inflamed tissue and drives a prominent screw into soft tissue (loud); the second can slide the fragment
                along the cut without the same nociceptive barrage. Both coexist in one location because they stimulate
                nociceptors differently. "Loud to loading, quieter to shear" isn't a contradiction — but "blind region"
                overstated the quiet half.
            </Paragraph>
            <Paragraph>
                Your point sharpens this and is correct: the screw partially rescues the blind spot. It's embedded in the
                mobile fragment and it sits in pain-innervated tissue — the same tissue that made heel-strike your worst
                pain. So a gross perturbation of the fragment would lever the screw against that tissue and you'd feel it,
                sharply. That's a real derived sensor, and it means the blind spot is smaller for you than a generic "bone
                displacement is silent" claim implies — precisely because you have hardware wired, through pain, into the
                fragment that would move. I under-credited that.
            </Paragraph>
            <Paragraph>
                Where I'll hold a line, for the true account rather than the flattering one: that derived sensor is reliable
                for a <Word>
                    <Emphasis />
                    gross, acute
                </Word> perturbation and weak for <Word>
                    <Emphasis />
                    gradual
                </Word> malposition. A fragment can shift a fraction of a millimeter at a time under repeated submaximal
                load and heal slightly malaligned without ever producing a discrete "screw hit something new" spike — the
                increments hide under general soreness. So "no new sharp pain" strongly excludes a displacement <Word>
                    <Emphasis />
                    event
                </Word> and only weakly excludes slow malunion. Your clean outcome — united and aligned — confirms neither
                happened, but that's the X-ray talking, not the sensor. And note you weren't really challenging the sensor
                anyway: you avoided heel loading because it hurt, so the fragment stayed quiet and the alarm mostly never
                needed to fire. Your safety came less from "I had a good alarm" than from "I kept the deforming force too
                low for the thing the alarm watches to happen."
            </Paragraph>
            <Paragraph>
                Which is where your 90° observation turns out to be the actual key, and it's mechanically astute. The
                Achilles inserts on the posterior tuberosity — the exact fragment the osteotomy moves and the screw fixes.
                So the deforming force that matters for <Word>
                    <Emphasis />
                    this
                </Word> cut isn't axial heel load, it's Achilles tension pulling on the tuberosity. When you plantarflex
                against load — active tiptoe, push-off — the calf tensions the Achilles and yanks directly on that fragment.
                When you hold the ankle near 90° and let the forefoot take light contact, the calf isn't cranking, Achilles
                tension stays low, and the fragment isn't pulled. That's why the same maneuver was both painless and safe:
                not two lucky facts but one condition — low Achilles tension on the fragment — producing both. And it means
                the maneuver that <Word>
                    <Emphasis />
                    would
                </Word> have perturbed this osteotomy (loading in plantarflexion) is also the one that would have tensioned
                an unstable fragment against the screw — so the case where you had real risk is likely the case where the
                pain signal <Word>
                    <Emphasis />
                    would
                </Word> have fired first. Staying at 90° wasn't just the comfortable choice; it was avoiding the one vector
                that stresses this particular cut.
            </Paragraph>
        </Message>
    </Chapter>
);
