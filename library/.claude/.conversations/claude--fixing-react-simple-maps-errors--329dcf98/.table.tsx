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
                <Content>$[[ Fixing React Simple Maps Errors ]]( claude--Fixing React Simple Maps Errors--329dcf98 )</Content>
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
                <Content>$[[ ./Fixed World Map Component v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Implementation Guide for React Simple Maps v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./world-basic..tsx Map Page v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Setup Instructions for World Map v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Updated Next..js Config v1 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
