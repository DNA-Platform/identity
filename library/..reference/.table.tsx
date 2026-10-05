import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, Table, TableOfContents, Title, Word } from '@dna-platform/public';

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
            <Table />
            <Heading>The Catalogue</Heading>
            <Paragraph>
                <Word>Book</Word>
                <Word>What it is</Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>[[ Dougs Story ]]**</Content>
                </Word>
                <Word>
                    <Content>$[[ my own account ]]( Dougs Story / Synopsis )</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>[[ Dougs Design ]]**</Content>
                </Word>
                <Word>
                    <Content>$[[ the design of this library ]]( Dougs Design / Synopsis )</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>[[ Dougs Reference Manual ]]**</Content>
                </Word>
                <Word>
                    <Content>$[[ the parts this library is built with ]]( Dougs Reference Manual / Synopsis )</Content>
                </Word>
            </Paragraph>
        </Section>
    </Chapter>
);
