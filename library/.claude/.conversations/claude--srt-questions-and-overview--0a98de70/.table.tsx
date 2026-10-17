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
            <Heading>November 2025</Heading>
            <Paragraph>
                <Content>$[[ ./4 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./5 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./21 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ SRT questions and overview ]]( claude--SRT questions and overview--0a98de70 )</Content>
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
