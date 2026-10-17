import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation is a continuation of an extensive ongoing research and analysis collaboration focused on
            the person's long-term investment thesis centered on TON/GRAM and Telegram's payment infrastructure rollout.
            The person is approximately six months into what they frame as a ten-year investment thesis, timed around a
            multi-year personal horizon. They have deep prior context with Claude on this topic — including prior
            identification of the Gram Wallet iOS app, Pavel Durov's legal situation, and a set of monitored sources —
            and they corrected Claude twice for presenting already-known information as new, and once for incorrectly
            inferring New York wallet feature restrictions when the actual behavior is full-featured with constraints
            only at the fiat on-ramp layer.
        </Paragraph>
    </Chapter>
);
