import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation began with a practical problem: the person holds MON (Monad) staked through Atomic Wallet
            and cannot unstake it. Claude diagnosed the issue as a gas deadlock — available balance was zero, preventing
            any on-chain action including claiming rewards or initiating unstaking. Claude outlined solutions including
            using Jumper Exchange's gas-refuel feature or a small CEX withdrawal to send a minimal amount of MON to the
            address, then walking through the three-step exit sequence: claim rewards, unstake (triggering a ~2-day
            unbonding period), then withdraw. The person also noted that Atomic Wallet's swap feature appeared missing;
            Claude explained it routes through third-party providers with high minimums, making it impractical for
            acquiring trace gas amounts, and recommended the CEX or bridge routes instead.
        </Paragraph>
    </Chapter>
);
