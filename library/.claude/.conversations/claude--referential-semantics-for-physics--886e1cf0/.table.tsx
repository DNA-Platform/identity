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
                <Content>$[[ ./1 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./2 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./3 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./5 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Referential Semantics for Physics ]]( claude--Referential Semantics for Physics--886e1cf0 )</Content>
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
