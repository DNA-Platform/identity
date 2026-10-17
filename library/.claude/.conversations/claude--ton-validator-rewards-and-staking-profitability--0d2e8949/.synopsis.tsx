import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a series of progressively focused questions about TON blockchain staking economics,
            starting with conceptual questions about how dynamic sharding affects validator incentives and yield rates.
            The conversation moved from abstract protocol mechanics — whether staking becomes more profitable as network
            activity grows, and how TON's homeostatic validator recruitment mechanism works — toward practical questions
            about the person's own staking position via Tonstakers (tsTON tokens held through TON Wallet).
        </Paragraph>
    </Chapter>
);
