import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to research and explain the P versus NP problem with careful reasoning, covering
            three specific areas: the strongest arguments for and against P = NP, the main proof barriers
            (relativization, natural proofs, and algebrization), and the implications of a resolution either way for
            cryptography. This was a purely intellectual, technically demanding request with no personal context shared.
        </Paragraph>
    </Chapter>
);
