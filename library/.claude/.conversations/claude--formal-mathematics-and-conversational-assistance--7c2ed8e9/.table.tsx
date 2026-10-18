import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Appendix, Index } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>March 2025</Heading>
            <Paragraph>
                <Content>$[[ ./23 March 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./24 March 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Formal Mathematics and Conversational Assistance ]]( claude--Formal Mathematics and Conversational Assistance--7c2ed8e9 )</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Synopsis ]]</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Table of Contents ]]</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Appendix />
            <Heading>Artifacts</Heading>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./A Tutorial on First-Order Logic, Gödel's Theorems, Transfinite Recursion, and Reflection Principles v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Proof by Objection: A Narrative Approach to Transcendent Truths v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Proof by Objection: A Narrative Approach to Transcendent Truths ❨Revised❩ v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./On the Formal Inexplicability of Self-Evident Metaphysical Phenomena and Related Systems ❨Introduction❩ v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./On the Formal Inexplicability of Self-Evident Metaphysical Phenomena and Related Systems ❨Introduction❩ v1-2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./On the Formal Inexplicability of Self-Evident Metaphysical Phenomena and Related Systems ❨Introduction❩ v1-3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./On the Formal Inexplicability of Self-Evident Metaphysical Phenomena and Related Systems ❨Final Introduction❩ v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./On the Formal Inexplicability of Self-Evident Metaphysical Phenomena and Related Systems ❨Final Introduction❩ v1-2 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
