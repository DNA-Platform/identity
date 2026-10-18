import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Title>[[ 5 June 2026 ]]</Title>
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
