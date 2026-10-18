import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Index } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>March 2026</Heading>
            <Paragraph>
                <Content>$[[ ./23 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./24 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./25 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Building and practicing a personal vocabulary ]]( claude--Building and practicing a personal vocabulary--2fb9debb )</Content>
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
            <Heading>April 2026</Heading>
            <Paragraph>
                <Content>$[[ ./28 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 April 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
