import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is a New York resident navigating the process of converting a recently purchased amount of BTC on
            Coinbase into TON (Toncoin) for storage in their Telegram TON Wallet. The conversation centered on
            identifying the most efficient path from fiat or BTC to TON given New York's restrictive regulatory
            environment (BitLicense requirements). Key topics included Coinbase's ACH hold periods for new purchases,
            exchange availability for New York residents, and the mechanics of the Telegram TON Wallet's cross-chain
            deposit feature.
        </Paragraph>
    </Chapter>
);
