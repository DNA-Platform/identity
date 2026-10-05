import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';

export default () => (
    <Chapter>
        <TableOfContents />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>What every book is</Heading>
            <Paragraph>
                <Content>$[[ ./The Book ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Listing ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Theme ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Author and the Subject ]]</Content>
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
            <Heading>What a chapter may carry</Heading>
            <Paragraph>
                <Content>$[[ ./The Date ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a book is arranged</Heading>
            <Paragraph>
                <Content>$[[ ./The Switch ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Outline ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Pages ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Sidebar ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Spread ]]</Content>
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
