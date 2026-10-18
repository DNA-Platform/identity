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
            <Heading>May 2026</Heading>
            <Paragraph>
                <Content>$[[ ./10 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Moving phone number to Google Voice ]]( claude--Moving phone number to Google Voice--23feb617 )</Content>
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
