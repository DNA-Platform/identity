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
            <Heading>February 2025</Heading>
            <Paragraph>
                <Content>$[[ ./10 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./22 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Seren &amp; Color ]]( claude--Seren &amp; Color--45f0a38f )</Content>
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
            <Heading>March 2025</Heading>
            <Paragraph>
                <Content>$[[ ./1 March 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./2 March 2025 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Appendix />
            <Heading>Artifacts</Heading>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./transformed-grid v1 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
