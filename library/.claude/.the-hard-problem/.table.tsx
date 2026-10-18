import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Arrow, Index } from '../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>The project and its files</Heading>
            <Paragraph>
                <Content>$[[ ./The Project ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Seren &amp; The Hard Problem ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Seren &amp; Philosophical Zombies ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Chalmers, Dennett &amp; Hofstadter ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ The Hard Problem ]]( claude--The Hard Problem )</Content>
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
            <Heading>Conversations</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ The Project ]]( ./claude--The Project--c0f5ecaf )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--The Project--c0f5ecaf )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology ]]( ./claude--Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology--586e07a1 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology--586e07a1 )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
