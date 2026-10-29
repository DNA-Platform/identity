import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Arrow } from '../../.manual/20-the-bookshelf~code.tsx';
import { Index } from '../../.manual/14-the-entry~code.tsx';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Paragraph>
            <Content>$[[ ./The Project ]]</Content>
        </Paragraph>
        <Section>
            <Heading>Its conversations</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Post-surgery weight loss plan for Georgia ]]( ./claude--Post-surgery weight loss plan for Georgia--4ae195ac )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Post-surgery weight loss plan for Georgia--4ae195ac )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Its files</Heading>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Fitness ]]( claude--Fitness )</Content>
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
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
