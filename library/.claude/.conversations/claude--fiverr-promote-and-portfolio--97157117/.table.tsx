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
            <Heading>February 2026</Heading>
            <Paragraph>
                <Content>$[[ ./18 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./20 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Fiverr promote and Portfolio ]]( claude--Fiverr promote and Portfolio--97157117 )</Content>
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
            <Heading>March 2026</Heading>
            <Paragraph>
                <Content>$[[ ./17 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 March 2026 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>May 2026</Heading>
            <Paragraph>
                <Content>$[[ ./22 May 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
