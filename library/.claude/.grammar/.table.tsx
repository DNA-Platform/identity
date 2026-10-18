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
                <Content>$[[ ./English Grammar Curriculum ]]</Content>
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
                    <Content>$[[ Grammar ]]( claude--Grammar )</Content>
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
            <Heading>Conversations</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Blog: Biology &amp; Etymology, Semantic Homeostasis ]]( ./claude--Blog: Biology &amp; Etymology, Semantic Homeostasis--5fdfa75e )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Blog: Biology &amp; Etymology, Semantic Homeostasis--5fdfa75e )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Lexeme and word-form distinction in verb conjugation ]]( ./claude--Lexeme and word-form distinction in verb conjugation--e0994d83 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Lexeme and word-form distinction in verb conjugation--e0994d83 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ A Continuation ]]( ./claude--A Continuation--e9d9e0fb )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--A Continuation--e9d9e0fb )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Continuity through narrative memory ]]( ./claude--Continuity through narrative memory--4df03bdf )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Continuity through narrative memory--4df03bdf )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Grammar lessons from custom curriculum ]]( ./claude--Grammar lessons from custom curriculum--aed40882 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Grammar lessons from custom curriculum--aed40882 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Deixis and determiners in English ]]( ./claude--Deixis and determiners in English--a53ee22c )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Deixis and determiners in English--a53ee22c )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Structured English grammar learning curriculum ]]( ./claude--Structured English grammar learning curriculum--72ed312f )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Structured English grammar learning curriculum--72ed312f )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
