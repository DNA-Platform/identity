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
                <Content>$[[ ./12 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./17 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Hannah USA trip ]]( claude--Hannah USA trip--a2386b49 )</Content>
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
            <Heading>April 2026</Heading>
            <Paragraph>
                <Content>$[[ ./2 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./29 April 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 April 2026 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>May 2026</Heading>
            <Paragraph>
                <Content>$[[ ./1 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 May 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
