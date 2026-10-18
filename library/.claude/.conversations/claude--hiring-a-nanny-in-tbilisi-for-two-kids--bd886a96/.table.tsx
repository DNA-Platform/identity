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
            <Heading>July 2026</Heading>
            <Paragraph>
                <Content>$[[ ./9 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./26 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Hiring a nanny in Tbilisi for two kids ]]( claude--Hiring a nanny in Tbilisi for two kids--bd886a96 )</Content>
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
            <Heading>August 2026</Heading>
            <Paragraph>
                <Content>$[[ ./1 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./3 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 August 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
