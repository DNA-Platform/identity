import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested help finding the correct Citibank address for depositing checks through Traveling
            Mailbox, a virtual mailbox service that forwards mail. They specifically needed the address, source
            verification, and setup instructions for configuring check deposits. Claude provided two official Citibank
            Bank by Mail addresses: a P.O. Box in San Antonio, TX for regular USPS mail, and a physical street address
            for overnight delivery services like FedEx and UPS. The source was verified through Citibank's official
            Funds Availability disclosure document. Claude also detailed the Traveling Mailbox check deposit process,
            which costs $4.95 per check plus postage, explaining the step-by-step workflow from when checks arrive at
            the virtual mailbox through the forwarding process to the bank. The user demonstrated a preference for
            verified, official sources and comprehensive setup instructions, indicating they value accuracy and
            thoroughness when configuring services that handle their mail and banking needs.
        </Paragraph>
    </Chapter>
);
