import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Appendix, Index } from '../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>The story</Heading>
            <Paragraph>
                <Content>$[[ ./Latitude ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Choosing by number ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Building from the sketches ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Designing together ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The bookshelf, in an evening ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The manual's page, in eight rounds ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Designing this book ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The journal, in seven rounds ]]</Content>
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
            <Heading>The designs</Heading>
            <Paragraph>
                <Content>$[[ ./The Bookshelf ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Manual's Page ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Design Book's Page ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Story's Page ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>The sketches</Heading>
            <Paragraph>
                <Content>$[[ ./Every Concept ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Appendix />
            <Heading>How this book is built</Heading>
            <Paragraph>
                <Content>$[[ ./The Portfolio ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
