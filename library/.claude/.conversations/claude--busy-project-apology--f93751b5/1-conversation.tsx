import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-09-02T16:27:55.113209Z"
        >
            <Origin>ee03b08a-72d3-48b1-907f-195d3f7aba26</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, поомги мне овтетить на эти сообщения веждиво и по англйики: Напиши, что к сожалениюЮ в данный момент я
                загружена проектами и даже не могу оперативно ответить на сообщения. приношу свои извинения за это. Яжелаю
                вам всяческий усехов в созании карт!
            </Paragraph>
        </Message>
        <Message
            at="2025-09-02T16:27:59.535033Z"
        >
            <Origin>6f6953a0-1a81-4ddb-83d2-8bbd4e1589e6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's a polite English response for you:</Paragraph>
            <Paragraph>
                "Thank you for reaching out. I apologize, but I'm currently overwhelmed with projects and haven't been able
                to respond to messages promptly. I'm truly sorry for the delayed response. I wish you all the best with your
                map creation endeavors!"
            </Paragraph>
            <Paragraph>Alternative version (slightly more formal):</Paragraph>
            <Paragraph>
                "I apologize for my delayed response. Unfortunately, I'm currently swamped with various projects and haven't
                been able to keep up with messages as quickly as I'd like. Please accept my sincere apologies for this
                inconvenience. I wish you every success with your mapping projects!"
            </Paragraph>
            <Paragraph>
                Both versions convey your message politely while maintaining a professional tone. Choose whichever feels
                more natural for your communication style and relationship with the recipient.
            </Paragraph>
        </Message>
    </Chapter>
);
