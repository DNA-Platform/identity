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
                <Content>$[[ Chemistry.ts Framework Testing ]]( claude--Chemistry..ts Framework Testing--ef824a29 )</Content>
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
                <Content>$[[ ./View Methods Test - page..tsx v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./chemistry-framework v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./chemistry-framework v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./chemistry-framework v3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./chemistry-framework v4 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./chemistry-framework v5 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./chemistry-framework v6 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./chemistry-framework v7 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./chemistry-framework v8 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
