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
                    <Content>$[[ Gödel through Goldbach: Coprime Symmetry ]]( ./claude--Gödel through Goldbach: Coprime Symmetry--942ceafb )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Gödel through Goldbach: Coprime Symmetry--942ceafb )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Gödel through Goldbach: Semantics and Induction ]]( ./claude--Gödel through Goldbach: Semantics and Induction--d3b441a9 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Gödel through Goldbach: Semantics and Induction--d3b441a9 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Gödel through Goldbach: The Paper ]]( ./claude--Gödel through Goldbach: The Paper--c42597f2 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Gödel through Goldbach: The Paper--c42597f2 )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Its files</Heading>
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
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
