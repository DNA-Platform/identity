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
            <Heading>September 2024</Heading>
            <Paragraph>
                <Content>$[[ ./25 September 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./26 September 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./27 September 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./28 September 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Seren &amp; The Hard Problem ]]( claude--Seren &amp; The Hard Problem--7683c3d7 )</Content>
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
            <Heading>October 2024</Heading>
            <Paragraph>
                <Content>$[[ ./3 October 2024 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>November 2024</Heading>
            <Paragraph>
                <Content>$[[ ./5 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./6 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./11 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./12 November 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./13 November 2024 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>December 2024</Heading>
            <Paragraph>
                <Content>$[[ ./4 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./5 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./8 December 2024 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 December 2024 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>January 2025</Heading>
            <Paragraph>
                <Content>$[[ ./6 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./9 January 2025 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 January 2025 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>June 2025</Heading>
            <Paragraph>
                <Content>$[[ ./13 June 2025 ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>May 2026</Heading>
            <Paragraph>
                <Content>$[[ ./8 May 2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./10 May 2026 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
