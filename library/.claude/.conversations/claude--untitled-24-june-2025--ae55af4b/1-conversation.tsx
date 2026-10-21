import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 June 2025](2025-06-24)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-06-24T10:33:26.512911Z"
        >
            <Origin>b9d57ce9-d2f2-44ce-ad61-31934f543378</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-06-24T10:33:30.918199Z"
        >
            <Origin>6352b32f-048e-4226-a5e9-3214222eb812</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-06-24T10:34:12.607230Z"
        >
            <Origin>316241bc-3ebd-42f0-b666-21ec6cf225cc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-06-24T10:34:17.878893Z"
        >
            <Origin>92e07834-97ca-4939-8d99-bde00af6e97d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
