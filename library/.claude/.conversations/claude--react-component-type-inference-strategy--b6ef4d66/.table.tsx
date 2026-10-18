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
            <Heading>September 2025</Heading>
            <Paragraph>
                <Content>$[[ ./9 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ React Component Type Inference Strategy ]]( claude--React Component Type Inference Strategy--b6ef4d66 )</Content>
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
