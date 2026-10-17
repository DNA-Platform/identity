import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Index } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>July 2026</Heading>
            <Paragraph>
                <Content>$[[ ./4 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./5 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Relationships &amp; Inheriance ]]( claude--Relationships &amp; Inheriance--1152bae6 )</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Synopsis ]]</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Table of Contents ]]</Content>
                </Word>
            </Paragraph>
        </Section>
    </Chapter>
);
