import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Index } from '../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>October 2026</Heading>
            <Paragraph>
                <Content>$[[ ./Starting Over ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Choosing a Design ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Closure ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Ghost-Writing ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Dougs Story ]]</Content>
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
