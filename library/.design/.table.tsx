import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, Title, Word } from '@dna-platform/public';
import { Appendix, Index } from '../.manual/.book';
import { TableOfContents } from './o5-the-frame~faces.tsx';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
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
                <Content>$[[ ./Driving the Build ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Bookshelf ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Manual's Page ]]</Content>
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
                <Content>$[[ ./Sketched to Decide ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Sketched from the Build ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The frame on every screen ]]</Content>
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
            <Appendix />
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
            <Paragraph>
                <Content>$[[ ./The Gallery ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Frame ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Print ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
