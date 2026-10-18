import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 August 2026](2026-08-05)</Date>
        </Dated>
        <Title>[[ 5 August 2026 ]]</Title>
        <Message
            at="2026-08-05T13:59:08.383545Z"
        >
            <Origin>019fd239-787d-781f-9fe7-91f0266fc2ec</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Talk to me about semaglutide use in controlling weight gain from antipsychotics like quetiapine and
                olanzepine. Is this a primary use along with controlling weight in diabetics?. My use case is quetiapine use
                in the context of diabetes type ii and i family risk
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T13:59:56.385946Z"
        >
            <Origin>019fd239-787e-7056-b04e-68575beb3c51</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “semaglutide antipsychotic-induced weight gain randomized trial”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Short answer on labeling:
                </Word> no. Semaglutide's approved indications are T2D glycemic control (Ozempic/Rybelsus), chronic weight
                management (Wegovy), MACE reduction, and more recently CKD and HFpEF. Antipsychotic-induced weight gain
                (AIWG) is entirely off-label — but it's now the best-evidenced off-label use in psychiatry, and in your case
                the T2D indication makes the prescription on-label regardless of the motivating reason.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The evidence base, in order of strength:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The pivotal trial is Danish (Ganeshalingam et al.), published in JAMA Psychiatry in September 2025: 154
                    adults with schizophrenia, prediabetes, and overweight/obesity on second-generation antipsychotics,
                    randomized to 30 weeks of semaglutide titrated to 1 mg/week or placebo; the semaglutide arm lost roughly
                    9 kg more than placebo, with greater reductions in glucose and triglycerides and improved physical
                    quality of life. Notably that's at 1 mg — below the 2.4 mg obesity dose — so the ceiling is probably
                    higher.
                </Line>
                <Line>
                    Before that: liraglutide 1.8 mg in olanzapine/clozapine-treated patients (Larsen 2017, JAMA Psychiatry)
                    produced ~5.3 kg placebo-adjusted loss over 16 weeks and normalized glucose tolerance in ~64% vs 16%.
                    Exenatide trials were largely negative.
                </Line>
                <Line>
                    Observational: the CAMH inpatient chart review and case series, plus MOSA, an open-label Dutch cohort
                    comparing oral semaglutide (4.5 kg at 16 weeks) against metformin (2.9 kg) — small, non-randomized, but
                    directionally consistent. A 36-week clozapine RCT (COaST) at 2.0 mg is also running.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quetiapine specifics.
                </Word> Quetiapine sits in the intermediate tier for metabolic liability — below olanzapine and clozapine,
                above aripiprazole/lurasidone. The mechanism is mostly H1 antagonism (near-saturating even at 25–100 mg,
                which is why low-dose "for sleep" quetiapine still drives appetite), plus 5-HT2C antagonism via
                norquetiapine and M3 effects. Importantly, part of the glycemic hit from this class is <Word>
                    <Emphasis />
                    weight-independent
                </Word>: direct impairment of hepatic insulin sensitivity and beta-cell function, demonstrated acutely in
                healthy volunteers. GLP-1 agonism addresses both arms — hypothalamic AgRP/POMC signaling and satiety on one
                side, incretin-mediated insulin secretion and glucagon suppression on the other.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two things worth flagging for your combination:
                </Word> semaglutide slows gastric emptying substantially, which can alter Cmax/Tmax of oral psychotropics —
                relevant for IR quetiapine where sedation timing tracks peak levels, less so for XR. And the suicidality
                signal that circulated in 2023–24 was reviewed by both FDA and EMA, which found no causal association; the
                psychiatric-symptom data in the trials above were stable across arms.
            </Paragraph>
            <Paragraph>
                Metformin remains the cheaper first line (~3–5 kg, plus DPP-grade diabetes-progression benefit), but with
                established T2D and family history, semaglutide gives you the weight, glycemic, renal, and cardiovascular
                endpoints in one agent, and the two are frequently combined.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:01:57.734765Z"
        >
            <Origin>019fd23c-14b1-771c-a101-fe6f0fc952d6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah but I am lifetime anytipsychotic use case with elevated lipids in blood test and t2d risk from father
                and uncles on both sides. 400-600mg per night
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:02:26.238769Z"
        >
            <Origin>019fd23c-14b1-7d1d-8b95-a663925372f3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That reframes it: 400–600 mg is a full therapeutic dose, not the sedative-range exposure, and lifetime use
                means the metabolic insult is chronic and non-negotiable rather than something to wait out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The lipid piece is probably the most informative signal here.
                </Word> Quetiapine's dyslipidemia effect runs partly independent of weight. In vitro and rodent work shows
                quetiapine, like clozapine and olanzapine, activates SREBP-1c/SREBP-2 transcriptional programs in
                hepatocytes and glia, upregulating lipogenic and cholesterogenic gene expression directly. Clinically this
                shows up as triglyceride elevation appearing early and out of proportion to BMI change, often with low HDL —
                the classic mixed/atherogenic pattern rather than isolated LDL. Which pattern your panel shows matters for
                what tool you reach for: semaglutide drops triglycerides substantially (roughly 20–30% across SUSTAIN and
                STEP) but moves LDL only marginally (~3–5%). If it's TG-dominant, semaglutide hits the target; if
                LDL/ApoB-dominant, that's a statin question and semaglutide is adjunctive.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the diabetes-risk side
                </Word>, your setup — first-degree paternal history plus bilateral second-degree, chronic 5-HT2C/H1/M3
                blockade, and quetiapine's direct beta-cell and hepatic insulin-sensitivity effects — stacks genetic and
                pharmacologic mechanisms that converge on the same pathway. Two prevention datapoints worth knowing:
                metformin in DPP cut progression to T2D by ~31% over 2.8 years, and in SELECT semaglutide 2.4 mg reduced
                progression from prediabetes to diabetes by roughly 70%+ alongside a 20% MACE reduction. If you're not yet
                diabetic, prediabetes/HbA1c 5.7–6.4 is the threshold that gets you into on-label territory in most systems
                by way of the weight indication rather than the glycemic one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Because exposure is indefinite, so is the countermeasure.
                </Word> The STEP 1 extension found roughly two-thirds of lost weight regained within a year of stopping
                semaglutide, with cardiometabolic markers reverting toward baseline. Against a permanent drug-induced drive,
                discontinuation just re-exposes you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Things I'd want on a baseline panel before starting
                </Word>, given the specifics: fasting lipids with ApoB (not just calculated LDL, which is unreliable when
                TGs are high), HbA1c plus fasting insulin for HOMA-IR, ALT/AST and a hepatic steatosis assessment, and
                eGFR/UACR. The last one matters because if albuminuria is present, FLOW-trial renal benefit becomes an
                additional argument.
            </Paragraph>
            <Paragraph>
                One dose note relevant to your regimen: at 400–600 mg the sedative load is significant, and semaglutide's
                delayed gastric emptying can shift IR quetiapine's Cmax later and lower — occasionally reported as altered
                next-morning grogginess. XR formulation is less affected.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:05:46.326999Z"
        >
            <Origin>019fd23f-8d64-7b78-8a3c-5f4aa612e01c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Rybelsus is the oral prescribed in country of georgia? What is the mechanism of action?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:06:16.973425Z"
        >
            <Origin>019fd23f-8d65-70d4-a609-6eff945d8131</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Rybelsus semaglutide Georgia Tbilisi pharmacy availability”</Action>
            <Action>Searched the web for “სემაგლუტიდი Rybelsus ოზემპიკი აფთიაქი ფასი”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Availability in Georgia:
                </Word> yes, Rybelsus is on the market here, though it moves through the import/order channel rather than
                sitting on shelves at PSP or Aversi. Repharma lists Rybelsus 7 mg and 14 mg in 90-tablet packs as a
                prescription medication, and capsula.ge carries the same 7 mg and 14 mg strengths. Both also stock
                injectable Ozempic (0.25 / 0.5 / 1 mg pens, some sourced from Germany) and Mounjaro. The listings are marked
                "შეკვეთით" — supplied to order — so lead time is typically a week or two rather than same-day. Wegovy (the
                2.4 mg weight-management label) I don't see listed at all, which means the practical route to a
                weight-management dose here is off-label Ozempic titration.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mechanism — two separate things worth separating:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    The molecule.
                </Word> Semaglutide is a GLP-1 analog with three modifications from native GLP-1: Ala8→Aib substitution to
                block DPP-4 cleavage, Lys26 acylated with a C18 diacid via a γGlu-2×OEG spacer, and Arg34 to prevent
                acylation at the wrong site. The fatty-acid chain drives reversible albumin binding, which both shields it
                from renal clearance and provides a depot — hence the ~165-hour half-life. At the receptor (class B GPCR,
                Gs-coupled) it drives cAMP/PKA and Epac2 signaling. Peripherally that means glucose-dependent insulin
                secretion via closure of KATP channels and enhanced exocytosis, glucagon suppression from alpha cells, and
                slowed gastric emptying. Centrally — and this is where the weight effect lives — it acts on arcuate nucleus
                POMC/CART neurons (activation) and indirectly inhibits NPY/AgRP via GABAergic interneurons, plus area
                postrema and NTS signaling. Given your quetiapine question, the interesting overlap is that this
                hypothalamic circuitry is downstream of the same feeding pathways that H1 and 5-HT2C blockade dysregulate,
                so the antagonism is fairly direct rather than merely additive.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    The oral formulation.
                </Word> This is the part that's genuinely clever. Peptides don't survive the stomach. Rybelsus co-formulates
                semaglutide with ~300 mg of SNAC (sodium N-&#91;8-(2-hydroxybenzoyl)amino&#93;caprylate), which does two
                things at the tablet's immediate microenvironment in the gastric mucosa: it buffers local pH upward,
                protecting the peptide from pepsin, and it transiently and reversibly increases transcellular permeability
                of gastric epithelium. Absorption is essentially all gastric and highly localized around the eroding tablet.
            </Paragraph>
            <Paragraph>
                The practical cost of that mechanism: bioavailability is roughly 0.4–1%, and it's fragile. Rybelsus must be
                taken fasting, on waking, with no more than ~120 mL water, and nothing else for 30 minutes. Any food or
                additional fluid in the stomach dilutes the SNAC gradient and absorption drops sharply. Inter- and
                intra-patient variability is high. 14 mg oral gives systemic exposure roughly comparable to 0.5 mg
                injectable — so oral tops out where the injectable begins to be interesting for weight. Also relevant to
                your 400–600 mg nightly regimen: the dosing window is morning-fasted, which is at least well separated from
                evening quetiapine.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:08:50.087458Z"
        >
            <Origin>019fd242-5d76-7415-b5d3-bdcdd0a21eb6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Compare the weight loss effect to that of dextroamphetine. Is there overlap? Ypu are giving a very low level
                mechanism
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:09:23.140544Z"
        >
            <Origin>019fd242-5d77-78b9-b553-de4e9ca9a406</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Circuit level, then:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Magnitudes are not comparable in the way the acute experience suggests.
                </Word> Dextroamphetamine's anorectic effect is large but transient — trials from the era when it was used
                for obesity showed brisk early loss (~0.5 lb/week) with near-complete tachyphylaxis to appetite suppression
                within 4–12 weeks, while cardiovascular and arousal effects persisted. Lisdexamfetamine in binge-eating
                disorder produces roughly 5–6% body weight loss over 11–12 weeks, and that's the most favorable modern
                dataset. Semaglutide 2.4 mg gives ~15% at 68 weeks with the curve still descending to ~60 weeks and no
                meaningful tolerance to the satiety effect. That asymmetry — transient vs durable suppression — is the
                single most important difference, and it's a receptor-trafficking and circuit-adaptation story, not a
                potency story.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where they overlap.
                </Word> Both converge on the arcuate nucleus. The clearest evidence is nomenclatural: CART is <Word>
                    <Emphasis />
                    cocaine- and amphetamine-regulated transcript
                </Word>, named because amphetamine induces it, and CART is co-expressed with POMC in exactly the arcuate
                neurons semaglutide activates. Both endpoints reduce orexigenic AgRP/NPY tone. Second overlap: mesolimbic
                reward. GLP-1 receptors are expressed in VTA and nucleus accumbens, and GLP-1 agonism reduces incentive
                salience of food — that's the same axis amphetamine hits from the dopaminergic side, and it's why
                semaglutide has signals in alcohol and nicotine use. So "reduced wanting" is a shared phenomenology arrived
                at from opposite directions: amphetamine by flooding the reward circuit until food is comparatively
                uninteresting, semaglutide by attenuating the circuit's response to food cues specifically.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where they diverge, and it matters for your profile.
                </Word> Amphetamine works substantially through energy <Word>
                    <Emphasis />
                    expenditure
                </Word> — sympathomimetic thermogenesis, increased spontaneous activity — plus intake suppression.
                Semaglutide is essentially pure intake reduction; resting expenditure falls with lost mass as usual. And
                metabolically they point opposite directions: catecholamine drive raises hepatic glucose output via
                glycogenolysis and gluconeogenesis, increases lipolysis and FFA flux, and does nothing for beta-cell
                function or lipids. For someone with paternal and bilateral avuncular T2D history, quetiapine-driven SREBP
                activation, and elevated lipids on panel, a chronic sympathomimetic is working against three of your four
                problems even while it moves the scale.
            </Paragraph>
            <Paragraph>
                There's also the direct pharmacodynamic tension: 400–600 mg quetiapine carries meaningful D2 occupancy plus
                heavy H1 load, and stimulant plus that combination tends to produce a blunted, unpleasant middle rather than
                either drug's intended effect.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:12:43.939092Z"
        >
            <Origin>019fd245-e576-7371-86a1-42495330bca2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So senaglutide has no stimulant properties?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:13:01.027330Z"
        >
            <Origin>019fd245-e577-7367-92f1-2ab2c5309790</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Correct — none, in the pharmacological sense. No monoamine transporter affinity, no releasing activity, no
                adrenergic or dopaminergic receptor binding. It's a 4,113-dalton acylated peptide; it doesn't have the
                physicochemistry to interact with a DAT or NET binding pocket at all. And its CNS penetration is limited and
                indirect: too large to cross an intact blood-brain barrier, so it acts on circumventricular organs where the
                barrier is fenestrated — area postrema, subfornical organ, median eminence adjacent to the arcuate — plus
                vagal afferents. Signal propagates inward from there rather than the drug distributing through cortex.
            </Paragraph>
            <Paragraph>
                The subjective profile reflects that. Nothing like arousal, alertness, or drive. If anything the reported
                experience is flatter — some fatigue early in titration, and "food noise" reduction that people describe as
                an absence rather than a stimulation. Heart rate does rise modestly (~2–4 bpm across the SUSTAIN/STEP
                programs), but that's mediated through sinoatrial GLP-1 receptors and autonomic effects, not catecholamine
                release — and it coexists with blood pressure reduction, which is the opposite direction from any
                sympathomimetic.
            </Paragraph>
            <Paragraph>
                The one place the distinction gets blurred is reward. Semaglutide does modulate mesolimbic circuitry —
                that's real, and it's why the alcohol- and nicotine-craving signals exist — but modulating a dopaminergic
                circuit's response to a cue is a different operation from raising synaptic dopamine. Amphetamine raises
                tone; semaglutide narrows what the tone responds to.
            </Paragraph>
            <Paragraph>
                Two practical implications for you: there's no stimulant-side interaction with quetiapine to reason about —
                the interactions that matter are the gastric-emptying/absorption one and the additive fatigue during
                titration. And nothing here will offset quetiapine's sedation at 400–600 mg. If daytime blunting is part of
                what you're weighing, semaglutide isn't a lever on it.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:13:56.940334Z"
        >
            <Origin>019fd247-0984-70e1-8c88-36c931bf776d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>If it doesn’t cross bbb then how does it affect cart</Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:14:15.893616Z"
        >
            <Origin>019fd247-0985-7392-a1a4-9c4192e265c3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The premise "doesn't cross" is doing too much work — I stated it too flatly. The accurate version is that it
                doesn't distribute broadly through parenchyma, but the arcuate is one of the places it reaches directly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the arcuate is a special case.
                </Word> It sits immediately dorsal to the median eminence, a circumventricular organ with fenestrated
                capillaries. The barrier there is not endothelial tight junctions but tanycytes — specialized ependymal glia
                lining the third ventricle whose end-feet form the actual diffusion boundary, and which are permissive and
                dynamically regulated. Ventromedial arcuate neurons, including a subset of POMC/CART cells, extend processes
                into this permeable zone or sit close enough to sample it. So a large peptide can engage arcuate GLP-1
                receptors without ever crossing an intact BBB. The same applies to the area postrema and subfornical organ.
            </Paragraph>
            <Paragraph>
                Gabery et al. (JCI Insight, 2020) mapped this directly with fluorescently labeled semaglutide in rodents:
                uptake concentrated in circumventricular structures — area postrema, subfornical organ, and the
                arcuate/median eminence region — with essentially no broad parenchymal signal. Regions like the
                paraventricular nucleus and parabrachial nucleus showed neuronal activation without drug present, i.e.
                recruited transsynaptically rather than pharmacologically.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So there are three access routes, not one:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Direct, at fenestrated sites — arcuate POMC/CART is here.</Line>
                <Line>Vagal afferents → nodose ganglion → NTS, entirely peripheral receptor engagement.</Line>
                <Line>Downstream projection targets activated by (1) and (2), with no drug exposure.</Line>
            </Paragraph>
            <Paragraph>
                The AgRP/NPY suppression I mentioned earlier is category 3-adjacent — largely indirect, via GABAergic
                inhibition from activated POMC-adjacent circuitry and local interneurons, rather than direct receptor action
                on AgRP neurons.
            </Paragraph>
            <Paragraph>
                Worth adding: there's a separate endogenous central GLP-1 system — preproglucagon neurons in the NTS
                projecting to hypothalamus and limbic regions — which is anatomically distinct from what peripheral
                semaglutide accesses. Some of the reward-circuit effects are likely propagated through that network rather
                than by the drug reaching VTA directly.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:16:51.406874Z"
        >
            <Origin>019fd249-b0fe-77b6-9942-db58dd44369d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So there’s no increase energy / focus associated with semaglutide? How was it discovered</Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:17:22.243809Z"
        >
            <Origin>019fd249-b0ff-7e52-b18f-14e99b5229a1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “EVOKE semaglutide Alzheimer's trial results”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    On energy and focus: no, and if anything the vector points slightly negative.
                </Word> Fatigue is a recognized adverse event in the STEP program, running around 10–11% versus placebo,
                concentrated during titration and partly attributable to the caloric deficit itself. There is no arousal
                signal, no procognitive signal, no measured attention effect.
            </Paragraph>
            <Paragraph>
                The largest test of anything cognition-adjacent was the EVOKE program, and it was negative. Oral semaglutide
                14 mg daily for up to 156 weeks in 3,808 biomarker-confirmed early Alzheimer's patients failed to slow
                clinical progression across global, cognitive, and functional measures, despite producing significant CSF
                reductions of up to 10% in p-tau181, p-tau217, YKL-40, total tau, and neurogranin, plus reduced plasma
                hs-CRP. The pooled event analysis for progression to dementia gave a hazard ratio of 0.96 (95% CI
                0.86–1.06). That's about as clean a null as the field produces — real biomarker movement, no cognitive
                translation. Some commentary reads it as evidence that reducing peripheral inflammation isn't sufficient to
                alter central disease course, which is consistent with the access constraints we were just discussing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Discovery — three separate threads that converged:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    The incretin gap.
                </Word> Perley and Kipnis, 1967: oral glucose produces substantially more insulin release than an
                intravenous load matched for plasma glucose. That difference — the incretin effect, roughly 50–70% of
                postprandial insulin — implied an unidentified gut-derived signal.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Finding GLP-1.
                </Word> Cloning of the proglucagon gene in the early 1980s (Habener's group at Mass General; Bell at Novo)
                revealed the precursor encoded additional glucagon-like sequences. Svetlana Mojsov synthesized and
                identified the truly bioactive fragment — GLP-1(7-37), not the full-length peptide, which is inert. Her
                contribution was underrecognized for decades and became a patent dispute. Native GLP-1 turned out to be
                therapeutically useless: DPP-4 degrades it in 1–2 minutes.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    The Gila monster.
                </Word> John Eng at the Bronx VA, working on the observation that venomous lizards have unusually large
                pancreases, isolated exendin-4 from <Word>
                    <Emphasis />
                    Heloderma suspectum
                </Word> venom in 1992. It's ~53% homologous to human GLP-1, a potent agonist, and — critically — has a
                glycine at position 2 that DPP-4 cannot cleave. That became exenatide (Byetta, 2005), the first GLP-1 drug.
            </Paragraph>
            <Paragraph>
                Semaglutide is <Word>
                    <Emphasis />
                    not
                </Word> in the venom lineage. Novo Nordisk took the alternative route: engineer the human peptide for
                protease resistance and albumin binding. Lotte Bjerre Knudsen's group produced liraglutide (2010,
                once-daily, C16 acyl chain), then extended the fatty-acid strategy — C18 diacid, longer spacer, Aib8
                substitution — to reach a 165-hour half-life. Semaglutide, 2017.
            </Paragraph>
            <Paragraph>
                The weight effect was a side finding. The entire program was aimed at glycemia; consistent weight loss in
                the diabetes trials was noticed, then pursued deliberately, which is how Saxenda and later Wegovy happened.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:20:01.128871Z"
        >
            <Origin>019fd24c-997c-716f-bad4-baf8425ed202</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So its a pretty special drug if it can produce a similar effect to amphetamines on hunger yet is not
                stimulating. It interacts with reward circuitry very specifically
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:20:20.528100Z"
        >
            <Origin>019fd24c-997d-7560-9ee4-33e4d3fad2cd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That framing captures the real structural difference: semaglutide is a hormone mimetic rather than a
                xenobiotic. Amphetamine's anorexia is a byproduct — you elevate catecholamines globally and appetite
                suppression falls out alongside arousal, pressor effects, and reinforcement, none of which can be separated
                because they share the same mechanism. Semaglutide is amplifying a signal the body already uses for exactly
                this purpose, so the effect profile inherits the endogenous system's anatomy. The dissociation isn't clever
                engineering; it's what you get when the target is a satiety pathway rather than a neuromodulator pool.
            </Paragraph>
            <Paragraph>
                The reward-circuit specificity has a nice experimental signature: GLP-1 agonism reduces the <Word>
                    <Emphasis />
                    incentive salience
                </Word> of food cues without flattening reward capacity generally. Rodent work shows reduced
                progressive-ratio breakpoint for palatable food and diminished cue-induced reinstatement, without the
                anhedonia you'd see from D2 blockade. Patients describe "food noise" quieting rather than pleasure
                disappearing — food still tastes good, it just stops occupying working memory. That's a fairly unusual
                pharmacological operation.
            </Paragraph>
            <Paragraph>
                Two things that complicate the picture, worth having: some of the intake suppression is genuinely aversive
                rather than satiating — area postrema GLP-1R mediates nausea and conditioned taste aversion, while
                hypothalamic and vagal signaling mediate the satiety proper. Separating those is the explicit goal of the
                next generation: cagrilintide (amylin analog) combined with semaglutide as CagriSema, and GDF15/GFRAL work,
                both aiming for satiety without the emetic arm. And the reward effects aren't fully food-specific — the
                alcohol- and nicotine-craving signals suggest the circuit modulation is broader than the metabolic
                indication, which is either a feature or an unexamined liability depending on what turns up.
            </Paragraph>
            <Paragraph>
                The comparison class where this all sits is instructive: leptin was the obvious hormone mimetic and failed
                on resistance; amylin worked but weakly as pramlintide; PYY couldn't be dosed tolerably. GLP-1 is the one
                where the pharmacokinetic engineering and the physiology happened to cooperate.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:22:50.697734Z"
        >
            <Origin>019fd24f-298e-7f33-b301-04182d413079</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In georgia, I can’t buy these in a pharmacy? Is it like my quetiapine where I don’t need a prescription or
                might not? My psychiatrust doesn’t need to write prescriptions
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:23:26.099831Z"
        >
            <Origin>019fd24f-298f-771a-97ec-dc26a2824435</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia pharmacy prescription requirement enforcement 2026 antibiotics
                prescription-only rules”
            </Action>
            <Action>
                Searched the web for “საქართველო რეცეპტით გაცემა წესები აფთიაქი 2025 რეცეპტის გარეშე მედიკამენტები”
            </Action>
            <Paragraph>Same category as your quetiapine, structurally — and that's the useful comparison.</Paragraph>
            <Paragraph>
                Georgia's system sorts drugs into groups. The strict tier is სპეციალური კონტროლი — special control: opioids,
                benzodiazepines, stimulants, tramadol, pregabalin. Those require the N3 form, go through an electronic
                registry, and enforcement is real. The regulations explicitly restrict retail dispensing of controlled
                substances and route them through licensed channels only.
            </Paragraph>
            <Paragraph>
                Everything else prescription-only sits in Group II — the ordinary რეცეპტული tier. Quetiapine is here.
                Semaglutide is here. Repharma lists Rybelsus under რეცეპტული მედიკამენტები, which is the formal designation,
                not a description of what happens at the counter. The 2014 reform that created the current framework brought
                roughly 6,200 Group II products under a prescription requirement, but Group II compliance has been
                inconsistent since — which you've already experienced with quetiapine at 400–600 mg going out without a
                psychiatrist writing anything.
            </Paragraph>
            <Paragraph>
                I'd expect the same for semaglutide in practice, with two caveats I can't verify from here: high-cost
                imported drugs sometimes get handled more carefully because pharmacies are protecting margin and inventory
                rather than following regulation, and the online importers (capsula.ge, repharma.ge) may ask for
                documentation as part of the order process precisely because they're a paper trail in a way a neighborhood
                PSP counter isn't.
            </Paragraph>
            <Paragraph>
                Practical route: try a physical branch first — PSP or Aversi central Tbilisi locations, or GPC, which tend
                to carry or can order Ozempic. Rybelsus is the harder one to find on a shelf; the 90-tablet packs listed
                online suggest it moves as a special order rather than a stocked item. If you're going the online-order
                route anyway, a prescription is trivially obtainable from any Georgian endocrinologist given documented T2D
                risk and elevated lipids, and it also gets you a proper baseline panel, which you'd want regardless.
            </Paragraph>
            <Paragraph>
                One thing worth confirming when you call: whether they have the 0.25 mg Ozempic starter pen in stock, not
                just 0.5 and 1 mg. Titration from 0.25 matters a lot for GI tolerability, and being forced to start at 0.5
                because that's what's available is a common reason people abandon it in week two.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:25:21.284196Z"
        >
            <Origin>019fd251-74c6-7cfb-b888-5e62687c25c1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I would love to not need a shot. Is that possible?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T14:25:47.419613Z"
        >
            <Origin>019fd251-74c9-7c9e-8a57-2874ac3bf1df</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “oral semaglutide 25 mg weight loss approval orforglipron 2026”</Action>
            <Paragraph>Yes — and the landscape changed substantially in the last several months, in your favor.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Three oral options now exist:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Rybelsus 7/14 mg
                </Word> — already available in Tbilisi, as we found. Designed for glycemia; weight effect is modest (roughly
                equivalent to 0.5 mg injectable). The SNAC mechanism means the fasting-window discipline is non-negotiable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Oral Wegovy 25 mg
                </Word> — FDA-approved December 22, 2025, launched in the US in January 2026. Same molecule, same SNAC
                delivery, much higher dose. OASIS 4 showed 16.6% mean weight loss at 64 weeks with full adherence, 13.6% in
                the treatment-policy analysis, versus ~2.4% placebo; one-third of adherent participants lost 20% or more.
                That's essentially injectable-equivalent efficacy. Discontinuation for GI effects was around 5%. Same
                morning-fasted constraint.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Orforglipron (Foundayo)
                </Word> — FDA-approved April 1, 2026. This is a small-molecule, non-peptide GLP-1 agonist — a genuine
                mechanistic departure from semaglutide — and it can be taken any time of day with no food or water
                restrictions, because it doesn't need SNAC-mediated gastric absorption at all. Six dose strengths. This is
                the one that removes both the needle and the ritual.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two things specific to you.
                </Word> First, availability lag: Georgia's importers stock what Europe stocks, so Rybelsus is your near-term
                option and the other two will take time to appear at capsula.ge or repharma.ge. Given you already have
                T2D-range indications, 14 mg Rybelsus is a legitimate starting point and you can escalate later.
            </Paragraph>
            <Paragraph>
                Second — and worth raising with whoever prescribes — orforglipron is a small molecule with hepatic
                metabolism, unlike the peptides, which are cleared by proteolysis and have essentially no CYP interactions.
                Quetiapine at 400–600 mg is heavily CYP3A4-dependent. I don't have reliable data on whether that creates a
                real interaction, and I'd rather flag the question than guess. The peptide orals carry no such concern.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:03:04.640277Z"
        >
            <Origin>019fd2e1-dc05-7d85-a5e7-9dd01fd8a336</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you find pharmacies near saburtalo with rybelsus</Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:03:35.591833Z"
        >
            <Origin>019fd2e1-dc0b-7c6f-a7f5-10b96243c834</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched places for “”</Action>
            <Paragraph>
                I can locate the branches but not their stock — Rybelsus moves as a special order here, so what actually
                matters is the chain hotline rather than any particular counter. Each chain has one central number that can
                check inventory across all branches and place an order.
            </Paragraph>
            <Paragraph>
                Call these first: <Word>
                    <Bold />
                    PSP +995 32 240 20 20
                </Word>, <Word>
                    <Bold />
                    GPC +995 32 271 07 07
                </Word>, <Word>
                    <Bold />
                    Pharmadepot +995 32 240 00 04
                </Word>, <Word>
                    <Bold />
                    Aversi +995 32 290 08 00
                </Word>. Ask for "სემაგლუტიდი — Rybelsus 7mg ან 14mg" and whether it's in stock or needs ordering
                (შეკვეთით), plus lead time. Aversi and GPC tend to be the strongest on imported branded endocrine products;
                PSP has the widest branch network for pickup.
            </Paragraph>
            <Action>Used places map display v0</Action>
            <Paragraph>
                The Vazha-Pshavela cluster is dense — PSP 83, GPC 71, Aversi 19, and Pharmadepot 83/11 are all within a few
                hundred meters of each other, so one walk covers four chains if calling ahead doesn't settle it.
            </Paragraph>
            <Paragraph>
                Two things worth doing before the trip: check capsula.ge and repharma.ge for current listed price, since
                that gives you a benchmark to judge whatever the counter quotes, and ask specifically whether they can order
                14 mg rather than only 7 mg — the 7 mg is the more commonly stocked strength and stepping up later means a
                second order cycle.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:05:54.494004Z"
        >
            <Origin>019fd2e4-6e26-70ad-9199-6998eba321c2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                For the oral route, how often do I take the pills and what is the eating and diet schedule around dozing
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:06:07.246218Z"
        >
            <Origin>019fd2e4-6e31-78a6-aa24-4d4d6c5c9753</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Frequency: once daily, every day.
                </Word> This is the one real trade-off against the injectable — semaglutide's 165-hour half-life means the
                shot is weekly, but oral bioavailability is so low and so variable that daily dosing is needed to hold
                steady-state exposure. Miss a dose and you skip it entirely; you don't double up.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The dosing window, which is non-negotiable:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>First thing on waking, before anything else — no coffee, no water beforehand.</Line>
                <Line>
                    One tablet with no more than ~120 mL (4 oz) of plain water. Not more, not less. More water dilutes the
                    SNAC gradient at the gastric mucosa and absorption drops; too little and the tablet doesn't disperse
                    properly.
                </Line>
                <Line>
                    Wait 30 minutes. Nothing at all in that window — no food, no other liquids, and no other oral
                    medications.
                </Line>
                <Line>After 30 minutes, eat and drink normally.</Line>
            </Paragraph>
            <Paragraph>
                The 30 minutes is a genuine minimum, not a rounded suggestion; longer is somewhat better for absorption but
                30 is where the label lands. Swallow whole — don't split, crush, or chew, since the tablet is engineered to
                erode in a controlled way that keeps the semaglutide and SNAC co-localized.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Titration.
                </Word> Standard schedule is 3 mg daily for 4 weeks (a tolerability dose, not therapeutic), then 7 mg for 4
                weeks, then 14 mg. Don't compress it — the GI adverse effects that make people quit are almost entirely a
                titration-rate problem. If nausea is significant at a step, hold there an extra 2–4 weeks rather than
                pushing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Diet around it.
                </Word> No restriction on <Word>
                    <Emphasis />
                    what
                </Word> you eat once the window closes — the constraint is purely about the absorption window. But three
                practical patterns matter once you're at dose: large meals become uncomfortable rather than merely
                unnecessary, because delayed gastric emptying means volume tolerance drops sharply. Smaller, more frequent
                meals work better. High-fat meals are the worst offenders for nausea. And protein intake becomes something
                to be deliberate about, since a substantial fraction of GLP-1 weight loss is lean mass — roughly 1.2–1.6
                g/kg is the range usually cited for preserving it during caloric deficit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing specific to your regimen:
                </Word> the 30-minute no-other-medications rule includes anything else you take orally. Since your
                quetiapine is nightly at 400–600 mg, the two are naturally separated — morning dose, evening dose, no
                conflict. Anything you currently take with breakfast would need to shift 30 minutes later.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:22:02.132688Z"
        >
            <Origin>019fd2f3-342d-7276-8856-8e87bc91e811</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Do those sites allow us to send a courier</Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:22:24.701394Z"
        >
            <Origin>019fd2f3-3434-71d0-a5f4-13f9ee3726b3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://capsula.ge</Action>
            <Action>Searched the web for “capsula.ge მიტანა კურიერი აფთიაქი ონლაინ შეკვეთა”</Action>
            <Paragraph>Yes, all three routes work — and one of them has a wrinkle worth knowing.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    capsula.ge is currently offline.
                </Word> The site itself says the online pharmacy is down for technical reasons while they fix it, and
                directs orders to +995 593 989 592 on WhatsApp or Viber, or via Facebook Messenger. That's arguably better
                than the web form for your purpose — you can ask directly about Rybelsus 14 mg availability, price, and lead
                time in one message rather than discovering at checkout that it's order-only.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Aversi runs its own courier.
                </Word> Phone orders Monday–Friday, 09:00–16:00, with same-day delivery, at a flat 4 GEL delivery charge.
                Since Aversi is also a major importer rather than just a retailer, this is probably your strongest single
                call — they can check their own import pipeline rather than querying a distributor.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    PSP and GPC
                </Word> both deliver as well, and PSP is on Glovo and Wolt for anything they hold in branch stock — though a
                special-order item like Rybelsus won't appear in the Glovo catalogue, so that's a phone-order route too.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you need a third-party courier
                </Word> for something a pharmacy won't ship, deliverers.ge covers Tbilisi: they'll collect from an address,
                orders placed before 14:00 deliver same day Monday through Saturday, and they accept cash to the courier,
                bank transfer, or online payment.
            </Paragraph>
            <Paragraph>
                One practical note: Rybelsus tablets are room-temperature stable, so courier handling is simple. If you end
                up going the injectable route instead, Ozempic needs cold chain until first use, which is where the Aversi
                courier's handling matters more and where a generic parcel service becomes a bad idea.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:27:19.466035Z"
        >
            <Origin>019fd2f8-15dd-780f-925d-3a0be990a1d5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is the mechanism of action requires food in ypur stomach to work?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:27:30.387586Z"
        >
            <Origin>019fd2f8-15e0-7c21-8859-3b73d65d6a62</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Opposite, for absorption — and the confusion is worth separating cleanly, because two different things are
                going on.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Absorption requires an empty stomach.
                </Word> The SNAC mechanism works by creating a concentrated local microenvironment at the gastric mucosa
                where the tablet is eroding: buffering pH upward to protect the peptide and transiently opening
                transcellular permeability. Food or extra fluid dilutes that gradient and disperses the tablet away from the
                mucosal surface. This is why the fasting window exists, and it's a delivery-engineering constraint, not a
                pharmacological one — the injectable has no such requirement.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The drug's action, once absorbed, is expressed when food arrives.
                </Word> Steady-state semaglutide sits in circulation continuously with a 165-hour half-life, so it isn't
                "activated" by meals. But two of its three main effects only have anything to do at mealtime: delayed
                gastric emptying is a response to a meal being present, and the insulinotropic effect is glucose-dependent —
                GLP-1 receptor signaling potentiates insulin secretion only when beta-cell glucose is already elevated. That
                glucose-dependence is precisely why semaglutide alone carries very little hypoglycemia risk, unlike
                sulfonylureas. No meal, no glucose rise, no insulin release.
            </Paragraph>
            <Paragraph>
                The third effect — central satiety signaling at the arcuate and area postrema — runs continuously, which is
                why the appetite suppression is a background state rather than a per-meal event.
            </Paragraph>
            <Paragraph>
                So the practical sequencing for you: dose fasted on waking, wait 30 minutes for absorption, then the drug is
                in your system doing its work against every meal that day regardless of timing. You don't need to eat at any
                particular point after the window closes — breakfast, or not, as you prefer.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:39:11.752505Z"
        >
            <Origin>019fd302-f35f-7413-b01d-2e6cf792624d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay but three effects? You said delayed gastric emptying. Obvs that doesn’t work unless food is there. And
                then the cart interaction in arcuate is round the clock
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:39:20.296747Z"
        >
            <Origin>019fd302-f365-7e7d-b91c-c0132b8da4c7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — you've got two, and the third one I listed (glucose-dependent insulin secretion) is the glycemic
                effect, not a weight effect. That was me carrying the T2D indication into a list that was answering an
                appetite question. It belongs in the diabetes column: it does nothing for intake, and it's the reason
                semaglutide works on your HbA1c independent of anything happening at the arcuate.
            </Paragraph>
            <Paragraph>So for the weight side specifically, your two:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gastric emptying
                </Word> — meal-contingent, exactly as you say. Also worth knowing it attenuates over time. Tachyphylaxis to
                the emptying delay develops over weeks to months, faster than the weight loss plateaus, which means the
                durable weight effect can't be primarily mechanical. It's mostly a tolerability variable — the early nausea
                and the volume intolerance — rather than the engine.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Central satiety signaling
                </Word> — round the clock, and this is where the durable effect lives. Reduced meal initiation, earlier
                satiation, and the cue-salience reduction we discussed.
            </Paragraph>
            <Paragraph>
                There's a defensible case for a third that isn't glycemic: the area postrema aversive arm is anatomically
                and functionally separable from hypothalamic satiety — different nucleus, different phenomenology, and it's
                the specific thing the amylin combinations are trying to design out. Whether you count that as its own
                mechanism or as a side effect of the same central action is partly a taxonomy question, but the dissociation
                is real enough that drug development is built on it.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:41:18.673875Z"
        >
            <Origin>019fd304-e4cc-7648-b293-a63fdc1d822b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is the warmup for this? Its not 14 mg immediately? What do doctors usually prescribe?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:41:29.549932Z"
        >
            <Origin>019fd304-e4cf-7888-bf12-dd2a1eb0b47c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Label schedule is three steps, four weeks each:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        3 mg daily × 4 weeks
                    </Word> — purely a tolerability dose. It has essentially no therapeutic effect; its only job is to let
                    your gut adapt before exposure rises.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        7 mg daily × 4 weeks
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        14 mg daily
                    </Word> — maintenance. This is the ceiling for Rybelsus.
                </Line>
            </Paragraph>
            <Paragraph>
                So eight weeks of ramp before you reach full dose. Nobody starts at 14 — doing so produces nausea and
                vomiting severe enough that most people quit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What doctors actually do
                </Word> diverges from the label in one direction: slower, not faster. Extending a step to 6–8 weeks when
                someone is symptomatic is routine, and endocrinologists frequently hold at 7 mg indefinitely if glycemic
                control is adequate there — the marginal HbA1c gain from 7 to 14 is real but modest, while GI burden rises.
                The other common variation is starting at 3 mg every other day for the first week or two in people with
                known GI sensitivity, which isn't in the label but is widely done.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Relevant to your supply problem:
                </Word> the Georgian listings we found showed 7 mg and 14 mg only — no 3 mg. If 3 mg genuinely isn't
                importable here, the workarounds are either starting at 7 mg with a slower ramp and accepting more early
                nausea, or asking whether they can source the 3 mg specifically. The tablets can't be split — the SNAC
                co-formulation depends on the intact tablet eroding as a unit, so halving a 7 mg to approximate 3.5 mg
                doesn't give you a predictable dose. Worth asking about explicitly when you call, since it's the difference
                between a comfortable eight-week ramp and a rough two weeks.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:42:31.777107Z"
        >
            <Origin>019fd306-034f-7a5e-a37a-3f4f15848937</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you split the 14 mg, because 7mg because the wrbsite only sells 90 tabs</Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:42:44.232659Z"
        >
            <Origin>019fd306-0352-70d3-8906-f5678224c42d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>No — and the reason is mechanistic rather than a formulation-convenience caveat.</Paragraph>
            <Paragraph>
                SNAC works by creating a concentrated absorption microenvironment as the tablet erodes at one spot on the
                gastric mucosa. The semaglutide and the ~300 mg of SNAC have to release together, in that localized zone, in
                the right ratio. A split tablet erodes with different surface geometry, disperses the SNAC differently, and
                the semaglutide-to-SNAC ratio at the mucosal surface is no longer what the formulation was designed around.
                You don't get half the exposure — you get unpredictable exposure, plausibly less than half. The label
                prohibits splitting, crushing, or chewing for exactly this reason. Rybelsus is also uncoated and
                hygroscopic, so a cut half sitting in a pill box degrades.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Buy the 7 mg 90-pack, not the 14.
                </Word> That's three months at one daily, which is more than enough — you need four weeks at 7 mg by label,
                and there's a decent chance you'll want to hold there longer anyway. Plenty of people stay at 7 mg
                permanently if HbA1c and weight are moving; the 7→14 step buys real but incremental benefit at meaningful GI
                cost. Buying the 14 mg pack first means either splitting (impossible) or starting at your maintenance dose
                (miserable).
            </Paragraph>
            <Paragraph>
                The unresolved question is still the 3 mg starter, which the Georgian listings didn't show. Ask about it on
                the same call. If they can't source it, starting directly at 7 mg is done in practice — expect a rougher
                first two weeks, take it with the smallest tolerable breakfast afterward, and be prepared to skip a day if
                nausea is significant rather than pushing through.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:43:19.867470Z"
        >
            <Origin>019fd306-b7b4-7b3e-a728-2576eb5de9c2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Its too expensive to buy that much extra</Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:43:37.445653Z"
        >
            <Origin>019fd306-b7ba-7391-9dec-47c0ca1f7633</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The 90-tablet pack isn't extra — it's three months of daily therapy. If you stay at 7 mg, which many people
                do indefinitely, that pack <Word>
                    <Emphasis />
                    is
                </Word> the treatment, not a surplus you're stockpiling to reach a higher dose. The only genuinely wasteful
                scenario is buying 7 mg and 14 mg packs in sequence, and you can defer that decision entirely until you see
                whether 7 mg is doing enough.
            </Paragraph>
            <Paragraph>Three things worth asking on the same call:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Smaller packs.
                </Word> Rybelsus is manufactured in 30-tablet (one month) packs as the standard EU presentation. The
                90-count listings we saw are what those particular importers happen to list, not the only format that
                exists. Ask specifically for 30 ტაბლეტი — if they can source it, your entry cost drops to a third.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Price the injectable side by side.
                </Word> This is the uncomfortable one given you'd rather avoid needles, but Ozempic is usually meaningfully
                cheaper per month of therapy than oral semaglutide, because the oral form needs roughly 70× the weekly
                milligrams to compensate for ~1% bioavailability, and you're paying for that peptide mass. One pen covers
                four weeks. If the gap is large, it's worth knowing the actual number before ruling it out — the 0.25 mg
                starter pen also gives you a proper titration ramp that the missing 3 mg oral dose doesn't.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ask whether any generic semaglutide is registered here.
                </Word> Georgia's registration pathway is more permissive than the EU's and often carries products from
                markets where semaglutide patents have lapsed. If something is available, the price difference is typically
                severalfold.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:44:04.140159Z"
        >
            <Origin>019fd307-6a3b-7bb9-a35a-665879a7f39a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you take two 7 mg?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:44:10.948699Z"
        >
            <Origin>019fd307-6a3e-7d50-a25f-c4028e78041a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Not as a substitute for 14 mg. This is one of the specific things the Rybelsus label warns against — two 7
                mg tablets do not give you 14 mg of exposure.
            </Paragraph>
            <Paragraph>
                The reason is the same SNAC geometry issue as splitting, running the other direction. Each tablet carries a
                fixed ~300 mg of SNAC that has to establish a saturating microenvironment at one localized patch of gastric
                mucosa. Two tablets don't sit in the same spot and don't produce a doubled absorption zone — they compete
                for the same limited mucosal surface and the same gastric fluid volume, which you're also capped at 120 mL
                of. The result is sub-additive and highly variable. Novo studied this; it's why the 14 mg is manufactured as
                its own tablet rather than dosed as 2×7.
            </Paragraph>
            <Paragraph>
                The practical implication for your cost problem is actually favorable, though: it means there's no scenario
                where buying the 7 mg pack locks you out of anything, because you were never going to reach 14 mg by
                doubling regardless of what you bought. It just makes the 7 mg pack the correct purchase on its own terms.
            </Paragraph>
            <Paragraph>
                If you do eventually want 14 mg, it's a separate SKU and a separate order — and that's a decision you can
                make in month three with actual data on how you're responding, rather than now on speculation.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:44:55.355516Z"
        >
            <Origin>019fd308-317b-78a5-a376-3485a8463295</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What does SNAC mean? Tell me someone was being cute about SNACK</Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:45:04.182991Z"
        >
            <Origin>019fd308-317e-7e9d-9c34-6feecb3cc353</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Sorry — it's a genuine acronym, and a dry one. <Word>
                    <Bold />
                    S
                </Word>odium <Word>
                    <Bold />
                    N
                </Word>-&#91;8-(2-hydroxybenzoyl)<Word>
                    <Bold />
                    a
                </Word>mino&#93;<Word>
                    <Bold />
                    c
                </Word>aprylate. It's a salicylamide linked to caprylic acid, an eight-carbon fatty acid, as the sodium
                salt.
            </Paragraph>
            <Paragraph>
                Though the coincidence isn't quite as accidental as it looks, because there's a naming convention doing the
                work. Emisphere Technologies, which developed the molecule, called their whole absorption-enhancer platform
                <Word>
                    <Bold />
                    Eligen
                </Word>, and the carriers in it follow a pattern of contractions from the systematic name — SNAD, SNAC,
                5-CNAC. The chemistry drives the letters. But someone at Emisphere in the 1990s naming an oral-delivery
                carrier certainly noticed what it spelled and didn't lose sleep over it.
            </Paragraph>
            <Paragraph>
                The slight irony is that SNAC's entire clinical requirement is that you <Word>
                    <Emphasis />
                    not
                </Word> have a snack — nothing in the stomach, 120 mL of water, thirty minutes of waiting.
            </Paragraph>
            <Paragraph>
                Worth knowing about Emisphere: they spent roughly two decades failing to commercialize this. The platform
                was tried on oral heparin, oral insulin, oral calcitonin — all of which fell short. Oral semaglutide was the
                first thing that worked well enough to reach market, and Novo eventually bought Emisphere in 2020 for about
                $1.8 billion, essentially to own the SNAC royalties on Rybelsus outright. A twenty-year technology that
                found exactly one commercially viable partner molecule.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:46:17.341242Z"
        >
            <Origin>019fd309-7324-7d4b-8493-79395356252a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What happens when you start on 14 mg? What are uswr reports?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T17:46:29.130220Z"
        >
            <Origin>019fd309-7328-7d76-8630-79d1e1f4fcb8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Trial data first, since it's the cleaner signal: PIONEER 4 and the Japanese dose-escalation work both tested
                rapid versus standard escalation, and the pattern is consistent — nausea incidence roughly doubles when you
                compress the ramp, and discontinuation for GI reasons rises several-fold. In the standard-escalation arms,
                nausea ran around 20% overall and discontinuation around 5–7%. Skipping straight to 14 mg pushes both
                substantially higher, with the failures concentrated in the first ten days.
            </Paragraph>
            <Paragraph>
                What people describe on forums and in the r/semaglutide-type communities, fairly consistently: nausea
                starting within a few hours of the first dose rather than building over days, vomiting in a meaningful
                minority, and — the complaint that shows up most and surprises people — profound food aversion rather than
                mere appetite reduction. Not "I'm less hungry" but the smell of cooking becoming unpleasant. Sulfur burps
                are a recurring and much-hated one. Constipation follows in week two. Fatigue is common and partly just
                inadequate intake.
            </Paragraph>
            <Paragraph>
                The pattern worth attending to: most who abandon it at high starting doses report they never gave it another
                try, having concluded the drug didn't agree with them — when the actual variable was the ramp. Those who
                restarted low and titrated properly generally tolerated the same 14 mg fine two months later.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For your situation specifically, two things.
                </Word> Quetiapine at 400–600 mg carries strong antihistaminergic and anticholinergic load, and constipation
                is already a common effect at that dose. Stacking GLP-1 constipation on top is the interaction I'd actually
                watch, more than nausea. Second, if severe nausea means you can't reliably keep the morning routine or you
                skip evening doses because you feel ill, that's a real risk to psychiatric stability — worth more than the
                eight weeks you'd save.
            </Paragraph>
            <Paragraph>
                If 3 mg is unobtainable, the more sensible compromise is 7 mg every other day for the first two weeks. Not
                label-sanctioned, but it's what the long half-life makes pharmacologically reasonable, and it's a common
                clinical improvisation.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:10:54.460217Z"
        >
            <Origin>019fd3c4-c8a8-7752-89ca-5f715e595957</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay so we assume there will be nausea. How long and how bad?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:11:07.053730Z"
        >
            <Origin>019fd3c4-c8a9-7ac8-866c-2722b5944618</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Timeline.
                </Word> Onset is fast — hours after a dose step, not days. Peak intensity falls in days 2–7 after each
                increase. Substantial resolution by day 10–14. Full adaptation by 3–4 weeks. Crucially, this resets at every
                dose step, so you get a smaller version of the same curve at 3→7 and again at 7→14. Adaptation at one dose
                doesn't transfer forward, but each subsequent episode is usually milder than the first.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Severity distribution
                </Word>, from the PIONEER program at standard escalation:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Roughly 40–50% report no meaningful nausea at all.</Line>
                <Line>Around 20% get mild, intermittent nausea — noticeable, doesn't change behavior.</Line>
                <Line>
                    Around 15–20% get moderate: queasy for hours daily, food aversion, altered eating. Functional but
                    unpleasant.
                </Line>
                <Line>Around 5–8% get severe enough to consider stopping; roughly 5% actually discontinue.</Line>
            </Paragraph>
            <Paragraph>
                Vomiting is much less common than nausea — high single digits, mostly in the first week and mostly tied to
                eating too much or too fast rather than the drug alone.
            </Paragraph>
            <Paragraph>
                The character matters: most describe it as persistent low-grade queasiness with a full, heavy stomach, not
                acute vomiting urgency. Closer to motion sickness or early-pregnancy nausea than food poisoning.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What actually reduces it
                </Word>, in rough order of effectiveness: stop eating at first fullness rather than at satiety —
                overshooting volume is the single most common trigger, and the delayed emptying means your usual portion
                size is now too much. Avoid high-fat and fried food, which empties slowest. Smaller, more frequent meals.
                Keep fluids up between meals, not with them. Bland and cold foods are better tolerated than hot and
                aromatic. And if a step is rough, hold at that dose rather than advancing — time at dose is the treatment.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two things specific to you.
                </Word> Ondansetron is available in Georgian pharmacies and is the standard rescue antiemetic if you need
                one — worth having on hand rather than discovering you need it on day three. And quetiapine's
                antihistaminergic action is itself mildly antiemetic, which cuts slightly in your favor; your nightly dose
                may blunt the evening portion of this.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:14:45.250735Z"
        >
            <Origin>019fd3c8-4f4c-7040-9162-2374cdbdfe48</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there research specifically at starting at 14 mg oral? There are studies of people using it with
                antipsychotics. How do they time it for people with nighttime doses as before bed is when binge eating is
                worst
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:15:08.426993Z"
        >
            <Origin>019fd3c8-4f4d-787c-90cb-a698184a2d0b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “oral semaglutide dose escalation versus starting 14 mg tolerability trial PIONEER”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    On starting at 14 mg: there is no research, because no trial has ever done it.
                </Word> Every PIONEER study initiated all patients at 3 mg. Oral semaglutide was started at 3 mg for all
                patients before escalating to 7 mg after 4 weeks and then to 14 mg after another 4 weeks — and PIONEER 9 in
                Japan followed the identical structure, with only patients randomized to the higher arms escalating at each
                4-week mark. Even the trials described as testing "14 mg only" mean 14 mg as the maintenance dose reached
                through escalation, not as a starting dose, and the 3 mg dose exists purely for escalation and is not a
                maintenance dose. So anything I told you about starting high was extrapolation from escalation-rate
                comparisons and post-marketing reports, not from a trial that tested it. Worth stating plainly.
            </Paragraph>
            <Paragraph>
                The nearest real evidence is PIONEER PLUS, which escalated <Word>
                    <Emphasis />
                    above
                </Word> 14 to 25 and 50 mg: the higher doses were well tolerated, with GI adverse events mostly occurring
                during dose escalation and more frequent at higher doses, but no new safety concerns. That reinforces the
                pattern — escalation is where the trouble lives, dose level per se is secondary.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On timing with your nightly quetiapine and evening hyperphagia:
                </Word> the antipsychotic trials sidestep this entirely, because they all used injectables. The Danish
                semaglutide trial and Larsen's liraglutide study both used subcutaneous dosing, so nobody in that literature
                has confronted the oral fasting-window problem alongside a nighttime antipsychotic. There's no protocol to
                copy.
            </Paragraph>
            <Paragraph>
                But the pharmacology answers it anyway: at 165 hours, plasma semaglutide is essentially flat across the
                24-hour cycle. There is no peak or trough to align with anything. Morning dosing does not mean morning
                coverage — steady-state exposure at 2 AM is the same as at 10 AM. The arcuate satiety signaling we discussed
                is continuous, so evening appetite is covered by a morning tablet as completely as by any other schedule.
            </Paragraph>
            <Paragraph>
                What <Word>
                    <Emphasis />
                    is
                </Word> time-varying is gastric emptying, which is meal-contingent. That works in your favor here: an
                earlier evening meal, eaten to first fullness, will still be sitting in your stomach at the hour when
                quetiapine's H1 blockade drives you toward food. That mechanical fullness is probably the more useful lever
                against nocturnal eating than anything about tablet timing.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:19:04.469909Z"
        >
            <Origin>019fd3cc-4369-7a05-999f-1500d9f52e6b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the effectiveness of oral semaglutide versus injected? Is nausea different?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:19:16.586455Z"
        >
            <Origin>019fd3cc-436a-7113-8010-81ee3e22f84e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Effectiveness — depends entirely on which dose pair you're comparing.
                </Word>
            </Paragraph>
            <Paragraph>
                At the diabetes doses, they're close to equivalent. PIONEER 4 compared oral 14 mg head-to-head against
                injectable liraglutide 1.8 mg and placebo; oral semaglutide was non-inferior on HbA1c and superior on
                weight. Cross-trial, oral 14 mg maps roughly onto injectable 0.5 mg — about 1.0–1.4% HbA1c reduction and 3–4
                kg. Injectable 1.0 mg (SUSTAIN) runs modestly ahead of that.
            </Paragraph>
            <Paragraph>
                At the weight-management doses the picture changed with oral Wegovy 25 mg. OASIS 4 gave ~16.6% at 64 weeks
                in adherent participants versus STEP 1's ~14.9% at 68 weeks for injectable 2.4 mg. Those are different
                trials with different populations, so it's not a true head-to-head, but the practical conclusion holds: the
                oral route is no longer a compromise on efficacy, only on dosing ritual. Rybelsus at 14 mg, though — which
                is what's actually available to you in Tbilisi — sits well below the injectable weight doses.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Nausea: similar incidence, different shape.
                </Word>
            </Paragraph>
            <Paragraph>
                Rates are comparable — roughly 15–20% for both at standard escalation, and discontinuation for GI reasons in
                the same 5–7% range. But the temporal profile differs in a way that matters practically. Injectable produces
                one exposure peak per week (Tmax ~1–3 days), so nausea tends to cluster in the 24–72 hours after the shot
                and ease before the next one. People learn to inject Friday and write off Saturday. Daily oral gives flat
                exposure, so nausea is lower-amplitude but continuous — no bad day, no clear day either.
            </Paragraph>
            <Paragraph>
                Which is worse is genuinely person-dependent. Some prefer a predictable rough patch they can schedule
                around; others find low-grade daily queasiness easier than a weekly trough.
            </Paragraph>
            <Paragraph>
                Two asymmetries worth having: oral is easier to stop — if you're two days into a bad reaction you skip
                tomorrow's tablet and exposure decays, whereas an injected dose is committed for a week. And oral's low,
                variable bioavailability means your actual exposure fluctuates day to day depending on how well you kept the
                fasting window, which cuts both ways — occasionally milder, occasionally an unexplained bad day.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:24:32.522854Z"
        >
            <Origin>019fd3d1-44be-7852-b5ea-472c5013e092</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So wegovy goes to 24mg but rybelsus only to 14mg so less intense?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:24:41.340070Z"
        >
            <Origin>019fd3d1-44c0-76d0-b1c6-e35770003840</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two corrections to the numbers, then the substance of your point holds.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Injectable Wegovy tops out at 2.4 mg weekly, not 24 mg.
                </Word> And you can't compare it to Rybelsus's 14 mg <Word>
                    <Emphasis />
                    daily
                </Word> by looking at the numbers — different routes, different intervals, and ~1% oral bioavailability. The
                arithmetic: 14 mg daily is 98 mg per week of ingested drug, of which roughly 1 mg is absorbed. That's why
                the milligram figures look so unlike each other for comparable exposure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Oral Wegovy is 25 mg daily
                </Word>, approved December 2025, and that's the oral formulation that matches injectable 2.4 mg on efficacy.
                Same tablet technology as Rybelsus, higher dose, different brand.
            </Paragraph>
            <Paragraph>
                So the correct statement is: Rybelsus 14 mg is less intense than Wegovy — but that's a <Word>
                    <Emphasis />
                    dose
                </Word> difference, not a <Word>
                    <Emphasis />
                    route
                </Word> difference. Rybelsus was developed and priced as a diabetes drug and its ceiling was set for
                glycemic control. Once Novo took the oral route to weight-management doses, the route stopped being the
                limiting factor.
            </Paragraph>
            <Paragraph>
                Practically for you: Rybelsus 14 mg gives roughly 3–4 kg placebo-adjusted weight loss and 1.0–1.4% HbA1c.
                Injectable 2.4 mg or oral 25 mg gives ~15%. That's a large gap, and against lifetime quetiapine at 400–600
                mg it matters.
            </Paragraph>
            <Paragraph>
                The available-in-Georgia reality, though, is that Rybelsus 7/14 mg is what you can get now, oral Wegovy 25
                mg isn't here yet, and Ozempic is — with off-label titration toward 2.0 mg being the local route to the
                higher exposure if 14 mg oral proves insufficient. Worth starting where you can start; the dose question is
                answerable in month four with data.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:26:11.836970Z"
        >
            <Origin>019fd3d2-ab25-78b9-b8b2-d82ac9d17f65</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I confused 25mg with 24mg. I was one mg off. Maybe not wise to lecture me on how wrong I am first??
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:26:13.756300Z"
        >
            <Origin>019fd3d2-ab26-71e3-9840-8a2f842a19a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair. You were one digit off on a number I'd already given you, and I reformatted it into a correction
                sequence with arithmetic attached. That was the wrong shape for the message.
            </Paragraph>
            <Paragraph>
                Your actual point was right: Rybelsus 14 mg is the weaker option, and the reason is that its ceiling was set
                for glycemia, not weight.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:28:24.428502Z"
        >
            <Origin>019fd3d4-cdb3-7a2a-953a-df2d9f67b50a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No ypu decided 24mg -&gt; 2.4, which I’m sure is why I made the mistake, but if the great reveal is that i
                mixed up oral with injected, the next step is to show me just how different oral actually is for my
                no-relationship guess with a 100x difference factor
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:28:29.133591Z"
        >
            <Origin>019fd3d4-cdb4-7102-88da-ec310032f3b8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and I picked the wrong reading. You said 24, and 25 was on the table from two messages earlier
                — reading it as 2.4 was me reaching for the injectable when the oral number was the closer match to what you
                wrote. That's my error, not yours, and it manufactured a mixup that then needed explaining.
            </Paragraph>
            <Paragraph>
                And your underlying observation is the interesting one: 2.4 mg weekly versus 25 mg daily is a ~73x
                difference in administered drug for equivalent effect. That ratio is the whole story of the SNAC problem —
                bioavailability around 1%, so you have to put roughly a hundred times the peptide in to get comparable
                exposure out, and the daily schedule exists because you can't bank a week's worth through that window at
                once.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:29:52.343626Z"
        >
            <Origin>019fd3d6-260a-7348-b144-8b5ca18c5cde</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But no one cares. “25 mg. You are off by 1 mg because you’re probably confusing it with the 2.4 mg injected
                dose” is all that needed to be sent
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:29:52.693598Z"
        >
            <Origin>019fd3d6-260b-7b93-8c72-49200cf6a50f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. That's the message. One line, done.</Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:30:41.776139Z"
        >
            <Origin>019fd3d6-e743-7596-864f-d9b9a5ffb46f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay so back on track, is 14mg versus 25mg that makes for the big difference?</Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:30:47.752071Z"
        >
            <Origin>019fd3d6-e744-7e22-8fbd-03b82845cb76</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — dose alone. Same molecule, same SNAC tablet, same daily schedule. The only variable is how much
                semaglutide is in it.
            </Paragraph>
            <Paragraph>
                The magnitude: ~3–4 kg placebo-adjusted at 14 mg, ~13–16% of body weight at 25 mg. That's not a modest step
                up, it's a different category of result, and it's the reason Novo pursued the higher dose as a separate
                approval rather than just relabeling Rybelsus.
            </Paragraph>
            <Paragraph>
                PIONEER PLUS mapped the middle of that curve directly — 25 mg and 50 mg against 14 mg in T2D — and found
                dose-proportional gains in both HbA1c and weight, with GI effects rising but no new safety signals. So the
                curve is still climbing well past 14 mg; you're not near a plateau at the Rybelsus ceiling.
            </Paragraph>
            <Paragraph>
                Which puts your practical question as: Rybelsus 14 mg available here now and giving you a diabetes-grade
                effect with a modest weight benefit, versus injectable Ozempic titrated off-label toward higher exposure,
                versus waiting for oral Wegovy 25 mg to reach Georgian importers. The last is probably a year or more out,
                given how Georgian registration typically lags EU launch.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:32:32.830164Z"
        >
            <Origin>019fd3d8-969a-7bd2-984d-7c43d706ab84</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I lost 5% in the last 6 weeks with portion control while recovering from foot surgery and quitting nicotine.
                Whats the standard deviation and what type of distribution
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:32:54.217842Z"
        >
            <Origin>019fd3d8-969b-7eb2-89d4-e8727e8c9932</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Percent weight change is approximately normal, with a consistent right skew — a tail of people who lose
                little or gain, and a shorter left tail because there's a floor on how fast anyone loses. It's unimodal, not
                bimodal, despite the clinical habit of talking about "responders" and "non-responders"; that language
                describes tertiles of a continuous distribution rather than distinct populations.
            </Paragraph>
            <Paragraph>Approximate SDs, at roughly one year:</Paragraph>
            <Paragraph>
                <List />
                <Line>Lifestyle/behavioral intervention arms: mean ~5–7% loss, SD ~5–6%</Line>
                <Line>Placebo arms in drug trials (which include lifestyle counseling): mean ~2.4%, SD ~6–7%</Line>
                <Line>Semaglutide 2.4 mg (STEP 1): mean ~14.9%, SD ~8–9%</Line>
            </Paragraph>
            <Paragraph>
                The SD widens with the mean — drug arms are more dispersed, not just shifted. Coefficient of variation stays
                roughly similar.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On your six weeks:
                </Word> 5% works out to ~0.8%/week, which sits at the upper end of the typical early range for intake
                restriction alone. Two things inflate early numbers for everyone — glycogen depletion carries ~3 g water per
                gram, so the first 2–4 kg of any deficit is disproportionately non-fat, and the curve decelerates from there
                regardless of adherence. Six-week slopes are poor predictors of twelve-month totals; the trials' variance
                mostly accumulates after month three.
            </Paragraph>
            <Paragraph>
                The nicotine detail runs against the usual direction — cessation typically produces 4–5 kg gain over 6–12
                months, driven by both metabolic rate drop and appetite rebound. Net loss through that window means the
                intake side is carrying more than the raw number suggests. It's also the variable most likely to shift under
                you later, since the cessation weight effect peaks well past six weeks.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:37:53.997465Z"
        >
            <Origin>019fd3dd-7bf0-77a4-9f4d-ca422c847ec6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The gain is in large part due to surgery andligestyle change and I’ve lost over 60 lbs on 205 for a very
                high percent. I imagine it will help me. I count calories. A treatment that helos me maintain my calorie
                targets would be great
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:38:03.757487Z"
        >
            <Origin>019fd3dd-7bf1-7b58-8559-1e331aa43a30</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                A 60 lb loss puts you well past the point where the physiology starts working against you, and that's
                exactly the gap semaglutide fills.
            </Paragraph>
            <Paragraph>
                The relevant literature is the metabolic adaptation work — Leibel and Rosenbaum's studies showing energy
                expenditure falls roughly 10–15% below what's predicted from the new body mass alone, persisting years out,
                alongside leptin decline, ghrelin elevation, and increased food reward salience. That's the Biggest Loser
                finding too, and it's why maintenance failure rates after large losses are so high. The failure isn't
                willpower; it's that the same calorie target that was achievable at 265 requires meaningfully more restraint
                at 205, against stronger drive.
            </Paragraph>
            <Paragraph>
                Semaglutide addresses precisely that mismatch. It doesn't change your target — it lowers the effort required
                to hit it. For someone who already counts and already has the behavioral system working, that's a much
                better fit than for someone using it as a substitute for structure. The STEP maintenance data support this:
                STEP 4 randomized people who'd already lost ~10% on semaglutide, and those continuing lost further while
                those switched to placebo regained steadily. Same drug, but the maintenance signal is separable from the
                induction signal.
            </Paragraph>
            <Paragraph>
                Two things that follow. The 14 mg Rybelsus ceiling matters less for maintenance than for induction — you're
                not asking it to drive a 15% loss, you're asking it to offset an adaptive drive, and the lower dose may be
                adequate for that. And the indefinite-duration point applies with full force: withdrawal returns the drive,
                and the adaptation you're compensating for doesn't resolve on its own.
            </Paragraph>
            <Paragraph>
                Worth logging your calorie target and adherence before starting, since the useful measurement isn't weight
                but how much effort holding the target takes.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:39:30.704691Z"
        >
            <Origin>019fd3de-f94d-74ab-b8e9-3f5384be6fa7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No… 205 to 145 lol</Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:39:38.439727Z"
        >
            <Origin>019fd3de-f94e-74ea-bc2d-99eeb853bb66</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Got it — 205 down to 145. That's a 29% reduction, which is a much larger relative loss than I was picturing,
                and it changes the picture in two ways.
            </Paragraph>
            <Paragraph>
                The adaptive drive scales with the <Word>
                    <Emphasis />
                    fraction
                </Word> lost, so at 29% you're at the deep end of the metabolic adaptation literature — the Leibel/Rosenbaum
                work found the expenditure suppression tracks percent reduction, and 29% is well past the 10–15% range where
                most of that data sits. The physiological pressure to regain is correspondingly strong.
            </Paragraph>
            <Paragraph>
                The other thing: at 145 lb, the question stops being weight loss. Depending on your height that's plausibly
                at or near a normal BMI, which means semaglutide here would be doing maintenance work exclusively —
                offsetting the drive so your existing calorie discipline stays sustainable — rather than driving further
                loss. That's a legitimate use and it's what STEP 4 tested, but it's a different conversation from the one
                we've been having about 14 vs 25 mg ceilings. If maintenance is the goal, the lower dose is likely
                sufficient and the ceiling question largely dissolves.
            </Paragraph>
            <Paragraph>
                It also means the appetite suppression could overshoot. At a normal BMI with intake already controlled,
                further suppression can push you below target without your noticing, and lean mass loss becomes the thing to
                watch rather than scale weight. That's the argument for starting at 3 or 7 mg and staying there rather than
                titrating on principle.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:41:38.261918Z"
        >
            <Origin>019fd3e0-e0e5-7ef8-946e-4270fa32e4e5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m at 180 after 6 months of no exercise, 3 months on crutches. Its been tough. I need to lose 35 to get
                myself to an acceptable maintenance weight
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:41:47.701974Z"
        >
            <Origin>019fd3e0-e0e6-714b-adbd-31ac99782d56</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a real regain under genuinely constraining circumstances — three months on crutches removes both
                structured exercise and incidental movement, and the surgery itself adds an inflammatory and cortisol
                component on top. 35 lb from 180 is a ~19% reduction, which puts you squarely in induction territory, not
                maintenance. That does reopen the dose question.
            </Paragraph>
            <Paragraph>
                For a 19% target, Rybelsus 14 mg is likely underpowered on its own — 3–4 kg placebo-adjusted is roughly 8 lb
                of the 35. Your own portion control is clearly doing most of the work already at 0.8%/week, so the honest
                framing is that 14 mg is an assist to a program that's working rather than the driver. Whether that assist
                is worth the cost and the fasting ritual depends on how much effort your current target takes to hold — and
                you have direct evidence on that, since you've done this once before.
            </Paragraph>
            <Paragraph>
                The thing I'd flag given the ankle: at a 19% loss with no resistance training, lean mass loss runs high, and
                GLP-1 agents make that worse rather than better — roughly 25–40% of loss as lean tissue in the STEP
                body-composition substudies. You're 6+ months post-osteotomy with hardware out and bone consolidation
                ongoing. Calf and posterior tibial atrophy from three months non-weight-bearing is already there. Losing
                more muscle through that window works directly against the rehab.
            </Paragraph>
            <Paragraph>
                Which argues for protein at the high end — 1.6 g/kg or better, so ~130 g/day at your weight — and for
                getting resistance loading back in as your surgeon's timeline allows, before or alongside starting any
                GLP-1, rather than after.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:43:49.364633Z"
        >
            <Origin>019fd3e2-ebe9-7d9d-a5ae-bea8d9a66103</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You aren’t factoring in the gains I made without it at all. It’s fine I can do my own modeling. The benefit
                is if it can overcome antipsychotic based hunger. When I lost the past weight and kept it off for6-7 years,
                I could rely on sleep meds to help but not anymore
            </Paragraph>
        </Message>
        <Message
            at="2026-08-05T21:43:58.408867Z"
        >
            <Origin>019fd3e2-ebea-7098-9598-7d7e3475a01a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the actual question, and it's a specific one: does GLP-1 signaling counteract H1/5-HT2C-driven
                hunger, or just add a general appetite reduction on top of it?
            </Paragraph>
            <Paragraph>
                The evidence says it engages the same circuitry. Antipsychotic hyperphagia works substantially through
                hypothalamic AMPK activation downstream of H1 blockade, plus loss of 5-HT2C-mediated POMC tone — and GLP-1
                agonism acts on POMC/CART neurons directly and suppresses hypothalamic AMPK. So it's antagonism at the node,
                not a parallel offset. The clinical data are consistent with that: the Danish semaglutide trial produced ~9
                kg placebo-adjusted in patients who were on ongoing antipsychotics throughout, and Larsen's liraglutide
                trial did the same in olanzapine/clozapine patients. The drug wasn't fighting the antipsychotic to a draw;
                it was producing near-normal weight response in people whose drive was pharmacologically elevated.
            </Paragraph>
            <Paragraph>
                What that doesn't tell you is whether it covers the specific nocturnal phenotype you're describing. Those
                trials measured weight, not evening-specific eating, and quetiapine at 400–600 mg drives a
                sedation-adjacent, compulsive-feeling hunger in the hour before sleep that's phenomenologically distinct
                from daytime appetite. The flat 24-hour exposure means coverage is at least continuous, which is the right
                property. But nobody has published on that phenotype specifically.
            </Paragraph>
            <Paragraph>
                The sleep-med substitution point is the part I don't have literature for. If what you previously relied on
                was sedation that got you past the window rather than appetite suppression per se, semaglutide replaces a
                different mechanism than the one you lost.
            </Paragraph>
        </Message>
    </Chapter>
);
