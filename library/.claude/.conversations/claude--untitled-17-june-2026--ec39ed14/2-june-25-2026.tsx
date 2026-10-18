import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 June 2026](2026-06-25)</Date>
        </Dated>
        <Title>[[ 25 June 2026 ]]</Title>
        <Message
            at="2026-06-25T14:41:32.372998Z"
        >
            <Origin>019eff3a-9a8f-7673-a46a-85f8f6133a40</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-25T14:44:22.630148Z"
        >
            <Origin>019eff3a-9a90-7c86-a57d-105febc077a7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
