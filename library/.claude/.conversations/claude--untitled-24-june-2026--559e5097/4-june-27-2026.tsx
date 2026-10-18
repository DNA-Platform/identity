import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 June 2026](2026-06-27)</Date>
        </Dated>
        <Title>[[ 27 June 2026 ]]</Title>
        <Message
            at="2026-06-27T11:49:58.561382Z"
        >
            <Origin>019f08ea-3929-785c-b215-3e8aa2cfb068</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-27T11:55:39.200755Z"
        >
            <Origin>019f08ea-392a-7f4e-9b40-61a177bb1422</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-27T12:11:00.871150Z"
        >
            <Origin>019f08fd-7c94-7296-80c8-b48685d50fa9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-27T12:13:58.732368Z"
        >
            <Origin>019f08fd-7c94-7f68-b129-586fee5ef129</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-27T12:43:57.375993Z"
        >
            <Origin>019f091b-a54d-7885-87eb-6cfa80427f90</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-27T12:47:45.082286Z"
        >
            <Origin>019f091b-a54d-7cb5-9565-63ab83aa8a1e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
