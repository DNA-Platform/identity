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
                <Content>$[[ ./9 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./16 February 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Penelope's situation and current status ]]( claude--Penelope's situation and current status--f1fdb8d7 )</Content>
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
            <Heading>March 2026</Heading>
            <Paragraph>
                <Content>$[[ ./6 March 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
