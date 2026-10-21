import { Bold, Chapter, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-13T11:58:32.835023Z"
        >
            <Origin>019bb738-d14f-70be-8ec3-b2c5e51d90de</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you figure out which Citibank address I need to use with travelling mailbox so that I can forward my
                checks to my bank (Citibank) to have them deposited in my checking account? I would need the addrtess and
                the source link so I can verify. Steps to configure traveling mailbox would be useful too
            </Paragraph>
        </Message>
        <Message
            at="2026-01-13T12:00:14.666130Z"
        >
            <Origin>019bb738-d14f-70be-8ec3-b2c6f795fae0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Citibank mail check deposit address”</Action>
            <Action>Fetched https://online.citi.com/JRS/popups/Funds_Availability_Combo.pdf</Action>
            <Action>Searched the web for “Traveling Mailbox forward checks bank deposit setup”</Action>
            <Action>Fetched https://travelingmailbox.com/check-deposit-services</Action>
            <Action>Searched the web for “Traveling Mailbox add bank check deposit settings configure”</Action>
            <Paragraph>Here's what you need:</Paragraph>
            <Heading>Citibank Bank by Mail Addresses</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    For regular mail (USPS):
                </Word>
            </Paragraph>
            <CodeBox>
                {`Citibank
Check Ops — Bank by Mail
P.O. Box 769009
San Antonio, TX 78245`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    For overnight mail (FedEx/UPS):
                </Word>
            </Paragraph>
            <CodeBox>
                {`Citibank
Check Ops — Bank by Mail
100 Citibank Drive Bldg 3
San Antonio, TX 78245`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Source:
                </Word> Citibank's official Funds Availability disclosure document at
                https://online.citi.com/JRS/popups/Funds_Availability_Combo.pdf
            </Paragraph>
            <Heading>Setting Up Traveling Mailbox for Check Deposits</Heading>
            <Paragraph>
                Traveling Mailbox charges $4.95 per check plus postage to mail the check to your bank. All checks are mailed
                via USPS Priority Mail or FedEx so a tracking number is available.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Steps to configure:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        When a check arrives
                    </Word> - Traveling Mailbox scans the envelope front and uploads it to your portal
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Request open and scan
                    </Word> - Have them open the envelope so you can verify it's a check
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Submit a deposit request
                    </Word> - When you see a check appear in your virtual mailbox portal, you simply select "deposit" on the
                    envelope and send the request.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Provide your bank's address
                    </Word> - You'll enter the Citibank Bank by Mail address above. Since Traveling Mailbox uses Priority
                    Mail or FedEx with tracking, use the <Word>
                        <Bold />
                        overnight/physical address
                    </Word> (100 Citibank Drive) for better tracking.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        They process it
                    </Word> - Traveling Mailbox mails endorsed checks with a custom deposit slip to the bank within 24
                    hours, including tracking.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Include your account info
                    </Word> - When setting up the deposit, you'll need to provide your Citibank checking account number so
                    they can prepare the deposit slip correctly.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pro tip:
                </Word> You can send several checks at one time or wait for other checks to arrive so you can consolidate
                and send them to the bank at one time. This will help you save on postage costs.
            </Paragraph>
            <Paragraph>
                Want me to search for any additional details about the Traveling Mailbox interface or deposit slip
                requirements?
            </Paragraph>
        </Message>
    </Chapter>
);
