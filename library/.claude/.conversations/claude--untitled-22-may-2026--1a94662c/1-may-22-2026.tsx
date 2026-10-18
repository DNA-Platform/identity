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
            at="2026-05-22T11:24:28.996091Z"
        >
            <Origin>019e4f6d-f512-7b7a-a598-bbb5aa072e1d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-22T11:25:00.562639Z"
        >
            <Origin>019e4f6d-f512-7e25-b07a-0fb9bcf31983</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
