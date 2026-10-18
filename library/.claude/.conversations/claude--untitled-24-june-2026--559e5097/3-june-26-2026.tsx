import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 June 2026](2026-06-26)</Date>
        </Dated>
        <Title>[[ 26 June 2026 ]]</Title>
        <Message
            at="2026-06-26T11:18:41.976784Z"
        >
            <Origin>019f03a7-39f4-72cc-aa7d-bc7587c95b43</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-26T11:26:55.384458Z"
        >
            <Origin>019f03a7-39f5-7381-9422-de78c02be892</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-26T19:19:13.693631Z"
        >
            <Origin>019f055f-2f0e-751b-8a28-c3fb9f7405f9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-26T19:26:46.422460Z"
        >
            <Origin>019f055f-2f0e-7805-9267-c793d0ccc324</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
