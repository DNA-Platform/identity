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
                <Content>$[[ ./7 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./15 October 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Konsul Prime ]]( claude--Konsul Prime--12d855b8 )</Content>
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
