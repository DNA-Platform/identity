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
            <Heading>November 2025</Heading>
            <Paragraph>
                <Content>$[[ ./4 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./5 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Role-based TypeScript type system architecture ]]( claude--Role-based TypeScript type system architecture--6fc035ef )</Content>
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
