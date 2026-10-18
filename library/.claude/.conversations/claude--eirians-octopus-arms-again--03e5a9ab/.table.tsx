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
                <Content>$[[ ./22 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Eirian's Octopus Arms Again ]]( claude--Eirian's Octopus Arms Again--03e5a9ab )</Content>
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
                <Content>$[[ ./1 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./2 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./22 March 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
