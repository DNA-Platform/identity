import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about a pharmacy called "Saba" in Tbilisi, Georgia, specifically inquiring whether it sells
            foreign/imported medicines. Claude conducted multiple web searches in Georgian, Russian, and English to
            investigate the business. Claude identified a company called Saba (შპს საბა) registered in Tbilisi's Digomi
            district at 13b Ljubljana Street, with contact numbers 251 70 66 and 252 13 32, email info@llcsaba.ge, and
            business hours Monday–Friday 10:00–17:00. The company appears in the yell.ge directory with registered ID
            202157593, categorized as a pharmaceutical depot and medicines importer.
        </Paragraph>
    </Chapter>
);
