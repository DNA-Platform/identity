import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-09-29T07:33:09.913163Z"
        >
            <Origin>3b9657c5-4fba-4fee-b7e4-9e7164548b95</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-09-29T07:33:52.457415Z"
        >
            <Origin>11a8daa9-15b7-4d20-9cc4-59aaaa01d24d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
