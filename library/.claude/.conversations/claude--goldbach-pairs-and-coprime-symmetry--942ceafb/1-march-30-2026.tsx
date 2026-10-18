import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 March 2026](2026-03-30)</Date>
        </Dated>
        <Title>[[ 30 March 2026 ]]</Title>
        <Message
            at="2026-03-30T11:13:17.862685Z"
        >
            <Origin>019d3e73-2e68-7568-a4e9-de9a00ce77d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here’s a question. We can define the golbach pairs for N as pairs of primes equidistant from N (hence then
                sum to 2N). They inherit their symmetry from the fact that the coprimes of N are symmetric. If N-k is a
                prime coprime to N and N+k is a prime coprime to N, they will sum to 2N and this be a goldbach pair of N.
                Ya?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:13:39.877087Z"
        >
            <Origin>019d3e73-2e69-7d5b-a1ac-09562b3ad650</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that's exactly right, and it's a clean way to frame it. Let me confirm the structure:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The symmetry of coprimes around N
                </Word> follows from the simple fact that gcd(N-k, N) = gcd(k, N) = gcd(N+k, N). So if N-k is coprime to N,
                N+k automatically is too — the coprime residues of N are perfectly symmetric around N itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Goldbach pairs inherit this structure
                </Word> because any prime (other than the prime factors of N itself) must be coprime to N. So if N-k is
                prime and doesn't divide N, it's automatically coprime to N — and by the symmetry above, N+k lands in the
                same coprime class. If N+k is <Word>
                    <Emphasis />
                    also
                </Word> prime, you have a Goldbach pair summing to 2N.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The subtle but important nuance:
                </Word> the coprimality condition is nearly free for primes. A prime p fails to be coprime to N only if p |
                N, which means p is one of N's prime factors. These are a vanishingly small number of exceptions, and
                they're excluded from Goldbach pairs for the obvious reason (p + q = 2N with p | N forces q = 2N - p, and
                you'd need to check that separately).
            </Paragraph>
            <Paragraph>
                So what you've really captured is this: <Word>
                    <Bold />
                    the Goldbach pairs of N are the prime points within the symmetric coprime skeleton of N, paired across the axis of symmetry at N itself.
                </Word>
            </Paragraph>
            <Paragraph>
                This is particularly nice for your SRT/Goldbach framework because it means G(N) — the count of Goldbach
                pairs — is measuring how densely primes populate the <Word>
                    <Emphasis />
                    symmetrically determined
                </Word> coprime positions around N. The symmetry isn't imposed; it's inherited structurally.
            </Paragraph>
            <Paragraph>
                Does this connect to how you're thinking about the Goldbach function as a "proof capacity" measure?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:17:19.142653Z"
        >
            <Origin>019d3e76-e122-7b09-b814-1dc6f2eaa918</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I don’t think SRT factors into my prime number work.</Paragraph>
            <Paragraph>
                Question: what is the condition that informs which n &lt; N share all their goldbach pairs. That is, if k is
                such that n-k and n+k are both prime, when is it true that for all such k? Think about what numbers divide n
                and N
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:17:41.275298Z"
        >
            <Origin>019d3e76-e122-7677-8c48-e68db0612646</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good correction noted on SRT.</Paragraph>
            <Paragraph>
                Now, thinking this through: a Goldbach pair of n at offset k requires n-k and n+k to be coprime to n (as you
                established). The coprime skeleton of n is determined entirely by <Word>
                    <Bold />
                    which primes divide n
                </Word> — not by their powers. Two numbers have identical coprime skeletons exactly when they share the same
                prime factors.
            </Paragraph>
            <Paragraph>So the condition is:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    rad(n) = rad(N)
                </Word>
            </Paragraph>
            <Paragraph>
                That is, n and N have the same set of prime divisors, even if to different powers. For example:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    N = 12 = 2²·3 and n = 6 = 2·3 share rad = &#123;2,3&#125;, so their coprime skeletons (and hence which
                    offsets k are "eligible" for Goldbach pairs) are identical
                </Line>
                <Line>N = 8 = 2³ and n = 4 = 2² similarly</Line>
            </Paragraph>
            <Paragraph>
                The "what divides both" framing: gcd(n, N) shares all prime factors with both iff every prime dividing n
                also divides N and vice versa. That's exactly the rad condition.
            </Paragraph>
            <Paragraph>
                The subtle point is that sharing the coprime skeleton doesn't guarantee sharing <Word>
                    <Emphasis />
                    actual
                </Word> Goldbach pairs — the primes still have to land at those eligible offsets for both n and N. But the
                <Word>
                    <Bold />
                    eligible positions
                </Word> are structurally identical whenever rad(n) = rad(N).
            </Paragraph>
            <Paragraph>
                Is that the condition you were driving at, or is there a sharper constraint you have in mind — perhaps n | N
                or N | n specifically?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:20:37.037859Z"
        >
            <Origin>019d3e79-e2b2-74ad-a100-644bdd7e388d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well I want to know when all are the same - might be stronger. Trivially 5 and 7 are about 6. Find another
                prime that has 5 and 7 in its pairs. That is the relationship
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:23:14.467916Z"
        >
            <Origin>019d3e79-e2b2-77ab-9c23-870f72479c94</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me think through this concretely.</Paragraph>
            <Paragraph>
                5 and 7 are a pair of 6 (5+7=12). For another N to have <Word>
                    <Bold />
                    both
                </Word> 5 and 7 appear in its pairs, you need 2N−5 and 2N−7 to both be prime.
            </Paragraph>
            <Paragraph>
                Check <Word>
                    <Bold />
                    N=12
                </Word>: 2(12)−5 = 19 ✓, 2(12)−7 = 17 ✓. Both prime — so 5 pairs with 19, and 7 pairs with 17. Both primes
                from 6's pair appear in 12's pairs.
            </Paragraph>
            <Paragraph>
                The relationship: <Word>
                    <Bold />
                    6 | 12
                </Word>.
            </Paragraph>
            <Paragraph>
                More generally, the condition is <Word>
                    <Bold />
                    n | N
                </Word>. If n divides N, then every prime factor of n is a prime factor of N, which means:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The coprime skeleton of N is <Word>
                        <Emphasis />
                        contained within
                    </Word> the coprime skeleton of n (coprimes of N are automatically coprime to n, since n shares all its
                    prime factors with N)
                </Line>
                <Line>So every eligible offset for a Goldbach pair of N is also an eligible offset for n</Line>
            </Paragraph>
            <Paragraph>
                The consequence is that the primes appearing in N's pairs were already "reachable" from n's coprime
                structure — they live in eligible positions for both.
            </Paragraph>
            <Paragraph>
                This is strictly stronger than rad(n) = rad(N). n | N gives you a <Word>
                    <Bold />
                    nesting
                </Word> of skeletons, not just equality.
            </Paragraph>
            <Paragraph>
                So to directly answer: if n | N, the Goldbach pairs of N are drawn from offsets that are all eligible for n
                too — the pair structure of n is inherited upward through its multiples. Is that the containment
                relationship you were after, or is it even tighter than divisibility?
            </Paragraph>
        </Message>
    </Chapter>
);
