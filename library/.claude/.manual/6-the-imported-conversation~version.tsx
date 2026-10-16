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
        </Section>
    </Chapter>
);
