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
                <Content>$[[ ./26 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Semantic reference theory foundations and philosophical conundrum ]]( claude--Semantic reference theory foundations and philosophical conundrum--49b32234 )</Content>
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
