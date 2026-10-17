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
                <Content>$[[ ./28 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Investing around Ukraine war outcomes ]]</Content>
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
