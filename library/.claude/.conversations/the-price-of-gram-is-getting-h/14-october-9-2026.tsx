import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 October 2026](2026-10-09)</Date>
        </Dated>
        <Title>[[ 9 October 2026 ]]</Title>
        <Message
            at="2026-10-09T08:56:45.415818Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>When is Pavel's birthday?</Paragraph>
        </Message>
        <Message
            at="2026-10-09T08:56:51.435477Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>October 10 — he turns 42 tomorrow.</Paragraph>
        </Message>
    </Chapter>
);
