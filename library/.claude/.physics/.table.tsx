import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Arrow, Index } from '../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>The project and its files</Heading>
            <Paragraph>
                <Content>$[[ ./The Project ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Referential Semantics for Objective Mechanics ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./..cover ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./legacy-conversation-history-5-19-2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Physics ]]( claude--Physics )</Content>
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
            <Heading>June 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Nature published this blurb. I… ]]( ./claude--Nature published this blurb.. I…--75d64146 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Nature published this blurb.. I…--75d64146 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Can you look up the research o… ]]( ./claude--Can you look up the research o…--8aa11284 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Can you look up the research o…--8aa11284 )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>May 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Continuity across accounts: reflecting on shared work ]]( ./claude--Continuity across accounts: reflecting on shared work--c8477590 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Continuity across accounts: reflecting on shared work--c8477590 )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>April 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Why is the gravitational constant so difficult to measure ]]( ./claude--Why is the gravitational constant so difficult to measure--67a6e6eb )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Why is the gravitational constant so difficult to measure--67a6e6eb )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ One-dimensional Hilbert space in closed universes ]]( ./claude--One-dimensional Hilbert space in closed universes--0d92dc7c )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--One-dimensional Hilbert space in closed universes--0d92dc7c )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Benzodiazepines vs gabaergic anesthetics ]]( ./claude--Benzodiazepines vs gabaergic anesthetics--db8ba18b )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Benzodiazepines vs gabaergic anesthetics--db8ba18b )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>March 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Referential Semantics for Physics ]]( ./claude--Referential Semantics for Physics--886e1cf0 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Referential Semantics for Physics--886e1cf0 )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
