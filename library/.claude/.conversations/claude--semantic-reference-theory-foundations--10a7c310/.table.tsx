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
                <Content>$[[ ./20 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./21 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./22 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--10a7c310 )</Content>
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
