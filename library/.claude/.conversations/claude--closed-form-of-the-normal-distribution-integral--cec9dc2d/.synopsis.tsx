import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in a deep mathematical philosophy discussion about the non-elementary nature of the
            Gaussian integral and the proof that erf has no closed form in elementary functions. The conversation
            centered on differential algebra and Liouville's theorem, covering how "closed form" is formally defined via
            differential field towers, why no rational function R satisfies R' − 2xR = 1, and how Picard-Vessiot theory
            and differential Galois groups give the rigorous sense in which erf is "irreducible" relative to elementary
            operations.
        </Paragraph>
    </Chapter>
);
