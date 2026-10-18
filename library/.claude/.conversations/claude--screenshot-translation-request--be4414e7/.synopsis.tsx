import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to perform two tasks related to a Telegram chat screenshot. First, they requested a
            precise English translation of the screenshot's contents. Claude provided a structured translation of the
            full conversation, which involved a transaction between two parties: an outgoing message requesting an order
            for a pack of 30 capsules with readiness to pay, incoming messages confirming a total of 600 lari and
            providing two payment options (a Russian bank transfer and a Georgian bank transfer), an outgoing message
            with an attached PDF receipt file accompanied by emoji stickers, an incoming message confirming the order
            would be fulfilled upon warehouse arrival in Tbilisi, and a closing outgoing thank-you message.
        </Paragraph>
    </Chapter>
);
