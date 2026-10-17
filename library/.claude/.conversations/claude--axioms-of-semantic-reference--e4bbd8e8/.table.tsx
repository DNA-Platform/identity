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
            <Heading>October 2025</Heading>
            <Paragraph>
                <Content>$[[ ./10 October 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 October 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Axioms of semantic reference ]]( claude--Axioms of semantic reference--e4bbd8e8 )</Content>
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
                <Content>$[[ ./The Five Axioms of Semantic Reference Theory v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Five Axioms of Semantic Reference Theory v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Five Axioms of Semantic Reference Theory v3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Five Axioms of Semantic Reference Theory v4 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Five Axioms of Semantic Reference Theory v5 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Five Axioms of Semantic Reference Theory v6 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Five Axioms of Semantic Reference Theory v7 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Five Axioms of Semantic Reference Theory v8 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
