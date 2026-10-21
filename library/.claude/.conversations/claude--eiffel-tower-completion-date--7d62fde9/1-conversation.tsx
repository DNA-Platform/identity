import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-18T12:07:34.266193Z"
        >
            <Origin>019edaa1-1b47-71a9-9a96-639dec331a6e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What year was the Eiffel Tower completed? One word answer.</Paragraph>
        </Message>
        <Message
            at="2026-06-18T12:07:36.481543Z"
        >
            <Origin>019edaa1-1b47-7876-a7d7-1f87c5ca6a5a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>1889.</Paragraph>
        </Message>
    </Chapter>
);
