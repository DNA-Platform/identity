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
            <Heading>September 2025</Heading>
            <Paragraph>
                <Content>$[[ ./4 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Formalism Authorship and Axiom Analysis ]]( claude--Formalism Authorship and Axiom Analysis--20b704e8 )</Content>
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
                <Content>$[[ ./Semantic Reference Theory - Formal Foundations v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Architecture of Subjective Experience: Symbols, Literals, and the Semantic Bridge v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Architecture of Subjective Experience: Symbols, Literals, and the Semantic Bridge v2 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
