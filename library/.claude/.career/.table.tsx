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
                <Content>$[[ ./Work Profile ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Definition of Experiment ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Career ]]( claude--Career )</Content>
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
            <Heading>February 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Experiment specification framework for wiki-based market research ]]( ./claude--Experiment specification framework for wiki-based market research--6ad6437b )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Experiment specification framework for wiki-based market research--6ad6437b )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ AgentFire ClickMap market research ]]( ./claude--AgentFire ClickMap market research--2fddebcb )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--AgentFire ClickMap market research--2fddebcb )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Competitor website research and design inspiration ]]( ./claude--Competitor website research and design inspiration--df8abc48 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Competitor website research and design inspiration--df8abc48 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Referential Semantics for Objective Mechanics ]]( ./claude--Referential Semantics for Objective Mechanics--03d00b2c )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Referential Semantics for Objective Mechanics--03d00b2c )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Evaluating a Claude code template for best practices ]]( ./claude--Evaluating a Claude code template for best practices--43d882ae )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Evaluating a Claude code template for best practices--43d882ae )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Synthesizing a career across neuroscience, engineering, and finance ]]( ./claude--Synthesizing a career across neuroscience, engineering, and finance--f8a944f7 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Synthesizing a career across neuroscience, engineering, and finance--f8a944f7 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ DevUtils and TypingMind market success story ]]( ./claude--DevUtils and TypingMind market success story--918c2777 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--DevUtils and TypingMind market success story--918c2777 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Reviewing work profile and skill assessment ]]( ./claude--Reviewing work profile and skill assessment--416413f6 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Reviewing work profile and skill assessment--416413f6 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Work profile review and conversation context ]]( ./claude--Work profile review and conversation context--e4b90c2c )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Work profile review and conversation context--e4b90c2c )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
