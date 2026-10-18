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
            <Heading>January 2025</Heading>
            <Paragraph>
                <Content>$[[ ./3 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./4 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./5 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Extending Illustrator ExtendScript Abstraction ]]( claude--Extending Illustrator ExtendScript Abstraction--42fc17f5 )</Content>
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
