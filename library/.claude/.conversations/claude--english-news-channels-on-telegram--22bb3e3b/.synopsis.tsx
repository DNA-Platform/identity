import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought recommendations for English-language Telegram channels covering both American and Russian
            news perspectives. Claude provided a comprehensive breakdown of channels across multiple categories
            including general breaking news, geopolitics and conflict coverage, official Russian government channels,
            independent Russian opposition media, and OSINT sources. Key recommendations included @insiderpaper and
            @disclosetv for general news, @intelslava and @rybarinenglish for geopolitics with pro-Russian perspectives,
            @newskremlineng for official Kremlin content, and @meduzaen for independent Russian journalism.
        </Paragraph>
    </Chapter>
);
