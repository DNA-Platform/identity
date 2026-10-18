import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person received a tax adjustment notice from New York State and needed help interpreting whether it
            required any action or payment on their part. Claude analyzed the notice — a DTF-160 form related to a NY
            State personal income tax return (IT-201-X) — and walked through the computation: total tax due and total
            payments were equal, resulting in a net balance of zero. Claude explained that an estimated-tax penalty
            under section 685(c) had offset what would otherwise have been a small refund, leaving no amount owed and no
            refund issued.
        </Paragraph>
    </Chapter>
);
