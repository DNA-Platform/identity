import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, Title, Word } from '@dna-platform/public';
import { Shelfmark, TableOfContents } from '../.manual/.book';

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
                    <Shelfmark>[[ Dougs Story ]]**</Shelfmark>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Dougs Design ]]</Content>
                </Word>
                <Word>
                    <Shelfmark>[[ Dougs Design ]]**</Shelfmark>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Dougs Reference Manual ]]</Content>
                </Word>
                <Word>
                    <Shelfmark>[[ Dougs Reference Manual ]]**</Shelfmark>
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
                <Content>$[[ ./The Bars ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Shelf ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Black and Sky ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
