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
            <Heading>October 2026</Heading>
            <Paragraph>
                <Content>$[[ ./10 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Wake up Copenhagen hotel directions ]]( claude--Wake up Copenhagen hotel directions--a07786e2 )</Content>
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
