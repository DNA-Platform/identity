import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-29T09:18:11.894074Z"
        >
            <Origin>01a04cd1-372b-7bc7-ac71-8e982b42b386</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am buying a drug called hydroxyzine to handle managing the symptoms from antipsychotic medications. In
                particular, I’m getting a lot of restlessness from abilify and need help sleeping. What are standard doses
                for this case?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-29T09:18:30.261692Z"
        >
            <Origin>01a04cd1-372b-7a2d-bb62-8d057b59e05c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Standard adult dosing from the US prescribing label (hydroxyzine HCl / pamoate) and the EMA 2015 safety
                review:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Anxiety (labeled indication):
                    </Word> 50–100 mg per dose, up to 4 times daily
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sedation / bedtime use (labeled as pre-procedure sedation; insomnia is off-label):
                    </Word> 50–100 mg as a single dose. In practice most prescribers start insomnia use at 25 mg at bedtime,
                    moving to 50 mg if needed
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Maximum:
                    </Word> EMA restricted adults to 100 mg/day total (50 mg/day in the elderly) after a 2015
                    QT-prolongation review; the US label has no such cap but 100 mg/dose is the top of the range
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Onset/duration:
                    </Word> roughly 30 min onset, ~4–6 h sedative effect, 20+ h half-life - so next-morning grogginess is
                    common at 50 mg+
                </Line>
            </Paragraph>
            <Paragraph>Two things worth having in front of you rather than me judging them:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Hydroxyzine is not a standard akathisia treatment in the psychiatric literature. The usual agents are
                    propranolol, benzodiazepines, mirtazapine, and anticholinergics (benztropine). Diphenhydramine is
                    sometimes used, and hydroxyzine is pharmacologically similar (first-gen antihistamine with
                    anticholinergic activity), so it's plausible it helps the restlessness, but I haven't seen trial
                    evidence for it specifically. Its documented benefit here is the sleep side.
                </Line>
                <Line>
                    QT: hydroxyzine prolongs QT at higher doses; aripiprazole is low-risk on that axis compared with other
                    antipsychotics. Not a known dangerous pair, but it's the interaction prescribers check.
                </Line>
            </Paragraph>
            <Paragraph>
                Not verified: whether hydroxyzine (Atarax) is OTC or prescription-only in Georgian pharmacies, and current
                Georgian brand/dose forms. I can run the Georgian/Russian pharmacy searches if you want that.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-29T09:20:04.907546Z"
        >
            <Origin>01a04cd2-f590-7749-ace3-56fc721fc954</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is akinesia the restlessness? Which of these drugs might be legal over-the-counter in George and at what
                doses would I get them?
            </Paragraph>
            <Paragraph>
                “Hydroxyzine is not a standard akathisia treatment in the psychiatric literature. The usual agents are
                propranolol, benzodiazepines, mirtazapine, and anticholinergics (benztropine). Diphenhydramine is sometimes
                used, and hydroxyzine is pharmacologically similar (first-gen antihistamine with anticholinergic activity),
                so it’s plausible it helps the restlessness, but I haven’t seen trial evidence for it specifically. Its
                documented benefit here is the sleep side.” - in general I seem to be able to order simple pharmaceuticals
                like the Abilify itself over-the-counter but not something like benzos
            </Paragraph>
        </Message>
        <Message
            at="2026-08-29T09:21:01.359501Z"
        >
            <Origin>01a04cd2-f590-784b-aa90-02dafded5181</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Akinesia is the opposite: slowed or absent movement (the parkinsonian side effect). The restlessness you're
                describing - inner urge to move, can't sit still, worse in the evening - is <Word>
                    <Bold />
                    akathisia
                </Word>. Let me check what the Georgian pharmacies actually show for each drug.
            </Paragraph>
            <Action>Searched the web for “პროპრანოლოლი ფასი აფთიაქი რეცეპტი”</Action>
            <Action>Searched the web for “pharmadeals.ge პროპრანოლოლი ტაბლეტი”</Action>
            <Action>Searched the web for “ატარაქსი ჰიდროქსიზინი ტაბლეტი 25მგ ფასი”</Action>
            <Action>
                Fetched
                https://pharmadepot.ge/en/details/medication/neurology-and-psych/atarax-tab-25mg-30-tr-?product=121428
            </Action>
            <Action>Searched the web for “მირტაზაპინი ტაბლეტი ფასი pharmadepot”</Action>
            <Action>
                Searched the web for “Georgia pharmacies prescription-only drugs sold without prescription enforcement”
            </Action>
            <Paragraph>
                No - <Word>
                    <Bold />
                    akathisia
                </Word> is the restlessness (inner urge to move, pacing, can't sit still). <Word>
                    <Bold />
                    Akinesia
                </Word> is the opposite pole: slowed, reduced, or absent movement, the parkinsonian side effect.
                Aripiprazole is notorious for the former.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the Georgian pharmacy sites actually show
                </Word> (prices are catalog listings, not stock guarantees):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Hydroxyzine (Atarax 25 mg, Turkish import):
                    </Word> Pharmadepot lists it at 6.82 GEL for 30 tablets, in stock, with an Add-to-Cart button; the #25
                    pack is 6.52 GEL. No prescription flag visible on the page. The Georgian insert gives 50 mg/day split
                    into three doses for anxiety, with 25 mg at bedtime as the pruritus/sedation starting dose, and a 300
                    mg/day ceiling - notably higher than the EMA 100 mg cap I gave you earlier; that's the Turkish/local
                    label, not a safety endorsement.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Propranolol:
                    </Word> vidal.ge lists Aversi's own 40 mg tablets (#50, made in Georgia) and GPC's 10 mg (#20) and 40 mg
                    forms. Akathisia literature dose: 10–30 mg 2–3× daily, usually starting 10 mg. I didn't find an online
                    price with a cart button in this session.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mirtazapine:
                    </Word> Mirtazapine Normon 30 mg #30 at GPC for 19.46 GEL; Pharmadepot also carries 30 mg. Akathisia
                    studies used 15 mg at bedtime (the sedating low dose; higher doses are less sedating). meds.ge marks
                    mirtazapine as Rx.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Benztropine:
                    </Word> not found on Georgian sites in this session. The local anticholinergic equivalent is
                    trihexyphenidyl (Cyclodol/ციკლოდოლი) - not checked, and it's often controlled-adjacent, so don't assume.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Diphenhydramine (Dimedrol):
                    </Word> not checked this session.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On OTC legality vs. practice:
                </Word> your observation matches what I know of the system - Georgia's law puts antipsychotics,
                antidepressants, hydroxyzine and propranolol in the prescription-required group (Group II), with only
                narcotics/psychotropics (Group I: benzos, etc.) under real control. Enforcement of Group II is loose;
                counters often sell on request, and online carts don't gate. Not verified this session against matsne text -
                if you want I'll pull the current classification list.
            </Paragraph>
            <Paragraph>
                One thing to set beside the propranolol option since you're on it: it's the agent with the strongest
                akathisia trial base, but it's a beta-blocker, so pulse and blood pressure are the things to watch when
                starting.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-29T10:16:43.624691Z"
        >
            <Origin>01a04d06-cdbf-7070-9425-a96e645e7335</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What does propanolol make ypu feel? How does it compare to benztropine</Paragraph>
        </Message>
        <Message
            at="2026-08-29T10:16:56.297403Z"
        >
            <Origin>01a04d06-cdbf-7b94-901f-4dcbe88d31b2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Propranolol, subjectively:
                </Word> most people notice very little, which is the point. It blocks adrenaline's peripheral effects, so
                the physical layer of restlessness and anxiety - racing pulse, tremor, the jittery "motor running" feeling -
                drops out, and heart rate falls noticeably (a resting pulse of 75 might sit at 60). At 10–30 mg doses people
                typically report feeling calmer and physically stiller without feeling sedated or mentally altered. The
                common complaints are tiredness or heaviness, cold hands and feet, lightheadedness on standing, and vivid
                dreams or disturbed sleep in some. It doesn't help you sleep directly; it may help indirectly by removing
                the physical agitation. It also blunts the adrenaline response to exercise, so hard cardio feels harder.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Benztropine, subjectively:
                </Word> a different mechanism entirely - it blocks acetylcholine, which rebalances dopamine/acetylcholine
                signaling in the basal ganglia. That makes it good for the <Word>
                    <Emphasis />
                    parkinsonian
                </Word> side effects (stiffness, tremor, slowed movement, acute dystonia) but weak for akathisia, where
                trials show inconsistent benefit. Subjectively it's more noticeable and less pleasant: dry mouth, blurred
                near vision, constipation, urinary hesitancy, and at higher doses a foggy, memory-impaired feeling. Some
                people feel mildly euphoric or "loosened up," which is why it has minor misuse potential. Cognitive dulling
                is the main reason psychiatrists avoid it long-term.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Head-to-head for your case:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Akathisia specifically: propranolol has the better evidence and is the usual first choice; benztropine
                    is what's reached for if there's also stiffness or dystonia mixed in.
                </Line>
                <Line>Sleep: neither is a sleep aid; hydroxyzine or low-dose mirtazapine covers that side.</Line>
                <Line>
                    Side-effect profile: propranolol's are cardiovascular (pulse, BP, fatigue); benztropine's are
                    anticholinergic (dry mouth, fog, constipation). Hydroxyzine already carries some anticholinergic load,
                    so stacking benztropine on it doubles that.
                </Line>
                <Line>
                    Reversibility: both wear off within a day when stopped; propranolol at these low doses doesn't need
                    tapering.
                </Line>
            </Paragraph>
            <Paragraph>
                One caveat on propranolol you should know before deciding: it's contraindicated with asthma and can mask
                hypoglycaemia symptoms - relevant if the metformin question from earlier means diabetes is in the picture.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-29T10:22:19.188654Z"
        >
            <Origin>01a04d0b-f052-7bed-81d2-3690bf69eca8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What propanolol dose would you expect the help? I seem to have 10 and 40 mg options.</Paragraph>
        </Message>
        <Message
            at="2026-08-29T10:22:25.679449Z"
        >
            <Origin>01a04d0b-f052-76ac-ba15-bc9670f2f8fc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Start with the 10 mg tablets. The akathisia literature (Adler, Lipinski et al., and the reviews that
                followed) used 10–30 mg two to three times daily, with most responders in the 30–80 mg/day range total; 10
                mg three times a day is the standard starting point, and 20 mg three times daily is a typical second step if
                the first isn't enough after a few days. Effect on akathisia is usually apparent within a day or two, not
                weeks.
            </Paragraph>
            <Paragraph>
                The 40 mg tablet is really a hypertension/migraine size. Taking it whole as a first dose is more than most
                akathisia protocols start with and is where lightheadedness and marked bradycardia become likely. It's
                scored, so halves (20 mg) are usable once you know how you respond.
            </Paragraph>
            <Paragraph>Two practical points from the pharmacology:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Immediate-release propranolol lasts roughly 4–6 hours, which is why it's dosed multiple times daily. A
                    morning-only dose won't cover evening restlessness.
                </Line>
                <Line>
                    A resting pulse below about 50–55, or feeling faint on standing, is the signal you've gone past your
                    dose.
                </Line>
            </Paragraph>
            <Paragraph>
                Not verified: whether the GPC 10 mg pack is currently in stock at your local branch - the vidal.ge listing
                is a registry entry, not inventory.
            </Paragraph>
        </Message>
    </Chapter>
);
