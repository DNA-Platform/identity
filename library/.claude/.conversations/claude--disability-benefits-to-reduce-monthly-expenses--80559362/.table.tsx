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
            <Heading>November 2024</Heading>
            <Paragraph>
                <Content>$[[ ./2 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./21 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Disability Benefits to Reduce Monthly Expenses ]]( claude--Disability Benefits to Reduce Monthly Expenses--80559362 )</Content>
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
            <Heading>December 2024</Heading>
            <Paragraph>
                <Content>$[[ ./3 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 December 2024 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
