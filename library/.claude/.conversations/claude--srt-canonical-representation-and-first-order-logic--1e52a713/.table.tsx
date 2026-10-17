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
            <Heading>April 2026</Heading>
            <Paragraph>
                <Content>$[[ ./27 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ SRT canonical representation and first-order logic ]]( claude--SRT canonical representation and first-order logic--1e52a713 )</Content>
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
            <Heading>May 2026</Heading>
            <Paragraph>
                <Content>$[[ ./1 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 May 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
