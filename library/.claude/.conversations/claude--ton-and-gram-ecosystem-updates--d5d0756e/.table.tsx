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
                <Content>$[[ ./14 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./31 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ TON and GRAM ecosystem updates ]]( claude--TON and GRAM ecosystem updates--d5d0756e )</Content>
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
