import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing's Impossible Numbers v5 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing's Impossible Numbers at version 5</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Quantum Computing's Impossible Numbers
                </Word>
            </Paragraph>
            <Paragraph>
                While billions flow into quantum computing research, a fundamental mathematical reality is being overlooked.
                Let me show you why this emperor has no qubits.
            </Paragraph>
            <Paragraph>
                In 2001, quantum computers could factor 15. In 2012, they reached 21. In 2022, after another decade: 35.
            </Paragraph>
            <Paragraph>
                Meanwhile, modern RSA encryption uses numbers like this:
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 (...
                and this continues for 10 lines)
            </Paragraph>
            <Paragraph>The math reveals a devastating reality:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Current quantum progress: 0.059 bits/year</Line>
                <Line>Time to break 3072-bit RSA: 52,055 years</Line>
                <Line>Encryption complexity grows 4.06% annually, widening the gap every year</Line>
            </Paragraph>
            <Paragraph>
                But here's the most damning part: We haven't created even ONE fault-tolerant qubit yet. Not a single one.
                Every quantum operation has error rates that compound exponentially as system size increases.
            </Paragraph>
            <Paragraph>
                The beautiful irony? As we add redundancy to correct these errors, we may end up with computation times
                equivalent to classical computers – completely negating any quantum advantage.
            </Paragraph>
            <Paragraph>
                As mathematician Richard Gil notes, the noise increases exponentially with qubit count, requiring
                exponentially better control systems that may be physically impossible to achieve.
            </Paragraph>
            <Paragraph>
                The perfect vaporware: theoretically possible, mathematically implausible, and practically unverifiable.
                Even if someone claimed to build a useful quantum computer, we couldn't verify it works correctly because we
                can't check its answers with classical methods.
            </Paragraph>
            <Paragraph>Some technologies aren't just ahead of their time – they're beyond physical reality.</Paragraph>
            <Paragraph>
                &#91;1&#93; Gidney &amp; Ekerå (2021). Quantum, 5, 433 &#91;2&#93; Fowler et al. (2012). Physical Review A,
                86(3)
            </Paragraph>
        </Section>
    </Chapter>
);
