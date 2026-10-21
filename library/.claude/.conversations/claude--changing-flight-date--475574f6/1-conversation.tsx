import { Bold, Chapter, Date, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 October 2026](2026-10-13)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-10-13T13:53:41.699265Z"
        >
            <Origin>01a1358a-17f3-76ff-a1a4-e1b25cebe989</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>If I wanted to change this flight to tonight or tomorrow what would be the best way</Paragraph>
            <Attachment>Uploaded “IMG_3926.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-13T13:53:57.140876Z"
        >
            <Origin>01a1358a-17f3-78f4-9228-787554c83053</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Tonight isn't possible on Norwegian, but tomorrow probably is. The route was announced as twice weekly,
                Wednesday and Saturday from June 27, then Wednesday and Sunday from August 15. Your ticket is on a Saturday,
                so the current days look like Wednesday and Saturday, which makes tomorrow (Wed Oct 14) the one direct
                option. Confirm it on norwegian.com first.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Best way to change it:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Go through Expedia, not Norwegian.
                    </Word> You booked through Expedia, and the airline usually sends agency bookings back to the agent. Tap
                    "Change or cancel booking" and see whether it offers the Wednesday flight. If it doesn't, call Expedia
                    instead of using chat. Phone agents can rebook same-week changes that the app can't.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Expect a fee plus the fare difference.
                    </Word> Class Q is probably a cheaper LowFare-type ticket. Before you agree to anything, compare the
                    total change cost with the price of a new one-way ticket for tomorrow on norwegian.com. With low-cost
                    fares, buying a new ticket and abandoning the old one is sometimes cheaper.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tonight would mean a new ticket with a connection
                    </Word>, for example Lufthansa via Munich or Turkish via Istanbul. That's separate from this booking,
                    and you'd lose most of what you paid for the Saturday flight.
                </Line>
            </Paragraph>
            <Paragraph>
                If you'd like, I can check tomorrow's departure time and current one-way fares on Norwegian.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://1tv.ge/lang/en/news/new-european-low-cost-carrier-norwegian-air-sweden-commences-direct-flights-to-tbilisi/</Reference>
                        1TV Georgia: Norwegian Air Sweden commences flights to Tbilisi
                    </Word>
                </Line>
            </Paragraph>
        </Message>
    </Chapter>
);
