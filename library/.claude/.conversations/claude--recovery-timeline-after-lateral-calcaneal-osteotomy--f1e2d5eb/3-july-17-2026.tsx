import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[17 July 2026](2026-07-17)</Date>
        </Dated>
        <Title>[[ 17 July 2026 ]]</Title>
        <Message
            at="2026-07-17T16:01:49.465412Z"
        >
            <Origin>019f70d0-bb04-7e24-8428-ad67f1b52f51</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, I visited the surgeon and he was concerned about the pain from the screw and he took an x-ray and told
                me that they had to be removed because they’ve drifted too far out. I asked him if this was a problem and he
                said that it might be, but there’s actually a story where it might be because the bone is just healing
                quickly and it’s a sign of health that it’s pushing the screw out. He mentioned that if I can walk easily
                and even run if I needed to - which I noted that I could do if I needed to and he told me not to, but that
                it was a good sign - he said that this is more likely a good prognosis, even though I still need the
                surgery. Can you just do the background research on what he’s talking about and also give me as much as you
                can so that I know what to expect from the surgery?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-17T16:03:37.913138Z"
        >
            <Origin>019f70d0-bb05-7c46-891a-8112fde844fc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “screw backing out bone healing remodeling mechanism backout orthopedic explanation”
            </Action>
            <Paragraph>
                The first search returned mostly patents and spine literature. Let me target the specific mechanism the
                surgeon described.
            </Paragraph>
            <Action>
                Searched the web for “calcaneal osteotomy screw prominence symptomatic hardware removal rate incidence heel”
            </Action>
            <Paragraph>
                Now let me look for the specific mechanism behind what he told you — the "healing pushes the screw out"
                story.
            </Paragraph>
            <Action>
                Searched the web for “"screw" backing out osteotomy compression settling healing bone remodeling head
                becomes prominent mechanism”
            </Action>
            <Paragraph>
                Let me check the clinical-union piece — the part where he used your walking and running as evidence.
            </Paragraph>
            <Action>
                Searched the web for “clinical union versus nonunion painless weight bearing screw loosening sign of motion
                at osteotomy site”
            </Action>
            <Paragraph>
                Let me get the specifics on how well removal actually works for heel pain in this exact setting.
            </Paragraph>
            <Action>
                Searched the web for “calcaneal screw removal heel pain outcomes satisfaction pain relief after hardware
                removal osteotomy”
            </Action>
            <Paragraph>
                Good outcome from the visit — he confirmed the thing you were already feeling, and the story he told you is
                a real one with a mechanism behind it. Here's the background.
            </Paragraph>
            <Heading>The "healing pushed it out" story</Heading>
            <Paragraph>
                There are two competing narratives for a screw that migrates, and they have opposite meanings.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The bad one:
                </Word> screw loosening driven by persistent micromotion at an ununited osteotomy. If the bone isn't
                knitting, the fragment keeps toggling against the screw, bone resorbs around the threads, and the screw
                progressively works its way loose. This is what "back-out" means in the failure sense — the screw working
                itself out of the bone, resulting in instability, increasing pain, and danger from the movement. The
                literature on pelvic screws draws the distinction cleanly: a simple backout means the screw is slightly
                detached and doesn't cause loss of fracture reduction, especially if the loosening persists without
                progressing — whereas failure is when loosening affects stability and leads to loss of reduction, requiring
                further treatment.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one he's describing:
                </Word> bone is a live, remodeling tissue, and it moves metal. Loosening is a commonly encountered problem
                with screw fixation — a screw may work its way loose over time such that the head protrudes to an
                undesirable extent — partly because normal physiologic movement encourages screw migration and the bone into
                which the screw is driven tends to remodel over time. There's also a specific pressure-mediated piece: bone
                resorption is a physiological response to localized pressure and may occur directly under the screw head or
                at the fracture site — the bone under a headed screw remodels in response to the load the head puts on it,
                and the screw's position shifts as a consequence. Layer active callus formation and consolidation at the
                osteotomy on top of that, and you get metal being displaced by biology that's working, not failing.
            </Paragraph>
            <Paragraph>
                The key point is that <Word>
                    <Bold />
                    the same radiographic finding — screw proud of the bone — means totally different things depending on whether the osteotomy is united.
                </Word> In a healed bone it's a soft-tissue nuisance with no structural consequence. In an ununited one it's
                fixation failure. That's the fork, and it's why he took the X-ray.
            </Paragraph>
            <Heading>Why your clinical picture supports his read</Heading>
            <Paragraph>
                The thing he did with your walking and running isn't hand-waving — it's a standard part of union assessment,
                and it's specifically the <Word>
                    <Emphasis />
                    negative
                </Word> test for nonunion. Patients with nonunion report persistent pain at the fracture site and functional
                limitations; one indication that a nonunion is <Word>
                    <Emphasis />
                    not
                </Word> present is the absence of pain with ambulation or use of the extremity. Clinical signs of union are
                absence of pain, return to normal function, and full weight-bearing without assistance. Nonunion's clinical
                features are instability at the site, persistent constant pain at the site, and inability to bear weight.
            </Paragraph>
            <Paragraph>
                You're the photographic negative of that list. And note that the two assessments are genuinely independent
                inputs: clinical nonunion (pain, motion at the fracture site) may occur before radiographic criteria are
                met, and conversely radiographic union may precede clinical union — both assessments are used together. So
                he's got the X-ray and a clinical exam pointing the same direction, which is a stronger conclusion than
                either alone.
            </Paragraph>
            <Paragraph>
                Your three-pressure-point map from earlier feeds this too. Focal pain reproducible by pressing the heel, no
                pain generated by walking, no instability — that localizes to the hardware-soft-tissue interface, not to the
                bone.
            </Paragraph>
            <Heading>The numbers on your situation</Heading>
            <Paragraph>This is a well-known, well-quantified problem in exactly your procedure:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Screw prominence in the heel after calcaneal displacement osteotomy has historically led to high rates
                    of symptomatic hardware and screw removal, with removal rates ranging from 11% to 50%.
                </Line>
                <Line>
                    Screw design matters a lot: in one series, 2 of 76 patients (2.6%) with headless screws required removal
                    versus 12 of 54 (22.2%) with headed screws. You almost certainly have a headed screw — that's the design
                    whose head becomes prominent.
                </Line>
                <Line>
                    Timing: in a 123-patient series the removal rate was 8.8% at one year and 13.6% at two years, with a
                    mean interval to removal of 1.23 years, and 72.7% of screws were removed for heel pain. You're squarely
                    in the modal case, right at the typical timing, for the typical reason.
                </Line>
                <Line>
                    Prominence itself is the driver: posterior calcaneal screw prominence was found to be an independent
                    risk factor for hardware removal, while screw diameter, location, and trajectory were not associated
                    with pain.
                </Line>
            </Paragraph>
            <Paragraph>
                And the most directly reassuring number for the union question: in that headed-versus-headless study, the
                calcaneal osteotomy united in 100% of patients in both groups. Across the broader flatfoot literature,
                hardware removal is described as a minor outpatient procedure, with sural nerve irritation causing lateral
                foot numbness in 5-8% of patients, usually resolving within 6-12 months.
            </Paragraph>
            <Heading>What to expect from the removal</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The procedure.
                </Word> Outpatient day surgery under general or regional anesthesia. Incisions are usually made over the
                prior scars, the implants are located, and the screws removed. Specialized tools are used; if bone or scar
                tissue has grown around the hardware, the surgeon may need to drill or carefully detach it, and fluoroscopy
                may be used for guidance. A screw that's already backed out is the easy version — the head is proud and
                accessible rather than buried under overgrown bone.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Weight-bearing.
                </Word> This is the part that's nothing like your first surgery. Since the bone is already healed, walking
                is normally reinstated in a few days with a protective shoe or boot, and full recovery with the ability to
                wear normal footwear typically takes several weeks. Many protocols allow weight bearing as tolerated
                immediately in a boot; others suggest a short period of protected weight bearing or a walking boot for about
                four weeks.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The near timeline.
                </Word> Stitches usually come out at 10-14 days, with no soaking until the incision heals. Expect several
                days to a few weeks of soreness and swelling — elevation and ice help. Light desk work often resumes in 1-2
                weeks. Swelling and discomfort may persist for several weeks, but most patients recover within a few weeks
                to months.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The screw hole.
                </Word> The space occupied by the implant does not convert to normal bone, at least initially — it fills in
                with dense scar that is structurally similar to bone. The holes left in the bone usually don't significantly
                increase the risk of re-fracture. The activity gate is narrow: a small screw or wire may require little or
                no limitation of activity, though high-stress activities such as marathon training and jumping might be
                restricted for a period. Pickleball is the thing that waits; ordinary walking isn't.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How well it works.
                </Word> For symptomatic hardware, the odds are good. In a series of 80 cases of hardware removal after bony
                union, pain scores fell from 3.4 to 1.3, 81.3% had less discomfort walking on uneven ground, and 80.8% were
                satisfied with the removal. Roughly 70-80% of patients have reduced pain, stiffness, or discomfort and are
                content with removal.
            </Paragraph>
            <Heading>The one wrinkle that's specific to you</Heading>
            <Paragraph>
                Your incision sits in sural nerve territory, and you already have numbness and pressure sensitivity there.
                Two things worth having in mind:
            </Paragraph>
            <Paragraph>
                Removal targets the screw pain. It isn't a reliable fix for the numbness — different structure, different
                clock. And re-entering through the same scar means working near a nerve that's already irritated. Implant
                removal requires a second surgical procedure in scarred tissue and poses a risk for nerve damage, infection,
                and re-fracture, and is not a guarantee of pain relief. There's a documented pattern of exactly this: a case
                of sural nerve entrapment in postoperative scar tissue causing persistent lateral heel pain after calcaneal
                surgery <Word>
                    <Emphasis />
                    even after hardware removal
                </Word>, confirmed on diagnostic ultrasound and resolved with ultrasound-guided hydrodissection — over 90%
                symptom resolution after two sessions. Worth knowing that's a named, treatable thing if lateral pain
                outlives the screw.
            </Paragraph>
            <Paragraph>
                Flagging the numbness to him before the operation is probably the single most useful thing you can do with
                this, since it's the one variable in your case that the generic protocol doesn't account for.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-17T16:10:46.833714Z"
        >
            <Origin>019f70d8-eeaf-758d-979d-64cb9e7702eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The screw pain is by far the worst pain. I have no doubt that this will improve my experience. Even with the
                Group pain I’m still completely functional, but the doctor has told me to be cautious. He says two weeks in
                Rose you’re saying something on the one hand crutches might not even be necessary if I use my boot, but on
                the other hand, I might have to be careful for the next month. Can you just confirm what the different
                options for recovery are here and maybe just what you predict based on my condition now. The screws have
                backed out quite a bit, so it sounds like it’s going to be the easy version of the surgery.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-17T16:11:26.355518Z"
        >
            <Origin>019f70d8-eeb7-7961-bf18-a23ec1a8dad6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Those two things aren't in tension — they're two different constraints on two different clocks, and it's
                worth separating them because they'll feel like mixed messages otherwise.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Constraint 1: structural support for walking.
                </Word> This is what crutches are for. It's essentially gone, because your bone is already united. There's
                nothing that needs protecting from body weight. That's why walking is normally reinstated within a few days
                in a protective shoe or boot — the boot is doing the job crutches would, and even the boot is more about the
                wound and comfort than about load.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Constraint 2: the empty screw tract.
                </Word> This is what "careful for a month" is about. Your screws are big — calcaneal fixation screws run in
                the 6.5–7.0 mm range — so you're leaving two substantial holes in the tuberosity. They fill first with dense
                scar that's structurally similar to bone, then remodel. During that window the tract is a temporary stress
                riser. It doesn't meaningfully raise re-fracture risk for ordinary activity, but it's the reason high-stress
                activities like jumping and cutting get restricted for a period. So: walk freely, don't torque it.
            </Paragraph>
            <Paragraph>
                Neither of those is "you might need crutches." Crutches after this, if they show up at all, are a comfort
                item for the first few days, not a structural requirement.
            </Paragraph>
            <Heading>The spectrum of protocols</Heading>
            <Paragraph>
                Roughly, from most to least aggressive — and all of these are in normal practice, the variation is surgeon
                preference, not one being right:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Immediate weight-bearing as tolerated in a stiff-soled post-op shoe.
                    </Word> The fastest version. Some surgeons do this for a small screw or wire with little or no
                    limitation of activity.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Immediate WBAT in a walking boot.
                    </Word> Very common. The boot offloads and protects the incision and blunts impact.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Boot for ~2 weeks, then transition to normal shoe.
                    </Word> ← this is your doctor's plan.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Protected weight-bearing in a boot for ~4 weeks.
                    </Word> The conservative end of routine practice.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A brief NWB period.
                    </Word> Uncommon for isolated removal from united bone; you'd only see it if something else was done at
                    the same time or the bone was significantly disrupted getting the hardware out.
                </Line>
            </Paragraph>
            <Paragraph>
                The main thing actually driving those first two weeks isn't the bone — it's the wound. Incision over the
                lateral/posterior heel, shoe pressure right on it, stitches out at 10–14 days, keep it dry until sealed. The
                boot is largely a wound-protection device with a walking function.
            </Paragraph>
            <Heading>What I'd predict for you</Heading>
            <Paragraph>Your setup is close to best-case on every input that matters:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Backed out "quite a bit"
                    </Word> is the easy version. The hard version is when bone or scar has grown over the head and the
                    surgeon has to drill or carefully detach it — more bone disruption, more soft tissue work. Proud screw
                    heads are grabbed and turned. Less drilling means less bone removed beyond the tract itself.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        United bone
                    </Word> means no structural gate at all.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        You're already fully functional
                    </Word> — walking, could run. No deconditioning to recover from this time, no gait to relearn, no
                    strength deficit to climb out of. You start from normal.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Screw pain is your dominant symptom
                    </Word>, and that's precisely the symptom removal targets. This is the indication with the best track
                    record: ~80% satisfied, pain scores dropping from 3.4 to 1.3 in one series.
                </Line>
            </Paragraph>
            <Paragraph>
                So my read on the shape of it: soreness and swelling that peaks in the first few days and is mostly a
                wound-and-swelling experience rather than a pain experience; walking in the boot essentially from the start;
                boot off around two weeks when the stitches come out; normal shoes and normal life by roughly weeks 2–4; the
                "be careful" month meaning no jumping, no cutting, no pickleball — while walking, standing, and being on
                your feet are fine throughout.
            </Paragraph>
            <Paragraph>
                The honest floor on the prediction: the two variables that could stretch it are wound healing over the heel
                (that skin is thin and the area is under shoe pressure, so it's the most likely thing to be slow) and your
                sural nerve, which is why the numbness is worth flagging pre-op. Neither is likely to change the
                weight-bearing story.
            </Paragraph>
            <Paragraph>
                Compared to what you went through the first time — cast, two crutches, three months — this is a different
                category of event. You're going in already healed, already walking, with the easy variant of the extraction,
                for the symptom with the best odds of resolving.
            </Paragraph>
        </Message>
    </Chapter>
);
