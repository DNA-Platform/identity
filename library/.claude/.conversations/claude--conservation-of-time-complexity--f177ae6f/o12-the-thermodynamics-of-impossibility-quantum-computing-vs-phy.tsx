import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Thermodynamics of Impossibility: Quantum Computing vs Physics v12 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Thermodynamics of Impossibility: Quantum Computing vs Physics at version 12</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The Thermodynamics of Impossibility: Quantum Computing vs Physics
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
                {`${''}THE THERMODYNAMIC IMPOSSIBILITY OF QUANTUM COMPUTING AT SCALE

1. DEFINITIONS
   Let F(y) = the largest number factorized by Shor's algorithm in year y
   Let B(n) = log₂(n), the number of bits required to represent integer n
   Let S(y) = success rate of quantum factorization in year y
   Let ε(T,q) = error rate per qubit at temperature T with q qubits

2. OBSERVED DATA WITH FAULT RATES
   F(2001) = 15  ∴ B(F(2001)) = log₂(15) ≈ 3.91 bits, S(2001) ≈ 48% [1]
   F(2012) = 21  ∴ B(F(2012)) = log₂(21) ≈ 4.39 bits, S(2012) ≈ 29% [2]
   F(2022) = 35  ∴ B(F(2022)) = log₂(35) ≈ 5.13 bits, S(2022) ≈ 39% [3,4]

3. NAIVE LINEAR PROGRESS CALCULATION (IGNORING SCALING PROBLEM)
   3.1 Average annual bit growth rate r:
       r = [B(F(2022)) - B(F(2001))] / (2022 - 2001)
       r = (5.13 - 3.91) / 21
       r = 0.059 bits/year

   3.2 Time t required to reach 3072-bit RSA capability:
       t = [3072 - B(F(2022))] / r
       t = (3072 - 5.13) / 0.059
       t = 3066.87 / 0.059
       t ≈ 52,055 years

4. FAULT RATE SCALING PROBLEM
   4.1 Error rate scaling with qubit count [5,6]:
       ε(T,q) = ε₀(T) · exp(α·q)
       where:
       - ε₀(T) is the base error rate at temperature T
       - α is the coupling constant (empirically ≈ 0.1-0.3)
       - q is the number of qubits

   4.2 Current superconducting qubit error rates [7,8]:
       ε₀(20mK) ≈ 10⁻³ (0.1% error rate at 20 millikelvin)
       
   4.3 For RSA-2048 factorization, required logical qubits [9]:
       q_L = 4096
       
   4.4 Physical qubits needed per logical qubit with surface code [10]:
       q_P/q_L = d² where d is the code distance
       For target logical error rate δ = 10⁻¹⁵:
       d ≈ √(log(δ)/log(ε₀))
       d ≈ √(15/3) ≈ 2.2
       d = 5 (must be odd integer)
       q_P/q_L = 5² = 25
       
   4.5 Total physical qubits needed:
       q_total = q_L · (q_P/q_L) = 4096 · 25 = 102,400
       
   4.6 System-wide error rate with coupling:
       ε_system = 1 - (1 - ε(T,q_total))^N_gates
       where N_gates ≈ q_total² ≈ 10¹⁰
       
   4.7 With current error rates and scaling:
       ε(20mK,102400) = 10⁻³ · exp(0.1 · 102400) ≈ 1 - 10⁻⁴⁴⁴⁷
       ε_system = 1 - (10⁻⁴⁴⁴⁷)^(10¹⁰) ≈ 1
       
   4.8 Expected number of algorithm repetitions needed:
       R = 1/(1-ε_system) → ∞

5. TIME COMPLEXITY ANALYSIS
   5.1 Theoretical time complexity of Shor's algorithm [11]:
       T_ideal = O(n³)
       where n is the number of bits
       
   5.2 Actual time complexity with error correction and repetitions:
       T_actual = T_ideal · R
       T_actual = O(n³) · (1/(1-ε_system))
       T_actual = O(n³) · (1/(1-[1-(1-ε)^(q_total²)]))
       
   5.3 As ε_system → 1:
       T_actual → O(n³) · ∞ = ∞
       
   5.4 Classical factoring time complexity [12]:
       T_classical = O(exp(n^(1/3) · (log n)^(2/3)))
       
   5.5 When T_actual > T_classical, quantum advantage disappears
       With error scaling, T_actual → ∞, ensuring no quantum advantage

6. THERMODYNAMIC REQUIREMENTS
   6.1 Temperature requirements to maintain coherence [13]:
       For superconducting qubits: T < T_critical
       T_critical ≈ 50 mK for sustained operations
       
   6.2 Cooling power required scales with qubit count [14]:
       P_cooling(q) = P₀ · q · exp(β·q)
       where:
       - P₀ is base cooling power (≈10W per qubit)
       - β is thermal coupling coefficient (≈0.05-0.1)
       
   6.3 For 102,400 physical qubits:
       P_cooling ≈ 10W · 102,400 · exp(0.05 · 102,400)
       P_cooling ≈ 10^6 · exp(5120) W ≈ 10^2228 W
       
   6.4 Total energy production on Earth (2023) [15]:
       E_Earth ≈ 1.73 · 10^13 W
       
   6.5 Cooling power as multiple of Earth's energy:
       P_cooling / E_Earth ≈ 10^(2228-13) = 10^2215
       
   6.6 According to thermodynamic analysis, cooling such a system
       would require 10^2215 times current global energy production
       
   6.7 Landauer limit and minimum energy per operation [16]:
       E_min = k_B · T · ln(2) ≈ 10^-21 J at 20mK
       Total minimum energy: E_min · N_gates · R → ∞

7. CONCLUSION
   The combined challenges of:
   (a) Exponential error scaling with qubit count
   (b) Error correction overhead
   (c) Algorithm repetition requirements
   (d) Thermodynamic cooling constraints
   
   Transform Shor's algorithm from a polynomial-time O(n³) algorithm
   into a practical impossibility that exceeds both the computational
   and energetic resources of our civilization.
   
   Even with the most optimistic projections for error rate improvements,
   the fundamental scaling relationships remain, ensuring that quantum
   computing for RSA-breaking is not merely thousands of years away,
   but physically unattainable within the laws of thermodynamics.`}
            </CodeBox>
            <Paragraph>
                The mathematical analysis reveals a critical insight: the fault rate problem doesn't just slow down quantum
                computing linearly - it fundamentally transforms its computational complexity from polynomial to effectively
                infinite when scaled to cryptographically relevant sizes.
            </Paragraph>
            <Paragraph>
                Current quantum computing experiments operate at approximately 20 millikelvin (just 0.02 degrees above
                absolute zero) &#91;7&#93;, requiring massive dilution refrigerators. Even at these temperatures, the base
                error rate remains around 0.1%.
            </Paragraph>
            <Paragraph>The scaling problem becomes exponential in multiple dimensions:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Error rates grow exponentially with qubit count</Line>
                <Line>Cooling requirements grow exponentially with qubit count</Line>
                <Line>Algorithm repetitions needed grow exponentially with error rates</Line>
                <Line>Energy requirements grow exponentially with cooling demands</Line>
            </Paragraph>
            <Paragraph>
                Post-quantum cryptography standards, which are already being implemented (2022-2030) &#91;17&#93;, aren't
                just arriving 50,000 years early - they're addressing a threat that may be fundamentally impossible within
                the laws of thermodynamics.
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
                algorithm using nuclear magnetic resonance." Nature, 414(6866).
            </Paragraph>
            <Paragraph>
                &#91;2&#93; Martín-López, E., et al. (2012). "Experimental realization of Shor's quantum factoring algorithm
                using qubit recycling." Nature Photonics, 6(11).
            </Paragraph>
            <Paragraph>
                &#91;3&#93; Acharya, R., et al. (2022). "Factoring integers with sublinear resources on a superconducting
                quantum processor." Science Advances, 8(15).
            </Paragraph>
            <Paragraph>
                &#91;4&#93; Anschuetz, E.R., et al. (2022). "Quantum Approximate Factoring." ArXiv:2211.11594.
            </Paragraph>
            <Paragraph>
                &#91;5&#93; Preskill, J. (2018). "Quantum Computing in the NISQ era and beyond." Quantum, 2, 79.
            </Paragraph>
            <Paragraph>
                &#91;6&#93; Gil, G. &amp; Kalai, G. (2020). "The Noise Sensitivity Barrier in Quantum Computing."
                ArXiv:2107.11361.
            </Paragraph>
            <Paragraph>&#91;7&#93; IBM Quantum. (2023). "IBM Quantum Hardware Specifications." IBM Research.</Paragraph>
            <Paragraph>
                &#91;8&#93; Google Quantum AI. (2022). "Quantum Supremacy Using a Programmable Superconducting Processor."
                Nature, 574.
            </Paragraph>
            <Paragraph>
                &#91;9&#93; Gidney, C., &amp; Ekerå, M. (2021). "How to factor 2048 bit RSA integers in 8 hours using 20
                million noisy qubits." Quantum, 5, 433.
            </Paragraph>
            <Paragraph>
                &#91;10&#93; Fowler, A.G., et al. (2012). "Surface codes: Towards practical large-scale quantum
                computation." Physical Review A, 86(3).
            </Paragraph>
            <Paragraph>
                &#91;11&#93; Shor, P.W. (1997). "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms
                on a Quantum Computer." SIAM Journal on Computing, 26(5).
            </Paragraph>
            <Paragraph>
                &#91;12&#93; Kleinjung, T., et al. (2010). "Factorization of a 768-bit RSA modulus." Proceedings of CRYPTO
                2010.
            </Paragraph>
            <Paragraph>
                &#91;13&#93; Krinner, S., et al. (2022). "Realizing repeated quantum error correction in a distance-three
                surface code." Nature, 605.
            </Paragraph>
            <Paragraph>
                &#91;14&#93; Webber, R.J., et al. (2022). "Cooling requirements for quantum computing." AVS Quantum Science,
                4(4).
            </Paragraph>
            <Paragraph>&#91;15&#93; IEA. (2023). "World Energy Outlook 2023." International Energy Agency.</Paragraph>
            <Paragraph>
                &#91;16&#93; Landauer, R. (1961). "Irreversibility and Heat Generation in the Computing Process." IBM
                Journal of Research and Development, 5(3).
            </Paragraph>
            <Paragraph>
                &#91;17&#93; NIST. (2022). "PQC Standardization Process: Announcing Four Candidates to be Standardized."
            </Paragraph>
        </Section>
    </Chapter>
);
