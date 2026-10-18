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
                <Content>$[[ ./17 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./23 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./24 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Ana Grid II ]]( claude--Ana Grid II--c4358792 )</Content>
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
