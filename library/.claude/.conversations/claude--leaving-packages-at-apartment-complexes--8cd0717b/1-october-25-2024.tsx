import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 October 2024](2024-10-25)</Date>
        </Dated>
        <Title>[[ 25 October 2024 ]]</Title>
        <Message
            at="2024-10-25T22:17:54.244438Z"
        >
            <Origin>62b36ee8-3d48-4b8a-b3c0-e58aef66da51</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Will most apartment complexes let me leave someone a package? Will they put it in their mailbox?
            </Paragraph>
        </Message>
        <Message
            at="2024-10-25T22:17:54.244438Z"
        >
            <Origin>3b1e23cb-a10d-4c29-b7e1-44f75ff9b53a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I need to clarify something important: It's actually illegal for anyone except USPS postal workers to place
                items in mailboxes - this is federal law in the United States. Mailboxes are considered federal property and
                are reserved only for mail delivery.
            </Paragraph>
            <Paragraph>As for leaving packages at apartment complexes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Most apartment complexes won't accept packages for residents who aren't expecting them, due to liability
                    concerns
                </Line>
                <Line>
                    Some complexes have package lockers or a front office that accepts packages, but typically only for
                    deliveries from recognized carriers (USPS, UPS, FedEx, etc.)
                </Line>
                <Line>The safest options would be to:</Line>
                <Paragraph>
                    <List />
                    <Line>Arrange delivery when the person is home</Line>
                    <Line>Use an official shipping service</Line>
                    <Line>Leave it with them in person</Line>
                    <Line>Use Amazon lockers if available in your area</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                If you're trying to get something to someone in an apartment complex, what's the specific situation? There
                might be better alternatives I can suggest.
            </Paragraph>
        </Message>
        <Message
            at="2024-10-25T22:19:26.867185Z"
        >
            <Origin>02a8bb1c-7f49-43e5-becb-f9e6ef75d4ff</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It’s a wedding card. I thought I’d slide it under their door but there is a block. I’m here already so I’m
                looking for an easy solution
            </Paragraph>
        </Message>
        <Message
            at="2024-10-25T22:19:26.867185Z"
        >
            <Origin>78d588cc-1321-40c4-a341-438e8fab3d95</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, a wedding card - this is a common situation! Since you're already there, here are some quick solutions:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Call or text them if you have their number - they might be home or nearby</Line>
                <Line>Tape it securely to their door (if complex rules allow this)</Line>
                <Line>Ask a neighbor who knows them to pass it along</Line>
                <Line>
                    If there's a front office/leasing office that's open, explain it's a wedding card - they're often more
                    willing to hold something small and personal like this compared to packages
                </Line>
                <Line>
                    If there's a gap above the door (some doors have this), you might be able to carefully slide it over the
                    top
                </Line>
            </Paragraph>
            <Paragraph>
                Just avoid leaving it on the ground or in an unsecured location where it could get lost or damaged. If none
                of these work, you might need to come back later or mail it through USPS.
            </Paragraph>
        </Message>
        <Message
            at="2024-10-25T22:20:25.396275Z"
        >
            <Origin>577b585b-b9d3-4a7d-9943-58cafabe1483</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>They won’t be home for a week! It’s probably fine but maybe not!</Paragraph>
        </Message>
        <Message
            at="2024-10-25T22:20:25.396275Z"
        >
            <Origin>8cb24972-684f-4a61-bcb6-99ad447936f9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                If they're gone for a week, I wouldn't recommend leaving the card taped to their door - that's a long time
                for it to potentially fall off or get taken! The safest bet is probably just taking it back with you and
                either:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Mailing it through USPS (especially since it's a wedding card - they're likely expecting cards to arrive
                    by mail anyway!)
                </Line>
                <Line>Holding onto it until they return in a week</Line>
            </Paragraph>
            <Paragraph>
                It might feel a bit anticlimactic after making the trip, but better safe than having the card get lost or
                damaged! Sometimes the simplest solution is the best one.
            </Paragraph>
        </Message>
    </Chapter>
);
