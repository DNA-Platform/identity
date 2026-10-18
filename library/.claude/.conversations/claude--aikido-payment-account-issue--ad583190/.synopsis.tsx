import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person needed help paying for their child's aikido classes after receiving a payment identifier from the
            instructor, which their bank (Credo) was rejecting with an error about account length. Claude used a
            command-line tool to validate the checksum of the identifier and confirmed it was a correctly formatted
            Georgian bank account number (22 characters, associated with TBC Bank based on the included letters), ruling
            out a typo or invalid number. Claude explained that the mismatch was likely due to the banking app's input
            field expecting a card number (16 digits) rather than an external bank transfer, and provided step-by-step
            guidance: selecting the "transfer to another bank" option in Credo instead of a card or internal transfer,
            entering the full identifier without spaces, using the recipient name as provided, and optionally noting the
            payment purpose (e.g., referencing the activity and month). Claude also suggested that phone-number-based
            transfers between TBC and Credo might offer a simpler alternative if the instructor could provide one.
            Claude offered to review a screenshot of the input screen if the issue persisted.
        </Paragraph>
    </Chapter>
);
