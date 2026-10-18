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
            <Heading>October 2025</Heading>
            <Paragraph>
                <Content>$[[ ./18 October 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 October 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 October 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ $Chemistry framework design exploration ]]( claude--$Chemistry framework design exploration--e4993df3 )</Content>
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
