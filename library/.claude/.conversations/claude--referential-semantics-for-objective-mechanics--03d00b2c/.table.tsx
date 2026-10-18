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
            <Heading>February 2026</Heading>
            <Paragraph>
                <Content>$[[ ./24 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./25 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./26 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Referential Semantics for Objective Mechanics ]]( claude--Referential Semantics for Objective Mechanics--03d00b2c )</Content>
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
            <Heading>March 2026</Heading>
            <Paragraph>
                <Content>$[[ ./1 March 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
