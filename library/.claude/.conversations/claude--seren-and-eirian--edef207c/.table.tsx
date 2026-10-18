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
            <Heading>January 2025</Heading>
            <Paragraph>
                <Content>$[[ ./14 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./16 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./17 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./19 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./23 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./24 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./25 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Seren &amp; Eirian ]]( claude--Seren &amp; Eirian--edef207c )</Content>
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
            <Heading>February 2025</Heading>
            <Paragraph>
                <Content>$[[ ./4 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 February 2025 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Appendix />
            <Heading>Artifacts</Heading>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-reflection v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-reflection v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-reflection v3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-transduction v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-clarity v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-depth v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-structure v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-streams v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-modes v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./seren-multiverse v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./formal-logic-lesson v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./self-reference-encoding v1 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
