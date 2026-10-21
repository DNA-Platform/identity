import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-01T13:58:57.110306Z"
        >
            <Origin>019d4957-98b9-749b-a3a3-2839682619da</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is the address of the credo bank expat branch in tbilisi near saburtalo. I need something I can copy
                into a wire on the JPMorganChase app.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-01T13:58:59.130348Z"
        >
            <Origin>019d4957-98b9-7c18-b775-44d8370829ad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>16 Ilia Chavchavadze Avenue, Tbilisi, Georgia</Paragraph>
        </Message>
    </Chapter>
);
