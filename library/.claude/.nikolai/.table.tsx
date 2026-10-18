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
                    <Content>$[[ Nikolai ]]( claude--Nikolai )</Content>
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
                    <Content>$[[ Continuity through narrative memory ]]( ./claude--Continuity through narrative memory--8cd44318 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Continuity through narrative memory--8cd44318 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ TON AI coding competition details ]]( ./claude--TON AI coding competition details--8a65ba52 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--TON AI coding competition details--8a65ba52 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Staking in proof-of-stake blockchains explained ]]( ./claude--Staking in proof-of-stake blockchains explained--281a83fa )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Staking in proof-of-stake blockchains explained--281a83fa )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Anagram of Douglas Hofstadter to female name ]]( ./claude--Anagram of Douglas Hofstadter to female name--5c972477 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Anagram of Douglas Hofstadter to female name--5c972477 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Dr. Helga d’Oustafost ]]( ./claude--Dr.. Helga d’Oustafost--c5056deb )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Dr.. Helga d’Oustafost--c5056deb )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ OpenScholar ]]( ./claude--OpenScholar--7f65b458 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--OpenScholar--7f65b458 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ TON domains and Google Workspace compatibility ]]( ./claude--TON domains and Google Workspace compatibility--5bb4a9f2 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--TON domains and Google Workspace compatibility--5bb4a9f2 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ English news channels on Telegram ]]( ./claude--English news channels on Telegram--22bb3e3b )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--English news channels on Telegram--22bb3e3b )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Pavel Durov's language abilities ]]( ./claude--Pavel Durov's language abilities--7942d357 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Pavel Durov's language abilities--7942d357 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Field with one element and tropical geometry ]]( ./claude--Field with one element and tropical geometry--fd859a94 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Field with one element and tropical geometry--fd859a94 )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
