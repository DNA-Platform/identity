import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Title>[[ 17 June 2026 ]]</Title>
        <Message
            at="2026-06-17T11:41:54.600179Z"
        >
            <Origin>019ed563-41d8-79d9-9811-12212417f33e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-17T11:42:26.823355Z"
        >
            <Origin>019ed563-41d8-7411-876b-c835f24331b8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-17T12:16:04.226890Z"
        >
            <Origin>019ed582-8798-7e0e-80ff-e1767fc14b94</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-17T12:16:04.987063Z"
        >
            <Origin>019ed582-8798-73f1-aa61-1ccf0991ebf1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
