import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing Reality Check v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing Reality Check at version 1</Heading>
            <Paragraph>
                📊 <Word>
                    <Bold />
                    QUANTUM COMPUTING REALITY CHECK
                </Word> 📊
            </Paragraph>
            <Paragraph>The truth about quantum computing breaking encryption might surprise you...</Paragraph>
            <Paragraph>
                🧮 Quantum Progress Report: • 2001: Factored 15 • 2012: Factored 21 • 2022: Factored 21 → 35 • Needed to
                break RSA: 3,072+ bits
            </Paragraph>
            <Paragraph>
                📈 The Math Doesn't Lie: At current rates of progress, quantum computers won't break today's encryption
                until approximately THE YEAR 54,080 C.E.
            </Paragraph>
            <Paragraph>
                💭 Skeptical? Consider: • Quantum error increases exponentially with qubit count • We need ~3,300 logical
                qubits for RSA-breaking • Post-quantum cryptography is already being implemented (2022-2030) • Encryption
                complexity grows faster than quantum capabilities
            </Paragraph>
            <Paragraph>
                🔍 As mathematician Richard Gil points out, the noise scaling problem creates a fundamental barrier that may
                be physically impossible to overcome.
            </Paragraph>
            <Paragraph>
                "We haven't made it to 1 fault-tolerant qubit yet and we need to get 3,300 of them." — Doug
            </Paragraph>
            <Paragraph>
                🤔 Is quantum computing the ultimate vaporware? The numbers suggest we might be chasing an impossible
                dream...
            </Paragraph>
            <Paragraph>
                References: &#91;1&#93; Vandersypen, L.M.K., et al. (2001). "Experimental realization of Shor's quantum
                factoring algorithm using nuclear magnetic resonance." Nature, 414(6866) &#91;2&#93; Martín-López, E., et
                al. (2012). "Experimental realization of Shor's quantum factoring algorithm using qubit recycling." Nature
                Photonics, 6(11) &#91;3&#93; Shi, Y., et al. (2022). "Quantum optimization using variational algorithms on
                near-term quantum devices." Science Advances, 8(43) &#91;4&#93; NIST (2022). "Post-Quantum Cryptography
                Standardization"
            </Paragraph>
            <Paragraph>#QuantumComputing #Cryptography #TechReality #DataSecurity #QuantumSkepticism</Paragraph>
        </Section>
    </Chapter>
);
