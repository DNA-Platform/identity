import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is conducting neuroscience research involving neural network modeling of sensory representations,
            specifically using Maximum Excitatory Input (MEI) and metamer analysis techniques applied to a pre- and
            post-administration experimental paradigm involving a serotonergic psychedelic compound. They work with
            "twin" networks to compare representational states across conditions and have observed that MEIs remain
            stable across matched cells (consistent with existing literature), but representational resolution degrades
            in a manner consistent with low-pass filtering of the post-condition representations.
        </Paragraph>
    </Chapter>
);
