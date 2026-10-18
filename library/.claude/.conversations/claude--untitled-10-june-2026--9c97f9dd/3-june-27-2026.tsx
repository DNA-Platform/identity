import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 June 2026](2026-06-27)</Date>
        </Dated>
        <Title>[[ 27 June 2026 ]]</Title>
        <Message
            at="2026-06-27T16:32:15.134836Z"
        >
            <Origin>019f09ec-b2ba-7054-b917-9cbf43b96870</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-27T16:33:07.212952Z"
        >
            <Origin>019f09ec-b2ba-7054-b917-9cc05fb74438</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
