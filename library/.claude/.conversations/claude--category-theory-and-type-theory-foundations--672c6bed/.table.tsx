import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Index } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>February 2026</Heading>
            <Paragraph>
                <Content>$[[ ./6 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./7 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Category theory and type theory foundations ]]( claude--Category theory and type theory foundations--672c6bed )</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Synopsis ]]</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Table of Contents ]]</Content>
                </Word>
            </Paragraph>
        </Section>
    </Chapter>
);
