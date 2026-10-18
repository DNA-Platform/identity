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
            at="2026-06-21T10:42:07.725899Z"
        >
            <Origin>019ee9c5-f592-77c9-a197-ef70846ce4d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Reply with the single word OK.</Paragraph>
        </Message>
        <Message
            at="2026-06-21T10:42:08.575940Z"
        >
            <Origin>019ee9c5-f592-74e5-b76a-781defffe803</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>OK</Paragraph>
        </Message>
    </Chapter>
);
