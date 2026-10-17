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
            <Heading>May 2026</Heading>
            <Paragraph>
                <Content>$[[ ./13 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Nounifying "include" in English ]]( claude--Nounifying "include" in English--0b7bc569 )</Content>
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
