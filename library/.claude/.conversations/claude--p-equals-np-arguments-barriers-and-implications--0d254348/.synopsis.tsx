import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to research and explain the P vs NP problem in depth, specifically requesting
            coverage of the strongest arguments for and against P = NP, the three main proof barriers (relativization,
            natural proofs, and algebrization), and the implications of either resolution for cryptography and
            complexity theory. The request explicitly asked Claude to reason carefully before responding, signaling a
            preference for substantive analytical depth over surface-level overview.
        </Paragraph>
    </Chapter>
);
