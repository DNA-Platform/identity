import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug requested translation assistance for Russian legal documents related to a custody case. Claude
            translated a February 5, 2026 court filing from Russian to English - an application for interim child
            support measures filed by plaintiff Krasavina Anastasia Yuryevna against defendant Krasavin Maxim
            Alexandrovich regarding their two minor children. The document requested interim child support of 1/3 of the
            defendant's income, citing irregular payments averaging only 9,000 rubles per child monthly after an 8-month
            gap following the parties' separation in January 2025.
        </Paragraph>
    </Chapter>
);
