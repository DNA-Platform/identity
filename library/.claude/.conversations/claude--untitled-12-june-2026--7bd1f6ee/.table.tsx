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
                <Content>$[[ ./12 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./16 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./22 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./24 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./25 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./26 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Untitled, 12 June 2026 ]]( claude--Untitled, 12 June 2026--7bd1f6ee )</Content>
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
                <Content>$[[ ./1 July 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
