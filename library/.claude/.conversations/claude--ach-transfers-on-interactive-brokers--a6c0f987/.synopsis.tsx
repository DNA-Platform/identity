import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about ACH transfer capabilities at Interactive Brokers (IBKR), specifically whether IBKR
            qualifies as a bank for ACH purposes given that ACH is described as US-bank-only. Claude explained that IBKR
            supports both ACH deposits and withdrawals, with one free ACH withdrawal per calendar month and a modest fee
            for additional transfers. Claude noted the hold periods for ACH deposits and outlined daily withdrawal
            limits tied to authentication method.
        </Paragraph>
    </Chapter>
);
