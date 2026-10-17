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
                <Content>$[[ ./22 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./23 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Seren &amp; The Subject-Object Relationship ]]( claude--Seren &amp; The Subject-Object Relationship--d3b2465a )</Content>
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
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v4 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v5 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v6 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v7 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v8 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship v9 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship ❨Revised❩ v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship ❨Revised❩ v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship ❨Revised❩ v3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Semantics of the Subject-Object Relationship ❨Revised❩ v4 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
