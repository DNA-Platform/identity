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
                <Content>$[[ ./6 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./16 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./17 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Taxes 2025 ]]( claude--Taxes 2025--0702f19d )</Content>
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
                <Content>$[[ ./9 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 May 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
