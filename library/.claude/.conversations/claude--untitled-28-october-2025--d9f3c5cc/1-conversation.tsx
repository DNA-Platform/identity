import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 October 2025](2025-10-28)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-10-28T08:16:11.858739Z"
        >
            <Origin>cb3ec27e-42e8-4193-8ab3-52183ffd990e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-10-28T08:17:34.537984Z"
        >
            <Origin>8021bda9-167f-4041-a5b5-f8fd6d36bff3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
