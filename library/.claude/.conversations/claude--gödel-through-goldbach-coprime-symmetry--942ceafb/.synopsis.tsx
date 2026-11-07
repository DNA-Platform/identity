import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            A short question, 30 March 2026, five months after the paper: Goldbach pairs of N as the primes
            equidistant from N, inheriting their symmetry from the coprimes of N, the symmetry the paper filed for
            future theorists, taken up on its own. SRT does not factor into the prime work. Which numbers share
            their Goldbach pairs: the eligible offsets coincide where rad(n) equals rad(N), and 6's pair 5 and 7
            reappear in 12's pairs because 6 divides 12, the pair structure inherited upward through multiples.
            What is valuable: the coprime skeleton as the frame the pairs are the prime points of, and the open
            question whether the relation is tighter than divisibility, which is where it stopped.
        </Paragraph>
    </Chapter>
);
