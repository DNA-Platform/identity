import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Title>[[ 12 January 2026 ]]</Title>
        <Message
            at="2026-01-12T18:04:19.312562Z"
        >
            <Origin>019bb361-4050-7361-b35c-827dfa4167e7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
