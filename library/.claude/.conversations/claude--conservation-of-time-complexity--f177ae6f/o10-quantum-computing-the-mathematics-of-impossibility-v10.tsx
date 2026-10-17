import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing: The Mathematics of Impossibility v10 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing: The Mathematics of Impossibility at version 10</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Quantum Computing: The Mathematics of Impossibility
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
                In 2001, quantum computers could factor 15. In 2012, they reached 21. In 2022, after billions in funding:
                35.
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

2. OBSERVED DATA
   F(2001) = 15  ∴ B(F(2001)) = log₂(15) ≈ 3.91 bits
   F(2012) = 21  ∴ B(F(2012)) = log₂(21) ≈ 4.39 bits
   F(2022) = 35  ∴ B(F(2022)) = log₂(35) ≈ 5.13 bits

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

4. EXPONENTIAL ERROR SCALING
   4.1 Let ε = physical qubit error rate (currently ~10⁻³)
   4.2 Let N = number of physical qubits in system
   4.3 Let δ = target logical error rate for reliable computation

   4.4 Surface code error correction relationship:
       For one logical qubit with error rate δ:
       Physical qubits required n ≈ (log(δ) / log(ε))²

   4.5 For δ = 10⁻¹⁵ (required for RSA factorization):
       n ≈ (log(10⁻¹⁵) / log(10⁻³))²
       n ≈ (15 / 3)²
       n ≈ 25 physical qubits per logical qubit

   4.6 For L = 4000 logical qubits (RSA-breaking requirement):
       Total physical qubits N = L·n = 4000·25 = 100,000

   4.7 Error propagation with qubit interactions:
       System-wide error probability P_error = 1 - (1 - ε)^(N²)
       P_error = 1 - (0.999)^(10¹⁰)
       P_error → 1 (system failure virtually certain)

   4.8 Computational resources R required for error correction:
       R ∝ exp(N)
       As N → 100,000, R → exp(100,000)

   4.9 Classical computing resources C for same task:
       C ∝ exp(n^(1/3))  [Number Field Sieve complexity]
       For n = 3072, C ∝ exp(14.3)

   4.10 When R ≥ C, quantum advantage disappears
       exp(100,000) >> exp(14.3)
       ∴ Quantum advantage negated by error correction overhead

5. CONCLUSION
   By the time quantum computing reaches sufficient capability to break 
   current 3072-bit RSA (year ~54,077), encryption standards will have 
   advanced significantly, maintaining an effectively unbridgeable gap.

   This projection assumes linear progress in quantum capability, which is 
   optimistic given the exponential scaling of error correction resources
   needed as qubit count increases.`}
            </CodeBox>
            <Paragraph>
                The math is clear: solving the quantum threat 50,000 years before it materializes might be the most
                impressive feat of technological foresight in human history.
            </Paragraph>
            <Paragraph>And we still haven't created a single fault-tolerant qubit. Not one.</Paragraph>
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
                &#91;1&#93; Gidney &amp; Ekerå (2021). Quantum, 5, 433 &#91;2&#93; Fowler et al. (2012). Physical Review A,
                86(3)
            </Paragraph>
        </Section>
    </Chapter>
);
