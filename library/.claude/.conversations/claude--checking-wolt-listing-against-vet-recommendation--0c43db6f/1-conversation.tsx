import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-16T13:48:15.699909Z"
        >
            <Origin>019c66b5-7b80-749d-a1b2-73f152212832</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You can see a wolt listing and a letter from a vet. Does the listing contain the thing the vet wants me to
                buy
            </Paragraph>
            <Attachment>Uploaded “1771249666394_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1771249673521_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-16T13:48:28.650700Z"
        >
            <Origin>019c66b5-7b80-749d-a1b2-73f210441c4c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — the Wolt listing is <Word>
                    <Bold />
                    Enterol 250
                </Word> (Saccharomyces boulardii), 10 capsules, which matches item #1 on Dr. Korytina's treatment plan:
                Enterol, 1 capsule/sachet once daily for 10–14 days.
            </Paragraph>
            <Paragraph>
                One thing to note: the box has 10 capsules, so if you end up doing the full 14-day course you'd need a
                second box. At ₾12.62 that's pretty cheap either way.
            </Paragraph>
        </Message>
    </Chapter>
);
