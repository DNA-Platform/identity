import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user discussed Atomic Wallet's features and policies, particularly focusing on KYC requirements and
            payment options. They learned that Atomic Wallet itself requires no KYC for basic wallet functions like
            storing, sending, receiving, and swapping crypto, but third-party fiat providers like Simplex do require
            standard KYC verification for purchasing crypto with credit cards or Apple Pay. The user confirmed that
            Apple Pay is supported for Americans outside of Hawaii and New York, where crypto purchases are banned. They
            explored a strategy of buying Bitcoin on KYC exchanges like Coinbase, transferring to Atomic Wallet, then
            swapping to other cryptocurrencies to minimize additional verification requirements.
        </Paragraph>
    </Chapter>
);
