import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 November 2024](2024-11-21)</Date>
        </Dated>
        <Title>[[ 21 November 2024 ]]</Title>
        <Message
            at="2024-11-21T01:07:33.505928Z"
        >
            <Origin>309f1fec-7500-49d7-bd6b-54541ef9c0e3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>See that checkbox? Do I check it? What does it mean!</Paragraph>
            <Attachment>Uploaded “photo”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-21T01:07:33.505928Z"
        >
            <Origin>9ae4060f-0c96-4096-a418-b8ce148e03c3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Looking at the image, I see a checkbox next to "Determining whether I am capable" under "PURPOSE".
                Given this appears to be a Social Security authorization form for collecting records to determine your
                eligibility for benefits, yes, you should check this box.
            </Paragraph>
            <Paragraph>
                The purpose of this authorization is to allow SSA to gather information from the listed sources (medical
                providers, educational institutions, employers, etc.) to evaluate your disability claim - specifically to
                determine whether you are capable of working. Checking this box authorizes them to collect the necessary
                evidence to make their determination.
            </Paragraph>
            <Paragraph>
                This appears to be Form SSA-827 (Authorization to Disclose Information to the Social Security
                Administration), which is a standard part of the SSDI application process. Would you like me to explain more
                about what this authorization allows SSA to do?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-21T01:08:13.178666Z"
        >
            <Origin>747849d1-a016-4d18-b239-27da94ca8a6b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Look at the broader text. It says “only if this applies”</Paragraph>
            <Attachment>Uploaded “photo”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-21T01:08:13.178666Z"
        >
            <Origin>363cb7bf-5d03-44a0-887c-25f2b452e57f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Looking at the complete form, I can see that checkbox is labeled "Determining whether I am capable
                of managing benefits ONLY (check only if this applies)"
            </Paragraph>
            <Paragraph>
                This is different from the general purpose of determining disability eligibility. This specific checkbox is
                about whether you need someone else to manage your benefits (like a representative payee) - it's NOT about
                determining if you qualify for disability.
            </Paragraph>
            <Paragraph>
                Since you are capable of managing your own benefits and finances, you should NOT check this box. This box is
                only for cases where someone might need a third party to receive and manage their benefits for them.
            </Paragraph>
            <Paragraph>
                Thank you for catching this detail - it's important to read the full context of forms carefully.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-21T01:09:51.404455Z"
        >
            <Origin>50040779-5714-41ad-9d28-b1671fa6c32d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>And for this SSA form, do I need a witness in NY if I have a mental health disability?</Paragraph>
            <Attachment>Uploaded “photo”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-21T01:09:51.404455Z"
        >
            <Origin>3b341e34-d3f5-4845-adae-c9bff306cc35</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: No, you don't need a witness in this case. The witness section is typically required when:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>You sign with an "X" instead of a signature</Line>
                <Line>You have a physical inability to sign</Line>
                <Line>Some states require it for specific circumstances</Line>
            </Paragraph>
            <Paragraph>
                Having a mental health disability does not require a witness signature in NY as long as you are capable of
                understanding and signing the document yourself, which you clearly are. You've already signed the form
                properly in the correct place, and your mental health condition doesn't affect your legal ability to sign
                documents on your own behalf.
            </Paragraph>
            <Paragraph>The "WITNESS" section can remain blank unless specifically requested by SSA.</Paragraph>
        </Message>
    </Chapter>
);
