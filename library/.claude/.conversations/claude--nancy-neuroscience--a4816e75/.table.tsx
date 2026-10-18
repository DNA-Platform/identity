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
            <Heading>June 2026</Heading>
            <Paragraph>
                <Content>$[[ ./23 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Nancy &gt; Neuroscience ]]( claude--Nancy &gt; Neuroscience--a4816e75 )</Content>
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
            <Heading>July 2026</Heading>
            <Paragraph>
                <Content>$[[ ./5 July 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
