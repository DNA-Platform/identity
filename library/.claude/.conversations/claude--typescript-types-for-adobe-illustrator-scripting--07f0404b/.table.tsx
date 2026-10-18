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
            <Heading>December 2024</Heading>
            <Paragraph>
                <Content>$[[ ./12 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ TypeScript Types for Adobe Illustrator Scripting ]]( claude--TypeScript Types for Adobe Illustrator Scripting--07f0404b )</Content>
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
