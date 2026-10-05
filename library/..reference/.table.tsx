import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';

export default () => (
    <Chapter>
        <TableOfContents />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>Contents</Heading>
            <Paragraph>
                <Content>$[[ ./The Shelves ]]</Content>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Dougs Story ]]</Content>
                </Word>
                <Word>
                    <Content>[[ □ ]]( Dougs Story )**</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Dougs Design ]]</Content>
                </Word>
                <Word>
                    <Content>[[ □ ]]( Dougs Design )**</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Dougs Reference Manual ]]</Content>
                </Word>
                <Word>
                    <Content>[[ □ ]]( Dougs Reference Manual )**</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Dougs Library ]]</Content>
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
                <Content>$[[ ./The Two Bars ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
