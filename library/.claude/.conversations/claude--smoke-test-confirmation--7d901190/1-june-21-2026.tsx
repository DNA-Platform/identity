import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
        <Message
            at="2026-06-21T10:37:56.495819Z"
        >
            <Origin>019ee9c2-1fb6-72f6-96be-035dbc6282f3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is an automated smoke test of the /think dispatch pipeline. Please reply with a single short sentence
                confirming you received it.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T10:37:57.819924Z"
        >
            <Origin>019ee9c2-1fb6-740f-b8c2-bd11a370cd0c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Received — the /think dispatch pipeline is working, and this is my confirmation.</Paragraph>
        </Message>
    </Chapter>
);
