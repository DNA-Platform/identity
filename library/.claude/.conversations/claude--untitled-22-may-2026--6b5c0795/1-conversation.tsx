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
            at="2026-05-22T11:23:03.932321Z"
        >
            <Origin>019e4f6c-a8ca-7a01-97be-cfb63564deea</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-22T11:23:26.694808Z"
        >
            <Origin>019e4f6c-a8ca-784c-b810-c5e4159c2c3d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
