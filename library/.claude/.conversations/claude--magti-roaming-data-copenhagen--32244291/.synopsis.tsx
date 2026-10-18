import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person has Magti mobile internet service in Tbilisi, Georgia, and asked about roaming data options for
            an upcoming trip to Copenhagen. Claude researched Magti's roaming packages and confirmed the "Roamer Days"
            Scandinavia package (5 GB for 15 GEL, valid 7 days) covers Denmark along with Sweden, Norway, and Finland,
            with activation available until 31 Dec 2026. General "Roamer" packages were also mentioned as alternatives
            (1 GB/9 GEL/7 days, 4 GB/25 GEL/14 days, 10 GB/55 GEL/30 days), though Denmark's inclusion in these wasn't
            confirmed.
        </Paragraph>
    </Chapter>
);
