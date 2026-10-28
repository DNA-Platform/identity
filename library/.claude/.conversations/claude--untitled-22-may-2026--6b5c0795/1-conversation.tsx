import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/29-the-conversation~code.tsx';
import { Origin } from '../../.manual/8-the-origin~code.tsx';

export default () => (
    <Chapter>
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
