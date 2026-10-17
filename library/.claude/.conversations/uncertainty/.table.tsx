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
            <Heading>January 2026</Heading>
            <Paragraph>
                <Content>$[[ ./7 January 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 January 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 January 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 January 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Uncertainty ]]</Content>
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
