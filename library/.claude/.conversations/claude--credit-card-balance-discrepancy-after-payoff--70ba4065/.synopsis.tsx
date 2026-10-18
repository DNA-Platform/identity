import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person came to Claude with concern about their credit card billing, believing something was wrong after
            making two large payments within a short period and feeling the second payment shouldn't have been
            necessary. Claude analyzed screenshots of the credit card statement to reconcile the charges and payments,
            confirming that the billing was accurate and explaining why two payments arose: the first payment covered
            the prior statement balance plus charges that had posted through a certain date, while the second covered
            new charges that posted after the first payment was made.
        </Paragraph>
    </Chapter>
);
