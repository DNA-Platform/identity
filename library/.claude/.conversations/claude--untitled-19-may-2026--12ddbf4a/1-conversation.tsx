import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[19 May 2026](2026-05-19)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-19T16:23:38.057537Z"
        >
            <Origin>019e410c-c74a-7a42-8d4e-f56c0116cedb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-19T16:24:10.478135Z"
        >
            <Origin>019e410c-c74a-70f8-92cf-aa007d0c59b9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-19T16:27:08.991921Z"
        >
            <Origin>019e410f-fb1a-7e8f-b9b3-6d977c67cdb7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-19T16:27:31.621782Z"
        >
            <Origin>019e410f-fb1a-7d35-832e-c5949f9cc1ac</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-19T16:30:16.675482Z"
        >
            <Origin>019e4112-dc69-759b-a7f1-4528b7f5ecdd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-19T16:30:28.307836Z"
        >
            <Origin>019e4112-dc69-7fa8-92e3-006d3d79960c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
