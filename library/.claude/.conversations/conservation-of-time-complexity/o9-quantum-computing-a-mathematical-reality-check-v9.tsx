import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing: A Mathematical Reality Check v9 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing: A Mathematical Reality Check at version 9</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Quantum Computing: A Mathematical Reality Check
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
            <Paragraph>Let's check if the math agrees.</Paragraph>
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
            <Paragraph>
                <Word>
                    <Bold />
                    Calculation 1: Linear Extrapolation
                </Word> Converting progress to bits: log₂(15) = 3.91 bits log₂(21) = 4.39 bits log₂(35) = 5.13 bits
            </Paragraph>
            <Paragraph>Annual progress rate: (5.13 - 3.91) ÷ 21 years = 0.059 bits/year</Paragraph>
            <Paragraph>Time to reach 3072-bit RSA: (3072 - 5.13) ÷ 0.059 = 52,055 years</Paragraph>
            <Paragraph>
                Target year for RSA-breaking capability: 2025 + 52,055 = 54,080 CE (or ~50,000 years after the
                implementation of post-quantum cryptography)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Calculation 2: Exponential Coherence Problem
                </Word> Quantum error rate per qubit operation: ε = 10⁻³ (0.1%) Required logical error rate for 3072-bit
                RSA: δ = 10⁻¹⁵
            </Paragraph>
            <Paragraph>
                Physical qubits needed per logical qubit with surface code: n ≈ (log(δ) ÷ log(ε))² n ≈ (log(10⁻¹⁵) ÷
                log(10⁻³))² n ≈ (15 ÷ 3)² = 25
            </Paragraph>
            <Paragraph>Total physical qubits for 4000 logical qubits: 4000 × 25 = 100,000 physical qubits</Paragraph>
            <Paragraph>
                Error propagation with qubit interaction (conservative model): System error ≈ 1 - (1 - ε)^(N²) With N =
                100,000: System error ≈ 1 - (0.999)^(10,000,000,000) System error → 1 (virtually certain failure)
            </Paragraph>
            <Paragraph>
                Resources needed scale exponentially, potentially negating quantum advantage when fault tolerance is
                addressed.
            </Paragraph>
            <Paragraph>
                The math is clear: solving the quantum threat 50,000 years before it materializes might be the most
                impressive feat of technological foresight in human history.
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
                &#91;1&#93; Gidney &amp; Ekerå (2021). Quantum, 5, 433 &#91;2&#93; Fowler et al. (2012). Physical Review A,
                86(3)
            </Paragraph>
        </Section>
    </Chapter>
);
