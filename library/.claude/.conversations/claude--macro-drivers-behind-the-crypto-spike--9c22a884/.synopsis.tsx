import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person initiated a discussion about a broad crypto market rally, asking Claude to explain the macro
            drivers and whether Monad (MON) had any token-specific catalysts. Claude identified the rally as driven by
            Treasury bond buybacks compressing long-dated yields and renewed legislative activity around crypto
            regulation, combined with a large short liquidation event (~$1.2B). The person has a background running a
            quantitative fund and engaged with Claude on a sophisticated level throughout, including correcting Claude's
            framing and reasoning multiple times.
        </Paragraph>
    </Chapter>
);
