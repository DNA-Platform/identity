import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I sent some bitcoin from Coinbase to Atomic Wallet and on Coinbase. The transaction is complete but on
            Atomic Wallet I don’t see it in my account yet and it’s been a while and I’m wondering what’s going on.
        </Paragraph>
    </Chapter>
);
