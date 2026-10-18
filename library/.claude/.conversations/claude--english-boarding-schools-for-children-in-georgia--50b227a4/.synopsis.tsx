import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is based in Tbilisi, Georgia (the country) and is researching educational options for two
            children of primary school age. The conversation began with a search for intensive English-language boarding
            schools in Georgia, with Claude conducting research in both English and Georgian to surface options. Claude
            determined that Georgia has no English-language boarding schools serving primary-age children — the only
            residential facility in Tbilisi (at New School) is restricted to an EU-funded secondary IB programme, and
            Buckswood Tbilisi is a day school only. The Georgian-language search additionally surfaced Queen Tamar
            School-Pansion, a Georgian Orthodox residential institution that was not a fit for the stated goals.
        </Paragraph>
    </Chapter>
);
