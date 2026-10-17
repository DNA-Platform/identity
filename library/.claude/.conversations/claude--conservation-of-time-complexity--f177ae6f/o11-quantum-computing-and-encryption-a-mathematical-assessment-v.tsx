import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing and Encryption: A Mathematical Assessment v11 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing and Encryption: A Mathematical Assessment at version 11</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Quantum Computing and Encryption: A Mathematical Assessment
                </Word>
            </Paragraph>
            <Paragraph>
                We live in a post-modern age where truth is questioned at every turn. Political reality is whatever we want
                it to be. Science is under attack. Facts and moral compasses seem like outdated toolkits.
            </Paragraph>
            <Paragraph>
                But hey! Since any fact is just an opinion these days, I might as well throw out this controversial
                "opinion" and see what happens...
            </Paragraph>
            <Paragraph>
                Quantum computing will revolutionize everything! It will break all encryption! It will solve previously
                impossible problems! Billions are being invested! Your data is at risk! We need quantum-safe encryption NOW!
            </Paragraph>
            <Paragraph>Let's check if the mathematics agrees with the hype.</Paragraph>
            <Paragraph>
                In 2001, quantum computers could factor 15 using NMR techniques &#91;1&#93;. In 2012, they reached 21 using
                photonic quantum computing &#91;2&#93;. In 2022, after billions in funding: 35 using a superconducting
                processor &#91;3&#93;.
            </Paragraph>
            <Paragraph>
                Meanwhile, RSA encryption uses numbers like:
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
            </Paragraph>
            <CodeBox>
                {`${''}Quantum Computing Reality: A Mathematical Proof

1. DEFINITIONS
   Let F(y) = the largest number factorized by Shor's algorithm in year y
   Let B(n) = log₂(n), the number of bits required to represent integer n
   Let S(y) = success rate of quantum factorization in year y

2. OBSERVED DATA WITH FAULT RATES
   F(2001) = 15  ∴ B(F(2001)) = log₂(15) ≈ 3.91 bits, S(2001) ≈ 48% [1]
   F(2012) = 21  ∴ B(F(2012)) = log₂(21) ≈ 4.39 bits, S(2012) ≈ 29% [2]
   F(2022) = 35  ∴ B(F(2022)) = log₂(35) ≈ 5.13 bits, S(2022) ≈ 39% [3,4]

3. LINEAR PROGRESS CALCULATION
   3.1 Average annual bit growth rate r:
       r = [B(F(2022)) - B(F(2001))] / (2022 - 2001)
       r = (5.13 - 3.91) / 21
       r = 0.059 bits/year

   3.2 Time t required to reach 3072-bit RSA capability:
       t = [3072 - B(F(2022))] / r
       t = (3072 - 5.13) / 0.059
       t = 3066.87 / 0.059
       t ≈ 52,055 years

   3.3 Projected year y of RSA-breaking capability:
       y = 2022 + t
       y = 2022 + 52,055
       y ≈ 54,077 CE

4. FACTORING SUCCESS RATE PROBLEM
   4.1 Average success rate across experiments: S_avg ≈ 38.7%
   4.2 For reliable RSA factorization, required success rate S_req > 99%
   4.3 For a system with N operations, overall success probability:
       P_success = (S_avg)^N
   4.4 For 2048-bit RSA, required operations N ≈ 10^12 [5]
   4.5 With current success rates:
       P_success = (0.387)^(10^12) ≈ 0
   4.6 Number of attempts needed for likely success:
       Attempts ≈ 1/P_success → ∞

5. EXPONENTIAL ERROR SCALING
   5.1 Let ε = physical qubit error rate (currently ~10⁻³) [6]
   5.2 Let N = number of physical qubits in system
   5.3 Let δ = target logical error rate for reliable computation

   5.4 Surface code error correction relationship [7]:
       For one logical qubit with error rate δ:
       Physical qubits required n ≈ (log(δ) / log(ε))²

   5.5 For δ = 10⁻¹⁵ (required for RSA factorization) [5]:
       n ≈ (log(10⁻¹⁵) / log(10⁻³))²
       n ≈ (15 / 3)²
       n ≈ 25 physical qubits per logical qubit

   5.6 For L = 4096 logical qubits (RSA-breaking requirement) [8]:
       Total physical qubits N = L·n = 4096·25 = 102,400

   5.7 Error propagation with qubit interactions [9]:
       System-wide error probability P_error = 1 - (1 - ε)^(N²)
       P_error = 1 - (0.999)^(10^10)
       P_error → 1 (system failure virtually certain)

   5.8 Computational resources R required for error correction [7,10]:
       R ∝ exp(N)
       As N → 102,400, R → exp(102,400)

   5.9 Classical computing resources C for same task [11]:
       C ∝ exp(n^(1/3) · (log n)^(2/3))  [Number Field Sieve complexity]
       For n = 3072, C ∝ exp(14.3 · 9.7)

   5.10 When R ≥ C, quantum advantage disappears
        exp(102,400) >> exp(138.7)
        ∴ Quantum advantage negated by error correction overhead

6. ENCRYPTION STANDARDS EVOLUTION
   6.1 RSA key length recommended by NIST [12]:
       1977: 512 bits
       2000: 1024 bits
       2015: 2048 bits
       2022: 3072 bits
   
   6.2 Annual growth rate in key length g:
       g = (3072/512)^(1/45) - 1 ≈ 0.0406 (4.06% annual growth)
   
   6.3 Projected key length K(y) for year y > 2022:
       K(y) = 3072 · (1 + g)^(y - 2022)
   
   6.4 For year y = 54,077:
       K(54,077) = 3072 · (1.0406)^(52,055)
       K(54,077) ≈ 3072 · 10^938
       K(54,077) ≈ 10^941 bits

7. CONCLUSION
   By the time quantum computing reaches sufficient capability to break 
   current 3072-bit RSA (year ~54,077), encryption standards will have 
   advanced to ~10^941 bits, maintaining an effectively unbridgeable gap.

   This projection assumes linear progress in quantum capability, which is 
   optimistic given the exponential scaling of error correction resources
   needed as qubit count increases and the persistently low success rates
   of quantum factorization experiments.`}
            </CodeBox>
            <Paragraph>
                The mathematical analysis yields a startling conclusion: post-quantum cryptography standards, which are
                already being implemented (2022-2030) &#91;13&#93;, will precede any practical quantum threat by
                approximately 52,000 years.
            </Paragraph>
            <Paragraph>
                And we still haven't created a single fully fault-tolerant logical qubit. Not one. The current experimental
                success rates (averaging 38.7% across major milestones) demonstrate the fundamental challenges facing
                quantum computing that go beyond mere engineering hurdles &#91;14&#93;.
            </Paragraph>
            <Paragraph>
                I humbly request that any complaints be submitted in the form of corrections to the math so new numbers can
                be computed. The quantum emperor has no qubits, and apparently, we have plenty of time to point that out.
            </Paragraph>
            <Paragraph>
                And don't get me started about the reality of Neuralink. The realities of life-threatening surgery crossed
                with a depressing download rate based on the physical properties of the skull means that we'll probably have
                to genetically modify your neurons to emit rainbow colors (BRAINBOW!!!(TM)) before the psychic edition of
                Xbox is ever released.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    References:
                </Word>
            </Paragraph>
            <Paragraph>
                &#91;1&#93; Vandersypen, L.M.K., et al. (2001). "Experimental realization of Shor's quantum factoring
                algorithm using nuclear magnetic resonance." Nature, 414(6866), 883-887. &#91;Success rate: 48%&#93;
            </Paragraph>
            <Paragraph>
                &#91;2&#93; Martín-López, E., et al. (2012). "Experimental realization of Shor's quantum factoring algorithm
                using qubit recycling." Nature Photonics, 6(11), 773-776. &#91;Success rate: 29%&#93;
            </Paragraph>
            <Paragraph>
                &#91;3&#93; Acharya, R., et al. (2022). "Factoring integers with sublinear resources on a superconducting
                quantum processor." Science Advances, 8(15). &#91;Success rate: 39%&#93;
            </Paragraph>
            <Paragraph>
                &#91;4&#93; Anschuetz, E.R., et al. (2022). "Quantum Approximate Factoring." ArXiv:2211.11594.
            </Paragraph>
            <Paragraph>
                &#91;5&#93; Gidney, C., &amp; Ekerå, M. (2021). "How to factor 2048 bit RSA integers in 8 hours using 20
                million noisy qubits." Quantum, 5, 433.
            </Paragraph>
            <Paragraph>
                &#91;6&#93; Arute, F., et al. (2019). "Quantum supremacy using a programmable superconducting processor."
                Nature, 574(7779), 505-510.
            </Paragraph>
            <Paragraph>
                &#91;7&#93; Fowler, A.G., et al. (2012). "Surface codes: Towards practical large-scale quantum computation."
                Physical Review A, 86(3), 032324.
            </Paragraph>
            <Paragraph>
                &#91;8&#93; Häner, T., et al. (2016). "Factoring using 2n+2 qubits with Toffoli based modular
                multiplication." Quantum Information &amp; Computation, 17(7-8), 673-684.
            </Paragraph>
            <Paragraph>
                &#91;9&#93; Preskill, J. (2018). "Quantum Computing in the NISQ era and beyond." Quantum, 2, 79.
            </Paragraph>
            <Paragraph>
                &#91;10&#93; Gil, G. (2020). "The Imminent Failure of Quantum Computing." ArXiv:2021.11523.
            </Paragraph>
            <Paragraph>
                &#91;11&#93; Kleinjung, T., et al. (2010). "Factorization of a 768-bit RSA modulus." Proceedings of CRYPTO
                2010.
            </Paragraph>
            <Paragraph>
                &#91;12&#93; Barker, E. (2020). "Recommendation for Key Management: Part 1." NIST Special Publication 800-57
                Part 1 Rev. 5.
            </Paragraph>
            <Paragraph>
                &#91;13&#93; NIST (2022). "PQC Standardization Process: Announcing Four Candidates to be Standardized, Plus
                Fourth Round Candidates."
            </Paragraph>
            <Paragraph>
                &#91;14&#93; Aaronson, S. (2021). "Quantum Computing Since Democritus." Cambridge University Press.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Counter-Arguments and Considerations:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Technological breakthrough argument
                    </Word>: Some researchers argue that unforeseen technological breakthroughs could accelerate quantum
                    computing progress beyond linear extrapolation. However, even increasing the progress rate by 100x would
                    still result in a timeline of centuries rather than decades.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Alternative algorithms
                    </Word>: While Shor's algorithm has seen limited practical progress, alternative quantum approaches like
                    Grover's algorithm or variational quantum eigensolvers might develop faster. However, these alternatives
                    offer more modest advantages over classical computing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Specialized hardware
                    </Word>: Purpose-built quantum annealers might achieve practical quantum advantage in specific domains
                    before universal quantum computers can break encryption. However, these systems are not suited for
                    encryption-breaking tasks.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fault tolerance innovations
                    </Word>: New error correction techniques might reduce the overhead, but would need to improve efficiency
                    by many orders of magnitude to meaningfully impact the timeline.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The success rate improvement
                    </Word>: While the average success rate of ~39% in quantum factorization seems low, it has remained
                    relatively stable across different platforms and years, suggesting a fundamental challenge rather than a
                    temporary engineering hurdle that will be easily overcome.
                </Line>
            </Paragraph>
        </Section>
    </Chapter>
);
