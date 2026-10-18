import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Title>[[ 17 June 2026 ]]</Title>
        <Message
            at="2026-06-17T14:00:11.996590Z"
        >
            <Origin>019ed5e1-dbc0-7237-8bfb-cbd53ccd65a1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-17T14:02:03.945392Z"
        >
            <Origin>019ed5e1-dbc0-758c-9e30-d2fb15985302</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
