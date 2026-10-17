import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing vs Physics: Why Breaking Encryption Is Impossible v13 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing vs Physics: Why Breaking Encryption Is Impossible at version 13</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Quantum Computing vs Physics: Why Breaking Encryption Is Impossible
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
                In 2001, quantum computers could factor 15 using NMR techniques. In 2012, they reached 21 using photonic
                quantum computing. In 2022, after billions in funding: 35 using a superconducting processor.
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
                    WHY LINEAR EXTRAPOLATION COMPLETELY MISSES THE POINT
                </Word>
            </Paragraph>
            <Paragraph>
                A linear extrapolation of quantum factoring progress would suggest it might take around 52,000 years to
                break RSA encryption. This calculation is:
            </Paragraph>
            <CodeBox>
                {`Progress: 15 (2001) → 21 (2012) → 35 (2022)
Converted to bits: 3.91 → 4.39 → 5.13
Average annual growth: 0.059 bits/year
Gap to 3072-bit RSA: 3072 - 5.13 = 3066.87 bits
Years needed: 3066.87 ÷ 0.059 = 52,055`}
            </CodeBox>
            <Paragraph>
                But this linear approach is fundamentally wrong because quantum computing faces four compounding exponential
                barriers, each of which transforms the challenge from difficult to impossible:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    FACTOR 1: EXPONENTIAL ERROR ACCUMULATION
                </Word>
            </Paragraph>
            <Paragraph>
                As qubit count increases, errors multiply exponentially. Each qubit has an error rate (currently ~0.1% at
                best), and these errors compound. With N qubits, the probability of a completely error-free calculation
                drops as:
            </Paragraph>
            <CodeBox>
                {`P(success) = (1 - error_rate)^N`}
            </CodeBox>
            <Paragraph>For 4000+ logical qubits needed for RSA:</Paragraph>
            <CodeBox>
                {`P(success) = (0.999)^4000 ≈ 0.018`}
            </CodeBox>
            <Paragraph>That's less than a 2% chance of a correct result with perfect qubits.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    FACTOR 2: EXPONENTIAL COOLING REQUIREMENTS
                </Word>
            </Paragraph>
            <Paragraph>
                Quantum coherence requires extremely cold temperatures (currently around 20 millikelvin, or -273.13°C). As
                we add qubits, the cooling power required grows exponentially because:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Each qubit generates heat</Line>
                <Line>Qubits interact, creating additional heat</Line>
                <Line>The more qubits, the harder it is to isolate them from environmental interference</Line>
            </Paragraph>
            <Paragraph>The cooling power grows as:</Paragraph>
            <CodeBox>
                {`Cooling_power ∝ N · e^(αN)`}
            </CodeBox>
            <Paragraph>
                For RSA-breaking scale, the power requirements exceed Earth's total energy production by many orders of
                magnitude.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    FACTOR 3: EXPONENTIAL ERROR CORRECTION OVERHEAD
                </Word>
            </Paragraph>
            <Paragraph>
                To get around the error problem, we need error correction. But this creates another exponential challenge:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Each logical qubit (the ones we actually compute with) requires multiple physical qubits for error
                    correction
                </Line>
                <Line>For reliable computation, we need approximately 1,000-10,000 physical qubits per logical qubit</Line>
                <Line>This means the 4,000 logical qubits needed for RSA would require 4-40 million physical qubits</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    FACTOR 4: EXPONENTIAL VERIFICATION PROBLEM
                </Word>
            </Paragraph>
            <Paragraph>
                Even if we somehow built this system, we face another problem: how do we know it's working correctly?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>For RSA numbers, we can verify results by multiplication</Line>
                <Line>But for other quantum algorithms, verification can be as hard as the original problem</Line>
                <Line>As problem size increases, verification becomes exponentially harder</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    THE REAL CALCULATION: COMBINING THE EXPONENTIAL FACTORS
                </Word>
            </Paragraph>
            <Paragraph>When we combine these exponential barriers, we get:</Paragraph>
            <CodeBox>
                {`1. Required qubits for RSA-2048: ~4,000 logical qubits
2. Physical qubits needed with error correction: ~4-40 million
3. System-wide success probability with current error rates: effectively zero
4. Energy requirements: exceeds planetary resources

Result: Not 52,000 years, but a fundamental physical impossibility`}
            </CodeBox>
            <Paragraph>
                The quantum computing industry doesn't want you to know about these exponential barriers. They focus on
                increasing raw qubit counts without addressing the exponential challenges that make practical quantum
                computing for encryption-breaking a thermodynamic impossibility.
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
        </Section>
    </Chapter>
);
