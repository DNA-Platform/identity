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
                <Content>$[[ ./25 January 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./26 January 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 January 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Is there any special connectio… ]]</Content>
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
