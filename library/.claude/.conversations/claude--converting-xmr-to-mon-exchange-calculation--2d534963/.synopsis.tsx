import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked for help with a cryptocurrency conversion calculation, specifically determining how much
            MON (a cryptocurrency) they would need to sell in order to acquire a precise amount of XMR (Monero). They
            provided specific price values for both currencies and requested the answer be shown as a word problem with
            full working steps.
        </Paragraph>
    </Chapter>
);
