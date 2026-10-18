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
                <Content>$[[ ./21 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ MIA Request ]]( claude--MIA Request--680c6254 )</Content>
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
                <Content>$[[ ./2 September 2026 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>October 2026</Heading>
            <Paragraph>
                <Content>$[[ ./1 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./5 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 October 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
