import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-07T12:00:23.481760Z"
        >
            <Origin>019cc82b-b8ef-7d89-ac9f-e298c2aa2266</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m in saburtalo tbilisi and we need a shop where one could buy a mini fridge and monitors. Can you find a
                big one nearby?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-07T12:00:51.607688Z"
        >
            <Origin>019cc82b-b8ef-7b8d-bc50-d296a2229bd9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched places for “”</Action>
            <Action>Searched places for “”</Action>
            <Action>Searched places for “”</Action>
            <Paragraph>
                Your best bet is <Word>
                    <Bold />
                    Alta at City Mall
                </Word> — it's Georgia's major electronics/appliance chain (think Best Buy equivalent), and there's a
                location right in Saburtalo. They carry fridges, monitors, and basically all home electronics under one
                roof.
            </Paragraph>
            <Action>Used places map display v0</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Alta at City Mall
                </Word> is your go-to — it's Georgia's main big-box electronics and appliance chain, right in Saburtalo.
                They should have both mini fridges and monitors in stock. Open 10am–10pm daily, phone: +995 32 238 00 38.
            </Paragraph>
            <Paragraph>
                One heads-up: reviews mention the staff can be a bit disorganized and the checkout queues get long, so worth
                calling ahead to confirm they have the specific models you're after before making the trip. You can also
                browse their inventory at <Word>
                    <Bold />
                    alta.ge
                </Word> first.
            </Paragraph>
        </Message>
    </Chapter>
);
