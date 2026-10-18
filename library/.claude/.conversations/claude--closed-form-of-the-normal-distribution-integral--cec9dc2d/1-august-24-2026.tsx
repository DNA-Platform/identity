import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 August 2026](2026-08-24)</Date>
        </Dated>
        <Title>[[ 24 August 2026 ]]</Title>
        <Message
            at="2026-08-24T15:13:20.099970Z"
        >
            <Origin>01a03456-7741-7845-91d6-a299590e287e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How do we know that the integral of the normal distribution has no closed form? How do we prove that? How
                can we not introduce something else? That’s a proof that the function we imagining that represents that is a
                sort of prime function in the sense that it’s irreducible?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-24T15:13:42.134756Z"
        >
            <Origin>01a03456-7741-73cb-9ed9-e1b705c5b4b7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It's a theorem, not folklore: Liouville (1835), made rigorous by Ritt and Rosenlicht, algorithmic in Risch.
                And your instinct is exactly the shape of the proof: you first fix what "closed form" means as a specific
                algebraic closure operation, and then show the antiderivative is not in that closure. It's a relative
                statement, the same way "√2 is irrational" is relative to ℚ.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The setup.
                </Word> Work in a differential field: a field with a derivation D. Start with ℂ(x), D = d/dx. An <Word>
                    <Emphasis />
                    elementary extension
                </Word> is a finite tower F₀ ⊂ F₁ ⊂ ... ⊂ Fₙ where each step adjoins one of three things: an algebraic
                element, an exponential (t with Dt = t·Du for some u already present), or a logarithm (t with Dt = Du/u).
                "Elementary function" means: lives in some such tower. That is the definition. Nothing else counts, by fiat.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Liouville's theorem
                </Word> (the part you need): if f and g are in a differential field K and f·e^g has an antiderivative in
                some elementary extension of K, then the antiderivative is already of the form R·e^g with R ∈ K, meaning R
                satisfies
            </Paragraph>
            <Paragraph>R' + g'R = f.</Paragraph>
            <Paragraph>
                So the whole tower collapses: adjoining exps and logs and roots can't help, the answer had to be there at
                the ground floor times e^g.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Applying it to e^&#123;-x²&#125;.
                </Word> K = ℂ(x), f = 1, g = -x². You need a rational R with R' − 2xR = 1. Write R = P/Q in lowest terms. If
                Q is nonconstant, R' has a pole of one order higher than R at any root of Q, so R' − 2xR has a pole there
                and can't equal 1. So Q is constant and R is a polynomial. Then −2xR has degree deg R + 1 while R' has
                degree deg R − 1, so the left side has degree ≥ 1 unless R = 0, which gives 0 ≠ 1. No such R. Done.
            </Paragraph>
            <Paragraph>
                Rosenlicht's 1972 <Word>
                    <Emphasis />
                    Monthly
                </Word> paper "Integration in finite terms" is about eight pages and contains the whole thing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On "introducing something else."
                </Word> You can always do it. Define erf as the antiderivative and adjoin it; the differential field ℂ(x,
                e^&#123;-x²&#125;, erf) is perfectly good, and Risch-style algorithms work in it. The theorem says only that
                erf is not in the elementary tower over ℂ(x). It's the same move as π being transcendental over ℚ: you don't
                say π doesn't exist, you say the field operations from the starting point don't reach it, and reaching it
                requires a genuinely new generator.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On "prime function."
                </Word> Your framing is right and it has a name: Picard-Vessiot theory, or differential Galois theory.
                Adjoining erf to ℂ(x, e^&#123;-x²&#125;) is a Picard-Vessiot extension for the equation y'' + 2xy' = 0, its
                differential Galois group is the additive group 𝔾ₐ (one new transcendental, no algebraic relations), and
                elementary integrability corresponds to a restricted class of groups. So erf is "irreducible" in exactly the
                sense that √2 is irreducible over ℚ: it generates a nontrivial extension, and the extension has no proper
                subextension where the integral could hide. The analogy with primes is a little weaker, since there's no
                unique factorization of functions, but the analogy with field-theoretic transcendence and Galois groups is
                tight.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-24T15:17:17.481197Z"
        >
            <Origin>01a0345a-1fa3-7ccd-9c04-5ed38658e8fc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I like how it a proof where are you express the idea that a function can be composed of things in an
                elementary way and that this one can’t but then can be added so that you can imagine other things composed
                of it that you don’t think it’s relevant to the prime intuition. There’s no uniqueness to the prime
                factorization of a number. You can order the primes in anyway. You could group them by powers. If there is a
                7^3, you could imagine it being 49 and seven. And that’s not even considering different parts of the number
                being represented additively or using other basic functions. There’s nothing fundamental about the prime
                factorization being the only way to construct the number.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-24T15:17:32.461893Z"
        >
            <Origin>01a0345a-1fa3-7789-81c1-bde3aee553da</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and my hedge was wrong. Uniqueness of factorization is uniqueness of the <Word>
                    <Emphasis />
                    multiset of prime ideals
                </Word>, not of any expression. 7·7·7 and 49·7 and 343 and 300+43 are all expressions of one object; the
                factorization is what's left after you quotient out ordering, grouping, and units. The theorem is about what
                survives that quotient, not about a privileged way of writing.
            </Paragraph>
            <Paragraph>
                Seen that way the differential algebra side is the same shape, not a weaker version of it. What's invariant
                about erf is not any expression for it but the extension it generates: transcendence degree one over ℂ(x,
                e^&#123;-x²&#125;), differential Galois group 𝔾ₐ. You can write the Gaussian CDF as ½(1 + erf(x/√2)), or as
                a Kummer confluent hypergeometric ₁F₁, or as the incomplete gamma γ(½, x²), or as a Faddeeva function. Those
                are 49·7 versus 7·7·7. Every one of them generates the same extension, and the Galois group doesn't see
                which name you used. The "prime" is the extension modulo its automorphisms, exactly as 7 is a prime modulo
                units.
            </Paragraph>
            <Paragraph>
                And the analogue of "no unique way to construct the number" is present too, and it's a theorem: Liouville's
                result says the <Word>
                    <Emphasis />
                    order
                </Word> in which you adjoin exponentials, logarithms, and algebraics to build a tower is irrelevant to
                whether the integral is reachable. Any tower that reaches it collapses to R·e^g at the ground floor. That is
                the differential-algebra version of your observation that grouping 7³ as 49·7 changes nothing.
            </Paragraph>
            <Paragraph>
                So the correct statement of the intuition: an object is prime relative to a set of construction operations
                when the extension it generates has no proper subextension reachable by those operations. Integers under
                multiplication, erf under exp/log/algebraic adjunction. Same definition, same indifference to how it's
                written.
            </Paragraph>
        </Message>
    </Chapter>
);
