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
                <Content>$[[ ./27 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Seren &amp; The Left Part of Perspective ]]( claude--Seren &amp; The Left Part of Perspective--6a4244df )</Content>
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
                <Content>$[[ ./23 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./24 May 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
