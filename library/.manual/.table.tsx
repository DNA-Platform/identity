import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, Title, Word } from '@dna-platform/public';
import { TableOfContents } from './.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>The book and its frame</Heading>
            <Paragraph>
                <Content>$[[ ./The Book ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Theme ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Pages ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Frames ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Dougs Reference Manual ]]</Content>
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
            <Heading>What every book has</Heading>
            <Paragraph>
                <Content>$[[ ./The Cover ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Table ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>What a chapter may carry</Heading>
            <Paragraph>
                <Content>$[[ ./The Listing ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Date ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Shelfmark ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Making the library</Heading>
            <Paragraph>
                <Content>$[[ ./Initializing a Library ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Developing a Library ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
