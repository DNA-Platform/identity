import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 March 2026](2026-03-06)</Date>
        </Dated>
        <Title>[[ 6 March 2026 ]]</Title>
        <Message
            at="2026-03-06T13:57:54.352655Z"
        >
            <Origin>019cc370-ecbf-784d-bd89-cc1c65b8c663</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-03-06T13:59:21.927373Z"
        >
            <Origin>019cc370-ecbf-7022-a918-7180ef6dcd0a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
