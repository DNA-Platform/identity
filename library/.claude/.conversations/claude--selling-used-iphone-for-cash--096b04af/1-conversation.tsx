import { Chapter, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-10-27T19:50:34.504132Z"
        >
            <Origin>3f41c48e-0df9-471e-91d0-bfe24f025aa0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is there a good site that will take like a new iPhone and trade it in for cash?</Paragraph>
        </Message>
        <Message
            at="2024-10-27T19:50:34.504132Z"
        >
            <Origin>5b6edb26-26ee-4e23-bb5b-432717ea0902</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, there are several reputable sites that offer cash for iPhone trade-ins. Some popular options include:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Gazelle - One of the oldest and most established trade-in sites</Line>
                <Line>Swappa - Known for good prices and direct person-to-person sales</Line>
                <Line>ItsWorthMore - Often offers competitive rates</Line>
                <Line>
                    Apple's own Trade-In program - While they give store credit rather than cash, they sometimes have good
                    values
                </Line>
                <Line>Best Buy Trade-In program</Line>
                <Line>Decluttr - Known for quick payments and free shipping</Line>
            </Paragraph>
            <Paragraph>
                For the best deal, I'd recommend checking prices across multiple sites since they can vary significantly.
                Make sure to:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Get quotes from several sites</Line>
                <Line>Read the condition requirements carefully</Line>
                <Line>Check reviews of the service you choose</Line>
                <Line>Document your phone's condition before sending</Line>
            </Paragraph>
            <Paragraph>Would you like me to explain more about how any of these services work?</Paragraph>
        </Message>
    </Chapter>
);
