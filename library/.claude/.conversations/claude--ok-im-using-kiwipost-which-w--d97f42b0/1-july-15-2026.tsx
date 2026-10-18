import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 July 2026](2026-07-15)</Date>
        </Dated>
        <Title>[[ 15 July 2026 ]]</Title>
        <Message
            at="2026-07-15T10:57:56.150378Z"
        >
            <Origin>019f656d-bba5-74ca-a082-515114ed731a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, I’m using KiwiPost which we found together, but you can look up and I just paid for their driver. How do
                I know this will be delivered to my apartment
            </Paragraph>
            <Attachment>Uploaded “IMG_3584.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-15T10:58:17.802356Z"
        >
            <Origin>019f656d-bba6-7a84-b6d6-4d8576ec214f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “KiwiPost Kiwi Drive service Tbilisi”</Action>
            <Paragraph>
                It won't be — that's the catch. "Kiwi Drive" isn't home delivery. Per KiwiPost's own site, Drive means you
                pick up packages from preferred drive locations — it's a drive-through pickup point. The note on your screen
                ("we will deliver all parcels addressed to you to the drive") means the parcel gets routed to that drive
                location, where you collect it from your car. And the one you've selected is Didi Dighomi — across the
                river, well away from Saburtalo.
            </Paragraph>
            <Paragraph>
                For actual door delivery, KiwiPost's home option works differently: you receive packages using the Glovo,
                Wolt or Bolt apps — a courier service you activate separately, not the Drive option.
            </Paragraph>
            <Paragraph>
                So your three real options: contact support (support@kiwipost.ge / 032 205 23 24) to reverse the 5 GEL Drive
                fee and reroute; switch to courier delivery through the app's Delivery Service option; or just leave it at
                your default Vazha-Pshavela VII Quarter branch, which is your closest pickup anyway. Not verified whether
                the Drive fee is refundable once paid — that's a support question.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-15T15:30:14.717627Z"
        >
            <Origin>019f6666-fd8b-7da1-a885-490617acab4e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                For the courier option, do you think it says this because I already paid for the other one?
            </Paragraph>
            <Attachment>Uploaded “IMG_3589.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-15T15:30:24.045924Z"
        >
            <Origin>019f6666-fd8d-7663-b30f-05b399f17c21</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the most plausible explanation given the sequence - once a parcel is assigned to a Drive location and
                the fee is paid, the app would have no delivery method left to offer for it - but I can't verify it;
                KiwiPost doesn't document this behavior publicly. Other possibilities: the parcel's status isn't yet at a
                stage where courier can be booked, or home delivery isn't offered for that parcel type.
            </Paragraph>
            <Paragraph>
                The clean way to resolve it is one message to support (support@kiwipost.ge or 032 2 05 23 24, weekdays
                10:00-18:30): give them your customer number KW121157, say you paid the 5 GEL Drive fee by mistake, and ask
                them to cancel it and switch the parcel to home delivery at Sairme Street 3. They can see the parcel's
                actual state, which the app isn't showing you. Note the delivery window either way is 2-3 working days
                within Tbilisi, so Drive pickup at Didi Dighomi is not faster - there's no reason to keep it.
            </Paragraph>
        </Message>
    </Chapter>
);
