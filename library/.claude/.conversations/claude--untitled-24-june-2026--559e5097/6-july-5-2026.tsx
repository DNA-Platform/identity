import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Title>[[ 5 July 2026 ]]</Title>
        <Message
            at="2026-07-05T19:45:43.456693Z"
        >
            <Origin>019f33d0-9bf8-7ab7-9356-155eead3fb92</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-07-05T19:47:34.926021Z"
        >
            <Origin>019f33d0-9bf8-73dd-a7fb-1d77f234cef3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
