import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in a technically focused discussion about Monad blockchain's implementation progress,
            specifically within the Telegram mini app ecosystem. The conversation centered on real-world performance
            metrics, the relationship between TON and Monad, and the broader Telegram mini app landscape. The person
            demonstrated deep existing knowledge of the TON/Telegram ecosystem and corrected Claude twice: first, when
            Claude incorrectly framed TON and Monad as competitors, the person clarified that TON is the payment
            infrastructure underlying even Monad-related apps in Telegram, including MON staking through Wallet in
            Telegram; second, the person pushed back on Claude's framing to emphasize that Fragment and TON rails remain
            foundational even for Monad-ecosystem apps.
        </Paragraph>
    </Chapter>
);
