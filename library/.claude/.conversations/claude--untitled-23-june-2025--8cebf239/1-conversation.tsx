import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 June 2025](2025-06-23)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-06-23T11:50:28.144376Z"
        >
            <Origin>823c741b-59ff-472b-afaa-4e415bd2c587</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-06-23T11:51:28.751304Z"
        >
            <Origin>2dba4712-5e7a-4c8e-b014-c5b89d087d67</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
