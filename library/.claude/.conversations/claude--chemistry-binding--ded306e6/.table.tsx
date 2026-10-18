import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Appendix, Index } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>September 2025</Heading>
            <Paragraph>
                <Content>$[[ ./18 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./21 September 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ $Chemistry Binding ]]( claude--$Chemistry Binding--ded306e6 )</Content>
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
            <Appendix />
            <Heading>Artifacts</Heading>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Chemistry Framework: A Developer's Perspective v1 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
