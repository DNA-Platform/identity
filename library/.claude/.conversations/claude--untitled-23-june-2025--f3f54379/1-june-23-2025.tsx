import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 June 2025](2025-06-23)</Date>
        </Dated>
        <Title>[[ 23 June 2025 ]]</Title>
        <Message
            at="2025-06-23T11:46:26.123041Z"
        >
            <Origin>a24d0262-3dcc-4c72-aa30-5dbf45ac4375</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-06-23T11:47:37.774427Z"
        >
            <Origin>4d13c603-ac2e-412f-86ae-3b66886fb4ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
