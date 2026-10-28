import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/29-the-conversation~code.tsx';
import { Attachment } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';
import { Origin } from '../../.manual/8-the-origin~code.tsx';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-05T06:40:45.412397Z"
        >
            <Origin>019e9683-45f4-723f-af8b-ee8a1c6b4512</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-05T06:42:39.388037Z"
        >
            <Origin>019e9683-45f4-74c2-b17f-f79eb0fd0096</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
