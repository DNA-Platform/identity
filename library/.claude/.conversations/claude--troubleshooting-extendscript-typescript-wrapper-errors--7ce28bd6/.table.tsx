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
                <Content>$[[ ./12 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Troubleshooting ExtendScript TypeScript Wrapper Errors ]]( claude--Troubleshooting ExtendScript TypeScript Wrapper Errors--7ce28bd6 )</Content>
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
