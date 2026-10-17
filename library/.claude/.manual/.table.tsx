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
            <Heading>What a message of Claude's holds</Heading>
            <Paragraph>
                <Content>$[[ ./The Action and the Result ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Artifact and the Attachment ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Project ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Account ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Origin ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Page ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Pane ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Claudes Reference Manual ]]</Content>
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
            <Heading>What an import writes</Heading>
            <Paragraph>
                <Content>$[[ ./The Imported Conversation ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
