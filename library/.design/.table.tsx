import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';

export default () => (
    <Chapter>
        <TableOfContents />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>The design</Heading>
            <Paragraph>
                <Content>$[[ ./The Designs I Am Going With ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./What I Am Asked ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Every Concept ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Library's Home ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./A Reference Manual ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./A Grouping of Projects ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Layout Ideas ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./A Bookish Page ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Dougs Design ]]</Content>
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
            <Heading>How this book is built</Heading>
            <Paragraph>
                <Content>$[[ ./The Paragraphs ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Concept ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Camera ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
