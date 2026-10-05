import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Shelfmark } from '../.manual/.book';

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
    </Chapter>
);
