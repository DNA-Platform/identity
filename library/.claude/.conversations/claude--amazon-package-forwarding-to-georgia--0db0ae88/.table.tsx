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
                <Content>$[[ ./25 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./26 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Amazon package forwarding to Georgia ]]( claude--Amazon package forwarding to Georgia--0db0ae88 )</Content>
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
