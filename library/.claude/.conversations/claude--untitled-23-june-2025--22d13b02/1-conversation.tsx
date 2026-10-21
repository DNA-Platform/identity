import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-06-23T18:25:20.323435Z"
        >
            <Origin>afbf0f80-0d7a-421f-af91-8c0eca171407</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-06-23T18:25:39.802814Z"
        >
            <Origin>994db5d7-8dab-4820-a858-fe694be17c3b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
