import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The 50,000-Year Quantum Computing Myth v4 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The 50,000-Year Quantum Computing Myth at version 4</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The 50,000-Year Quantum Computing Myth
                </Word>
            </Paragraph>
            <Paragraph>
                Billions of dollars are being poured into quantum computing with promises that it will "break all
                encryption" and "revolutionize computing." But what if the entire field is chasing a mathematical
                impossibility?
            </Paragraph>
            <Paragraph>I ran the numbers, and the results are startling.</Paragraph>
            <Paragraph>
                In 2001, quantum computers could factor 15. In 2012, they reached 21. In 2022, after another decade and
                countless billions: 35.
            </Paragraph>
            <Paragraph>That's not a typo. Thirty-five.</Paragraph>
            <Paragraph>Meanwhile, cracking modern encryption requires factoring numbers with 2048-4096 bits.</Paragraph>
            <Paragraph>Here's the brutal math no one is talking about:</Paragraph>
            <Paragraph>
                Current quantum progress rate = 0.059 bits/year Time to break today's 3072-bit RSA = (3072 - 5.13) ÷ 0.059 =
                52,055 years
            </Paragraph>
            <Paragraph>Even worse, encryption standards grow at 4.06% annually, making the gap wider every year.</Paragraph>
            <Paragraph>
                The fundamental problem? Quantum decoherence scales exponentially with qubit count. Each additional qubit
                makes the system exponentially more likely to produce errors, requiring exponentially more resources to
                maintain stability.
            </Paragraph>
            <Paragraph>
                This isn't like the early days of classical computing. It's a fundamental physical barrier that may be
                impossible to overcome.
            </Paragraph>
            <Paragraph>
                The field can't even produce a single fault-tolerant qubit, yet we're supposed to believe they'll soon have
                thousands?
            </Paragraph>
            <Paragraph>
                Before investing in quantum startups or worrying about quantum hackers, do the math yourself.
            </Paragraph>
            <Paragraph>Some bubbles take 50,000 years to pop.</Paragraph>
            <Paragraph>
                &#91;1&#93; Gidney &amp; Ekerå (2021). Quantum, 5, 433 &#91;2&#93; Fowler et al. (2012). Physical Review A,
                86(3)
            </Paragraph>
        </Section>
    </Chapter>
);
