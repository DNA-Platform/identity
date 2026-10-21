import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-18T12:08:19.502401Z"
        >
            <Origin>019edaa1-cca5-70ea-b545-3db00a7487ce</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What are three prime numbers greater than 100? Just list them.</Paragraph>
        </Message>
        <Message
            at="2026-06-18T12:08:21.568349Z"
        >
            <Origin>019edaa1-cca5-77ce-8b2a-7d3b143e5e28</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>101, 103, 107.</Paragraph>
        </Message>
    </Chapter>
);
