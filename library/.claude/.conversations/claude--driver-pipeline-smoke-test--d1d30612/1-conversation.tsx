import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/29-the-conversation~code.tsx';
import { Origin } from '../../.manual/8-the-origin~code.tsx';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-21T10:54:09.104392Z"
        >
            <Origin>019ee9d0-f75b-7186-9941-a835925268fb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is an automated smoke test of the /think dispatch pipeline. Please reply with a single short sentence
                confirming you received it.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T10:54:10.473383Z"
        >
            <Origin>019ee9d0-f75b-7546-954b-0811b88b1c29</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The think pipeline received your message and is responding normally.</Paragraph>
        </Message>
    </Chapter>
);
