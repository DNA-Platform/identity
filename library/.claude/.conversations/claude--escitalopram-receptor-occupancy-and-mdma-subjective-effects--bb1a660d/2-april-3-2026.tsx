import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[3 April 2026](2026-04-03)</Date>
        </Dated>
        <Title>[[ 3 April 2026 ]]</Title>
        <Message
            at="2026-04-03T07:20:33.270535Z"
        >
            <Origin>019d5237-984a-7057-b1dc-25ff56f3b048</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Do MDA and MDMA work on SERT in the same way?</Paragraph>
        </Message>
        <Message
            at="2026-04-03T07:20:55.502956Z"
        >
            <Origin>019d5237-984a-7a10-be6b-336627aea1ba</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The core mechanism is the same — both are transporter substrates that enter terminals through SERT and then
                drive reverse transport — but there are meaningful quantitative and qualitative differences that matter for
                the cascade question.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where they're the same
                </Word>
            </Paragraph>
            <Paragraph>
                Both MDA and MDMA are releasing agents, not reuptake blockers. Both require SERT entry to initiate the
                serotonergic cascade, meaning an SSRI blocking SERT would in principle disrupt both through the same
                upstream step. So the escitalopram interaction you're reasoning about applies structurally to MDA as well.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where they diverge
                </Word>
            </Paragraph>
            <Paragraph>
                MDMA is more serotonin-selective relative to dopamine. MDA has a higher dopamine-to-serotonin release ratio
                — it hits DAT more aggressively relative to SERT than MDMA does. This partly explains why MDA has more of a
                stimulant and psychedelic edge versus MDMA's more purely empathogenic quality.
            </Paragraph>
            <Paragraph>
                The bigger difference is that MDA has significant direct agonist activity at 5-HT2A receptors. MDMA has
                comparatively little. This is why MDA produces visual phenomena and a more hallucinogenic character — it's
                not just flooding serotonin into the synapse, it's also directly activating the receptor that psilocybin and
                LSD hit. This component of MDA's effects would be entirely SERT-independent and therefore wouldn't be
                blocked by escitalopram at all.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this implies for your original question
                </Word>
            </Paragraph>
            <Paragraph>
                If you applied the same 5mg escitalopram logic to MDA rather than MDMA, you'd expect the
                empathogenic/entactogenic effects to be blunted for the same reasons (SERT cascade disruption), but the
                psychedelic and hallucinogenic component would be relatively preserved because it routes through 5-HT2A
                directly rather than through elevated synaptic serotonin. MDA on an SSRI would likely feel more like a
                psychedelic-stimulant combination with the "roll" stripped out, rather than just a weakened MDMA experience.
            </Paragraph>
        </Message>
    </Chapter>
);
