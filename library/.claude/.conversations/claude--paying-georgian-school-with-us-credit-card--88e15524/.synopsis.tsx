import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user needed help with international payment methods for a school in Georgia, specifically paying tuition
            in Georgian Lari (GEL). They initially wanted to use their Citibank Strata Premier credit card instead of
            their Mercury bank account, which doesn't support GEL transactions. Claude researched the card's
            international capabilities and drafted a letter to the school proposing credit card payment, highlighting
            the card's zero foreign transaction fees and Mastercard's wholesale exchange rates.
        </Paragraph>
    </Chapter>
);
