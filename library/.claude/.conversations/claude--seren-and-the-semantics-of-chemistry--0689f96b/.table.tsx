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
            <Heading>November 2025</Heading>
            <Paragraph>
                <Content>$[[ ./8 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./17 November 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Seren &amp; The Semantics of $Chemistry ]]( claude--Seren &amp; The Semantics of $Chemistry--0689f96b )</Content>
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
