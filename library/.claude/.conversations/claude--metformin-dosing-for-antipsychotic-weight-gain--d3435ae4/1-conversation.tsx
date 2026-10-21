import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-17T06:59:58.072715Z"
        >
            <Origin>01a00e86-2c42-7de1-abd9-9a4078c50c87</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is 2000 mg metformin 1000 mg 2x per day a normal dose for managing weight associated with antipsychotics? Is
                there any risk to increasing my dose 1000 mg per werk over two weeks
            </Paragraph>
        </Message>
        <Message
            at="2026-08-17T07:00:08.040583Z"
        >
            <Origin>01a00e86-2c42-7ab9-94ff-b25424dd7768</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, 2000 mg/day (1000 mg twice daily) is a standard target dose for antipsychotic-associated weight gain.
                Most of the clinical trial literature on metformin for this indication — including the studies in olanzapine
                and clozapine populations — used 750–2000 mg/day, and 2000 mg is the most common maintenance dose in the
                meta-analyses showing ~3–5 kg weight reduction. It's also the standard max dose for immediate-release
                metformin in general practice (2550 mg is the labeled ceiling, rarely used).
            </Paragraph>
            <Paragraph>
                On titration speed: going up 1000 mg per week (e.g., 1000 → 2000 over two weeks) is faster than the
                conventional schedule, which is 500 mg increments every 1–2 weeks. The risk isn't toxicity — it's GI
                tolerability. Nausea, diarrhea, and cramping are dose-related and much more common with rapid escalation;
                roughly 20–30% of people get significant GI effects even with slow titration, and fast titration is the main
                driver of discontinuation. There's no meaningful lactic acidosis risk from titration speed in someone with
                normal kidney function.
            </Paragraph>
            <Paragraph>
                Practical mitigations if you do go faster: take doses with food (mid-meal is best), split as 1000 mg twice
                daily rather than 2000 mg once, and if GI symptoms hit, drop back to the last tolerated dose for a week
                before re-advancing. Extended-release (metformin XR/Glucophage Long, available in Georgian pharmacies)
                roughly halves GI side effect rates and can be taken once daily in the evening — worth considering if IR
                gives you trouble.
            </Paragraph>
            <Paragraph>
                One interaction note relevant to your context: metformin and oral semaglutide are commonly combined and
                there's no pharmacological conflict, though GI side effects stack.
            </Paragraph>
        </Message>
    </Chapter>
);
