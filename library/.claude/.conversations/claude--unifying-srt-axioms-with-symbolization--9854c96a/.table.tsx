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
                <Content>$[[ ./31 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Unifying SRT axioms with symbolization ]]( claude--Unifying SRT axioms with symbolization--9854c96a )</Content>
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
            <Heading>June 2026</Heading>
            <Paragraph>
                <Content>$[[ ./1 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./2 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./3 June 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
