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
                <Content>$[[ ./25 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ AI Learning Process Analysis ]]( claude--AI Learning Process Analysis--e8f8da16 )</Content>
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
                <Content>$[[ ./Chemistry Framework Demo Application v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Fixed Chemistry..ts with Two-Phase Rendering v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Clean Chemistry Solution - Blueprint Pattern v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Refactored Reactivate Functions v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Flexible Reactivation System v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Simplified Reactivation System v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Minimal Edit for Reusable Reactivate v1 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
