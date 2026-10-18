import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 June 2026](2026-06-28)</Date>
        </Dated>
        <Title>[[ 28 June 2026 ]]</Title>
        <Message
            at="2026-06-28T14:13:24.653984Z"
        >
            <Origin>019f0e93-e8fe-7fe9-a497-9fb0f566057f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-28T14:16:55.772872Z"
        >
            <Origin>019f0e93-e8fe-769a-b35d-b83dba5bdbb6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
