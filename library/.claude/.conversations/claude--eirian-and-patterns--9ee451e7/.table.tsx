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
            <Heading>August 2025</Heading>
            <Paragraph>
                <Content>$[[ ./10 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Eirian &amp; Patterns ]]( claude--Eirian &amp; Patterns--9ee451e7 )</Content>
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
                <Content>$[[ ./Pattern App Trello Cards v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Pattern App Trello Cards v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Card: Create Basic HTML with Embedded SVG Pattern v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Card: Setup Next..js Pattern App with Static Export v1 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
