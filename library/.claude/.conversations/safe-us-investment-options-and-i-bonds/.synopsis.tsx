import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user has experience in algorithmic trading and managing market-neutral portfolios at hedge funds, and is
            currently investing in cryptocurrency strategies while seeking safe investment options for the remainder of
            their portfolio. They initiated the conversation asking about safe US investment options, particularly CDs
            and similar locked-up instruments, leading to a comprehensive discussion of Treasury securities, Series I
            Bonds, and various ETF strategies.
        </Paragraph>
    </Chapter>
);
