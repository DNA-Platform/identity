import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-19T19:14:57.663437Z"
        >
            <Origin>019e41a9-a13c-7bc3-ac62-c88bfcdc7591</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-19T19:15:46.308525Z"
        >
            <Origin>019e41a9-a13c-777c-9750-28a2d8a1285e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-19T19:17:35.267943Z"
        >
            <Origin>019e41ac-04ea-79b2-99a6-e6161067e583</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-19T19:18:40.281035Z"
        >
            <Origin>019e41ac-04ea-7791-a99e-2e13623c2c06</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-19T19:23:17.351039Z"
        >
            <Origin>019e41b1-3f39-724e-9b0e-bf5b9b2b0fdb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-19T19:24:44.339416Z"
        >
            <Origin>019e41b1-3f39-7935-b0c6-d38e95bf38e8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
