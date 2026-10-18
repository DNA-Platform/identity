import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked about Telegram's gift system, specifically whether basic gifts are stored on the blockchain.
            Claude explained that regular gifts are off-chain virtual items with unlimited supply stored on Telegram's
            servers, while only gifts upgraded to "collectibles" become blockchain assets on the TON network. The
            upgrade process requires Telegram Stars to cover blockchain fees and has a 21-day waiting period after
            receiving a gift.
        </Paragraph>
    </Chapter>
);
