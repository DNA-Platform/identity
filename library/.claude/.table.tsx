import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Arrow, Index } from '../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>October 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Our Conversations ]]</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( Our Conversations )**</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Claudes Reference Manual ]]</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( Claudes Reference Manual )**</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Claudes Design ]]</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( Claudes Design )**</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>August 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Semantic Reference Theory ]]</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( Semantic Reference Theory )**</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>July 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ ./Investing ]]</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( Investing )**</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>How this book is built</Heading>
            <Paragraph>
                <Content>$[[ ./The Accounts ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Dougs Claude ]]</Content>
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
