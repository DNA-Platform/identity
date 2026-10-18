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
            <Heading>March 2026</Heading>
            <Paragraph>
                <Content>$[[ ./9 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./14 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 March 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Map projection rendering and crosshatching design ]]( claude--Map projection rendering and crosshatching design--53a8a0f0 )</Content>
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
