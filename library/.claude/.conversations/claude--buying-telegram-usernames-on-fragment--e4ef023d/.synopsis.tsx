import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation centered on Fragment (fragment.com), Telegram's official TON blockchain-based marketplace
            for collectible usernames and anonymous phone numbers. The user was researching and then actively purchasing
            on Fragment on behalf of someone named Ana. Claude explained that Fragment operates outside the Telegram app
            due to both technical necessity (it executes TON blockchain transactions) and app store policy constraints
            (Apple and Google prohibit in-app crypto purchasing flows to avoid their payment cut), with an additional
            layer of regulatory positioning where Telegram operates as a TON browser that surfaces on-chain capabilities
            selectively by jurisdiction. The user demonstrated strong existing knowledge of crypto and TON specifically,
            and corrected Claude twice: once for over-explaining the TON-to-fiat conversion when the user already
            understood it, and once for misreading a conversational statement as an imperative instruction.
        </Paragraph>
    </Chapter>
);
