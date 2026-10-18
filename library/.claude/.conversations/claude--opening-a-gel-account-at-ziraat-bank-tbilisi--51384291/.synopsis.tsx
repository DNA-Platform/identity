import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about banking options in Tbilisi, Georgia, specifically regarding Ziraat Bank. They have
            an existing Ziraat account from a previous stay in Turkey and wanted to know if they could open a Georgian
            Lari (GEL) account at the Tbilisi branch and obtain a card that would work with local Georgian businesses
            and Wildberries. Claude researched and confirmed that Ziraat Bank Georgia allows foreign citizens to open
            accounts with just a passport, without requiring Georgian residency documentation. The bank offers
            multi-currency accounts and has connections to the Turkish Ziraat system, potentially allowing favorable
            transfer rates between the user's existing Turkish account and a new Georgian account.
        </Paragraph>
    </Chapter>
);
