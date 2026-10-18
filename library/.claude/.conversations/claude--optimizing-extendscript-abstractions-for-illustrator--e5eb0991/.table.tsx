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
                <Content>$[[ ./9 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 February 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Optimizing ExtendScript Abstractions for Illustrator ]]( claude--Optimizing ExtendScript Abstractions for Illustrator--e5eb0991 )</Content>
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
                <Content>$[[ ./Command Builder Architecture v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Effect and Command Architecture v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./func-implementation v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./effect-reference-implementation v1 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
