import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user discussed immigration and tax planning for bringing their partner and her children to the United
            States. The conversation began with questions about the legality of owning TON (The Open Network) and Monad
            cryptocurrencies, and whether tax obligations would be simpler in other jurisdictions. Claude clarified that
            both cryptocurrencies are legal to own in the US, and explained the tax implications of different approaches
            to crypto holdings across jurisdictions.
        </Paragraph>
    </Chapter>
);
