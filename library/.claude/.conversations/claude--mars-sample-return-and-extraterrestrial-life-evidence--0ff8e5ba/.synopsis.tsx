import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was a wide-ranging, intellectually generative conversation that began with a news claim about NASA
            administrator Jared Isaacman stating a 90% probability that Mars sample return missions would prove
            microbial life existed there. The person quickly moved past the surface claim to interrogate the underlying
            scientific reasoning, demonstrating strong intuitions about probability, conditional logic, and the
            philosophy of biology. The discussion covered the implausibility of lithopanspermia given stacked
            conditional probabilities, the moon as a statistically superior repository for Earth-origin biological
            material, the arbitrariness of DNA as a specific molecular solution versus the universality of
            information-storing systems in general, and a functional definition of life as a dissipative structure — a
            long-lived periodic plume in an entropic system driven by an energy source, analogous to certain fluid
            dynamic structures in explosion plumes.
        </Paragraph>
    </Chapter>
);
