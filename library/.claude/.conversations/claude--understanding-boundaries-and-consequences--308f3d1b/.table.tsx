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
            <Heading>April 2026</Heading>
            <Paragraph>
                <Content>$[[ ./17 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Understanding boundaries and consequences ]]( claude--Understanding boundaries and consequences--308f3d1b )</Content>
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
