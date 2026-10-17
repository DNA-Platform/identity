import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, who previously owned an algorithmic trading hedge fund and conducted high-frequency crypto trading
            on Binance, engaged in a detailed analysis of TONX (TON Strategy Company), a publicly traded company holding
            approximately 217.5 million TON tokens. The conversation evolved from initial valuation questions about the
            company's discount to net asset value (NAV) to a sophisticated examination of the underlying TON blockchain
            infrastructure and its strategic importance to Telegram's operations.
        </Paragraph>
    </Chapter>
);
