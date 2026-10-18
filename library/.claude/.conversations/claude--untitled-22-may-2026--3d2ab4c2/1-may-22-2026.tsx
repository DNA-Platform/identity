import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 May 2026](2026-05-22)</Date>
        </Dated>
        <Title>[[ 22 May 2026 ]]</Title>
        <Message
            at="2026-05-22T10:27:52.545958Z"
        >
            <Origin>019e4f3a-21b9-73ba-8e3a-68d87424cdbd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-22T10:28:59.837261Z"
        >
            <Origin>019e4f3a-21b9-7507-bb36-ea6d55df7190</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
