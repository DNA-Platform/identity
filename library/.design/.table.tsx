import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Entry } from './.book';

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
                <Entry />
                <Content>$[[ ./The Designs I Am Going With ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./What I Am Asked ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./Every Concept ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./The Library's Home ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./A Reference Manual ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./A Grouping of Projects ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./Layout Ideas ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
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
                <Entry />
                <Content>$[[ ./The Pages ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./The Frame ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./The Concept ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./The Theme ]]</Content>
            </Paragraph>
            <Paragraph>
                <Entry />
                <Content>$[[ ./The Camera ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
