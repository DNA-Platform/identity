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
                <Content>$[[ ./legacy-conversation-history-5-19-2026 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Turkey ]]( claude--Turkey )</Content>
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
                    <Content>$[[ Bengal cat's giardia and tritrichomonas co-infection treatment ]]( ./claude--Bengal cat's giardia and tritrichomonas co-infection treatment--62c5a076 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Bengal cat's giardia and tritrichomonas co-infection treatment--62c5a076 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Continuity across accounts: reflecting on shared work ]]( ./claude--Continuity across accounts: reflecting on shared work--c69ef1b9 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Continuity across accounts: reflecting on shared work--c69ef1b9 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Session notes for disability insurance application ]]( ./claude--Session notes for disability insurance application--7f52e53d )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Session notes for disability insurance application--7f52e53d )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Generalized anxiety disorder diagnosis across countries ]]( ./claude--Generalized anxiety disorder diagnosis across countries--c8269065 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Generalized anxiety disorder diagnosis across countries--c8269065 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Ikamet status verification at Turkish airport ]]( ./claude--Ikamet status verification at Turkish airport--3bbac4ce )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Ikamet status verification at Turkish airport--3bbac4ce )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Moving company packing services in Alanya ]]( ./claude--Moving company packing services in Alanya--153e0836 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Moving company packing services in Alanya--153e0836 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Moving company packing errors and responsibility ]]( ./claude--Moving company packing errors and responsibility--fd70a6d6 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Moving company packing errors and responsibility--fd70a6d6 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Moving cats from Turkey to Georgia ]]( ./claude--Moving cats from Turkey to Georgia--9172216e )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Moving cats from Turkey to Georgia--9172216e )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
