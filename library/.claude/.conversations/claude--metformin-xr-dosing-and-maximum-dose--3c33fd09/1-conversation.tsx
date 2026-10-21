import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[20 August 2026](2026-08-20)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-20T19:09:19.504388Z"
        >
            <Origin>01a02095-10e4-7f6b-90d0-57fd29c066a0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How many times a day does one take metformin XR. What is the maximum dose of this drug?</Paragraph>
        </Message>
        <Message
            at="2026-08-20T19:09:21.630288Z"
        >
            <Origin>01a02095-10e4-7993-8f7e-fb77bb0520f0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Metformin XR (extended-release) is typically taken once daily with the evening meal. The maximum dose is
                2,000 mg/day for most XR formulations (Glucophage XR, generic ER); Fortamet and Glumetza carry a labeled
                maximum of 2,500 mg/day. Some prescribers split a 2,000 mg XR dose into two daily doses if once-daily dosing
                isn't tolerated or doesn't control glucose adequately.
            </Paragraph>
            <Paragraph>
                For comparison, immediate-release metformin is taken 2–3 times daily with a maximum of 2,550 mg/day.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T19:10:03.968096Z"
        >
            <Origin>01a02095-c084-74cc-95a8-a2ac14fa0215</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is it? It’s a effect on weight loss because I was given it pre-diabetes but also because it might help
                with antipsychotic induced weight gain.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T19:10:11.663925Z"
        >
            <Origin>01a02095-c084-7035-b04e-8ad5e270e384</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Metformin's weight effect is modest but real, and it's one of the better-studied adjuncts specifically for
                antipsychotic-induced weight gain.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    General weight effect:
                </Word> In the Diabetes Prevention Program (prediabetes population), metformin produced about 2–3 kg of
                weight loss versus placebo, sustained over 10+ years at roughly 2%. It's considered weight-neutral to mildly
                weight-reducing rather than a weight-loss drug per se.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Antipsychotic-induced weight gain:
                </Word> Here the evidence is stronger in relative terms. Meta-analyses (e.g., de Silva et al. 2016, and a
                2022 Cochrane-style review) show roughly 3–4 kg more weight loss than placebo over 12–24 weeks, with greater
                effect when started early or for prevention rather than reversal of established gain. The mechanism is
                thought to involve reduced hepatic glucose output, improved insulin sensitivity, some appetite reduction
                (via GLP-1 upregulation and possibly GDF15 signaling), and modest reduction in intestinal caloric
                absorption. Effect sizes were larger in studies with olanzapine and clozapine, but quetiapine was included
                in several trials with similar direction of effect. Lifestyle intervention combined with metformin
                outperformed either alone.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical notes:
                </Word> Effect plateaus around 2,000 mg/day; higher doses don't add much weight benefit. The weight effect
                typically appears within the first 3–6 months. It also blunts antipsychotic-associated rises in
                triglycerides and insulin resistance, which is part of why it's recommended as first-line adjunct in several
                psychiatric guidelines (e.g., Maudsley).
            </Paragraph>
            <Paragraph>
                If semaglutide is added later, the two are commonly used together and the effects are roughly additive.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T19:10:47.414834Z"
        >
            <Origin>01a02096-6960-7528-b820-07a410a2092d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is its GLP effect? How might one compare it to Zettek abstract when thinking about it? It’s mechanism
                of action for the appetite suppression.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T19:10:57.998104Z"
        >
            <Origin>01a02096-6960-706c-bfa6-b911bfdc3338</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'm reading "Zettek abstract" as Ozempic (semaglutide) — let me know if you meant something else.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Metformin's GLP-1 effect.
                </Word> Metformin raises circulating GLP-1 levels roughly 1.5–2-fold in several studies, through a
                combination of increased secretion from intestinal L-cells (it concentrates in the gut wall, which is why
                enteric action is a major part of its profile), some inhibition of DPP-4 activity, and upregulation of GLP-1
                receptor expression on beta cells. But these are physiological-range increases of native GLP-1, which has a
                half-life of about 2 minutes. The appetite effect from this pathway is modest.
            </Paragraph>
            <Paragraph>
                The more important anorexigenic signal for metformin appears to be GDF15. Metformin raises GDF15
                substantially (roughly 2–3-fold), and GDF15 acts on GFRAL receptors in the area postrema and nucleus of the
                solitary tract — the hindbrain region that also processes nausea and aversive feeding signals. Mouse
                knockout work (Coll et al., Nature 2020) showed the weight effect of metformin largely disappears without
                GFRAL. There's also AMPK activation in the hypothalamus that may contribute, and some evidence for altered
                gut microbiome and bile acid signaling.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Semaglutide.
                </Word> This is a GLP-1 receptor agonist with a half-life of about a week, producing pharmacological
                receptor occupancy far above anything native GLP-1 reaches. It acts directly on GLP-1 receptors in the
                arcuate nucleus (POMC/CART neurons, inhibition of NPY/AgRP), the area postrema, brainstem, and on vagal
                afferents, plus slowed gastric emptying. The effect is a direct, sustained reduction in hunger and increase
                in satiety, and it also reduces food reward/"food noise" via mesolimbic GLP-1 receptor populations.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Comparison.
                </Word> Metformin nudges an endogenous signal and relies on a second pathway (GDF15) that produces a mild
                aversive-satiety tone; semaglutide delivers supraphysiological, direct receptor agonism at the same
                hindbrain nodes plus hypothalamic and reward circuits. That difference in magnitude maps onto the outcomes:
                roughly 2–3% body weight for metformin versus 12–15% for semaglutide at 2.4 mg. The mechanisms overlap at
                the area postrema and NTS but are otherwise distinct, which is why their combination is roughly additive
                rather than redundant.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T19:18:30.919013Z"
        >
            <Origin>01a0209d-792d-774c-96e6-b27927706d53</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t understand why the weight loss stops. I do experience the slightly adversive feeling to eating it.
                It’s like the sense that I’m full, but if I eat too much, I feel a little bit sick. That’s a good effect.
                Why doesn’t it keep helping me lose weight?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-20T19:18:38.976627Z"
        >
            <Origin>01a0209d-792d-7f94-ba86-92322781c123</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The short answer is that the drug produces a fixed downward shift in the set point your body defends, not an
                ongoing rate of loss. Once you reach the new equilibrium, the same signal that was producing a deficit is
                now just maintaining a lower weight.
            </Paragraph>
            <Paragraph>Mechanically, several things converge:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Energy expenditure falls as you lose weight.
                </Word> A lighter body costs less to run, and on top of that there's adaptive thermogenesis — resting
                metabolic rate drops more than the mass loss alone predicts. So a fixed reduction in intake produces a
                shrinking deficit over time until intake and expenditure meet again.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Counter-regulatory hormones push back.
                </Word> Leptin falls roughly in proportion to fat loss, and ghrelin rises. Lower leptin increases hunger
                drive at the hypothalamus and reduces energy expenditure. The GDF15/GLP-1 aversive-satiety signal from
                metformin stays roughly constant, but it's now working against a stronger orexigenic push.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The signal itself is dose-fixed.
                </Word> GDF15 and GLP-1 elevation are proportional to metformin exposure, and at 2,000 mg/day you're at the
                plateau of that dose-response. The aversive tone you describe doesn't intensify as you lose weight — it
                stays at the same level while the opposing signals grow.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Possible partial receptor desensitization
                </Word>, though evidence for this is weaker with metformin than with direct GLP-1 agonists.
            </Paragraph>
            <Paragraph>
                So the fullness and mild nausea you feel are genuine and still active — they're just now holding the line
                rather than moving it. That's also why adding a second, mechanistically distinct signal (semaglutide's
                direct receptor agonism) resumes loss: it shifts the set point again rather than pushing harder on the same
                lever.
            </Paragraph>
        </Message>
    </Chapter>
);
