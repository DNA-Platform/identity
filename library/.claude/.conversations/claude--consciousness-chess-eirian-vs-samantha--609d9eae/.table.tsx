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
                <Content>$[[ ./18 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./22 August 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Consciousness Chess - Eirian vs Samantha ]]( claude--Consciousness Chess - Eirian vs Samantha--609d9eae )</Content>
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
