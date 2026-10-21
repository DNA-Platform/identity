import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 February 2026](2026-02-21)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-21T22:22:49.341056Z"
        >
            <Origin>019c824c-5c4a-766a-a8a1-6cff6ac2d9f2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In multiple chats, I keep sending you a message and you respond with nothing. What’s going on?
            </Paragraph>
        </Message>
    </Chapter>
);
