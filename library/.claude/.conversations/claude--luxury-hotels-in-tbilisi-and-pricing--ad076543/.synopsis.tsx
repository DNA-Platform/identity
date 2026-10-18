import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about the nicest hotels in Tbilisi and their nightly costs. Claude provided a tiered
            overview of top luxury and five-star properties, listing them in US dollars. The person then clarified that
            they wanted the prices in Georgian lari (GEL), not dollars. Claude responded by converting the figures at an
            approximate exchange rate of 2.7 GEL/USD and noted that hotels in Georgia are legally required to charge in
            lari at checkout regardless of how booking sites display prices. Claude also offered to look up the exact
            current GEL rate. The conversation suggests the person is based in or familiar with Tbilisi, referencing the
            Saburtalo neighborhood in a way that implied personal familiarity, and Claude tailored a recommendation
            noting which hotels would be closest to that area for potential visiting guests.
        </Paragraph>
    </Chapter>
);
