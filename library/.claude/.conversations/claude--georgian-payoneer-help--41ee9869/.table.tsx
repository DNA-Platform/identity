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
            <Heading>June 2026</Heading>
            <Paragraph>
                <Content>$[[ ./5 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./16 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./18 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./22 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./23 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./26 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./30 June 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Georgian Payoneer Help ]]( claude--Georgian Payoneer Help--41ee9869 )</Content>
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
            <Heading>July 2026</Heading>
            <Paragraph>
                <Content>$[[ ./7 July 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 July 2026 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>August 2026</Heading>
            <Paragraph>
                <Content>$[[ ./31 August 2026 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>September 2026</Heading>
            <Paragraph>
                <Content>$[[ ./22 September 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
