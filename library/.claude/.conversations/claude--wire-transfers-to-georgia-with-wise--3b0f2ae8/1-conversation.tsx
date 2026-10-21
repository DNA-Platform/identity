import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 February 2026](2026-02-06)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-06T17:20:33.961994Z"
        >
            <Origin>019c33f8-7878-78ff-8265-618c6c42f26e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I do a wire transfer with Wise? Does it support GEL?</Paragraph>
        </Message>
        <Message
            at="2026-02-06T17:20:47.511536Z"
        >
            <Origin>019c33f8-7878-7a5b-b3d2-b165c9e12d65</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Wise transfer Georgian Lari GEL support”</Action>
            <Paragraph>Yes, Wise supports GEL, but with an important limitation:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Sending TO GEL:
                </Word> Fully supported. You can send GEL to any bank account in Georgia — you just need the recipient's
                full name and IBAN (22 digits, starts with "GE"). You can send up to 2.6 million GEL per transfer, and once
                Wise converts your money, it typically arrives in 0–1 working days.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Sending FROM GEL:
                </Word> Not supported. You currently can't send money from GEL. So you can't initiate a transfer out of a
                GEL balance.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Holding GEL:
                </Word> You can hold funds in Georgian lari (or 40 other currencies) in your Wise account, and you can use
                the Wise multi-currency card to spend GEL.
            </Paragraph>
            <Paragraph>
                So for your situation, Wise works well for converting USD → GEL and sending to a Georgian bank account. It's
                a solid option for funding local accounts in Tbilisi. But if you ever need to move GEL back out, you'd need
                to do that through your Georgian bank directly (e.g., Bank of Georgia or TBC both support outbound SWIFT
                transfers).
            </Paragraph>
        </Message>
    </Chapter>
);
