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
                <Content>$[[ ./7 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 August 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ the price of gram is getting h… ]]</Content>
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
        </Section>
        <Section>
            <Heading>October 2026</Heading>
            <Paragraph>
                <Content>$[[ ./1 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./2 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./5 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 October 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
