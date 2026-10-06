import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, Title, Word } from '@dna-platform/public';
import { TableOfContents } from './o1-the-sheet~faces.tsx';

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
                <Content>$[[ ./Starting Over ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Choosing a Design ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Closure ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Ghost-Writing ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Dougs Story ]]</Content>
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
                <Content>$[[ ./The Sheet ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
