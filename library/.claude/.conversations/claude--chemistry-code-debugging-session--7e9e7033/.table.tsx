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
        <Paragraph>
            <Content>$[[ ./Conversation ]]</Content>
        </Paragraph>
        <Paragraph>
            <Parenthetical />
            <Word>
                <Content>$[[ Chemistry code debugging session ]]( claude--Chemistry code debugging session--7e9e7033 )</Content>
            </Word>
            <Word>
                <Content>$[[ ./Synopsis ]]</Content>
            </Word>
            <Word>
                <Content>$[[ ./Table of Contents ]]</Content>
            </Word>
        </Paragraph>
        <Section>
            <Appendix />
            <Heading>Artifacts</Heading>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Chemistry Framework Fixes v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Chemistry Framework - Child Binding Fixes v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Simplified augmentNode method v1 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
