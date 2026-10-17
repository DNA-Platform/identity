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
            <Heading>March 2026</Heading>
            <Paragraph>
                <Content>$[[ ./26 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Hedging geopolitical oil disruption with US supply alternatives ]]</Content>
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
            <Heading>April 2026</Heading>
            <Paragraph>
                <Content>$[[ ./7 April 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
