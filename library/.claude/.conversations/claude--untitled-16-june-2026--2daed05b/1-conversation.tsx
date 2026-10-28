import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/29-the-conversation~code.tsx';
import { Origin } from '../../.manual/8-the-origin~code.tsx';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-16T12:25:30.942503Z"
        >
            <Origin>019ed064-d060-73d9-b56a-f714e31cf151</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-16T12:26:01.333022Z"
        >
            <Origin>019ed064-d060-7bcd-a5af-b0da8833a674</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
