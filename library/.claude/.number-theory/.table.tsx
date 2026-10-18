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
                <Content>$[[ ./Doug: Godel &amp; Goldbach: A Twin Pair of Prime Mathematicians ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Opus 4 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Sonnet 4 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Opus 4 2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./legacy-conversation-history-5-19-2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Number Theory ]]( claude--Number Theory )</Content>
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
                    <Content>$[[ Collatz via Godel ]]( ./claude--Collatz via Godel--35a0e705 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Collatz via Godel--35a0e705 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Continuity through narrative memory ]]( ./claude--Continuity through narrative memory--e380ba83 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Continuity through narrative memory--e380ba83 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Opus 4.1: Godel &amp; Goldbach ]]( ./claude--Opus 4..1: Godel &amp; Goldbach--d3b441a9 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Opus 4..1: Godel &amp; Goldbach--d3b441a9 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Sonnet 4.5: Godel &amp; Goldbach ]]( ./claude--Sonnet 4..5: Godel &amp; Goldbach--c42597f2 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Sonnet 4..5: Godel &amp; Goldbach--c42597f2 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Goldbach pairs and coprime symmetry ]]( ./claude--Goldbach pairs and coprime symmetry--942ceafb )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Goldbach pairs and coprime symmetry--942ceafb )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
