import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 September 2025](2025-09-24)</Date>
        </Dated>
        <Title>[[ 24 September 2025 ]]</Title>
        <Message
            at="2025-09-24T08:19:04.150633Z"
        >
            <Origin>7e46f9c0-c301-44a1-94a4-820ae374204a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-09-24T08:20:11.405245Z"
        >
            <Origin>0aa3ae09-08aa-4fb6-9ec8-943782f81ad7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
