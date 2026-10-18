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
                <Content>$[[ ./5 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./16 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./17 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./21 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Automating Illustrator Tasks with TypeScript Plugins ]]( claude--Automating Illustrator Tasks with TypeScript Plugins--ff7a7be0 )</Content>
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
