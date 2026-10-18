import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ана (Anastasia) worked through a complex child support enforcement situation in Russia while living in
            Georgia, navigating two parallel bailiff (FSSP) case files (ИП 302471 and 302474) for her two children
            against her ex-husband Maxim. Claude analyzed Gosuslugi case documents line by line, explaining enforcement
            terminology ("payment order from debtor" vs. forced collection, debt calculation resolutions) and helping
            her understand that while records showed 163,440.39 rubles "executed" to her in five payments between July
            30 and August 14, none of this money had arrived in her Tbank account despite verified correct banking
            details. Claude also identified discrepancies in the bailiff's calculations (using the general regional
            subsistence minimum of 20,265 rubles instead of the children's minimum of 19,657 rubles) and inconsistencies
            between the two children's case files. After confirming no funds had arrived over three months, Ana decided
            to escalate to her lawyers; Claude drafted both a detailed Russian version and a shorter, less formal
            version of the inquiry, plus an English translation for communication with what appears to be an
            international support team, and converted key ruble amounts to approximate dollar figures.
        </Paragraph>
    </Chapter>
);
