import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is engaged in original mathematical research on prime numbers and Goldbach's conjecture. The
            conversation focused on developing a precise framework for understanding "Goldbach pairs" — pairs of primes
            equidistant from a center value N, which sum to 2N. The person established the foundational insight that
            these pairs inherit their symmetry from the coprime structure of N: since gcd(N−k, N) = gcd(k, N) = gcd(N+k,
            N), the coprimes of N are symmetric around N, and prime pairs naturally inhabit this symmetric skeleton.
        </Paragraph>
    </Chapter>
);
