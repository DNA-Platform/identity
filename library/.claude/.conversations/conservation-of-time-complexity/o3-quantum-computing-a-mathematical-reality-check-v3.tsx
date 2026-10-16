import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing: A Mathematical Reality Check v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing: A Mathematical Reality Check at version 3</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Quantum Computing: A Mathematical Reality Check
                </Word>
            </Paragraph>
            <Paragraph>After decades of quantum hype, let's do some actual math:</Paragraph>
            <Paragraph>Quantum factorization progress:</Paragraph>
            <Paragraph>
                <List />
                <Line>2001: 15</Line>
                <Line>2012: 21</Line>
                <Line>2022: 35</Line>
            </Paragraph>
            <Paragraph>RSA encryption: 2048-4096 bits</Paragraph>
            <Paragraph>
                Quantum progress rate = 0.059 bits/year Years to break 3072-bit RSA = (3072 - 5.13) ÷ 0.059 = 52,055 years
            </Paragraph>
            <Paragraph>
                Meanwhile, encryption complexity grows at 4.06% annually. By 2100: RSA ≈ 66,594 bits vs. quantum capability
                ≈ 9.7 bits
            </Paragraph>
            <Paragraph>The gap is widening, not closing.</Paragraph>
            <Paragraph>
                I'll believe quantum computing when they build ONE fully fault-tolerant qubit. We're still at zero.
            </Paragraph>
            <Paragraph>This isn't skepticism. This is arithmetic.</Paragraph>
            <Paragraph>
                &#91;1&#93; Gidney &amp; Ekerå (2021). Quantum, 5, 433 &#91;2&#93; Fowler et al. (2012). Physical Review A,
                86(3)
            </Paragraph>
        </Section>
    </Chapter>
);
