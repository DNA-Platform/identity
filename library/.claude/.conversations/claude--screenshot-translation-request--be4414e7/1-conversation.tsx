import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-24T08:37:10.841862Z"
        >
            <Origin>019d1efd-9f11-772e-9ff7-77f5b64ae40d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>CLaude, translate this screenshot into English very precisely</Paragraph>
            <Attachment>Uploaded “1774341427091_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-24T08:37:22.135179Z"
        >
            <Origin>019d1efd-9f11-7f4d-beb4-5ea8c388a762</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here is a precise translation of the screenshot:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    &#91;Outgoing message, 3:27 PM ✓✓&#93;
                </Word> Hello! Thank you for your reply.
            </Paragraph>
            <Paragraph>We would like to place an order for a pack of 30 capsules. We are ready to pay today.</Paragraph>
            <Paragraph>Thank you!</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    &#91;Incoming message, 3:29 PM&#93;
                </Word> Total to pay — 600 lari.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    &#91;Incoming message, 3:30 PM&#93;
                </Word> Payment options:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Transfer in RUB: +7 (993) 605-05-97 via Tinkoff, Alexander V.</Line>
            </Paragraph>
            <Paragraph>Rate: 1 GEL = 32 RUB (at the Zolotaya Korona rate).</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Bank transfer to Credo:</Line>
            </Paragraph>
            <Paragraph>GE87CD0360000065476517 (Oksana Maslobrod)</Paragraph>
            <Paragraph>💡 If you need to specify a payment purpose, write: "Payment for services"</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    &#91;Outgoing message, 3:39 PM ✓✓&#93;
                </Word> <Word>
                    <Emphasis />
                    &#91;File attached: receipt_16.03.2026.pdf — 58.7 KB&#93;
                </Word> 🐱🦆 <Word>
                    <Emphasis />
                    (stickers)
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    &#91;Incoming message, 6:22 PM&#93;
                </Word> As soon as the product arrives at our warehouse in Tbilisi, we will contact you 👌
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    &#91;Outgoing message, 7:37 PM ✓✓&#93;
                </Word> Thank you! We will be waiting.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-24T08:37:36.258628Z"
        >
            <Origin>019d1efd-fdeb-7648-b796-80210e61123a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Claude, make a picture with the same dialog but in ENglish</Paragraph>
        </Message>
        <Message
            at="2026-03-24T08:38:14.415032Z"
        >
            <Origin>019d1efd-fdeb-79fa-9352-b1a468c7b857</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used visualize:read me</Action>
            <Action>Used visualize:show widget</Action>
            <Paragraph>
                There you go — the full conversation recreated as an English Telegram chat mockup, matching the layout and
                bubble style of the original screenshot.
            </Paragraph>
        </Message>
    </Chapter>
);
