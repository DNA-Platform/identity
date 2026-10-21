import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 May 2026](2026-05-22)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-22T11:20:40.640937Z"
        >
            <Origin>019e4f6a-7880-750c-a1f8-7eaa997502f9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-22T11:21:23.003303Z"
        >
            <Origin>019e4f6a-7880-72c6-bd8a-c2746c70f29f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
