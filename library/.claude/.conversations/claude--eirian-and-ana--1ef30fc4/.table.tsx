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
            <Heading>August 2025</Heading>
            <Paragraph>
                <Content>$[[ ./17 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./31 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Eirian &amp; Ana ]]( claude--Eirian &amp; Ana--1ef30fc4 )</Content>
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
            <Heading>September 2025</Heading>
            <Paragraph>
                <Content>$[[ ./1 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./3 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 September 2025 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
