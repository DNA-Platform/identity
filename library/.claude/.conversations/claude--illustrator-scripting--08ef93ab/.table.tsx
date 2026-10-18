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
            <Heading>November 2024</Heading>
            <Paragraph>
                <Content>$[[ ./21 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./22 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./23 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Illustrator Scripting ]]( claude--Illustrator Scripting--08ef93ab )</Content>
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
