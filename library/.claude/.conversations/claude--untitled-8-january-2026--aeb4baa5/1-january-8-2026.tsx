import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Title>[[ 8 January 2026 ]]</Title>
        <Message
            at="2026-01-08T12:44:08.569804Z"
        >
            <Origin>019b9da2-c359-76cf-9e59-3c0738cb7df9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-01-08T12:44:50.179515Z"
        >
            <Origin>019b9da2-c35a-7588-b613-9b198c821131</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
