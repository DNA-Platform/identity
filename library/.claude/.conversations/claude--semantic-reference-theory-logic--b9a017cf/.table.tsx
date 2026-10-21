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
        <Paragraph>
            <Content>$[[ ./Conversation ]]</Content>
        </Paragraph>
        <Paragraph>
            <Parenthetical />
            <Word>
                <Content>$[[ Semantic Reference Theory Logic ]]( claude--Semantic Reference Theory Logic--b9a017cf )</Content>
            </Word>
            <Word>
                <Content>$[[ ./Synopsis ]]</Content>
            </Word>
            <Word>
                <Content>$[[ ./Table of Contents ]]</Content>
            </Word>
        </Paragraph>
        <Section>
            <Appendix />
            <Heading>Artifacts</Heading>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Inheritance Without Recursion: The Single Relation Foundation v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v4 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v5 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v6 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v7 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v8 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v9 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Symbols vs.. Sets: The Opposite Semantics of Self-Inclusion v10 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
