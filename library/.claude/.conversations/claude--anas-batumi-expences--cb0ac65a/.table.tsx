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
            <Heading>June 2026</Heading>
            <Paragraph>
                <Content>$[[ ./19 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./21 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./22 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./23 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./24 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./25 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./26 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Ana's Batumi Expences ]]( claude--Ana's Batumi Expences--cb0ac65a )</Content>
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
            <Heading>July 2026</Heading>
            <Paragraph>
                <Content>$[[ ./2 July 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
