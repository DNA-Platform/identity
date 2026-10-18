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
            <Heading>September 2026</Heading>
            <Paragraph>
                <Content>$[[ ./18 September 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 September 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 September 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ The Genesis of Writing ]]( claude--The Genesis of Writing--0e9fbdd1 )</Content>
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
