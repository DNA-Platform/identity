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
            <Heading>August 2026</Heading>
            <Paragraph>
                <Content>$[[ ./31 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Foundations: Types &amp; Properties ]]( claude--Foundations: Types &amp; Properties--3eecc63c )</Content>
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
            <Heading>September 2026</Heading>
            <Paragraph>
                <Content>$[[ ./5 September 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 September 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 September 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 September 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
