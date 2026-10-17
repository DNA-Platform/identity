import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an extensive discussion about their investment thesis for TONX (TON Strategy), a digital
            asset treasury company holding approximately 5% of TON blockchain tokens. The conversation revealed
            sophisticated adversarial reasoning about cryptocurrency markets and blockchain infrastructure, with the
            user presenting a complex thesis connecting TON blockchain to Telegram's infrastructure needs. They
            explained their view that TON serves as decentralized cloud computing infrastructure, with Telegram as the
            anchor tenant requiring massive TON holdings to pay for messaging operations, similar to how companies pay
            AWS for cloud services.
        </Paragraph>
    </Chapter>
);
