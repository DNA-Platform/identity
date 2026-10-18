import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 February 2026](2026-02-16)</Date>
        </Dated>
        <Title>[[ 16 February 2026 ]]</Title>
        <Message
            at="2026-02-16T13:38:23.727393Z"
        >
            <Origin>019c66ac-48a9-71eb-b470-d1d39554c282</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is this what I should be buying from the letter?</Paragraph>
            <Attachment>Uploaded “IMG_2934.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_2935.jpeg”, whose content the export does not carry</Attachment>
        </Message>
    </Chapter>
);
