import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, Title, Word } from '@dna-platform/public';
import { Index, TableOfContents } from '../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>The run</Heading>
            <Paragraph>
                <Content>$[[ ./The Importer ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Export ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Record ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Dougs Importer ]]</Content>
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
            <Heading>From the export to a book</Heading>
            <Paragraph>
                <Content>$[[ ./The Pairing ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Ledger ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Thread ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Writing ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Books ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Check ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>The imports</Heading>
            <Paragraph>
                <Content>$[[ ./DNA Legacy ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./DNA ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
