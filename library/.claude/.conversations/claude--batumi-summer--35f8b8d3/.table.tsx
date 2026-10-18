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
                <Content>$[[ ./9 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./16 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./17 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Batumi Summer ]]( claude--Batumi Summer--35f8b8d3 )</Content>
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
