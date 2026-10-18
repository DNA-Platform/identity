import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
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
