import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Index } from '../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>The story</Heading>
            <Paragraph>
                <Content>$[[ ./Starting from the audit ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Claudes Design ]]</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Synopsis ]]</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Table of Contents ]]</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>The designs</Heading>
            <Paragraph>
                <Content>$[[ ./The Conversation's Page ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Project's Page ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Conversations at a Thousand ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
