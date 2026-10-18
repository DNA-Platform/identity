import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user presented a sophisticated investment thesis connecting cryptocurrency valuations to technology
            infrastructure development, specifically focusing on Telegram, TON blockchain, and potential connections to
            Bitcoin's origins. They argued that Bitcoin and Meta's similar market capitalizations (around $1.6-1.7
            trillion) represent the market's valuation of global tech infrastructure, with Bitcoin serving as a
            speculative proxy for decentralized payment systems while Meta represents actual social infrastructure
            utility.
        </Paragraph>
    </Chapter>
);
