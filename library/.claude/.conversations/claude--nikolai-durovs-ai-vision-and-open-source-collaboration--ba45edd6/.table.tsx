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
            <Heading>January 2026</Heading>
            <Paragraph>
                <Content>$[[ ./14 January 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Nikolai Durov's AI vision and open source collaboration ]]( claude--Nikolai Durov's AI vision and open source collaboration--ba45edd6 )</Content>
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
            <Heading>February 2026</Heading>
            <Paragraph>
                <Content>$[[ ./6 February 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
