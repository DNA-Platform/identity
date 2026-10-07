import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Appendix, Arrow, Index } from '../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>Contents</Heading>
            <Paragraph>
                <Content>$[[ Dougs Library ]]</Content>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Dougs Story ]]</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( Dougs Story )**</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Dougs Design ]]</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( Dougs Design )**</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Dougs Reference Manual ]]</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( Dougs Reference Manual )**</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ ./Synopsis ]]</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Table of Contents ]]</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Appendix />
            <Heading>How this book is built</Heading>
            <Paragraph>
                <Content>$[[ ./The Catalogue ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
