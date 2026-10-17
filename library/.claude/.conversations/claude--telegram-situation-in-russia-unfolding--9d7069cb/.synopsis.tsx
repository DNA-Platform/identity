import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug, a quantitative finance professional with an algorithmic trading background, engaged Claude in an
            extensive investigation of his investment thesis connecting Telegram, TON blockchain, and a broader theory
            about anonymous cryptocurrency developers. Doug's wife Ana, who has a Russian linguistics competition
            background, initially introduced him to Nikolai Durov, which sparked his interest in TON's architecture.
            Doug developed what he calls the "Nikolai = Satoshi" (N=S) hypothesis, theorizing that Nikolai Durov may be
            Satoshi Nakamoto based on educational credentials, timeline analysis, and technical sophistication patterns.
        </Paragraph>
    </Chapter>
);
