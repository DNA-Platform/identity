import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-14T12:26:14.125671Z"
        >
            <Origin>019bbc78-86b8-758b-9731-660ba0d040b7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
